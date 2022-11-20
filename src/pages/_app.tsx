import type { AppProps } from "next/app";
import "../styles/index.scss";
import ModalContext from "../contexts/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContext.Provider>
      <Component {...pageProps} />;
    </ModalContext.Provider>
  );
}
