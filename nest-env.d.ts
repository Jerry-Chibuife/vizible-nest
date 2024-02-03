// nest-env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    MONGODB_URI: string;
    // Add more environment variables with their types...
  }
}
