FROM node:9.11.1-alpine
LABEL Name="AppName"
LABEL Version="1"
WORKDIR /App
CMD [ "ionic serve" ]
EXPOSE 8100 // default port for ionic apps
EXPOSE 35729
EXPOSE 53703