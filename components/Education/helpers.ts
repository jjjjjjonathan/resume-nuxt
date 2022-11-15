import { education } from '../../assets/resume.json';
import moment from 'moment';

const dateFormat = 'MMM YYYY';

export const getEducation = (): object => {
  return education.map((school) => ({
    institution: school.institution,
    area: school.area,
    studyType: school.studyType,
    startDate: moment(school.startDate).format(dateFormat),
    endDate: school.endDate
      ? moment(school.endDate).format(dateFormat)
      : 'Present',
    note: school.note || null,
  }));
};
