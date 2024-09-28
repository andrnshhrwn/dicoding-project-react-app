import { showFormattedDate } from "../utils";
import ArchiveButton from "./Element/ArchiveButton";
import DeleteButton from "./Element/DeleteButton";
import Notes from "./Notes";

const NotesCards = ({
	title,
	createdAt,
	body,
	onClick,
	archiveHandle,
	children,
	e,
}) => {
	const date = showFormattedDate(createdAt);

	return (
		<div className="cards">
			<Notes title={title} createdAt={date} body={body} />
			<div className="buttons">
				<DeleteButton onClick={onClick} />
				<ArchiveButton archiveHandle={archiveHandle} children={children} />
			</div>
		</div>
	);
};

export default NotesCards;
