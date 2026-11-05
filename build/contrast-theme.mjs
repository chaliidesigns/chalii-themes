#!/usr/bin/env node
/**
 * Contrast audit of the built VS Code themes (WCAG 2.1).
 *
 * build/contrast.mjs checks palette roles. This script checks what users
 * actually see: the generated themes/*.json files. It covers syntax colors on
 * the editor background, text-on-fill pairs across the workbench, brackets,
 * terminal colors and a few visibility checks for highlights.
 *
 *   text, syntax, brackets ........ 4.5 : 1
 *   icons, borders, focus ring .... 3.0 : 1
 *   highlights, guides, scrollbar . advisory (minimum visible difference)
 *
 * Usage:
 *   node build/contrast-theme.mjs           # report
 *   node build/contrast-theme.mjs --strict  # exit 1 on any hard failure
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { root } from "./lib/resolve.mjs";

const strict = process.argv.includes("--strict");

function parse(hex) {
    let h = hex.replace("#", "");
    if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join("");
    return {
        r: parseInt(h.slice(0, 2), 16),
        g: parseInt(h.slice(2, 4), 16),
        b: parseInt(h.slice(4, 6), 16),
        a: h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1,
    };
}
function over(fg, bg) {
    return {
        r: fg.r * fg.a + bg.r * (1 - fg.a),
        g: fg.g * fg.a + bg.g * (1 - fg.a),
        b: fg.b * fg.a + bg.b * (1 - fg.a),
        a: 1,
    };
}
function lum({ r, g, b }) {
    const ch = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}
function ratio(a, b) {
    const [hi, lo] = lum(a) > lum(b) ? [lum(a), lum(b)] : [lum(b), lum(a)];
    return (hi + 0.05) / (lo + 0.05);
}

// [foreground key, background key, minimum ratio, label, advisory?]
const PAIRS = [
    ["editor.foreground", "editor.background", 7, "editor text"],
    ["editorLineNumber.foreground", "editor.background", 3, "line numbers"],
    ["editorLineNumber.activeForeground", "editor.background", 4.5, "active line number"],
    ["editorCursor.foreground", "editor.background", 3, "cursor"],
    ["sideBar.foreground", "sideBar.background", 4.5, "sidebar text"],
    ["sideBarTitle.foreground", "sideBar.background", 4.5, "sidebar title"],
    ["activityBar.foreground", "activityBar.background", 3, "activity bar icon"],
    ["activityBar.inactiveForeground", "activityBar.background", 3, "inactive activity bar icon"],
    ["activityBarBadge.foreground", "activityBarBadge.background", 4.5, "activity badge"],
    ["statusBar.foreground", "statusBar.background", 4.5, "status bar text"],
    ["statusBar.debuggingForeground", "statusBar.debuggingBackground", 4.5, "status bar while debugging"],
    ["statusBarItem.remoteForeground", "statusBarItem.remoteBackground", 4.5, "remote indicator"],
    ["titleBar.activeForeground", "titleBar.activeBackground", 4.5, "title bar"],
    ["tab.activeForeground", "tab.activeBackground", 4.5, "active tab"],
    ["tab.inactiveForeground", "tab.inactiveBackground", 4.5, "inactive tab"],
    ["tab.unfocusedInactiveForeground", "tab.inactiveBackground", 3, "unfocused inactive tab"],
    ["list.activeSelectionForeground", "list.activeSelectionBackground", 4.5, "selected list row"],
    ["list.inactiveSelectionForeground", "list.inactiveSelectionBackground", 4.5, "selected row, unfocused"],
    ["list.hoverForeground", "list.hoverBackground", 4.5, "hovered list row"],
    ["list.highlightForeground", "sideBar.background", 4.5, "list match highlight"],
    ["input.foreground", "input.background", 4.5, "input text"],
    ["input.placeholderForeground", "input.background", 4.5, "input placeholder"],
    ["button.foreground", "button.background", 4.5, "primary button"],
    ["button.secondaryForeground", "button.secondaryBackground", 4.5, "secondary button"],
    ["dropdown.foreground", "dropdown.background", 4.5, "dropdown"],
    ["menu.foreground", "menu.background", 4.5, "menu"],
    ["menu.selectionForeground", "menu.selectionBackground", 4.5, "selected menu item"],
    ["badge.foreground", "badge.background", 4.5, "badge"],
    ["editorWidget.foreground", "editorWidget.background", 4.5, "editor widget"],
    ["editorSuggestWidget.foreground", "editorSuggestWidget.background", 4.5, "suggest widget"],
    ["editorSuggestWidget.selectedForeground", "editorSuggestWidget.selectedBackground", 4.5, "selected suggestion"],
    ["editorSuggestWidget.highlightForeground", "editorSuggestWidget.background", 4.5, "suggestion match"],
    ["editorHoverWidget.foreground", "editorHoverWidget.background", 4.5, "hover widget"],
    ["peekViewResult.lineForeground", "peekViewResult.background", 4.5, "peek view result"],
    ["breadcrumb.foreground", "editor.background", 4.5, "breadcrumb"],
    ["editorInlayHint.foreground", "editorInlayHint.background", 4.5, "inlay hint"],
    ["descriptionForeground", "editor.background", 4.5, "description text"],
    ["textLink.foreground", "editor.background", 4.5, "links"],
    ["focusBorder", "editor.background", 3, "focus ring"],
    ["editorError.foreground", "editor.background", 3, "error marker"],
    ["editorWarning.foreground", "editor.background", 3, "warning marker"],
    ["editorInfo.foreground", "editor.background", 3, "info marker"],
    ["gitDecoration.modifiedResourceForeground", "sideBar.background", 4.5, "git modified"],
    ["gitDecoration.addedResourceForeground", "sideBar.background", 4.5, "git added"],
    ["gitDecoration.deletedResourceForeground", "sideBar.background", 4.5, "git deleted"],
    ["gitDecoration.untrackedResourceForeground", "sideBar.background", 4.5, "git untracked"],
    ["gitDecoration.conflictingResourceForeground", "sideBar.background", 4.5, "git conflict"],
    ["gitDecoration.ignoredResourceForeground", "sideBar.background", 3, "git ignored"],
    // Visibility of highlights and guides: the smallest difference we still consider visible.
    ["editor.selectionBackground", "editor.background", 1.2, "selection", true],
    ["editor.findMatchBackground", "editor.background", 1.4, "find match", true],
    ["editor.wordHighlightBackground", "editor.background", 1.1, "word highlight", true],
    ["editorIndentGuide.activeBackground1", "editor.background", 1.5, "active indent guide", true],
    ["scrollbarSlider.background", "editor.background", 1.25, "scrollbar slider", true],
];
for (let i = 1; i <= 6; i++) PAIRS.push([`editorBracketHighlight.foreground${i}`, "editor.background", 4.5, `bracket level ${i}`]);
for (const n of ["Red", "Green", "Yellow", "Blue", "Magenta", "Cyan", "BrightRed", "BrightGreen", "BrightYellow", "BrightBlue", "BrightMagenta", "BrightCyan", "BrightBlack"]) {
    // Terminal text: VS Code raises ratios to its own minimum, but other terminal ports do not.
    PAIRS.push([`terminal.ansi${n}`, "editor.background", 3, `terminal ${n}`]);
}

let hardFails = 0;
let advisories = 0;
for (const name of ["Chalii Light", "Chalii Dark"]) {
    const theme = JSON.parse(readFileSync(join(root, "themes", `${name}-color-theme.json`), "utf8"));
    const colors = theme.colors;
    const editorBg = parse(colors["editor.background"]);
    console.log(`\n[${name}]`);
    let checked = 0, failed = 0;
    for (const [fgKey, bgKey, min, label, advisory] of PAIRS) {
        if (!colors[fgKey] || !colors[bgKey]) continue;
        const bg = over(parse(colors[bgKey]), editorBg);
        const fg = over(parse(colors[fgKey]), bg);
        const r = ratio(fg, bg);
        checked++;
        if (r + 1e-9 >= min) continue;
        failed++;
        if (advisory) advisories++; else hardFails++;
        console.log(`  ${advisory ? "!" : "✗"}  ${label.padEnd(28)} ${colors[fgKey]} on ${colors[bgKey]}  ${r.toFixed(2)} : 1  (min ${min}${advisory ? ", advisory" : ""})`);
    }
    // Syntax: every token color against the color it is drawn on.
    let tokens = 0, tokenFails = 0;
    for (const rule of theme.tokenColors) {
        const s = rule.settings || {};
        if (!s.foreground) continue;
        const bg = s.background ? over(parse(s.background), editorBg) : editorBg;
        const r = ratio(over(parse(s.foreground), bg), bg);
        tokens++;
        if (r + 1e-9 < 4.5) {
            tokenFails++; hardFails++;
            console.log(`  ✗  syntax ${String(rule.name || rule.scope).slice(0, 40).padEnd(40)} ${s.foreground}  ${r.toFixed(2)} : 1  (min 4.5)`);
        }
    }
    console.log(`  ${checked} workbench pairs checked, ${failed} below target; ${tokens} syntax colors checked, ${tokenFails} below 4.5 : 1`);
}
console.log("");
if (advisories) console.log(`(${advisories} advisory shortfalls)`);
console.log(hardFails ? `${hardFails} hard failure(s)` : "All hard checks pass.");
if (strict && hardFails > 0) process.exit(1);
