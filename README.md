# playwright-palm-ai

Simple AI assistant to help with your automation project.

### Setup

```
npm install
npx playwright install
```

Get a PaLM API key - using [PaLM](https://developers.generativeai.google/tutorials/setup), since it's free but outdated `¯\_(ツ)_/¯`

### Run the assistant

Well, the principle is practically the same as other AI API integrations, just create a wizard file that handles your requests and cleans up the AI response so that you can have much of the work already done and adapt it for your use.

The most important thing is [how you ask and tuning the model ](https://developers.generativeai.google/guide/model_tuning_guidance) to get even better answers that are closer to your final objective.

To adjust go to the `helpers/ai-helper.js` file

To run:

```
node helpers/ai-helper.js 'Generate some tests cases for this website https://todomvc.com/examples/react/#/'
```

A file called `scratch_*.js` will be created inside the helpers folder and then you take over from there.

Again, this is pretty much the same as going to the website and doing things from there, but it's still a start, you could start thinking about how to automate the entire process of creating tests, automating executions, analyzing reports and many more. other things that would consume your time.
