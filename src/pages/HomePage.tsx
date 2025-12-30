import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useCountries from "../hooks/useCountries";
import useDebounce from "../hooks/useDebounce";
import CountryCard from "../components/common/CountryCard";
import SearchInput from "../components/common/SearchInput";
import RegionFilter from "../components/common/ReigonFilter";
import * as S from "./HomePage.styles";

export default function HomePage() {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState<string>("");
    const [region, setRegion] = useState<string>("");

    const debouncedKeyword = useDebounce(keyword, 500);

    const { countries, isLoading, error } = useCountries(
        debouncedKeyword,
        region
    );

    if (isLoading) return <S.LoadingMessage>loading...</S.LoadingMessage>;
    if (error) return <S.ErrorMessage>{error}</S.ErrorMessage>;
    return (
        <S.Container>
            <S.ControlsContainer>
                <SearchInput value={keyword} onChange={setKeyword} />
                <RegionFilter value={region} onChange={setRegion} />
            </S.ControlsContainer>
            {isLoading && <S.LoadingMessage>⏳ 검색 중...</S.LoadingMessage>}
            {error && <S.ErrorMessage>🚨 {error}</S.ErrorMessage>}

            {!isLoading && !error && (
                <>
                    {countries.length === 0 ? (
                        <S.ErrorMessage>검색 결과가 없습니다.</S.ErrorMessage>
                    ) : (
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(250px, 1fr))",
                                gap: "40px",
                                width: "100%",
                            }}>
                            {countries.map((country) => (
                                <CountryCard
                                    key={country.cca3}
                                    country={country}
                                    onClick={() =>
                                        navigate(`/country/${country.cca3}`)
                                    }
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </S.Container>
    );
}
