const ArchiveButton = ( {archiveHandle, children} ) => {
	return (
		<div className="archive-button">
			<button onClick={archiveHandle}>{children}</button>
		</div>
	);
};

export default ArchiveButton;
