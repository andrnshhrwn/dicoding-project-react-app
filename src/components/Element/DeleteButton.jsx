const DeleteButton = ( {onClick} ) => {
	return (
		<div className="delete-button">
			<button onClick={onClick}>Hapus</button>
		</div>
	);
};

export default DeleteButton;
