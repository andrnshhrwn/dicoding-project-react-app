import { useState } from "react";
import { getInitialData } from "../utils";
import NotesList from "./NotesList";
import AddNotes from "./AddNotes";
import Archive from "./Archive";
import SearchNotes from "./SearchNotes";

function NotesApp() {
	const initialNotes = getInitialData();
	const [notes, setNotes] = useState(initialNotes);
  const [afterFilter, setAfterFilter] = useState(initialNotes);

	const deleteHandler = (id) => {
		const newNotes = notes.filter((n) => n.id !== id);
		setNotes(newNotes);
    setAfterFilter(newNotes);
	};

	const addNotesHandler = (title, body) => {
		if (title != "" && body != "") {
      const newNotes = {
        id: notes.length + 1,
					title: title,
					body: body,
					createdAt: +new Date(),
					archived: false,
      }
			setNotes([...notes, newNotes]);
      setAfterFilter([...afterFilter, newNotes])
		}
	};

	const toogleArchive = (id) => {
		const update = notes.map((note) => {
			if (note.id === id) {
				return { ...note, archived: !note.archived };
			}
			return note;
		});
		setNotes(update);
    setAfterFilter(update);
	};

	const toogleSearch = (title) => {
		if (title === "") {
			setAfterFilter(notes);
		} else {
			const filterSearch = notes.filter((note) =>
				note.title.toLowerCase().includes(title)
			);
			setAfterFilter(filterSearch);
		}
	};

	const active = afterFilter.filter((note) => !note.archived);
	const archive = afterFilter.filter((note) => note.archived);

	return (
		<>
			<div className="header-notes">
				<h1>Notes</h1>
				<SearchNotes onClick={toogleSearch} notes={notes} />
			</div>
			<div className="notes-app">
				<AddNotes onClick={addNotesHandler} />
				<NotesList
					notes={active}
					onClick={deleteHandler}
					archiveHandle={toogleArchive}
					children="Archive"
				/>
				<Archive
					notes={archive}
					onClick={deleteHandler}
					archiveHandle={toogleArchive}
					children="Unarchive"
				/>
			</div>
		</>
	);
}

export default NotesApp;