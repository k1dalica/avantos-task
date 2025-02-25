import { useCallback, useEffect, useMemo, useState, FC } from "react";
import ReactFlow, { Background, Controls, MiniMap, Node } from "reactflow";
import "reactflow/dist/style.css";
import { useGraphStore } from "../../stores/graphStore";
import FormNodeComponent from "./FormNode";
import LoadingSpinner from "../common/LoadingSpinner";
import PrefillModal from "../forms/PrefillModal";

const nodeTypes = {
  form: FormNodeComponent,
};

const FlowGrid: FC = () => {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const { isLoading, nodes, edges, forms, fetchGraph } = useGraphStore();

  const selectedForm = useMemo(() => {
    return selectedNode
      ? forms.find((form) => form.id === selectedNode.data.component_id) ?? null
      : null;
  }, [selectedNode, forms]);

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setSelectedNode(node);
    },
    [setSelectedNode]
  );

  useEffect(() => {
    fetchGraph();
  }, [fetchGraph]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
        defaultEdgeOptions={{
          type: "smoothstep",
          animated: true,
        }}
      >
        <Background
          color="#ccc"
          style={{ backgroundColor: "white" }}
          gap={12}
          size={1}
        />
        <Controls />
        <MiniMap />
      </ReactFlow>

      <PrefillModal
        node={selectedNode}
        form={selectedForm}
        onClose={() => setSelectedNode(null)}
      />
    </div>
  );
};

export default FlowGrid;
