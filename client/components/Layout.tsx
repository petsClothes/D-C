import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./Navbar";
import Fouter from "./Fouter";

const Layout = ({  children }:any) => {
  return (

    <div>
   <Navbar/>
   {children}
   <Fouter/>
   </div>
  );
};

export default Layout;


