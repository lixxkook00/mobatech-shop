import { StackingContract } from "./ContractGenerator";
import { approve } from "./NFT";
import { Web3Provider } from "./Web3Provider";

export const Stake = async (data) => {


    const approveHash = await approve(data.idToken);
    await asyncInterval(approveHash).then( async (e) => { 
        await processStake(data.idToken);
    });

}

export const processStake = async (tokenId) => { 
    const contractStaking = await StackingContract();
    var data = await contractStaking.methods['stake'](tokenId, "12").encodeABI();
    const transactionParameters = {
        nonce: '0x00', // ignored by MetaMask
        // gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
        // gas: '0x2710', // customizable by user during MetaMask confirmation.
        to: contractStaking._address, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        // value: web3.utils.toHex(number), // Only required to send ether to the recipient from the initiating external account.
        data: data,
        chainId: window.ethereum.chainId, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };
    const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });
    let stakeStatus = await asyncInterval(txHash);
    console.log(stakeStatus);
}

export const getRewardsByRarity = async (rarity) => {
    const contractStaking = await StackingContract();
    let rewards = await contractStaking.methods['getRewardsByRarity'](rarity).call();

    return rewards;
}


export const asyncInterval = async (hash) => {
    const web3 = await Web3Provider();
    const status = new Promise((resolve, reject) => {
        const interval = setInterval(async function () {
            await web3.eth.getTransactionReceipt(hash, async function (err, rec) {
                if (rec) {
                    if (rec.status === false) {
                        resolve(false);
                        clearInterval(interval);

                    }
                    else {
                        resolve(true);
                        clearInterval(interval);
                    }
                }
            })
        }, 1000);
    });
    return status;
}