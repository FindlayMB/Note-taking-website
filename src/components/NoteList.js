import React, { useEffect } from "react";
import NoteSide from "./NoteSide";
import { useParams } from "react-router";
function NoteList({ notes }) {
  const { id } = useParams();
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
    if (note.id === id) {
      return <NoteSide key={note.id} note={note} current={true} />;
    } else {
      return <NoteSide key={note.id} note={note} current={false} />;
    }
  });
}

export default NoteList;
