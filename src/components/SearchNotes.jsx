import { useState } from "react";
import SearchButton from "./Element/SearchButton";

const SearchNotes = ( { onClick } ) => {
	const [searchInput, setSearchInput] = useState('');
	const limitValue = 50

	const searchInputHandler = (e) => {
		if(e.target.value.length <= limitValue) {
			setSearchInput(e.target.value)
		}
	}

	return (
		<div className="search">
			<input type="text" name="" id="" placeholder="cari catatan" value={searchInput} onChange={searchInputHandler}/>
			<h4>{limitValue - searchInput.length}</h4>
			<SearchButton onClick={() => onClick(searchInput.toLowerCase())}/>
		</div>
	);
};

export default SearchNotes;