# Real-Time Notification Dashboard

A React + TypeScript + Vite application demonstrating a real-time notification dashboard.

<img width="1918" height="966" alt="image" src="https://github.com/user-attachments/assets/f44ee789-7320-43c7-9505-9a8196ee7d91" />


## Features

- **Notification list**: Displays notifications in a clean card-style interface.
- **Real-time updates**: New notifications are generated automatically every few seconds.
- **Mark as read**: Individual unread notifications can be marked as read.
- **Unread counter**: The bell badge updates in real time as unread notifications change.
- **Auto reconnect logic**: Simulated connection status with reconnect handling.
- **Clean UI**: Modern Tailwind-powered UI with Work Sans font and responsive styling.

## App Overview

This project implements a notification dashboard with a notification bell, an unread badge, and a slide-over panel that shows notifications. The notification list supports read/unread filtering and keeps the badge count synchronized in real time.

## Additional Notes

The app is built using:

- React
- TypeScript
- Vite
- Tailwind CSS

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
