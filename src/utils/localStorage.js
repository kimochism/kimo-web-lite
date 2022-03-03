export function storeItem(key, data) {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  let storedObject = JSON.parse(localStorage.getItem(key));

  if (storedObject === null) {
    localStorage.setItem(key, JSON.stringify(data));
    return;
  }

  for (let keyValue in data) {
    if (storedObject[keyValue] !== null || storedObject[keyValue] !== undefined) {
      delete storedObject[keyValue];
    }
  }

  const mergedObject = { ...data, ...storedObject };

  localStorage.setItem(key, JSON.stringify(mergedObject));
}

export function getItem(key, item) {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  if (!localStorage.getItem(key)) {
    return null;
  }

  const storedObject = JSON.parse(localStorage.getItem(key));

  return storedObject[item];
}

export function removeItem(key, item) {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  let storedObject = JSON.parse(localStorage.getItem(key));

  delete storedObject[item];

  localStorage.setItem(key, JSON.stringify(storedObject));
}

export function removeKey(key) {
  if (!window.localStorage || !window.JSON || !key) {
    return;
  }

  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
}

export function clear() {
  localStorage.clear();
}
