import React, { useEffect, useState } from 'react';
import { Map } from './components/Map';

import 'leaflet/dist/leaflet.css';

const App = () => {
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await fetch(
          'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
        );
        const data = await res.json();
        setEvents(data.events);
      } catch (err) {
        console.error(err);
      }
    };
    getEvents();
  }, []);

  return (
    <div className='container'>
      <h1>Map</h1>
      <Map events={events} />
    </div>
  );
};

export default App;
