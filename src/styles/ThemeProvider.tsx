import { PropsWithChildren } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const theme = {
    colors: {
        almond: "#E0D2C3",
        celadon: "#BCD8B7",
        cambridge: "#6BA292",
        emerald: "#35CE8D",
        flame: "#E24E1B",
    },
};

export const ThemeProvider = ({ children }: PropsWithChildren) => (
    <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProviderStyled>
);
