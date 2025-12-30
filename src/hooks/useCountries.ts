import { useState, useEffect } from "react";
import { countryApi } from "../api/countryApi";
import type { Country } from "../types/country";

export default function useCountries(searchKeyword: string, region: string) {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                let data: Country[] = [];

                if (searchKeyword) {
                    data = await countryApi.getCountriesByName(searchKeyword);
                } else if (region) {
                    data = await countryApi.getCountriesByRegion(region);
                } else {
                    data = await countryApi.getAllCountries();
                }

                console.log("data: ", data);
                setCountries(data);
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    setCountries([]);
                } else {
                    console.error(err);
                    setError("error error");
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [searchKeyword, region]);
    return { countries, isLoading, error };
}
