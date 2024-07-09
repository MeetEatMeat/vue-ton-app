<template>
    <div id="ton-connect"></div>
</template>

<script lang="ts">
    import { defineComponent, onBeforeMount, onMounted } from 'vue';
    import { useStore } from 'vuex';
  
    export default defineComponent({
        name: 'TonConnect',
        setup() {
            const store = useStore();

            onMounted(() => {
                store.dispatch('initializeTonConnect');
            });
        }
    });
</script>