/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import PropTypes from "prop-types";

function NotesItemContent({ id, title, date, body }) {
  return (
    <div className="notes-item_content">
      <Link to={`/notes/${id}`}> {title}</Link>
      <p className="notes-item_date">{showFormattedDate(date)}</p>
      <p className="notes-item_body">{body}</p>
    </div>
  );
}

NotesItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesItemContent;
