# RI-TRGARS investigation page

A minimal black-and-white ARG web page. Only the phrase is visible.

## Publishing to Cloudflare

Upload all three web files (`index.html`, `style.css`, `trace.js`) to the repository root. Your Cloudflare deployment should serve `index.html`.

## Player pathway (SPOILERS)

1. Notice the unusual capitals in the sentence, which spell TRGAR. This is the intended Vigenère key for the separate Pastebin ciphertext.
2. Inspect the phrase: `data-trace="records"`.
3. Inspect `style.css` and find `--record-prefix: "https://";`.
4. Inspect `trace.js` in Sources: `pastebin`, `.com/`, and `['vty', 'hun', 'JK']`.
5. Combine fragments in that order to get https://pastebin.com/vtyhunJK.

The Pastebin content is not changed by this website. To make stage two function, manually encrypt your chosen message with Vigenère key `TRGAR` and replace the content at that Pastebin URL.

This is a puzzle, not a secure way to conceal information: anyone with file access can read all fragments.
