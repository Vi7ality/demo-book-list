import React from "react";
import styles from "./FilterPanel.module.scss";

interface FilterPanelProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filter, setFilter }) => {
  return (
    <div className={styles.panel}>
      {["all", "active", "inactive"].map((status) => (
        <button
          key={status}
          className={`${styles.button} ${filter === status ? styles.active : ""}`}
          onClick={() => setFilter(status)}
        >
          {status === "all" ? "Show All" : status === "active" ? "Show Active" : "Show Deactivated"}
        </button>
      ))}
    </div>
  );
};

export default FilterPanel;
