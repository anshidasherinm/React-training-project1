import React from "react";
import { Grid } from "@mui/material";
import TodoForm from "components/todo/TodoForm";
import TodosContainer from "components/todo/TodosContainer";
import LabelForm from "components/label/LabelForm";
import LabelContainer from "components/label/LabelContainer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h1>My Todo App</h1>
      <Grid
        container
        spacing={2}
        style={{
          height: "15rem",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="todosSection">
            <TodoForm />
            <TodosContainer />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="labelsSection">
            <LabelForm />
            <LabelContainer />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
