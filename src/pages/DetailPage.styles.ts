import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 0;
`;

export const BackButton = styled.button`
    padding: 10px 30px;
    background-color: white;
    border: none;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;

    &:hover {
        opacity: 0.7;
    }
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

export const FlagImg = styled.img`
    width: 100%;
    max-width: 500px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

export const InfoSection = styled.div`
    h2 {
        font-size: 2rem;
        margin-bottom: 30px;
        font-weight: 800;
    }
`;

export const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export const InfoItem = styled.div`
    font-size: 1rem;
    margin-bottom: 10px;

    strong {
        font-weight: 600;
        margin-right: 5px;
    }
`;

export const BorderSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    strong {
        font-weight: 600;
        margin-right: 10px;
        white-space: nowrap;
    }
`;

export const BorderBadge = styled.span`
    background-color: white;
    padding: 5px 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 0.9rem;
`;
