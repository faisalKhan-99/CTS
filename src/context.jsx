import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app";

const intialState = {
  name: "",
  image: "",
  services: [
  {
    id:1,
    title:'End of Lease Cleaning/Bond Cleaning',
    image:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    description:'Furniture Cleaning'    
  },
  
  {
    id:1,
    title:'End of Lease Cleaning/Bond Cleaning',
    image:'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    description:'End Of Lease Cleaning'    
  },
  {
    id:1,
    title:'End of Lease Cleaning/Bond Cleaning',
    image:'https://images.unsplash.com/photo-1627905646269-7f034dcc5738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2xlYW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    description:'Office Cleaning'    
  },
  {
    id:4,
    title:'End of Lease Cleaning/Bond Cleaning',
    image:'https://images.unsplash.com/photo-1601160458000-2b11f9fa1a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:'Kitchen Cleaning'    
  },
  {
    id:4,
    title:'End of Lease Cleaning/Bond Cleaning',
    image:'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNsZWFuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description:'Carpet Cleaning'    
  },
 
],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "YOURS, CLEANERS",
        image: "./images/52068.jpg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "YOURS, CLEANERS",
        image: "./images/about1.svg",
      },
    });
  };

  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
