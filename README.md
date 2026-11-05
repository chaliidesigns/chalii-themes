<p align="center">
  <img src="images/icon.png" alt="Chalii Themes" width="120" height="120">
</p>

<h1 align="center">Chalii Themes</h1>

<p align="center">
  A premium light + dark theme family with warm orange accents - shipping to <strong>20+ editors, IDEs, terminals and apps</strong> from a single source palette.<br>
  Generated, contrast-checked and validated on every commit.
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=makindajack.chalii-themes">🛒 Marketplace</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-quick-start">🚀 Quick Start</a> •
  <a href="#-compatible-editors">🧩 Compatible Editors</a> •
  <a href="#-activate-a-theme">🎛️ Activate</a> •
  <a href="#-screenshots">📸 Screenshots</a> •
  <a href="CHANGELOG.md">📝 Changelog</a>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=makindajack.chalii-themes">
    <img alt="Version" src="https://vsmarketplacebadges.dev/version-short/makindajack.chalii-themes.svg?style=for-the-badge&labelColor=0e0e0f&color=f05106">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=makindajack.chalii-themes">
    <img alt="Installs" src="https://vsmarketplacebadges.dev/installs-short/makindajack.chalii-themes.svg?style=for-the-badge&labelColor=0e0e0f&color=f05106">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=makindajack.chalii-themes">
    <img alt="Rating" src="https://vsmarketplacebadges.dev/rating-short/makindajack.chalii-themes.svg?style=for-the-badge&labelColor=0e0e0f&color=f05106">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/VS%20Code-%5E1.74-007ACC?logo=visualstudiocode" alt="VS Code">
  <img src="https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Shiki-4-f05106" alt="Shiki">
  <img src="https://img.shields.io/badge/Playwright-1.64-2EAD33?logo=playwright" alt="Playwright">
  <img src="https://img.shields.io/badge/Ports-24-f05106" alt="24 ports">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT">
</p>

---

## 🌟 Highlights

- 🎨 **One palette, every editor** - `source/palette.json` + `source/tokens.json` generate VS Code, JetBrains, Sublime, Zed, Neovim, Xcode, Helix, terminals, Slack, Discord and Obsidian
- ☀️🌙 **Two complementary variants** - Chalii Light and Chalii Dark share the same brand language so switching keeps your code visually consistent
- ✅ **Contrast-checked** - `npm run contrast` verifies WCAG ratios for text, comments, types, sidebar and status-bar pairs on every CI run
- 🔍 **Strictly validated** - theme JSON is checked for unknown keys and bad colours (`npm run validate:strict`) before anything ships
- 🚢 **Tag-to-release pipeline** - pushing `v*` packages the VSIX, publishes to the VS Code Marketplace + Open VSX, and attaches a ports archive to a GitHub Release

## ✨ Features

This extension ships **two** complementary themes:

- **Chalii Light** - Clean white editor with subtle gray sidebars, warm orange accents, and high-contrast syntax highlighting for long, comfortable coding sessions.
- **Chalii Dark** - Deep `#0e0e0f` background with vibrant orange accents, purple types, and teal strings. 140+ token scopes and 200+ UI color definitions.

### Color Palette

| Element            | Chalii Light | Chalii Dark |
| ------------------ | ------------ | ----------- |
| Brand Orange       | `#e65800`    | `#ff711a`   |
| Functions          | `#e65800`    | `#ff9452`   |
| Keywords           | `#b34400`    | `#ff711a`   |
| Types / Classes    | `#6b26c0`    | `#a26ee2`   |
| Strings            | `#0d7377`    | `#2dd4bf`   |
| Comments           | `#71717a`    | `#7d8593`   |
| Editor Background  | `#ffffff`    | `#0e0e0f`   |
| Sidebar Background | `#fafafa`    | `#0e0e0f`   |

## 🚀 Quick Start

### From VS Code Marketplace

1. Open the **Extensions** sidebar: `View → Extensions`
2. Search for `Chalii Themes`
3. Click **Install**

