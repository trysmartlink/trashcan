document.addEventListener('DOMContentLoaded', () => {
    const streamButtons = document.querySelectorAll('.links .btn');

    streamButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Meta Pixel カスタムイベントを発火
            if (typeof fbq === 'function') {
                const platform = event.currentTarget.dataset.platform || 'Unknown';
                fbq('track', 'ClickToStream', {
                    content_name: 'ゴミ箱',
                    content_category: 'Music Single',
                    content_ids: ['ゴミ箱'],
                    content_type: 'Music',
                    value: 1.00, // 必要に応じて調整
                    currency: 'JPY',
                    platform: platform // どのプラットフォームがクリックされたか
                });
                console.log(`Meta Pixel Event: ClickToStream - Platform: ${platform}`);
            } else {
                console.warn('Meta Pixel (fbq) not loaded or accessible.');
            }
            // リンクのデフォルト動作は継続される（target="_blank"で新しいタブで開く）
        });
    });
});
