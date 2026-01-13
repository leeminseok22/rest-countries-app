import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme.colors.elements};
    color: ${(props) => props.theme.colors.text};

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);

    padding: 0 20px;
    height: 80px;
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease, color 0.2s ease;

    position: sticky;
    top: 0;
    z-index: 100;
`;

const HeaderContent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 800;
    cursor: pointer;
    margin: 0;
`;

const ModeSwitcher = styled.div`
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    user-select: none; /* 클릭할 때 텍스트 드래그 방지 */

    &:hover {
        opacity: 0.7;
    }
`;

export default function Header() {
    const { isDarkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <HeaderContent>
                {/* 로고 누르면 홈으로 이동 */}
                <Title onClick={() => navigate("/")}>Where in the world?</Title>

                <ModeSwitcher onClick={toggleTheme}>
                    {isDarkMode ? <>☀️ Light Mode</> : <>🌙 Dark Mode</>}
                </ModeSwitcher>
            </HeaderContent>
        </HeaderContainer>
    );
}
