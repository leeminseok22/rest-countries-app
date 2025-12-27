import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    font-weight: bold;
`;

const Main = styled.main`
    padding: 20px;
`;

export default function Layout() {
    return (
        <div>
            <Header> test layout</Header>
            <Main>
                <div>hi</div>
                <Outlet />
            </Main>
        </div>
    );
}
