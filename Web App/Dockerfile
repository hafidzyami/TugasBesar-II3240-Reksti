FROM node:slim

# Setting up the work directory
WORKDIR /

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

RUN npm run build

# Starting our application
CMD [ "npm", "start" ]