import { useMemo, useState } from "react";
import Container from "../Container";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import { useBookContext } from "../../context/BookContext";
import styles from "./BooksTable.module.scss";

const BooksTable = () => {
  const { books, loading } = useBookContext();
  const [sortConfig, setSortConfig] = useState<{
    key: keyof any;
    direction: "asc" | "desc";
  } | null>(null);
  const sortedBooks = useMemo(() => {
    if (!sortConfig || !books) return books;
    const sortedEvents = [...books];
    sortedEvents.sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      if (valueA < valueB) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    return sortedEvents;
  }, [books, sortConfig]);
  const handleSort = (key: keyof any) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  if ((!loading && !books) || books?.length === 0) {
    return (
      <Container>
        <h2>No book is available.</h2>
      </Container>
    );
  }
  return (
    <Container>
      <table className={styles.table}>
        <TableHeader handleSort={handleSort} />
        <tbody>
          {books &&
            sortedBooks.map((book) => (
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
        </tbody>
      </table>
    </Container>
  );
};

export default BooksTable;
