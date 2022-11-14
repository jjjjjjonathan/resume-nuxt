import { basics } from '../../assets/resume.json';

export const getBasicsInfo = (property) => {
  return basics[property];
};

export const getHeaderLinks = (property) => {
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

export const getProfiles = () => {
  return basics.profiles.map((profile) => ({
    ...profile,
    network: `${profile.network} icon`
  }));
};