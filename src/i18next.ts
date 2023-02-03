import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { DateFormatter } from "@/utils";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          tasksPage: {
            title: "Tasks",
            noTasks: "No tasks yet",
            new: "New task ({{date, DATE_SHORT}})",
            logout: "Logout",
            calendar: {
              day: "{{date, DATE_DAY}}",
              month: "{{date, DATE_MONTH}}",
            }
          },
          loginPage: {
            title: "Login",
            link: "Or <1>sign up</1> for free",
          },
          authForm: {
            email: "Email",
            password: "Password",
            submit: "Submit"
          },
          signupPage: {
            title: "Sign Up",
            link: "Or <1>login</1> with an existing account",
          },
          newTaskPage: {
            title: "New task for {{date, DATE_SHORT}}",
            button: "Create"
          },
          updateTaskPage: {
            title: "Update task for {{date, DATE_SHORT}}",
            button: "Update"
          },
          taskEditor: {
            title: "Title",
            description: "Description"
          },
          error: {
            title: "ERROR"
          }
        }
      },
      ru: {
        translation: {
          tasksPage: {
            title: "Задачи",
            noTasks: "Еще нет ни одной задачи",
            new: "Новая задача ({{date, DATE_SHORT}})",
            logout: "Выйти",
            calendar: {
              day: "{{date, DATE_DAY}}",
              month: "{{date, DATE_MONTH}}",
            }
          },
          loginPage: {
            title: "Войти",
            link: "Или <1>зарегистрироваться</1> бесплатно",
          },
          authForm: {
            email: "Адрес электронной почты",
            password: "Пароль",
            submit: "Отправить"
          },
          signupPage: {
            title: "Зарегистрироваться",
            link: "Или <1>войти</1> под существующим аккаунтом"
          },
          newTaskPage: {
            title: "Новая задача на {{date, DATE_SHORT}}",
            button: "Создать"
          },
          updateTaskPage: {
            title: "Обновление задачи на {{date, DATE_SHORT}}",
            button: "Обновить"
          },
          taskEditor: {
            title: "Название",
            description: "Описание"
          },
          error: {
            title: "ОШИБКА"
          }
        }
      }
    }
  });

i18n.services.formatter!.add("DATE_DAY", (value, lng) =>
{
  return DateFormatter.ToDayAndWeekDay(value, lng!);
});

i18n.services.formatter!.add("DATE_MONTH", (value, lng) =>
{
  return DateFormatter.ToMonthAndYear(value, lng!);
});

i18n.services.formatter!.add("DATE_SHORT", (value, lng) =>
{
  return DateFormatter.ToCalendarDate(value, lng!);
});



export default i18n;