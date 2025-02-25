import { useState } from "react";
import styled from "styled-components";

interface TreeItemProps {
  label: string;
  items?: string[];
  defaultExpanded?: boolean;
  selectedItem?: string;
  onSelect?: (value: string) => void;
}

const Container = styled.div`
  margin: 8px 0;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  color: #374151;
  &:hover {
    background-color: #f9fafb;
  }
`;

const Label = styled.div`
  margin-left: 8px;
`;

const ItemsContainer = styled.div`
  margin-left: 24px;
`;

const Item = styled.div<{ isSelected: boolean }>`
  padding: 8px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#3B82F6" : "#4B5563")};
  background-color: ${(props) =>
    props.isSelected ? "#f9fafb" : "transparent"};
  &:hover {
    background-color: #f9fafb;
  }
`;

const TreeItem = ({
  label,
  items = [],
  defaultExpanded = false,
  selectedItem,
  onSelect,
}: TreeItemProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Container>
      <LabelContainer onClick={() => setIsExpanded(!isExpanded)}>
        <span>{isExpanded ? "▼" : "▶"}</span>
        <Label>{label}</Label>
      </LabelContainer>
      {isExpanded && items.length > 0 && (
        <ItemsContainer>
          {items.map((item) => (
            <Item
              key={item}
              isSelected={selectedItem === item}
              onClick={() => onSelect?.(item)}
            >
              {item}
            </Item>
          ))}
        </ItemsContainer>
      )}
    </Container>
  );
};

export default TreeItem;
