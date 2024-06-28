import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import carIconUrl from '../../assets/delivery-bike.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const vehicleIcon = new L.Icon({
  iconUrl: carIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const RoutingControl = ({ currentPosition, addressPosition, setRouteInstructions }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (!map || !currentPosition || !addressPosition) return;

    if (routingControlRef.current) {
      if (map.hasLayer(routingControlRef.current)) {
        map.removeControl(routingControlRef.current);
      }
    }

    const mainRoutingControl = L.Routing.control({
      waypoints: [
        L.latLng(currentPosition.latitude, currentPosition.longitude),
        L.latLng(addressPosition.latitude, addressPosition.longitude),
      ],
      routeWhileDragging: true,
      createMarker: function () {
        return null;
      },
    }).addTo(map);

    mainRoutingControl.on('routesfound', function (e) {
      const routes = e.routes;
      const instructionsWithCoords = routes[0].instructions.map((instruction, i) => {
        const stepCoordinates = routes[0].coordinates[instruction.index];
        return {
          text: `Step ${i + 1}: ${instruction.text}`,
          coordinates: stepCoordinates,
        };
      });

      setRouteInstructions(instructionsWithCoords);
      console.log(`Number of route instructions: ${instructionsWithCoords.length}`);

    });

    routingControlRef.current = mainRoutingControl;

    return () => {
      if (mainRoutingControl && map.hasLayer(mainRoutingControl)) {
        map.removeControl(mainRoutingControl);
      }
    };
  }, [map, currentPosition, addressPosition, setRouteInstructions]);

  // Thay vì return null, bạn có thể thay thế bằng một phần tử JSX hoặc component
  return <></>; // Hoặc một div trống <div />;
};


const Tracking = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [addressPosition, setAddressPosition] = useState(null);
  const [error, setError] = useState(null);
  const [routeInstructions, setRouteInstructions] = useState([]);
  const [position, setPosition] = useState(null); // Track position change
  const prevPositionRef = useRef(null); // Track previous position using useRef
  const { orderId } = useParams();
  const animatedMarkerRef = useRef(null);
  const mapRef = useRef(null);
  const [showMarker, setShowMarker] = useState(true);
  const [timeLeft, setTimeLeft] = useState(2); // Khoảng thời gian làm mới trong giây

  const fetchOrderDetails = async () => {
    try {
      const url = `http://localhost:8080/api/orders/${orderId}`;
      const response = await fetch(url);
      const order = await response.json();
      const address = order.address;

      if (order.position && order.location) {
        const positionIndex = order.position - 1;
        const location = JSON.parse(order.location);
        
        if (positionIndex >= 0 && positionIndex < location.length) {
          const firstLocation = {
            latitude: location[positionIndex].lat,
            longitude: location[positionIndex].lng,
          };
          setCurrentPosition(firstLocation);
          setPosition(order.position); // Set position
        } else {
          setError('Invalid position index or location data.');
        }
      } else {
        setError('Order position or location data missing.');
      }

      const provider = new OpenStreetMapProvider();
      provider.search({ query: address }).then((result) => {
        if (result && result.length > 0) {
          const { x, y } = result[0];
          setAddressPosition({ latitude: y, longitude: x });
        } else {
          setError('Address not found.');
        }
      }).catch((err) => {
        setError(err.message);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [orderId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchOrderDetails();
      setTimeLeft(2); // Thiết lập lại đồng hồ đếm thời gian là 2 giây
    }, 2000); // Gọi lại fetchOrderDetails mỗi 2 giây

    return () => clearInterval(intervalId);
  }, [orderId]); // Trigger lại khi orderId thay đổi

// Hiệu ứng animation cho marker
useEffect(() => {
  if (routeInstructions.length > 0 && currentPosition) {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index >= routeInstructions.length) {
        clearInterval(intervalId);
        return;
      }

      const nextPos = routeInstructions[index].coordinates;
      setCurrentPosition({ latitude: nextPos.lat, longitude: nextPos.lng });

      if (animatedMarkerRef.current) {
        animatedMarkerRef.current.setLatLng([nextPos.lat, nextPos.lng]);
      }

      index++;
    }, 2000);

    return () => clearInterval(intervalId); // Clear interval when component unmounts or when no longer needed
  }
}, [routeInstructions, currentPosition]);

  return (
    <section className="section-pagetop bg-gray">
      <div className="container">
        <h2 className="title-page">Tracking Position</h2>
        <div className="col-md-12">
          {(currentPosition && addressPosition) ? (
            <>
              <MapContainer
                center={[currentPosition.latitude, currentPosition.longitude]}
                zoom={15}
                style={{ height: '400px', width: '100%' }}
                ref={mapRef}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {showMarker && (
                  <Marker
                    ref={animatedMarkerRef}
                    position={[currentPosition.latitude, currentPosition.longitude]}
                    icon={vehicleIcon}
                  >
                    <Popup>
                      Vị trí hiện tại
                      
                    </Popup>
                  </Marker>
                )}
                <Marker position={[addressPosition.latitude, addressPosition.longitude]}>
                  <Popup>Địa chỉ giao hàng</Popup>
                </Marker>
                <RoutingControl
                  currentPosition={currentPosition}
                  addressPosition={addressPosition}
                  setRouteInstructions={setRouteInstructions}
                />
              </MapContainer>
            </>
          ) : (
            <p>{error}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tracking;
