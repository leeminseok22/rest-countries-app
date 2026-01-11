import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 20px 0;
    max-width: 1200px;
    margin: 0 auto; /* 중앙 정렬 */
`;

export const ControlsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const LoadingMessage = styled.div`
    text-align: center;
    font-size: 1.5rem;
    margin-top: 100px;
    color: #555;
`;

export const ErrorMessage = styled.div`
    text-align: center;
    color: #e74c3c;
    font-size: 1.2rem;
    margin-top: 100px;
    font-weight: bold;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 40px;
    width: 100%;
`;
