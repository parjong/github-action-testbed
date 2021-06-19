// https://github.com/actions/github-script

// https://github.com/actions/toolkit/tree/main/packages/core
const core = require('@actions/core');
// https://github.com/actions/toolkit/tree/main/packages/github
const github = require('@actions/github');

// https://docs.github.com/en/rest/reference/issues#create-an-issue-comment
// https://octokit.github.io/rest.js/v18#issues

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);

  // How to get this token automatically?
  const token = core.getInput('token');
  const octokit = github.getOctokit(token);

  const context = github.context

  // https://octokit.github.io/rest.js/v18#issues-create-comment
  // octokit.rest.issues.createComment({owner, repo, issue_number, body})
  // https://stackoverflow.com/questions/58066966/commenting-a-pull-request-in-a-github-action
  octokit.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: `Hello ${nameToGreet}`
  });

  // To set Output
  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
