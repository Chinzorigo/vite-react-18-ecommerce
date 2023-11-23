import { createContext, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export const ApplicationContext = createContext({
  basket: [],
  setBasket: () => {},
});

export default function Layout(props) {
  const { children } = props;
  const [basket, setBasket] = useState([]);

  return (
    <ApplicationContext.Provider value={{ basket, setBasket }}>
      <Header />
      {children}
      <Footer />
    </ApplicationContext.Provider>
  );
}
