# Journey Builder React Coding Challenge

## Overview

In this challenge, you will reimplement a small portion of an app we’re currently building at Avantos. The portion you’ll work on is a node-based UI that shows a **DAG** of forms:

When a form has been submitted, the values from the form fields can be used to prefill the fields of a downstream form. For example, values from **Form A**’s fields can be used to prefill **Form B**’s or **Form C**’s fields.

First, you will use our docs to hit our `action-blueprint-graph-get` endpoint and the React Flow docs to render the returned nodes and edges.

Next, you will implement the **prefill UI for Forms**. It doesn’t need to be visually appealing, but it must:

- Show the current prefill mapping
- Allow the user to make edits

We show this mapping when a user clicks a node, and the mapping looks like this in our UI:

## References

- [Directed Acyclic Graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
- [API Documentation](https://api.avantos-dev.io/docs#/operations/action-blueprint-graph-get)
- [React Flow](https://reactflow.dev/)

## Prefill Configuration UI

The prefill configuration UI allows the user to manage how fields are prefilled.

Example for **Form D**:
| Field Name | Prefilled From |
|---------------------------|---------------|
| `dynamic_checkbox_group` | None |
| `dynamic_object` | None |
| `email` | Form A - email field |

- Clicking the **X button** clears the prefill configuration for that field.
- Clicking a field without a configuration opens a **modal**:

### Modal Prefill Options

In this modal, three types of data can be used to prefill a form:

1. **Form fields of directly dependent forms** (e.g., Form B)
2. **Form fields of transitively dependent forms** (e.g., Form A)
3. **Global data** (e.g., Action Properties, Client Organization Properties)

For (1) and (2), you will need to **traverse the form DAG**. For (3), you can ignore Action Properties and Client Organization Properties and use any global data of your choice.

### Design Considerations

Your code should be designed so that:

- Any combination of these data sources can be easily used **without code changes**.
- Future new data sources can be supported with minimal effort.

## Prerequisites

- **React**
- **TypeScript** (optional but strongly recommended)
- **Create React App, Vite, or Next.js**
- This repo has a **mock server** with the `action-blueprint-graph-get` endpoint.

## Rules

- **Submission:** Please send us your submission as a GitHub repository.
- **Time Limit:** Timebox this challenge to **4 hours** and send us a link to your GitHub repository within **2-3 working days** from the date you receive this.

## Evaluation Criteria

We will be particularly interested in:

### 1. Code Organization

- Clear **separation of concerns**
- Well-defined **interfaces between components**
- Thoughtful **component hierarchy and composition**

### 2. Extensibility

- How easily **new features** can be added
- **Reusable** and **composable** React components
- **Tests**

### 3. Documentation

- How do I **run this locally**?
- How do I **extend** with new data sources?
- What **patterns** should I be paying attention to?

### 4. Code Quality

- **Clean, readable code**
- **Reasonable, readable variable names**
- **Appropriate use of modern React practices**

## Additional Resources

- [Mock Server GitHub Repository](https://github.com/mosaic-avantos/frontendchallengeserver)
