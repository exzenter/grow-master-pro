import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Rechtliches</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
            <p className="text-xl text-muted-foreground">
              Informationen zum Umgang mit Ihren personenbezogenen Daten
            </p>
          </div>
          
          <Card className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-semibold mb-2">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">Datenerfassung auf dieser Website</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="text-muted-foreground mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <p className="text-muted-foreground mb-2">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p className="text-muted-foreground mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              
              <p className="text-muted-foreground mb-2">
                <strong>Wofür nutzen wir Ihre Daten?</strong>
              </p>
              <p className="text-muted-foreground mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              
              <p className="text-muted-foreground mb-2">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              </p>
              <p className="text-muted-foreground">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Hosting</h2>
              <p className="text-muted-foreground mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3 className="text-lg font-semibold mb-2">Externes Hosting</h3>
              <p className="text-muted-foreground">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln. Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-semibold mb-2">Datenschutz</h3>
              <p className="text-muted-foreground mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              
              <h3 className="text-lg font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                Premium Erde<br />
                E-Mail: info@premium-erde.de
              </p>
              <p className="text-muted-foreground">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.Ä.) entscheidet.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-semibold mb-2">Kontaktformular</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
              <p className="text-muted-foreground">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Anfrage per E-Mail</h2>
              <p className="text-muted-foreground">
                Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Ihre Rechte</h2>
              <p className="text-muted-foreground mb-4">
                Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Recht auf Auskunft</strong> – Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                <li><strong>Recht auf Berichtigung</strong> – Sie können die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
                <li><strong>Recht auf Löschung</strong> – Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</li>
                <li><strong>Recht auf Einschränkung der Verarbeitung</strong> – Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</li>
                <li><strong>Recht auf Datenübertragbarkeit</strong> – Sie können verlangen, dass wir Ihnen Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format übermitteln.</li>
                <li><strong>Widerspruchsrecht</strong> – Sie können der Verarbeitung Ihrer personenbezogenen Daten widersprechen.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-muted-foreground">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </section>
            
            <section className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Stand: Dezember 2024
              </p>
            </section>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;
