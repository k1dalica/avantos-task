# Journey Builder

A tool for building journey blueprints.

## Features

- React Flow
- Zustand
- Styled Components
- Next.js
- TypeScript
- Jest

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Locally

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration:

```bash
NEXT_PUBLIC_API_URL=your_api_url_here
# Add other environment variables
```

### Component Patterns

- **Modal Components**: Use the base Modal component for consistency (`src/components/common/Modal.tsx`)
- **Form Handling**: Implement form components using the established patterns in `src/components/forms`
- **Data Mapping**: Follow the data mapping pattern in `DataMappingModal.tsx`
- **Tree Item**: Use the Tree Item component for consistency (`src/components/common/TreeItem.tsx`)
- **Switch**: Use the Switch component for consistency (`src/components/common/Switch.tsx`)

### Testing Patterns

- Unit tests for components using Jest and React Testing Library
- Integration tests for data flows
- Mock external dependencies in tests

### Best Practices

- Use TypeScript interfaces for data models
- Follow the established modal patterns for user interactions
- Implement error boundaries for component error handling
- Use the provided utility functions in `src/lib`

## Project Structure

```
├── app/                # Next.js app directory
├── components/         # Reusable components
├── lib/               # Utility functions and libraries
├── public/            # Static assets
└── stores/            # Global stores
├── types/             # TypeScript types
├── utils/             # Utility functions
└── config/            # Configuration
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Choose an appropriate license]
