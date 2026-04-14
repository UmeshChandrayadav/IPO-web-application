import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true, // Include credentials in requests
});

export const login = (email, password, recaptchaToken) => {
    return apiClient.post('api/user/auth/login', {email,password,recaptchaToken});
}

export const register = (userName, email, password, recaptchaToken) => {
    return apiClient.post('api/user/auth/register', {userName,email, password, recaptchaToken});
}

export const logout = () => {
    return apiClient.post('api/user/auth/logout');
}

export const authState = () => {
    return apiClient.get('api/user/auth/is-auth');
}

export const sendVerifyLink = () => {
    return apiClient.post('api/user/auth/send-verify-link');
}

export const verifyEmail = () => {
    return apiClient.post('api/user/auth/verify-email-link');
}

export const sendResetPasswordLink = (email) => {
    return apiClient.post('api/user/auth/send-reset-link', {email});
}

export const resetPassword = ( newPassword, token, uid) => {
    return apiClient.post(`api/user/auth/reset-password-link?token=${token}&uid=${uid}`,{newPassword});
}

export const googleLogin = () => {
    return apiClient.get('api/user/auth/google');
}

export const googleCallback = (code) => {
    return apiClient.get(`api/user/auth/google/callback?code=${code}`);
}

export const getUserData = () => {
    return apiClient.get('api/user/auth/data');
}
// ...existing code...

// IPO CRUD operations
export const getIPOs = () => apiClient.get('admin/ipos');
export const createIPO = (data) => apiClient.post('admin/ipos', data);
export const approveIPO = (id) => apiClient.patch(`admin/ipos/${id}/approve`);
export const launchIPO = (id) => apiClient.patch(`admin/ipos/${id}/status`, { status: 'launched' });
export const deleteIPO = (id) => apiClient.delete(`admin/ipos/${id}`);