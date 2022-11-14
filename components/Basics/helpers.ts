import { basics } from '../../assets/resume.json';

export const getBasicsInfo = (property: string): string | object => {
  return basics[property as keyof typeof basics];
};

export const getHeaderLinks = (property: string): string | object | undefined => {
  if (property === 'email') return basics[property];
  if (property === 'url') {
    return {
      url: basics[property],
      display: basics[property].split('//')[1]
    };
  }
  if (property === 'location') {
    return `${basics[property].city}, ${basics[property].region}`;
  }
};

export const getProfiles = (): object => {
  return basics.profiles.map((profile) => ({
    ...profile,
    network: `${profile.network} icon`
  }));
};

export const getSummary = (): string => {
  return basics.summary;
};