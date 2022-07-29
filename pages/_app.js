import "../styles/globals.css";
import SnackbarProvider from "react-simple-snackbar";

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

export default MyApp;
