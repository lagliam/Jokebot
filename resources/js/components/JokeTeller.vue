<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Joke } from '../models/Joke';

const currentJoke = ref<Joke | null>(null);
const showPunchline = ref(false);
const showForm = ref(false);
const newJoke = ref<Joke>({ setup: '', punchline: '' });

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
  }
};

onMounted(async () => {
  await fetchRandomJoke();
});
</script>

<template>
  <div class="joke-teller">
    <div class="title-card">
      <h1>Joke Teller</h1>
    </div>

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
  </div>
</template>

<style scoped>
.joke-teller {
  max-width: 640px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 48px 20px;
  color: #24323a;
}

.joke-teller::before {
  position: fixed;
  inset: 0;
  z-index: -1;
  content: '';
  background: #eef7f2;
}

.title-card,
.joke-display,
.joke-form {
  border: 1px solid rgba(36, 50, 58, 0.1);
  box-shadow: 0 18px 45px rgba(58, 89, 74, 0.12);
}

.title-card {
  padding: 24px;
  margin-bottom: 24px;
  text-align: center;
  background: #ffffff;
  border-radius: 8px;
}

h1 {
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
  color: #1f3d33;
}

.joke-display {
  padding: 28px;
  text-align: center;
  background: #ffffff;
  border-radius: 8px;
  margin: 20px 0 18px;
}

.setup {
  margin: 0 0 18px;
  font-size: 18px;
  font-weight: bold;
}

.punchline {
  margin: 18px 0 0;
  font-size: 16px;
  color: #335047;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 22px 0;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  transition:
    transform 150ms ease,
    box-shadow 150ms ease,
    background 150ms ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(36, 50, 58, 0.14);
}

.btn-primary {
  background: #2f8f67;
  color: white;
}

.btn-secondary {
  background: #4f6370;
  color: white;
}

.joke-form {
  padding: 20px;
  text-align: center;
  background: #f7fbff;
  border-radius: 8px;
  margin: 20px 0;
}

.joke-form input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #c9d7dc;
  border-radius: 4px;
}
</style>
