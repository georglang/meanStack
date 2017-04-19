# MEAN Stack - Boilerplate
---

## This project is a boilerplate of the "MEAN Stack"

#### This Boilerplate includes 
* [**M**ongoDB](https://www.mongodb.com) / ([Mongoose](http://www.mongoosejs.com ))
* [**E**xpress.js](http://expressjs.com)
* [**A**ngular 4](https://angular.io)
* [**N**ode.js](https://nodejs.org)

## Installation
    1. git clone https://github.com/georglang/meanStack.git
    2. cd 
    3. npm install
    

### Development mode
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, Angular build, TypeScript compiler and Express server.

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.


### Dependencies
* [nodemon](https://nodemon.io/): monitors source changes  and automatically restart the server
* [concurrently](https://github.com/kimmobrunfeldt/concurrently): Run multiple commands concurrently


## Client - Angular 4
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

---


## Server - Express.js

Server is listening on port localhost:3000

#### CRUD

Action       | HTTP Verb     |  URL path    |Parameters       | URL path
------------ | ------------ | ------------ | ------------ |------------|
Create new message | POST | /messages |  | localhost:3000/api/messages |
Read list of messages| GET | /messages | | localhost:3000/api/messages |
Read a specific message | GET | /messages | message_id | localhost:3000/api/messages/123 |
Update a specific message | PUT | /messages | message_id | localhost:3000/api/messages/123 |
Delete a specific message | DELETE | /messages | :message_id | localhost:3000/api/messages/123 |

### License
MIT

### Author
* [Georg Lang](https://github.com/georglang)
