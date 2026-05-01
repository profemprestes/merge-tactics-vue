export const traitTranslations = {
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

export const translateTrait = (trait) => {
  return traitTranslations[trait] || trait;
};

export const translateSkillName = (skillName) => {
  const match = skillName.match(/([a-zA-Z]+)(\d+)/);
  if (match) {
     return `${translateTrait(match[1])} ${match[2]}`;
  }
  return translateTrait(skillName);
};
