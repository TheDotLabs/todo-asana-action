import core from "@actions/core";
import { Repository } from 'nodegit';
import { parseContent } from "./utils";
import { createTask } from "./asana";
import { getAsanaUserId } from "./utils/asana_users_utils";

async function run() {
  try {
    core.info("Init...");
    
    const asanaToken = core.getInput("asana-token");
    const rawProjectIds = core.getInput("project-id");
    const projectIds = rawProjectIds ? JSON.parse(rawProjectIds) : [];
    const followersIds: string[] = [];

    Repository.open("../../StudioProjects/fa_flutter_mt")
      .then(async function (repo) {
        const from = await repo.getCommit('848816c7a5370b161b66680db1a0a075ca5da214');
        const diffs = await from.getDiff();
        diffs.forEach(value => {
          value.patches().then(patches => {
            patches.forEach(patch => {
              patch.hunks().then(hunks => {
                hunks.forEach(hunk => {
                  hunk.lines().then(lines => {
                    lines.forEach(line => {
                      console.log(line.content());
                      parseContent(line.content(), (username: string, task: string) => {
                        const userId = getAsanaUserId(username);
                        createTask(userId, task, asanaToken, projectIds, followersIds);
                      });
                    })
                  });
                });
              });
            });
          });
        })
      });


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
