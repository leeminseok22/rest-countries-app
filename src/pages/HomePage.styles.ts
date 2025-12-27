import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    /* 반응형 그리드: 최소 250px 너비 유지, 공간 남으면 늘어남 */
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 40px;
    padding: 20px 0;
`;

export const LoadingMessage = styled.div`
    text-align: center;
    font-size: 1.5rem;
    margin-top: 50px;
`;

export const ErrorMessage = styled.div`
    text-align: center;
    color: red;
    font-size: 1.2rem;
    margin-top: 50px;
`;
