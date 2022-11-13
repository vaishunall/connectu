import React, { Component } from 'react';
import "./LoginPage.css";
import bookImage from '../../Assets/books.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
 
    export default class LoginPage extends Component {
    render() {
        return (
        <div>
            <div className='login-section'>
                <div className="login-left">
                    <img className="login-image" src={bookImage}></img>
                </div>

                <div className='login-right'>
                    <div>
                        <h1 className='heading'>login</h1>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                                <div className="inputFields">
                                    <div className="inputEmail">
                                <div className="TextField-without-border-radius">
                                    <TextField id="outlined-basic" label="email" variant="outlined" /></div></div>
                                    <div className="inputPassword">
                                    <div className="TextField-without-border-radius">   
                                <TextField id="outlined-basic" label="password" variant="outlined" /></div>
                                </div>
                                <div className="pageButtons">
                                <div className='button-login'>login</div>
                                <div className='button-signup'>signup</div></div>
                            </div>
                        </Box>
                    </div>
                </div>
                

            </div>
        </div>
        )
    }
    }
    