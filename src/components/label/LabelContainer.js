import React, { useEffect } from "react";
import LabelItem from "components/label/LabelItem";
import { getLabelList } from "store/label/label-thunk";
import { todoActions } from "store/todo/todo-slice";
import { useAppDispatch, useAppSelector } from "store/redux-hooks";
import { Button, Card, List } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "240px",
    width: "310px",
    backgroundColor: "white",
    overflowY: "auto",
    marginLeft: "1rem",
    paddingBottom: "1rem",
    position: "relative",
  },

  allBtn: {
    marginTop: "2rem",
    marginBottom: "0rem",
    marginLeft: "1rem",
    width: "100px",
  },

  emptyList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "8rem",
    color: "white",
  },
});
const LabelContainer = (props) => {
  const labelItems = useAppSelector((state) => state.label.labels);
  console.log(labelItems);
  const dispatch = useAppDispatch();
  const classes = useStyles();
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
                data-testid={"input-labelitem"}
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

export default LabelContainer;
