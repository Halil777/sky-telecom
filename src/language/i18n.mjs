import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar section
      home: "Home",
      products: "Products	",
      ourCompany: "Our Company",
      contactUs: " Contact Us",
      services: "Services",

      // Navbar section ends here ...
    },
  },
  ru: {
    translation: {
      // Navbar section starts here ...

      home: "Главная",
      products: "Продукты",
      ourCompany: "Наша компания",
      contactUs: "Связаться с нами",
      services: "Услуги",

      // Navbar section ends here .....
    },
  },
  tm: {
    translation: {
      // Navbar section ends here .....

      home: "Baş sahypa",
      products: "Önümler",
      ourCompany: "Biziň Kompaniýamyz",
      contactUs: "Habarlaşmak",
      services: "Hyzmatlar",

      // Navbar section ends here .....
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tm",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
