import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddBookPage.module.scss";
import { useBookContext } from "../../context/BookContext";
import generateID from "../../utils/generateID";
import { currentDate } from "../../utils/date";
import BookForm from "../../components/BookForm";

const AddBookPage = () => {
  const { createBook } = useBookContext();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    ISBN: 0,
  });
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
    if (!formData.title || !formData.author || !formData.category || !formData.ISBN) {
      alert("Please, fill all form fields");
      return;
    }

    try {
      await createBook({
        ...formData,
        id: generateID(),
        createDate: date,
        modifyDate: date,
      });
      navigate("/");
    } catch (error) {
      console.error("Failed to create event:", error);
    }
  };
  return (
    <div className={styles.addBookPage}>
      <h1>Add New Book</h1>
      <BookForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
    </div>
  );
};
export default AddBookPage;
