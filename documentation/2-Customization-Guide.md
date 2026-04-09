# Customization Guide

### Colors & Fonts
All Tailwind configurations (colors, fonts, etc.) are currently defined within the `<script>` tag inside the `<head>` of each HTML file.

To change the primary accent color or font stack:
- Open the HTML file.
- Locate the `tailwind.config` block.
- Update the hexadecimal value for `accent: { DEFAULT: '#8B4A1C', ... }` to your brand's color.
- Change the `fontFamily` definition to load your preferred Google fonts. Remember to update the `<link href="...google fonts...">` tag right above it!

### Content Replacement
- Look for `TODO: Customize [Element]` comments throughout the HTML code. These notes indicate places explicitly designed for your own content.
- Update image tags (`<img src="...">`) to point to your premium photography. Be sure to compress your images first.
