import "@/styles/globals.css";
import type { AppProps } from "next/app";

// 모든 컴포넌들의 부모 컴포넌트
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>글로벌 헤더</header>
      <Component {...pageProps} />
    </>
  );
}

// Component props는 현재 페이지 역할을 할 컴포넌트를 받는 것
// pageProps는 Component에 전달될 props를 모두 객체로 보관한 것
