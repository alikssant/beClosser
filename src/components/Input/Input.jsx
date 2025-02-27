import s from "./style.module.css";
export function Input({ type, onTextChange, placeholder, value }) {
  return (
    <input
      type={type || "text"}
      className={s.input}
      onChange={(e) => onTextChange(e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  );
}
// this important do not remove related to sign up
