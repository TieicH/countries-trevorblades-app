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
  countries: {
    code: string;
    name: string;
    currency: string;
    continent: {
      name: string;
    };
    languages: {
      name: string;
    }[];
    capital: string;
  }[];
}

export interface CountryFilters {
  name: string;
  currency: string;
  continent: string;
}
