export const ROLE_ORDER = [
  'tank', 'fighter', 'assassin', 'shooter', 'thrower', 'avenger',
  'elite', 'clan', 'goblin', 'ace', 'undead'
];

export const UNIT_ATTRIBUTES = [
  { name: 'Caballero', role: ['elite', 'tank'] },
  { name: 'Arqueras', role: ['clan', 'shooter'] },
  { name: 'Duendes', role: ['goblin', 'assassin'] },
  { name: 'Duendes con lanza', role: ['goblin', 'thrower'] },
  { name: 'Bombardero', role: ['undead', 'thrower'] },
  { name: 'Bárbaros', role: ['clan', 'fighter'] },
  { name: 'Valquiria', role: ['clan', 'avenger'] },
  { name: 'P.E.K.K.A', role: ['ace', 'tank'] },
  { name: 'Príncipe', role: ['elite', 'fighter'] },
  { name: 'Esqueleto gigante', role: ['undead', 'fighter'] },
  { name: 'Duende lanzadardos', role: ['goblin', 'shooter'] },
  { name: 'Verdugo', role: ['ace', 'thrower'] },
  { name: 'Princesa', role: ['elite', 'shooter'] },
  { name: 'Megacaballero', role: ['ace', 'fighter'] },
  { name: 'Fantasma real', role: ['undead', 'assassin'] },
  { name: 'Bandida', role: ['ace', 'avenger'] },
  { name: 'Máquina duende', role: ['goblin', 'tank'] },
  { name: 'Rey esqueleto', role: ['undead', 'tank'] },
  { name: 'Caballero dorado', role: ['elite', 'assassin'] },
  { name: 'Reina arquera', role: ['clan', 'avenger'] },
];

export const SKILL_CONDITIONS = [
  { name: 'ace1', role: 'ace', count: 2 },
  { name: 'ace2', role: 'ace', count: 4 },
  { name: 'assassin', role: 'assassin', count: 3 },
  { name: 'avenger', role: 'avenger', count: 3 },
  { name: 'fighter1', role: 'fighter', count: 2 },
  { name: 'fighter2', role: 'fighter', count: 4 },
  { name: 'clan1', role: 'clan', count: 2 },
  { name: 'clan2', role: 'clan', count: 4 },
  { name: 'goblin1', role: 'goblin', count: 2 },
  { name: 'goblin2', role: 'goblin', count: 4 },
  { name: 'tank1', role: 'tank', count: 2 },
  { name: 'tank2', role: 'tank', count: 4 },
  { name: 'elite1', role: 'elite', count: 2 },
  { name: 'elite2', role: 'elite', count: 4 },
  { name: 'shooter', role: 'shooter', count: 3 },
  { name: 'thrower', role: 'thrower', count: 3 },
  { name: 'undead1', role: 'undead', count: 2 },
  { name: 'undead2', role: 'undead', count: 4 },
];

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

    const roles = currentUnits.flatMap(u => u.role);
    const skills = SKILL_CONDITIONS.filter(cond => roles.filter(r => r === cond.role).length >= cond.count);

    // Filtrar equipos por condiciones de habilidades
    if (skills.length < minSkillCount) continue;
    if (includedSkills.some(skillName => !skills.find(s => s.name === skillName))) continue;

    teams.push({
      units: currentUnits,
      skills,
      roles: roles.reduce((acc, role) => ({ ...acc, [role]: (acc[role] || 0) + 1 }), {}),
    });
  }

  // Ordenar equipos por número de habilidades
  teams.sort((a, b) => b.skills.length - a.skills.length);

  return teams.slice(0, 50);
}
