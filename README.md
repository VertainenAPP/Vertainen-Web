# Vertainen-sivusto

Staattinen sivu GitHub Pagesille (`html` + `css` + `js`). Ei seurantaa, ei evästeitä.
Fontit (Newsreader, Source Sans 3) on self-hostattu kansiossa `css/fonts/`.
Julkinen osoite: [https://vertainen.com](https://vertainen.com).

## SEO

- [robots.txt](robots.txt) — crawler-sallinta + sitemap-viittaus
- [sitemap.xml](sitemap.xml) — etusivu, tietosuoja, käyttöehdot

Kun HTTPS on vakaa, lisää Search Consoleen property `https://vertainen.com` ja submitoi sitemap: `https://vertainen.com/sitemap.xml`.
Sometunnuksia / OG-kuvaa ei ole vielä; Twitter-card on `summary` ilman `twitter:site`.

## GEO (Generative Engine Optimization)

Tavoite: siteerattavuus AI-vastauksissa (esim. AI Overviews, Perplexity), ei vain klassinen SEO.

Toteutettu:

- FAQPage JSON-LD = näkyvä UKK (`#ukk`)
- Organization + WebSite + MobileApplication (ei `sameAs` — someja ei ole)
- Siteerattavat faktat: 16+, E2EE, maksuton; ulkoiset linkit MIELI (`mieli.fi`) ja tietosuoja.fi
- [llms.txt](llms.txt) — lyhyt koneelle luettava yhteenveto

Lähteet:

- [Aggarwal et al., GEO (Princeton / ACM KDD 2024)](https://arxiv.org/abs/2311.09735) — cite sources, quotations, statistics
- [Google Search Central: Succeeding in AI Search](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search) — people-first, structured data = visible content

Ei keksittyjä käyttäjätilastoja. Pushin jälkeen voit testata kysymyksellä “Mikä on Vertainen-sovellus?”.

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

## Paikallinen esikatselu

Avaa `index.html` selaimessa tai tarjoile kansio (esim. `npx serve`).
