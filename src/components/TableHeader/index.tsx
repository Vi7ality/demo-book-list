import styles from "./TableHeader.module.scss";

interface ITableHeader {
  handleSort(arg: string): void;
}

const TableHeader = ({ handleSort }: ITableHeader) => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th className={styles.filter} onClick={() => handleSort("title")} title="Sort by name">
          Book title
        </th>
        <th className={styles.filter} onClick={() => handleSort("author")} title="Sort by author">
          Author
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort("category")}
          title="Sort by category"
        >
          Category
        </th>
        <th className={styles.filter} onClick={() => handleSort("ISBN")} title="Sort by ISBN">
          ISBN
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort("createDate")}
          title="Sort by create date"
        >
          Created At
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort("modifyDate")}
          title="Sort by modify date"
        >
          Modified/Edited At
        </th>
        <th>“Actions"</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
