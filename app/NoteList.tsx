// components/NoteList.tsx
import React from 'react';

type Note = {
  id: number;
  title: string;
  description: string;
  important: boolean;
};

type NoteListProps = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  onDelete: (id: number) => void;
};

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div className="mt-4">
      <h4>Your Notes</h4>
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id} className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(note.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
};

export default NoteList;
