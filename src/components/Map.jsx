import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [6.514193, 3.308678];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "300px", width: "100%" }}
        
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Lagos, Nigeria 🌍</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
