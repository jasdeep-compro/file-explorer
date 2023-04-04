import { useState } from "react";

function Folder({ explorer, handleInsert }) {
  const [expand, setExpanded] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (event, isFolder) => {
    event.stopPropagation();
    setExpanded(true);
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const onAddNewFolder = (event) => {
    if (event.keyCode === 13 && event.target.value) {
      setShowInput({ ...setShowInput, visible: false });
      handleInsert(explorer.id,event.target.value,showInput.isFolder);
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpanded(!expand)}>
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>
              Add Folder
            </button>
            <button onClick={(e) => handleNewFolder(e, false)}>Add File</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={(event) => onAddNewFolder(event)}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                className="inputContainer__input"
              ></input>
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} handleInsert={handleInsert} />;
          })}
        </div>
      </div>
    );
  }
  return <span className="file"> 📄{explorer.name} </span>;
}

export default Folder;
