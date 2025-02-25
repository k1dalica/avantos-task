/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_API_URL: string;
  readonly NEXT_PUBLIC_TITLE: string;
  readonly NEXT_PUBLIC_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
