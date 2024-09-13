// source: https://github.com/ArweaveTeam/arweave-js + https://docs.arweavekit.com/wallets/wallet-kit
import Arweave from "arweave";

const arweave = Arweave.init({});

export async function transferAR(api: any) {
  if (!api) {
    throw new Error("Arweave Wallet not connected");
  }
  const quantity = "0.001";
  const recipient = "dl-P18ET2e1RDTBE5Oqu7iwK0ZHgJ1Wt5ANru610tak";

  let transaction = await arweave.createTransaction({
    target: recipient,
    quantity: arweave.ar.arToWinston(quantity),
  });

  transaction.addTag("AppName", "samAPP");
  transaction.addTag("Tip", "Sam Dev");

  await api.sign(transaction);
  const response = await arweave.transactions.post(transaction);
  console.log(response);
  return transaction;
}
