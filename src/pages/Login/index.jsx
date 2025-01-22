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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // if (formData.username === "adminka" && formData.password === "admin1234") {
    //   navigate("/admin-panel");
    // } else {
    //   navigate("/requests");
    // }
    navigate("/admin-panel");
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
