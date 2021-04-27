import * as core from "@actions/core";
import { parseContent } from "./utils/utils";
import { createTask } from "./asana";
import { Repository } from "nodegit";

async function run() {
  try {
    core.info("Init todo-asana-action...");

    const asanaToken = core.getInput("asana-token");
    const rawProjectIds = core.getInput("projects");
    const workspaceId = core.getInput("workspace");
    const rawFollowerIds = core.getInput("followers");
    const rawUserMapping = core.getInput("user-mapping");

    const projectIds = rawProjectIds ? JSON.parse(rawProjectIds) : [];
    const followerIds = rawFollowerIds ? JSON.parse(rawFollowerIds) : [];
    const userMapping = rawUserMapping ? JSON.parse(rawUserMapping) : {};

    const repo = await Repository.open("./");
    //const repo = await Repository.open("../../StudioProjects/fa_flutter_gt");

    const commit = await repo.getHeadCommit();
    const diffs = await commit.getDiff();

    const todoList: CreateTask[] = [];

    for (const value of diffs) {
      const patches = await value.patches();
      for (const patch of patches) {
        const hunks = await patch.hunks();
        for (const hunk of hunks) {
          const lines = await hunk.lines();
          for (const line of lines) {
            parseContent(line.content(), async (username: string, task: string) => {
              const userId = userMapping[username];
              todoList.push({ userId: userId, task: task });
            });
          }
        }
      }

      const filterTodoList = todoList.filter((value, i, self) => self.findIndex(t => (t.task === value.task)) === i);

      console.log(`Found ${ filterTodoList.length } TODOs...`);

      for (const todo of filterTodoList) {
        await createTask(todo.userId, todo.task, asanaToken, projectIds, followerIds, workspaceId);
      }
    }


    // const nameToGreet = core.getInput('who-to-greet');
    // console.log(`Hello ${ nameToGreet }!`);
    // const time = (new Date()).toTimeString();
    // core.setOutput("time", time);
    // // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${ payload }`);
  } catch (e) {
    core.error(e);
  }
}

run().catch(error => core.setFailed("Workflow failed! " + error));

interface CreateTask {
  userId: string,
  task: string
}