<template>
  <div class="flex flex-col w-full min-h-screen relative">
    <!-- Top Navigation Bar -->
    <div class="w-full flex items-center px-4 md:px-8 py-3 text-sm font-bold text-gray-300 gap-2 mb-2 md:mb-6">
      <Icon
        icon="lucide:home"
        class="w-5 h-5 cursor-pointer hover:text-white transition-colors"
      />
      <Icon
        icon="lucide:chevron-right"
        class="w-4 h-4 text-gray-500"
      />
      <span class="tracking-wide">BUILDS</span>
    </div>

    <!-- Main Content Container -->
    <div class="flex flex-col mx-auto gap-4 md:gap-16 max-w-6xl w-full p-4 md:p-5 bg-black/15 backdrop-blur-xl rounded-none md:rounded-lg border-y md:border border-white/15">
      <div class="flex flex-col gap-4 items-start">
        <div class="flex flex-col md:flex-row w-full justify-between gap-4">
          <div class="text-left">
            <div class="relative mb-4 w-fit">
              <div
                class="-ml-4 md:-ml-5 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 absolute inline-block w-content w-[calc(100%+19px)] md:w-[calc(100%+25px)]"
                style="clip-path: polygon(0px 0px, 100% 0px, 100% 0px, 94.9% 50%, 100% 100%, 0px 100%); left: 0px; top: -2px; height: calc(100% + 4px);"
              />
              <div
                class="-ml-4 md:-ml-5 shadow-lg bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white pl-4 md:pl-5 py-2 pr-8 md:pr-12 inline-block relative z-10"
                style="clip-path: polygon(0px 0px, 100% 0px, 100% 0px, 95% 50%, 100% 100%, 0px 100%);"
              >
                <h1
                  class="text-2xl md:text-4xl font-bold font-clash"
                  style="text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px; margin: 0;"
                >
                  Merge Tactics Builds
                </h1>
              </div>
            </div>
            <p class="text-base text-white/80 m-0 mt-2">
              Crea y personaliza tus builds para dominar en Clash Royale: Merge Tactics
            </p>
          </div>
          <div class="w-full md:w-auto flex gap-4">
            <div class="order-last md:order-first">
              <button
                class="md:hidden border border-white/20 bg-gradient-to-b from-[#f9de6a] to-[#ea812a] text-black uppercase hover:opacity-90 transition-opacity rounded-md h-10 px-4 w-14 flex items-center justify-center"
                aria-label="Filtrar builds"
              >
                <Icon
                  icon="mdi:filter-variant"
                  class="w-6 h-6"
                />
              </button>
            </div>
            <button class="bg-gradient-to-b w-full md:w-auto justify-center h-10 flex flex-row gap-2 items-center from-[#f9de6a] to-[#ea812a] text-white px-4 py-3 rounded-md hover:opacity-90 transition-opacity border-0">
              <span
                class="text-sm font-medium uppercase font-clash"
                style="text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 2px; -webkit-text-stroke: 1px rgba(66, 32, 15, 0.5); paint-order: stroke;"
              >Crear build</span>
            </button>
          </div>
        </div>

        <div class="w-full p-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

        <!-- Filters (Desktop) -->
        <div class="hidden md:flex flex-col gap-4 w-full">
          <div class="flex flex-col md:flex-row flex-wrap gap-4 justify-between">
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-sm font-bold text-white uppercase text-left">Nombre del build</label>
              <input
                class="flex rounded-md px-3 py-1 shadow-sm transition-colors text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 md:text-sm w-full h-10 text-base bg-black/50 border border-white/20 focus-visible:ring-white"
                placeholder="Buscar builds..."
                type="search"
              >
            </div>
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-sm font-bold text-white uppercase text-left">Rasgos</label>
              <button class="flex items-center justify-between gap-2 rounded-md border border-white/20 px-3 py-2 text-sm whitespace-nowrap shadow-sm transition-colors w-full h-10 bg-black/50 text-white">
                <span class="text-sm text-gray-400 font-light">Todos los rasgos</span>
                <Icon
                  icon="lucide:chevron-down"
                  class="h-4 w-4 text-gray-400"
                />
              </button>
            </div>
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-sm font-bold text-white uppercase text-left">Ruler</label>
              <button class="flex items-center justify-between gap-2 rounded-md border border-white/20 px-3 py-2 text-sm whitespace-nowrap shadow-sm transition-colors w-full h-10 bg-black/50 text-white">
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center bg-white/10 rounded-md px-2 py-0.5 border border-white/10">
                    <!-- Ruler image placeholder -->
                    <span class="w-5 h-5 mr-1 bg-purple-500 rounded-full inline-block" />
                    <span class="text-xs font-semibold">Elixir Loong</span>
                    <Icon
                      icon="lucide:circle-x"
                      class="ml-1 h-3 w-3"
                    />
                  </div>
                  <div class="flex items-center">
                    <Icon
                      icon="lucide:x"
                      class="h-4 w-4 mx-1 text-gray-400"
                    />
                    <div class="h-6 w-px bg-white/20 mx-1" />
                    <Icon
                      icon="lucide:chevron-down"
                      class="h-4 w-4 mx-1 text-gray-400"
                    />
                  </div>
                </div>
              </button>
            </div>
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-sm font-bold text-white uppercase text-left">Carta</label>
              <button class="flex items-center justify-between gap-2 rounded-md border border-white/20 px-3 py-2 text-sm whitespace-nowrap shadow-sm transition-colors w-full h-10 bg-black/50 text-white">
                <span class="text-sm text-gray-400 font-light">Todas las cartas</span>
                <Icon
                  icon="lucide:chevron-down"
                  class="h-4 w-4 text-gray-400"
                />
              </button>
            </div>
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-sm font-bold text-white uppercase text-left">Ordenar por</label>
              <button class="flex items-center justify-between gap-2 rounded-md border border-white/20 px-3 py-2 text-sm whitespace-nowrap shadow-sm transition-colors w-full h-10 bg-black/50 text-white">
                <div class="flex items-center gap-2">
                  <Icon
                    icon="lucide:calendar"
                    class="h-5 w-5 text-amber-200"
                  />
                  <span>Fecha</span>
                </div>
                <Icon
                  icon="lucide:chevron-down"
                  class="h-4 w-4 text-gray-400"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between w-full text-sm text-gray-400 mt-2">
        <span>Mostrando 1-{{ builds.length }} de {{ builds.length }} builds</span>
        <span>Página 1 de 1</span>
      </div>

      <div class="grid grid-cols-1 gap-8 w-full mt-4">
        <BuildCard
          v-for="build in builds"
          :key="build.id"
          :build="build"
        />
      </div>

      <!-- Pagination -->
      <nav class="flex items-center gap-1 md:gap-2 w-full justify-center mt-8">
        <div class="bg-black/20 border border-white/10 text-gray-500 rounded-md px-3 py-2 opacity-50 cursor-not-allowed min-w-[40px] flex items-center justify-center">
          <Icon
            icon="lucide:arrow-left"
            class="w-4 h-4"
          />
        </div>
        <button
          class="bg-gradient-to-b from-[#f9de6a] to-[#ea812a] border-0 text-white rounded-md px-4 py-2 transition-all min-w-[40px] font-bold"
          style="text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 2px;"
        >
          1
        </button>
        <div class="bg-black/20 border border-white/10 text-gray-500 rounded-md px-3 py-2 opacity-50 cursor-not-allowed min-w-[40px] flex items-center justify-center">
          <Icon
            icon="lucide:arrow-right"
            class="w-4 h-4"
          />
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import BuildCard from '../components/BuildCard.vue';
import buildsData from '../data/builds.json';

const builds = ref(buildsData);
</script>

<style scoped>
/* Scoped styles are mostly replaced by Tailwind utility classes */
.font-clash {
  font-family: inherit; /* Add specific font if needed */
}
</style>
