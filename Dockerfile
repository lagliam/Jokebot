FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /jokebot
WORKDIR /jokebot
COPY requirements.txt /jokebot/
RUN pip install -r requirements.txt
COPY . /jokebot/