<template>
  <div class="flex flex-col md:flex-row gap-4 md:gap-8">
    <!-- Build Info Column -->
    <div class="max-w-full md:max-w-[400px] w-full gap-2 flex flex-col justify-center border-b border-white/15 pb-4 md:pb-0 md:border-b-0 md:pr-4">
      <div class="flex flex-row gap-2 items-center justify-between">
        <div class="flex flex-row gap-2 items-center text-left">
          <a class="group cursor-pointer">
            <h2 class="text-lg font-bold text-white group-hover:text-amber-400 transition-colors m-0">{{ build.title }}</h2>
          </a>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <a class="flex flex-row gap-1 items-center text-white py-1 rounded-md text-xs uppercase group hover:text-amber-400 transition-colors cursor-pointer">
            Ver build
            <Icon icon="lucide:arrow-right" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <div class="flex flex-row flex-none items-center overflow-x-auto justify-between mt-2">
        <div class="flex items-center gap-2 pr-3">
          <span class="relative flex size-8 shrink-0 overflow-hidden rounded-full w-8 h-8 bg-purple-500/20 text-purple-300 items-center justify-center font-bold">
            {{ build.authorAvatar || build.author.charAt(0).toUpperCase() }}
          </span>
          <span class="text-sm text-gray-300 flex items-center gap-1">
            {{ build.author }}
            <span class="text-xs text-gray-400 mx-1">•</span>
            <small class="text-xs text-gray-400">{{ build.date }}</small>
          </span>
        </div>
        <div class="flex items-center gap-2 bg-gradient-to-l from-black/50 to-transparent pr-4 py-0.5 rounded-full">
          <div class="w-6 h-6 relative bg-amber-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-amber-300">
            Rank <!-- Placeholder for rank image -->
          </div>
          <span class="text-sm text-white font-semibold">{{ build.rankScore }}</span>
        </div>
      </div>

      <div class="flex flex-row flex-none items-center divide-x divide-white/15 overflow-x-auto mt-2 bg-black/20 rounded-md p-1">
        <div class="flex flex-col md:flex-row gap-1 md:gap-2 items-center h-auto md:h-10 py-1 px-3">
          <Icon icon="lucide:eye" class="h-4 w-4 text-amber-200" />
          <span class="text-sm uppercase font-semibold">{{ build.views }} <small class="text-xs font-normal opacity-70">Vis</small></span>
        </div>
        <div class="flex flex-col md:flex-row gap-1 md:gap-2 items-center h-auto md:h-10 py-1 px-3 hover:bg-white/5 cursor-pointer transition-colors rounded-sm">
          <Icon icon="lucide:arrow-up" class="h-4 w-4 text-amber-200 group-hover:text-green-400" />
          <span class="text-sm uppercase font-semibold">{{ build.likes }} <small class="text-xs font-normal opacity-70">Votos</small></span>
        </div>
        <div class="flex flex-col md:flex-row gap-1 md:gap-2 items-center h-auto md:h-10 py-1 px-3">
          <Icon icon="lucide:message-square" class="h-4 w-4 text-amber-200" />
          <span class="text-sm uppercase font-semibold">{{ build.comments || 0 }} <small class="text-xs font-normal opacity-70">Coms</small></span>
        </div>
      </div>
    </div>

    <!-- Troops Column -->
    <div class="flex flex-row gap-3 md:gap-4 flex-1 min-w-0 items-center overflow-x-auto pb-2">
      <!-- Ruler -->
      <div class="w-20 h-28 rounded-xl bg-purple-900/50 border border-purple-500/30 overflow-hidden flex-none relative left-0 z-20 flex items-center justify-center shadow-lg">
         <!-- Placeholder for Elixir Loong / Ruler -->
         <span class="text-xs font-bold text-center text-purple-200 px-1">{{ build.regnant }}</span>
      </div>

      <!-- Deck List -->
      <div class="flex flex-col justify-between gap-1 pt-0.5 pb-1 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg px-3 border-b border-white/20 min-w-0 flex-1">
        <div class="px-2 w-full pb-1 gap-x-4 gap-y-2.5 flex-shrink-0 flex flex-row items-end pt-1.5 overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">

          <!-- Individual Troops -->
          <div v-for="(troop, idx) in build.deck" :key="idx"
               class="w-[65px] h-[75px] flex-none bg-black/40 rounded relative border-2"
               :class="getBorderColor(troop.cost)">

            <!-- Elixir Cost -->
            <div class="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-fuchsia-900 rounded-full border border-fuchsia-400 text-sm text-white font-bold z-10 shadow-sm">
              <span class="text-base drop-shadow-md">{{ troop.cost }}</span>
            </div>

            <!-- Troop Image Placeholder -->
            <div class="w-full h-full overflow-hidden relative flex items-center justify-center bg-gray-800">
               <span class="text-[10px] text-center px-1 leading-tight break-words">{{ troop.name }}</span>
            </div>

            <!-- Trait 1 -->
            <div v-if="troop.traits && troop.traits.length > 0" class="absolute bottom-11 -left-3 w-6 h-6 flex items-center justify-center bg-black/80 p-0.5 rounded-full text-xs text-white font-bold z-10 border border-white/10" :title="troop.traits[0]">
               {{ troop.traits[0].charAt(0) }}
            </div>

            <!-- Trait 2 -->
            <div v-if="troop.traits && troop.traits.length > 1" class="absolute bottom-4 -left-3 w-6 h-6 flex items-center justify-center bg-black/80 p-0.5 rounded-full text-xs text-white font-bold z-10 border border-white/10" :title="troop.traits[1]">
               {{ troop.traits[1].charAt(0) }}
            </div>

            <!-- Stars -->
            <div class="absolute bottom-0 right-0 w-full justify-end flex bg-gradient-to-t from-black/90 px-1 pt-2 to-transparent rounded-b">
              <span v-for="star in troop.stars" :key="star" class="text-yellow-400 text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] -ml-1 first:ml-0">★</span>
            </div>
          </div>

        </div>

        <!-- Summary Traits Row -->
        <div class="flex flex-row h-full items-end flex-nowrap overflow-x-auto mt-2">
           <div v-for="(count, trait) in buildTraitsSummary" :key="trait"
                class="flex flex-row gap-1 flex-none items-center pl-1.5 pr-2.5 py-0.5 mr-2 rounded bg-black/40 border border-white/5 cursor-help hover:bg-black/70 transition-colors">
              <span class="w-4 h-4 rounded-full bg-white/20 text-[9px] flex items-center justify-center font-bold">{{ trait.charAt(0) }}</span>
              <span class="text-sm font-semibold text-white">{{ count }}</span>
           </div>
        </div>
      </div>
    </div>

    <!-- Desktop Go Link -->
    <div class="flex-row gap-2 items-center hidden md:flex">
      <a class="bg-white/10 p-3 rounded-full hover:bg-amber-500/20 text-white/60 hover:text-amber-400 transition-all cursor-pointer">
        <Icon icon="lucide:chevron-right" class="w-6 h-6" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  build: {
    type: Object,
    required: true
  }
});

const getBorderColor = (cost) => {
  if (cost >= 5) return 'border-yellow-500/80';
  if (cost === 4) return 'border-purple-500/80';
  if (cost === 3) return 'border-blue-500/80';
  return 'border-green-500/80';
};

const buildTraitsSummary = computed(() => {
  const summary = {};
  if (!props.build.deck) return summary;

  props.build.deck.forEach(troop => {
    if (troop.traits) {
      troop.traits.forEach(trait => {
        summary[trait] = (summary[trait] || 0) + 1;
      });
    }
  });

  // Sort by count descending
  return Object.fromEntries(
    Object.entries(summary).sort(([,a], [,b]) => b - a)
  );
});
</script>

<style scoped>
/* Tailwind utilities handle most styling */
</style>
