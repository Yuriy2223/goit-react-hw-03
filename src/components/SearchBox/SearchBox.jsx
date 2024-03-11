import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => (
  <input
    className={styles.imputSearch}
    type="text"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    placeholder="Search by User name"
  />
);

export default SearchBox;
