import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.onLoginClick = this.onLoginClick.bind(this)
    }

    onLoginClick() {
        console.log('click')
        window.location.href =" https://api.instagram.com/oauth/authorize/?client_id=fe200469b45e4545897e97168e24c0e5&redirect_uri=http://localhost:3000/&response_type=token&scope=public_content"
    }

    render() {
        return (
            <div>
                <button onClick={this.onLoginClick} type="button">Login</button>
            </div>
        );
    }
}

export default Login;
