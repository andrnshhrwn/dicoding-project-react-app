const Notes = ( {title, createdAt, body} ) => {
	return (
		<div>
			<h3>{title}</h3>
			<h5>{createdAt}</h5>
			<p>{body}</p>
		</div>
	);
};

export default Notes;