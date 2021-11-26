import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <Fragment>
      <header>{!router.pathname.includes("404") && <Navbar />}</header>
      <main style={{ padding: router.pathname.includes("404") && "0" }}>
        {children}
      </main>
      <footer>{!router.pathname.includes("404") && <Footer />}</footer>
    </Fragment>
  );
}
