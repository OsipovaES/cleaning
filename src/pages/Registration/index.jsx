import { Form } from "../../components/Form";
import { Layout } from "../../components/layout";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        return;
      }

      await response.json();
      alert("Регистрация успешна!");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Регистрация">
      <Form
        description="Зарегистрируйтесь в системе"
        inputs={[
          {
            label: "Имя (ФИО)",
            placeholder: "Иванов Иван Иванович",
            type: "text",
            name: "name",
          },
          {
            label: "Телефон",
            placeholder: "+7 (900) 123-45-67",
            type: "tel",
            name: "phone",
          },
          {
            label: "Email",
            placeholder: "ivanov@example.com",
            type: "email",
            name: "email",
          },
          {
            label: "Логин",
            placeholder: "ivanov_2025",
            type: "text",
            name: "username",
          },
          {
            label: "Пароль",
            placeholder: "Введите ваш пароль",
            type: "password",
            name: "password",
          },
          {
            label: "Подтвердите пароль",
            placeholder: "Повторите ваш пароль",
            type: "password",
            name: "confirmPassword",
          },
        ]}
        buttonText="Зарегистрироваться"
        onSubmit={handleRegister}
      />
    </Layout>
  );
};
