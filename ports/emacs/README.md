# Chalii Themes — Emacs

## Install (manual)

Copy both `.el` files into a directory on your `custom-theme-load-path`,
e.g. `~/.emacs.d/themes/`, and load:

```elisp
(add-to-list 'custom-theme-load-path "~/.emacs.d/themes/")
(load-theme 'chalii-dark t)
;; or
(load-theme 'chalii-light t)
```

## Install (use-package + straight.el)

```elisp
(use-package chalii-themes
  :straight (:host github :repo "chaliidesigns/chalii-themes" :files ("ports/emacs/*.el"))
  :config (load-theme 'chalii-dark t))
```

## Coverage

Core faces, font-lock, line numbers, mode-line, region, isearch, hl-line,
diff/ediff, magit, company/corfu, flycheck/flymake, org-mode.

## Source of truth

Generated from `source/palette.json`. Regenerate with `npm run build:emacs`.
