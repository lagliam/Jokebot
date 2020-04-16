# Jokebot
Cool little bot that tells knock knock jokes to you. You can tell it some too!

## Screenshots
![Homepage](joker/static/img/Jokebot Main page.png)
![Joke Page](joker/static/img/Joke Screen.png)
![Submit Page](joker/static/img/Submit Joke Screen.png)

## Components

* MySQL database
* Django
* Bootstrap4

## Pre-Requisites
Requires Docker and docker-compose

### Windows installation
https://docs.docker.com/docker-for-windows/install/

### Mac 
https://docs.docker.com/docker-for-mac/install/

## Run development server

### First time setup
```
docker-compose build
docker-compose up -d
docker-compose run web python manage.py migrate
```
The application is now available at `http://localhost:8000`

### Running
If you've completed the first time setup you only need to run
`docker-compose up -d`

#### Troubleshooting
Sometimes the MySQL database hasn't completely spun up before the web container is ready
In this case just restart the web container in docker
