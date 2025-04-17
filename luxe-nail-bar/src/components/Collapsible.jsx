import { useState } from "react";

function Collapsible({ children, buttonText, headerTag: Tag = "h2" }) {
  const [collapsed, setCollapsed] = useState(true);

  function handleClick() {
    setCollapsed(!collapsed);
  }

  return (
    <div className="collapsible">
      <Tag className="collapsible-btn" onClick={handleClick}>
        {buttonText}
      </Tag>
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
