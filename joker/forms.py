from django import forms
from .models import Jokes


class JokeForm(forms.ModelForm):
    class Meta:
        model = Jokes
        fields = ["whos_there", "response"]
