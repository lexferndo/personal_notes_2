/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function ActionButton({ id, name, onDelete, onArchive }) {
  return (
    <>
      <button className="notes-item_delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button className="notes-item_arsip-button" onClick={() => onArchive(id)}>
        {name}
      </button>
    </>
  );
}

ActionButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ActionButton;
