# Chalii Themes — Neovim & Vim

Premium light and dark colorschemes for Neovim (≥0.9 recommended for full
Treesitter / LSP semantic token support) and Vim (8+ with `termguicolors`).

## Variants

- `chalii-light`
- `chalii-dark`

## Install (Neovim)

### lazy.nvim

```lua
{
  "chaliidesigns/chalii-themes",
  -- The Neovim plugin lives under ports/neovim/ in this monorepo.
  -- If you install from the dedicated mirror once published, drop the `dir`.
  config = function()
    require("chalii").setup({
      variant = "auto",        -- "light" | "dark" | "auto" (follows &background)
      transparent = false,
      italic_comments = true,
      italic_keywords = false,
      terminal_colors = true,
    })
    vim.cmd.colorscheme("chalii-dark")
  end,
}
```

### packer.nvim

```lua
use({
  "chaliidesigns/chalii-themes",
  config = function()
    require("chalii").setup({})
    vim.cmd.colorscheme("chalii-dark")
  end,
})
```

### vim-plug

```vim
Plug 'chaliidesigns/chalii-themes'

" then in your init:
lua require("chalii").setup({})
colorscheme chalii-dark
```

## Install (Vim)

Vim doesn't load Lua — use the `.vim` fallback colorschemes instead:

```vim
set termguicolors
colorscheme chalii-dark
" or
colorscheme chalii-light
```

The `.vim` files include 256-color (cterm) approximations for terminals
without true-color support.

## Configuration

```lua
require("chalii").setup({
  variant = "auto",          -- light | dark | auto
  transparent = false,        -- transparent editor / sidebar / panel
  italic_comments = true,
  italic_keywords = false,
  terminal_colors = true,     -- set vim.g.terminal_color_0..15
})
```

## Coverage

- Neovim built-in highlight groups
- Treesitter `@` capture groups
- LSP semantic tokens (`@lsp.type.*`, `@lsp.typemod.*`)
- Diagnostics (signs, virtual text, undercurl)
- gitsigns.nvim
- telescope.nvim
- nvim-tree, neo-tree
- lualine helper groups

## Source of truth

Generated from `source/palette.json`. Regenerate with:

```bash
npm run build:neovim
```
