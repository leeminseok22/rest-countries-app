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

    const handleSearch = (value: string) => {
        setKeyword(value);
    };

    const debouncedKeyword = useDebounce(keyword, 500);

    const { countries, isLoading, error } = useCountries(
        debouncedKeyword,
        region
    );

    return (
        <S.PageContainer>
            <S.ControlsWrapper>
                <SearchInput value={keyword} onChange={handleSearch} />
                <RegionFilter value={region} onChange={setRegion} />
            </S.ControlsWrapper>

            {isLoading ? (
                <S.LoadingMessage>
                    ⏳ 데이터를 찾고 있습니다...
                </S.LoadingMessage>
            ) : error ? (
                <S.ErrorMessage>🚨 {error}</S.ErrorMessage>
            ) : (
                <>
                    {countries.length === 0 ? (
                        <S.ErrorMessage>검색 결과가 없습니다.</S.ErrorMessage>
                    ) : (
                        <S.CardGrid>
                            {countries.map((country) => (
                                <CountryCard
                                    key={country.cca3}
                                    country={country}
                                    onClick={() =>
                                        navigate(`/country/${country.cca3}`)
                                    }
                                />
                            ))}
                        </S.CardGrid>
                    )}
                </>
            )}
        </S.PageContainer>
    );
}
