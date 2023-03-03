export interface InfoTextProps {
  src: string;
  title: { id: string; defaultMessage: string };
  links: Array<{
    id: string;
    defaultMessage: string;
    href: string;
  }>;
}

export interface GeneralsDataType {
  lang: string | undefined;
}

export interface User {
  id: string | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  isAdmin: boolean;
  role: {
    name: string;
  };
}

export interface AuthStateData {
  user?: User | null;
  admin?: User | null;
  loading: boolean;
  permissions: string[];
}

export type DispatchActionFunc = (arg0: {
  type: string;
  payload?: any;
}) => void;
