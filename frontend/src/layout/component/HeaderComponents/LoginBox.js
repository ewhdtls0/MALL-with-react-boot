import React from 'react';
import Grid from '@material-ui/core/Grid';
import Login from '../../img/loginIcon.png';
import Basket from '../../img/basketIcon.png';
import '../../css/Header.css';
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
                    <a className="LoginBox" href="/">
                        <div className="NoneBorder">
                            <img src={Login} width="30%" height="50%"></img>
                            <div className="LoginBoxDropDown">
                                <a href="/" className="DropDownMenu"><span>주문조회</span></a>
                                <a href="/" className="DropDownMenu"><span>회원정보</span></a>
                            </div>
                        </div>
                    </a>
                </Grid>
                <Grid item xs={6}>
                    <a className="LoginBox" href="/"><div className="NoneBorder"><img src={Basket} width="30%" height="50%"></img></div></a>
                </Grid>
            </Grid>
        </div>
    )

}

export default LoginBox;