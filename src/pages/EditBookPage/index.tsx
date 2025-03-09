import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditBookPage.module.scss";
import { useBookContext } from "../../context/BookContext";
import { currentDate } from "../../utils/date";
import BookForm from "../../components/BookForm";
import { bookType } from "../../types/bookType";

const EditBookPage = () => {
  const { editBook } = useBookContext();
  const [formData, setFormData] = useState<Partial<bookType> | null>(null);
  const { bookID } = useParams<{ bookID: string }>();
  const navigate = useNavigate();
  const date = currentDate;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData || !formData.title || !formData.author || !formData.category || !formData.ISBN) {
      alert("Please, fill all form fields");
      return;
    }
    if (bookID)
      try {
        await editBook(bookID, {
          ...formData,
          modifiedAt: date,
        });
        navigate("/");
      } catch (error) {
        console.error("Failed to create event:", error);
      }
  };

  useEffect(() => {
    const getBookByID = async (id: string): Promise<Partial<bookType> | null> => {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/vi7ality/fake-json-books/books/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data; // Return valid data
      } catch (error) {
        console.error(error);
        return null; // Return null in case of failure
      }
    };
    const getBookInfo = async () => {
      if (!bookID) {
        console.log("book id is missing");
        return;
      }
      const bookInfo = await getBookByID(bookID);
      console.log("bookInfo", bookInfo);
      setFormData(bookInfo);
    };
    getBookInfo();
  }, [bookID]);
  return (
    <div className={styles.EditBookPage}>
      <h1>Add New Book</h1>
      {formData && (
        <BookForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
      )}
    </div>
  );
};
export default EditBookPage;
