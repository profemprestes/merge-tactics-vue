import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TeamList from './TeamList.vue';

describe('TeamList', () => {
  const mockTeams = [
    {
      units: [{ name: 'Caballero', role: ['elite', 'tank'] }, { name: 'Arqueras', role: ['clan', 'shooter'] }],
      skills: [{ name: 'elite1', role: 'elite' }, { name: 'clan1', role: 'clan' }],
    },
  ];

  const global = {
    directives: {
      tippy: {},
    },
  };

  it('renders a list of teams', () => {
    const wrapper = mount(TeamList, {
      props: { teams: mockTeams },
      global,
    });
    expect(wrapper.findAll('.team-table tbody tr').length).toBe(1);
    expect(wrapper.find('.unit-list').text()).toContain('Caballero');
  });

  it('shows a message when no teams are found', () => {
    const wrapper = mount(TeamList, {
      props: { teams: [] },
      global,
    });
    expect(wrapper.find('.no-results').exists()).toBe(true);
    expect(wrapper.text()).toContain('No se encontraron equipos que coincidan con las condiciones');
  });

  it('displays search summary', () => {
    const wrapper = mount(TeamList, {
      props: {
        teams: mockTeams,
        searchConditions: {
          includedUnits: ['Caballero'],
          includedSkills: [],
          minSkillCount: 2,
        },
      },
      global,
    });
    expect(wrapper.find('.search-summary').exists()).toBe(true);
    expect(wrapper.find('.search-summary').text()).toContain('Mínimo de habilidades: 2');
    expect(wrapper.find('.search-summary').text()).toContain('Unidades: Caballero');
  });
});
