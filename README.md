# Reseplaneraren

## Starta applikationen lokalt

Följ dessa steg för att starta applikationen lokalt med terminalen:

1. **Klona projektet från GitHub**

   ```bash
   git clone https://github.com/alicegmn/reseplanerare
   ```

2. **Navigera till projektmappen**

   ```bash
   cd reseplanerare
   ```


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
   http://localhost:????
   ```
   Öppna URL:en du får i terminalen i din webbläsare.

# Reseplaneraren v2.0

Reseplaneraren v2.0 är en interaktiv React-applikation som gör det enkelt att organisera resor och aktiviteter. 

## Funktioner

- **Lägga till aktiviteter**: Använd formuläret för att lägga till aktiviteter med information om namn, plats, datum och typ.
- **Redigera aktiviteter**: Klicka på "Redigera" för att ändra en befintlig aktivitet.
- **Ta bort aktiviteter**: Klicka på "Radera" för att ta bort en aktivitet från listan.
- **Sortering efter datum**: Aktiviteter sorteras automatiskt så att den närmaste aktiviteten visas överst.
- **Spara data i LocalStorage**: Alla aktiviteter sparas mellan sidladdningar.
- **Responsiv design**: Applikationen fungerar på både mobila enheter och desktop.

---

## Reflektion kring användningen av `useState` och `useEffect`

### **Användning av `useState`**
`useState` används för att hantera lokalt state i applikationen:

- **Formulärdata**: Varje fält i formuläret hanteras med `useState` för att uppdatera dess värde dynamiskt.
- **Aktivitetslista**: `activityList` används för att lagra och hantera listan med aktiviteter, inklusive att lägga till, redigera och ta bort aktiviteter.
- **Felmeddelanden**: En state-variabel används för att visa dynamiska felmeddelanden om användaren försöker skicka in ett tomt formulär.

### **Användning av `useEffect`**
`useEffect` används för att utföra effekter som är beroende av state:

- **Laddning av data från `localStorage`**: Vid första renderingen hämtas `activityList` från `localStorage`.
- **Sparande till `localStorage`**: Varje gång `activityList` ändras, sparas den automatiskt till `localStorage`.
- **Validering**: `useEffect` används för att logga ändringar i state, vilket underlättar felsökning och spårning av dataflödet.

---

### **Vad vi har lärt oss**
- **State Management med hooks**: `useState` är kraftfullt för att hantera lokalt state, men kräver att man är noggrann med att inte mutera state direkt.
- **Effekthantering**: `useEffect` är ett effektivt sätt att hantera sidoeffekter som att synkronisera state med `localStorage`.
- **Strukturering av React-appar**: Separera logik i komponenter för att hålla koden lättläst och underhållbar.

---

## Utvecklingsmöjligheter

- Implementera sökning eller filtrering av aktiviteter baserat på kriterier som namn eller plats.
- Lägg till en laddningsindikator som visas när aktiviteter hämtas från `localStorage`.
- Hämta data från ett API för att fylla på aktivitetslistan med förslag eller tidigare inlagda aktiviteter.
- Skapa en custom hook för att hantera `localStorage`-logiken och återanvända den i andra delar av applikationen.

---

## Filstruktur

```plaintext
/src
  /components
    ActivityForm.tsx      // Komponent för formuläret
    ActivityItem.tsx      // Komponent för enskilda aktiviteter
  /interfaces
    interfaces.ts         // Typer och gränssnitt
  App.tsx                 // Huvudkomponent för applikationen
  index.tsx               // Inmatningsfil för React
