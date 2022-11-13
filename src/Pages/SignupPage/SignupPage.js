import React, { Component } from 'react';
import "./SignupPage.css";
import pencilImage from '../../Assets/signup-image.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
 
    export default class SignupPage extends Component {
    render() {
        return (
        <div>
            <div className='signup-section'>
                <div className="signup-left">
                    <img className="signup-image" src={pencilImage}></img>
                </div>

                <div className='signup-right'>
                    <div>
                        <h1 className='heading'>signup</h1>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <div className="inputName">
                                <div className="TextField-without-border-radius">
                                    <TextField id="outlined-basic" label="name" variant="outlined" /></div>
                                    </div>
                                <div className="inputFields">
                                    <div className="inputEmail">
                                <div className="TextField-without-border-radius">
                                    <TextField id="outlined-basic" label="email" variant="outlined" /></div>
                                    </div>
                                    <div className="inputPassword">
                                    <div className="TextField-without-border-radius">   
                                <TextField id="outlined-basic" label="password" variant="outlined" /></div>
                               </div>
                                <div className="pageButtons">
                                <div className='button-login'>signup</div>
                                <div className='button-signup'>
                                <Link className='link' to="/login">login</Link></div></div>
                            </div>
                        </Box>
                    </div>
                </div>
                

            </div>
        </div>
        )
    }
    }
    