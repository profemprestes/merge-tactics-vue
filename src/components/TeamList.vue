<template>
  <div>
    <h2>Resultados ({{ teams.length }})</h2>
    <div v-if="searchSummary.length > 0" class="search-summary">
      <p>Ajustes:</p>
      <ul>
        <li v-for="(part, index) in searchSummary" :key="index">{{ part }}</li>
      </ul>
    </div>
    <div v-if="teams.length === 0" class="no-results">
      <p>No se encontraron equipos que coincidan con las condiciones. Modifique los ajustes e inténtelo de nuevo.</p>
    </div>
    <div v-else class="team-table-container">
      <table class="team-table">
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Habilidades</th>
            <th>Unidades</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in teams" :key="index">
            <td>{{ team.skills.length }}</td>
            <td>
              <div class="skills">
                <span
                  v-for="skill in team.skills"
                  :key="skill.name"
                  class="skill-tag"
                  :class="skill.trait"
                >{{ translateSkillName(skill.name) }}</span>
              </div>
            </td>
            <td>
              <ul class="unit-list">
                <li v-for="unit in team.units" :key="unit.name" v-tippy="translateRoles(unit.traits).join(', ')">{{ unit.name }}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import { ROLE_ORDER } from '../logic.js';

const props = defineProps({
  teams: {
    type: Array,
    default: () => [],
  },
  searchConditions: {
    type: Object,
    default: () => ({ includedUnits: [], includedSkills: [], minSkillCount: 0, teamSize: 0 }),
  },
});

const searchSummary = computed(() => {
  const parts = [];
  const { includedUnits, includedSkills, minSkillCount, teamSize } = props.searchConditions;

  if (minSkillCount > 0) {
    parts.push(`Mínimo de habilidades: ${minSkillCount}`);
  }
  if (teamSize > 0) {
    parts.push(`Unidades del equipo: ${teamSize}`);
  }
  if (includedSkills.length > 0) {
    parts.push(`Habilidades: ${includedSkills.map(translateSkillName).join(', ')}`);
  }
  if (includedUnits.length > 0) {
    parts.push(`Unidades: ${includedUnits.join(', ')}`);
  }

  if (parts.length > 0) {
    return parts;
  }
  return [];
});

const orderedRoles = ref(ROLE_ORDER);

function translateRole(roleName) {
  return roleName;
}

function translateRoles(roles) {
  return roles.map(role => translateRole(role));
}

function translateSkillName(skillName) {
  return skillName;
}
</script>

<style scoped>
.no-results {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px dashed #ccc;
  border-radius: 5px;
  text-align: center;
}

.team-table-container {
  overflow-x: auto;
}

.team-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.team-table th,
.team-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  vertical-align: top;
}

.team-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  white-space: nowrap;
}

.team-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}



.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.skill-tag {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.85em;
}

/* Skill role specific colors */
.skill-tag.Noble {
  background-color: var(--color-Noble-transparent);
}
.skill-tag.Tank {
  background-color: var(--color-Tank-transparent);
}
.skill-tag.Clan {
  background-color: var(--color-Clan-transparent);
}
.skill-tag.Marksman {
  background-color: var(--color-Marksman-transparent);
}
.skill-tag.Goblin {
  background-color: var(--color-Goblin-transparent);
}
.skill-tag.Assassin {
  background-color: var(--color-Assassin-transparent);
}
.skill-tag.Undead {
  background-color: var(--color-Undead-transparent);
}
.skill-tag.Warrior {
  background-color: var(--color-Warrior-transparent);
}
.skill-tag.Fire {
  background-color: var(--color-Fire-transparent);
}
.skill-tag.Ace {
  background-color: var(--color-Ace-transparent);
}
.skill-tag.Hinder {
  background-color: var(--color-Hinder-transparent);
}
.skill-tag.Titan {
  background-color: var(--color-Titan-transparent);
}
.skill-tag.Superstar {
  background-color: var(--color-Superstar-transparent);
}
.skill-tag.Dragon {
  background-color: var(--color-Dragon-transparent);
}
.skill-tag.Building {
  background-color: var(--color-Building-transparent);
}

.unit-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2列表示 */
  gap: 5px; /* アイテム間の隙間 */
}

.unit-list li {
  background-color: #f0f0f0;
  padding: 3px 8px;
  border-radius: 4px;
  /* margin-bottom: 3px; */ /* gapで代替 */
  font-size: 0.9em;
}

.role-counts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.role-item {
  background-color: #e8f5e9; /* Light green */
  color: #2e7d32; /* Dark green */
  padding: 3px 7px;
  border-radius: 4px;
  font-size: 0.8em;
}

.search-summary {
  font-size: 0.9em;
  color: #555;
  margin-top: -10px;
  margin-bottom: 15px;
  background-color: #eef;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #dde;
  text-align: left;
}

.search-summary p {
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: bold;
}

.search-summary ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.search-summary li {
  margin-bottom: 3px;
  padding-left: 20px; /* 間隔を広げる */
  position: relative;
}

.search-summary li::before {
  content: '●'; /* 塗りつぶされた丸 */
  position: absolute;
  left: 0;
  font-size: 0.9em; /* 少し大きく */
  top: 1px; /* 微調整 */
}
</style>
