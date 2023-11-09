# PROJECT NAME

An application to allow users to find a national park.

## Getting Started

### Requirements

For development, you will only need [Node](http://nodejs.org/) installed in your environment.
Please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Install

    git clone https://github.com/ORG/PROJECT.git
    cd PROJECT
    npm install

### Configure app

Any environment configuration steps.

### Start & watch

    npm run dev
    npm start

### Simple build for production

    npm run build

## Architecture

React, Node.js, MongoDB

### Languages & tools

JavaScript
React
Bootstrap
Node.js
MongoDB
Express
GitHub
VS Code
National Parks Service API

## Change Log

Version 0.0

## Collaborators

Made by Emma Johnson-Barth, Luke McCarthy, and Ava Melchior.
Help from Craig Barkley and Daniel Frey

## User Stories

As an adventurous traveler, I want to be surprised by a random campsite suggestion, so I can experience the thrill of discovering new and unique camping locations I wouldn't have found otherwise.

As a spontaneous camper, I want to see random campsites with available booking options for tonight or the upcoming weekend, so I can make last-minute camping plans and enjoy the spontaneity of the outdoors.

As a camper seeking variety, I want the website to generate random campsites in different geographic regions and environments, so I can diversify my camping experiences by exploring various landscapes and ecosystems.

As a group camper, I want the option to specify the number of campsites I need for my party, and have the website generate random campsites that can accommodate us, so I can plan group camping trips with ease.

As a budget-conscious camper, I want the website to offer random campsites that are affordable and include cost-saving tips, so I can enjoy spontaneous camping trips without breaking the bank.

## Wireframe

[Input Screen](/img/wireframeInput.png)
[Result Screen](/img/wireframeResult.png)

## Domain Model

[Whiteboard](/img/domainModel.jpg)

## Database Schema

 lat: {type: Number, required: true},
 lon: {type: Number, required: true},
 degF: {type: Number, required: true},
 parkName: {type: String, required: true},
 stateName: {type: String, required: true},
 cityName: {type: String, required: true},
 images: {type: Array, required: true}
