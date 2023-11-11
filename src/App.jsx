// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FaRegFolder } from "react-icons/fa";
import HomePage from "./pages/HomePage";
import ArsipPage from "./pages/ArsipPage";
import { deleteNote, archiveNote, unarchiveNote } from "./utils/local-data";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="app-container">
      <div className="notes-app_header">
        <Link to="/">Personal Notes App</Link>
        <div className="notes-app_arsip">
          <Link to="/arsip">
            <FaRegFolder />
            <p>Arsip</p>
          </Link>
        </div>
      </div>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage deleteNote={deleteNote} archiveNote={archiveNote} />
            }
          />
          <Route
            path="/arsip"
            element={
              <ArsipPage
                deleteNote={deleteNote}
                unarchiveNote={unarchiveNote}
              />
            }
          />
          <Route path="/tambahnote" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
