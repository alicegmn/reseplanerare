# Reseplaneraren

## Starta applikationen lokalt

Följ dessa steg för att starta applikationen lokalt med terminalen:

1. **Klona projektet från GitHub**

   ```bash
   git clone <repo-url>
   ```

   Byt ut `<repo-url>` mot URL:en till GitHub-repot.

2. **Navigera till projektmappen**

   ```bash
   cd <mappnamn>
   ```

   Byt ut `<mappnamn>` mot mappen som innehåller projektet.

3. **Installera beroenden**
   På grund av att det finns en `package-lock.json`, kör följande kommando:

   ```bash
   npm install
   ```

4. **Starta utvecklingsservern**

   ```bash
   npm run dev
   ```

5. **Öppna utvecklingsservern i webbläsaren**
   När servern startar visas en URL i terminalen som ser ut ungefär så här:
   ```
   http://localhost:5173
   ```
   Öppna den URL:en i din webbläsare.

---

## Använda applikationen

I **Reseplaneraren** kan du:

- Skriva in dina resplaner och samla dem i en lista för att komma ihåg dem.
- Ange namn, datum och plats för varje resplan.

Denna funktionalitet hjälper dig att organisera och hålla koll på dina kommande resor på ett enkelt sätt.
