import type { Country } from "../../types/country";
import * as S from "./CountryCard.styles";

interface CountryCardProps {
    country: Country;
    onClick: () => void;
}

export default function CountryCard({ country, onClick }: CountryCardProps) {
    return (
        <S.CardContainer onClick={onClick}>
            <S.FlagImg
                src={country.flags.png}
                alt={`${country.name.common} flag`}
            />
            <S.InfoBody>
                <S.CountryName>{country.name.common}</S.CountryName>

                <S.StatRow>
                    <strong>Population:</strong>{" "}
                    {country.population.toLocaleString()}
                </S.StatRow>
                <S.StatRow>
                    <strong>Region:</strong> {country.region}
                </S.StatRow>
                <S.StatRow>
                    <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
                </S.StatRow>
            </S.InfoBody>
        </S.CardContainer>
    );
}
