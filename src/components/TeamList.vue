<template>
  <div class="team-list-container">
    <div class="header-section">
      <h2 class="section-title">Equipos Recomendados <span class="badge">{{ teams.length }}</span></h2>
      <div v-if="searchSummary.length > 0" class="search-summary">
        <span class="summary-label">Filtros:</span>
        <div class="summary-tags">
          <span class="summary-tag" v-for="(part, index) in searchSummary" :key="index">{{ part }}</span>
        </div>
      </div>
    </div>

    <div v-if="teams.length === 0" class="no-results">
      <div class="no-results-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-empty"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg>
        <p>No se encontraron equipos que coincidan con las condiciones.</p>
        <span class="hint">Modifique los ajustes e inténtelo de nuevo.</span>
      </div>
    </div>
    
    <div v-else class="teams-grid">
      <div class="team-card" v-for="(team, index) in teams" :key="index">
        <div class="team-card-header">
          <div class="team-stats">
            <div class="stat-badge tooltip" title="Cantidad de habilidades">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              {{ team.skills.length }} Habilidades
            </div>
            <div class="stat-badge unit-count">
              {{ team.units.length }} Unidades
            </div>
          </div>
        </div>
        
        <div class="team-units">
          <div class="unit-item" v-for="unit in team.units" :key="unit.name" v-tippy="translateRoles(unit.traits).join(', ')">
            <!-- Asumiendo que las imagenes de unidades existen, podemos poner un placeholder o solo el nombre -->
            <div class="unit-name">{{ unit.name }}</div>
          </div>
        </div>

        <div class="team-skills">
          <div class="skills-label">Sinergias:</div>
          <div class="skills-grid">
            <span
              v-for="skill in team.skills"
              :key="skill.name"
              class="skill-tag"
              :class="skill.trait"
            >
              {{ translateSkillName(skill.name) }}
            </span>
          </div>
        </div>
      </div>
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
    parts.push(`Mínimo Habilidades: ${minSkillCount}`);
  }
  if (teamSize > 0) {
    parts.push(`Tamaño: ${teamSize}`);
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
.team-list-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.header-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-title {
  margin: 0;
  font-size: 1.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.badge {
  background: var(--color-purple-deep);
  color: var(--color-accent-gold);
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.search-summary {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.summary-label {
  color: #a1a1aa;
  font-size: 0.875rem;
  font-weight: 500;
}

.summary-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.summary-tag {
  background: rgba(255, 255, 255, 0.1);
  color: #e4e4e7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.no-results {
  padding: 4rem 2rem;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-results-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}

.icon-empty {
  color: #71717a;
  margin-bottom: 1rem;
}

.no-results p {
  margin: 0;
  color: #e4e4e7;
  font-weight: 500;
  font-size: 1.125rem;
}

.no-results .hint {
  color: #a1a1aa;
  font-size: 0.875rem;
}

.teams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.team-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.2);
}

.team-card-header {
  padding: 1rem;
  background: linear-gradient(to right, rgba(122, 46, 192, 0.2), transparent);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.team-stats {
  display: flex;
  gap: 0.5rem;
}

.stat-badge {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background: rgba(0, 0, 0, 0.4);
  color: var(--color-accent-gold);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-badge.unit-count {
  color: #e4e4e7;
}

.team-units {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.unit-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: #e4e4e7;
  font-weight: 500;
  cursor: help;
  transition: background-color 0.2s;
}

.unit-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.team-skills {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: auto;
}

.skills-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #a1a1aa;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-shadow: 0px 1px 2px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.1);
}

/* Skill role specific colors */
.skill-tag.Noble { background-color: var(--color-Noble-transparent); }
.skill-tag.Tank { background-color: var(--color-Tank-transparent); }
.skill-tag.Clan { background-color: var(--color-Clan-transparent); }
.skill-tag.Marksman { background-color: var(--color-Marksman-transparent); }
.skill-tag.Goblin { background-color: var(--color-Goblin-transparent); }
.skill-tag.Assassin { background-color: var(--color-Assassin-transparent); }
.skill-tag.Undead { background-color: var(--color-Undead-transparent); }
.skill-tag.Warrior { background-color: var(--color-Warrior-transparent); }
.skill-tag.Fire { background-color: var(--color-Fire-transparent); }
.skill-tag.Ace { background-color: var(--color-Ace-transparent); }
.skill-tag.Hinder { background-color: var(--color-Hinder-transparent); }
.skill-tag.Titan { background-color: var(--color-Titan-transparent); }
.skill-tag.Superstar { background-color: var(--color-Superstar-transparent); }
.skill-tag.Dragon { background-color: var(--color-Dragon-transparent); }
.skill-tag.Building { background-color: var(--color-Building-transparent); }

@media (max-width: 640px) {
  .teams-grid {
    grid-template-columns: 1fr;
  }
}
</style>
