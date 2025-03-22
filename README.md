# Turborepo Boilerplate
This project is a boilerplate for building applications that require both web-app and browser-extension. It is initialized with:

* [Next.js](https://nextjs.org/) (web framework)
* [WXT](https://wxt.dev/) (browser extension framework)
* [TailwindCSS](https://tailwindcss.com/)
* [shadcn](https://ui.shadcn.com/) (component design system)
* [TypeScript](https://www.typescriptlang.org/)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Adding new components
New components can be added to the respective app via the shadcn cli like so:
```
pnpm dlx shadcn@latest add tooltip 
```

## Getting Started

### Prerequisites

- Node.js installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aniket-508/turborepo-nextjs-wxt-shadcn-boilerplate.git
   ```

2. Navigate to the project directory:

   ```bash
   cd turborepo-nextjs-wxt-shadcn-boilerplate
   ```

3. Install dependencies:

   ```bash
   pnpm i
   ```

4. Start the server:

   ```bash
   pnpm dev
   ```

5. The extension server will start at `http://localhost:3000` in a new chrome driver instance.

6. The web server will start at `http://localhost:3001`.

## Contribution

Contributions are welcome! If you want to enhance the design, add features, or fix bugs, feel free to fork the repo and submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or suggestions, feel free to reach out:

- **Email**: pawaraniket508@gmail.com
- **GitHub**: [Aniket-508](https://github.com/Aniket-508)