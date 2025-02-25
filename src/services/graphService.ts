export const fetchFormGraph = async () => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/123/actions/blueprints/456/graph`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch graph data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching graph:", error);
    throw error;
  }
};
