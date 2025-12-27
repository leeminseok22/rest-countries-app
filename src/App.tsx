import { useEffect, useState } from "react";
import { countryApi } from "./api/countryApi";
import type { Country } from "./types/country";

function App() {
    const [data, setData] = useState<Country[]>([]);
    console.log("data: ", data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const countries = await countryApi.getAllCountries();
                console.log("main", countries);
                setData(countries?.slice(0, 5));
            } catch (error) {
                console.error("err", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <p>api test</p>
            <ul>
                {data.map((country) => (
                    <li key={country.cca3}>
                        {country.name.common}({country.cca3})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
