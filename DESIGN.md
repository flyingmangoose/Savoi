# Design

<!-- impeccable:design-schema 1 -->

## Visual World: Intelligence Dossier

The site is a set of declassified case files. Every page is a file in the dossier: a file header bar with case number, classification, and date; content arranged like a typed institutional report; classification stamps marking key claims; margin annotations in mono; redaction bars that lift on scroll to reveal content. The aesthetic is serious, institutional, precise — the visual language of intelligence briefings and case files, rendered as a modern premium web experience, not a retro gimmick.

### Thesis
The category default for AI companies is a dark gradient site with a glowing orb and three feature cards. Savoi refuses this. The product installs production-grade systems built on technology proven in high-stakes government delivery. The dossier world makes that provenance visible: the site itself is a case file system, institutional and authoritative, where every claim is filed, stamped, and annotated.

### Own-World (recognizable with all content removed)
- Warm paper ground (#f4efe6) with deep warm-ink sections (#1a1714)
- Classification oxblood (#8c2020) as the sole accent for stamps, links, and key callouts
- File tab amber (#b8945a) for navigation tabs and secondary accents
- Spectral serif for all display and content; JetBrains Mono for all labels, metadata, stamps, and UI controls
- Horizontal file header bars with FILE NO. / CLASSIFICATION / DATE in mono caps
- Rotated, bordered classification stamps (PROVEN, VERIFIED, CONFIDENTIAL)
- Redaction bars (solid ink) that animate away on scroll
- Margin annotations with leader lines
- Subtle paper-grain texture and document rule lines

### Palette
```
--paper: #f4efe6
--paper-2: #ebe4d4
--ink: #1a1714
--ink-2: #252220
--ink-soft: #3d3830
--ink-muted: #6b6557
--rule: #d4ccb8
--classification: #8c2020
--classification-soft: #c4534e
--file-tab: #b8945a
--stamp-green: #2d5a3d
```

### Typography
- Display + Body: **Spectral** (serif, institutional authority, screen-optimized)
- Labels / Metadata / Stamps / UI: **JetBrains Mono** (mono, technical/institutional)
- No sans-serif family. The serif + mono pairing is the world.

### Scale
- H1: clamp(2.5rem, 6vw, 4rem), Spectral 700
- H2: clamp(1.75rem, 4vw, 2.75rem), Spectral 600
- H3: 1.375rem, Spectral 600
- Body: 1.0625rem, Spectral 400, line-height 1.7
- Mono labels: 0.75rem, JetBrains Mono 500, uppercase, letter-spacing 0.08em
- Stamps: 0.875rem, JetBrains Mono 700, uppercase, letter-spacing 0.12em

### Layout
- Max content width: 1150px, centered
- Document margins: generous left margin (120px desktop) for annotations
- 12-column grid with document alignment
- Sections alternate paper and ink grounds for pacing
- Full-bleed dark sections for drama (hero, CTA)

### Motion
- Redaction bars: lift (translateY + opacity) on scroll into view, 600ms ease-out
- Stamps: stamp down (scale 1.3→1 + rotate settle) on scroll into view, 400ms
- Content: fade + translateY(20px) on scroll, staggered, 500ms
- File tabs: lift 2px on hover
- All motion respects prefers-reduced-motion (instant, no transform)
- No cursor-following effects, no parallax, no decorative animation

### Components
- **FileHeader:** horizontal bar, mono labels, FILE NO. / CLASSIFICATION / DATE, top of every page
- **Stamp:** rotated bordered box, classification red or stamp green, semi-transparent
- **RedactionBar:** solid ink bar, animates away on scroll reveal
- **MarginAnnotation:** mono text in left margin with thin leader line
- **FileTabNav:** navigation as manila folder tabs, active tab filled
- **DocumentCard:** bordered paper card with file header, like a case file entry
- **SectionRule:** thin horizontal document divider with mono label

### Responsive
- Desktop: full dossier treatment with margin annotations, file tab nav horizontal
- Tablet: annotations move inline, nav collapses to hamburger
- Mobile: single column, annotations become inline callouts, redaction bars still animate, stamps reposition

### Accessibility
- All text on paper ground: minimum 7:1 contrast (ink #1a1714 on #f4efe6)
- Classification red on paper: 5.8:1 (passes AA for large text, used for stamps/accents not body)
- Dark sections: paper text on ink, 11:1 contrast
- Focus styles: 2px classification-red outline with 2px offset
- prefers-reduced-motion: all transforms instant, opacity transitions 0ms
- Semantic HTML: proper headings, landmarks, skip links
