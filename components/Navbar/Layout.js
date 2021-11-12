import { Fragment } from "react";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </Fragment>
  );
}
