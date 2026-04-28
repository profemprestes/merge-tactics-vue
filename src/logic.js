export const ROLE_ORDER = [
  'Tank', 'Marksman', 'Assassin', 'Warrior', 'Dragon', 'Hinder', 'Superstar', 'Building',
  'Noble', 'Clan', 'Goblin', 'Undead', 'Fire', 'Titan', 'Ace'
];

export const UNIT_ATTRIBUTES = [
  { name: 'Knight', cost: 2, traits: ["Noble", "Tank"], hp: "1300/2600/5200/10400", dmg: "65/104/166/265", aspd: "1.66", range: 1, img: "Knight_card.png" },
  { name: 'Archer', cost: 2, traits: ["Clan", "Marksman"], hp: "520/1040/2080/4160", dmg: "91/145/232/371", aspd: "1.25", range: 4, img: "Archer_card.png" },
  { name: 'Goblin', cost: 2, traits: ["Goblin", "Assassin"], hp: "455/728/1164/1862", dmg: "117/163/228/319", aspd: "1", range: 1, img: "Goblin_card.png" },
  { name: 'Barbarian', cost: 2, traits: ["Clan", "Warrior"], hp: "910/1638/2948/5306", dmg: "104/166/265/423", aspd: "1.25", range: 1, img: "Barbarian_AC_card.png" },
  { name: 'Skeleton Dragon', cost: 2, traits: ["Undead", "Dragon"], hp: "650/1040/1664/2662", dmg: "104/166/265/423", aspd: "1.42", range: 4, img: "SkeletonDragon_AC_card.png" },
  { name: 'Wizard', cost: 2, traits: ["Fire", "Hinder"], hp: "500/900/1621/2917", dmg: "100/179/322/579", aspd: "1.42", range: 4, img: "Wizard_card.png" },
  { name: 'Dart Goblin', cost: 2, traits: ["Goblin", "Marksman"], hp: "438/700/1120/1792", dmg: "100/139/193/270", aspd: "0.83", range: 4, img: "Goblin_Dart_card.png" },
  { name: 'Giant', cost: 3, traits: ["Titan", "Superstar"], hp: "1375/2750/5501/11003", dmg: "100/139/193/270", aspd: "2.5", range: 1, img: "Giant_AC_card.png" },
  { name: 'Musketeer', cost: 3, traits: ["Noble", "Marksman"], hp: "999/1799/3238/5827", dmg: "149/269/483/869", aspd: "1.42", range: 4, img: "Musketeer_card.png" },
  { name: 'Valkyrie', cost: 3, traits: ["Clan", "Tank"], hp: "1124/2249/4498/8996", dmg: "149/239/382/611", aspd: "2", range: 1, img: "Valkyrie_AC_card.png" },
  { name: 'Royal Giant', cost: 3, traits: ["Titan", "Marksman"], hp: "1300/2600/5200/10400", dmg: "130/208/332/531", aspd: "2", range: 3, img: "Royal_Giant_AC_card.png" },
  { name: 'Giant Skeleton', cost: 3, traits: ["Undead", "Tank"], hp: "1181/2126/3827/6888", dmg: "83/115/161/224", aspd: "2", range: 1, img: "Giant_Skeleton_AC_card.png" },
  { name: 'Goblin Demolisher', cost: 3, traits: ["Goblin", "Warrior"], hp: "999/1799/3238/5827", dmg: "124/174/243/339", aspd: "1.66", range: 2, img: "Goblin_Demolisher_AC_card.png" },
  { name: 'Executioner', cost: 3, traits: ["Ace", "Hinder"], hp: "826/1487/2676/4817", dmg: "130/182/254/356", aspd: "1.66", range: 4, img: "Executioner_card.png" },
  { name: 'Royal Ghost', cost: 3, traits: ["Undead", "Assassin"], hp: "897/1614/2905/5229", dmg: "133/187/261/365", aspd: "0.83", range: 1, img: "RoyalGhost_card.png" },
  { name: 'P.E.K.K.A.', cost: 4, traits: ["Ace", "Superstar"], hp: "1890/3782/7564/15130", dmg: "413/660/1055/1688", aspd: "2.5", range: 1, img: "Pekka_card.png" },
  { name: 'Witch', cost: 4, traits: ["Undead", "Hinder"], hp: "1063/1913/3443/6198", dmg: "176/282/451/721", aspd: "1.66", range: 3, img: "Super_Witch_card.png" },
  { name: 'Baby Dragon', cost: 4, traits: ["Fire", "Dragon"], hp: "897/1614/2905/5229", dmg: "117/211/380/685", aspd: "2", range: 2, img: "BabyDragon_AC_card%20(1).png" },
  { name: 'Prince', cost: 4, traits: ["Noble", "Warrior"], hp: "1300/2340/4212/7581", dmg: "176/282/451/721", aspd: "1.66", range: 1, img: "Prince_card.png" },
  { name: 'Goblin Machine', cost: 4, traits: ["Goblin", "Superstar"], hp: "1232/2464/4929/9859", dmg: "101/161/257/410", aspd: "1.25", range: 1, img: "Goblin_machine_card.png" },
  { name: 'Bandit', cost: 4, traits: ["Ace", "Assassin"], hp: "1008/1613/2580/4128", dmg: "111/200/360/647", aspd: "1.11", range: 1, img: "Bandit_card.png" },
  { name: 'Princess', cost: 4, traits: ["Noble", "Hinder"], hp: "672/1075/1719/2750", dmg: "179/322/579/1042", aspd: "2.5", range: 6, img: "Princess_card.png" },
  { name: 'Skeleton King', cost: 5, traits: ["Undead", "Warrior"], hp: "1517/3034/6068/12136", dmg: "152/304/608/1216", aspd: "2", range: 1, img: "Skeleton_King_card.png" },
  { name: 'Golden Knight', cost: 5, traits: ["Noble", "Assassin"], hp: "1300/2340/4212/7581", dmg: "152/304/608/1216", aspd: "1", range: 1, img: "Golden_Knight_card.png" },
  { name: 'Archer Queen', cost: 5, traits: ["Clan", "Superstar"], hp: "920/1656/2980/5365", dmg: "109/152/211/296", aspd: "1.42", range: 4, img: "Archer_Queen_card.png" },
  { name: 'Monk', cost: 5, traits: ["Ace", "Tank"], hp: "1625/3250/6500/13000", dmg: "87/120/169/236", aspd: "1", range: 1, img: "the_monk_AC_card.png" },
  { name: 'Elixir Collector', cost: 0, traits: ["Building"], hp: "800/1600/3200/6400", dmg: "0", aspd: "-", range: 0, img: "Elixir_Pump_card.png" },
  { name: 'Tesla', cost: 0, traits: ["Building"], hp: "600/1200/2400/4800", dmg: "60/96/153/244", aspd: "0.71", range: 2, img: "Tesla_AC_card.png" },
  { name: 'Mortar', cost: 0, traits: ["Building"], hp: "600/1200/2400/4800", dmg: "240/384/614/982", aspd: "2.5", range: 6, img: "Mortar_AC_card.png" }
];

