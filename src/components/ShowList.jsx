
const ShowList = ({ items, limit, onToggleItem, selectedSet }) => {
  return (
    <div>
      {items.slice(0, limit).map(item => (
        <label key={item.name}>
          <input
            type="checkbox"
            checked={selectedSet.has(item.name)}
            onChange={() => onToggleItem(item.name)}
          />
          {item.name}
        </label>
      ))}
    </div>
  );
};

export default ShowList;
