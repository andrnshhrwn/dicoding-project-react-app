import { useState } from "react";

const AddNotes = ( {onClick} ) => {
  const [inputvalue, setInputValue] = useState("")
  const [textvalue, setTextValue] = useState("")

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleText = (e) => {
		console.log(e)
    setTextValue(e.target.value)
  }

	return (
		<div className="add-notes">
			<form action="" className="form-notes">
				<input type="text" name="" id="" placeholder="Nama Catatan" value={inputvalue} onChange={handleInput}/>
				<textarea name="" id="" placeholder="Masukan Catatan Anda" value={textvalue} onChange={handleText}></textarea>
			</form>
			<button type="submit" onClick={() => onClick(inputvalue, textvalue)}>Tambah Catatan</button>
		</div>
	);
};

export default AddNotes;
