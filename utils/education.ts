import { education } from './resume.json';
import moment from 'moment';
import { EDUCATION_DATE_FORMAT } from './constants';

const formatSchoolYears = (startDate: string, endDate: string): string => {
  let date = startDate;
  if (startDate === endDate) {
    return date;
  } else {
    return (date += `–${endDate}`);
  }
};

export const getEducation = (): object => {
  return education.map((school) => ({
    institution: school.institution,
    area: school.area,
    studyType: school.studyType,
    date: formatSchoolYears(
      moment(school.startDate).format(EDUCATION_DATE_FORMAT),
      school.endDate
        ? moment(school.endDate).format(EDUCATION_DATE_FORMAT)
        : 'Present'
    ),
    startDate: moment(school.startDate).format(EDUCATION_DATE_FORMAT),
    endDate: school.endDate
      ? moment(school.endDate).format(EDUCATION_DATE_FORMAT)
      : 'Present',
    note: school.note || null,
  }));
};
