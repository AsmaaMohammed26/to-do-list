import {  IconButton } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"; 
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ToggleModeButton() {
  const { toggleMode, mode } = useContext(ThemeContext);
  return (
    <>
      <IconButton aria-label="mode">
        {mode === "light" ? (
          <DarkModeIcon onClick={toggleMode} sx={{ color: "black" }} />
        ) : (
          <LightModeIcon onClick={toggleMode} sx={{ color: "yellow" }} />
        )}
      </IconButton>
      
    </>
  );
}

