from django.shortcuts import render, redirect
from .models import Jokes
from .forms import JokeForm
from django.contrib import messages
from random import randint


def home(request):
    if request.method == 'POST':
        form = JokeForm(request.POST or None)
        if form.is_valid():
            form.save()
        messages.success(request, "Joke added!")
        return render(request, 'home.html', {})

    return render(request, 'home.html', {})


def about(request):
    return render(request, 'about.html', {})


def get_joke(request):
    # default type is GET
    joke_count = Jokes.objects.count()
    if joke_count > 1:
        random_joke_id = randint(1, joke_count)
        joke = Jokes.objects.get(pk=random_joke_id)
        return render(request, 'joke.html', {'joke': joke})
    elif joke_count == 1:
        joke = Jokes.objects.first()
        return render(request, 'joke.html', {'joke': joke})
    else:
        resp = "I don’t know any jokes yet, but I would love to learn one from you, "\
                                  "can you tell me a Knock knock joke?"
        messages.warning(request, resp)
        return redirect('home')

