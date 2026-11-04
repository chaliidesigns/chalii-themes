# Chalii Themes — WezTerm

## Install

Drop `chalii.lua` somewhere on Lua's `package.path`, e.g.
`~/.config/wezterm/colors/chalii.lua`, then in `~/.config/wezterm/wezterm.lua`:

```lua
local wezterm = require('wezterm')
local chalii = require('colors.chalii')

return {
    color_schemes = chalii,
    color_scheme = 'Chalii Dark', -- or 'Chalii Light'
}
```

## Source of truth

Generated from `source/palette.json`. Regenerate with `npm run build:wezterm`.
