/* eslint-disable react/prop-types */
import React from "react";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";
import PropTypes from "prop-types";
import { FaRegFile } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";

function HomePageWrapper({ deleteNote, archiveNote }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
      deleteNote={deleteNote}
      archiveNote={archiveNote}
    />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.props.deleteNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
      };
    });
  }

  onArchiveHandler(id) {
    this.props.archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
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
          name="Aktif"
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <div className="notes-tambah">
          <Link to="/tambahnote">
            <FaRegFile />
            <p>Tambah Note</p>
          </Link>
        </div>
        <NotesList
          notes={notes}
          name="Arsipkan"
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </>
    );
  }
}

HomePageWrapper.propTypes = {
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default HomePageWrapper;
