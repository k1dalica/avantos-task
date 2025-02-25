import styled from "styled-components";

const PrefillContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const FieldText = styled.span`
  color: #333;
  font-size: 14px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  color: #666;
  font-size: 18px;
  display: flex;
  align-items: center;

  &:hover {
    color: #333;
  }
`;

interface PrefillFieldProps {
  name: string;
  sourceForm: string;
  sourceField: string;
  onChange: () => void;
}

const PrefillField = ({
  name,
  sourceForm,
  sourceField,
  onChange,
}: PrefillFieldProps) => {
  return (
    <PrefillContainer>
      <FieldText>
        {name}: {sourceForm}.{sourceField}
      </FieldText>
      <CloseButton onClick={onChange}>✕</CloseButton>
    </PrefillContainer>
  );
};

export default PrefillField;
