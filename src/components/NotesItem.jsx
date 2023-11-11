/* eslint-disable react/prop-types */
import ActionButton from "./ActionButton";
import NotesItemContent from "./NotesItemContent";
import PropTypes from "prop-types";

function NotesItem({ id, name, onDelete, onArchive, title, createdAt, body }) {
  return (
    <div className="notes-item">
      <NotesItemContent id={id} title={title} date={createdAt} body={body} />
      <div className="notes-item_button">
        <ActionButton
          id={id}
          name={name}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </div>
    </div>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesItem;
