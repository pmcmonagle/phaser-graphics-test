# Phaser Graphics Test
This project will display three graphics tests written in Phaser. Each of the tests should be performant on mobile devices.
1. 144 sprites that are stacked on top of each other like cards in a deck(so object above covers bottom one, but not completely).
   Every second 1 object from top of stack goes to another stack - animation of moving should be 2 seconds long. Display number of fps in left top corner.
2. A tool that will allow mixed text and images in an easy way (for example displaying text with emoticons or prices with money icon).
   It will come up every 2 seconds a random text with images in random configuration and a random font size.
3. A particle demo that shows an awesome fire effect. Please keep number of images low (max 10 sprites on screen at once).

## Installation
### Requirements
 - NodeJS (12.16.3 or higher)
### Running the Dev Server
 1. Clone this repository the location of your choice
 2. Navigate to the newly cloned repository using your terminal of choice
 3. Run `npm i`
 4. Run `npm run dev`
 5. Access the running dev server at `localhost:9000`
### Running a Build
 1. Clone this repository the location of your choice
 2. Navigate to the newly cloned repository using your terminal of choice
 3. Run `npm i`
 4. Run `npm run build`
 5. Upload the contents of the 'dist' directory to the web server of your choice

## Documentation
### Technology Stack
| Technology | Description          |
|------------|----------------------|
| Phaser-CE  | HTML5 Game Framework |
| TypeScript | Programming Language |
| Webpack    | Module Manager       |
| TS-Loader  | Webpack Plugin       |
| Webpack-Dev-Server | Dev Server   |
