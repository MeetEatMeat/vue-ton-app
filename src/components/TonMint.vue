<template>
    <div>
        <div id="mint">
            <h1>Ton Mint</h1>
            <button title="Mint" @click="sendMint">Mint</button>
        </div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent, computed } from 'vue';
    import { useStore } from 'vuex';
    import Minter from './contracts/minter';
    import { Address, type OpenedContract, type Sender } from "ton-core";
    import type { Contract, TonClient } from 'ton';
    import type { TonConnectUI } from '@tonconnect/ui';

    export default defineComponent({
        name: 'TonMint',
        setup() {
            const store = useStore();
            const tonConnect = store.state.tonConnect;
            const tonConnectUI = tonConnect.tonConnectUI as TonConnectUI;
            const client = tonConnect.tonClient as TonClient;
            const contractAddress = Address.parse("EQBe49vZFlvuvUHKTxsI7E--4CPKtJ1T59zFk_HIOK8tQSyD");
            const contract = new Minter(contractAddress) as Contract;
            const minter = client.open(contract) as OpenedContract<Minter>;
            const sendMint = async () => {
                const link = "Some link";
                const owner = Address.parse(tonConnectUI.wallet?.account.address!);
                const sender = tonConnect.sender as Sender;
                minter?.sendMint(sender, link, owner);
            }
            return {
                sendMint
            };
        }
    });
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #mint {
        background-color: rgb(180, 178, 178);
        border-radius: 15px;
        padding: 20px;
        /* Removes shadow if any */
        box-shadow: none;
        /* Centering the content */
        text-align: center;
        height: 80vh; /* Full height of the viewport */
        width: 80vw; /* Full width of the viewport */
    }
</style>