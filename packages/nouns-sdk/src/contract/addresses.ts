import { ChainId, ContractAddresses } from './types';

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.Mainnet]: {
    nounsToken: '0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B',
    nounsSeeder: '0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515',
    nounsDescriptor: '0x11fb55d9580cdbfb83de3510ff5ba74309800ad1 ',
    nftDescriptor: '0x0BBAd8c947210ab6284699605ce2a61780958264',
    nounsAuctionHouse: '0x5B2003cA8FE9FfB93684cE377f52B415C7dC0216',
    nounsAuctionHouseProxy: '0x55e0F7A3bB39a28Bd7Bcc458e04b3cF00Ad3219E',
    nounsAuctionHouseProxyAdmin: '0xA4BebeC5bf3670Bb47a55ff705c91956C703237B',
    nounsDaoExecutor: '0xd5f279ff9EB21c6D40C8f345a66f2751C4eeA1fB',
    nounsDAOProxy: '0x5d2C31ce16924C2a71D317e5BbFd5ce387854039',
    nounsDAOLogicV1: '0x8b20b261BDF0f97cfc6D3bD4903beb9D17794Ed8',
  },
  [ChainId.Rinkeby]: {
    nounsToken: '0xF0ea2Ef2E31c9A4A74471cA6101BD755262c940a', 
    nounsSeeder: '0x4451D889B6B8c9b0f11E3C9C2d5d27ddF4057a00', 
    nounsDescriptor: '0x43D17060Bd13a1DBb18aE54958C13eEccbf2017B',
    nftDescriptor: '0x1A1251F943E3C3Fd09a0aafEfDa4e3309032779c', 
    nounsAuctionHouse: '0x91BACcA4AC068fddBBAA0ABfa00E1718Baa6f047', 
    nounsAuctionHouseProxy: '0xbE66dc5a75F81a78932009AD263C29f9248D638d',
    nounsAuctionHouseProxyAdmin: '0x1075083AE2E9Cf121a64A682C36F8e82dAb0B3B1',
    nounsDaoExecutor: '0x9B1ee03A107da76f7CF6F29018E8de98034ee579',
    nounsDAOProxy: '0x49467bc5E00BA0AB09e1B2f2Ea97b4413805B9A2', 
    nounsDAOLogicV1: '0x72Efac273bd36A82DF3a32013c6A136726A9581f', 
  },
  [ChainId.Local]: {
    nounsToken: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    nounsSeeder: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    nounsDescriptor: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    nftDescriptor: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    nounsAuctionHouse: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    nounsAuctionHouseProxy: '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853',
    nounsAuctionHouseProxyAdmin: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    nounsDaoExecutor: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
    nounsDAOProxy: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
    nounsDAOLogicV1: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
  },
};

/**
 * Get addresses of contracts that have been deployed to the
 * Ethereum mainnet or a supported testnet. Throws if there are
 * no known contracts deployed on the corresponding chain.
 * @param chainId The desired chainId
 */
export const getContractAddressesForChainOrThrow = (chainId: number): ContractAddresses => {
  if (!chainIdToAddresses[chainId]) {
    throw new Error(
      `Unknown chain id (${chainId}). No known contracts have been deployed on this chain.`,
    );
  }
  return chainIdToAddresses[chainId];
};
