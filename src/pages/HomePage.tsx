import { useNavigate } from "react-router-dom";
import useCountries from "../hooks/useCountries";
import CountryCard from "../components/common/CountryCard";
import * as S from "./HomePage.styles";

export default function HomePage() {
    const { countries, isLoading, error } = useCountries();
    const navigate = useNavigate();

    if (isLoading) return <S.LoadingMessage>loading...</S.LoadingMessage>;
    if (error) return <S.ErrorMessage>{error}</S.ErrorMessage>;
    return (
        <S.Container>
            {countries.map((country) => (
                <CountryCard
                    key={country.cca3}
                    country={country}
                    onClick={() => navigate(`/country/${country.cca3}`)}
                />
            ))}
        </S.Container>
    );
}
