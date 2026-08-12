// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher, revalidateOnFocus: true }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}
