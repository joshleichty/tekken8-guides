/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NOTES_API_URL?: string
  readonly VITE_NOTES_API_URL_DEV?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.css' {
  const content: string
  export default content
}
