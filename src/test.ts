import { createTask } from "./asana";

try {
  const username = "apgapg";
  const asanaToken = "---";
  const projectIds = ["1199123288499074"];
  const followersIds: string[] = [];
  const task = "[TODO] This is test task from TODO";
  const workspaceId = "34125054317482";
  const userMapping = {
    "apgapg": "712057959076542",
    "someshubham": "1127520825602495",
    "samvitjain": "1190264423420113",
    "Aashishm178": "1200109906013623"
  };

  const userId = userMapping[username];

  createTask(userId, task, asanaToken, projectIds, followersIds, workspaceId).then(r => console.log(r)).catch(
    e => console.error(e)
  );
} catch (e) {
  console.error(e);
}
