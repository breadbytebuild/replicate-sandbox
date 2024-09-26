import Replicate from "replicate";

const replicate = new Replicate({
  auth: 'r8_K06w4xhyMtPINBrzlLkbSsAfjZrE9qe0m3S1j',
});

const input = {
  prompt: "Can you write a poem about open source machine learning?"
};

for await (const event of replicate.stream("meta/meta-llama-3-70b-instruct", { input })) {
  process.stdout.write(event.toString());
};