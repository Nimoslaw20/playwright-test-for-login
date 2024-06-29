// fixtures/custom.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      EMAIL: string;
      PASSWORD: string;
    }
  }
  