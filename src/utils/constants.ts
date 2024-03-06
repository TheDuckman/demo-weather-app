import sunnyPath from "../assets/images/sunny.png";
import cloudyPath from "../assets/images/cloudy.png";
import partlyPath from "../assets/images/partly.png";
import overcastPath from "../assets/images/overcast.png";
import rainPath from "../assets/images/rain.png";
import sunRainPath from "../assets/images/sunRain.png";
import freezeFogPath from "../assets/images/freezeFog.png";
import pelletsPath from "../assets/images/pellets.png";
import patchyRainPath from "../assets/images/patchyRain.png";
import lightSnowPath from "../assets/images/lightSnow.png";
import heavySnowPath from "../assets/images/heavySnow.png";
import snowRainPath from "../assets/images/snowRain.png";
import rainThunderPath from "../assets/images/rainThunder.png";

export const WeatherIconsMap = {
  Sunny: sunnyPath,
  Cloudy: cloudyPath,
};

export const WeatherCodes = {
  "1000": {
    code: 1000,
    day: "Sunny",
    night: "Clear",
    icon: sunnyPath,
  },
  "1003": {
    code: 1003,
    day: "Partly cloudy",
    night: "Partly cloudy",
    icon: partlyPath,
  },
  "1006": {
    code: 1006,
    day: "Cloudy",
    night: "Cloudy",
    icon: cloudyPath,
  },
  "1009": {
    code: 1009,
    day: "Overcast",
    night: "Overcast",
    icon: overcastPath,
  },
  "1030": {
    code: 1030,
    day: "Mist",
    night: "Mist",
    icon: partlyPath,
  },
  "1063": {
    code: 1063,
    day: "Patchy rain possible",
    night: "Patchy rain possible",
    icon: sunRainPath,
  },
  "1066": {
    code: 1066,
    day: "Patchy snow possible",
    night: "Patchy snow possible",
    icon: pelletsPath,
  },
  "1069": {
    code: 1069,
    day: "Patchy sleet possible",
    night: "Patchy sleet possible",
    icon: snowRainPath,
  },
  "1072": {
    code: 1072,
    day: "Patchy freezing drizzle possible",
    night: "Patchy freezing drizzle possible",
    icon: snowRainPath,
  },
  "1087": {
    code: 1087,
    day: "Thundery outbreaks possible",
    night: "Thundery outbreaks possible",
    icon: rainThunderPath,
  },
  "1114": {
    code: 1114,
    day: "Blowing snow",
    night: "Blowing snow",
    icon: heavySnowPath,
  },
  "1117": {
    code: 1117,
    day: "Blizzard",
    night: "Blizzard",
    icon: heavySnowPath,
  },
  "1135": {
    code: 1135,
    day: "Fog",
    night: "Fog",
    icon: cloudyPath,
  },
  "1147": {
    code: 1147,
    day: "Freezing fog",
    night: "Freezing fog",
    icon: freezeFogPath,
  },
  "1150": {
    code: 1150,
    day: "Patchy light drizzle",
    night: "Patchy light drizzle",
    icon: sunRainPath,
  },
  "1153": {
    code: 1153,
    day: "Light drizzle",
    night: "Light drizzle",
    icon: sunRainPath,
  },
  "1168": {
    code: 1168,
    day: "Freezing drizzle",
    night: "Freezing drizzle",
    icon: pelletsPath,
  },
  "1171": {
    code: 1171,
    day: "Heavy freezing drizzle",
    night: "Heavy freezing drizzle",
    icon: pelletsPath,
  },
  "1180": {
    code: 1180,
    day: "Patchy light rain",
    night: "Patchy light rain",
    icon: patchyRainPath,
  },
  "1183": {
    code: 1183,
    day: "Light rain",
    night: "Light rain",
    icon: rainPath,
  },
  "1186": {
    code: 1186,
    day: "Moderate rain at times",
    night: "Moderate rain at times",
    icon: rainPath,
  },
  "1189": {
    code: 1189,
    day: "Moderate rain",
    night: "Moderate rain",
    icon: rainPath,
  },
  "1192": {
    code: 1192,
    day: "Heavy rain at times",
    night: "Heavy rain at times",
    icon: rainPath,
  },
  "1195": {
    code: 1195,
    day: "Heavy rain",
    night: "Heavy rain",
    icon: rainPath,
  },
  "1198": {
    code: 1198,
    day: "Light freezing rain",
    night: "Light freezing rain",
    icon: snowRainPath,
  },
  "1201": {
    code: 1201,
    day: "Moderate or heavy freezing rain",
    night: "Moderate or heavy freezing rain",
    icon: snowRainPath,
  },
  "1204": {
    code: 1204,
    day: "Light sleet",
    night: "Light sleet",
    icon: pelletsPath,
  },
  "1207": {
    code: 1207,
    day: "Moderate or heavy sleet",
    night: "Moderate or heavy sleet",
    icon: pelletsPath,
  },
  "1210": {
    code: 1210,
    day: "Patchy light snow",
    night: "Patchy light snow",
    icon: lightSnowPath,
  },
  "1213": {
    code: 1213,
    day: "Light snow",
    night: "Light snow",
    icon: lightSnowPath,
  },
  "1216": {
    code: 1216,
    day: "Patchy moderate snow",
    night: "Patchy moderate snow",
    icon: lightSnowPath,
  },
  "1219": {
    code: 1219,
    day: "Moderate snow",
    night: "Moderate snow",
    icon: heavySnowPath,
  },
  "1222": {
    code: 1222,
    day: "Patchy heavy snow",
    night: "Patchy heavy snow",
    icon: heavySnowPath,
  },
  "1225": {
    code: 1225,
    day: "Heavy snow",
    night: "Heavy snow",
    icon: heavySnowPath,
  },
  "1237": {
    code: 1237,
    day: "Ice pellets",
    night: "Ice pellets",
    icon: pelletsPath,
  },
  "1240": {
    code: 1240,
    day: "Light rain shower",
    night: "Light rain shower",
    icon: rainPath,
  },
  "1243": {
    code: 1243,
    day: "Moderate or heavy rain shower",
    night: "Moderate or heavy rain shower",
    icon: rainPath,
  },
  "1246": {
    code: 1246,
    day: "Torrential rain shower",
    night: "Torrential rain shower",
    icon: rainPath,
  },
  "1249": {
    code: 1249,
    day: "Light sleet showers",
    night: "Light sleet showers",
    icon: pelletsPath,
  },
  "1252": {
    code: 1252,
    day: "Moderate or heavy sleet showers",
    night: "Moderate or heavy sleet showers",
    icon: snowRainPath,
  },
  "1255": {
    code: 1255,
    day: "Light snow showers",
    night: "Light snow showers",
    icon: snowRainPath,
  },
  "1258": {
    code: 1258,
    day: "Moderate or heavy snow showers",
    night: "Moderate or heavy snow showers",
    icon: snowRainPath,
  },
  "1261": {
    code: 1261,
    day: "Light showers of ice pellets",
    night: "Light showers of ice pellets",
    icon: pelletsPath,
  },
  "1264": {
    code: 1264,
    day: "Moderate or heavy showers of ice pellets",
    night: "Moderate or heavy showers of ice pellets",
    icon: pelletsPath,
  },
  "1273": {
    code: 1273,
    day: "Patchy light rain with thunder",
    night: "Patchy light rain with thunder",
    icon: patchyRainPath,
  },
  "1276": {
    code: 1276,
    day: "Moderate or heavy rain with thunder",
    night: "Moderate or heavy rain with thunder",
    icon: rainThunderPath,
  },
  "1279": {
    code: 1279,
    day: "Patchy light snow with thunder",
    night: "Patchy light snow with thunder",
    icon: rainThunderPath,
  },
  "1282": {
    code: 1282,
    day: "Moderate or heavy snow with thunder",
    night: "Moderate or heavy snow with thunder",
    icon: rainThunderPath,
  },
};
