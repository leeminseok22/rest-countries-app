import { useNavigate } from "react-router-dom";
import useCountries from "../hooks/useCountries";
import * as S from "./HomePage.styles";
export default function HomePage() {
    const { countries, isLoading, error } = useCountries();
    const navigate = useNavigate();

    if (isLoading) return <S.LoadingMessage>loading...</S.LoadingMessage>;
    if (error) return <S.ErrorMessage>{error}</S.ErrorMessage>;
    return (
        <S.Container>
            {countries.map((country) => (
                <div
                    key={country.cca3}
                    style={{
                        border: "1px solid #ddd",
                        padding: "20px",
                        cursor: "pointer",
                    }}
                    onClick={() => navigate(`/country/${country.cca3}`)}>
                    <img
                        src={country.flags.png}
                        alt={country.name.common}
                        style={{
                            width: "100%",
                            height: "150px",
                            objectFit: "cover",
                        }}
                    />
                    <h3>country.name.common</h3>
                    <p>수도: {country.capital?.[0]}</p>
                </div>
            ))}
        </S.Container>
    );
}
