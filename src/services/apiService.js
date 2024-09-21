
export const login = async (username, password) => {
  const BASE_API_URL = process.env.REACT_APP_API_URL;

  try {
    const response = await fetch(`${BASE_API_URL}/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailaddress: username, userpass: password }),
    });

    if (!response.ok) {
      throw new Error("Login failed. Please check your credentials.");
    }

    const data = await response.json();

    const token = data.token;

    localStorage.setItem("authToken", token);

    return token;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const getToken = () => {
  return localStorage.getItem("authToken");
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
