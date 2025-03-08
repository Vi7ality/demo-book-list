import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { bookType } from "../types/bookType";

interface IDataContext {
  books: bookType[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
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
      console.log("books", data);
      setBooks(data);
    } catch (error) {
      setError("Failed to fetch books");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, loading, error, refetch: fetchBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
