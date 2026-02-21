<script setup lang="ts">
import { ref, onMounted } from 'vue';

const jokes = ref([]);
const currentJoke = ref(null);
const showPunchline = ref(false);
const showForm = ref(false);
const newJoke = ref({ setup: '', punchline: '' });

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
    fetchJokes();
  }
};

onMounted(() => {
  fetchJokes();
  fetchRandomJoke();
});
</script>

<template>
  <div class="joke-teller">
    <h1>Knock Knock Joke Teller</h1>
    
    <div class="joke-display" v-if="currentJoke">
      <p class="setup">{{ currentJoke.setup }}</p>
      <button @click="showPunchline = !showPunchline">
        {{ showPunchline ? 'Hide' : 'Show' }} Punchline
      </button>
      <p class="punchline" v-if="showPunchline">{{ currentJoke.punchline }}</p>
    </div>

    <div class="controls">
      <button @click="fetchRandomJoke" class="btn-primary">Get Random Joke</button>
      <button @click="showForm = !showForm" class="btn-secondary">Add New Joke</button>
    </div>

    <form @submit.prevent="submitJoke" v-if="showForm" class="joke-form">
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