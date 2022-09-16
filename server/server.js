const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const whiteList = "http://127.0.0.1:5500";

app = express();
app.use(
    cors({
        origin: whiteList,
    })
); // origin: * --> origin: mywebsite.com

app.use(express.json());

//Varaibles
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

let baseURL = `https://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}&units=metric`;
let unsplashURL = `https://api.unsplash.com/search/photos?page=1&orientation=landscape&client_id=${UNSPLASH_API_KEY}`;

let cache = {};

//Boilerplate express app
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to the API" });
});

//Route to get weather data
app.get("/api/:city", async (req, res) => {
    let city = req.params.city;
    try{
        let requestData = await axios.get(`${baseURL}&q=${city}`);
        let data = requestData.data;

        //Parsed response for relevant data
        let response = {
            temp: data.main.temp,
            weather: data.weather[0],
            name: data.name,
            country: data.sys.country,
        };

        //Unsplash API call
        let label = data.weather[0].main.toLowerCase();
        let name = data.name.toLowerCase();
        let query = label + "," + name;

        let index = Math.floor(Math.random() * 11);

        //Request to image
        if(Object.keys(cache).includes(query)){
            response.image = cache[query][index];
        }else{
            let pictureRequest = await axios.get(`${unsplashURL}&query=${query}`);
            cache[query] = pictureRequest.data.results;
            response.image = pictureRequest.data.results[index];
        }
        // console.log(response);
        res.json(response);
    } catch(err){
        // console.error(err);
        res.status(error.response.status || 500);
        res.json({ error: error.response.data });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));