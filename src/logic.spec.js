import { describe, it, expect } from 'vitest';
import { generateTeams } from './logic.js';

describe('generateTeams', () => {
  it('should generate teams with default options', () => {
    const teams = generateTeams({});
    expect(teams.length).toBeGreaterThan(0);
    expect(teams[0].units.length).toBe(6);
  });

  it('should include specified units', () => {
    const teams = generateTeams({ includedUnits: ['Knight', 'Archer'] });
    teams.forEach(team => {
      expect(team.units.some(u => u.name === 'Knight')).toBe(true);
      expect(team.units.some(u => u.name === 'Archer')).toBe(true);
    });
  });

  it('should filter by included skills', () => {
    const teams = generateTeams({ includedSkills: ['noble1'] });
    teams.forEach(team => {
      expect(team.skills.some(s => s.name === 'noble1')).toBe(true);
    });
  });

  it('should filter by minimum skill count', () => {
    const teams = generateTeams({ minSkillCount: 7 });
    teams.forEach(team => {
      expect(team.skills.length).toBeGreaterThanOrEqual(7);
    });
  });

  it('should handle impossible constraints', () => {
    const teams = generateTeams({ includedUnits: Array(7).fill('').map((_, i) => `Unit ${i}`) });
    expect(teams.length).toBe(0);
  });
});
