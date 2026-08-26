# Kian Lee — Leaving Cert Grinds

A simple English landing page for private Leaving Cert grinds and violin lessons.

**Live site:** [https://kianleeucd.github.io/grinds/](https://kianleeucd.github.io/grinds/)

## Editing page content

Each main section has its own file:

- `sections/hero.html` — top headline, summary, and key facts
- `sections/subjects.html` — subjects and lesson descriptions
- `sections/about.html` — biography and achievements
- `sections/music.html` — violin, singer-songwriter, Instagram, and TikTok
- `sections/contact.html` — enquiry copy and buttons

After editing a section, rebuild the published page:

```bash
python3 build.py
```

`index.html` is generated. Edit `templates/page.html` for site-wide metadata, navigation, or the footer, and `styles.css` for design.

## Subjects

- Maths
- Applied Maths
- Physics
- Chemistry
- French
- Music
- Violin

Enquiries: WhatsApp `083 312 1229` or `kian.lee.clonard@gmail.com`.

## GitHub Pages

The site is hosted from the `main` branch of `KianLeeUCD/grinds` (root folder). Updates should be made and pushed as **KianLeeUCD**.

## Local preview

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`
