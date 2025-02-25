import { create } from "zustand";
import { Connection, Edge, Node } from "reactflow";
import { FormNode, FormEdge } from "../types/graph";
import { fetchFormGraph } from "../services/graphService";

interface GraphState {
  nodes: Node<FormNode>[];
  edges: Edge<FormEdge>[];
  forms: FormNode[];
  selectedNode: Node | null;
  isLoading: boolean;
  error: string | null;
  setNodes: (nodes: Node<FormNode>[]) => void;
  setEdges: (edges: Edge<FormEdge>[]) => void;
  onNodesChange: (changes: any) => void;
  onEdgesChange: (changes: any) => void;
  setSelectedNode: (node: Node | null) => void;
  addEdge: (connection: Connection) => void;
  fetchGraph: () => Promise<void>;
}

export const useGraphStore = create<GraphState>((set, get) => ({
  nodes: [],
  edges: [],
  forms: [],
  selectedNode: null,
  isLoading: false,
  error: null,

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),

  onNodesChange: (changes) => {
    set((state) => ({
      nodes: changes.reduce(
        (nodes: Node[], change: any) => {
          // Apply the node changes here
          return nodes;
        },
        [...state.nodes]
      ),
    }));
  },

  onEdgesChange: (changes) => {
    set((state) => ({
      edges: changes.reduce(
        (edges: Edge[], change: any) => {
          // Apply the edge changes here
          return edges;
        },
        [...state.edges]
      ),
    }));
  },

  setSelectedNode: (node) => set({ selectedNode: node }),

  addEdge: (connection) => {
    set((state) => ({
      edges: [
        ...state.edges,
        {
          ...connection,
          id: `edge-${Date.now()}`,
          type: "smoothstep",
          animated: true,
        },
      ],
    }));
  },

  fetchGraph: async () => {
    set({ isLoading: true, error: null });
    try {
      const graphData = await fetchFormGraph();

      const nodesWithKeys = graphData.nodes.map((node: Node) => ({
        ...node,
        id: node.id.toString(),
        type: "form",
      }));

      const edgesWithKeys = graphData.edges.map(
        (edge: FormEdge, index: number) => ({
          ...edge,
          id: `edge-${edge.id}-${index}`,
          source: edge.source.toString(),
          target: edge.target.toString(),
          type: "smoothstep",
        })
      );

      set({
        nodes: nodesWithKeys,
        edges: edgesWithKeys,
        forms: graphData.forms,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Failed to load graph", isLoading: false });
      console.error("Failed to load graph:", error);
    }
  },
}));
