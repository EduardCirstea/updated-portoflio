# Portfolio Full Stack Developer

Un portofoliu modern și interactiv pentru dezvoltatori full stack, construit cu Next.js, TypeScript, Tailwind CSS și Framer Motion.

## 🚀 Caracteristici

- **Design Modern**: Interface clean și elegant cu nuanțe de alb și animații fluide
- **Responsive**: Perfect adaptat pentru toate dimensiunile de ecran
- **Animații Interactive**: Folosește Framer Motion pentru experiențe captivante
- **Proiecte Dinamice**: Sistem de management al proiectelor prin JSON
- **Pagini Individuale**: Fiecare proiect are propria pagină detaliată
- **Formular de Contact**: Contact funcțional cu validare
- **SEO Optimizat**: Metadata și structură optimizată pentru motoarele de căutare

## 🛠️ Tehnologii Folosite

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS cu clase custom
- **Animații**: Framer Motion
- **Icoane**: Lucide React
- **Fonts**: Google Fonts (Inter)

## 📁 Structura Proiectului

```
portofoliu/
├── app/
│   ├── globals.css          # Stiluri globale
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Pagina principală
│   └── projects/
│       └── [id]/
│           └── page.tsx     # Pagina individuală pentru proiecte
├── components/
│   ├── Navigation.tsx       # Bara de navigație
│   ├── Hero.tsx            # Secțiunea hero
│   ├── About.tsx           # Secțiunea despre
│   ├── Projects.tsx        # Secțiunea proiecte
│   └── Contact.tsx         # Secțiunea contact
├── data/
│   └── projects.json       # Date pentru proiecte
└── public/
    └── cv.pdf              # CV pentru download
```

## 🚀 Instalare și Rulare

1. **Clonează repository-ul**:
```bash
git clone <repository-url>
cd portofoliu
```

2. **Instalează dependențele**:
```bash
npm install
```

3. **Pornește serverul de dezvoltare**:
```bash
npm run dev
```

4. **Deschide în browser**:
Accesează [http://localhost:3000](http://localhost:3000)

## 📝 Personalizare

### 1. Modifică Informațiile Personale

Editează componentele pentru a actualiza:
- **Hero.tsx**: Numele, titlul și descrierea
- **About.tsx**: Povestea personală și statisticile
- **Contact.tsx**: Informațiile de contact

### 2. Adaugă Proiecte Noi

Editează `data/projects.json` și adaugă noi proiecte:

```json
{
  "id": "7",
  "title": "Numele Proiectului",
  "description": "Descriere scurtă",
  "longDescription": "Descriere detaliată...",
  "image": "https://link-catre-imagine.jpg",
  "technologies": ["React", "Node.js", "MongoDB"],
  "github": "https://github.com/username/project",
  "demo": "https://project-demo.com",
  "category": "Full Stack",
  "featured": true,
  "completedAt": "2024-01-15"
}
```

### 3. Actualizează Culorile

Modifică `tailwind.config.js` pentru a schimba paleta de culori:

```javascript
colors: {
  primary: {
    // Culorile principale
  },
  accent: {
    // Culorile accent
  }
}
```

### 4. Adaugă CV-ul

Plasează fișierul CV în folderul `public/` cu numele `cv.pdf`.

## 📱 Secțiuni Principale

### 🏠 Hero Section
- Mesaj de întâmpinare personal
- Call-to-action buttons
- Link-uri sociale
- Animații de fundal

### 👤 About Section
- Povestea personală
- Statistici impressive
- Abilitățile organizate pe categorii
- Design cu carduri interactive

### 💼 Projects Section
- Proiecte recomandate (featured)
- Sistem de filtrare pe categorii
- Grid responsive
- Link-uri către pagini individuale

### 📞 Contact Section
- Formular funcțional de contact
- Informații de contact
- Link-uri sociale
- Validare pentru câmpuri

### 📄 Individual Project Pages
- Detalii complete despre proiect
- Galerie de imagini
- Tehnologii folosite
- Link-uri către demo și cod
- Sugestii pentru alte proiecte

## 🎨 Design Features

- **Glass Effect**: Efecte moderne cu blur și transparență
- **Gradient Text**: Text cu gradient pentru accent
- **Hover Effects**: Animații la hover pentru interactivitate
- **Smooth Animations**: Tranziții fluide între secțiuni
- **Custom Scrollbar**: Scrollbar personalizat
- **Responsive Grid**: Layout adaptiv pentru toate dispozitivele

## 🚀 Deploy

### Vercel (Recomandat)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Urmează instrucțiunile pentru Netlify
```

## 📞 Support

Pentru întrebări sau probleme, contactează-mă la:
- Email: contact@example.com
- LinkedIn: [Profilul tău LinkedIn]
- GitHub: [Profilul tău GitHub]

## 📄 Licență

Acest proiect este licențiat sub MIT License. Vezi fișierul [LICENSE](LICENSE) pentru detalii.

---

**Construit cu ❤️ și Next.js** 