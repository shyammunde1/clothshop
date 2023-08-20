import { createContext, useEffect, useState } from "react";
// import SHOP_DATA  from '../shop-data.js'
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

const initialProducts = {
  categoriesMap: {},
};

export const CategoriesContext = createContext(initialProducts);

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categorymap = await getCategoriesAndDocuments();
      setCategoriesMap(categorymap);
    };
    getCategoriesMap();
  }, []);

  const value = {
    categoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
