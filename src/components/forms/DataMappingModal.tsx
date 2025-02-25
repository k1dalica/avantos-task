import { FC, useMemo, useState } from "react";
import Modal from "../common/Modal";
import TreeItem from "../common/TreeItem";
import { Node } from "reactflow";
import { useGraphStore } from "@/stores/graphStore";

interface Props {
  isOpen: boolean;
  node: Node;
  onClose: () => void;
  onSelect: (id: string, parentId: string) => void;
}

interface TreeItem {
  id: string;
  label: string;
  items: string[];
}

const defaultTreeData: TreeItem[] = [
  {
    id: "action_properties",
    label: "Action Properties",
    items: ["action_id", "action_name", "action_type"],
  },
  {
    id: "client_organisation_properties",
    label: "Client Organisation Properties",
    items: ["org_name", "org_id", "org_type"],
  },
];

const DataMappingModal: FC<Props> = ({ node, isOpen, onClose, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedParent, setSelectedParent] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const { nodes, forms } = useGraphStore();

  const getAllPrerequisiteNodes = useMemo(() => {
    const visited = new Set<string>();

    const traverse = (nodeId: string) => {
      if (visited.has(nodeId)) return [];
      visited.add(nodeId);

      const currentNode = nodes?.find((n) => n.id === nodeId) as Node;
      if (!currentNode) return [];

      const prerequisites = currentNode.data.prerequisites || [];
      const prerequisiteNodes = prerequisites.flatMap((preId: string) =>
        traverse(preId)
      );

      return [currentNode, ...prerequisiteNodes];
    };

    return node.data.prerequisites?.flatMap(traverse) || [];
  }, [nodes, node.data.prerequisites]);

  const prerequisiteData = useMemo(() => {
    return getAllPrerequisiteNodes
      ?.map((n: Node) => {
        const form = forms?.find((f) => f.id === n.data.component_id) as any;
        return {
          id: n.data.name,
          label: n.data.name,
          items: Object.keys(form?.dynamic_field_config ?? {}),
        };
      })
      .reverse();
  }, [forms, getAllPrerequisiteNodes]);

  const filteredTreeData = useMemo(() => {
    const allData = [...defaultTreeData, ...prerequisiteData];
    if (!searchQuery) return allData;

    return allData
      .map((section) => ({
        ...section,
        items: section.items.filter((item: string) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [searchQuery, prerequisiteData]);

  const handleSelect = (value: string, parentId: string) => {
    setSelectedParent(parentId);
    setSelectedItem(value);
  };

  const _onSelect = () => {
    if (selectedItem && selectedParent) {
      onSelect(selectedItem, selectedParent);
    }
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
        {filteredTreeData.map((section: TreeItem) => (
          <TreeItem
            key={section.label}
            label={section.label}
            items={section.items}
            selectedItem={section.id === selectedParent ? selectedItem : null}
            onSelect={(item) => handleSelect(item, section.id)}
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
          onClick={() => selectedItem && _onSelect()}
          disabled={!selectedItem}
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
