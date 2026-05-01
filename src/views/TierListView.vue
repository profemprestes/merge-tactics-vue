<template>
  <div class="flex flex-col w-full min-h-screen relative p-4 md:p-8">
    <div class="max-w-6xl w-full mx-auto">
      <div class="mb-8 text-left">
        <h1
          class="text-3xl md:text-5xl font-bold font-clash text-white mb-2"
          style="text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 4px;"
        >
          Merge Tactics Tier List (Abril de 2026)
        </h1>
        <p class="text-white/80 text-lg mb-4">
          La Tier List de Merge Tactics es una lista de cartas ordenadas por rareza y potencial. Arrastra las cartas para reorganizar los tiers según tus preferencias. Las mejores cartas de Merge Tactics son aquellas con alto potencial de daño, versatilidad y fuertes sinergias con otras cartas.
        </p>
      </div>

      <!-- Tier List -->
      <div class="flex flex-col gap-2 mb-8 bg-black/60 p-4 rounded-lg border border-white/10">
        <div
          v-for="tier in tiers"
          :key="tier.id"
          class="flex min-h-[100px] border border-white/20 rounded bg-black/40 overflow-hidden"
          @drop="onDrop($event, tier.id)"
          @dragover.prevent
          @dragenter.prevent
        >
          <!-- Tier Label -->
          <div
            class="w-20 md:w-24 flex items-center justify-center font-bold text-2xl md:text-3xl text-black border-r border-white/20 shrink-0"
            :style="{ backgroundColor: tier.color }"
          >
            {{ tier.id }}
          </div>

          <!-- Tier Drop Zone -->
          <div class="flex-1 p-2 flex flex-wrap gap-2 content-start">
            <div
              v-for="unit in getUnitsInTier(tier.id)"
              :key="unit.name"
              class="w-16 h-16 md:w-20 md:h-20 bg-black/50 border border-white/20 rounded flex items-center justify-center cursor-grab hover:border-amber-400 relative"
              draggable="true"
              :title="translateUnit(unit.name)"
              @dragstart="onDragStart($event, unit.name)"
            >
              <img
                :src="`/images/${unit.img}`"
                :alt="translateUnit(unit.name)"
                class="w-12 h-12 md:w-16 md:h-16 object-contain pointer-events-none drop-shadow-md"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Unassigned Pool -->
      <div class="bg-black/60 p-4 rounded-lg border border-white/10">
        <h2 class="text-white font-bold text-xl mb-4">
          Cartas Sin Asignar
        </h2>
        <div
          class="flex flex-wrap gap-2 min-h-[100px] p-2 border border-dashed border-white/30 rounded bg-black/40"
          @drop="onDrop($event, 'Pool')"
          @dragover.prevent
          @dragenter.prevent
        >
          <div
            v-for="unit in getUnitsInTier('Pool')"
            :key="unit.name"
            class="w-16 h-16 md:w-20 md:h-20 bg-black/50 border border-white/20 rounded flex items-center justify-center cursor-grab hover:border-amber-400 relative"
            draggable="true"
            :title="translateUnit(unit.name)"
            @dragstart="onDragStart($event, unit.name)"
          >
            <img
              :src="`/images/${unit.img}`"
              :alt="translateUnit(unit.name)"
              class="w-12 h-12 md:w-16 md:h-16 object-contain pointer-events-none drop-shadow-md"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import unitsData from '../data/units.json';

const units = ref(unitsData);

// Initial tier assignments based on prompt
const initialAssignments = {
  "Giant": "S", "Golden Knight": "S", "Goblin Machine": "S",
  "Musketeer": "A", "Giant Skeleton": "A", "Archer Queen": "A", "Monk": "A", "Princess": "A",
  "Royal Giant": "B", "Wizard": "B", "Baby Dragon": "B", "P.E.K.K.A.": "B", "Goblin Demolisher": "B", "Prince": "B", "Executioner": "B",
  "Archer": "C", "Barbarian": "C", "Valkyrie": "C", "Dart Goblin": "C", "Witch": "C", "Skeleton King": "C", "Royal Ghost": "C", "Bandit": "C",
  "Goblin": "D", "Knight": "D", "Skeleton Dragon": "D"
};

const unitAssignments = ref({});

onMounted(() => {
  units.value.forEach(unit => {
    unitAssignments.value[unit.name] = initialAssignments[unit.name] || 'Pool';
  });
});

const tiers = ref([
  { id: 'S', color: '#FF7F7F' },
  { id: 'A', color: '#FFBF7F' },
  { id: 'B', color: '#FFFF7F' },
  { id: 'C', color: '#7FFF7F' },
  { id: 'D', color: '#7FBFFF' }
]);

const getUnitsInTier = (tierId) => {
  return units.value.filter(unit => unitAssignments.value[unit.name] === tierId);
};

const onDragStart = (event, unitName) => {
  event.dataTransfer.setData('unitName', unitName);
  event.dataTransfer.effectAllowed = 'move';
};

const onDrop = (event, targetTier) => {
  const unitName = event.dataTransfer.getData('unitName');
  if (unitName && unitAssignments.value[unitName] !== undefined) {
    unitAssignments.value[unitName] = targetTier;
  }
};

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

const translateUnit = (name) => {
  return unitTranslations[name] || name;
};
</script>

<style scoped>
.font-clash {
  font-family: inherit;
}
.cursor-grab {
  cursor: grab;
}
.cursor-grab:active {
  cursor: grabbing;
}
</style>