export const ROLE_ORDER = [
  'Ace', 'Assassin', 'Clan', 'Dragon', 'Fire', 'Goblin', 'Hinder',
  'Marksman', 'Noble', 'Superstar', 'Tank', 'Titan', 'Undead', 'Warrior'
];

export const UNIT_ATTRIBUTES = [
  { name: 'Archer Queen', cost: 5, traits: ["Clan", "Superstar"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "archer_queen.png" },
  { name: 'Golden Knight', cost: 5, traits: ["Noble", "Assassin"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "golden_knight.png" },
  { name: 'Monk', cost: 5, traits: ["Ace", "Tank"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "monk.png" },
  { name: 'Skeleton King', cost: 5, traits: ["Undead", "Warrior"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "skeleton_king.png" },

  { name: 'Baby Dragon', cost: 4, traits: ["Fire", "Dragon"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "baby_dragon.png" },
  { name: 'Bandit', cost: 4, traits: ["Ace", "Assassin"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "bandit.png" },
  { name: 'Goblin Machine', cost: 4, traits: ["Goblin", "Superstar"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "goblin_machine.png" },
  { name: 'P.E.K.K.A.', cost: 4, traits: ["Ace", "Superstar"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "p_e_k_k_a.png" },
  { name: 'Prince', cost: 4, traits: ["Noble", "Warrior"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "prince.png" },
  { name: 'Princess', cost: 4, traits: ["Noble", "Hinder"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "princess.png" },
  { name: 'Witch', cost: 4, traits: ["Undead", "Hinder"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "witch.png" },

  { name: 'Executioner', cost: 3, traits: ["Ace", "Hinder"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "executioner.png" },
  { name: 'Giant', cost: 3, traits: ["Titan", "Superstar"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "giant.png" },
  { name: 'Giant Skeleton', cost: 3, traits: ["Undead", "Tank"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "giant_skeleton.png" },
  { name: 'Goblin Demolisher', cost: 3, traits: ["Goblin", "Warrior"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "goblin_demolisher.png" },
  { name: 'Musketeer', cost: 3, traits: ["Noble", "Marksman"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "musketeer.png" },
  { name: 'Royal Ghost', cost: 3, traits: ["Undead", "Assassin"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "royal_ghost.png" },
  { name: 'Royal Giant', cost: 3, traits: ["Titan", "Marksman"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "royal_giant.png" },
  { name: 'Valkyrie', cost: 3, traits: ["Clan", "Tank"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "valkyrie.png" },

  { name: 'Archer', cost: 2, traits: ["Clan", "Marksman"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "archers.png" },
  { name: 'Barbarian', cost: 2, traits: ["Clan", "Warrior"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "barbarians.png" },
  { name: 'Dart Goblin', cost: 2, traits: ["Goblin", "Marksman"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "dart_goblin.png" },
  { name: 'Goblin', cost: 2, traits: ["Goblin", "Assassin"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "goblins.png" },
  { name: 'Knight', cost: 2, traits: ["Noble", "Tank"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "knight.png" },
  { name: 'Skeleton Dragon', cost: 2, traits: ["Undead", "Dragon"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "skeleton_dragons.png" },
  { name: 'Wizard', cost: 2, traits: ["Fire", "Hinder"], hp: "-", dmg: "-", aspd: "-", range: "-", img: "wizard.png" }
];

export const SKILL_CONDITIONS = [
  { name: 'Ace1', trait: 'Ace', count: 2 },
  { name: 'Ace2', trait: 'Ace', count: 4 },
  { name: 'Assassin1', trait: 'Assassin', count: 2 },
  { name: 'Assassin2', trait: 'Assassin', count: 4 },
  { name: 'Clan1', trait: 'Clan', count: 2 },
  { name: 'Clan2', trait: 'Clan', count: 4 },
  { name: 'Dragon1', trait: 'Dragon', count: 2 },
  { name: 'Fire1', trait: 'Fire', count: 2 },
  { name: 'Goblin1', trait: 'Goblin', count: 2 },
  { name: 'Goblin2', trait: 'Goblin', count: 4 },
  { name: 'Hinder1', trait: 'Hinder', count: 2 },
  { name: 'Hinder2', trait: 'Hinder', count: 4 },
  { name: 'Marksman1', trait: 'Marksman', count: 2 },
  { name: 'Marksman2', trait: 'Marksman', count: 4 },
  { name: 'Noble1', trait: 'Noble', count: 2 },
  { name: 'Noble2', trait: 'Noble', count: 4 },
  { name: 'Noble3', trait: 'Noble', count: 6 },
  { name: 'Superstar1', trait: 'Superstar', count: 2 },
  { name: 'Tank1', trait: 'Tank', count: 2 },
  { name: 'Tank2', trait: 'Tank', count: 4 },
  { name: 'Titan1', trait: 'Titan', count: 2 },
  { name: 'Undead1', trait: 'Undead', count: 2 },
  { name: 'Undead2', trait: 'Undead', count: 4 },
  { name: 'Undead3', trait: 'Undead', count: 6 },
  { name: 'Warrior1', trait: 'Warrior', count: 2 },
  { name: 'Warrior2', trait: 'Warrior', count: 4 }
];

export const RULERS = {
  spirit_empress: "Fusion Foresight",
  goblin_queen: "Greener Grin",
  elixir_loong: "Endless Spring",
  battle_machine: "Builder Master",
  echo_sage: "Striking Clone",
  dagger_duchess: "Dagger Donation",
  grand_warden: "Shield Sponsor"
};

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
