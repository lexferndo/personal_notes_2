import DetailNote from "../components/DetailNote";
import React from "react";
import {
  getNote,
  archiveNote,
  deleteNote,
  unarchiveNote,
} from "../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();

  const navigate = useNavigate();

  function onDelete() {
    navigate("/");
  }

  function onArchive() {
    navigate("/arsip");
  }

  function onUnarchive() {
    navigate("/");
  }

  return (
    <DetailPage
      id={id}
      deleteNavigate={onDelete}
      archiveNavigate={onArchive}
      unarchiveNavigate={onUnarchive}
    />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchivedHandler = this.onUnarchivedHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return {
        note: getNote(),
      };
    });

    this.props.deleteNavigate();
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getNote(),
      };
    });

    this.props.archiveNavigate();
  }

  onUnarchivedHandler(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getNote(),
      };
    });

    this.props.unarchiveNavigate();
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    if (this.state.note.archived === false) {
      return (
        <DetailNote
          {...this.state.note}
          name="Arsipkan"
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      );
    }

    if (this.state.note.archived === true) {
      return (
        <DetailNote
          {...this.state.note}
          name="Pindahkan"
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      );
    }
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  deleteNavigate: PropTypes.func.isRequired,
  archiveNavigate: PropTypes.func.isRequired,
  unarchiveNavigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
