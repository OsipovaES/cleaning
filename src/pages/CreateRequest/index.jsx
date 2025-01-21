import { useState } from "react";
import { Form } from "../../components/Form";
import { Layout } from "../../components/layout";

export const CreateRequest = () => {
  const [formData, setFormData] = useState({
    address: "",
    contact: "",
    dateTime: "",
    service: "Общий клининг",
    paymentType: "Наличные",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Созданная заявка:", formData);
  };

  return (
    <Layout title="Формирование заявки">
      <Form
        description="Заполните данные для новой заявки"
        onSubmit={handleSubmit}
        inputs={[
          {
            label: "Адрес",
            placeholder: "Введите адрес",
            name: "address",
            value: formData.address,
            onChange: handleInputChange,
          },
          {
            label: "Контакты",
            placeholder: "+7 (900) 123-45-67",
            name: "contact",
            type: "tel",
            value: formData.contact,
            onChange: handleInputChange,
          },
          {
            label: "Дата и время",
            placeholder: "ДД/ММ/ГГ, ЧЧ:ММ",
            name: "dateTime",
            type: "datetime-local",
            value: formData.dateTime,
            onChange: handleInputChange,
          },
        ]}
        selects={[
          {
            label: "Услуга",
            name: "service",
            value: formData.service,
            onChange: handleInputChange,
            options: [
              { label: "Общий клининг", value: "Общий клининг" },
              { label: "Генеральная уборка", value: "Генеральная уборка" },
              {
                label: "Послестроительная уборка",
                value: "Послестроительная уборка",
              },
              { label: "Химчистка мебели", value: "Химчистка мебели" },
              { label: "Химчистка ковров", value: "Химчистка ковров" },
            ],
          },
          {
            label: "Тип оплаты",
            name: "paymentType",
            value: formData.paymentType,
            onChange: handleInputChange,
            options: [
              { label: "Наличные", value: "Наличные" },
              { label: "По карте", value: "По карте" },
            ],
          },
        ]}
        buttonText="Создать заявку"
      />
    </Layout>
  );
};
