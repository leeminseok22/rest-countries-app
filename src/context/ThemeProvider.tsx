import { useState } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeContext } from "../hooks/useTheme";

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <StyledProvider theme={theme}>
                <GlobalStyle theme={theme} />
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    );
}
