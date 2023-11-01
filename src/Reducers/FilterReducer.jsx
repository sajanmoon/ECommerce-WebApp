const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    default:
      return state;
  }
};

export default FilterReducer;
