import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { bookType } from "../types/bookType";

interface IDataContext {
  books: bookType[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  createBook: (newBook: bookType) => Promise<void>;
  //   editBook: (id: string, updatedBook: Partial<bookType>) => Promise<void>;
  //   deleteBook: (id: string) => Promise<void>;
}

const BookContext = createContext<IDataContext | null>(null);

export const BookProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<bookType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const API_URL = "https://my-json-server.typicode.com/vi7ality/fake-json-books";
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/books`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      setError("Failed to fetch books");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createBook = async (newBook: bookType) => {
    try {
      const response = await fetch(`${API_URL}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) throw new Error("Failed to create book");

      const data = await response.json();
      setBooks((prev) => [...prev, data]);
    } catch (error) {
      console.error("Failed to create book", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, loading, error, refetch: fetchBooks, createBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within an BookProvider");
  }
  return context;
};
