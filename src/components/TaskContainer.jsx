import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { useState } from "react";
import "../styles/TaskContainer.css";
import Task from "./Task";
import NoTask from "./NoTask";
import { useTheme } from "@emotion/react";
import { v4 as uuidv4 } from "uuid";

export default function TaskContainer() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [titleInput, setTitleInput] = useState("");
  const [task, setTask] = useState(() => {
    const storedTask = localStorage.getItem("tasks");
    return storedTask ? JSON.parse(storedTask) : [];
  });

  const addingTask = () => {
    const newTask = { id: uuidv4(), title: titleInput, completed: false };
    const updatedTasks = [...task, newTask];
    setTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTitleInput("");
  };

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
    localStorage.setItem(
      "tasks",
      JSON.stringify(task.filter((task) => task.id !== id))
    );
  };

  const checkComplete = (id) => {
    const newTasks = task.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTask([...newTasks]);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  const editTask = (id, newTitle) => {
    const newTasks = task.map((task) => {
      if (task.id == id) {
        task.title = newTitle;
      }

      return task;
    });
    setTask([...newTasks]);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div
      style={{
        marginBlock: "20px",
        paddingBottom: "20px",
      }}
    >
      <Typography
        component="h1"
        sx={{
          textAlign: "center",
          fontSize: { xs: "2rem", md: "4rem" },
          marginBlock: "40px",
        }}
      >
        {t("address")}{" "}
      </Typography>
      <div
        className="field-container"
        style={{ backgroundColor: theme.palette.secondary.main }}
      >
        <input
          type="text"
          placeholder={t("taskAddind")}
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          style={{
            backgroundColor: theme.palette.secondary.main,
            caretColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
          }}
        />
        <button
          onClick={addingTask}
          color="primary"
          disabled={!titleInput}
         
          style={{
            backgroundColor: titleInput ? theme.palette.primary.main : "grey",
            color: theme.palette.secondary.main,
            cursor: titleInput ? "pointer" : "not-allowed",
          }}
        >
          {t("add")}
        </button>
      </div>
      {task.length === 0 ? (
        <NoTask />
      ) : (
        <Task
          task={task}
          deleteTask={deleteTask}
          checkComplete={checkComplete}
          editTask={editTask}
        />
      )}
    </div>
  );
}
