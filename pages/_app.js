import "../styles/globals.css";
import SettingsContextProvider from "../context/SettingsContext";

function MyApp({ Component, pageProps }) {
  return (
    <SettingsContextProvider>
      <Component {...pageProps} />
    </SettingsContextProvider>
  );
}

export default MyApp;
