import {NFTContract} from './ContractGenerator'


const Config = JSON.parse(localStorage.getItem('Config'));
const NFTAddress = Config ? Config.NFTAddress : null;
const StackingAddress = Config ? Config.StackingAddress : null;


export async function approve(tokenId) {
    console.log(window.ethereum.chainId);
    
    const contractNFT = await NFTContract();
    var data = contractNFT.methods['approve'](StackingAddress, tokenId).encodeABI();
    console.log(data);
    const transactionParameters = {
        nonce: '0x00', // ignored by MetaMask
        // gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
        // gas: '0x2710', // customizable by user during MetaMask confirmation.
        to: NFTAddress, // Required except during contract publications.
        from: window.ethereum.selectedAddress, // must match user's active address.
        // value: web3.utils.toHex(number), // Only required to send ether to the recipient from the initiating external account.
        data: data,
        chainId: window.ethereum.chainId, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };
    const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });
    return txHash;
}


export async function getOwnNFT() { 
    const contractNFT = await NFTContract();
    const totalNFT = await contractNFT.methods['balanceOf'](window.ethereum.selectedAddress).call();
    let cardId = [];
    for(let i = 0; i < totalNFT ; i ++ ) { 
        let id= await contractNFT.methods['tokenOfOwnerByIndex'](window.ethereum.selectedAddress,i).call();
        await cardId.push(id);
    }
    let cardItem = []; 

    const waiting = cardId.map(async(id) => { 
        let info = await getNFTInfo(id);
        let data = { 
            idToken : id,
            owner : info.owner,
            rarity : info.rarity,
            uri : info._uri,
            status: info.status 

        }
        await cardItem.push({data});
        return true;
    })

    const result = await Promise.all(waiting)

    if(result) { 
        return cardItem;
    }


}


export async function getNFTInfo(tokenId) { 
    const contractNFT = await NFTContract();
    const tigerInfo = await contractNFT.methods['tigerInfo'](tokenId).call();
    return tigerInfo;

}

