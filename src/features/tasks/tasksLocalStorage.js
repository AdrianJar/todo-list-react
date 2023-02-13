const localStorageKey = "tasks";

export const saveTasksInLocalStorage = tasks =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksInLocalStorage = () =>
    JSON.parse.getItem(localStorageKey) || [];