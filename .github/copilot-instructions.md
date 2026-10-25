# Repository Instructions

## Design Direction

- Build a professional, single-page portfolio for a frontend developer.
- Follow an **editorial-minimal, light-only design**: clean, spacious, content-focused, and understated.
- Prioritize readability, clear hierarchy, and meaningful content over decorative elements.
- Use a consistent visual language across every section. New components and changes must feel like part of the existing design.
- Keep the design professional but personal. Avoid generic templates and unnecessary visual clutter.
- Do not introduce dark mode, gradients, excessive animation, decorative illustrations, or visual effects that do not serve a clear purpose.

## Design Tokens

Use these values consistently throughout the application. Define shared values as CSS custom properties rather than repeating literals.

| Token                 | Value                             | Usage                                          |
| --------------------- | --------------------------------- | ---------------------------------------------- |
| Page background       | `#FAFAF8`                         | Main page and section backgrounds              |
| Primary text          | `#171717`                         | Headings and primary content                   |
| Secondary text        | `#737373`                         | Supporting text and subtle metadata            |
| Border                | `#E5E5E0`                         | Dividers, card outlines, and subtle separators |
| Accent                | `#2563EB`                         | Links, primary actions, and selected emphasis  |
| Maximum content width | `1120px`                          | Main content container                         |
| Base spacing unit     | `8px`                             | Spacing scale                                  |
| Font family           | Inter, system sans-serif fallback | All page typography                            |

- Use the accent color sparingly. Reserve it for meaningful emphasis and interactive elements.
- Keep backgrounds neutral and predominantly consistent across sections.
- Use subtle borders instead of heavy shadows. Avoid shadows unless they serve a clear purpose.
- Maintain consistent spacing, radii, borders, and alignment across similar components.
- Do not introduce additional design tokens or colors without a clear reason.

## Layout and Spacing

- Use a centered content container with a maximum width of `1120px`, with appropriate horizontal padding on smaller screens.
- Maintain generous whitespace and clear separation between sections.
- Use approximately `72–96px` of vertical section spacing on desktop and `48–64px` on mobile, adjusting where the content requires it.
- Base spacing decisions on multiples of `8px` where practical.
- Keep layouts simple, balanced, and easy to scan.
- Prefer straightforward layouts over unnecessary nested containers or complicated grids.
- Prevent horizontal overflow at all viewport widths.

## Typography

- Use Inter with a system sans-serif fallback.
- Use a clear hierarchy through font size, weight, line height, and spacing rather than decorative treatments.
- Body text should generally be `16–18px`.
- Hero headings should generally be `48–60px` on desktop and `36–42px` on mobile.
- Section headings should generally be `28–32px` on desktop, scaling down appropriately on mobile.
- Keep paragraphs readable with comfortable line lengths and line height.
- Use bold text selectively to emphasize important information.
- Avoid oversized text outside the hero, excessive uppercase text, and unnecessary font variations.
- Ensure text remains readable and does not overflow or become cramped on small screens.

## Components and Visual Consistency

- Prefer simple components with clear purposes and restrained styling.
- Use subtle borders and neutral backgrounds for cards where appropriate.
- Avoid adding cards, badges, pills, or containers when plain text and spacing communicate the content better.
- Maintain consistent styling for links, buttons, section headings, cards, and other repeated elements.
- Make primary and secondary actions visually distinguishable without competing for attention.
- Keep the footer understated and consistent with the rest of the page.
- Reuse existing components and styling patterns when they fit the requirement.
- Do not redesign existing sections unnecessarily when making a focused change.

## Responsive Design

- Design mobile and desktop layouts intentionally; do not simply shrink the desktop layout.
- Adapt columns, spacing, typography, and component alignment to available space.
- Stack content vertically when side-by-side layouts become cramped.
- Ensure links and interactive targets remain usable on touchscreens.
- Check narrow viewport widths for overflow, clipping, awkward wrapping, and excessive empty space.
- Preserve the same visual identity across screen sizes.

## Interactions and Motion

- Keep interactions subtle, purposeful, and consistent with the minimal design.
- Provide clear hover, focus, and active states for interactive elements.
- Use restrained transitions for color, opacity, borders, and small positional changes where appropriate.
- Avoid distracting animations, parallax, excessive movement, and animation used only for decoration.
- Respect `prefers-reduced-motion` and disable or reduce nonessential motion when requested by the user's system preferences.
- Do not add animation libraries or dependencies for simple CSS interactions.

## Code Conventions

- Use React, TypeScript, Vite, and plain CSS.
- Keep changes focused and follow existing React and TypeScript patterns.
- Use function components and typed props where appropriate.
- Keep the site as a single-page experience unless the user requests otherwise. Avoid adding routing or new architecture without a clear need.
- Preserve the existing Vite, TypeScript, ESLint, and package-manager configuration unless a concrete issue requires a change.
- Keep components, content, and styling organized within the existing `src/` structure.
- Prefer clear, maintainable code over premature abstraction.
- Reuse existing assets and components where appropriate.
- Use semantic HTML and native elements when they adequately meet the requirement.

## Accessibility

- Use semantic HTML and a logical heading hierarchy.
- Give links and buttons descriptive text and accessible names.
- Ensure all interactive controls work with a keyboard and have visible focus styles.
- Maintain sufficient contrast for text, borders, and interactive elements.
- Provide meaningful alternative text for informative images; use empty alt text for decorative images.
- Do not communicate important information through color alone.
- Respect reduced-motion preferences for nonessential animation.

## Dependencies

- Do not add dependencies unless they solve a clear requirement that cannot be handled well with the existing stack.
- Prefer built-in browser features, plain CSS, and existing project capabilities when practical.
- If a new dependency is necessary, explain why it is needed and what it adds before introducing it.
- Avoid adding libraries for functionality that can be implemented simply and reliably without them.

## Verification

- Run `pnpm lint` after code changes.
- Run `pnpm build` to check TypeScript and production bundling, especially after application, styling, or configuration changes.
- Report checks that were not run and any remaining issues.
