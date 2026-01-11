import { useState, useEffect } from "react";
import { countryApi } from "../api/countryApi";
import type { Country } from "../types/country";
import axios from "axios";

export default function useCountries(searchKeyword: string, region: string) {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(false);
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

                setCountries(data);
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    const errorStatus = err.response?.status;
                    setCountries([]);
                    setError(
                        errorStatus === 404 ? null : "오류가 발생했습니다."
                    );
                } else {
                    console.log(err);
                    setError("오류가 발생했습니다.");
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [searchKeyword, region]);
    return { countries, isLoading, error };
}
