const Filter =({searchName, setSearchName}) => {
    <input value={searchName}
    onChange={event => setSearchName(event.target.value)}
/>
}