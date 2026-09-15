# Vertainen-sivusto

Staattinen sivu GitHub Pagesille (`html` + `css` + `js`). Ei seurantaa, ei evästeitä.
Fontit (Newsreader, Source Sans 3) on self-hostattu kansiossa `css/fonts/`.
Julkinen osoite: [https://vertainen.com](https://vertainen.com).

## Tietosuoja

- [tietosuoja.html](tietosuoja.html) — tietosuojaseloste (Play Store / GDPR)
- [kayttoehdot.html](kayttoehdot.html) — lyhyet käyttöehdot

Rekisterinpitäjän sähköposti: `vertainen.app@gmail.com`.
Evästebanneria ei ole, koska sivusto ei aseta evästeitä eikä lataa kolmansien osapuolten seurantaa.

## Sovelluskuvat

Sivulla käytetään kuvia `Vertaistuki1.jpeg`, `Vertaistuki2.jpeg`, `Ilmoitus.jpeg`,
`Keskustelut1.jpeg`, `Chat.jpeg` ja `AITuki.jpeg` kansiosta `images/`.

Latausosiossa on pysyvä, valmista latausta kuvaava CSS-animaatio. Se pidetään liikkeessä myös
`prefers-reduced-motion`-tilassa eikä lataa ulkoisia kuva- tai skriptitiedostoja.

## Myöhemmin: latauslinkit

`#lataa`-osion napit ovat `disabled`. Kun URL on valmis:

1. Vaihda `button` linkiksi `<a class="btn …" href="https://…">`.
2. Poista `disabled` ja `aria-disabled`.
3. Poista tai jätä pois “Tulossa”-merkintä.

Esimerkki:

```html
<a class="btn btn-primary" href="https://play.google.com/store/apps/details?id=…">Google Play</a>
```

