import axiosClient from "./axiosClient";
import type { Country } from "../types/country";

export const countryApi = {
    getAllCountries: async (): Promise<Country[]> => {
        const response = await axiosClient.get(
            "/all?fields=name,flags,capital,region,population,cca3"
        );
        return response?.data;
    },
};
