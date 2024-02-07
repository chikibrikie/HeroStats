import SCREENS from "shared/lib/screen";

export default {
  "This field is requaired!": "Это обязательное поле!",
  "Invalid email address": "Не правильный электронный адрес",
  "Must be n or fewer characters long":
    "Должен содержать {{n}} символов или больше",

  /* Экраны */

  [SCREENS.SignIn]: "Вход",
  [SCREENS.SignUp]: "Регистрация",
  [SCREENS.ForgotPassword]: "Забыли пароль",
  [SCREENS.Settings]: "Настройки",
  [SCREENS.HomeBoard]: "Главная доска",
  [SCREENS.Tab]: "ТАБ",

  /* Вход */

  "Sign in": "Войти",
  "Not a member?": "Не зарегестрированы?",
  "Join now": "Присоединяйся сейчас",
  Email: "Электронная почта",
  Password: "Пароль",
  "Sign In": "Вход",
  "Forgot your password?": "Забыли пароль?",

  /* Регистрация */

  Join: "Присоединиться",
  "Already a member?": "Уже зарегестрированы?",
  "Confirm password": "Повторите пароль",
  "Yes, I want emails with recommendations, special offers and more.":
    "Да, я хочу получать электронные письма с рекомендациями, специальными предложениями и многим другим.",
  "Join Now": "Зарегистрироваться",
  "By joining HeroStats, you accept our Membership agreement, Privacy Policy and Terms of Use.":
    "Присоединяясь к HeroStats, вы принимаете наше Соглашение о членстве, Политику конфиденциальности и Условия использования.",

  /* Забыли пароль */

  "Don’t worry, it happens to the best of us.":
    "Не волнуйтесь, такое случается с лучшими из нас.",
  "Send reset link": "Отправить ссылку для сброса",
  "Back to sign in": "Вернуться для входа в систему",
  "Email or username": "Эл.почта или имя пользователя",

  /* Настройки */

  "Change theme": "Сменить тему",
  Russian: "Русский",
  English: "Английский",

  /* Главная доска */

  Search: "Поиск",
} as const;
