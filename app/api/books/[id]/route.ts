import books from "../../db";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = +params.id;
  const book = await request.json();
  const index = books.findIndex((book) => book.id === id);
  books[index] = { ...book, id };
  return Response.json(books[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = +params.id;
  const index = books.findIndex((book) => book.id === id);
  books.splice(index, 1);
  return Response.json(books);
}
