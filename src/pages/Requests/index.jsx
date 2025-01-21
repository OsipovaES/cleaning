import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout";

export const Requests = () => {
  const navigate = useNavigate();

  const handleCreateRequest = () => {
    navigate("/create-request");
  };

  return (
    <Layout title="История">
      <ul>
        <li>Заявка 1</li>
        <li>Заявка 2</li>
        <li>Заявка 3</li>
      </ul>
      <button onClick={handleCreateRequest}>Создать заявку</button>
    </Layout>
  );
};
