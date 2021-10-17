# HelloServiceFrontEnd

The Service is build using ReactJS 
It consumes the Backend Hello service Api : "/Hello" (http://localhost:8080/hello) running on port 8080.
It itself is running on port 3000; (http://localhost:3000)

On consuming the API it prints the response on the web page by appending the current date and time before it.

"01/01/2020 12:00 Hello Stakater"

To start the service execute the below command :

npm start

Once the service is up the result can be viewed in at the browser on the below URL :

http://localhost:3000


Deploying the Application to Kubernates.

1. Build the image with name "hello" --> docker build -t hello .
2. Deploy in kubernates --> kubectl apply -f deployment.yaml

Note : In Kubernates the applicatiion will be running on port 31000 not 3000.

