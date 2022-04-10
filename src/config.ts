interface AppConfig {
  OPERATORS: {
    PLUS: string;
    MINUS: string;
  };
  ADDING: number,
  START_COUNT: number,
  EQUAL_OR_GREATER_THAN_ZERO: number,
  LESS_THAN_ZERO: number,
  THEME_MODE: "theme-mode",
  THEMES: {
    DARK_MODE: "dark-mode",
    LIGHT_MODE: "light-mode",
  },
}

export const APP_CONFIG: AppConfig = {
  OPERATORS: {
    PLUS: "+",
    MINUS: "-",
  },
  ADDING: 1,
  START_COUNT: 0,
  EQUAL_OR_GREATER_THAN_ZERO: 0,
  LESS_THAN_ZERO: 0,
  THEME_MODE: "theme-mode",
  THEMES: {
    DARK_MODE: "dark-mode",
    LIGHT_MODE: "light-mode",
  },
}
