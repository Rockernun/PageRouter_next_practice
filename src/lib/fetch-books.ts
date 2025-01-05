import { BookProps } from "../type";

export default async function fetchBooks(): Promise<BookProps[]> {
  const url = `http://localhost:12345/book`;

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