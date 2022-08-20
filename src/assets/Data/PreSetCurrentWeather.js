const preSetCurrentWeather = {
    coord: {
      lon: -0.1257,
      lat: 51.5085,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    base: 'stations',
    main: {
      temp: 28.37,
      feels_like: 27.65,
      temp_min: 25.83,
      temp_max: 29.06,
      pressure: 1002,
      humidity: 35,
    },
    visibility: 10000,
    wind: {
      speed: 5.14,
      deg: 250,
    },
    clouds: {
      all: 100,
    },
    dt: 1660575810,
    sys: {
      type: 1,
      id: 1414,
      country: 'GB',
      sunrise: 1660538751,
      sunset: 1660591466,
    },
    timezone: 3600,
    id: 2643743,
    name: 'London',
    cod: 200,
  }

  export default preSetCurrentWeather;