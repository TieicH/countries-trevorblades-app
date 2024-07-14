export interface Continents {
  continents: {
    code: string;
    name: string;
  }[];
}

export interface Currencies {
  countries: {
    currencies: string[];
  }[];
}

export interface Countries {
  countries: Country[];
}

export interface Country {
  code: string;
  name: string;
  emoji: string;
  currencies: string[];
  continent: {
    name: string;
  };
  languages: {
    name: string;
  }[];
  capital: string;
}
