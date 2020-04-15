from django.db import models

class Jokes(models.Model):
    whos_there = models.CharField(max_length=200)
    response = models.CharField(max_length=200)

    def __str__(self):
        return self.whos_there, self.response
