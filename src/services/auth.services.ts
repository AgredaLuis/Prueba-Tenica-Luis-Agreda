
interface LoginResponse {
    token: string;
  }
  
export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error en el inicio de sesión");
    }
  
    return response.json();
  };
  