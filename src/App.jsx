import { Container } from "@mui/material";
import ToggleModeButton from "./components/ToggleModeButton";
import ToggleLangButton from "./components/ToggleLangButton";
import TaskContainer from "./components/TaskContainer";
import "./styles/App.css";

function App() {
  return (
    <Container maxWidth="lg" sx={{ pt: "20px" }}>
      <ToggleModeButton />
      <ToggleLangButton />
      <TaskContainer />
    </Container>
  );
}

export default App;
