import React from "react";

function Layout({children}) {
  return (
    <div>
      <div className="content">{children}</div>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default Layout;
