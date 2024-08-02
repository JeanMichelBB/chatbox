// src/components/Login/Login.jsx
import { GoogleLogin } from 'react-google-login';


const clientId = '';

function Login() {

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    }

    return (
        <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
        </div>
    );
    }

export default Login;