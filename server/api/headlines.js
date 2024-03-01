export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?" +
        new URLSearchParams({
          country: "us",
          category: "general",
        }),
      {
        headers: {
          Authorization: process.env.NUXT_NEWS_API_KEY,
        },
      }
    );
    const data = await response.json();
    return { data, message: "Data fetched successfully" };
  } catch (error) {
    return { message: "Couldn't fetch data currently. Please try again later" };
  }
});
