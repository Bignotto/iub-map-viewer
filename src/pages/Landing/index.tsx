import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="container">
        <header>
          <h1>IUB Map Viewer v0</h1>
        </header>
        <main>
          <div className="map-container">
            <MapContainer center={[-22.4938732, -47.458847]} zoom={15}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
        </main>
        <footer>
          <h3>Thiago Bignotto&trade; &copy;2020-2021</h3>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
