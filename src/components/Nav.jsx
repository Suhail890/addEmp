import React from "react";
import NavItem from "./NavItem";
import { Grid } from "@mui/material";
const Nav = () => {
  return (
    <div className="nav">
       <Grid container spacing={1}>                       
        <NavItem path="/emp" title="Add Employee" xs={2} />           
      </Grid>
      </div>
  );
};

export default Nav;