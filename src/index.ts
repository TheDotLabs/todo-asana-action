import core from "@actions/core";
import github from "@actions/github";

async function run() {
  console.log("Avc");
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${ nameToGreet }!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${ payload }`);
}

run().catch(error => core.setFailed("Workflow failed! " + error.message));
