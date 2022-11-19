import { basics } from '../assets/resume.json';

const reducers = {
  url(): object {
    return {
      url: basics.url,
      display: basics.url.split('//')[1],
    };
  },

  location(): string {
    return `${basics.location.city}, ${basics.location.region}`;
  },

  default(property: string): string | object {
    return basics[property as keyof typeof basics];
  },
};

export const getBasics = (property: string): string | object => {
  return (reducers[property as keyof typeof reducers] || reducers.default)(
    property
  );
};
