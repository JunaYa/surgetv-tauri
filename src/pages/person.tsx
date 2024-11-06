import { List, Switch } from "antd-mobile";
import { GlobalOutline } from "antd-mobile-icons";
import { useRef } from "react";
import { useLanguage } from "~/hooks/useLanguage";

// 个人中心页面
const Person = () => {
  const { language, changeLanguage } = useLanguage()
  const isDark = useRef(document.documentElement.getAttribute('data-prefers-color-scheme') === 'dark')
  const toggleBrightness = () => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      isDark.current ? 'light' : 'dark'
    )
    isDark.current = !isDark.current
  }
  return (<div>
    {/* change theme brightness */}
    <List header='设置'>
        <List.Item extra={<Switch defaultChecked={isDark.current} onChange={() => toggleBrightness()} />} >主题</List.Item>
        <List.Item extra={<Switch defaultChecked={language === 'en-US'} onChange={() => changeLanguage(language === 'en-US' ? 'zh-CN' : 'en-US')} />}>
          <GlobalOutline />  {language === 'en-US' ? 'English' : 'Chinese'}
        </List.Item>
    </List>
    </div>);
};

export default Person;
