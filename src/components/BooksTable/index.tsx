import { useState } from "react";
import Container from "../Container";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

const books = [
  {
    id: "1",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    category: "Programming",
    ISBN: 9780201616224,
    createDate: "2024-03-01",
    modifyDate: "2024-03-05",
  },
  {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    ISBN: 9780132350884,
    createDate: "2024-02-15",
    modifyDate: "2024-02-20",
  },
  {
    id: "3",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    ISBN: 9780735211292,
    createDate: "2024-01-10",
    modifyDate: "2024-01-12",
  },
  {
    id: "4",
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    ISBN: 9780061122415,
    createDate: "2024-03-10",
    modifyDate: "2024-03-12",
  },
  {
    id: "5",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "History",
    ISBN: 9780062316097,
    createDate: "2024-02-01",
    modifyDate: "2024-02-10",
  },
];

const BooksTable = () => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof any;
    direction: "asc" | "desc";
  } | null>(null);
  const handleSort = (key: keyof any) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  return (
    <Container>
      <table>
        <TableHeader handleSort={handleSort} />
        {books &&
          books.map((book) => (
            <TableRow
              key={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              ISBN={book.ISBN}
              createDate={book.createDate}
              modifyDate={book.modifyDate}
              id={book.id}
            />
          ))}
      </table>
    </Container>
  );
};

export default BooksTable;
