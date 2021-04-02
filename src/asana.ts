import asana from "asana";

export async function createTask(userId: string, task: string, token: string, projectIds: string[], followersIds: string[], workspaceId: string) {
  console.log(`Creating Asana Task: ${ userId }: ${ task }`);

  if (!workspaceId) {
    console.error("Workspace cannot be null/empty!");
    return;
  }

  if (!token) {
    console.error("Asana token is empty!");
    return;
  }

  if (projectIds.length == 0) {
    console.error("Project Id(s) missing.");
    return;
  }

  const data = {
    "assignee": userId,
    "followers": [
      ...followersIds
    ],
    "notes": "TBD",
    "name": task,
    "projects": [
      ...projectIds
    ],
    "workspace": workspaceId,
  };


  const client = asana.Client.create().useAccessToken(token);
  const result = await client.tasks.create(data);
  console.log(result);
}