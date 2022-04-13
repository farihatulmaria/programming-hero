import React from "react";
import { Button } from "react-bootstrap";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase";
import facebook from "../../images/social/facebook.png";
import github from "../../images/social/github.png";
import google from "../../images/social/google.png";

const SocialLogin = () => {
    
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2] = useSignInWithFacebook(auth);

  const navigate = useNavigate();
  if (user || user1 || user2) {
    navigate("/");
  }
  return (
    <div className="social-login">
      <p className="or text-center my-4">or</p>

      <div className="text-center">
        <Button variant="light" onClick={() => signInWithGoogle()}>
          <img src={google} alt="" width={"50px"} />
          Sign In With Google
        </Button>

        <Button variant="light" onClick={() => signInWithFacebook()}>
          <img src={facebook} alt="" width={"30px"} />
          Sign In With facebook
        </Button>

        <Button variant="light" onClick={() => signInWithGithub()}>
          <img src={github} alt="" width={"30px"} />
          Sign In With Github
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
