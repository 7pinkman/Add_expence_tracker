//creating a server using node js
const http = require('http');


/*
http.createServer(function(req,res)
{
    console.log(req);
});
//after excuting this code the terminal go for next line for next command to run
//if we run the uppere code now then in console it prints nothing.
*///it takes requestlisteners as an argument,requestlistener is simply a function that will execute every incoming request.
//we can explicitly create a function as a argument put it in createServer() function or we can pass a anonymous function into it.
//it means if request come please execute the function.
//it basically createserver callback function as it's called,it's called by nodejs whenever a request reaches our server
//this upper function actually returns a server as we did not send any request to server and we also don't know where the server is.
//so let's create a server and store in a variable
const server= http.createServer((req,res) => {
    console.log(req);
})
//createServer method returns a server.
server.listen(3000);//listen actaully start a process where node js will not immediately exit our script but where node js will instead keep 
//this running ,to listen,that's why the name like this for incoming requestes,3000 is a port we want to listen 
//now in local development we will pass a local host in  local machine by default,let's say we take 3000
//after exceuting this code we see that cursor goes to next line and it stops,because the process  here is still runing as we are now going to 
//ongoing looping process where this will keep on listening for requests
//we all need a web server that will keep on listening for req.

//now if we go on any web browser and check for localhost:3000.then in terminal we can see lots of o/p,as the the request being logged in the console.
 