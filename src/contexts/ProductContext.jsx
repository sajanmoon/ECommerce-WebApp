import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducers/ProductReducers";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initailState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const resp = await axios.get(url);
      const products = await resp.data;
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // My 2nd Api call for Singleproducts

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const resp = await axios.get(url);
      const singleProduct = await resp.data;
      dispatch({ type: "MY_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
