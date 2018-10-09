import { find, findIndex } from 'lodash';

const locales = [
  {
    value: 'en-US',
    flag: 'us',
    language: 'English',
  },
  {
    value: 'zh-CN',
    flag: 'cn',
    language: '中文',
  },
];

const state = {
  locale: locales[0],
  locales,
};

const actions = {
  changeLocale({ commit }, value) {
    commit('setLocale', value);
  },
  changeLocaleByFlag({ commit }, flag) {
    const target = find(locales, candidate => candidate.flag === flag);
    commit('setLocale', target.value);
  },
  changeLocaleByLanguage({ commit }, language) {
    const target = find(locales, candidate => candidate.language === language);
    commit('setLocale', target.value);
  },
};

const mutations = {
  setLocale(state, value) {
    const idx = findIndex(locales, candidate => candidate.value === value);
    state.locale = locales[idx];
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
