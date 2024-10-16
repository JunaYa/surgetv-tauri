// 首页
import { Swiper } from 'antd-mobile';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '~/components/banner';

const Home = () => {
  const navigate = useNavigate();

  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

  const items = colors.map((color, index) => (
    <Swiper.Item key={index} >
      <div className="h-60vw w-full flex justify-center items-center text-48px user-select-none color-white"
        style={{ background: color }}>
        {index + 1}
      </div>
    </Swiper.Item>
  ))

  useEffect(() => {
    // 在这里添加你的逻辑
  }, [navigate]);

  return <div>
    <Banner />
    <div className='h-12'></div>
    <Swiper loop autoplay indicator={false}>{items}</Swiper>
  </div>;
};

export default Home;
