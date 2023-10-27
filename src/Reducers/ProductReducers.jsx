const ProductReducers = (state, action) => {
  //   if (action.type === "SET_LOADING") {
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   }
  //   if (action.type === "API_ERROR") {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       isError: true,
  //     };
  //   }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "MY_API_DATA":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "API_ERROR":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featureProduct === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    default:
      return state;
  }
};

export default ProductReducers;
