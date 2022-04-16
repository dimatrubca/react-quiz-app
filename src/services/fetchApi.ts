const fetchApi = <TResponse>(
    url: string,
    config: any = {}
  ): Promise<TResponse> => {
    if (!config) config = {};
    if (!config.hasOwnProperty("headers")) {
      config.headers = {};
    }
    config.headers["X-Access-Token"] = process.env.REACT_APP_ACCESS_TOKEN;
    
  
    console.log("config: ", config);
    return fetch(`https://pure-caverns-82881.herokuapp.com/api/v54${url}`, config)
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw Error(text);
          });
        } else {
          return res.text();
        }
      })
      .then((data) => (data ? JSON.parse(data) : {}));
  };
  

  
  export { fetchApi };