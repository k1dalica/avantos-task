import { Node } from "reactflow";
import Modal from "../common/Modal";
import { FormNode } from "@/types/graph";
import styled from "styled-components";
import { useCallback, useState } from "react";
import DynamicField from "../fields/DynamicField";
import { Switch } from "../common/Switch";
import PrefillField from "../fields/PrefillField";

const FormFieldsContainer = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  color: #666;
`;

interface Props {
  node: Node;
  form: FormNode | null;
  onClose: () => void;
}

interface FieldData {
  label: string;
  sourceForm?: string;
  sourceField?: string;
}

const PrefillModal = ({ node, form, onClose }: Props) => {
  const [prefillEnabled, setPrefillEnabled] = useState(true);
  const [fields, setFields] = useState<FieldData[]>([
    {
      label: "dynamic_checkbox_group",
    },
    {
      label: "dynamic_object",
    },
    {
      label: "email",
      sourceForm: "Form A",
      sourceField: "email",
    },
  ]);

  const clearField = useCallback((index: number) => {
    setFields((fields) =>
      fields.map((field: FieldData, i) =>
        i === index
          ? ({
              ...field,
              sourceForm: undefined,
              sourceField: undefined,
            } as FieldData)
          : field
      )
    );
  }, []);

  const onChange = useCallback(
    (index: number, sourceField: string, sourceForm: string) => {
      setFields(
        fields.map((field, i) =>
          i === index ? { ...field, sourceField, sourceForm } : field
        )
      );
    },
    [fields]
  );

  if (!node) return null;

  return (
    <Modal title="Prefill" isOpen={true} onClose={onClose}>
      <FormFieldsContainer>
        <Header>
          <Subtitle>Prefill fields for this form</Subtitle>
          <Switch
            checked={prefillEnabled}
            onChange={(newValue) => setPrefillEnabled(newValue)}
          />
        </Header>

        {fields.map((field, index) =>
          field.sourceForm ? (
            <PrefillField
              key={index}
              name={field.label}
              sourceForm={field.sourceForm}
              sourceField={field.sourceField || ""}
              onClear={() => clearField(index)}
            />
          ) : (
            <DynamicField
              key={index}
              node={node}
              name={field.label}
              onChange={(id, parentId) => onChange(index, id, parentId)}
            />
          )
        )}
      </FormFieldsContainer>
    </Modal>
  );
};

export default PrefillModal;
