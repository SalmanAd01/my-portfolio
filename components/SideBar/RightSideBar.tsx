import { SideBarMenueList } from "./data";

const RightSideBar = () => {
  return (
    <ul className="menu scroll-nav d-flex">
      {SideBarMenueList.map((item, index) => {
        return (
          <li key={index}>
            <a className="scroll-to" href={item.href}>
              <span>{item.title}</span>
              <i className={item.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default RightSideBar;
