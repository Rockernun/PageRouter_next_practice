import { Html, Head, Main, NextScript } from "next/document";

// 모든 페이지에 공통적으로 적용돼야 하는 Next의 HTML 코드를 설정하는 컴포넌트(= 리액트 앱의 index.html)
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
