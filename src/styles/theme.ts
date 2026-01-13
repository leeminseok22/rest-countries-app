export interface Theme {
    colors: {
        background: string;
        elements: string;
        text: string;
        input: string;
    };
}

export const lightTheme: Theme = {
    colors: {
        background: "#fafafa",
        elements: "#ffffff",
        text: "#111517",
        input: "#858585",
    },
};

export const darkTheme: Theme = {
    colors: {
        background: "#202c37",
        elements: "#2b3945",
        text: "#ffffff",
        input: "#ffffff",
    },
};
