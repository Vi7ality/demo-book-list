import React from "react";
import styles from "./TableRow.module.scss";
import { MdDeleteForever } from "react-icons/md";
import { useBookContext } from "../../context/BookContext";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

interface TableRowProps {
  title: string;
  author: string;
  category: string;
  ISBN: number;
  createDate: string;
  modifyDate: string;
  id: string;
}

const TableRow: React.FC<TableRowProps> = ({
  title,
  author,
  category,
  ISBN,
  createDate,
  modifyDate,
  id,
}) => {
  const { deleteBook } = useBookContext();

  const handleDeleteBook = async () => {
    deleteBook(id);
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
      </td>
    </tr>
  );
};

export default TableRow;
