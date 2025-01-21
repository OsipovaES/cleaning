import { Form } from "../../components/Form";
import { Layout } from "../../components/layout";

export const Registration = () => {
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
      />
    </Layout>
  );
};
