import SCREENS from "shared/lib/screen";

export default {
  /*SignIn*/

  [SCREENS.SignIn]: "Sign In",
  "Sign in": "Sign in",
  "Not a member?": "Not a member?",
  "Join now": "Join now",
  Email: "Email",
  Password: "Password",
  "Sign In": "Sign In",
  "Forgot your password?": "Forgot your password?",

  /*SignUp*/

  [SCREENS.SignUp]: "Sign Up",
  Join: "Join",
  "Already a member?": "Already a member?",
  "Confirm password": "Confirm password",
  "Yes, I want emails with recommendations, special offers and more.":
    "Yes, I want emails with recommendations, special offers and more.",
  "Join Now": "Join Now",
  "By joining HeroStats, you accept our Membership agreement, Privacy Policy and Terms of Use.":
    "By joining HeroStats, you accept our Membership agreement, Privacy Policy and Terms of Use.",

  /*ForgotPassword*/

  [SCREENS.ForgotPassword]: "Forgot Password",
  "Don’t worry, it happens to the best of us.":
    "Don’t worry, it happens to the best of us.",
  "Email or username": "Email or username",
  "Send reset link": "Send reset link",
  "Back to sign in": "Back to sign in",

  /*SettingsScreen*/

  [SCREENS.Settings]: "Settings",
  "Change theme": "Change theme",
  Russian: "Russia",
  English: "English",
  /*HomeBoard*/

  [SCREENS.HomeBoard]: "HomeBoard",
  Search: "Search",
} as const;
