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

function loadTupleData(source: TupleReader) {
    let _owner = source.readAddress();
    let _master = source.readAddress();
    let _number = source.readBigNumber();
    let _link = source.readString();
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

 type NFT_init_args = {
    $$type: 'NFT_init_args';
    number: bigint;
    master: Address;
}

function initNFT_init_args(src: NFT_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.number, 257);
        b_0.storeAddress(src.master);
    };
}

async function NFT_init(number: bigint, master: Address) {
    const __code = Cell.fromBase64('te6ccgECFAEAAzkAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s88uCCDgQFAgEgBwgBvAGSMH/gcCHXScIflTAg1wsf3iDAACLXScEhsJJbf+CCECadWD+6jrPTHwGCECadWD+68uCB1AHQAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSbBLgMHAGAK7I+EMBzH8BygBVMFBDINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhLLH8hYzxbJAczJ7VQA8jI0gRON+EJSQMcF8vT4KFMSyFUgghAeFZuHUATLH1gg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wyx/JyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsAA38CEbx9ztnm2eNiDA4JAgEgCgsABPgoAgEgDA0CAUgSEwIRtOxbZ5tnjYiQDg8Aubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAHE7UTQ1AH4Y9IAAY5K+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMf1AHQFEMwbBTg+CjXCwqDCbry4IkQAAhUcyEjAVSBAQHXAPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSAtEB2zwRAHqCAIOr+EIixwXy9IsIcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFAzABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWRQWjYxR2JGamllU0ZLSGtRSmtlTTREblpTVlNNWWJ1TVhRTDE4RXUxbVJogg');
    const __system = Cell.fromBase64('te6cckECFgEAA0MAAQHAAQEFoXdvAgEU/wD0pBP0vPLICwMCAWIECAN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPPLggg4FBwG8AZIwf+BwIddJwh+VMCDXCx/eIMAAItdJwSGwklt/4IIQJp1YP7qOs9MfAYIQJp1YP7ry4IHUAdAB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBJsEuAwcAYA8jI0gRON+EJSQMcF8vT4KFMSyFUgghAeFZuHUATLH1gg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wyx/JyIJYwAAAAAAAAAAAAAAAAQHLZ8zJcPsAA38Arsj4QwHMfwHKAFUwUEMg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxYBINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WEssfyFjPFskBzMntVAIBIAkLAhG8fc7Z5tnjYgwOCgAE+CgCASAMEwIBIA0SAhG07Ftnm2eNiJAOEQHE7UTQ1AH4Y9IAAY5K+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdMf1AHQFEMwbBTg+CjXCwqDCbry4IkPAVSBAQHXAPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgSAtEB2zwQAHqCAIOr+EIixwXy9IsIcCDIcgHLAXABywASygfL/8nQINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFAzAAhUcyEjALm3ejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOBAq4A3AM7HKZywdVyOS2WHBOA3qTvfKost446np7wKs4ZNBOE7Lpy1Zp2W5nQdLNsozdFJACAUgUFQARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1kUFo2MUdiRmppZVNGS0hrUUprZU00RG5aU1ZTTVlidU1YUUwxOEV1MW1SaIINdyQOg=');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initNFT_init_args({ $$type: 'NFT_init_args', number, master })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const NFT_errors: { [key: number]: { message: string } } = {
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

const NFT_types: ABIType[] = [
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

const NFT_getters: ABIGetter[] = [
    {"name":"data","arguments":[],"returnType":{"kind":"simple","type":"Data","optional":false}},
    {"name":"nftAddress","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const NFT_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Mint"}},
]

export class NFT implements Contract {
    
    static async init(number: bigint, master: Address) {
        return await NFT_init(number, master);
    }
    
    static async fromInit(number: bigint, master: Address) {
        const init = await NFT_init(number, master);
        const address = contractAddress(0, init);
        return new NFT(address, init);
    }
    
    static fromAddress(address: Address) {
        return new NFT(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  NFT_types,
        getters: NFT_getters,
        receivers: NFT_receivers,
        errors: NFT_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | Mint) {
        
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Mint') {
            body = beginCell().store(storeMint(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('data', builder.build())).stack;
        const result = loadTupleData(source);
        return result;
    }
    
    async getNftAddress(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('nftAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}