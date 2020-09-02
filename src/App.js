import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useState } from "react";

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
