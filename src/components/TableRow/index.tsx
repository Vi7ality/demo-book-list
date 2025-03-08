import React from "react";
import styles from "./TableRow.module.scss";
import { MdDeleteForever } from "react-icons/md";

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
  const handleDeleteEvent = async () => {
    console.log("Delete book", id);
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
        <button
          className={styles.deleteBtn}
          onClick={() => handleDeleteEvent()}
          title="Delete book"
        >
          <MdDeleteForever style={{ width: "20px", height: "20px" }} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
