const weatherBigCitys = [
    {
        "request": {
          "type": "LatLon",
          "query": "Lat 40.78 and Lon -73.97",
          "language": "en",
          "unit": "m"
        },
        "location": {
          "name": "Guttenberg",
          "country": "United States of America",
          "region": "New Jersey",
          "lat": "40.792",
          "lon": "-74.004",
          "timezone_id": "America/New_York",
          "localtime": "2022-08-11 08:03",
          "localtime_epoch": 1660204980,
          "utc_offset": "-4.0"
        },
        "current": {
          "observation_time": "12:03 PM",
          "temperature": 22,
          "weather_code": 296,
          "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0017_cloudy_with_light_rain.png"
          ],
          "weather_descriptions": [
            "Light Rain"
          ],
          "wind_speed": 4,
          "wind_degree": 10,
          "wind_dir": "N",
          "pressure": 1014,
          "precip": 0.2,
          "humidity": 68,
          "cloudcover": 75,
          "feelslike": 25,
          "uv_index": 5,
          "visibility": 16,
          "is_day": "yes"
        }
      },
      {
        "request": {
          "type": "City",
          "query": "London, United Kingdom",
          "language": "en",
          "unit": "m"
        },
        "location": {
          "name": "London",
          "country": "United Kingdom",
          "region": "City of London, Greater London",
          "lat": "51.517",
          "lon": "-0.106",
          "timezone_id": "Europe/London",
          "localtime": "2022-08-11 15:16",
          "localtime_epoch": 1660230960,
          "utc_offset": "1.0"
        },
        "current": {
          "observation_time": "02:16 PM",
          "temperature": 31,
          "weather_code": 113,
          "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
          ],
          "weather_descriptions": [
            "Sunny"
          ],
          "wind_speed": 4,
          "wind_degree": 102,
          "wind_dir": "ESE",
          "pressure": 1020,
          "precip": 0,
          "humidity": 27,
          "cloudcover": 0,
          "feelslike": 29,
          "uv_index": 8,
          "visibility": 10,
          "is_day": "yes"
        }
      },
      {
        "request": {
          "type": "City",
          "query": "New York, United States of America",
          "language": "en",
          "unit": "m"
        },
        "location": {
          "name": "New York",
          "country": "United States of America",
          "region": "New York",
          "lat": "40.714",
          "lon": "-74.006",
          "timezone_id": "America/New_York",
          "localtime": "2022-08-11 10:21",
          "localtime_epoch": 1660213260,
          "utc_offset": "-4.0"
        },
        "current": {
          "observation_time": "02:21 PM",
          "temperature": 24,
          "weather_code": 116,
          "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
          ],
          "weather_descriptions": [
            "Partly cloudy"
          ],
          "wind_speed": 9,
          "wind_degree": 70,
          "wind_dir": "ENE",
          "pressure": 1013,
          "precip": 0,
          "humidity": 88,
          "cloudcover": 75,
          "feelslike": 26,
          "uv_index": 5,
          "visibility": 11,
          "is_day": "yes"
        }
      },
      {
        "request": {
          "type": "City",
          "query": "Singapore, Singapore",
          "language": "en",
          "unit": "m"
        },
        "location": {
          "name": "Singapore",
          "country": "Singapore",
          "region": "",
          "lat": "1.293",
          "lon": "103.856",
          "timezone_id": "Asia/Singapore",
          "localtime": "2022-08-11 22:21",
          "localtime_epoch": 1660256460,
          "utc_offset": "8.0"
        },
        "current": {
          "observation_time": "02:21 PM",
          "temperature": 29,
          "weather_code": 116,
          "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
          ],
          "weather_descriptions": [
            "Partly cloudy"
          ],
          "wind_speed": 15,
          "wind_degree": 120,
          "wind_dir": "ESE",
          "pressure": 1008,
          "precip": 0,
          "humidity": 84,
          "cloudcover": 75,
          "feelslike": 34,
          "uv_index": 1,
          "visibility": 10,
          "is_day": "no"
        }
      },
      {
        "request": {
          "type": "City",
          "query": "Dubai, United Arab Emirates",
          "language": "en",
          "unit": "m"
        },
        "location": {
          "name": "Dubai",
          "country": "United Arab Emirates",
          "region": "Dubai",
          "lat": "25.252",
          "lon": "55.280",
          "timezone_id": "Asia/Dubai",
          "localtime": "2022-08-11 18:22",
          "localtime_epoch": 1660242120,
          "utc_offset": "4.0"
        },
        "current": {
          "observation_time": "02:22 PM",
          "temperature": 41,
          "weather_code": 113,
          "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
          ],
          "weather_descriptions": [
            "Sunny"
          ],
          "wind_speed": 20,
          "wind_degree": 320,
          "wind_dir": "NW",
          "pressure": 992,
          "precip": 0,
          "humidity": 38,
          "cloudcover": 0,
          "feelslike": 58,
          "uv_index": 9,
          "visibility": 10,
          "is_day": "yes"
        }
      }
]

export default weatherBigCitys