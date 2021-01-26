class Storage {
  static instance = new Storage();

  get = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  post = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
    return;
  };
}

export default Storage;