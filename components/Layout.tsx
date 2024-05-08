import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
