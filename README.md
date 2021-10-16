# Typescript Quick Start

Love NodeJS and Typescript? Use this repo to start quickly, and saving your time. If you think my Repo is useful, go to https://www.jamviet.com/hoc-typescript.html and give me a comment :D

## How to run?

To install nodeJS, go to https://nodejs.org/en/ and download lastest NodeJS version and install to your machine.
To install Typescript, go to your CMD/Terminal and type: `npm install -g typescript`

Okay, you are ready to launch this repo:

- First of all, clone this repo to local machine.
- Second: run cd /your_folder
- Third: run `npm i`

Okay! Now you have many options to start:

`npm start`  to start you app

`npm run build` to build your app using webpack

`npm run dev` to build your app in development environment but using webpack, most of the deverloper time you will use this command. Any change to your source code in `src` folder will be re-compiled by webpack.

`npm run def` to build your app in development environment using typescript (withour webpack) and watch any change in your file.

`npm run serve` to launch your app using nodemon, it will watch any change in dist folder, so you dont need to restart your app during deverlopment time.



To launch your app: Use `npm run serve` command, or `npm start` to run index.js file in `dist` folder, `npm run serve` will watch all your file and restart if need. 

If you made any change to your file, run `npm run dev` if you like webpack, or run `npm run def` if you prefer Typescript compile tool. 

In deverlopment time, you should open 2 windows, one run `npm run dev` and other run ` npm run serve`, one for compile and one for lauching...


## What are dist and src folder?

`dist` is the folder where webpack or Typescript saving file after compiled.

`src` is the folder contain all your source code.


## Why Webpack in TypeScript Quick Start?

Oh! Webpack is a amazing tool for your project, i swear! It optimizes your code, join all path to one file, you sometime don't need to worry about someone steal your source code. 






