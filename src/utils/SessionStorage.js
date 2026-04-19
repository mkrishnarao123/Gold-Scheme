export const setSessionStItem = (name, item) => {
  sessionStorage.setItem(name, JSON.stringify(item));
};

export const getSessionStItem = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};

export const isSessionStItem = (name) => {
  const item = sessionStorage.getItem(name);
  return item ? JSON.parse(item) : false;
};

export const removeSessionStItem = (name) => {
  sessionStorage.removeItem(name);
};

export const clearSessionStItem = () => {
  sessionStorage.clear();
};
