import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    screen: '',
    result: ''
}

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        clearScreen: (state) => {
            state.screen = ''
            state.result = ''
        },
        updateScreen: (state, action) => {
            state.screen = state.screen.concat(`${action.payload}`)
        },
        seeResult: (state) => {
            try {
                state.result = eval(state.screen).toString()
            }
            catch {
                state.result = "Error"
            }
        }
    },
    extraReducers: {
    }
})

export const { clearScreen, updateScreen, seeResult } = calculatorSlice.actions

export default calculatorSlice.reducer