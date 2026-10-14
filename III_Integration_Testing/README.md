# What is this:

The repository contains a library for simple addition, subtraction, multiplication, division, checking if the number is even and hex to rgb converted. The server.js file gives aswer to simple integer addition, can check if int number is even or not with simple bool value. Converts hex value to RGB JSON value on localhost.<br>

The testing file is for Mocha and check that the main.js works as intended, using Integration Testing basics with assert commands.

# Before starting:

### Initialize

npm init -y

### Add Dependencies

npm install --save-dev mocha chai

### Install express

npm install express

## To use software:

### To Run tests from the root or inside the folder

npm run test

### To Run Server code from root

node src/server.js

### To Run the addition and hextoRgb
All of the following lines can be run on the address bar once the server runs correctly.<br>
How to run the simple addition<br>
http://localhost:3000/add?a=2&b=3
How to run the hex to RGB<br>
http://localhost:3000/hexToRgb?hex=F54927<br>
How to run the simple addition<br>
http://localhost:3000/isEven?a=3