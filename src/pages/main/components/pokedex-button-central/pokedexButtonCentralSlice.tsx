import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/store';
import { BUTTON_CENTRAL_DIRECTIONS } from '../../../../common/constants';

interface ButtonState {
  direction: string,
  value: number
};

const initialState: ButtonState = {
  direction: "",
  value: 0
}

export const buttonCentralSlice = createSlice({
  name: 'buttonCentral',
  initialState,
  reducers: {
    upButton: state => {
      state.direction = BUTTON_CENTRAL_DIRECTIONS.UP;
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    downButton: state => {
      state.direction = BUTTON_CENTRAL_DIRECTIONS.DOWN;
      if(state.value < 19) {
        state.value += 1;
      }
    },
    leftButton: state => {
      state.direction = BUTTON_CENTRAL_DIRECTIONS.LEFT;
    },
    rightButton: state => {
      state.direction = BUTTON_CENTRAL_DIRECTIONS.RIGHT;
    },
    clearButtonCentralData: state => {
      state.direction = "";
      state.value = 0;
    }
  }
});

export const { upButton, downButton, leftButton, rightButton, clearButtonCentralData } = buttonCentralSlice.actions;

export const buttonCentralValue = (state: RootState) => state.buttonCentral;

export default buttonCentralSlice.reducer;