import { weatherConfig } from "./service/config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";
const url = "https://api.open-meteo.com/v1/gfs?hourly=temperature_2m&timezone=IST";
const dataProcessor = new DataProcessor(url, weatherConfig.cities);
async function displayTemperatures(city) {
    const data = await dataProcessor.getData(city);
    
}
// async function asd(city, startDate, endDate, endDate, hourFrom, hourTo){
//     const data = await dataProcessor.getTemperatureData(city, startDate, endDate, hourFrom, hourTo);
//     console.log(data);
   
// }
const data = await dataProcessor.getTemperatureData("Rehovot", "2023-02-13", "2023-02-13", 0, 6);
    console.log(data);
// displayTemperatures("Rehovot");
// const a = await asd("Rehovot", "2023-02-12", "2023-02-12", 0, 5);
// console.log(a);



// const dataHoursAr = dataAr.hourly.time.map(t => new Date(t).getHours());z