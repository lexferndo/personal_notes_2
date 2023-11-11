/* eslint-disable react/prop-types */
import React from "react";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

function ArsipPageWrapper({ deleteNote, unarchiveNote }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArsipPage
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
      deleteNote={deleteNote}
      unarchiveNote={unarchiveNote}
    />
  );
}

class ArsipPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onUnarchivedHandler = this.onUnarchivedHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.props.deleteNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  onUnarchivedHandler(id) {
    this.props.unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <>
        <SearchBar
          name="Arsip"
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList
          notes={notes}
          name="Pindahkan"
          onDelete={this.onDeleteHandler}
          onArchive={this.onUnarchivedHandler}
        />
      </>
    );
  }
}

ArsipPageWrapper.propTypes = {
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

ArsipPage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
export default ArsipPageWrapper;
