# Don Emilano Platform

A monorepo containing multiple applications and packages for the Don Emilano platform.

## 📁 Project Structure

This is a monorepo managed with modern tooling, containing the following workspace structure:

```
don-emilano-plataform/
├── apps/           # Application packages
│   └── ...         # Individual applications
├── packages/       # Shared packages and libraries
│   └── ...         # Reusable components, utilities, and configurations
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- Package manager (npm, yarn, or pnpm)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd don-emilano-plataform
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## 📦 Workspace Structure

### Apps

The `apps/` directory contains standalone applications that can be deployed independently.

### Packages

The `packages/` directory contains shared code, libraries, and configurations used across multiple apps:

- Shared UI components
- Utility functions
- Configuration files
- Type definitions
- And more...

## 🛠️ Development

### Running Applications

````bash
# Run a specific app
pnpm run dev --workspace=apps/<app-name>

### Building

```bash
# Build all packages and apps
pnpm run build

# Build a specific workspace
pnpm run build --workspace=<workspace-name>
````

## 📝 Scripts

Common scripts available in the monorepo:

- `npm run dev` - Start development servers
- `npm run build` - Build all packages and applications
- `npm test` - Run tests across all workspaces
- `npm run lint` - Lint code across all workspaces
- `npm run format` - Format code using Prettier

## 🔧 Technologies

- **Monorepo Management**: [Specify tool: Turborepo/Nx/Lerna/npm workspaces]
- **Package Manager**: [Specify: npm/yarn/pnpm]
- **Build Tool**: [Specify if applicable]

## 📚 Documentation

For detailed documentation on specific apps or packages, refer to their individual README files:

- [App Name 1](./apps/<app-name>/README.md)
- [Package Name 1](./packages/<package-name>/README.md)

## 🤝 Contributing

1. Create a new branch from `main`
2. Make your changes
3. Ensure tests pass and code is linted
4. Submit a pull request

## 📄 License

[Specify License]

## 👥 Authors

@kfoq7

---

For more information, please refer to the individual package documentation or contact the development team.
