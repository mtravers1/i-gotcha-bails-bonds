import { SET_LANG_OPTIONS } from '../actionTypes';

export const setlanguage = (lang: string) => (
  dispatch: (arg0: { type: string; payload: any }) => void
): any => {
  dispatch({
    type: SET_LANG_OPTIONS,
    payload: lang,
  });
};
