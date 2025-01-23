import { Form } from "../../components/Form";
import { Layout } from "../../components/layout";
import { useNavigate } from "react-router-dom";

export const CreateRequest = () => {
  const navigate = useNavigate();

  const handleCreateRequest = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    data.dateTime = new Date(data.dateTime).toISOString();

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.error || "Ошибка при создании заявки");
        return;
      }

      await response.json();
      alert("Заявка успешно создана!");
      navigate("/requests");
    } catch (error) {
      console.error("Ошибка при создании заявки:", error.message);
      alert("Не удалось создать заявку. Попробуйте снова.");
    }
  };

  return (
    <Layout title="Формирование заявки">
      <Form
        description="Заполните данные для новой заявки"
        onSubmit={handleCreateRequest}
        inputs={[
          {
            label: "Адрес",
            placeholder: "Введите адрес",
            name: "address",
            type: "text",
          },
          {
            label: "Контакты",
            placeholder: "+7 (900) 123-45-67",
            name: "contact",
            type: "tel",
          },
          {
            label: "Дата и время",
            placeholder: "ДД/ММ/ГГ, ЧЧ:ММ",
            name: "dateTime",
            type: "datetime-local",
          },
        ]}
        selects={[
          {
            label: "Услуга",
            name: "service",
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
