# Jokebot
Cool little bot that tells knock knock jokes to you.

## Installation
Requires Docker and docker-compose

```
docker-compose build
docker-compose up -d
docker-compose run web python manage.py migrate
```
Open `http://localhost:8000`