
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const VAR = process.env.VAR;
  while(true) {
    console.log(`VAR = ${VAR}`);
    await sleep(5000);
  }
}

main();
