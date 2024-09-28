const SearchButton = ( {onClick} ) => {
  return (
    <div className="search-button">
      <button type="submit" onClick={onClick}>Search</button>
    </div>
  )
}

export default SearchButton;