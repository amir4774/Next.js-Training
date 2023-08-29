"use client";
import { Provider } from "react-redux";
import { Store } from "../Redux/Store";
import { ReactNode } from "react";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default StoreProvider;
