interface Config {
  URL: string;
}

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL environment variable is required");
}

export const config: Config = {
  URL: process.env.NEXT_PUBLIC_API_URL,
};
