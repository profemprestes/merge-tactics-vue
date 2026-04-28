import ROLE_ORDER from "./data/role_order.json";
import UNIT_ATTRIBUTES from "./data/units.json";
import SKILL_CONDITIONS from "./data/skills.json";
import RULERS from "./data/rulers.json";

export { ROLE_ORDER, UNIT_ATTRIBUTES, SKILL_CONDITIONS, RULERS };

// Generador de combinaciones
function* combinations(array, k) {
  const n = array.length;
  if (k < 0 || k > n) return;

  const indices = Array.from({ length: k }, (_, i) => i);

  while (true) {
    yield indices.map(i => array[i]);

    let i = k - 1;
    while (i >= 0 && indices[i] === i + n - k) {
      i--;
    }

    if (i < 0) break;

    indices[i]++;
    for (let j = i + 1; j < k; j++) {
      indices[j] = indices[j - 1] + 1;
    }
  }
}

export function generateTeams(options) {
  const {
    includedUnits = [],
    includedSkills = [],
    minSkillCount = 5,
    teamSize = 6, // Tamaño del equipo por defecto a 6
  } = options;

  // Unidades explícitamente incluidas
  const actualIncludedUnits = includedUnits.map(name => UNIT_ATTRIBUTES.find(u => u.name === name));

  // Conjunto de unidades combinables (excluyendo las ya seleccionadas)
  const combinableUnits = UNIT_ATTRIBUTES.filter(unit =>
    !includedUnits.includes(unit.name)
  );

  // Número de unidades a elegir del conjunto combinable
  const unitsToPick = teamSize - actualIncludedUnits.length;

  // Retornar vacío si la selección es inválida
  if (unitsToPick < 0 || unitsToPick > combinableUnits.length) {
    return [];
  }

  let teams = [];

  // Generar combinaciones de unidades restantes
  for (const unitCombination of combinations(combinableUnits, unitsToPick)) {
    // Unir unidades explícitas con la combinación generada
    const currentUnits = [...actualIncludedUnits, ...unitCombination];

    // Verificar el tamaño del equipo
    if (currentUnits.length !== teamSize) {
        continue;
    }

    const traits = currentUnits.flatMap(u => u.traits);
    const skills = SKILL_CONDITIONS.filter(cond => traits.filter(r => r === cond.trait).length >= cond.count);

    // Filtrar equipos por condiciones de habilidades
    if (skills.length < minSkillCount) continue;
    if (includedSkills.some(skillName => !skills.find(s => s.name === skillName))) continue;

    teams.push({
      units: currentUnits,
      skills,
      roles: traits.reduce((acc, trait) => ({ ...acc, [trait]: (acc[trait] || 0) + 1 }), {}),
    });
  }

  // Ordenar equipos por número de habilidades
  teams.sort((a, b) => b.skills.length - a.skills.length);

  return teams.slice(0, 50);
}
