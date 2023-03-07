import React, { useEffect } from "react";
import NoteSide from "./NoteSide";

function NoteList({ notes }) {
  console.log("check");
  console.log(notes);
  if (!notes[0]) {
    console.log("no notes");
    return (
      <>
        <h2 id="no-notes-yet">No notes yet</h2>
      </>
    );
  }
  return notes.map((note) => {
    return <NoteSide key={note.id} note={note} />;
  });
}

export default NoteList;
