# Yarn

## About

- Package manager & Project manager
- Manage one-shot project & large monorepo
- Support workspaces & worktree

## Installing

```bash
npm install -g yarn
```

## Usage

### Starting a new project

```bash
yarn init
```

### Installing all the dependencies

```bash
yarn
yarn install
```

### Adding a dependency

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### Adding a dependency to different categories of dependencies

```bash
yarn add [package] --dev  # dev dependencies
yarn add [package] --peer # peer dependencies
```

### Upgrading a dependency

```bash
yarn up [package]
yarn up [package]@[version]
yarn up [package]@[tag]
```

### Removing a dependency

```bash
yarn remove [package]
```

** Details in [https://yarnpkg.com/](https://yarnpkg.com/)
