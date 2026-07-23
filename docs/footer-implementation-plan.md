# Footer implementation plan

## Design sources

- Complete footer: Figma node `117:448`
- Footer composition: Figma node `117:449`
- Portrait card: Figma node `117:517`
- Meet me title block: Figma node `117:526`
- Get in touch section: Figma node `117:528`
- Books illustration: Figma node `117:553`
- Dog illustration: Figma node `117:554`

## Visual specification

### Meet me

- Dark neutral background: `#1b1a19`
- Subtle 96px grid with low-contrast neutral strokes
- Desktop composition height: approximately 986px
- Title block placed in the upper-left grid area
- Portrait card centred in the section with a lightly rotated outline card behind it
- Portrait uses the high-resolution source image from Figma and a scalloped editorial crop
- Personal note uses 14px text with a 20px line height
- Date is visually secondary, italic, and low contrast
- Books and dog illustrations sit around the portrait as dim-white line work
- Illustration source backgrounds disappear through inversion and screen blending

### Get in touch

- 505px desktop closing panel with a subtle top/outer border
- 48px display heading with a 64px line height
- Open-for-work status row
- Copyable email pill and separate mail action
- LinkedIn and X actions placed near the lower-left edge
- The final contact panel remains eligible for scroll snapping without forcing the entire footer to snap

## Implementation process

1. Pull the node hierarchy, reference code, screenshot, colors, dimensions, and assets through the Figma design-to-code workflow.
2. Reuse the current homepage component, existing typography variables, color tokens, icon library, email-copy interaction, and scroll system.
3. Export the portrait and both illustration references from Figma.
4. Optimise the portrait for the web while retaining enough resolution for high-density screens.
5. Build the Meet me and Get in touch sections as semantic HTML with responsive CSS.
6. Preserve keyboard focus states, button labels, reduced-motion behaviour, and touch-friendly target sizes.
7. Validate the production build and confirm the layout at desktop, tablet, and mobile breakpoints.

## Skills and methods

- **Figma design-to-code:** extracts the authoritative design hierarchy, dimensions, typography, and source assets.
- **Graphic treatment:** converts the supplied black-on-white drawings into background-free dim-white line art using CSS inversion, screen blending, and opacity.
- **Responsive UI implementation:** adapts the fixed 1280px Figma composition to fluid desktop and mobile layouts without changing the visual hierarchy.
- **Accessibility review:** maintains semantic sectioning, visible focus states, descriptive labels, copy feedback, and reduced-motion support.
