import './assets/main.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { CHAIN, TonConnectUI } from '@tonconnect/ui';
import { Address, TonClient } from 'ton';
import { type SenderArguments } from '@ton/core';
import { getHttpEndpoint } from '@orbs-network/ton-access';

const store = createStore({
    state: {
        tonConnect: {
            tonClient: null,
            tonConnectUI: TonConnectUI,
            sender: {
                send: async(args: SenderArguments) => {
                    store.getters.tonConnect.tonConnectUI.sendTransaction({
                        messages: [
                          {
                            address: args.to.toString(),
                            amount: args.value.toString(),
                            payload: args.body?.toBoc().toString("base64"),
                          },
                        ],
                        validUntil: Date.now() + 5 * 60 * 1000, //* 5 minutes for user to approve
                    });
                },
                address: async() => {
                    const wallet = store.getters.tonConnect.tonConnectUI.wallet;
    
                    return wallet?.account?.address
                    ? Address.parse(wallet?.account?.address as string)
                    : undefined;
                }
            },
            connected: async() => {
                const wallet = store.getters.tonConnect.tonConnectUI.wallet;
                return !!wallet?.account.address;
            },
            wallet: async() => {
                const wallet = store.getters.tonConnect.tonConnectUI.wallet;
                return wallet?.account.address ?? null;
            },
            network: async() => {
                const wallet = store.getters.tonConnect.tonConnectUI.wallet;
                return wallet?.account.chain ?? null
            },
        }
    },
    mutations: {
        setTonConnectUI(state, tonConnectUI) {
            state.tonConnect.tonConnectUI = tonConnectUI;
        },
        setTonClient(state, tonClient) {
            state.tonConnect.tonClient = tonClient;
        }
    },
    actions: {
        async initializeTonConnect({ commit }) {
            const tonConnectUI = new TonConnectUI({
                manifestUrl: 'https://meeteatmeat.github.io/manifest.github.io/tonconnect-manifest.json',
                buttonRootId: 'ton-connect'
            });
            commit('setTonConnectUI', tonConnectUI);

            const network = store.getters.tonConnect.network;
            const endpoint = await getHttpEndpoint({ 
                network: network === CHAIN.MAINNET ? "mainnet" : "testnet", 
            });
            const tonClient = new TonClient({endpoint});
            commit('setTonClient', tonClient);
        }
    },
    getters: {
        tonConnect: state => state.tonConnect
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')

// createApp(App).mount('#app')
