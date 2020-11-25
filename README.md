# CBWA - CA
##Table of contents
*[General Information](#General-Information)
*[Setting it up](#Setting-it-up)
*[Technologies](#Technologies)
*[Changelog](#Changelog)
*[Roadmap](#Roadmap)
*[Author information](#Author-Information)

##General information
The current project is and API that is able to create users, issues and projects. Additionally, it stores the data created in a database called Mongo DB. Initially, it was deployed in Heroku. It is coded in a way that prevents the duplication of data, it can be updated as much as needed and it does not allow for information to be created or updated without all the fields. Meaning that all the fields are required fields. 

##Set up
npm install nodejs
npm install --save-dev nodemon 
npm install express
npm .env
npm install nodemon
npm install heroku 
npm install --save mongodb       


##Technologies

The project was done using different technologies. It was coded using Visual Studio Code, the database was created using Mongo DB but managed by Robo 3T. It was deployed in Heroku and Docker. By dockerizing the API, any user is able to run it from any PC connected to the internet. Its development was monitored using Postman. All of them running the latest verion to this date 25/11/2020


##Changelog
From 20/10/2020 To 25/10/2020 
Coding of the API
Deployed in Heroku
Database creation and management
From 15/11/2020 To 25/11/2020 
Avoiding duplicate entries.
Dockerizing.
Due dates

##Roadmap
This is a work in progress API. In the future, serveral changes need to be done for it to reach production level. It will have its front-end and it will have a test unit before arriving the production phase.

##Author info
This project was created by José Luis Alvarado Carranza. Student ID 2020092 at CCT College Dublin for the course of Cloud Based Web Applications. It is to obtain a Higher Diploma In Science in Computing. Contact me at joselalvarado.c2387@gmail.com