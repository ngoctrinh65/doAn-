import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useParams } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import carIconUrl from '../../assets/delivery-bike.png'; // Đảm bảo đường dẫn đúng

// Sửa lỗi icon marker với Leaflet trong React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Icon tùy chỉnh cho phương tiện
const vehicleIcon = new L.Icon({
  iconUrl: carIconUrl,
  iconSize: [32, 32], // Điều chỉnh kích thước khi cần thiết
  iconAnchor: [16, 32] // Điều chỉnh neo khi cần thiết
});

const RoutingControl = ({ currentPosition, addressPosition, setRouteInstructions }) => {
  const map = useMap();
  const routingControlRef = useRef(null);
  const routingControlLayerRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    if (!routingControlRef.current) {
      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(currentPosition.latitude, currentPosition.longitude),
          L.latLng(addressPosition.latitude, addressPosition.longitude)
        ],
        routeWhileDragging: true,
        createMarker: function () { return null; }, // Loại bỏ marker mặc định
      });

      routingControlLayerRef.current = routingControlRef.current.addTo(map);

      // Lắng nghe sự kiện tìm thấy đường để ghi nhận hướng dẫn
      routingControlRef.current.on('routesfound', function (e) {
        const routes = e.routes;
        const instructionsWithCoords = routes[0].instructions.map((instruction, i) => {
          const stepCoordinates = routes[0].coordinates[instruction.index];
          return {
            text: `Bước ${i + 1}: ${instruction.text}`,
            coordinates: stepCoordinates
          };
        });
        setRouteInstructions(instructionsWithCoords);
      });
    } else {
      routingControlRef.current.setWaypoints([
        L.latLng(currentPosition.latitude, currentPosition.longitude),
        L.latLng(addressPosition.latitude, addressPosition.longitude)
      ]);
    }

    if (routingControlLayerRef.current) {
      map.fitBounds(routingControlRef.current.getPlan().getWaypoints().map(wp => wp.latLng));
    }

    return () => {
      if (routingControlLayerRef.current) {
        map.removeLayer(routingControlLayerRef.current);
      }
    };
  }, [map, currentPosition, addressPosition, setRouteInstructions]);

  return null;
};

const Tracking = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [addressPosition, setAddressPosition] = useState(null);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5); // Khoảng thời gian làm mới trong giây
  const [routeInstructions, setRouteInstructions] = useState([]);
  const { orderId } = useParams(); // Lấy orderId từ URL
  const animatedMarkerRef = useRef(null);

  const fetchOrderDetails = async () => {
    try {
      const url = `http://localhost:8080/api/orders/${orderId}`;
      const response = await fetch(url);
      if (!response.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        throw new Error('Không thể lấy chi tiết đơn hàng');
      }
      const order = await response.json();
      const address = order.address;

      const provider = new OpenStreetMapProvider();
      provider.search({ query: address }).then((result) => {
        if (result && result.length > 0) {
          const { x, y } = result[0];
          setAddressPosition({ latitude: y, longitude: x });
        } else {
          setError("Không tìm thấy địa chỉ.");
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ latitude, longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Trình duyệt của bạn không hỗ trợ Geolocation");
    }
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      fetchOrderDetails();
      setTimeLeft(5); // Thiết lập lại đồng hồ đếm thời gian là 5 giây
    }

    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

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

      return () => clearInterval(intervalId);
    }
  }, [routeInstructions, currentPosition]);

  return (
    <section className="section-pagetop bg-gray">
      <div className="container">
        <h2 className="title-page">Theo dõi vị trí</h2>
        <div className="col-md-12">
          {(currentPosition && addressPosition) ? (
            <MapContainer
              center={[currentPosition.latitude, currentPosition.longitude]}
              zoom={15}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker ref={animatedMarkerRef} position={[currentPosition.latitude, currentPosition.longitude]} icon={vehicleIcon}>
                <Popup>Vị trí hiện tại của xe</Popup>
              </Marker>
              <Marker position={[addressPosition.latitude, addressPosition.longitude]}>
                <Popup>Địa chỉ giao hàng</Popup>
              </Marker>
              <RoutingControl currentPosition={currentPosition} addressPosition={addressPosition} setRouteInstructions={setRouteInstructions} />
            </MapContainer>
          ) : (
            <p>Đang tải vị trí...</p>
          )}
          {error && <p>Có lỗi xảy ra: {error}</p>}
        </div>
        
      </div>
    </section>
  );
};

export default Tracking;
