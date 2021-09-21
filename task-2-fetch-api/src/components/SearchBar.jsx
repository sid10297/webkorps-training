const Search = ({ setTextValue, textValue }) => {
  const filterDataChange = (e) => {
    const val = e.target.value;
    setTextValue(val);
  };

  return (
    <div>
      <form>
        <input
          className="input"
          type="text"
          placeholder="Search By Name"
          onChange={filterDataChange}
          value={textValue}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Search;
