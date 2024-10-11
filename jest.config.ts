// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Используем ts-jest для обработки TypeScript
  testEnvironment: "jest-environment-jsdom", // Указываем среду для тестов
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Указываем, что ts-jest будет обрабатывать .ts и .tsx файлы
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // Обработка импортов стилей
  },
  testPathIgnorePatterns: ["/node_modules/", "/out/"], // Игнорируем указанные папки
};

export default config;
