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
    <a href="#" onClick={handleConnectWallet} className={"inline-block mx-auto text-xl main__button text-center border-solid border border-white"}>
        CONNECT WALLET
    </a>
  );
}