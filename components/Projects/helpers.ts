import { projects } from '../../assets/resume.json';
import moment from 'moment'

export const getProjects = (): object => {
  return projects.map((project) => ({
    name: project.name,
    description: project.description,
    url: project.url,
    keywords: project.keywords,
    startDate: moment(project.startDate).format('MMM YYYY'),
    endDate: project.endDate ? moment(project.endDate).format('MMM YYYY') : 'Present'
  }));
};
