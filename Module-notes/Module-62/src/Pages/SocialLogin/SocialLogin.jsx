import React from 'react';
import { Button } from 'react-bootstrap';
import facebook from '../../images/social/facebook.png';
import github from '../../images/social/github.png';
import google from '../../images/social/google.png';
const SocialLogin = () => {
    return (
        <div className='social-login'>
            <p className='or text-center my-4'>or</p>

            <div className='text-center'>
                <Button variant='light'> 
                    <img src={google} alt="" width={"50px"} />
                    Sign In With Google
                </Button>

                <Button variant='light'> 
                    <img src={facebook} alt="" width={"30px"} />
                    Sign In With facebook
                </Button>

                <Button variant='light'> 
                    <img src={github} alt="" width={"30px"} />
                    Sign In With Github
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;