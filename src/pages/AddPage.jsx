import { useNavigate } from "react-router-dom";
import NotesInput from "../components/NotesInput";
import { addNote } from "../utils/local-data";

function AddPage() {
  const navigate = useNavigate();

  function AddNote(notes) {
    addNote(notes);
    navigate("/");
  }
  return <NotesInput addNote={AddNote} />;
}

export default AddPage;
