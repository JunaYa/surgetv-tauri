import Button from "antd-mobile/es/components/button";
import { useNavigate } from "react-router-dom";

// 404
const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  }
  return <div>
    <div>404</div>
    <Button onClick={handleClick}>返回首页</Button>
  </div>
}

export default NotFound;
