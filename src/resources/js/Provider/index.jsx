import ThemeProvider from "./ThemeProvider";

export default function Provider({ children }) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
