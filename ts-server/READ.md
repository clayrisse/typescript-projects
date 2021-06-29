npm init -y
tsc --init
npm install concurrently nodemon

tsconfig:
"outDir": "./build",                           
"rootDir": "./src",


ts, does no how to handle middleware entirely, I don't know what is happening inside of the middleware functions. the interface that defines the "response" has the "body" maked as ":any", so that means either could exists or not...  ...aaaaaaaaaand thats why it does no report as an error



npm install reflect-metadata