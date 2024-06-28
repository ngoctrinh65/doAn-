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

// Inside RoutingControl component
const RoutingControl = ({ currentPosition, addressPosition, setRouteInstructions }) => {
const map = useMap();
const routingControlRef = useRef(null);
// Automatically reload page when there are changes in currentPosition or addressPosition

useEffect(() => {
  if (!map) return;

  if (routingControlRef.current) {
    map.removeControl(routingControlRef.current);
  }

  // Check if currentPosition and addressPosition are valid before using them
  if (currentPosition && currentPosition.latitude && currentPosition.longitude &&
      addressPosition && addressPosition.latitude && addressPosition.longitude) {

    // Routing control for the main route
    const mainRoutingControl = L.Routing.control({
      waypoints: [
        L.latLng(currentPosition.latitude, currentPosition.longitude),
        L.latLng(addressPosition.latitude, addressPosition.longitude),
      ],
      routeWhileDragging: true,
      createMarker: function () {
        return null;
      }, // Remove default markers
    }).addTo(map);

    // Routing control for the blue route
    const blueRoutingControl = L.Routing.control({
      waypoints: [
        L.latLng(10.8231, 106.6297),  // Coordinates for the blue route start
        L.latLng(addressPosition.latitude, addressPosition.longitude),
      ],
      lineOptions: {
        styles: [{ color: 'blue', opacity: 0.6, weight: 4 }],
      },
      routeWhileDragging: false,
      createMarker: function () {
        return null;
      }, // Remove default markers
    }).addTo(map);

    // Listen for route found event to capture instructions
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
    });

    // Listen for route found event for the blue route
    blueRoutingControl.on('routesfound', function (e) {
      const routes = e.routes;
      const instructionsWithCoords = routes[0].instructions.map((instruction, i) => {
        const stepCoordinates = routes[0].coordinates[instruction.index];
        return {
          text: `Blue Route - Step ${i + 1}: ${instruction.text}`,
          coordinates: stepCoordinates,
        };
      });

      // Optionally, you can set the blue route instructions state if needed
      // setBlueRouteInstructions(instructionsWithCoords);
    });

    return () => {
      if (mainRoutingControl) {
        map.removeControl(mainRoutingControl);
      }
      if (blueRoutingControl) {
        map.removeControl(blueRoutingControl);
      }
    };
  }
}, [map, currentPosition, addressPosition, setRouteInstructions]);

return null;
};

const Tracking = () => {
const [currentPosition, setCurrentPosition] = useState(null);
const [addressPosition, setAddressPosition] = useState(null);
const [error, setError] = useState(null);
const [routeInstructions, setRouteInstructions] = useState([]);
const { orderId } = useParams();
const animatedMarkerRef = useRef(null);

useEffect(() => {
  const fetchOrderDetails = async () => {
    try {
      const url = `http://localhost:8080/api/orders/${orderId}`;
      const response = await fetch(url);
     
      const order = await response.json();
      const address = order.address;

      // Lấy vị trí từ order.position và xác định mảng từ order.location
      if (order.position && order.location) {
        const positionIndex = order.position - 1; // Vị trí trong order.position
        const location = JSON.parse(order.location);
        
        if (positionIndex >= 0 && positionIndex < location.length) {
          const firstLocation = {
            latitude: location[positionIndex].lat,
            longitude: location[positionIndex].lng,
          };
          setCurrentPosition(firstLocation);
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

  fetchOrderDetails();
}, [orderId]);

return (
  <section className="section-pagetop bg-gray">
    <div className="container">
      <h2 className="title-page">Tracking Position</h2>
      <div className="col-md-12">
        {(currentPosition && addressPosition) ? (
          <MapContainer
            center={[currentPosition.latitude, currentPosition.longitude]}
            zoom={15}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              ref={animatedMarkerRef}
              position={[currentPosition.latitude, currentPosition.longitude]}
              icon={vehicleIcon}
            >
              <Popup>Vị trí hiện tại</Popup>
            </Marker>
            <Marker position={[10.8231, 106.6297]}>
              <Popup>Địa chỉ shop</Popup>
            </Marker>
            <Marker position={[addressPosition.latitude, addressPosition.longitude]}>
              <Popup>Địa chỉ giao hàng</Popup>
            </Marker>
            <RoutingControl
              currentPosition={currentPosition}
              addressPosition={addressPosition}
              setRouteInstructions={setRouteInstructions}
            />
          </MapContainer>
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  </section>
);
};

export default Tracking;

