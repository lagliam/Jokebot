<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Joke } from '../models/Joke';

const jokes = ref<Joke[]>([]);
const currentJoke = ref<Joke | null>(null);
const showPunchline = ref(false);
const showForm = ref(false);
const newJoke = ref<Joke>({ setup: '', punchline: '' });

const fetchJokes = async () => {
  const response = await fetch('/api/jokes');
  jokes.value = await response.json();
};

const fetchRandomJoke = async () => {
  const response = await fetch('/api/jokes/random/joke');
  currentJoke.value = await response.json();
  showPunchline.value = false;
};

const submitJoke = async () => {
  const response = await fetch('/api/jokes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newJoke.value),
  });
  if (response.ok) {
    newJoke.value = { setup: '', punchline: '' };
    showForm.value = false;
    await fetchJokes();
  }
};

onMounted(async () => {
  await fetchJokes();
  await fetchRandomJoke();
});
</script>

<template>
  <div class="joke-teller">
    <h1>Joke Teller</h1>

        <div v-if="currentJoke" class="joke-display">
            <p class="setup">{{ currentJoke.setup }}</p>

            <button type="button" @click="showPunchline = !showPunchline">
                {{ showPunchline ? 'Hide' : 'Show' }} Punchline
            </button>

            <p v-if="showPunchline" class="punchline">
                {{ currentJoke.punchline }}
            </p>
        </div>

        <div class="controls">
            <button class="btn-primary" type="button" @click="fetchRandomJoke">
                Get Random Joke
            </button>

            <button class="btn-secondary" type="button" @click="showForm = !showForm">
                Add New Joke
            </button>
        </div>

        <form v-if="showForm" class="joke-form" @submit.prevent="submitJoke">
            <input v-model="newJoke.setup" placeholder="Setup" required />
            <input v-model="newJoke.punchline" placeholder="Punchline" required />

            <button type="submit">Submit Joke</button>
            <button type="button" @click="showForm = false">Cancel</button>
        </form>

        <div class="joke-list">
            <h2>All Jokes</h2>

            <div v-for="joke in jokes" :key="joke.id" class="joke-item">
                <p>{{ joke.setup }}</p>
                <p>{{ joke.punchline }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.joke-teller {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.joke-display {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.setup {
  font-size: 18px;
  font-weight: bold;
}

.punchline {
  font-size: 16px;
  color: #2c3e50;
  margin-top: 10px;
}

button {
  padding: 10px 15px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background: #42b983;
  color: white;
}

.btn-secondary {
  background: #666;
  color: white;
}

.joke-form {
  background: #e8f4f8;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
}

.joke-form input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.joke-list {
  margin-top: 30px;
}

.joke-item {
  background: #fff;
  padding: 15px;
  margin: 10px 0;
  border-left: 4px solid #42b983;
}
</style>
