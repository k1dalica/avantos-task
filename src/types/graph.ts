export interface FormNode {
  id: string;
  type: string;
  data: {
    label: string;
    fields: FormField[];
  };
  position: {
    x: number;
    y: number;
  };
}

export interface FormField {
  name: string;
  type: string;
  prefillFrom?: {
    formId: string;
    fieldName: string;
  };
}

export interface FormEdge {
  id: string;
  source: string;
  target: string;
}
