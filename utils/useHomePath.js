import { useNavigate } from "react-router-dom"

export const useHomePath = () => {
    const navigate = useNavigate();
    return () => navigate("/");
  };
