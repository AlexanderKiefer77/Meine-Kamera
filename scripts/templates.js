
function technicDatas() {
    content.classList.add("d_none");
    dynamicContent.classList.remove("d_none");
    dynamicContent.innerHTML = `
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
        
        <button class="btn marTop" onclick="backBtn()">Zurück</button>
    `;
}

function cameraModi() {
    content.classList.add("d_none");
    dynamicContent.classList.remove("d_none");
    dynamicContent.innerHTML = `
        <H2>Die Verschiedene Kamara Modi</h2>
        <H3>Auto</H3>
        <p>Automatik-Modus</p>
        <H3>M</H3>
        <p>Manueller-Modus</p>
        <H3>A</H3>
        <p>Zeitautomatik</p>
        <H3>S</H3>
        <p>Blendenautomatik</p>
        <H3>P</H3>
        <p>Programmautomatik mit Programmverschiebung</p>

        <button class="btn marTop" onclick="backBtn()">Zurück</button>
    `
}

function tips() {
    content.classList.add("d_none");
    dynamicContent.classList.remove("d_none");
    dynamicContent.innerHTML = `
        <nav>
            <ul>
                <li><button class="btn" onclick="depthOfField()">Schärfentiefe</button></li>
                <li><button class="btn" onclick="apps()">Apps</button></li>
                <li><button class="btn" onclick="milkyWay()">Milchstraße</button></li>
                <li><button class="btn" onclick="northernLights()">Polarlichter</button></li>
                <li><button class="btn" onclick="fireworks()">Feuerwerk</button></li>
                <li><button class="btn" onclick="fence()">Zaun</button></li>
            </ul>
        </nav>

        <button class="btn marTop" onclick="backBtn()">Zurück</button>
    `
}

function depthOfField() {
    console.log('Schärfentiefe');
}

function apps() {
    console.log('Apps');
}

function milkyWay() {
    console.log('Milchstraße');
}

function northernLights() {
    console.log('Polarlichter');
}

function fireworks() {
    console.log('Feuerwerk');
}

function fence() {
    console.log('Zaun');
}

