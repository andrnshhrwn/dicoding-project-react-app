import NotesCards from "./NotesCards";

const NotesList = ({ notes, onClick, archiveHandle, children }) => { 
	return (
		<>
			<div className="active">
				<h2>Catatan Aktif</h2>
				{notes.length === 0 ? (
					<p className="status">Tidak ada catatan</p>
				) : (
					<ul className="list">
						{notes
							.filter((note) => !note.archived)
							.map((e, index) => (
								<NotesCards
									key={index}
									title={e.title}
									createdAt={e.createdAt}
									body={e.body}
									onClick={() => onClick(e.id)}
									archiveHandle={() => archiveHandle(e.id)}
									children={children}
								/>
							))}
					</ul>
				)}
			</div>
		</>
	);
};

export default NotesList;
