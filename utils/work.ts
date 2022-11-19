import { work } from '../assets/resume.json';
import moment from 'moment';
import { DEFAULT_DATE_FORMAT } from './constants';

export const getWork = (): object => {
  return work.map((job) => ({
    name: job.name,
    position: job.position,
    startDate: moment(job.startDate).format(DEFAULT_DATE_FORMAT),
    endDate: job.endDate
      ? moment(job.endDate).format(DEFAULT_DATE_FORMAT)
      : 'Present',
    summary: job.summary,
    highlights: job.highlights,
  }));
};
