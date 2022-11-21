import { basics } from './resume.json';
import {
  BasicsUrl,
  BasicsLocation,
  BasicsEmail,
  BasicsPhone,
  BasicsProfile,
} from './interfaces';

const reducers = {
  url(): BasicsUrl {
    return {
      url: basics.url,
      urlDisplay: basics.url.split('//')[1],
      urlIcon: 'fa6-solid:globe',
    };
  },

  location(): BasicsLocation {
    return {
      location: `${basics.location.city}, ${basics.location.region}`,
      locationIcon: 'fa6-solid:location-dot',
    };
  },

  email(): BasicsEmail {
    return {
      emailDisplay: basics.email,
      emailUrl: `mailto:${basics.email}`,
      emailIcon: 'fa6-solid:envelope',
    };
  },

  phone(): BasicsPhone | null {
    if (basics.phone.length < 1) {
      return null;
    } else {
      return {
        phone: basics.phone,
        icon: 'fa6-solid:phone',
      };
    }
  },

  profiles(): BasicsProfile[] {
    return basics.profiles.map((profile) => ({
      profileUsername: profile.username,
      profileUrl: profile.url,
      profileIcon:
        profile.network === 'GitHub'
          ? 'fa6-brands:github'
          : profile.network === 'LinkedIn'
          ? 'fa6-brands:linkedin'
          : null,
    }));
  },

  default(property: string): string | object {
    return basics[property as keyof typeof basics];
  },
};

export const getBasics = (
  property: string
):
  | string
  | object
  | BasicsUrl
  | BasicsLocation
  | BasicsEmail
  | BasicsPhone
  | BasicsProfile
  | null => {
  return (reducers[property as keyof typeof reducers] || reducers.default)(
    property
  );
};
