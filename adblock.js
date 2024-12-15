<script>
document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
    function detectAdSenseBlock() {
        return new Promise((resolve) =&gt; {
            const script = document.createElement(&#39;script&#39;);
            script.src = &#39;https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js&#39;;
            script.async = true;

            script.onload = () =&gt; resolve(false);
            script.onerror = () =&gt; resolve(true);

            document.head.appendChild(script);

            setTimeout(() =&gt; resolve(true), 3000);
        });
    }

    async function replaceContentIfAdBlockActive() {
        const contentElement = document.querySelector(&#39;.ad-gimi&#39;);
        
        if (contentElement) {
            const isAdBlockActive = await detectAdSenseBlock();
            
            if (isAdBlockActive) {
                contentElement.innerHTML = `
                    <div style='border: 1px solid currentColor; border-radius: 10px; padding: 30px; margin: 30px 0; background-color: rgba(0, 0, 0, 0.05);'>
                     
                      <div>
  <style>
    @keyframes hacking-glitch {
      0% { transform: translate(0); opacity: 1; }
      10% { transform: translate(5px, -5px); opacity: 0.8; }
      20% { transform: translate(-5px, 5px); opacity: 1; }
      30% { transform: translate(3px, -3px); opacity: 0.9; }
      40% { transform: translate(-3px, 3px); opacity: 1; }
      100% { transform: translate(0); opacity: 1; }
    }

    @keyframes hacking-before {
      0% { clip-path: inset(0% 0% 100% 0%); transform: translate(-2px, -2px); }
      25% { clip-path: inset(10% 30% 40% 0%); transform: translate(2px, 2px); }
      50% { clip-path: inset(30% 10% 20% 50%); transform: translate(-2px, 1px); }
      75% { clip-path: inset(40% 20% 10% 30%); transform: translate(3px, -1px); }
      100% { clip-path: inset(0% 0% 100% 0%); transform: translate(-1px, 0); }
    }

    @keyframes hacking-after {
      0% { clip-path: inset(50% 0% 0% 50%); transform: translate(1px, 1px); }
      25% { clip-path: inset(30% 50% 10% 0%); transform: translate(-3px, -1px); }
      50% { clip-path: inset(10% 20% 40% 30%); transform: translate(2px, -2px); }
      75% { clip-path: inset(20% 10% 30% 50%); transform: translate(-1px, 2px); }
      100% { clip-path: inset(50% 0% 0% 50%); transform: translate(1px, -1px); }
    }
  </style>
<center>
  <h2 style='       position: relative;       font-size: 1.8em; /* Ukuran fleksibel */       text-transform: uppercase;       color: inherit; /* Warna mengikuti teks halaman */       animation: hacking-glitch 1s infinite;'>
    <span style='         position: absolute;         left: 0;         top: 0;         width: 100%;         height: 100%;         color: red; /* Warna glitch merah untuk kesan error */         z-index: -1;         animation: hacking-before 0.8s infinite linear;'>
      &#9940; AdBlock Terdeteksi ! 🚫
    </span>
    <span style='         position: absolute;         left: 0;         top: 0;         width: 100%;         height: 100%;         color: limegreen; /* Warna glitch hijau */         z-index: -2;         animation: hacking-after 0.8s infinite linear;'>
      &#9940; AdBlock Terdeteksi ! 🚫
    </span>
    &#9940; AdBlock Terdeteksi ! 🚫
  </h2>
  </center>
</div>

                        <p>Kami bergantung pada iklan agar website ini tetap berjalan.</p>
                        <p>Mohon nonaktifkan AdBlock Anda untuk melihat konten:</p>
                        <ol>
                            <li>Klik ikon AdBlock di browser Anda</li>
                            <li>Pilih &quot;Nonaktifkan di situs ini&quot;</li>
                            <li>Muat ulang halaman</li>
                        </ol>
<div style='border: 1px solid currentColor; border-radius: 10px; padding: 10px; margin: 10px 0; background-color: rgba(0, 0, 0, 0.05);'>
    <h2 style='margin: 0; text-align: center; font-size: 1.5rem; font-family: &apos;Arial&apos;, sans-serif; color: inherit;'>
        ي&#1614;ـ&#1648;&#1619;أ&#1614;ي&#1617;&#1615;ه&#1614;ا ٱل&#1617;&#1614;ذ&#1616;ين&#1614; ء&#1614;ام&#1614;ن&#1615;و&#1619;ا&#1759; أ&#1614;نف&#1616;ق&#1615;وا&#1759; م&#1616;ن ط&#1614;ي&#1617;&#1616;ب&#1614;ـ&#1648;ت&#1616; م&#1614;ا ك&#1614;س&#1614;ب&#1618;ت&#1615;م&#1761; و&#1614;م&#1616;م&#1617;&#1614;ا&#1619; أ&#1614;خ&#1761;ر&#1614;ج&#1761;ن&#1614;ا ل&#1614;ك&#1615;م م&#1617;&#1616;ن&#1614; ٱل&#1761;أ&#1614;ر&#1761;ض&#1616;&#1750; و&#1614;ل&#1614;ا ت&#1614;ي&#1614;م&#1617;&#1614;م&#1615;وا&#1759; ٱل&#1761;خ&#1614;ب&#1616;يث&#1614; م&#1616;ن&#1761;ه&#1615; ت&#1615;نف&#1616;ق&#1615;ون&#1614; و&#1614;ل&#1614;س&#1761;ت&#1615;م ب&#1616;أ&#1619;خ&#1616;ذ&#1616;يه&#1616; إ&#1616;ل&#1617;&#1614;ا&#1619; أ&#1614;ن ت&#1615;غ&#1761;م&#1616;ض&#1615;وا&#1759; ف&#1616;يه&#1616;&#1754; و&#1614;ٱع&#1761;ل&#1614;م&#1615;و&#1619;ا&#1759; أ&#1614;ن&#1617;&#1614; ٱلل&#1617;&#1614;ه&#1614; غ&#1614;ن&#1616;ي&#1617;&#1612; ح&#1614;م&#1616;يد&#1612;
        <span style='display: block; font-size: 0.9rem; font-style: italic; margin-top: 10px;'>Surat Al-Baqarah &#183; Ayat 267</span>
    </h2>
    <p style='margin-top: 15px; font-size: 1rem; font-family: &apos;Arial&apos;, sans-serif; color: inherit; text-align: justify;'>
        Wahai orang-orang yang beriman, infakkanlah sebagian dari hasil usahamu yang baik-baik dan sebagian dari apa yang Kami keluarkan dari bumi untukmu. Janganlah kamu memilih yang buruk untuk kamu infakkan, padahal kamu tidak mau mengambilnya, kecuali dengan memicingkan mata (enggan) terhadapnya. Ketahuilah bahwa Allah Mahakaya lagi Maha Terpuji.
    </p>
</div>

      </div>
                `;
            }
        }
    }

    replaceContentIfAdBlockActive();
});
</script>
    
