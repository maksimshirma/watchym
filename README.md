# 🚀 Welcome to my project!

Hello! This is the pet project called "watchym".

This app is designed to keep track of your income and expenses.

Technologies, that were used in this project: react, javascript, docker, express, nodejs.

Also there were used some helpers: prettier, eslint, yup, lodash, axios, nanoid, chalk.

To run this project you need to install Docker Desctop and MongoDMCompass.

After you copied code, you need to change the mongoUri in the config of server on yours.

Then enter the commands:

docker build -t name_of_your_image .

docker run -d -p 8080:8080 --name name_of_your_container --rm name_of_your_container

To stop container enter - docker stop name_of_your_container

To remove image enter - docker rmi name_of_your_image
