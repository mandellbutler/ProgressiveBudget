# Progressive Budget

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Technology](#technology)


# Description
Progressive Budget is a web application that allows users to perform the much needed task of monitoring their bank account, without interruption. This progressive web application actively caches user data and ensures full app functionality, even in instances when internet connection is unavailable. Users can have peace of mind, knowing their budget is always available and up to date, with the Progessive Budget app.  


# Installation
## For local installation:

  * clone the Github repository and add it to your local repo via your choice code-editing software (ie Visual Studio Code).

  * Open Integrated Terminal in VS Code and run the following commands:

    * 'npm install'

    * 'npm run seed'

    * 'npm start' 

  * Once the "App running on port 7540" confirmation has been recieved, visit "localhost: 7540" in the internet browser. 



## For the deployed version of the application:

  * [click the link] https://myprogressivebudget.herokuapp.com/



# Usage
This application allows fiscally consciouss users to closely monitor their transactions without interruption. Once the application has been installed and opened, the user is presented with a form to input a Transaction Name and Amount. Once the information has been entered, click on the 'Add Funds' or 'Subtract Funds' buttons, and the budget will adjust accordingly.

<img src="public/images/home.png" width="400">

Thanks to the application's intuitive design, with a few simple clicks, the user will have the ability to:

* Enter deposits offline

* Enter expenses offline

* View an account balance, whether on or offline



![Add Workout](public/images/entry.gif)



# Technology
This application was made possible with the use of the follow dev tools:
* Node.js
* Express.js
* MongoDb
* Mongoose
* Mongo Atlas
* Heroku