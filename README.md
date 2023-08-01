<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ASJordi/simple-weather-app">
    <img src="client/public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Weather App</h3>

  <p align="center">
    Weather App build with HTML, CSS, JavaScript, Express and NodeJS.
    <br />
    <a href="https://github.com/ASJordi/simple-weather-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://weather-app-nodejs.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/ASJordi/simple-weather-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/ASJordi/simple-weather-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://weather-app-nodejs.netlify.app)

Weather App using HTML, CSS and JavaScript for the entire frontend. As well as, NodeJS and Express for the entire server-side.
For this project I’ll use 2 APIs: The first is the OpenWeatherMap API and it will handle and give the data for the weather. The second is the Unsplash API and it will deliver the picture that is going to be used as background, when requesting the weather for a city. The frontend of the application was deployed on Netlify. The backend of the application was deployed on Render.

### Built With

- HTML5
- CSS
- JavaScript
- NodeJS
- Express

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

List of prerequisites to use the application correctly.

- [NodeJS](https://nodejs.org/en/download)
- To check if NPM is installed, run the following command in your terminal:
  ```sh
  npm -v
  ```
- Create an account in [OpenWeatherMap](https://openweathermap.org/api) and [Unsplash](https://unsplash.com/developers) to get your API keys.

### Installation

_This section describes the application installation and configuration process for the frontend and backend._

1. Clone the frontend repository
   ```sh
   git clone https://github.com/ASJordi/simple-weather-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Configure the environment variables in server folder
   ```JS
   // .env file
   WEATHER_API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'
   UNSPLASH_API_KEY = 'YOUR_UNSPLASH_API_KEY'
   ```
4. Set your API URL in the frontend
   ```JS
   // client\public\app.js
   const base_url = <your_api_url>
   ```
5. Run the server
   ```sh
   npm run dev
   ```
6. Run the frontend (with VSCode Live Server)

<!-- USAGE EXAMPLES -->

## Usage

The operation of the application is very simple. It is only necessary to enter the name of the desired city. In automatic the page will show the weather forecast.

[![Product Name Screen Shot][product-screenshot-empty]]()

[![Product Name Screen Shot][product-screenshot]]()

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

Jordi Ayala - [@ASJordi](https://twitter.com/ASJordi)

Project link: [https://github.com/ASJordi/simple-weather-app](https://github.com/ASJordi/simple-weather-app)

[contributors-shield]: https://img.shields.io/github/contributors/ASJordi/simple-weather-app.svg?style=for-the-badge
[contributors-url]: https://github.com/ASJordi/simple-weather-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ASJordi/simple-weather-app.svg?style=for-the-badge
[forks-url]: https://github.com/ASJordi/simple-weather-app/network/members
[stars-shield]: https://img.shields.io/github/stars/ASJordi/simple-weather-app.svg?style=for-the-badge
[stars-url]: https://github.com/ASJordi/simple-weather-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/ASJordi/simple-weather-app.svg?style=for-the-badge
[issues-url]: https://github.com/ASJordi/simple-weather-app/issues
[license-shield]: https://img.shields.io/github/license/ASJordi/simple-weather-app.svg?style=for-the-badge
[license-url]: https://github.com/ASJordi/simple-weather-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ASJordi
[product-screenshot]: client/public/images/screenshot.png
[product-screenshot-empty]: client/public/images/screenshot-empty.png
