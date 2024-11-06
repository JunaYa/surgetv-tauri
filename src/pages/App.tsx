import "~/styles/global.css";
import TabBar from "antd-mobile/es/components/tab-bar";
import { SafeArea } from "antd-mobile";
import AppOutline from "antd-mobile-icons/es/AppOutline";
import MessageFill from "antd-mobile-icons/es/MessageFill";
import UnorderedListOutline from "antd-mobile-icons/es/UnorderedListOutline";
import UserOutline from "antd-mobile-icons/es/UserOutline";
import MessageOutline from "antd-mobile-icons/es/MessageOutline";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleChange = (key: string) => {
    navigate(key);
  }

  const tabs = [
    {
      key: 'home',
      title: t('bottom_tab.home'),
      icon: <AppOutline />,
    },
    {
      key: 'discover',
      title: t('bottom_tab.discover'),
      icon: <UnorderedListOutline />,
    },
    {
      key: 'gift',
      title: t('bottom_tab.gift'),
      icon: (active: boolean) => (active ? <MessageFill /> : <MessageOutline />),
    },
    {
      key: 'person',
      title: t('bottom_tab.person'),
      icon: <UserOutline />,
    },
  ]

  return (
    <div className="main h-100vh flex flex-col">
      <div className="content flex-1 w-full overflow-y-auto">
        <div>
          <SafeArea position='top' />
        </div>
        <Outlet />
      </div>
      <div className="bottom-tabbar flex-0">
        <div>
          <TabBar onChange={handleChange}>
            {tabs?.map((item: any) => (
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
