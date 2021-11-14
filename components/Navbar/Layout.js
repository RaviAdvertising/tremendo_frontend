import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}
