import React from "react";
import { Handle, Position, NodeProps } from "@reactflow/core";
import FormIcon from "../../../public/form.png";
import styled from "styled-components";
import Image from "next/image";

const NodeContainer = styled.div`
  padding: 10px;
  border-radius: 8px;
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 180px;
  min-height: 50px;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
`;

const Type = styled.div`
  color: #555;
  font-size: 14px;
`;

const Name = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

const StyledHandle = styled(Handle)`
  width: 8px;
  height: 8px;
  background: #b1b1b7;
`;

const FormNode = (props: NodeProps) => {
  return (
    <NodeContainer>
      <StyledHandle type="target" position={Position.Left} />
      <IconWrapper>
        <Image src={FormIcon} alt="Form" />
      </IconWrapper>
      <Content>
        <Type>{props.data.type ?? "Form"}</Type>
        <Name>{props.data.name}</Name>
      </Content>
      <StyledHandle type="source" position={Position.Right} />
    </NodeContainer>
  );
};

export default FormNode;
