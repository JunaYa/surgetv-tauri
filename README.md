# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## init project

```
Template created! To get started run:
  cd surgetv
  pnpm install
  pnpm tauri android init
  pnpm tauri ios init

For Desktop development, run:
  pnpm tauri dev

For Android development, run:
  pnpm tauri android dev

For iOS development, run:
  pnpm tauri ios dev
```

## fetch data from api

post request

```typescript
const params = {
  arg1: "data1",
  arg2: "data2",
};
http.post(`/[path]`, params);
```

get request

```typescript
http.get(`/[path]`);
```

delete request

```typescript
const data = {
  arg1: "data1",
  arg2: "data2",
};
http.delete(`/[path]`, { data });
```

put request

```typescript
http.put(`/[path]`);
```
