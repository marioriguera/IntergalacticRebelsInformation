FROM node:20.14.0-bullseye-slim

WORKDIR /project

RUN npm install -g @angular/cli

COPY package.json package-lock.json ./
RUN npm i

COPY . .

EXPOSE 4200
CMD ["npm", "start"]
