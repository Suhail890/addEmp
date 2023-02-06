import React from 'react'
import {Link} from "react-router-dom"
import {Grid} from "@mui/material"

const NavItem = ({path,title,xs}) => {
  return (
    <React.Fragment>
        <Grid item xs={xs}>
            <Link to={path}>{title}</Link>
        </Grid>
    </React.Fragment>
  )
}

export default NavItem