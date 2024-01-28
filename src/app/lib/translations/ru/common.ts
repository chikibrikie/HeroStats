import SCREENS from "shared/lib/screen";

export default {
  /* Вход */

  [SCREENS.SignIn]: "Вход",
  "Sign in": "Войти",
  "Not a member?": "Не зарегестрированы?",
  "Join now": "Присоединяйся сейчас",
  Email: "Электронная почта",
  Password: "Пароль",
  "Sign In": "Вход",
  "Forgot your password?": "Забыли пароль?",

  /* Регистрация */

  [SCREENS.SignUp]: "Регистрация",
  Join: "Присоединиться",
  "Already a member?": "Уже зарегестрированы?",
  "Confirm password": "Повторите пароль",
  "Yes, I want emails with recommendations, special offers and more.":
    "Да, я хочу получать электронные письма с рекомендациями, специальными предложениями и многим другим.",
  "Join Now": "Зарегистрироваться",
  "By joining HeroStats, you accept our Membership agreement, Privacy Policy and Terms of Use.":
    "Присоединяясь к HeroStats, вы принимаете наше Соглашение о членстве, Политику конфиденциальности и Условия использования.",

  /* Забыли пароль */

  [SCREENS.ForgotPassword]: "Забыли пароль",
  "Don’t worry, it happens to the best of us.":
    "Не волнуйтесь, такое случается с лучшими из нас.",
  "Send reset link": "Отправить ссылку для сброса",
  "Back to sign in": "Вернуться для входа в систему",
  "Email or username": "Эл.почта или имя пользователя",

  /* Настройки */

  [SCREENS.Settings]: "Настройки",
  "Change theme": "Сменить тему",
  Russian: "Русский",
  English: "Английский",

  /* Главная доска */

  [SCREENS.HomeBoard]: "Главная доска",

  Search: "Поиск",
} as const;
