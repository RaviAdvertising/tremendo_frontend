import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}
