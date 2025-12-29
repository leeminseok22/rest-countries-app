import { useParams, useNavigate } from "react-router-dom";
import useCountry from "../hooks/useCountry";
import * as S from "./DetailPage.styles";

export default function DetailPage() {
    const { code } = useParams();
    const { country, isLoading, error } = useCountry(code);
    const navigate = useNavigate();

    if (isLoading) return <div> loading...</div>;
    if (error) return <div> {error} </div>;
    if (!country) return <div> not exist data </div>;

    const nativeName = country.name.nativeName
        ? Object.values(country.name.nativeName)[0].common
        : country.name.common;

    const currencies = country.currencies
        ? Object.values(country.currencies)
              .map((cur) => cur.name)
              .join(", ")
        : "N/A";

    const languages = country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A";

    return (
        <S.Container>
            <S.BackButton onClick={() => navigate(-1)}>Back</S.BackButton>

            <S.ContentWrapper>
                <S.FlagImg />
                <S.InfoSection>
                    <h2></h2>

                    <S.InfoGrid>
                        <div>
                            <S.InfoItem>
                                <strong>Native Name:</strong> {nativeName}
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Population:</strong>{" "}
                                {country.population.toLocaleString()}
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Region:</strong> {country.region}
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Sub Region:</strong> {country.subregion}
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Capital:</strong> {country.capital?.[0]}
                            </S.InfoItem>
                        </div>

                        <div>
                            <S.InfoItem>
                                <strong>Top Level Domain:</strong>{" "}
                                {country.tld?.[0]}
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Currencies:</strong> {currencies}
                            </S.InfoItem>
                            <S.InfoItem>
                                <strong>Languages:</strong> {languages}
                            </S.InfoItem>
                        </div>
                    </S.InfoGrid>

                    {country.borders && country.borders.length > 0 && (
                        <S.BorderSection>
                            <strong>Border Countries:</strong>
                            {country.borders.map((border) => (
                                <S.BorderBadge key={border}>
                                    {border}
                                </S.BorderBadge>
                            ))}
                        </S.BorderSection>
                    )}
                </S.InfoSection>
            </S.ContentWrapper>
        </S.Container>
    );
}
