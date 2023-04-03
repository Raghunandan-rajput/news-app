export const getNews = async (topic) => {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=${topic}&lang=en&country=in&max=10&apikey=746c96dcfed07d1c1a116cf4e753412f`
  );
  const data = await res.json();
  return data.articles;
};
