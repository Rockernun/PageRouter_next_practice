import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter(); // router 객체 저장
  const { q } = router.query; // 쿼리 스트링 꺼내오기
  return <h1>Search {q}</h1>;
}
