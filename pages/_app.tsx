// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/App.css";
import Head from "next/head";

/**
 * Custom application wrapper component for Next.js.
 * This component is used to wrap all pages in the application.
 * It includes global styles and font imports.
 *
 * @param props - The props passed to the component.
 * @param props.Component - The component to be rendered.
 * @param props.pageProps - The props passed to the page component.
 *
 * @returns - The custom application wrapper component.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;
