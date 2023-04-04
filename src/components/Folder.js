import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpanded] = useState(false);

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpanded(!expand)}>
          <span>📁{explorer.name}</span>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  }
  return <span className="file"> 📄{explorer.name} </span>;
}

export default Folder;
