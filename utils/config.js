let apiUrl = "http://localhost:5000";

if (process.env.NEXT_APP_ENV == "production") {
  apiUrl = "http://13.201.75.224:5000";
}

export { apiUrl };
