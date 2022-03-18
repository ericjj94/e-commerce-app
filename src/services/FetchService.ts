import { apiUrl } from "../apiConfig";

const FetchService = async (endpoint: string, method: string, body?: any) => {
  try {
    const url = `${apiUrl}${endpoint}`;
    const response = await fetch(url, {
      method: method ? method : body ? "POST" : "GET",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response && response.statusText === "OK") {
      return await response.json();
    } else {
      console.log("Invalid response", response);
    }
  } catch (e) {
    console.log("cannot connect to backend services", e);
  }
  return false;
};
export default FetchService;
