export function parseContent(content: string, createTask: (username: string, task: string) => void) {
  let match;
  const regExp: RegExp = /TODO\((?<username>\w+)\): (?<task>\w+)/g;
  while ((match = regExp.exec(content)) !== null) {
    const username = match.groups?.username ?? "";
    const task = match.groups?.task ?? "TBD";
    createTask(username, task);
  }
}