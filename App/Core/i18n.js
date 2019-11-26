import ReactNativeLanguages from 'react-native-languages';
import i18n from 'i18next';
import {DeviceEventEmitter} from 'react-native';
import moment from 'moment';

import en from '../Locales/en.json';
import ptBr from '../Locales/pt-br.json';
import zhCn from '../Locales/zh-cn.json';

require('moment/min/locales');

const I18N = i18n.init({
  debug: true,
  lng: ReactNativeLanguages.language,
  fallbackLng: 'en',
  resources: {en, pt_br: ptBr, zh_cn: zhCn},
});
// const aux = { translation: { logout: 'arroz' } };
// for (const attrname in aux.translation) { en.translation[attrname] = aux.translation[attrname]; }

// console.log(en);

const Translate = (text, variables = {}) => {
  return I18N.t(text, variables);
};

const AddLanguage = (lang, strings = {}) => {
  return I18N.addResourceBundle(lang, 'translation', strings, true, true);
};

const ChangeLanguage = language => {
  moment.locale(language.replace('_', '-'));
  I18N.changeLanguage(language.replace('-', '_'));
  DeviceEventEmitter.emit('languageChange', language);
};

export {Translate, ChangeLanguage, AddLanguage};
export default I18N;
