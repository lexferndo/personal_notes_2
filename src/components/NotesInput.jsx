/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onChangeLimitEventHandler = this.onChangeLimitEventHandler.bind(this);
    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeLimitEventHandler() {
    this.setState(() => {
      const titleInput = document.getElementById("title-input");
      const maxLimit = 50;
      const currentLength = titleInput.value.length;

      const remainingChar = Math.max(maxLimit - currentLength, 0);

      return {
        limit: remainingChar,
      };
    });
  }

  onChangeTitleHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  onChangeBodyHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="notes-input">
        <form onSubmit={this.onSubmitHandler}>
          <p>Sisa Karakter: {this.state.limit}</p>
          <input
            type="text"
            placeholder="Judul"
            id="title-input"
            maxLength={50}
            onInput={this.onChangeLimitEventHandler}
            value={this.state.title}
            onChange={this.onChangeTitleHandler}
          />
          <br />
          <textarea
            type="text"
            placeholder="Tuliskan Catatan Anda"
            value={this.state.body}
            onChange={this.onChangeBodyHandler}
          />
          <br />
          <button type="submit">Simpan</button>
        </form>
      </div>
    );
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
