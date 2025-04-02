import { useState } from "react";

function Collapsible({ children, buttonText }) {
  const [collapsed, setCollapsed] = useState(true);

  function handleClick() {
    console.log(collapsed);
    setCollapsed(!collapsed);
  }

  return (
    <div className="collapsible">
      <h3 className="collapsible-btn" onClick={handleClick}>
        {buttonText}
      </h3>
      <div
        className="content"
        style={{
          maxHeight: collapsed
            ? "0px"
            : `${document.querySelector(".content").scrollHeight + 32}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
