# Project Overnight

Project Overnight is a property rental application that allows users to learn about the property via descriptions and images, make reservations, and explore reviews.

## Related Projects

This proxy brings together the following modules:
  - Photo Banner Module: https://github.com/project-overnight/po-photo-banner
  - Description Module: https://github.com/project-overnight/po-description
  - Reviews Module: https://github.com/project-overnight/po-reviews
  - Reservation Module: https://github.com/project-overnight/po-reservations

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

*You must have all four services (modules) running in order for the proxy to load successfully. Please refer to the links in the "Related Projects" section to find out how to start the individual services.*

## Style Guide
This module follows [Airbnb style guide](https://github.com/airbnb/javascript)