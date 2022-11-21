export interface BasicsUrl {
  url: string;
  urlDisplay: string;
  urlIcon: 'fa6-solid:globe';
}

export interface BasicsLocation {
  location: string;
  locationIcon: 'fa6-solid:location-dot';
}

export interface BasicsEmail {
  emailDisplay: string;
  emailUrl: string;
  emailIcon: 'fa6-solid:envelope';
}

export interface BasicsPhone {
  phone: string;
  icon: 'fa6-solid:phone';
}

export interface BasicsProfile {
  profileUsername: string;
  profileUrl: string;
  profileIcon: string | null;
}
