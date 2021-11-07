import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

export default function ConnectButton() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  // run the activateBrowserWallet() function when the Wallet Connect button is clicked
  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <div>
      <p className={"text-white"}>{etherBalance && parseFloat(formatEther(etherBalance)).toFixed(4)}&nbsp;&nbsp; <strong>$ΞTH</strong></p>
    </div>
  ) : (
    <a href="#" onClick={handleConnectWallet} className={"inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"}>
        CONNECT WALLET
    </a>
  );
}