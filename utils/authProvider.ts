interface AuthResponse {
    success: boolean;
  }
  
  export const authenticate = async (email: string, password: string): Promise<AuthResponse> => {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Replace this with your actual authentication logic
        const success = email === 'email' && password === 'password';
  
        resolve({ success });
      }, 1000); // Simulating a delay, like a network request
    });
  };