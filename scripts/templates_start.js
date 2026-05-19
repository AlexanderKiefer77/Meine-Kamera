
function templateTechnicDatas() {
    return `
        <H2>Technische Daten meiner Nikon D5600</h2>
        <p>ISO bis 1600 sehr gut</p>
        <p>ISO bis 3200 gut</p>
        <p>ISO-Bereich von 100 bis 25.600</p>
        <p>DX-Format-Sensor mit 24,2 Megapixeln</p>         
        <p>Objektivanschluss: Nikon F</p>       
        <p>Carbonfaserverstärkten Gehäuse</p>
        <p>Gehäusegewicht ca. 420 g</p>
        <p>TFT LCD Monitor 8,1 cm (3,2 Zoll) mit 1.037.000 Bildpunkten, neig- und drehbarer Touchscreen</p>
        <p>AF-System mit 39 Messfeldern und neun hochpräzise Kreuzsensoren in der Mitte</p>
        <p>Bildformate:	JPG und RAW</p>
        <p>Farbtiefe: 36 Bit (12 Bit pro Farbkanal), 42 Bit (14 Bit pro Farbkanal)</p>
        <p>Fotoauflösung: 6.000 x 4.000 (3:2)</p>
        <p<Belichtungszeiten: 1/4.000 bis 30 s</p>
        <p>Belichtungskorrektur: -5,0 bis +5,0 EV mit Schrittgröße von 1/3 bis 1/2 EV</p>
        <p>Serienaufnahmen: 5,0 Bilder/s bei höchster Auflösung, 4 Bilder pro Sekunde (14-Bit RAW)</p>
        
        <button class="btn marBtn backBtn" onclick="backBtn()">Zurück</button>
    `;
}

function templateCameraModi() {
    return `
        <H2>Die Verschiedene Kamara Modi</h2>
        <H3>Auto</H3>
        <H4>Automatik-Modus</H4>
        <p>Die Kamera wählt automatisch die Blende, die Verschlusszeit und die ISO aus.</p>

        <H3>M</H3>
        <H4>Manueller-Modus</H4>
        <p>Die Blende, die Verschlusszeit und die ISO muss selbstständig eingestellt werden.</p>
        <p>Die Kamera übernimmt keine automatische Belichtungsentscheidung.</p>

        <H3>A</H3>
        <H4>Blendenvorwahl</H4>
        <p>( Aperture Priority )</p>
        <p>( nennt sich <b><i>Zeitautomatik</i></b> auf Display )</p>
        <p>Du stellst die Blende selbst ein,</p>
        <p>Die Kamera wählt automatisch die passende Verschlusszeit dazu.</p>
        <p>Die ISO kann manuell vorgewählt werden, oder auf "Auto-ISO" stellen.</p>

        <H3>S</H3>        
        <H4>Zeitvorwahl</H4>
        <p>( Shutter Priority )</p>
        <p>( nennt sich <b><i>Blendenautomatik</i></b> auf Display )</p>
        <p>Du stellst die Verschlusszeit selbst ein,</p>
        <p>Die Kamera wählt automatisch die passende Blende.</p>
        <p>Die ISO kann manuell vorgewählt werden, oder auf "Auto-ISO" stellen.</p>

        <H3>P</H3>
        <H4>Programmautomatik</H4>
        <p>intelligenter Automatikmodus mit Kontrolle</p>
        <p>Die Kamera wählt Blende und Verschlusszeit automatisch.</p>
        <p>Im P-Modus gibt es normalerweise eine automatische Kombination</p>
        <p>Du bekommst eine korrekt belichtete Grund-Einstellung.</p>
        <p>Du kannst aber trotzdem noch eingreifen.</p>
        <p>ISO einstellen (manuell oder Auto ISO)</p>
        <p>Belichtungskorrektur (+/-) nutzen.</p>
        <p>Mit dem Einstellrad eine „Programmverschiebung“ (Program Shift) machen:</p>
        <p>mehr Hintergrundunschärfe → größere Blende</p>
        <p>kürzere Zeit → Bewegung einfrieren</p>

        <button class="btn marBtn backBtn" onclick="backBtn()">Zurück</button>
    `
}

function templateObjective() {
    return `
        <nav>
            <ul>
                <li><button class="btn" onclick="showContent('sigma')">Sigma 17-70</button></li>
                <li><button class="btn" onclick="showContent('nikonKit')">Nikon 18-55</button></li>
                <li><button class="btn" onclick="showContent('tamron')">Tamron 70-300</button></li>
            </ul>
        </nav>

        <button class="btn marBtn backBtn" onclick="backBtn()">Zurück</button>
    `
}

function templateTips() {
    return `
        <nav>
            <ul>
                <li><button class="btn" onclick="showContent('apertureStops')">Blendenstufen</button></li>
                <li><button class="btn" onclick="showContent('depthOfField')">Schärfentiefe</button></li>                
                <li><button class="btn" onclick="showContent('ndFilter')">ND Filter</button></li>
                <li><button class="btn" onclick="showContent('ndFilterTabelle')">ND Filter Tabelle</button></li>
                <li><button class="btn" onclick="showContent('apps')">Apps</button></li>
                <li><button class="btn" onclick="showContent('milkyWay')">Milchstraße</button></li>
                <li><button class="btn" onclick="showContent('northernLights')">Polarlichter</button></li>
                <li><button class="btn" onclick="showContent('fireworks')">Feuerwerk</button></li>                
                <li><button class="btn" onclick="showContent('fance')">Zaun</button></li>
                <li><button class="btn" onclick="showContent('monitor')">Monitore</button></li>
            </ul>
        </nav>

        <button class="btn marBtn backBtn" onclick="backBtn()">Zurück</button>
    `
}
