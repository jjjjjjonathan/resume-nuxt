import { projects } from '../../assets/resume.json';

export const getProjectNames = (): object => {
  return projects.map((project) => project.name);
};
