import axiosClient from "./axiosClient";
import type { Country } from "../types/country";

export const countryApi = {
    getAllCountries: async (): Promise<Country[]> => {
        const response = await axiosClient.get(
            "/all?fields=name,flags,capital,region,population,cca3"
        );
        return response?.data;
    },

    getCountryByCode: async (code: string): Promise<Country | null> => {
        const response = await axiosClient.get<Country>(
            `/alpha/${code}?fields=name,flags,capital,region,population,cca3,subregion,currencies,languages,borders,tld`
        );

        return response.data || null;
    },
};
