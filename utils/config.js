let apiUrl = "http://localhost:5000";

if (process.env.NEXT_APP_ENV == "production") {
  apiUrl = "https://api.abhishekcodes.com";
}

export { apiUrl };
