import { useState } from "react";
import DataMappingModal from "../forms/DataMappingModal";

interface Props {
  name: string;
  onChange: (value: any) => void;
}

const DynamicField = ({ name, onChange }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full px-3 py-1 rounded mb-3 flex items-center justify-between border border-dashed border-gray-300 bg-gray-50 hover:bg-blue-50 hover:border-blue-400"
      >
        <span className="mr-3 text-3xl leading-none font-semibold text-gray-600">
          ⛁
        </span>
        <span className="flex-grow text-left text-gray-400">{name}</span>
      </button>

      <DataMappingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={(value) => {
          onChange(value);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default DynamicField;
