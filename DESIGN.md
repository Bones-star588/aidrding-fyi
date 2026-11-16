# Design System

## Overview

A single-page academic profile for Ding Rui. The visual direction combines a full-bleed dusk photograph, sharp editorial rules, one crimson accent, sea-mist reading sections, and a dark project archive.

## Redesign Audit

The previous page used a split hero with two alternating campus photographs. Its identity, navigation, project evidence, research interests, and education record remain useful. This revision preserves those blocks, anchor IDs, metadata, wordmark, typefaces, and interactions. It replaces only the photograph presentation with the image supplied by the owner, removes the former image attribution because those images are no longer displayed, and keeps the readable correspondence details. Design variance: 6; motion intensity: 4; visual density: 4.

## Color

- Background: `oklch(0.975 0.008 180)`
- Surface: `oklch(0.948 0.013 180)`
- Ink: `oklch(0.17 0.018 185)`
- Muted ink: `oklch(0.42 0.018 185)`
- Rule: `oklch(0.84 0.013 180)`
- Accent: `oklch(0.46 0.19 29)`
- Accent dark: `oklch(0.38 0.16 29)`
- Dark surface: `oklch(0.145 0.014 185)`

## Typography

- Display and interface: Archivo variable, with platform Chinese sans-serif fallbacks.
- Reading and research descriptions: Literata, with platform Chinese serif fallbacks.
- Hero type uses fixed sizes with a mobile breakpoint and zero letter spacing.

## Layout

- Maximum content width: `94rem`.
- Page gutters: `clamp(1.25rem, 4vw, 4.5rem)`.
- Desktop hero: full-width owner-supplied campus photograph, with identity and email over a darkened, softly blurred left edge and the campus signage visible at right.
- Mobile hero: the same full-bleed photograph with a clear upper area and a progressive vertical blur behind the identity block.
- A matching blurred image layer uses alpha masks to transition from sharp architecture to soft background. A lower gradient merges the photograph into the project archive.
- The hero image has a 1280px WebP variant for smaller viewports and a 2848px WebP variant for large displays. No original image metadata is published.
- Selected projects use a dark record-like list with expandable evidence panels rather than a generic card grid.
- Sections are separated by full-width rules rather than floating cards.
- All corners are square to support the record-like academic tone.

## Components

- Compact translucent sticky header with text navigation and scroll-aware active state.
- Email link and optional copy button.
- Expandable project entries with outcome highlights, metrics, technology, and explicit scope.
- Rule-separated research interest list.
- Current education record with a solid accent cap.
- Crimson contact band containing correspondence details.

## Motion

The hero photograph settles once as the identity and contact details enter in sequence. Project entries reveal on scroll when motion is available and expand natively on interaction. There is no continuous background animation. All motion is removed under reduced-motion preferences.
