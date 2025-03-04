import * as React from 'react';

interface IAppContext {
  theme: string;
  setThemeState: (theme: string) => void;
  toggleTheme: () => void;
}

const AppContext = React.createContext<IAppContext>({
  theme: 'light',
  setThemeState: () => {},
  toggleTheme: () => {},
});

export const useContext = () => {
  const context =  React.useContext(AppContext);
  if (context) {
    return context;
  } else {
    throw new Error('Context must be used with Provider.');
  }
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState('light');
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    initialize();
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme]);

  const initialize = () => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    setIsMounted(true);
  }

  const setThemeState = React.useCallback((value: string) => {
    setTheme(value);
  }, [setTheme]);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  const value = React.useMemo(
    () => ({
      theme,
      setThemeState,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <AppContext.Provider value={value}>
      {isMounted ? children : <></>}
    </AppContext.Provider>
  )
}

export default AppProvider;