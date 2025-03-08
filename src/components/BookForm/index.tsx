import { FormEvent } from "react";
import { bookType } from "../../types/bookType";
import styles from "./BookForm.module.scss";

const bookCategories = [
  { value: "fiction", label: "Fiction" },
  { value: "non-fiction", label: "Non-Fiction" },
  { value: "biography", label: "Biography" },
  { value: "science", label: "Science" },
  { value: "history", label: "History" },
  { value: "fantasy", label: "Fantasy" },
  { value: "mystery", label: "Mystery" },
  { value: "romance", label: "Romance" },
  { value: "thriller", label: "Thriller" },
  { value: "self-help", label: "Self-Help" },
  { value: "poetry", label: "Poetry" },
  { value: "psychology", label: "Psychology" },
  { value: "business", label: "Business" },
];

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
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">-- Select Category --</option>
          {bookCategories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
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
