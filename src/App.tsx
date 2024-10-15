import "~/styles/global.css";
import TabBar from "antd-mobile/es/components/tab-bar";
import { Badge, SafeArea } from "antd-mobile";
import AppOutline from "antd-mobile-icons/es/AppOutline";
import MessageFill from "antd-mobile-icons/es/MessageFill";
import UnorderedListOutline from "antd-mobile-icons/es/UnorderedListOutline";
import UserOutline from "antd-mobile-icons/es/UserOutline";
import MessageOutline from "antd-mobile-icons/es/MessageOutline";
import { Outlet, useNavigate } from "react-router-dom";

const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    key: 'discover',
    title: '发现',
    icon: <UnorderedListOutline />,
  },
  {
    key: 'gift',
    title: '福利',
    icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
  },
  {
    key: 'person',
    title: '我的',
    icon: <UserOutline />,
  },
]

function App() {
  const navigate = useNavigate();
  const handleChange = (key: string) => {
    console.log(key);
    navigate(key);
  }

  return (
    <div className="main h-100vh flex flex-col">
      <div className="content flex-1 w-full overflow-y-auto">
        <div>
          <SafeArea position='top' />
        </div>
        <Outlet />
      </div>
      <div className="bottom-tabbar bg-white flex-0">
        <div>
          <TabBar onChange={handleChange}>
            {tabs.map(item => (
              <TabBar.Item
                key={item.key}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </TabBar>
          <div>
            <SafeArea position='bottom' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
