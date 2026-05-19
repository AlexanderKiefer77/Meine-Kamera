
function templateApertureStops() {
    return `
    <h2>Blendenstufen</h2>
            <h3>f/1,4, f/2, f/2,8, f/4, f/5,6, f/8, f/11, f/16</h3>
            <p>Eine Erhöhung der Blendenzahl halbiert das in das Objektiv einfallende
                Licht, während jede Verringerung der Blendenzahl das Licht verdoppelt.</p>
            <p>Je niedriger die Blendenstufe, desto größer ist die Blendenöffnung und mehr Licht fällt ein.</p>
            <p>Je höher die Blendenstufe, desto kleiner die Blendenöffnung und weniger Licht fällt ein </p>

    <table class="meine-tabelle">
        <thead>
            <tr>
                <th>Fotografie-Art</th>
                <th>Empfohlene Blende</th>
                <th>Beschreibung</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Landschaftsfotografie</td>
                <td>f/8 bis f/16</td>
                <td>Große Schärfentiefe für Schärfe in der gesamten Szene</td>
            </tr>
            <tr>
                <td>Familienporträtfotografie</td>
                <td>f/4 bis f/8</td>
                <td>Alle Familienmitglieder sind im Fokus, während der Hintergrund unscharf bleibt</td>
            </tr>
            <tr>
                <td>Porträtfotografie</td>
                <td>f/1.4 bis f/5.6</td>
                <td>Geringe Schärfentiefe zur Isolierung des Motivs</td>
            </tr>
            <tr>
                <td>Makrofotografie</td>
                <td>f/2.8 bis f/5.6</td>
                <td>Gleichgewicht zwischen geringer Schärfentiefe und Schärfe</td>
            </tr>
            <tr>
                <td>Straßenfotografie</td>
                <td>f/5.6 bis f/8</td>
                <td>Gleichgewicht zwischen Hintergrunddetails und Motivisolierung</td>
            </tr>
            <tr>
                <td>Sportfotografie</td>
                <td>f/2.8 bis f/4</td>
                <td>Große Blende für kurze Belichtungszeiten und Motivisolierung</td>
            </tr>
            <tr>
                <td>Nachtfotografie</td>
                <td>f/1.8 bis f/5.6</td>
                <td>Mehr Licht bei schlechten Lichtverhältnissen einfangen, Rauschen reduzieren</td>
            </tr>
            <tr>
                <td>Architekturfotografie</td>
                <td>f/8 bis f/11</td>
                <td>Schärfe und Details im gesamten Bild</td>
            </tr>
            <tr>
                <td>Produktfotografie</td>
                <td>f/8 bis f/16</td>
                <td>Das gesamte Produkt ist scharf gestellt</td>
            </tr>
        </tbody>
    </table>

    <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
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

        <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
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

        <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
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

        <h3>Bildbearbeitung</h3>            
        <p>NX Studio</p>
        <p>RapidRAW</p>
        <p>DxO Photo Lap 9</p>

        <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
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
        
        <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
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

        <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
    `
}

function templateNorthernLights() {
    return `
        <H2>Polarlichter</H2>
        <p>Bohnensack Folge 219 ab ca. Min.30</p>

        <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
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

        <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
    `
}

function templateFance() {
    return `
        <H2>Zaun</H2>
        <p>Bei Zaun durch fotografieren,</p>
        <p>Ganz nah ran gehen, reinzoomen, Blende ganz auf.</p>
        <p>Dann sollte der Zaun nicht zu sehen sein.</p>

        <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
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

        <button class="btn marBtn backBtn" onclick="showContent('tips')">Zurück</button>
    `
}
