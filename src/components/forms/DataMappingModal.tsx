import { useMemo, useState } from "react";
import Modal from "../common/Modal";
import TreeItem from "../common/TreeItem";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
}

const treeData = [
  {
    label: "Action Properties",
    items: ["action_id", "action_name", "action_type"],
  },
  {
    label: "Client Organisation Properties",
    items: ["org_name", "org_id", "org_type"],
  },
  {
    label: "Form A",
    items: ["title", "description", "status"],
  },
  {
    label: "Form B",
    items: [
      "completed_at",
      "button",
      "dynamic_checkbox_group",
      "dynamic_object",
      "email",
      "id",
      "multi_select",
      "name",
      "notes",
    ],
  },
];

const DataMappingModal = ({ isOpen, onClose, onSelect }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const filteredTreeData = useMemo(() => {
    if (!searchQuery) return treeData;

    return treeData
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [searchQuery]);

  const handleSelect = (value: string) => {
    setSelectedItem(value);
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h2 className="text-2xl text-gray-700 mb-4">
        Select data element to map
      </h2>

      <div className="my-5">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="my-5 text-gray-700">
        {filteredTreeData.map((section) => (
          <TreeItem
            key={section.label}
            label={section.label}
            items={section.items}
            selectedItem={selectedItem}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={handleClose}
          className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 font-medium hover:bg-gray-50"
        >
          CANCEL
        </button>
        <button
          onClick={() => selectedItem && onSelect(selectedItem)}
          className={`px-4 py-2 rounded-md ${
            selectedItem
              ? "bg-blue-400 hover:bg-blue-500"
              : "bg-gray-300 cursor-not-allowed"
          } text-white font-medium`}
        >
          SELECT
        </button>
      </div>
    </Modal>
  );
};

export default DataMappingModal;
