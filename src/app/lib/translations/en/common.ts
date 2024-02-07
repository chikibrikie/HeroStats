import SCREENS from "shared/lib/screen";

export default {
  "This field is requaired!": "This field is requaired!",
  "Invalid email address": "Invalid email address",
  "Must be n or fewer characters long":
    "Must be {{n}} or fewer characters long",

  /*Screens*/

  [SCREENS.SignIn]: "Sign In",
  [SCREENS.SignUp]: "Sign Up",
  [SCREENS.ForgotPassword]: "Forgot Password",
  [SCREENS.Settings]: "Settings",
  [SCREENS.HomeBoard]: "HomeBoard",
  [SCREENS.Tab]: "tab",

  /*SignIn*/

  "Sign in": "Sign in",
  "Not a member?": "Not a member?",
  "Join now": "Join now",
  Email: "Email",
  Password: "Password",
  "Sign In": "Sign In",
  "Forgot your password?": "Forgot your password?",

  /*SignUp*/

  Join: "Join",
  "Already a member?": "Already a member?",
  "Confirm password": "Confirm password",
  "Yes, I want emails with recommendations, special offers and more.":
    "Yes, I want emails with recommendations, special offers and more.",
  "Join Now": "Join Now",
  "By joining HeroStats, you accept our Membership agreement, Privacy Policy and Terms of Use.":
    "By joining HeroStats, you accept our Membership agreement, Privacy Policy and Terms of Use.",

  /*ForgotPassword*/

  "Don’t worry, it happens to the best of us.":
    "Don’t worry, it happens to the best of us.",
  "Email or username": "Email or username",
  "Send reset link": "Send reset link",
  "Back to sign in": "Back to sign in",

  /*SettingsScreen*/

  "Change theme": "Change theme",
  Russian: "Russia",
  English: "English",

  /*HomeBoard*/

  Search: "Search",
} as const;
