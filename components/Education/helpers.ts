import { education } from '../../assets/resume.json';
import moment from 'moment';

const dateFormat = 'YYYY';

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
      moment(school.startDate).format(dateFormat),
      school.endDate ? moment(school.endDate).format(dateFormat) : 'Present'
    ),
    startDate: moment(school.startDate).format(dateFormat),
    endDate: school.endDate
      ? moment(school.endDate).format(dateFormat)
      : 'Present',
    note: school.note || null,
  }));
};
