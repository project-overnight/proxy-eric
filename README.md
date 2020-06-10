# Project Overnight Proxy

> A proxy that brings together four different service modules, listed below:

## Related Projects

  - **Photo Banner Module:** https://github.com/project-overnight/po-photo-banner
  - **Description Module:** https://github.com/project-overnight/po-description
  - **Reviews Module:** https://github.com/project-overnight/po-reviews
  - **Reservation Module:** https://github.com/project-overnight/po-reservations

## Demo

![Project Overnight Proxy Demo](demo/demo.gif)

## Usage

**Install dependencies**
> npm install

**Set up environment variables**
- Make a copy of .env_sample and configure the environment variables as necessary.
- Save as .env and ensure it is added to .gitignore.

**Start up the proxy server**
> npm start
*Keep in mind that you must have all four services running in order for the proxy to load successfully.*

## Style Guide
This module follows [Airbnb style guide](https://github.com/airbnb/javascript)