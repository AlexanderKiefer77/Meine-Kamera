

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
        
        <button class="btn marBtn" onclick="backBtn()">Zurück</button>
    `;
}

function templateCameraModi() {
    return `
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

        <button class="btn marBtn" onclick="backBtn()">Zurück</button>
    `
}

function objective() {
    content.classList.add("d_none");
    dynamicContent.classList.remove("d_none");
    headline.innerText = 'Meine Objektive';
    dynamicContent.innerHTML = '';
    dynamicContent.innerHTML = `
        <nav>
            <ul>
                <li><button class="btn" onclick="sigma()">Sigma 17-70</button></li>
                <li><button class="btn" onclick="nikonKit()">Nikon 18-55</button></li>
                <li><button class="btn" onclick="tamron()">Tamron 70-300</button></li>
            </ul>
        </nav>

        <button class="btn marBtn" onclick="backBtn()">Zurück</button>
    `
}


function templateSigma() {
    return `
        <H2>Sigma 17-70 mm F2.8-4 DC Makro OS HSM Contemporary</H2>
        
        <H3>Brennweitenbereich:</H3>
        <p>17-70 mm</p>

        <H3>Lichtstärke:</H3>
        <p>F2,8 bis F4</p>

        <H3>Kleinste Blendenöffnung:</H3>
        <p>F22</p>

        <H3>Anzahl Blendenlamellen:</H3>
        <p>7</p>

        <H3>Autofokus:</H3>
        <p>Fokusmotor im Objektiv (Ultraschallmotor)</p>

        <H3>Innenfokussierung:</H3>
        <p>nein</p>

        <H3>Linsensystem:</H3>
        <p>16 Linsen in 14 Gruppen inkl. ED und asphärische Linsen</p>

        <H3>Bildstabilisator:</H3>
        <p>ja</p>

        <H3>Naheinstellgrenze:</H3>
        <p>22 cm</p>

        <H3>Größter Abbildungsmaßstab:</H3>
        <p>1:2,9</p>

        <H3>Filtergewinde:</H3>
        <p>72 mm</p>

        <H3>Abmessungen (Ø x Länge):</H3>
        <p>79 x 82 mm</p>

        <H3>Gewicht:</H3>
        <p>470 g</p>
        

        <button class="btn marBtn" onclick="objective()">Zurück</button>
    `
}

function templateNikonKit() {
    return `
        <H2>Nikon AF-P Nikkor 18-55 mm F3.5-5.6G DX VR</H2>
        
        <H3>Brennweitenbereich:</H3>
        <p>18-55 mm</p>

        <H3>Lichtstärke:</H3>
        <p>F3,5 bis F5,6</p>

        <H3>Kleinste Blendenöffnung:</H3>
        <p>F38</p>

        <H3>Anzahl Blendenlamellen:</H3>
        <p>7</p>

        <H3>Autofokus:</H3>
        <p>Fokusmotor im Objektiv</p>

        <H3>Innenfokussierung:</H3>
        <p>ja</p>

        <H3>Linsensystem:</H3>
        <p>12 Linsen in 9 Gruppen inkl. asphärische Linse(n)</p>

        <H3>Bildstabilisator:</H3>
        <p>ja</p>

        <H3>Naheinstellgrenze:</H3>
        <p>25 cm</p>

        <H3>Größter Abbildungsmaßstab:</H3>
        <p>1:2,6</p>

        <H3>Filtergewinde:</H3>
        <p>55 mm</p>

        <H3>Abmessungen (Ø x Länge):</H3>
        <p>65 x 63 mm</p>

        <H3>Gewicht:</H3>
        <p>205 g</p>
        

        <button class="btn marBtn" onclick="objective()">Zurück</button>
    `
}

function templateTamron() {
    return `
        <H2>Tamron AF 70-300 F4-5.6 Di Macro 1:2 A17</H2>
        
        <H3>Brennweitenbereich:</H3>
        <p>70-300 mm</p>

        <H3>Lichtstärke:</H3>
        <p>F4 bis F5,6</p>

        <H3>Kleinste Blendenöffnung:</H3>
        <p>nicht angegeben</p>

        <H3>Anzahl Blendenlamellen:</H3>
        <p>9</p>

        <H3>Autofokus:</H3>
        <p>Fokusmotor im Objektiv</p>

        <H3>Innenfokussierung:</H3>
        <p>nein</p>

        <H3>Linsensystem:</H3>
        <p>16 Linsen in 14 Gruppen inkl. ED und asphärische Linsen</p>

        <H3>Bildstabilisator:</H3>
        <p>nein</p>

        <H3>Naheinstellgrenze:</H3>
        <p>150 cm</p>

        <H3>Größter Abbildungsmaßstab:</H3>
        <p>1:2</p>

        <H3>Filtergewinde:</H3>
        <p>62 mm</p>

        <H3>Abmessungen (Ø x Länge):</H3>
        <p>76 x 116 mm</p>

        <H3>Gewicht:</H3>
        <p>435 g</p>
        

        <button class="btn marBtn" onclick="objective()">Zurück</button>
    `
}


function tips() {
    content.classList.add("d_none");
    dynamicContent.classList.remove("d_none");
    headline.innerText = 'Meine Tipps';
    dynamicContent.innerHTML = '';
    dynamicContent.innerHTML = `
        <nav>
            <ul>
                <li><button class="btn" onclick="depthOfField()">Schärfentiefe</button></li>
                <li><button class="btn" onclick="apps()">Apps</button></li>
                <li><button class="btn" onclick="milkyWay()">Milchstraße</button></li>
                <li><button class="btn" onclick="northernLights()">Polarlichter</button></li>
                <li><button class="btn" onclick="fireworks()">Feuerwerk</button></li>                
                <li><button class="btn" onclick="fence()">Zaun</button></li>
                <li><button class="btn" onclick="monitor()">Monitore</button></li>
            </ul>
        </nav>

        <button class="btn marBtn" onclick="backBtn()">Zurück</button>
    `
}


function templateDepthOfField() {
    return `
        <H2>Schärfentiefe</H2>

        <H3>Blende</H3>
        <p>offene Blende und nah am Objekt</p> 
        <p>Schärfentiefe gering -> Hintergrund unscharf</p>

        <H3>Brennweite</H3>
        <p>bei gleichem Abstand</p>
        <p>weitwinlig eher scharf</p>
        <p>zoomen eher unscharf</p>

        <H3>Distanz</H3>
        <H4>zwischen Objekt und Kamera</H4>
        <p>Bei gleicher Blende und Brennweite</p>
        <p>näher dran -> Hintergrund unschärfer</p>
        <p>weiter weg -> Hintergrund schärfer</p>   

        <br>
        <H4>Größe vom Objekt ändert sich jeweils</H4>

        <button class="btn marBtn" onclick="tips()">Zurück</button>
    `
}

function templateApps() {
    return `
        <H2>Apps und Webseiten</H2>

        <H3>/www.focustoinfinity.de</H3>
        <p>Webseite für Michstraßen Infos</p>

        <H3>Stellarium</H3>
        <p>App für Planetarium</p>

        <H3>Viewfindr</H3>
        <p>Wettervorhersage für Fotografen</p>

        <H3>Lichtverschmutzung</H3>
        <p>www.lightpollutionmap.info</p>
        <p>auch als App</p>

        <H3>Gebrauchte Objektive</H3>
        <p>Bohnensack Folge 220</p>
        <p>www.mpb.com</p>
        <p>www.nikonclassics-michalke.de</p>

        <H3>PhotoPills</H3>

        <H3>LunaSolCal</H3>
        <p>App für Mondstand</p>

        <H3>npf-Rechner</H3>

        <button class="btn marBtn" onclick="tips()">Zurück</button>
    `
}

function templateMilkyWay() {
    return `
        <H2>Milchstraße</H2>
        <p>Stativ</p>
        <p>manueller Fokus</p>
        <p>Blende f2.8</p>
        <p>Bildstabilisator ausschalten</p>
        <p>ISO relativ hoch einstellen</p>
        <p>Weißabgleich fest auf Tageslicht bzw. auf ca. 3900 K</p>        
        <p>Belichtungszeit ca. 7 sek. nach npf Rechner</p>

        <button class="btn marBtn" onclick="tips()">Zurück</button>
    `
}

function templateNorthernLights() {
    return `
        <H2>Polarlichter</H2>
        <p>Bohnensack Folge 219 ab ca. Min.30</p>

        <button class="btn marBtn" onclick="tips()">Zurück</button>
    `
}

function templateFireworks() {
    return `
        <H2>Feuerwerk</H2>
        <p>Stativ</p>
        <p>manueller Fokus</p>
        <p>Blende f8</p>
        <p>Bildstabilisator ausschalten</p>
        <p>ISO ca. 400, entsprechend anpassen</p>
        <p>Weißabgleich fest auf ca. 5000 K</p>        
        <p>Belichtungszeit ca. 3-4 sek.</p>

        <button class="btn marBtn" onclick="tips()">Zurück</button>
    `
}

function templateFance() {
    return `
        <H2>Zaun</H2>
        <p>Bei Zaun durch fotografieren,</p>
        <p>Ganz nah ran gehen, reinzoomen, Blende ganz auf.</p>
        <p>Dann sollte der Zaun nicht zu sehen sein.</p>

        <button class="btn marBtn" onclick="tips()">Zurück</button>
    `
}

function templateMonitor() {
    return `
        <H2>Monitor</H2>
        <p>kalibrierte Monitore, z.B. Eizo ColorEdge</p>
        <p>oder</p>
        <p>Monitor kalibrieren</p>
        <p>Bohnensack Folge 62</p>

        <button class="btn marBtn" onclick="tips()">Zurück</button>
    `
}