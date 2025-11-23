document.addEventListener('DOMContentLoaded', () => {
    const streamButtons = document.querySelectorAll('.links .btn');

    // ユニークなevent_idを生成する関数
    function generateEventId() {
        return 'event-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
    }

    streamButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // 1. クリックされるたびに新しいIDを生成
            const uniqueId = generateEventId();
            const platform = event.currentTarget.dataset.platform || 'Unknown';

            // 2. Meta Pixel カスタムイベントを発火
            if (typeof fbq === 'function') {
                // エラーメッセージで「Purchase」イベントと出ていた場合、
                // ここを 'ClickToStream' ではなく 'Purchase' に変更している可能性があります。
                // もし広告マネージャの設定で「ClickToStream」のままならそのままでOKです。
                // ここでは念のため、前回作成した 'ClickToStream' で記述しますが、
                // 必要に応じて 'Purchase' に書き換えてください。
                fbq('track', 'Purchase', 
                    {
                        // 第3引数：イベントデータ
                        content_name: 'ゴミ箱',
                        content_category: 'Music Single',
                        content_ids: ['ゴミ箱'],
                        content_type: 'Music',
                        value: 1.00,
                        currency: 'JPY',
                        platform: platform
                    },
                    {
                        // 【重要】第4引数：ここでeventIDを渡します
                        eventID: uniqueId
                    }
                );
                console.log(`Meta Pixel Event: ClickToStream - Platform: ${platform} - EventID: ${uniqueId}`);
            } else {
                console.warn('Meta Pixel (fbq) not loaded or accessible.');
            }
        });
    });
});
