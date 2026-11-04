# Chalii Themes — Helix

Premium light and dark themes for [Helix](https://helix-editor.com) with warm
orange accents and excellent readability.

## Variants

- `chalii_light`
- `chalii_dark`

## Install (manual)

Copy both `.toml` files into Helix's user themes directory:

```bash
mkdir -p ~/.config/helix/themes
cp chalii_light.toml chalii_dark.toml ~/.config/helix/themes/
```

Then activate in `~/.config/helix/config.toml`:

```toml
theme = "chalii_dark"
# or
theme = "chalii_light"
```

Or live-pick via Helix's command palette: `:theme chalii_dark`.

## Source of truth

Generated from `source/palette.json`. Regenerate with:

```bash
npm run build:helix
```
