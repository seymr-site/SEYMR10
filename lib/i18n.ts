import fr from '../i18n/fr.json';
import en from '../i18n/en.json';
import ar from '../i18n/ar.json';
import zh from '../i18n/zh.json';
import ru from '../i18n/ru.json';
export const locales = ['fr','en','ar','zh','ru'] as const;
export type Locale = typeof locales[number];
export function getMessages(locale: string){
  switch(locale){
    case 'en': return en;
    case 'ar': return ar;
    case 'zh': return zh;
    case 'ru': return ru;
    default: return fr;
  }
}
export function t(dict:any, path:string, fallback?:string){
  return path.split('.').reduce((o,k)=> (o||{})[k], dict) || fallback || path;
}
