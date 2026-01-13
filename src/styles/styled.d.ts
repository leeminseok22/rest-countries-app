import "styled-components";
import type { Theme } from "./theme";

declare module "styled-components" {
    // eslint-disable-next-line
    export interface DefaultTheme extends Theme {}
}
