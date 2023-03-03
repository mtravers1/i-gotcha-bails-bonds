import { combineReducers } from 'redux';
import { AuthStateData, GeneralsDataType } from 'helpers/interfaces';
import generals from './generals';
import auth from './user';

const reducers = combineReducers({
  generals,
  auth,
});

export default reducers;

export interface ReduxStateDataType {
  generals: GeneralsDataType;
  auth: AuthStateData;
}
