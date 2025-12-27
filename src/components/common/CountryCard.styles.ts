import styled from "styled-components";

export const CardContainer = styled.article`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
`;

export const FlagImg = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-bottom: 1px solid #f0f0f0;
`;

export const InfoBody = styled.div`
    padding: 24px;
`;

export const CountryName = styled.h3`
    margin: 0 0 16px 0;
    font-size: 1.2rem;
    font-weight: 800;
`;

export const StatRow = styled.div`
    margin-bottom: 8px;
    font-size: 0.9rem;

    strong {
        font-weight: 600;
    }
`;
