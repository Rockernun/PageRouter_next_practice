import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const onClickButton = () => {
    router.back();
  };

  return (
    <>
      <h1>Test</h1>
      <button onClick={onClickButton}>뒤로 가기</button>
    </>
  );
}
