import { useLanguage } from "~/hooks/useLanguage";

// 个人中心页面
const Person = () => {
  const { changeLanguage } = useLanguage()
  return (<div>
    <button onClick={() => changeLanguage('en-US')}>English</button>
    <button onClick={() => changeLanguage('zh-CN')}>Chinese</button>
    Person
    </div>);
};

export default Person;
