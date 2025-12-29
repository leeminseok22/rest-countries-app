export interface Country {
    cca3: string;
    name: {
        common: string;
        official: string;
        nativeName?: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    capital?: string[];
    region: string;
    population: number;

    subregion?: string;
    tld?: string[];
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages?: {
        [key: string]: string;
    };
    borders?: string[];
}
