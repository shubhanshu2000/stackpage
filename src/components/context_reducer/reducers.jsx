export const dataReducer = (state, action) => {
  switch (action.type) {
    case "DATA":
      return { ...state, data: action.payload };
    case "VIEW":
      return { ...state, view: action.payload };
    case "INPUT_VAL":
      return { ...state, inputVal: action.payload };
    default:
      state;
  }
};
