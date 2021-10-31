# Jokebot

## Setup
### Docker

#### First Time Setup
1. Run the `create-database.sh` script to create the database. Login to the database using your favorite app and create a `jokes` database.
1. Build the docker image `docker build -t jokebot .`
1. Run the docker `docker run -p 80:80 -d --name jokebot jokebot`
