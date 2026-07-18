# Divya Sharma Portfolio — Design System v1

## Creative direction

Professional and confident, with a controlled sense of play. The notebook grid is the structural signature: it organizes the page, reveals the designer's process, and gives every composition a measured rhythm. Color and motion add personality without competing with the work.

The Studio Think reference informs the editorial balance: warm paper, visible grid, large serif moments, compact sans-serif utility text, thin rules, and occasional highlighter-like color. We use that language as a direction, not as a template to copy.

## Core principles

1. **The grid does the decorating.** Prefer structure, spacing, rules, and alignment over ornamental graphics.
2. **Work stays dominant.** Portfolio imagery receives the strongest color; surrounding UI remains mostly neutral.
3. **Editorial, not precious.** Headings can feel expressive, while supporting text and controls stay direct and practical.
4. **One playful moment at a time.** Use only one bright accent in a composition and keep it below roughly 10% of the visible area.
5. **Interactions explain themselves.** Motion should confirm hover, focus, copy, or navigation—not run continuously.

## Color system

### Neutrals

| Token | Hex | Primary use |
|---|---:|---|
| Neutral 0 | `#FFFFFF` | Main paper, cards, reversed text |
| Neutral 25 | `#FFFBF6` | Warm paper sections |
| Neutral 50 | `#F9F6F1` | Subtle panels and logo tiles |
| Neutral 100 | `#F5F3EF` | Media placeholders and soft fills |
| Neutral 200 | `#E4E1E1` | Grid lines and light borders |
| Neutral 300 | `#CBCBCB` | Stronger borders, dark-mode body text |
| Neutral 400 | `#A8A39C` | Dark-mode secondary text |
| Neutral 500 | `#8E8E8E` | Light-mode secondary text |
| Neutral 600 | `#565A5E` | Labels and tertiary copy |
| Neutral 700 | `#413E3B` | Borders on dark surfaces |
| Neutral 800 | `#2E2D2D` | Main light-mode body text |
| Neutral 900 | `#212121` | Headings and primary actions |
| Neutral 950 | `#1B1A19` | Dark section background |

### Actions and accents

- **Primary action:** `#212121`. Default for important buttons and links.
- **Butter:** `#FFE3B1`. Warm hover/highlight; closest to a notebook marker.
- **Lemon:** `#F2FF6B`. High-energy editorial highlight; use rarely.
- **Lilac:** `#D9CCFF`, **Sky:** `#CCEEFF`, **Mint:** `#CFEEDA`. Optional project/category accents only.
- **Positive status:** `#42C975` with deep ring `#214D32`.

Never use multiple bright accents on the same control. Black remains the primary action color; the peach Resume action is the deliberate editorial exception established by the Figma design.

## Typography

Only two typefaces are allowed across the website.

- **Cormorant Garamond:** all display text, page titles, section headings, and the wordmark.
- **Public Sans:** paragraphs, project titles, metadata, labels, navigation, buttons, and utility text.

| Style | Typeface | Size / line height | Weight |
|---|---|---:|---:|
| Display | Cormorant Garamond | 64 / 58 | 400–600 |
| Section heading | Cormorant Garamond | 32 / 40 | 600 |
| Project title | Public Sans | 20 / 28 | 600 |
| Large body | Public Sans | 18 / 26 | 400 |
| Body | Public Sans | 16 / 24 | 400 |
| Small / UI | Public Sans | 14 / 20 | 400–600 |

Use sentence case. Avoid all caps except for tiny metadata when genuinely useful. Keep readable paragraph lines around 55–75 characters.

## Grid and layout

- Desktop canvas: `1280px` maximum width.
- Main light grid: `56 × 56px` cells with low-contrast, `0.5px` Neutral 200 hairlines.
- Dark footer grid: `80 × 80px` cells with reduced-opacity white lines.
- Primary project content width: approximately `960px`.
- Align key edges to grid lines or half-grid positions.
- On smaller screens, reduce the grid to `44 × 44px` and preserve the same hierarchy rather than the same absolute coordinates.
- Let whitespace remain visible. Empty grid cells are intentional breathing room.

## Spacing

Use a 4px base rhythm: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`.

- Control padding: usually `8–16px` or `12–24px`.
- Card padding: `24px` desktop, `16px` compact.
- Small internal gaps: `8–12px`.
- Section rhythm: `64–96px` minimum between major moments.

## Surfaces, borders, and radius

- Structural containers use square corners and a 1px Neutral 200 or 300 border.
- Portfolio images may use a `20px` radius to separate the work from the notebook frame.
- Pills are reserved for compact actions, filters, and statuses.
- Avoid drop shadows in the core portfolio. Use borders, contrast, and offset movement instead.

## Interaction and motion

- Fast feedback: `160ms`; spatial transitions: `240ms`.
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Hover may move an actionable surface upward by `2px` and strengthen its border.
- Primary buttons begin black; hover may reveal Butter as the playful layer.
- Image hover may scale to a maximum of `1.012`.
- Focus must always use a visible 2px outline with a 3px offset.
- Respect reduced-motion preferences and never use continuous decorative animation.
- All interface icons come from the Phosphor icon family in regular or light weights; do not redraw them in CSS.

### Immersive notebook transition

- The Hero and first Selected Project share one notebook plane on desktop.
- The first viewport must remain a clean, motionless Figma state.
- Scroll lifts the plane to a maximum `5.5°` tilt, travels diagonally toward the lower-left project position, then settles flat again.
- The transition uses approximately `220vh` of scroll distance with a one-second smoothed scrub.
- Content remains real HTML; only the shared world, opacity, and scale are animated.
- Keep the ambient wash gradient-based rather than filter-blurred so the notebook plane remains inexpensive to composite.
- Mobile and reduced-motion experiences use the normal vertical document flow with no pinning or perspective travel.

## Component rules

### Section title block

Serif heading inside a thin bordered paper rectangle. It should feel like a label placed on the notebook, not a floating card.

### Project card

Square outer structure, one large image window, then a concise Public Sans title and description. Border changes—not shadows—communicate hover.

### Primary action

Black fill, white label, compact dimensions, direct language. Butter is an interaction state, not the resting primary color.

### Status

Small colored indicator paired with plain-language text. Never rely on color alone.

## Writing and content tone

Confident, specific, and curious. Prefer concrete outcomes and design decisions over generic claims such as “passionate” or “pixel-perfect.” Keep project descriptions to one clear sentence on the homepage.

## Quick review checklist

- Does every text element use Cormorant Garamond or Public Sans?
- Are primary actions black in their resting state?
- Is the grid supporting alignment rather than creating visual noise?
- Is there no more than one bright accent competing for attention?
- Are structural corners square and image corners softly rounded?
- Is the work more colorful than the surrounding interface?
- Are hover, focus, and reduced-motion states covered?
