import axios from 'axios';

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
