import React from "react";
import { Avatar, Button, Grid, Paper, TextField} from '@material-ui/core';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useHistory } from "react-router";

const Login=()=> {

    const paperStyle = {padding: 20,height: '80vh',width: 350,margin: "20px auto"}
    const avatarStyle = {backgroundColor: 'green'}
    let history = useHistory();

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>SignIn Here</h2>
                </Grid><br/><br/>

                <TextField type="email" label="Email ID" placeholder="Enter Email ID" variant="outlined" fullWidth required/><br/><br/>
                <TextField type="password" label="Password" placeholder="Enter Password" variant="outlined" fullWidth required/><br/><br/>

                <Button type="submit" color="primary" fullWidth variant="contained">Sign In</Button><br/><br/>
                <Button type="submit" color="primary" fullWidth variant="contained" onClick={()=> {history.push("/signup")}}>Create New Account</Button>
            </Paper> 
        </Grid>
    )
}

export default Login