import { useState, useEffect } from "react";
import { countryApi } from "../api/countryApi";
import type { Country } from "../types/country";

export default function useCountries() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data = await countryApi.getAllCountries();
                console.log("data: ", data);
                setCountries(data);
            } catch (err) {
                console.error(err);
                setError("error error");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    return { countries, isLoading, error };
}
