import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/test");
  };

  // prefetch 메서드를 통해 특정 페이지를 명시적으로 pre-fetching 하도록 설정
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>글로벌 헤더</header>
      <Link href={"/"}>index</Link>
      &nbsp;
      <Link href={"/search"} prefetch={false}>
        search
      </Link>
      &nbsp;
      <Link href={"/book/1"}>book 1</Link>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
      <Component {...pageProps} />
    </>
  );
}
