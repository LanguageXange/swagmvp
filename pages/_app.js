import "../styles/globals.css";
// available in every pages
import NavBar from "../components/navbar";
import Head from "next/head";
import { createContext, useReducer } from "react";

export const StoreContext = createContext();

export const StoreActionType = {
  FETCH_SWAG_ITEMS: "FETCH_SWAG_ITEMS",

  CLEAR_ITEMS: "CLEAR_ITEMS",
};
const storeReducer = (state, action) => {
  switch (action.type) {
    case StoreActionType.FETCH_SWAG_ITEMS:
      return { ...state, items: action.payload };

    case StoreActionType.CLEAR_ITEMS:
      return { ...state, items: [] };
    default:
      return state;
  }
};
const StoreProvider = ({ children }) => {
  const initialState = { items: [] };
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        <title>Vote Swag</title>
        <meta name="description" content="Vote your fav swag" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
