import Vue from 'vue';
import { default as I18n } from 'vue-i18n';
import { assign } from 'lodash';
import { default as enLocale } from '../locale/en-us.js';
import { default as zhLocale } from '../locale/zh-cn.js';
import elementEnLocale from 'element-ui/lib/locale/lang/en';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';

Vue.use(I18n);
const messages = {
  'en-US': assign(enLocale, elementEnLocale),
  'zh-CN': assign(zhLocale, elementZhLocale),
};
export const i18n = new I18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages,
});
