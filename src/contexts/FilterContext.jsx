import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducers/FilterReducer";

const FilterContext = createContext();
const initailState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  //   console.log(products);
  const [state, dispatch] = useReducer(reducer, initailState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, FilterContext, useFilterContext };
