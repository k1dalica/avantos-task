import { Node } from "reactflow";
import Modal from "../common/Modal";
import { FormNode } from "@/types/graph";
import styled from "styled-components";
import { useState } from "react";
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
  node: Node | null;
  form: FormNode | null;
  onClose: () => void;
}

const PrefillModal = ({ node, form, onClose }: Props) => {
  const [prefillEnabled, setPrefillEnabled] = useState(true);

  if (!node) return null;

  return (
    <Modal title="Prefill" isOpen={true} onClose={onClose}>
      <FormFieldsContainer>
        <Header>
          <Subtitle>Prefill fields for this form</Subtitle>
          <Switch
            checked={prefillEnabled}
            onChange={(newValue) => {
              setPrefillEnabled(newValue);
            }}
          />
        </Header>

        <DynamicField name="dynamic_checkbox_group" onChange={() => {}} />
        <DynamicField name="dynamic_object" onChange={() => {}} />
        <PrefillField
          name="email"
          sourceForm="Form A"
          sourceField="email"
          onChange={() => {}}
        />
      </FormFieldsContainer>
    </Modal>
  );
};

export default PrefillModal;
