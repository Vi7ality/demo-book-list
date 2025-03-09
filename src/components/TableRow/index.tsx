import React from "react";
import styles from "./TableRow.module.scss";
import { MdDeleteForever } from "react-icons/md";
import { useBookContext } from "../../context/BookContext";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

interface TableRowProps {
  title: string;
  author: string;
  category: string;
  ISBN: number;
  createDate: string;
  modifyDate: string;
  id: string;
  active: boolean;
}

const TableRow: React.FC<TableRowProps> = ({
  title,
  author,
  category,
  ISBN,
  createDate,
  modifyDate,
  id,
  active,
}) => {
  const { deleteBook, editBook } = useBookContext();

  const handleDeleteBook = async () => {
    await deleteBook(id);
  };

  const toggleActiveBook = async () => {
    await editBook(id, { active: !active });
  };
  return (
    <tr className={styles.tableRow}>
      <td>
        <p>{title}</p>
      </td>
      <td>{author}</td>
      <td>{category}</td>
      <td>{ISBN}</td>
      <td>{createDate}</td>
      <td>{modifyDate}</td>
      <td>
        <button className={styles.deleteBtn} onClick={() => handleDeleteBook()} title="Delete book">
          <MdDeleteForever style={{ width: "20px", height: "20px" }} />
        </button>
        <Link to={`edit/${id}`} className={styles.deleteBtn} title="Edit book">
          <MdEdit style={{ width: "20px", height: "20px" }} />
        </Link>
        <button
          className={styles.reactivateBtn}
          onClick={toggleActiveBook}
          title={active ? "Deactivate" : "Re-Activate"}
        >
          {active ? <FaMinus /> : <FaPlus />}
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
