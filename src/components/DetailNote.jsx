import { FaRegFolderOpen, FaRegTrashAlt } from "react-icons/fa";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

function DetailNote({ id, title, body, createdAt, name, onArchive, onDelete }) {
  return (
    <div className="notes-item_detail">
      <h1 className="notes-detail_title">{title}</h1>
      <div className="notes-detail_item">
        <p className="notes-detail_date">{showFormattedDate(createdAt)}</p>
        <div className="notes-detail_button">
          <button
            className="notes-detail_arsipkan-button"
            onClick={() => onArchive(id)}>
            <FaRegFolderOpen /> <p>{name}</p>
          </button>
          <button
            className="notes-detail_hapus-button"
            onClick={() => onDelete(id)}>
            <FaRegTrashAlt />
            <p>Hapus</p>
          </button>
        </div>
      </div>
      <p className="notes-detail_body">{body}</p>
    </div>
  );
}

DetailNote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailNote;
