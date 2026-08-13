import { ui, defaultLang, type Lang } from "./ui";

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in ui;
}
