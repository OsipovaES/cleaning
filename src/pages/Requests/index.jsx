import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout";
import styles from "./requests.module.css";
import { Card } from "../../components/Card";

export const Requests = () => {
  const navigate = useNavigate();

  const handleCreateRequest = () => {
    navigate("/create-request");
  };

  const requestsData = [
    {
      title: "Заявка №1",
      data: [
        { label: "Адрес", value: "ул. Ленина, 10" },
        { label: "Контакты", value: "+7 (900) 123-45-67" },
        { label: "Дата и время", value: "15.01.2024, 14:00" },
        { label: "Услуга", value: "Генеральная уборка" },
        { label: "Тип оплаты", value: "По карте" },
      ],
      status: "Выполнена",
    },
    {
      title: "Заявка №2",
      data: [
        { label: "Адрес", value: "пр. Мира, 5" },
        { label: "Контакты", value: "+7 (900) 234-56-78" },
        { label: "Дата и время", value: "18.01.2024, 10:00" },
        { label: "Услуга", value: "Общий клининг" },
        { label: "Тип оплаты", value: "Наличные" },
      ],
      status: "В работе",
    },
    {
      title: "Заявка №3",
      data: [
        { label: "Адрес", value: "ул. Пушкина, 25" },
        { label: "Контакты", value: "+7 (900) 345-67-89" },
        { label: "Дата и время", value: "20.01.2024, 09:00" },
        { label: "Услуга", value: "Химчистка мебели" },
        { label: "Тип оплаты", value: "Наличные" },
      ],
      status: "Отклонена",
    },
    {
      title: "Заявка №4",
      data: [
        { label: "Адрес", value: "ул. Ленина, 10" },
        { label: "Контакты", value: "+7 (900) 123-45-67" },
        { label: "Дата и время", value: "15.01.2024, 14:00" },
        { label: "Услуга", value: "Генеральная уборка" },
        { label: "Тип оплаты", value: "По карте" },
      ],
      status: "Выполнена",
    },
    {
      title: "Заявка №5",
      data: [
        { label: "Адрес", value: "ул. Ленина, 10" },
        { label: "Контакты", value: "+7 (900) 123-45-67" },
        { label: "Дата и время", value: "15.01.2024, 14:00" },
        { label: "Услуга", value: "Генеральная уборка" },
        { label: "Тип оплаты", value: "По карте" },
      ],
      status: "Выполнена",
    },
  ];

  return (
    <Layout title="История заявок">
      <div className={styles.container}>
        {/* Карточка с кнопкой */}
        <Card
          title="Понравились наши услуги?"
          buttonText="Создать новую заявку"
          onButtonClick={handleCreateRequest}
        />

        {/* Динамический рендер заявок */}
        {requestsData.map((request, index) => (
          <Card
            key={index}
            title={request.title}
            data={request.data}
            status={request.status}
          />
        ))}
      </div>
    </Layout>
  );
};
