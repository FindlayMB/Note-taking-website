import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

import ToggleDark from "../buttons/ToggleDark";
import NoteList from "../components/NoteList";

function Layout() {
  function toggleDisplay() {
    document.getElementById("content").classList.toggle("displaying");
  }

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("noteMenu.notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("noteMenu.notes", JSON.stringify(notes));
  }, [notes]);

  const navigate = useNavigate();

  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", {
      //options
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };

  function addNote() {
    var newNote = {
      ID: uuid(),
      title: "Untitled",
      dateTime: "",
      content: "",
      selected: true,
    };
    setNotes((prevNotes) => {
      return [newNote, ...prevNotes];
    });
    navigate(`notes/${newNote.ID}/edit`, { replace: true });
  }

  return (
    <>
      <nav>
        <div id="invis-left">
          <button onClick={toggleDisplay}>&#9776;</button>
        </div>
        <div id="title">
          <h2>Lotion</h2>
          <h6>Like Notion, but worse</h6>
        </div>
        <ToggleDark />
      </nav>

      <div id="content">
        <div id="side-container">
          <div id="side-header">
            <h1 id="side-title">Notes</h1>
            <button onClick={addNote}>+</button>
          </div>

          <div id="side-items">
            <NoteList notes={notes} formatDate={formatDate} />
          </div>
        </div>

        <div id="note-container">
          <Outlet context={[notes, setNotes, formatDate]} />
        </div>
      </div>
    </>
  );
}

export default Layout;
