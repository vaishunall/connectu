import React, { Component } from 'react';
import "./LoginPage.css";
import bookImage from '../../Assets/books.png';

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
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <input type="email" name="email" placeholder="email address" />
                            </div>
                            <div className="input-group">
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        <div className='button-login'>login</div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        )
    }
    }
