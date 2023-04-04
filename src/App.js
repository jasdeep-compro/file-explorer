import "./App.css";
import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import useUpdateFolderData from "./hooks/use-update-folderdata";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insert } = useUpdateFolderData();

  const handleInsert = (folderId, item, isFolder) => {
    const finalData = insert(explorerData, folderId, item, isFolder);
    setExplorerData(finalData);
  };

  return (
    <div className="App">
      <Folder handleInsert={handleInsert} explorer={explorerData} />
    </div>
  );
}
