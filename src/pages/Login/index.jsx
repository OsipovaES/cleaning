import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form";
import { Layout } from "../../components/layout";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        return;
      }

      const { user } = await response.json();
      alert("Вход успешен!");

      console.log(user.role);

      if (user.role === "admin") {
        navigate("/admin-panel");
      } else {
        navigate("/requests");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Вход">
      <Form
        description="Введите ваши данные для входа"
        inputs={[
          {
            label: "Логин",
            placeholder: "Введите логин",
            name: "username",
            value: formData.username,
            onChange: handleInputChange,
          },
          {
            label: "Пароль",
            placeholder: "Введите пароль",
            type: "password",
            name: "password",
            value: formData.password,
            onChange: handleInputChange,
          },
        ]}
        buttonText="Войти"
        onSubmit={handleLogin}
      />
    </Layout>
  );
};
