const useUpdateFolderData = () => {
  function insert(currentData, folderId, item, isFolder) {
    if (currentData.id == folderId && currentData.isFolder) {
      currentData.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return currentData;
    }

    let updatedData = [];
    updatedData = currentData.items.map((obj) => {
      return insert(obj, folderId, item, isFolder);
    });

    return {...currentData, items: updatedData}
  }

  return { insert };
};

export default useUpdateFolderData;
