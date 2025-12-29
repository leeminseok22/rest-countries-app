import { useState, useEffect } from "react";
import { countryApi } from "../api/countryApi";
import type { Country } from "../types/country";

export default function useCountry(code: string | undefined) {
    const [country, setCountry] = useState<Country | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!code) {
            setIsLoading(false);
            return;
        }

        const fetchCountry = async () => {
            try {
                setIsLoading(true);
                const data = await countryApi.getCountryByCode(code);
                setCountry(data);
            } catch (err) {
                console.error(err);
                setError("data load error");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCountry();
    }, [code]);

    return { country, isLoading, error };
}
