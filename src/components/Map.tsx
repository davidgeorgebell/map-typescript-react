import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export const Map = ({ events }: any) => {
  const fireMarkers = events.map((evt: any) => {
    if (evt.categories[0].id === 8) {
      return (
        <Marker
          key={evt.id}
          position={[
            evt.geometries[0].coordinates[1],
            evt.geometries[0].coordinates[0],
          ]}
        />
      );
    }
    return null;
  });
  //   const markers = events.map((evt: any) => {
  //     return (
  //       <Marker
  //         position={[
  //           evt.geometries.map((g: any) => g.coordinates[1]),
  //           evt.geometries.map((g: any) => g.coordinates[0]),
  //         ]}
  //       />
  //     );
  //   });

  return (
    <MapContainer
      center={[37.600131437, -112.682747893]}
      zoom={12}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {fireMarkers}
      {/* {markers} */}
    </MapContainer>
  );
};
