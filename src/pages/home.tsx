// 首页
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 在这里添加你的逻辑
  }, [navigate]);

  return <div>Home</div>;
};

export default Home;
