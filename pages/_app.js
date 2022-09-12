import "../styles/globals.css";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto">
      <SWRConfig
        value={{
          refreshInterval: 50000,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}

export default MyApp;
