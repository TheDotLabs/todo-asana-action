# todo-asana-action ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/apgapg/todo-asana-action) ![GitHub](https://img.shields.io/github/license/apgapg/todo-asana-action) ![GitHub Repo stars](https://img.shields.io/github/stars/apgapg/todo-asana-action?style=social)

<img src="https://user-images.githubusercontent.com/13887407/112085815-2e77af80-8bb1-11eb-9100-973cd024f9d5.png"  height = "100" alt="Asana">

Automatically creates Asana task from TODOs in your code.

### ❔ Prerequisites

- Asana account with the permission on the particular project you want to integrate with, as this action needs your
  personal access token.

## 💻 Getting Started

```yml
uses: apgapg/todo-asana-action@--latest--
with:
  asana-token: 'Your PAT'
  projects: '["1199123288499074"]'
  workspace: '34125054317482',
  followers: '["712057959076542","1127520825602495"]', # Optional
  user-mapping: '{"apgapg":"712057959076542","amitkma":"1127520825602495}' # Optional
```

## ❔ Inputs

### `asana-token` (Required)

Your personal access token of asana, you can find it in [asana docs](https://developers.asana.com/docs/#authentication-basics).

### `projects` (Required)

Array of project ids in which the task should be created

### `workspace` (Required)

Set your workspace id. Get it from here: [https://app.asana.com/api/1.0/workspaces](https://app.asana.com/api/1.0/workspaces)

### `followers` (Optional)

Provide the array of followers id you want to set in a task.

### `user-mapping` (Optional)

A map with **keys** representing **github username** and values representing corresponding **asana user id**

## 👍 Contribution

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## ✨ Active Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/apgapg"><img src="https://avatars0.githubusercontent.com/u/13887407?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ayush P Gupta</b></sub></a><br /></td>
  </tr>

</table>
