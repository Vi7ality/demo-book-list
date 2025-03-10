import { useMemo, useState } from "react";
import Container from "../Container";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import { useBookContext } from "../../context/BookContext";
import styles from "./BooksTable.module.scss";
import FilterPanel from "../FilterPanel";
import { bookType } from "../../types/bookType";

const BooksTable = () => {
  const { books, loading } = useBookContext();
  const [sortConfig, setSortConfig] = useState<{
    key: keyof bookType;
    direction: "asc" | "desc";
  } | null>(null);
  const [filter, setFilter] = useState("all");
  const filteredBooks = books.filter((book) =>
    filter === "all" ? true : filter === "active" ? book.active : !book.active
  );

  const sortedBooks = useMemo(() => {
    if (!sortConfig || !filteredBooks) return filteredBooks;
    const sortBooks = [...filteredBooks];
    sortBooks.sort((a, b) => {
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
    return sortBooks;
  }, [filteredBooks, sortConfig]);

  const handleSort = (key: keyof bookType) => {
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
      <FilterPanel filter={filter} setFilter={setFilter} />
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
                createDate={book.createdAt}
                modifyDate={book.modifiedAt}
                id={book.id}
                active={book.active}
              />
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default BooksTable;
