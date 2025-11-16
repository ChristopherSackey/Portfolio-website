import { createContext, useContext,} from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({children}) => {
//     const [theme, setTheme] = useState(() => {
//         const store = localStorage.getItem("theme");
//         return store ? JSON.parse(store) : false;
//     });

//     useEffect(() => {
//         localStorage.setItem("theme", JSON.stringify(theme));

//         if(theme) {
//             document.documentElement.classList.add("dark");
//         } else{
//             document.documentElement.classList.remove("dark");
//         }
//     }, [theme]);

//     return (
//         <ThemeContext.Provider value={{theme, setTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }