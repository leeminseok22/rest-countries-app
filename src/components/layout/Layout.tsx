import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Main = styled.main`
    padding: 20px;
`;

export default function Layout() {
    return (
        <div>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </div>
    );
}
