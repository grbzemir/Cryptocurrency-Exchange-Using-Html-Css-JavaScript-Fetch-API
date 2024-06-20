fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbinancecoin%2Cdogecoin%2Cethereum%2Clitecoin%2Ctether%2Cripple%2Cmaga%2Cmagmahat&vs_currencies=usd&include_24hr_change=true')
    .then(response => response.json())
    .then(json => {

        const container = document.querySelector('.container');
        const paralar = Object.getOwnPropertyNames(json);

        for (let para of paralar) {

            const paraBilgi = json[`${para}`];
            const deger = paraBilgi.usd;
            const degisim = paraBilgi.usd_24h_change.toFixed(5);


            container.innerHTML += `
            <div class="coin ${degisim < 0 ? 'falling' : 'rising'}">
                <div class="coin-logo">
                    <img src="images/${para}.png">
                </div>
                <div class="coin-name">
                    <h3>${para}</h3>
                    <span>/USD</span>
                </div>
                <div class="coin-price">
                    <span class="price">${deger}</span>
                    <span class="change">${degisim}</span>
                </div>
            </div>
        `;

        }

    });


/* Eğer değişim değeri 0'dan küçükse falling class'ını ekler, değilse rising class'ini ekler. */