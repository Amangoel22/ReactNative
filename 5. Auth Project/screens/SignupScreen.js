import AuthContent from "../components/Auth/AuthContent";

import { createUser } from "../util/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { useContext, useState } from "react";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState();

  const authCtx = useContext(AuthContent);

  async function signuphandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Error");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signuphandler} />;
}

export default SignupScreen;
