import React, { useEffect } from "react";
import Note from "./Note";
import { useParams } from "react-router";
function NoteList({ notes, formatDate }) {
  const { id } = useParams();
  if (!notes[0]) {
    return (
      <>
        <h2 id="no-notes-yet">No notes yet</h2>
      </>
    );
  }
  return notes.map((note) => {
    return (
      <Note
        key={note.ID}
        note={note}
        current={note.ID === id ? " true" : ""}
        formatDate={formatDate}
      />
    );
  });
}

export default NoteList;
