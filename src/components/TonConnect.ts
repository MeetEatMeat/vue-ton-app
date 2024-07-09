export function createTonConnectButton(): void {
    const div = document.createElement('div');
    div.id = 'ton-connect';
    // div.textContent = 'TON-CONNECT-BUTTON';
    document.body.appendChild(div);

    // Подключение библиотеки TonConnectUI
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ton-connect-ui@latest'; // Замените URL на актуальный, если необходимо
    script.onload = () => {
        // Инициализация TonConnectUI после загрузки скрипта
        const TonConnectUI = (window as any).TonConnectUI;
        const tonConnect = new TonConnectUI({
            manifestUrl: 'https://example.com/tonconnect-manifest.json',
            buttonRootId: 'ton-connect'
        });

        // Добавление TonConnectUI в div
        tonConnect.render(div);
    };
    document.body.appendChild(script);
}