/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function SearchBar({ name, keyword, keywordChange }) {
  return (
    <div className="notes-app_search">
      <h1>Catatan {name}</h1>
      <input
        type="text"
        placeholder="Cari Berdasarkan Judul"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
