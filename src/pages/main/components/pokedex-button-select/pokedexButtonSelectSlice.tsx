import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import { BUTTON_SELECT } from '../../../../common/constants';

interface ButtonState {
  action: string,
  value: string
};

const initialState: ButtonState = {
  action: "",
  value: ""
};

export const buttonSelectSlice = createSlice({
  name: "buttonSelect",
  initialState,
  reducers: {
    selectButton: state => {
      state.action = BUTTON_SELECT.SELECT;
    },
    clearSelectButtonData: state => {
      state.action = "";
      state.value = "";
    }
  }
});

export const { selectButton, clearSelectButtonData } = buttonSelectSlice.actions;

export const buttonSelectValue = (state: RootState) => state.buttonSelect;

export default buttonSelectSlice.reducer;