FROM node:latest
WORKDIR /app
COPY . /app
WORKDIR /app/frontend
RUN npm i
RUN npm run build

WORKDIR /app/backend
RUN npm i
CMD npm run start
EXPOSE 80