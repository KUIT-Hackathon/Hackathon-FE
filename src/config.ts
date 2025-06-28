export const BASE_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
  AUTH: {
    SIGNUP: '/auth/signup',
    LOGIN: '/auth/login',
  },
  USER: {
    SEARCH: '/search',
    PROFILE: '/profile',
  },
  PAPER: {
    MY: '/my',
    PUBLIC: '/public',
  },
  BASE: {
    MESSAGE: '/message',
  },
} as const;

export type EndpointKey = keyof typeof ENDPOINTS;
export type EndpointValue = (typeof ENDPOINTS)[keyof typeof ENDPOINTS][keyof (typeof ENDPOINTS)[keyof typeof ENDPOINTS]];
