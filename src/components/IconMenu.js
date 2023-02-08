import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

const IconMenu = (props) => {
  return (
    <Paper
      sx={{
        width: 80,
        maxWidth: "30%",
        marginLeft: "1rem",
        marginBottom: "1rem",
        position: "absolute",
        zIndex: "10",
      }}
    >
      <MenuList>
        <MenuItem>
          <ListItemText onClick={props.updateLabelHandler}>Rename</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText onClick={props.removeLabelHandler}>Delete</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default IconMenu;
