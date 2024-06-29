// fixtures/custom.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      EMAIL: string;
      PASSWORD: string;
      EMAIL1: string;
      PASSWORD1: string;
    }
  }
  