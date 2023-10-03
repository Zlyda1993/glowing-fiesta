# glowing-fiesta

# Steps

## run npm init -y to get my terminal ready to bring in the external libraries.

## run npm inquirer@8.2.4 to get the inquirer library version 8.2.4.

## Start by setting consts for both of the libraries (inquirer and fs) which makes them accessible.

## Set up a parent class called LogoGenerator that houses the different shape options.

## set functions for each shape and pass the shape color, text color, and characters in as paramaters.

## Have each function return a template literal and change the existing shape color, text color, and charactes by plugging in ${paramaters}, such as ${shapeColor}.

## Async the prompts so they will start first after you run node index.js.

## There are 4 prompts. One is a list and the other 3 are inputs.

## They are used to get the shape of choce, color for that shape, the text within the shape, and the text color.

## you set up a const of response that houses the choices made by the user.

## then you set up a const of slelected shape function so it can acurately target the right function based on which shape the user picked.

## Then set the selected shape function with the input paramaters of shape color, text color, and characters as a const called svg content.

## use fs.writeFile to set logo.svg as the name of the file that will be writen when the process is finished, the second paramater is the svg content to tie it in, and then you run an if statement that desplays Generated logo.svg as long as the process worked correctly and it it didn't then it would log error writing logo.svg with the error code.

## lastly outside of all of the functions and constructor class, call the function that starts the prompt so it'll start after running node index.js.

# Walk Through Video:

##  ![Video Walk Through](./Challenge%2010%20Walk%20Through.webm)