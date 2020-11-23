export const events = [
  {
    id: 'EONET_5165',
    title: 'Tropical Cyclone Gati',
    description: '',
    link: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_5165',
    categories: [
      {
        id: 10,
        title: 'Severe Storms',
      },
    ],
    sources: [
      {
        id: 'GDACS',
        url:
          'https://www.gdacs.org/Cyclones/report.aspx?eventid=1000746&amp;eventtype=TC',
      },
      {
        id: 'JTWC',
        url: 'https://www.metoc.navy.mil/jtwc/products/io0320.tcw',
      },
    ],
    geometries: [
      {
        date: '2020-11-21T18:00:00Z',
        type: 'Point',
        coordinates: [55.5, 10.8],
      },
      {
        date: '2020-11-22T00:00:00Z',
        type: 'Point',
        coordinates: [53.8, 10.6],
      },
      {
        date: '2020-11-22T06:00:00Z',
        type: 'Point',
        coordinates: [52.5, 10.3],
      },
      {
        date: '2020-11-22T12:00:00Z',
        type: 'Point',
        coordinates: [51.5, 10.4],
      },
    ],
  },
  {
    id: 'EONET_5162',
    title: 'Wildfire - SE of Parowan, Utah - United States',
    description: '',
    link: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_5162',
    categories: [
      {
        id: 8,
        title: 'Wildfires',
      },
    ],
    sources: [
      {
        id: 'PDC',
        url: 'http://emops.pdc.org/emops/?hazard_id=116718',
      },
    ],
    geometries: [
      {
        date: '2020-11-19T09:40:00Z',
        type: 'Point',
        coordinates: [-112.682747893, 37.600131437],
      },
    ],
  },
  {
    id: 'EONET_5163',
    title: 'Wildfires - Washoe County (Pinehaven Fire), Nevada, United States',
    description: '',
    link: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_5163',
    categories: [
      {
        id: 8,
        title: 'Wildfires',
      },
    ],
    sources: [
      {
        id: 'PDC',
        url: 'http://emops.pdc.org/emops/?hazard_id=116699',
      },
    ],
    geometries: [
      {
        date: '2020-11-18T13:59:00Z',
        type: 'Point',
        coordinates: [-119.86343, 39.46996],
      },
    ],
  },
];
