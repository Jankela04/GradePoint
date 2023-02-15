import { createContext, ReactNode, useContext, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: ()=>{}
})

type ThemeProviderProps ={
    children: ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps): JSX.Element =>{
    const [theme, setTheme] = useState<Theme>('dark');

    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () =>{
    const {theme, toggleTheme} = useContext(ThemeContext);
    return {theme, toggleTheme}
}

export {ThemeProvider, useTheme};
export default ThemeContext;