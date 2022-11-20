import { skills } from './resume.json';

export const getSkills = (): object => {
  return skills.map((skillSection) => ({
    name: skillSection.name,
    keywords: skillSection.keywords,
  }));
};
