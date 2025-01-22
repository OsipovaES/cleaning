import styles from "./card.module.css";
import { Button } from "../Button";

export const Card = ({
  title,
  details,
  data,
  status,
  onButtonClick,
  buttonText,
}) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Отклонена":
        return styles.rejected;
      case "Выполнена":
        return styles.completed;
      case "В работе":
        return styles.inProgress;
      default:
        return styles.defaultStatus;
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>

      {/* Динамический список данных */}
      {data && data.length > 0 && (
        <ul className={styles.dataList}>
          {data.map((item, index) => (
            <li key={index} className={styles.dataItem}>
              <strong>{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>
      )}

      {/* Отображение дополнительных деталей */}
      {details && <p className={styles.details}>{details}</p>}

      {/* Отображение статуса */}
      {status && (
        <span className={`${styles.status} ${getStatusClass(status)}`}>
          {status}
        </span>
      )}

      {/* Кнопка */}
      {onButtonClick && <Button onClick={onButtonClick}>{buttonText}</Button>}
    </div>
  );
};
