export default {
  get(key, defaultValue) {
    if (typeof window.localStorage !== 'undefined') {
      let value = window.localStorage[key];
      return (typeof value !== 'undefined' ? JSON.parse(value) : defaultValue)
    }
    return defaultValue;
  },
  set(key, value) {
    if (typeof window.localStorage  !== 'undefined') {
      window.localStorage[key] = JSON.stringify(value)
    }
  },
  remove(key){
    if (typeof window.localStorage  !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  }

}
