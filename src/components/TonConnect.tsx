// src/TonConnect.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

export function createTonConnectButton(): void {
  // Создаем контейнер для TonConnectUI
  const container = document.createElement('div');
//   const container = document.getElementById('main');
//   container.id = 'ton-connect';
//   document.body.appendChild(container);

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

    // Добавление TonConnectUI в контейнер
    tonConnect.render(container);
  };
  container.appendChild(script);

  // Использование React для рендеринга контейнера
  createRoot(container).render(<div id="ton-connect">TON-CONNECT-BUTTON</div>);
}
