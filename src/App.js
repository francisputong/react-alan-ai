import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useState } from "react";

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "564e5bef451cbc183e54a86bd49bb5502e956eca572e1d8b807a3e2338fdd0dc/stage";

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
