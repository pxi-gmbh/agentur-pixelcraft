# agentur-pixelcraft

## Codekit
**wichtig:** Codekit vor *commit* pausieren
### Synchronisierung
Die Datei **config.codekit3** sorgt dafür, dass alle Einstellungen, die in Codekit gemacht werden, auch über Github synchronisert werden. Wird das Projekt bei Codekit als *Projekt* geöffnet, sind also auch alle Einstellungen mit dabei.

### Ordnerstruktur
Die Dateien sind in zwei Ordner sortiert: **build** und **source**.
In **build** befinden sich die fertigen, verarbeiteten Dateien. Der Inhalt des Ordners stellt die fertige Webseite dar, kann also direkt auf den Server der Seite hochgeladen bzw. damit synchronisiert werden.

In **source** stecken die unfertigen Dateien, die erst noch verarbeitet werden müssen. Zum Beispiel .md oder .kit. Das Ergebnis der Verarbeitung durch Codekit landet dann in **build**.

### Dateien
**.kit** Dateien sind **html** Dateien, die besondere Kommentare zulassen. So lässt sich beispielsweise `<!-- @include "_includes/_itf-header.html" -->` in eine **.kit** Datei schreiben. Ist eine **.html** Ausgabedatei für *compile* festgelegt, sorgt dieser Kommentar dafür, dass `_itf-header.html` in dem verarbeiteten Dokument an die entsprechende Stelle eingefügt ist.

### Dateibenennung
Dateien mit `_`vor dem Dateinamen werden von Codekit standardmäßig ignoriert. Das ist gut, wenn diese Dateien zwar zum Beispiel über eine **.kit** Datei geladen werden, aber nicht nicht selbst verarbeitet werden sollen.

**.md** Dateien müssen aber verarbeitet werden, bevor sie in eine Datei geladen werden können, sonst erscheint der Text als Text ohne Auszeichnungen. Damit Auszeichnungen als solche übernommen werden, muss Codekit erst die **.md** Datei in eine **.html** Datei umwandeln. Über die Einstellungen bei Codekit lässt sich der Umgang mit **.md** Dateien generell handhaben. Es muss also nicht bei jeder **.md** Datei auf *compile* geklickt werden. Fängt die Datei mit `_` an, wird sie aber trotzdem ignoriert und müsste mit Klick auf *compile* einzeln umgewandelt werden.
