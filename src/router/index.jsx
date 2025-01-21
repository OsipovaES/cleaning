import { Routes, Route } from "react-router-dom";
import { Registration } from "../pages/Registration";
import { Requests } from "../pages/Requests";
import { CreateRequest } from "../pages/CreateRequest";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Регистрация */}
      <Route path="/" element={<Registration />} />

      {/* Список заявок */}
      <Route path="/requests" element={<Requests />} />

      {/* Создание заявки */}
      <Route path="/create-request" element={<CreateRequest />} />
    </Routes>
  );
};
