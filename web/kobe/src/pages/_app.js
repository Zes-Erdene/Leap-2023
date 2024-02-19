import "@/styles/globals.css";
import { NewContextProvider } from "../context";

export default function App({ Component, pageProps }) {
  return (
    <NewContextProvider>
      <Component {...pageProps} />;
    </NewContextProvider>
  );
}
