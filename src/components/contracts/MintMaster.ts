import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    TupleReader, 
    contractAddress, 
    type ContractProvider, 
    type Sender, 
    type Contract, 
    type ContractABI, 
    type ABIType,
    type ABIGetter,
    type ABIReceiver,
    TupleBuilder,
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

export type Mint = {
    $$type: 'Mint';
    link: string;
    owner: Address;
}

export function storeMint(src: Mint) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(647845951, 32);
        b_0.storeStringRefTail(src.link);
        b_0.storeAddress(src.owner);
    };
}

export function loadMint(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 647845951) { throw Error('Invalid prefix'); }
    let _link = sc_0.loadStringRefTail();
    let _owner = sc_0.loadAddress();
    return { $$type: 'Mint' as const, link: _link, owner: _owner };
}

export type Minted = {
    $$type: 'Minted';
    nft: Address;
    owner: Address;
    number: bigint;
}

export function storeMinted(src: Minted) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(504732551, 32);
        b_0.storeAddress(src.nft);
        b_0.storeAddress(src.owner);
        b_0.storeUint(src.number, 32);
    };
}

export function loadMinted(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 504732551) { throw Error('Invalid prefix'); }
    let _nft = sc_0.loadAddress();
    let _owner = sc_0.loadAddress();
    let _number = sc_0.loadUintBig(32);
    return { $$type: 'Minted' as const, nft: _nft, owner: _owner, number: _number };
}

export type Data = {
    $$type: 'Data';
    owner: Address;
    master: Address;
    number: bigint;
    link: string;
}

export function storeData(src: Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.master);
        b_0.storeUint(src.number, 32);
        b_0.storeStringRefTail(src.link);
    };
}

export function loadData(slice: Slice) {
    let sc_0 = slice;
    let _owner = sc_0.loadAddress();
    let _master = sc_0.loadAddress();
    let _number = sc_0.loadUintBig(32);
    let _link = sc_0.loadStringRefTail();
    return { $$type: 'Data' as const, owner: _owner, master: _master, number: _number, link: _link };
}

export type MasterData = {
    $$type: 'MasterData';
    currentNumber: bigint;
    lastMinted: Address;
}

export function storeMasterData(src: MasterData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.currentNumber, 32);
        b_0.storeAddress(src.lastMinted);
    };
}

export function loadMasterData(slice: Slice) {
    let sc_0 = slice;
    let _currentNumber = sc_0.loadUintBig(32);
    let _lastMinted = sc_0.loadAddress();
    return { $$type: 'MasterData' as const, currentNumber: _currentNumber, lastMinted: _lastMinted };
}

function loadTupleMasterData(source: TupleReader) {
    let _currentNumber = source.readBigNumber();
    let _lastMinted = source.readAddress();
    return { $$type: 'MasterData' as const, currentNumber: _currentNumber, lastMinted: _lastMinted };
}

 type MintMaster_init_args = {
    $$type: 'MintMaster_init_args';
    id: bigint;
    deployer: Address;
}

function initMintMaster_init_args(src: MintMaster_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.id, 257);
        b_0.storeAddress(src.deployer);
    };
}

async function MintMaster_init(id: bigint, deployer: Address) {
    const __code = Cell.fromBase64('te6ccgECGAEABLIAART/APSkE/S88sgLAQIBYgIDAtbQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZAssfASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsntVBMEAgEgCwwC2AGSMH/gcCHXScIflTAg1wsf3iDAACLXScEhsJJbf+AgghAmnVg/uo63MNMfAYIQJp1YP7ry4IHUAdAB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEts8f+CCEJRqmLa64wIwcAUGAqoy+EP4KFJA2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IiCEAX14QBxBXAHDgcBTtMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8fwgBishZghAmnVg/UAPLH8hYzxbJAcwBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WySJFFgQQNxIQNhA1EDTbPAGkAQkBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAKAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAhO8fc7Z4sbZ42EMEw0CASAPEAGQ+EP4KBLbPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIDgCoAtD0BDBtAYIAu7cBgBD0D2+h8uCHAYIAu7ciAoAQ9BfIAcj0AMkBzHABygBAAwKBAQHPAAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJAgEgERICAUgWFwIRtOxbZ5tnjYRQExQAubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAHM7UTQ1AH4Y9IAAY4k0x/6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEmwS4Pgo1wsKgwm68uCJgQEB1wD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEgLRAds8FQACXAB2MYIAksv4QhLHBfL0cFMAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtWmR5UkRFYzdrUmdBYmR4VlZLamZaR3Bjdkd0MnFBQVk2REZaWVBpdFhqaFSCA=');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initMintMaster_init_args({ $$type: 'MintMaster_init_args', id, deployer })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const MintMaster_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    5005: { message: `Certificate.CreateCertificate: You're not Collection` },
    33707: { message: `NFT.Init: Sender must be a Master!` },
    37579: { message: `MintMaster.Init: Sender must be a deployer!` },
}

const MintMaster_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Mint","header":647845951,"fields":[{"name":"link","type":{"kind":"simple","type":"string","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Minted","header":504732551,"fields":[{"name":"nft","type":{"kind":"simple","type":"address","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"number","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
    {"name":"Data","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"master","type":{"kind":"simple","type":"address","optional":false}},{"name":"number","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"link","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"MasterData","header":null,"fields":[{"name":"currentNumber","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"lastMinted","type":{"kind":"simple","type":"address","optional":false}}]},
]

const MintMaster_getters: ABIGetter[] = [
    {"name":"data","arguments":[],"returnType":{"kind":"simple","type":"MasterData","optional":false}},
    {"name":"nftAddress","arguments":[{"name":"id","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const MintMaster_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Mint"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class MintMaster implements Contract {
    
    static async init(id: bigint, deployer: Address) {
        return await MintMaster_init(id, deployer);
    }
    
    static async fromInit(id: bigint, deployer: Address) {
        const init = await MintMaster_init(id, deployer);
        const address = contractAddress(0, init);
        return new MintMaster(address, init);
    }
    
    static fromAddress(address: Address) {
        return new MintMaster(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  MintMaster_types,
        getters: MintMaster_getters,
        receivers: MintMaster_receivers,
        errors: MintMaster_errors,
    };
    
    constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | Mint | Deploy) {
        
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Mint') {
            body = beginCell().store(storeMint(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }

    async sendMint(provider: ContractProvider, sender: Sender, link: string, owner: Address) {
        const messageBody = beginCell().storeUint(647845951, 32).storeStringRefTail(link).storeAddress(owner).endCell();
        await provider.internal(sender, {
          value: "0.1",
          body: messageBody
        });
      }
    
    async getData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('data', builder.build())).stack;
        const result = loadTupleMasterData(source);
        return result;
    }
    
    async getNftAddress(provider: ContractProvider, id: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(id);
        let source = (await provider.get('nftAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}