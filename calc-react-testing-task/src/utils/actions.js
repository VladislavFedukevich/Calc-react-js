export const setOutputDisplay = (outputDisplay) => ({
    type: "SET_OUTPUT_DISPLAY",
    payload: outputDisplay,
});

export const setHistory = (history) => ({
    type: "SET_HISTORY",
    payload: history,
});

export const clearHistory = () => ({
    type: "CLEAR_HISTORY",
});
