import { work } from '../../assets/resume.json';
import moment from 'moment';

const dateFormat = 'MMM YYYY';

export const getWork = (): object => {
  return work.map((job) => ({
    name: job.name,
    position: job.position,
    startDate: moment(job.startDate).format(dateFormat),
    endDate: job.endDate ? moment(job.endDate).format(dateFormat) : 'Present',
    summary: job.summary,
    highlights: job.highlights,
  }));
};
