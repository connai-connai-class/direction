import ThemeProvider from "./ThemeProvider";
import { BrowserRouter } from "react-router-dom";

export default function Provider({ children }) {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </>
  );
}
