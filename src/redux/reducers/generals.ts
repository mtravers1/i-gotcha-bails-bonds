import { GeneralsDataType } from 'helpers/interfaces';
import { SET_LANG_OPTIONS } from '../actionTypes';

const generals = (
  state = {
    lang: undefined,
  } as GeneralsDataType,
  action: any
): any => {
  switch (action.type) {
    case SET_LANG_OPTIONS:
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};

export default generals;