### From the command line

```bash
code --install-extension makindajack.chalii-themes
```

### Manual installation

1. Download the latest `.vsix` from [Releases](https://github.com/chaliidesigns/chalii-themes/releases)
2. In VS Code, run `Extensions: Install from VSIX...` from the Command Palette and pick the file.

### Develop locally

```bash
npm install
npm run build     # regenerate themes/ and every port under ports/
npm run check     # strict validation + contrast check
npm run package   # build a .vsix with vsce
```

## 🎛️ Activate a Theme

Open the Color Theme picker:

- macOS: `⌘K ⌘T`
- Windows / Linux: `Ctrl+K Ctrl+T`

Select **Chalii Light** or **Chalii Dark**.

To have VS Code switch automatically with your OS appearance, enable `window.autoDetectColorScheme` and set:

```json
{
  "window.autoDetectColorScheme": true,
  "workbench.preferredLightColorTheme": "Chalii Light",
  "workbench.preferredDarkColorTheme": "Chalii Dark"
}
```

## 🧩 Compatible Editors

Chalii is generated from a single `source/palette.json` and ports to every major editor, IDE, terminal, and chat/notes app.

### Code editors & IDEs

| Editor                     | Format                  | Install                                                   |
| -------------------------- | ----------------------- | --------------------------------------------------------- |
| **VS Code**                | `*.color-theme.json`    | `code --install-extension makindajack.chalii-themes`     |
| **Cursor**                 | (VS Code theme)         | `cursor --install-extension makindajack.chalii-themes`   |
| **Windsurf**               | (Open VSX)              | `windsurf --install-extension makindajack.chalii-themes` |
| **VSCodium / code-server** | (Open VSX)              | `codium --install-extension makindajack.chalii-themes`   |
| **JetBrains IDEs**         | `.icls` + `.theme.json` | [ports/jetbrains/](ports/jetbrains/)                      |
| **Sublime Text**           | `.sublime-color-scheme` | [ports/sublime/](ports/sublime/) · [chalii-sublime](https://github.com/chaliidesigns/chalii-sublime) |
| **Zed**                    | Zed theme JSON          | [ports/zed/](ports/zed/) · [chalii-zed](https://github.com/chaliidesigns/chalii-zed) |
| **Neovim**                 | Lua + Vim fallback      | [ports/neovim/](ports/neovim/)                            |
| **Xcode**                  | `.xccolortheme` plist   | [ports/xcode/](ports/xcode/)                              |
| **Helix**                  | TOML                    | [ports/helix/](ports/helix/)                              |
| **Visual Studio**          | `.vssettings`           | [ports/visual-studio/](ports/visual-studio/)              |
| **Eclipse**                | `.epf`                  | [ports/eclipse/](ports/eclipse/)                          |
| **Emacs**                  | `deftheme` `.el`        | [ports/emacs/](ports/emacs/)                              |
| **TextMate**               | `.tmTheme` plist        | [ports/textmate/](ports/textmate/)                        |
| **BBEdit**                 | `.bbcolors` plist       | [ports/bbedit/](ports/bbedit/)                            |
| **Nova**                   | `.novaextension`        | [ports/nova/](ports/nova/)                                |
| **Lapce**                  | TOML                    | [ports/lapce/](ports/lapce/)                              |
| **Notepad++**              | XML                     | [ports/notepad-plus-plus/](ports/notepad-plus-plus/)      |

### Terminals

| Terminal             | Format         | Path                                               |
| -------------------- | -------------- | -------------------------------------------------- |
| **iTerm2**           | `.itermcolors` | [ports/iterm2/](ports/iterm2/)                     |
| **Warp**             | YAML           | [ports/warp/](ports/warp/)                         |
| **Alacritty**        | TOML           | [ports/alacritty/](ports/alacritty/)               |
| **Kitty**            | `.conf`        | [ports/kitty/](ports/kitty/)                       |
| **WezTerm**          | Lua            | [ports/wezterm/](ports/wezterm/)                   |
| **Ghostty**          | config snippet | [ports/ghostty/](ports/ghostty/)                   |
| **Windows Terminal** | JSON snippet   | [ports/windows-terminal/](ports/windows-terminal/) |

### Chat / notes

| App                         | Format         | Path                               |
| --------------------------- | -------------- | ---------------------------------- |
| **Slack**                   | sidebar string | [ports/slack/](ports/slack/)       |
| **Discord** (BetterDiscord) | CSS            | [ports/discord/](ports/discord/)   |
| **Obsidian**                | CSS theme      | [ports/obsidian/](ports/obsidian/) · [chalii-obsidian](https://github.com/chaliidesigns/chalii-obsidian) |

See [docs/INSTALLATION.md](docs/INSTALLATION.md) for editor-by-editor walkthroughs and [docs/IDES.md](docs/IDES.md) for the full status matrix.

## ⚙️ Recommended Settings

### Icon Themes

Pair Chalii Themes with the companion **[Chalii Icons](https://marketplace.visualstudio.com/items?itemName=makindajack.chalii-icons)** pack - file and product icons colour-tuned to this palette:

```json
{
  "workbench.colorTheme": "Chalii Dark",
  "workbench.iconTheme": "chalii-file-icons-solid",
  "workbench.productIconTheme": "chalii-product-icons-solid"
}
```

Other packs that also pair well:

- [Material Product Icons](https://marketplace.visualstudio.com/items?itemName=PKief.material-product-icons) by Philipp Kief
- [Nomo Light Icon Theme](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-icontheme-nomo-light) - pairs well with Chalii Light
- [Nomo Dark Icon Theme](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-icontheme-nomo-dark) - pairs well with Chalii Dark

### Font Recommendations

```json
{
  "editor.fontFamily": "'Fira Code', 'JetBrains Mono', Menlo, Monaco, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 1.5
}
```

## 📸 Screenshots

### Chalii Light

<p align="center">
  <img src="images/light-typescript.png" alt="Chalii Light - TypeScript" width="800">
</p>
<p align="center">
  <img src="images/light-python.png" alt="Chalii Light - Python" width="400">
  <img src="images/light-rust.png" alt="Chalii Light - Rust" width="400">
</p>
<p align="center">
  <img src="images/light-go.png" alt="Chalii Light - Go" width="400">
  <img src="images/light-markdown.png" alt="Chalii Light - Markdown" width="400">
</p>
<p align="center">
  <img src="images/light-json.png" alt="Chalii Light - JSON" width="400">
  <img src="images/light-html.png" alt="Chalii Light - HTML" width="400">
</p>

### Chalii Dark

<p align="center">
  <img src="images/dark-typescript.png" alt="Chalii Dark - TypeScript" width="800">
</p>
<p align="center">
  <img src="images/dark-python.png" alt="Chalii Dark - Python" width="400">
  <img src="images/dark-rust.png" alt="Chalii Dark - Rust" width="400">
</p>
<p align="center">
  <img src="images/dark-go.png" alt="Chalii Dark - Go" width="400">
  <img src="images/dark-markdown.png" alt="Chalii Dark - Markdown" width="400">
</p>
<p align="center">
  <img src="images/dark-json.png" alt="Chalii Dark - JSON" width="400">
  <img src="images/dark-html.png" alt="Chalii Dark - HTML" width="400">
</p>

Screenshots are rendered with Shiki + Playwright via `npm run screenshots`.

## 📦 Scripts

| Script                     | Description                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| `npm run build`            | Generate the VS Code themes and every port from `source/`        |
| `npm run build:<port>`     | Generate a single port (`vscode`, `jetbrains`, `sublime`, `zed`, `neovim`, `xcode`, `helix`, `textmate`, `emacs`, `notepad-plus-plus`, `visual-studio`, `eclipse`, `bbedit`, `nova`, `lapce`, `alacritty`, `kitty`, `warp`, `wezterm`, `ghostty`, `windows-terminal`, `iterm2`, `slack`, `discord`, `obsidian`) |
| `npm run validate`         | Validate theme JSON (`:strict` fails on warnings, `:json` for machine output) |
| `npm run contrast`         | WCAG contrast report for both variants (`:strict` to fail on advisories) |
| `npm run check`            | `validate:strict` + `contrast`                                   |
| `npm run screenshots`      | Render the README screenshots with Shiki + Playwright            |
| `npm run package`          | Build the `.vsix` with vsce                                      |
| `npm run publish`          | Publish to the VS Code Marketplace with vsce                     |
| `npm run release <ver>`    | Bump the version, update ports, commit and tag `v<ver>`          |

## 🏗️ Structure

```
chalii-themes/
├── source/
│   ├── palette.json            # Single source of truth for every colour
│   ├── tokens.json             # Syntax token → palette role mapping
│   ├── design-tokens.json      # Design-token export of the palette
│   └── vscode/                 # VS Code-specific UI colour mapping
├── themes/                     # Generated VS Code themes (Chalii Light / Dark)
├── build/
│   ├── index.mjs               # Runs every generator
│   ├── validate.mjs            # Theme JSON validation
│   ├── contrast.mjs            # WCAG contrast checks
│   ├── screenshots.mjs         # Shiki + Playwright screenshot renderer
│   ├── release.mjs             # Version bump + tag helper
│   ├── lib/resolve.mjs         # Palette/token resolution shared by all ports
│   └── <port>.mjs              # One generator per editor / terminal / app
├── ports/                      # Generated ports (24 targets)
├── docs/                       # Installation, IDE matrix, contributing, publishing
├── images/                     # Extension icon + screenshots
└── .github/workflows/          # ci.yml (validate, contrast, build, lint) · release.yml
```

## 🚀 Deployment

- **CI** (`ci.yml`) runs on every push/PR: install → `validate:strict` → `contrast` → `build` → lint Xcode plists → validate JSON/TOML outputs.
- **Release** (`release.yml`) runs on a `v*` tag: packages the VSIX with `@vscode/vsce`, publishes to the VS Code Marketplace (`VSCE_PAT`) and Open VSX (`OVSX_PAT`), and creates a GitHub Release with the `.vsix` and a `ports/` tarball.

```bash
npm run release 1.2.0        # bump + commit + tag
git push --follow-tags       # triggers release.yml
```

See [docs/PUBLISHING.md](docs/PUBLISHING.md) for the full checklist.

## 🔄 Migrating from `chalii-dark`

The standalone `makindajack.chalii-dark` extension is deprecated as of `1.0.1`. Both themes are now bundled in `makindajack.chalii-themes`.

1. Install `makindajack.chalii-themes`.
2. Uninstall `makindajack.chalii-dark`.
3. Open the Color Theme picker and re-select **Chalii Dark**.

Your settings and theme preference will be preserved.

## 📚 Documentation

- [Installation Guide](docs/INSTALLATION.md)
- [IDE & Port Status](docs/IDES.md)
- [Theme Design Notes](docs/THEMES.md)
- [Development](docs/DEVELOPMENT.md)
- [Publishing Guide](docs/PUBLISHING.md)
- [Contributing](docs/CONTRIBUTING.md)

## 🤝 Contributing

Contributions are welcome. Please read the [Contributing Guide](docs/CONTRIBUTING.md) before opening issues or pull requests.

## 📄 License

[MIT](LICENSE) © Jackson Makinda

## 👤 Author

**Chalii Designs** - design & engineering studio by Jackson Makinda - [makindajackson.com](https://makindajackson.com)

- 📧 Email: me@makindajackson.com
- 💼 LinkedIn: [Jackson Makinda](https://linkedin.com/in/makindajack)
- 🎨 Dribbble: [@makindajack](https://dribbble.com/makindajack)
- 🐦 Twitter: [@makindajack](https://twitter.com/makindajack)

---

Built with ❤️ in Dar es Salaam, Tanzania 🇹🇿
