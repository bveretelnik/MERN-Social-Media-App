export function getStorageValue() {
  const storageValue = localStorage.getItem("profile");
  return storageValue ? JSON.parse(storageValue) : null;
}
