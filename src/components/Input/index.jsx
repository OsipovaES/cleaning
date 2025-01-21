import styles from "./input.module.css";

export const Input = ({ label, placeholder, type = "text", name }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
