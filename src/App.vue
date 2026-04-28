<template>
  <div id="app-wrapper">
    <TheHeader />
    <main class="main-container builds-layout">
      
      <!-- Custom Header imitating the provided snippet -->
      <div class="builds-header">
        <div class="title-container">
          <div class="title-bg-gold"></div>
          <div class="title-bg-purple">
            <h1>Merge Tactics Builds</h1>
          </div>
        </div>
      </div>

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
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import TheHeader from './components/TheHeader.vue';
import SelectionTabs from './components/SelectionTabs.vue';
import TeamList from './components/TeamList.vue';
import { generateTeams, UNIT_ATTRIBUTES, SKILL_CONDITIONS } from './logic.js';

const includedUnits = ref([]);
const includedSkills = ref([]);
const minSkillCount = ref(5);
const teamSize = ref(7); // デフォルトのチームユニット数を7に設定
const generatedTeams = ref([]);
const isGenerating = ref(false); // 生成中かどうかを示す状態
const lastSearchConditions = reactive({ // 最後に検索した条件を保持
  includedUnits: [],
  includedSkills: [],
  minSkillCount: 0,
  teamSize: 0,
});

function translateSkillName(skillName) {
  return skillName;
}

async function generateTeamHandler() {
  isGenerating.value = true; // 生成開始

  // 検索条件を保存
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
  // 最小表示時間を確保するために短い遅延を追加
  await new Promise(resolve => setTimeout(resolve, 500));
  isGenerating.value = false; // 生成終了
}

function resetConditions() {
  includedUnits.value = [];
  includedSkills.value = [];
  minSkillCount.value = 5; // デフォルト値に戻す
  teamSize.value = 7; // チームユニット数をデフォルト値に戻す
  generatedTeams.value = []; // 結果もクリア

  // 検索条件もリセット
  lastSearchConditions.includedUnits = [];
  lastSearchConditions.includedSkills = [];
  lastSearchConditions.minSkillCount = 0;
  lastSearchConditions.teamSize = 0;
}
</script>

<style scoped>
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  align-items: center;
  padding: 20px;
}

.builds-layout {
  display: flex;
  flex-direction: column;
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  gap: 1rem;
  padding: 1.25rem;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
}

/* Custom Header specific styles */
.builds-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
}

.title-container {
  position: relative;
  margin-bottom: 1rem;
  width: fit-content;
}

.title-bg-gold {
  position: absolute;
  display: inline-block;
  left: 0;
  top: -2px;
  height: calc(100% + 4px);
  margin-left: -1.25rem;
  width: calc(100% + 25px);
  background: linear-gradient(to right, #facc15, #fbbf24, #facc15); /* Yellow-400 to Amber-400 */
  clip-path: polygon(0 0, 100% 0, 100% 0, 94.9% 50%, 100% 100%, 0 100%);
}

.title-bg-purple {
  position: relative;
  z-index: 10;
  display: inline-block;
  margin-left: -1.25rem;
  padding: 0.5rem 3rem 0.5rem 1.25rem;
  background: linear-gradient(to right, #7e22ce, #9333ea, #a855f7); /* Purple-700 to Purple-500 */
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  clip-path: polygon(0 0, 100% 0, 100% 0, 95% 50%, 100% 100%, 0 100%);
}

.title-bg-purple h1 {
  margin: 0;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  /* font-family: 'Clash Display', sans-serif; - si estuviera disponible */
}

/* Sidebar and general styles */
.sidebar {
  padding: 0;
  margin-top: 20px;
}

.sidebar h2 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #ffffff;
}

.content {
  padding: 0;
  margin-top: 20px;
}

.actions-between-sections {
  margin: 20px 0;
  display: flex;
  gap: 15px;
}

.generate-button, .reset-button {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 0.375rem; /* rounded-md */
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;
  outline: none;
  color: #000000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.generate-button {
  /* Using the button gradient from the user's request */
  background: linear-gradient(to bottom, #f9de6a, #ea812a);
}

.generate-button:hover:not(:disabled) {
  filter: brightness(1.1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.generate-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.reset-button {
  background: linear-gradient(to bottom, #b2aeb3, #54416d);
  color: #ffffff;
}

.reset-button:hover {
  filter: brightness(1.1);
}

.settings-group {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.min-skill-count-setting, .team-size-setting {
  display: flex;
  align-items: center;
}

.min-skill-count-setting label, .team-size-setting label {
  margin-right: 10px;
  font-weight: 500;
  color: #ffffff;
}

.min-skill-count-setting input, .team-size-setting input {
  width: 60px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  text-align: center;
}

.min-skill-count-setting input:focus, .team-size-setting input:focus {
  outline: none;
  border-color: var(--color-accent-gold);
}

@media (max-width: 768px) {
  .builds-layout {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
  
  .title-bg-purple h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
</style>
