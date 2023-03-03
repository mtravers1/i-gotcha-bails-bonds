import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GeneralsDataType } from 'helpers/interfaces';

const initialState: Partial<GeneralsDataType> = {
  lang: undefined,
};

const generals = createSlice({
  name: 'generals',
  initialState,
  reducers: {
    setlanguage(state, action: PayloadAction<string>) {
      state.lang = action.payload;
    },
  },
});

const { actions, reducer } = generals;

export const { setlanguage } = actions;
export default reducer;
