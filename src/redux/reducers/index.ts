import { combineReducers } from 'redux';
import { GeneralsDataType } from 'helpers/interfaces';
import generals from './generals';

const reducers = combineReducers({
  generals,
});

export default reducers;

export interface ReduxStateDataType {
  generals: GeneralsDataType;
}
