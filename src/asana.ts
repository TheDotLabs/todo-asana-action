import asana from "asana";

export async function createTask(userId: string, task: string, token: string, projectIds: string[], followersIds: string[]) {
  console.log(`Creating Asana Task: ${ userId }: ${ task }`);

  if (projectIds.length==0) {
    console.log("Project Id(s) missing.");
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
    "workspace": "34125054317482",
  };

  const client = asana.Client.create().useAccessToken(token);
  const result = await client.tasks.create(data);
  console.log(result);
}