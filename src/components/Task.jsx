import {
  CardContent,
  Card,
  Box,
  Typography,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "../styles/Task.css";
import { useTheme } from "@emotion/react";

export default function Task({ task, deleteTask, checkComplete, editTask }) {
  const [value, setValue] = useState("all");
  const [newTitle, setNewTitle] = useState("");
  const [id, setId] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [filterTask, setFilterTask] = useState([]);
  const { t } = useTranslation();
  const theme = useTheme();

  useEffect(() => {
    if (value === "all") {
      setFilterTask([...task]);
    } else if (value === "pending") {
      setFilterTask(task.filter((task) => !task.completed));
    } else if (value === "completed") {
      setFilterTask(task.filter((task) => task.completed));
    }
  }, [task, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="all" label={t("all")} />
          <Tab value="pending" label={t("pending")} />
          <Tab value="completed" label={t("completed")} />
        </Tabs>
      </Box>

      {filterTask.map((fTask) => {
        return (
          <Card sx={{ minWidth: 275, marginBlock: "20px" }} key={fTask.id}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                gutterBottom
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  fontWeight: "bold",
                  textDecoration: fTask.completed ? "line-through" : "none",
                  textDecorationColor: theme.palette.primary.main,
                  textDecorationThickness: "1.5px",
                  letterSpacing: "1px",
                }}
              >
                {fTask.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: "17px",
                  width: { xs: "30%", md: "10%" },
                }}
              >
                <CheckCircleOutlineIcon
                  sx={fTask.completed ? { color: "green" } : { color: "gray" }}
                  onClick={() => {
                    checkComplete(fTask.id);
                  }}
                />
                <DeleteIcon
                  sx={{ color: "red" }}
                  onClick={() => {
                    deleteTask(fTask.id);
                  }}
                />
                <EditIcon
                  onClick={() => {
                    setIsEditing(true);
                    setId(fTask.id);
                    setNewTitle(fTask.title);
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        );
      })}

      {isEditing && (
        <div className="field-contain">
          <div className="input-contain">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Button
              onClick={() => {
                editTask(id, newTitle);
                setIsEditing(false);
                setNewTitle("");
              }}
              disabled={!newTitle}
            >
              {t("save")}
            </Button>
            <Button
              color="error"
              onClick={() => {
                setIsEditing(false);
                setNewTitle("");
              }}
            >
              {t("cancel")}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
