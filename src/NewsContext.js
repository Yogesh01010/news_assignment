import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "b2f60f0b98d3449abdd0cd23b38a4e6c";

  useEffect(() => {
    axios
      .get(
      
      `https://newsapi.org/v2/everything?q=tesla&from=2023-02-23&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
