import { BookProps } from "../type";

export default async function fetchBooks(q?: string): Promise<BookProps[]> {
  let url = `http://localhost:12345/book`;

  // 만약 매개변수로 검색어가 전달되었다면
  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
