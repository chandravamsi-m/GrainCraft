# Customization Guide

GrainCraft is designed to be easily customized via CSS variables and modular components.

## 1. Primary Colors
Open `assets/css/variables.css` to change the core color palette.
```css
:root {
  --color-accent: #8E6E53; /* Change this for a new brand color */
  --color-bg-primary: #F5F0E8; /* Main cream background */
}
```

## 2. Typography
We use Google Fonts. To change fonts:
1. Update the `@import` in `assets/css/typography.css`.
2. Update the `--font-family` variables in `variables.css`.

## 3. Dark Mode
The dark mode is controlled via the `[data-theme="dark"]` attribute on the `<html>` element. Colors are automatically swapped using CSS variables. Customize these in the `@media (prefers-color-scheme: dark)` or the specific `[data-theme="dark"]` block in `variables.css`.

## 4. Components
Each component (Navbar, Hero, Portfolio) has its own section in `assets/css/components.css`. 
