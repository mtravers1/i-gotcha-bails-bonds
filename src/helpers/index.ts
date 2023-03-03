/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import Cookies from 'js-cookie';
import { Q_TOKEN, TOKEN_COOKIE_NAME } from './constants';

export const baseurl = process.env.BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL: `${baseurl}/api/v1`,
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type',
    'Access-Control-Allow-Origin': '*',
  },
});

export const validate = (field: string, pattern: RegExp): boolean => {
  if (pattern.test(field)) return true;
  return false;
};

export const getCircularReplacer = (): any => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

export const setToken = (token: string) => {
  axiosInstance.defaults.headers.common['token'] = token;

  if (typeof window !== 'undefined') {
    localStorage.setItem(Q_TOKEN, token);
    Cookies.set(TOKEN_COOKIE_NAME, token, { expires: 3 });
  }
};

const tokens: any = {};

export function parseJwt(token: any) {
  if (!token) return;
  if (tokens[token]) return tokens[token];

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      // Buffer.from(base64, 'base64')
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  const result = JSON.parse(jsonPayload);
  tokens[token] = result;

  return result;
}

export function getUser() {
  let user;
  let ctoken;
  let isExpired = false;

  if (typeof window !== 'undefined') {
    ctoken = localStorage.getItem(Q_TOKEN) || Cookies.get(TOKEN_COOKIE_NAME);
  }

  if (ctoken !== 'null' || !ctoken) {
    user = parseJwt(ctoken);
  }

  isExpired = user && user.exp && user.exp < Date.now() / 1000;

  return { ...user, token: ctoken, isExpired };
}

export const logout = () => {
  localStorage.removeItem(Q_TOKEN);
  Cookies.remove(TOKEN_COOKIE_NAME);
};

export const getCookie = (cname: string, cookieString?: any) => {
  const name = cname + '=';

  const choosenCookieString =
    cookieString || typeof window === 'undefined' ? '' : document.cookie;

  const decodedCookie = decodeURIComponent(choosenCookieString);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
