<template>
  <main class="main-container">
    <div class="sidebar">
      <h2>Ajustes</h2>
      <div class="settings-group">
        <div class="team-size-setting">
          <label for="teamSize">Unidades del equipo:</label>
          <input type="number" id="teamSize" v-model.number="teamSize" min="1" max="10">
        </div>
        <div class="min-skill-count-setting">
          <label for="minSkillCount">Mínimo de habilidades:</label>
          <input type="number" id="minSkillCount" v-model.number="minSkillCount" min="1" max="10">
        </div>
      </div>

      <SelectionTabs
        :includedUnits="includedUnits"
        @update:includedUnits="val => includedUnits = val"
        :includedSkills="includedSkills"
        @update:includedSkills="val => includedSkills = val"
      />
    </div>
    <div class="actions-between-sections">
      <button class="generate-button" @click="generateTeamHandler" :disabled="isGenerating">{{ isGenerating ? 'Generando...' : 'Generar equipo' }}</button>
      <button class="reset-button" @click="resetConditions">Restablecer ajustes</button>
    </div>
    <div class="content">
      <TeamList
        :teams="generatedTeams"
        :searchConditions="lastSearchConditions"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue';
import SelectionTabs from '../components/SelectionTabs.vue';
import TeamList from '../components/TeamList.vue';
import { generateTeams } from '../logic.js';

const includedUnits = ref([]);
const includedSkills = ref([]);
const minSkillCount = ref(5);
const teamSize = ref(7);
const generatedTeams = ref([]);
const isGenerating = ref(false);
const lastSearchConditions = reactive({
  includedUnits: [],
  includedSkills: [],
  minSkillCount: 0,
  teamSize: 0,
});

async function generateTeamHandler() {
  isGenerating.value = true;

  lastSearchConditions.includedUnits = [...includedUnits.value];
  lastSearchConditions.includedSkills = [...includedSkills.value];
  lastSearchConditions.minSkillCount = minSkillCount.value;
  lastSearchConditions.teamSize = teamSize.value;
  generatedTeams.value = generateTeams({
    includedUnits: includedUnits.value,
    includedSkills: includedSkills.value,
    minSkillCount: minSkillCount.value,
    teamSize: teamSize.value,
  });

  await new Promise(resolve => setTimeout(resolve, 500));
  isGenerating.value = false;
}

function resetConditions() {
  includedUnits.value = [];
  includedSkills.value = [];
  minSkillCount.value = 5;
  teamSize.value = 7;
  generatedTeams.value = [];

  lastSearchConditions.includedUnits = [];
  lastSearchConditions.includedSkills = [];
  lastSearchConditions.minSkillCount = 0;
  lastSearchConditions.teamSize = 0;
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.sidebar {
  padding: 20px;
}

.content {
  padding: 20px;
}

.actions-between-sections {
  margin: 20px;
  display: flex;
  gap: 10px;
}

.generate-button, .reset-button {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 600;
  transition: all 0.3s ease;
  outline: none;
  color: #ffffff;
}

.generate-button {
  background-color: var(--color-accent-green);
}

.generate-button:hover {
  filter: brightness(1.1);
}

.reset-button {
  background-color: var(--danger-color);
}

.reset-button:hover {
  background-color: var(--danger-color-hover);
}

.settings-group {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  background-color: var(--color-purple-dark);
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-purple-light);
}

.min-skill-count-setting, .team-size-setting {
  display: flex;
  align-items: center;
}

.min-skill-count-setting label, .team-size-setting label {
  margin-right: 10px;
  font-weight: 500;
}

.min-skill-count-setting input, .team-size-setting input {
  width: 60px;
  padding: 8px;
  background-color: var(--color-purple-deep);
  color: #ffffff;
  border: 1px solid var(--color-neutral);
  border-radius: 4px;
  text-align: center;
}

.min-skill-count-setting input:focus, .team-size-setting input:focus {
  outline: none;
  border-color: var(--color-purple-light);
}
</style>
