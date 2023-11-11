export const saveToStorage = (array) => {
  localStorage.setItem("storage", JSON.stringify(array));
};
export const restoreFromStorage = () => {
  return JSON.parse(localStorage.getItem("storage"));
};
