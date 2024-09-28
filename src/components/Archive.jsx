import NotesCards from "./NotesCards";

const Archive = ({ notes, onClick, archiveHandle, children }) => {
	return (
		<div className="notes-archive">
			<h2>Arsip</h2>
				{notes.length === 0 ? (
					<p className="status">catatan kosong</p>
				) : (
					<ul className="list">
						{notes
							.filter((note) => note.archived)
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
	);
};

export default Archive;
