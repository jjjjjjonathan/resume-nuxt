import { projects } from './resume.json';
import moment from 'moment';
import { DEFAULT_DATE_FORMAT } from './constants';

const formatDates = (startDate: string, endDate: string): string => {
  let date = startDate;
  if (startDate === endDate) {
    return date;
  } else {
    return (date += `–${endDate}`);
  }
};

export const getProjects = (): object => {
  return projects.map((project) => ({
    name: project.name,
    description: project.description,
    url: project.url,
    keywords: project.keywords,
    date: formatDates(
      moment(project.startDate).format(DEFAULT_DATE_FORMAT),
      project.endDate
        ? moment(project.endDate).format(DEFAULT_DATE_FORMAT)
        : 'Present'
    ),
    startDate: moment(project.startDate).format('MMM YYYY'),
    endDate: project.endDate
      ? moment(project.endDate).format('MMM YYYY')
      : 'Present',
  }));
};
