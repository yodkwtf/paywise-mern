// Save item to local storage
export const saveToLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Get item from local storage
export const getFromLocal = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// Remove item from local storage
export const removeFromLocal = (key) => {
  localStorage.removeItem(key);
};
