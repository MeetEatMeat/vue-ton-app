import {
  type Contract,
  type ContractProvider,
  type Sender,
  Address,
  Cell,
  contractAddress,
  beginCell,
  TupleBuilder,
} from "ton-core";

export type Mint = {
  $$type: 'Mint';
  link: string;
  owner: Address;
}

export default class Minter implements Contract {
  static createForDeploy(code: Cell, id: number, deployer: Address): Minter {
    const data = beginCell().storeUint(id, 64).storeAddress(deployer).endCell();
    const workchain = 0;
    const address = contractAddress(workchain, { code, data });
    return new Minter(address, { code, data });
  }

  async sendDeploy(provider: ContractProvider, sender: Sender) {
    await provider.internal(sender, {
      value: "0.1",
      bounce: false,
    });
  }

  async getData(provider: ContractProvider) {
    const source = (await provider.get("data", [])).stack;
    let _currentNumber = source.readBigNumber();
    let _lastMinted = source.readAddress();
    return { $$type: 'MasterData' as const, currentNumber: _currentNumber, lastMinted: _lastMinted };
  }

  async getNftAddress(provider: ContractProvider, id: bigint) {
    let builder = new TupleBuilder();
    builder.writeNumber(id);
    const { stack } = await provider.get("nftAddress", builder.build());
    return stack.readAddress();
  }

  async sendMint(provider: ContractProvider, sender: Sender, link: string, owner: Address) {
    const messageBody = beginCell().storeUint(647845951, 32).storeStringRefTail(link).storeAddress(owner).endCell();
    await provider.internal(sender, {
      value: "0.1",
      body: messageBody
    });
  }

  constructor(
    readonly address: Address,
    readonly init?: { code: Cell; data: Cell }
  ) {}
}
