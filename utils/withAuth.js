import { useRouter } from "next/router";
import { useEffect } from "react";
import { HOME_PAGE } from "./routes";
import Cookies from "js-cookie";
import { COOKIE_TOKEN } from "./constants";

export default function withAuth(Component) {
  return function Authenticate() {
    const router = useRouter();
    useEffect(() => {
      checkAuth();
    }, []);

    const checkAuth = async () => {
      if (!Cookies.get(COOKIE_TOKEN)) {
        router.replace(HOME_PAGE);
      }
    };
    return <Component />;
  };
}
