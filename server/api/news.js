export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(
      "https://api.currentsapi.services/v1/latest-news",
      {
        headers: {
          Authorization: "R0_FxAWTjFS99VceP15qjr2DVd5LjFTilkEw0Ua5UoFsttlq",
        },
      }
    );
    const data = await response.json();
    return { data, message: 'Data fetched successfully' }
  } catch (error) {
    return { message: "Couldn't fetch data currently. Please try again later" };
  }
});
