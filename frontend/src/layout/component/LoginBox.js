import React from 'react';
import Grid from '@material-ui/core/Grid';
import Login from '../img/loginIcon.png';
import Basket from '../img/basketIcon.png';

const LoginBoxOptions = {
    display: 'flex',
    width: '100%',
    height: '60px',
    marginLeft: '0px',
    marginTop: '5px',
}
const LoginBox = () => {
    return(
        <div style={LoginBoxOptions}>
            <Grid container >
                <Grid item xs={6}>
                    <img src={Login} width="30%" height="50%"></img>
                </Grid>
                <Grid item xs={6}>
                    <img src={Basket} width="30%" height="50%"></img>
                </Grid>
            </Grid>
        </div>
    )

}

export default LoginBox;