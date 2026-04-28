import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TeamList from './TeamList.vue';

describe('TeamList', () => {
  const mockTeams = [
    {
      units: [{ name: 'Knight', traits: ['Noble', 'Tank'] }, { name: 'Archer', traits: ['Clan', 'Marksman'] }],
      skills: [{ name: 'Noble1', trait: 'Noble' }, { name: 'Clan1', trait: 'Clan' }],
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
    expect(wrapper.findAll('.team-card').length).toBe(1);
    expect(wrapper.find('.team-units').text()).toContain('Knight');
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
          includedUnits: ['Knight'],
          includedSkills: [],
          minSkillCount: 2,
        },
      },
      global,
    });
    expect(wrapper.find('.search-summary').exists()).toBe(true);
    expect(wrapper.find('.search-summary').text()).toContain('Mínimo Habilidades: 2');
    expect(wrapper.find('.search-summary').text()).toContain('Unidades: Knight');
  });
});
