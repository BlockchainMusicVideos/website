import { LMStudioClient } from "@lmstudio/sdk";

const client = new LMStudioClient();

async function main() {
  await printDownloadedModels();
  await printLoadedModels();
  await predictWithAnyModel();
}
main();

async function printDownloadedModels() {
  const downloadedModels = await client.system.listDownloadedModels();
  console.log("Downloaded Models:");
  if (downloadedModels.length === 0) {
    console.log("    No models downloaded. Get some in LM Studio.");
    process.exit(0);
  }

  // Limit to printing 5 models
  for (const model of downloadedModels.slice(0, 5)) {
    console.log(`  - ${model.path} (${model.architecture})`);
  }
  if (downloadedModels.length > 5) {
    console.log(`    (... and ${downloadedModels.length - 5} more)`);
  }
  console.log(); // Create an empty line
}

async function printLoadedModels() {
  const loadedLLMs = await client.llm.listLoaded();
  console.log("Loaded Models:");
  if (loadedLLMs.length === 0) {
    console.log("    You don't have any models loaded. (Run `lms load --gpu max` to load a model)");
    process.exit(0);
  }
  for (const model of loadedLLMs) {
    console.log(`  - ${model.identifier}`);
  }
  console.log(); // Create an empty line
}

async function predictWithAnyModel() {
  const model = await client.llm.get({});
  const prompt = "The meaning of life is";
  const prediction = model.complete(prompt, {
    maxPredictedTokens: 100,
    temperature: 0.7,
  });
  process.stdout.write(prompt); // Print the prompt
  // Stream the prediction text to console
  for await (const text of prediction) {
    process.stdout.write(text);
  }
  const { stats } = await prediction.result();
  console.log("\n\nPrediction Stats:", stats);
}
