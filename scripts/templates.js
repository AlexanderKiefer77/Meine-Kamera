
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

        <button class="btn marBtn" onclick="backBtn()">Zurück</button>
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
        

        <button class="btn marBtn" onclick="showContent('objective')">Zurück</button>
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
        

        <button class="btn marBtn" onclick="showContent('objective')">Zurück</button>
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
        

        <button class="btn marBtn" onclick="showContent('objective')">Zurück</button>
    `
}

function templateTips() {
    return `
        <nav>
            <ul>
                <li><button class="btn" onclick="showContent('depthOfField')">Schärfentiefe</button></li>
                <li><button class="btn" onclick="showContent('milkyWay')">Milchstraße</button></li>
                <li><button class="btn" onclick="showContent('apps')">Apps</button></li>
                <li><button class="btn" onclick="showContent('ndFilter')">ND Filter</button></li>
                <li><button class="btn" onclick="showContent('ndFilterTabelle')">ND Filter Tabelle</button></li>
                <li><button class="btn" onclick="showContent('northernLights')">Polarlichter</button></li>
                <li><button class="btn" onclick="showContent('fireworks')">Feuerwerk</button></li>                
                <li><button class="btn" onclick="showContent('fance')">Zaun</button></li>
                <li><button class="btn" onclick="showContent('monitor')">Monitore</button></li>
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

        <button class="btn marBtn" onclick="showContent('tips')">Zurück</button>
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

        <button class="btn marBtn" onclick="showContent('tips')">Zurück</button>
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

        <button class="btn marBtn" onclick="showContent('tips')">Zurück</button>
    `
}

function templateNdFilter() {
    return `
        <h2>ND-Filter</h2>
        <p>Überlegen, ob eine Langzeitbelichtung sinnvoll ist,</p>
        <p>z.B. ob es keine Äste gibt, die sich dann mit bewegen.</p>

        <h3>Autofokus</h3>
        <p>Ohne den Filter den Autofokus setzen, das Objektiv auf manuellen Fokus umschalten, und dann den Filter
            montieren.</p>

        <h3>Weißabgleich</h3>
        <p>manuell setzen, z.B. Tageslicht.</p>

        <h3>Verschlusszeit</h3>
        <p>Ohne Filter die gewünschte Verschlusszeit bestimmen. Anhand der Tabelle die Belichtungszeit umrechnen,
            und dann den Filter montieren.</p>

        <h3>Mehrere ND-Filter zusammen, multiplizieren sich.</h3>
        <p>z.B. 64x und 1.000x = 64.000x</p>
        <p>bei extrem langen Belichtungszeiten, können Menschenmengen unsichtbar gemacht werden.</p>

        <h3>ND8</h3>
        <p>Er reduziert die einfallende Lichtmenge um 3 Blendenstufen.</p>
        <p>Der ND8 Filter ist ideal für Aufnahmen in den Morgen- und Abendstunden, wenn das Licht weicher, aber
            dennoch relativ hell ist.</p>
        <p>Er ermöglicht dadurch längere Belichtungszeiten - ideal für stimmungsvolle Aufnahmen mit
            Bewegungsunschärfe, z.B. bei fließemdem Wasser, ziehenden Wolken oder belebten Straßen.</p>

        <h3>ND64</h3>
        <p>Er reduziert die einfallende Lichtmenge um 6 Blendenstufen.</p>
        <p>Der ND64 Filter ist der Allrounder unter den ND-Filtern.</p>
        <p>Er bietet die ideale Balance zwischen Lichtkontrolle und
            Flexibilität und ist in den meisten Tageszeiten problemlos einsetzbar.</p>
        <p>Er ermöglicht längere Belichtungszeiten, weichere Bewegungsunschärfe, z.B. bei Wasser, Wolken oder
            Verkehr und sorgt für eine ausgewogene Belichtung auch bei wechselnden Lichtverhältnissen</p>

        <h3>ND1000</h3>
        <p>Er reduziert die einfallende Lichtmenge um 10 Blendenstufen.</p>
        <p>Der ND1000 Filter ist die richtige Wahl, wenn du extrem lange Belichtungszeiten realisieren möchtest -
            selbst bei starkem Sonnenlicht.</p>
        <p>Er ermöglicht Belichtungszeiten von einigen Sekunden bei voller Sonne oder bis zu 30 Sekunden bei
            bedecktem Himmel.</p>
        <p>Ideal für kreative Langzeitbelichtungen von Wasser, Wolken, Menschenmengen oder urbanen Szenen.</p>
        
        <button class="btn marBtn" onclick="showContent('tips')">Zurück</button>
    `
}

function templateNdFilterTabelle() {
    return `
        <h2>ND-Filter Belichtungszeit Umrechnungstabelle</h2>
        <table class="meine-tabelle">
            <thead>
                <tr>
                    <th>Belichtungszeit</th>
                    <th>ND8</th>
                    <th>ND64</th>
                    <th>ND1000</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1/4000</td>
                    <td>1/500</td>
                    <td>1/50</td>
                    <td>1/4</td>
                </tr>
                <tr>
                    <td>1/2000</td>
                    <td>1/250</td>
                    <td>1/30</td>
                    <td>1/2</td>
                </tr>
                <tr>
                    <td>1/1000</td>
                    <td>1/125</td>
                    <td>1/15</td>
                    <td>1s</td>
                </tr>
                <tr>
                    <td>1/500</td>
                    <td>1/60</td>
                    <td>1/8</td>
                    <td>2s</td>
                </tr>
                <tr>
                    <td>1/250</td>
                    <td>1/30</td>
                    <td>1/4</td>
                    <td>4 Sek.</td>
                </tr>
                <tr>
                    <td>1/125</td>
                    <td>1/15</td>
                    <td>1/2</td>
                    <td>8s</td>
                </tr>
                <tr>
                    <td>1/60</td>
                    <td>1/8</td>
                    <td>1s</td>
                    <td>16s</td>
                </tr>
                <tr>
                    <td>1/30</td>
                    <td>1/4</td>
                    <td>2s</td>
                    <td>32s</td>
                </tr>
                <tr>
                    <td>1/15</td>
                    <td>1/2</td>
                    <td>4s</td>
                    <td>1m 6s</td>
                </tr>
                <tr>
                    <td>1/8</td>
                    <td>1s</td>
                    <td>8s</td>
                    <td>2m 5s</td>
                </tr>
                <tr>
                    <td>1/4</td>
                    <td>2s</td>
                    <td>16s</td>
                    <td>4m 10s</td>
                </tr>
                <tr>
                    <td>1/2</td>
                    <td>4s</td>
                    <td>32s</td>
                    <td>8m 20s</td>
                </tr>
                <tr>
                    <td>1 Sek.</td>
                    <td>8s</td>
                    <td>1m 4s</td>
                    <td>16m 40s</td>
                </tr>
                <tr>
                    <td>2 Sek.</td>
                    <td>16s</td>
                    <td>2m 8s</td>
                    <td>33m 20s</td>
                </tr>
                <tr>
                    <td>4 Sek.</td>
                    <td>32s</td>
                    <td>4m 16s</td>
                    <td>1h 6m 40s</td>
                </tr>
                <tr>
                    <td>8 Sek.</td>
                    <td>1m 4s</td>
                    <td>8m 32s</td>
                    <td>2h 13m 20s</td>
                </tr>
                <tr>
                    <td>15 Sek.</td>
                    <td>2m</td>
                    <td>16m</td>
                    <td>4h 26m</td>
                </tr>
                <tr>
                    <td>30 Sek.</td>
                    <td>4m</td>
                    <td>32m</td>
                    <td>8h 53m</td>
                </tr>
            </tbody>
        </table>

        <button class="btn marBtn" onclick="showContent('tips')">Zurück</button>
    `
}

function templateNorthernLights() {
    return `
        <H2>Polarlichter</H2>
        <p>Bohnensack Folge 219 ab ca. Min.30</p>

        <button class="btn marBtn" onclick="showContent('tips')">Zurück</button>
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

        <button class="btn marBtn" onclick="showContent('tips')">Zurück</button>
    `
}

function templateFance() {
    return `
        <H2>Zaun</H2>
        <p>Bei Zaun durch fotografieren,</p>
        <p>Ganz nah ran gehen, reinzoomen, Blende ganz auf.</p>
        <p>Dann sollte der Zaun nicht zu sehen sein.</p>

        <button class="btn marBtn" onclick="showContent('tips')">Zurück</button>
    `
}

function templateMonitor() {
    return `
        <H2>Monitor</H2>
        <p>kalibrierte Monitore, z.B. Eizo ColorEdge</p>
        <p>oder</p>
        <p>Monitor kalibrieren</p>
        <p>----------</p>
        <p>Bohnensack Folge 62</p>

        <button class="btn marBtn" onclick="showContent('tips')">Zurück</button>
    `
}