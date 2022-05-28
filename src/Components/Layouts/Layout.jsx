import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: "",
    },
    {
      title: "About",
      path: "/about",
      icon: "",
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "",
    },
    {
      title: "Contact",
      path: "/contact",
      icon: "",
    },
  ];
  return (
    <div>
      {/* content */}
      <div className="">{children}</div>

      {/* footer */}
      <div className="fixed bottom-10 left-0 right-0">
        <div className="flex w-full justify-center">
          {menuItems.map((item, index) => (
            <div className={`px-20 bg-primary py-5 ${index===0 && 'rounded-l'} ${index===menuItems.length-1 && 'rounded-r'}`}>
              <Link to={`${item.path}`} className='text-secondary'>{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
