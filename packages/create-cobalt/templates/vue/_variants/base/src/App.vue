<script setup lang="ts">
import { CoBanner } from '@cobalt/vue/banner';
import { CoButton } from '@cobalt/vue/button';
import { CoCard } from '@cobalt/vue/card';

function handleSuccess() {
  console.log('Success');
}
</script>

<template>
  <main class="starter-page">
    <CoBanner label="Cobalt starter banner">
      <span slot="title">Cobalt starter</span>
    </CoBanner>
    <section class="starter-content">
      <CoCard label="Starter content">
        <div class="starter-card">
          <p class="starter-eyebrow">Vue</p>
          <h1 class="starter-title">Build with Cobalt components</h1>
          <p class="starter-copy">
            Tokens, base styles, theme styles, and Vue wrappers are ready to use.
          </p>
          <div>
            <CoButton variant="success" @co-focus="handleSuccess">Success</CoButton>
          </div>
        </div>
      </CoCard>
    </section>
  </main>
</template>
