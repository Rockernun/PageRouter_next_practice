import { BookProps } from "@/type";

export default async function fetchOneBook(
  id: number
): Promise<BookProps | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
}
