import MarksInput from "./MarksInput";


function MarksGrid({ marks, handleChange }) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {marks.map((mark, index) => (
        <MarksInput
          key={index}
          value={mark}
          index={index}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}

export default MarksGrid;
