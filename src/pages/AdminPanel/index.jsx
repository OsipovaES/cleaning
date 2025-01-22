import { useState } from "react";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import { StatusChangeForm } from "../../components/StatusChangeForm";
import { Layout } from "../../components/layout";
import styles from "./adminPanel.module.css";

export const AdminPanel = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: "Заявка №1",
      data: [
        { label: "Услуга", value: "Генеральная уборка" },
        { label: "Адрес", value: "ул. Ленина, 10, кв. 15" },
        { label: "Контакты", value: "+7 (900) 123-45-67" },
        { label: "Дата и время", value: "22.01.2024, 14:00" },
        { label: "Тип оплаты", value: "По карте" },
      ],
      status: "В обработке",
    },
    {
      id: 2,
      title: "Заявка №2",
      data: [
        { label: "Услуга", value: "Химчистка мебели" },
        { label: "Адрес", value: "ул. Московская, 5, кв. 12" },
        { label: "Контакты", value: "+7 (901) 654-32-10" },
        { label: "Дата и время", value: "25.01.2024, 11:30" },
        { label: "Тип оплаты", value: "Наличные" },
      ],
      status: "В обработке",
    },
    {
      id: 3,
      title: "Заявка №3",
      data: [
        { label: "Услуга", value: "Послестроительная уборка" },
        { label: "Адрес", value: "ул. Баумана, 18" },
        { label: "Контакты", value: "+7 (902) 777-88-99" },
        { label: "Дата и время", value: "28.01.2024, 16:00" },
        { label: "Тип оплаты", value: "По карте" },
      ],
      status: "В обработке",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);

  const handleOpenModal = (request) => {
    setCurrentRequest(request);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentRequest(null);
  };

  const handleUpdateStatus = (id, status, reason) => {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status, reason } : request
      )
    );
    handleCloseModal();
  };

  return (
    <Layout title="Панель администратора">
      <div className={styles.adminPanel}>
        <div className={styles.cardContainer}>
          {requests.map((request) => (
            <Card
              key={request.id}
              title={request.title}
              data={request.data}
              status={request.status}
              buttonText="Изменить статус"
              onButtonClick={() => handleOpenModal(request)}
            />
          ))}
        </div>

        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <StatusChangeForm
              request={currentRequest}
              onUpdateStatus={handleUpdateStatus}
            />
          </Modal>
        )}
      </div>
    </Layout>
  );
};
