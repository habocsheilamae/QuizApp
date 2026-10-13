export default function AnswerOption({ text, selected, onSelect, name }) {
  return (
    <label className={`answer ${selected ? "selected" : ""}`}>
      <input
        type="radio"
        name={name}
        checked={selected}
        onChange={onSelect}
      />
      <span>{text}</span>
    </label>
  );
}