"use client";

import { FlowGrid } from "@/components/flow-grid";
import { ReactFlowProvider } from "reactflow";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export default function Home() {
  return (
    <ReactFlowProvider>
      <MainContainer>
        <FlowGrid />
      </MainContainer>
    </ReactFlowProvider>
  );
}
