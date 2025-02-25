export function processGraphData(graphData: any) {
  const nodes = graphData.nodes.map((node: any) => ({
    id: node.id,
    type: "form",
    data: {
      name: node.data.name,
      fields: Object.keys(
        graphData.forms.find((f) => f.id === node.data.component_id)
          ?.field_schema?.properties || {}
      ),
    },
    position: node.position, // Use predefined position
  }));

  const edges = graphData.edges.map((edge: any) => ({
    id: `${edge.source}-${edge.target}`,
    source: edge.source,
    target: edge.target,
  }));

  return { nodes, edges };
}
