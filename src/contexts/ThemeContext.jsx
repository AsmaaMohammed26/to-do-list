import {createContext , useState} from "react";

export const ThemeContext = createContext("light");



export default function ThemeProvider({children}){
const [mode , setMode] = useState(()=>{
    return  localStorage.getItem("currentMode") || "light"
}) 

function toggleMode(){
   const newMode = mode == "light" ? "dark" : "light"
    localStorage.setItem("currentMode", newMode)
    setMode(newMode)
}

 return(
       <ThemeContext.Provider  value={{mode ,toggleMode}}>
        {children}
    </ThemeContext.Provider>
 )
}