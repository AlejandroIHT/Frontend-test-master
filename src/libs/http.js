class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      const req = await fetch(url);
      const json = await req.json();

      return json;
    } catch (error) {
      console.log("Http get method error", error);
      throw Error(error);
    }
  };

  post = async (url, body) => {
    try {
      const req = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const json = await req.json();

      return json;
    } catch (error) {
      console.log("http get method post error", error);
      throw Error(error);
    }
  };

  delete = async (url, body) => {
    try {
      const req = await fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const json = await req.json();

      return json;
    } catch (error) {
      console.log("http get method delete error", error);
      throw Error(error);
    }
  };
}

export default Http;
