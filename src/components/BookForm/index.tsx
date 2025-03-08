import { FormEvent } from "react";
import { bookType } from "../../types/bookType";
import styles from "./BookForm.module.scss";

interface BookFormProps {
  handleSubmit(e: FormEvent<Element>): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  formData: Partial<bookType>;
}

const BookForm = ({ handleSubmit, handleChange, formData }: BookFormProps) => {
  return (
    <form onSubmit={handleSubmit} className={styles.bookForm}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
      </label>
      <label>
        ISBN:
        <input type="number" name="ISBN" value={formData.ISBN} onChange={handleChange} />
      </label>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
