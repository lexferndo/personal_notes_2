/* eslint-disable react/prop-types */
import NotesItem from "./NotesItem";
import PropTypes from "prop-types";

function NotesList({ notes, name, onDelete, onArchive }) {
  return notes.length === 0 ? (
    <p className="notes-list_empty">Tidak ada catatan</p>
  ) : (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          id={note.id}
          name={name}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesList;
