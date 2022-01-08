import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../HomeTemplate/_components/Navbar";
import Footer from "../HomeTemplate/_components/Footer";

export default function HomeTemplate(props) {
  const { exact, path, Component } = props;

  function LayoutHome(props) {
    return (
      <>
        <Navbar />
        {props.children}
        <Footer />
      </>
    );
  }

  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={Component}></Route>
    </LayoutHome>
  );
}
