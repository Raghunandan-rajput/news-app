export const getNews = async (topic) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=2023-03-02&sortBy=publishedAt&apiKey=ab3832db4ed94e31a60f514e9c5c4392`
  );
  const data = await res.json();
  return data.articles;
};
