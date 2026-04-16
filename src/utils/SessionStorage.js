export const setSessionStItem = (name, item) => {
  sessionStorage.setItem(name, JSON.stringify(item));
};
export const getSessionStItem = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};
export const clearSessionStItem = () => {
  sessionStorage.clear();
};
