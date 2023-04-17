FROM node:alpine
WORKDIR '/miracle-hub'

COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "start"]