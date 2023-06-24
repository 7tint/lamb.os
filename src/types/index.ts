// eslint-disable-next-line import/prefer-default-export
export enum Themes {
  Default = 0,
}

export const ThemeStyles = {
  [Themes.Default]: {
    primary: "red.50",
    secondary: "red.100",
    background: "teal.100",
    gray: "gray.50",
    outline: "teal.900",
    text: "gray.100",
  },
};
