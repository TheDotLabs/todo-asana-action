import core from "@actions/core";
import {Repository} from 'nodegit';
import {parseContent} from "./utils/utils";
import {createTask} from "./asana";
import {getAsanaUserId} from "./utils/asana_users_utils";

async function run() {
  try {
    core.info("Init...");

    const asanaToken = core.getInput("asana-token");
    const rawProjectIds = core.getInput("project-ids");
    const projectIds = rawProjectIds ? JSON.parse(rawProjectIds) : [];
    const followersIds: string[] = [];

    const repo = await Repository.open("../../StudioProjects/fa_flutter_mt")

    const from = await repo.getCommit('848816c7a5370b161b66680db1a0a075ca5da214');
    const diffs = await from.getDiff();
    for (const value of diffs) {
      const patches = await value.patches();
      for (const patch of patches) {
        const hunks = await patch.hunks();
        for (const hunk of hunks) {
          const lines = await hunk.lines();
          for (const line of lines) {
            parseContent(line.content(), async (username: string, task: string) => {
              const userId = getAsanaUserId(username);
              await createTask(userId, task, asanaToken, projectIds, followersIds);
            });
          }
        }
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

run().catch(error => core.setFailed("Workflow failed! " + error.message));
