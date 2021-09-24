import React from 'react';
import { Avatar, Button, Grid, Paper, TextField} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useHistory } from 'react-router';

const Signup=()=>{
    const paperStyle = {padding: 20,height: '90vh',width: 350,margin: "20px auto"}
    const avatarStyle = {backgroundColor: 'green'}
    let history = useHistory();

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><PersonAddIcon/></Avatar>
                    <h2>SignUp Here</h2>
                </Grid><br/><br/>

                <TextField type="text" label="Full Name" placeholder="Enter your Name" variant="outlined" fullWidth required/><br/><br/>
                <TextField type="email" label="Email ID" placeholder="Enter Email ID" variant="outlined" fullWidth required/><br/><br/>
                <TextField type="password" label="Password" placeholder="Enter Password" variant="outlined" fullWidth required/><br/><br/>

                <Button type="submit" color="primary" fullWidth variant="contained">Sign Up</Button><br/><br/>
                <Button type="submit" color="primary" fullWidth variant="contained" 
                   onClick={()=> {history.push("/login")}}>Have Account? Login Here</Button>
            </Paper> 
        </Grid>
    )
}

export default Signup;