export const SKILL_CONDITIONS = [
  { name: 'Noble1', trait: 'Noble', count: 2 },
  { name: 'Noble2', trait: 'Noble', count: 4 },
  { name: 'Noble3', trait: 'Noble', count: 6 },
  { name: 'Undead1', trait: 'Undead', count: 2 },
  { name: 'Undead2', trait: 'Undead', count: 4 },
  { name: 'Undead3', trait: 'Undead', count: 6 },
  { name: 'Hinder1', trait: 'Hinder', count: 2 },
  { name: 'Hinder2', trait: 'Hinder', count: 4 },
  { name: 'Tank1', trait: 'Tank', count: 2 },
  { name: 'Tank2', trait: 'Tank', count: 4 },
  { name: 'Warrior1', trait: 'Warrior', count: 2 },
  { name: 'Warrior2', trait: 'Warrior', count: 4 },
  { name: 'Goblin1', trait: 'Goblin', count: 2 },
  { name: 'Goblin2', trait: 'Goblin', count: 4 },
  { name: 'Marksman1', trait: 'Marksman', count: 2 },
  { name: 'Marksman2', trait: 'Marksman', count: 4 },
  { name: 'Clan1', trait: 'Clan', count: 2 },
  { name: 'Clan2', trait: 'Clan', count: 4 },
  { name: 'Ace1', trait: 'Ace', count: 2 },
  { name: 'Ace2', trait: 'Ace', count: 4 },
  { name: 'Superstar1', trait: 'Superstar', count: 2 },
  { name: 'Superstar2', trait: 'Superstar', count: 4 },
  { name: 'Dragon1', trait: 'Dragon', count: 2 },
  { name: 'Titan1', trait: 'Titan', count: 2 },
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
