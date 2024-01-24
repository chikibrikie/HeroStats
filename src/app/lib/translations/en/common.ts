import SCREENS from "shared/lib/screen";

export default {
  "Not a member?": "Not a member?",
  English: "English",
  Russian: "Russian",
  [SCREENS.SignIn]: "Sign In",
  [SCREENS.SignUp]: "Sign Up",
  [SCREENS.ForgotPassword]: "Forgot Password",
  [SCREENS.Settings]: "Settings",
} as const;
