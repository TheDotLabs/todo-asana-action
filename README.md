# todo-asana-action ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/apgapg/todo-asana-action) ![GitHub](https://img.shields.io/github/license/apgapg/todo-asana-action) ![GitHub Repo stars](https://img.shields.io/github/stars/apgapg/todo-asana-action?style=social)

<img src="https://user-images.githubusercontent.com/13887407/112085815-2e77af80-8bb1-11eb-9100-973cd024f9d5.png"  height = "100" alt="Asana">

Automatically creates Asana task from TODOs in your code.

### Prerequisites

- Asana account with the permission on the particular project you want to integrate with, as this action needs your
  personal access token.

## Getting Started

```yml
uses: apgapg/todo-asana-action@--latest--
with:
  asana-token: 'Your PAT'
  project-ids: '["1199123288499074"]'
  workspace-id: '34125054317482'
```
