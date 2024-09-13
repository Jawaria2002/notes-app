'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import NoteList from './NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';

type Note = {
  id: number;
  title: string;
  description: string;
  important: boolean;
};

const IndexPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: 'Meeting',
      description: 'Review project, assign task',
      important: false,
    },
    {
      id: 2,
      title: 'Grocery',
      description: 'Milk, Sugar, Apples, eggs',
      important: false,
    },
  ]);

  const [newTitle, setNewTitle] = useState<string>('');
  const [newDescription, setNewDescription] = useState<string>('');

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const addNote = (e: FormEvent) => {
    e.preventDefault();
    if (newTitle && newDescription) {
      const newNote: Note = {
        id: Date.now(), // Using timestamp as a unique ID
        title: newTitle,
        description: newDescription,
        important: false,
      };
      setNotes([...notes, newNote]);
      setNewTitle('');
      setNewDescription('');
    }
  };

  return (
    <div className="container col-md-9 mb-3 mt-5 bg-light border border-dark">
      <div className="col text-center">
        <h2 className="text-success mt-3">Mini Notes App</h2>
        <h4>Welcome</h4>
      </div>

      <form onSubmit={addNote} className="mb-4">
        <input
          type="text"
          value={newTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.target.value)}
          placeholder="Note Title"
          className="form-control mb-2"
        />
        <textarea
          value={newDescription}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewDescription(e.target.value)}
          placeholder="Note Description"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">Add Note</button>
      </form>

      <NoteList notes={notes} setNotes={setNotes} onDelete={deleteNote} />
    </div>
  );
};

export default IndexPage;
