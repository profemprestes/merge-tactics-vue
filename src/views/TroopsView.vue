<template>
  <div class="flex flex-col w-full min-h-screen relative p-4 md:p-8">
    <div class="max-w-6xl w-full mx-auto">
      <div class="mb-8 text-left">
        <h1
          class="text-3xl md:text-5xl font-bold font-clash text-white mb-2"
          style="text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 4px;"
        >
          Tropas Merge Tactics
        </h1>
        <p class="text-white/80 text-lg">
          Las tropas son los elementos principales del juego que puedes desplegar en el campo de batalla. Cada tropa tiene un coste de elixir, una rareza y unas características únicas que la hacen especial.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div
          v-for="unit in units"
          :key="unit.name"
          class="bg-black/40 border border-white/20 rounded-lg p-4 flex flex-col items-center justify-center relative hover:border-amber-400 transition-colors"
        >
          <!-- Elixir Cost Badge -->
          <div class="absolute top-2 left-2 bg-[#D138DF] rounded-full w-6 h-6 flex items-center justify-center border border-white/50 shadow-md z-10">
            <span class="text-white text-sm font-bold">{{ unit.cost }}</span>
          </div>

          <img
            :src="`/images/${unit.img}`"
            :alt="translateUnit(unit.name)"
            class="w-20 h-20 object-contain mb-3 drop-shadow-md"
          >

          <h3 class="text-white font-bold text-center text-sm mb-2 leading-tight min-h-[40px] flex items-center">
            {{ translateUnit(unit.name) }}
          </h3>

          <div class="flex flex-wrap gap-1 justify-center">
            <span
              v-for="trait in unit.traits"
              :key="trait"
              class="text-xs px-2 py-0.5 bg-white/10 text-gray-300 rounded-full border border-white/10"
            >
              {{ translateTrait(trait) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import unitsData from '../data/units.json';

const units = ref(unitsData);

const unitTranslations = {
  "Archer Queen": "Reina Arquera",
  "Golden Knight": "Caballero dorado",
  "Monk": "Monje",
  "Skeleton King": "Rey esqueleto",
  "Baby Dragon": "Dragón Bebé",
  "Bandit": "Bandida",
  "Goblin Machine": "Máquina duende",
  "P.E.K.K.A.": "P.E.K.K.A.",
  "Prince": "Príncipe",
  "Princess": "Princesa",
  "Witch": "Bruja",
  "Executioner": "Verdugo",
  "Giant": "Gigante",
  "Giant Skeleton": "Esqueleto Gigante",
  "Goblin Demolisher": "Demoledor duende",
  "Musketeer": "Mosquetero",
  "Royal Ghost": "Fantasma Real",
  "Royal Giant": "Gigante Real",
  "Valkyrie": "Valquiria",
  "Archer": "Arqueras",
  "Barbarian": "Bárbaros",
  "Dart Goblin": "Duende lanzadardos",
  "Goblin": "Duendes",
  "Knight": "Caballero",
  "Skeleton Dragon": "Dragones Esqueleto",
  "Wizard": "Mago",
  "Training Dummy": "Muñeco de Pruebas"
};

const traitTranslations = {
  "Clan": "Clan",
  "Superstar": "Superestrella",
  "Noble": "Noble",
  "Assassin": "Asesino",
  "Ace": "As",
  "Tank": "Tanque",
  "Undead": "Muerto viviente",
  "Warrior": "Guerrero",
  "Fire": "Fuego",
  "Dragon": "Dragón",
  "Goblin": "Duende",
  "Hinder": "Obstaculizador",
  "Titan": "Titán",
  "Marksman": "Tirador"
};

const translateUnit = (name) => {
  return unitTranslations[name] || name;
};

const translateTrait = (trait) => {
  return traitTranslations[trait] || trait;
};

</script>

<style scoped>
.font-clash {
  font-family: inherit;
}
</style>