import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface HttpClient extends AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
  
const http: HttpClient = axios.create({
  baseURL: 'http://3.38.178.16:8081',
  headers: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0NDA3OTc3Mn0.GzgsQ5cjqpDoJAQPXTzk737RRVNilnqTI6Lc59MuqpE'
  },
});

http.interceptors.response.use(response => response.data, error => error);

export default http;