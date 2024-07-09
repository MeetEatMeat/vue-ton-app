<script setup lang="ts">
import TonConnect from './components/TonConnect.vue'
import TonMint from './components/TonMint.vue';

import { useStore } from 'vuex';
const store = useStore();
</script>

<template>
  <main>
    <TonConnect />
    <TonMint v-if="store.state.tonConnect.tonClient"/>
  </main>
</template>
