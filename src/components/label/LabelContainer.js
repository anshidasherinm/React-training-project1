import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLabelList } from "../../store/label/label-thunk";
import { todoActions } from "../../store/todo/todo-slice";
import classes from "./LabelContainer.module.css";
import LabelItem from "./LabelItem";
import { Button, Card, List } from "@mui/material";

const LabelContainer = (props) => {
  const labelItems = useSelector((state) => state.label.labels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLabelList());
  }, []);

  const showAllHandler = () => {
    dispatch(todoActions.setBacktoAllItems());
  };

  return (
    <Card
      style={{
        width: "90%",
        backgroundColor: "#383838",
      }}
    >
      <div className={classes.allBtn}>
        <Button
          size="large"
          onClick={showAllHandler}
          variant="outlined"
          sx={{
            backgroundColor: "orange",
            borderRadius: "3rem",
            border: "none",
            color: "white",
            fontWeight: "bold",
            ":hover": {
              backgroundColor: "#ffb347",
              color: "white",
              border: "none",
            },
          }}
        >
          All
        </Button>
      </div>

      {labelItems.length > 0 && (
        <List
          sx={{
            width: "100%",
            paddingTop: "2rem",
            paddingBelow: "2rem",
            marginTop: "1rem",
            height: "10rem",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {labelItems.map((label) => {
            return (
              <LabelItem
                id={label.id}
                title={label.name}
                key={label.key}
                keyOfLabel={label.key}
              />
            );
          })}
        </List>
      )}
      {labelItems.length < 1 && (
        <div className={classes.emptyList}>No Labels </div>
      )}
    </Card>
  );
};

export default React.memo(LabelContainer);
