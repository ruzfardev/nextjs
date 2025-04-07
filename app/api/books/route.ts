import books from "../db";

export async function GET() {
  return Response.json(books);
}

export async function POST(request: Request) {
  const { name, author, year } = await request.json();
  const newBook = {
    id: books.length + 1,
    name,
    author,
    year,
  };
  books.push(newBook);
  return Response.json(newBook);
}
