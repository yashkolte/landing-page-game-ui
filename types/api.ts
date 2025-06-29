// Common type definitions and API response interfaces

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp?: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
  code?: string;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncOperationState<T> {
  state: LoadingState;
  data?: T;
  error?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// Utility types for form handling
export type FormState<T> = {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
};

// API endpoint response types
export type ApiEndpoint<TRequest = void, TResponse = any> = 
  TRequest extends void 
    ? () => Promise<ApiResponse<TResponse>>
    : (data: TRequest) => Promise<ApiResponse<TResponse>>;