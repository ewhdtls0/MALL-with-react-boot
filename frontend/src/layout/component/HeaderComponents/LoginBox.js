import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from '../../img/loginIcon.png';
import Basket from '../../img/basketIcon.png';
import '../../css/Header.css';
import axios from 'axios';
import AuthenticationService from '../../../login/jwt/AuthenticationService';
import { Link } from 'react-router-dom';

const LoginBoxOptions = {
    display: 'flex',
    width: '100%',
    height: '60px',
    marginLeft: '0px',
    marginTop: '5px',
}

const logined_user = AuthenticationService.getLoggedInUserName();

const LoginBox = () => {
    const [loginUser, setLoginUser] = useState();

    useEffect(() => {
        axios.get(`/user/${logined_user}`)
        .then(response => {
          setLoginUser(response.data.userID);
        })
    }, [])
    return(
        <div style={LoginBoxOptions}>
            {loginUser != null && 
                <Grid container >
                    <Grid item xs={6}>
                        <a className="LoginBox" href="/">
                            <div className="NoneBorder">
                                <img src={Login} width="30%" height="50%"></img>
                                <div className="LoginBoxDropDown">
                                    <a href="/" className="DropDownMenu"><span>주문조회</span></a>
                                    <a href="/myPage" className="DropDownMenu"><span>회원정보</span></a>
                                </div>
                            </div>
                        </a>
                    </Grid>
                    <Grid item xs={6}>
                        <Link className="CartBox" to={`/Cart/${loginUser}`}>
                            <div className="NoneBorder">
                                <img src={Basket} width="30%" height="50%"></img>
                            </div>
                        </Link>
                    </Grid>
                </Grid>            
            }
            {loginUser == null && 
                <Grid container >
                    <Grid item xs={12}>
                        <div className="NoneBorder" style={{fontWeight: "bold", fontSize: "18px", color: "black"}}>
                            <br></br>
                            로그인 후 이용가능합니다.
                        </div>
                    </Grid>
                </Grid>            
            }

        </div>
    )

}

export default LoginBox;