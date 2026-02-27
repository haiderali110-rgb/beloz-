const API_BASE_URL = 'http://10.1.1.195:4000/api/auth';

export const signupAPI = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Signup failed');
    }

    const data = await response.json();
    if (data.data?.token) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user || data.data));
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const loginAPI = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const data = await response.json();
    if (data.data?.token) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user || data.data));
    }
    return data;
  } catch (error) {
    throw error;
  }
};

// Baaki functions ko handle karne ke liye authService object
export const authService = {
  signup: signupAPI,
  login: loginAPI,
  getCurrentUser: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return null;
      const response = await fetch(`${API_BASE_URL}/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return null;
      }
      const data = await response.json();
      return data.data || null;
    } catch (error) {
      return null;
    }
  },
  logout: async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};