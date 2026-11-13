# Design System

## Overview

A single-page academic profile for Ding Rui. The visual direction is precise and restrained, with sharp rules, generous spacing, one crimson accent, and a real photograph of the Shandong University Weihai campus.

## Color

- Background: `oklch(1 0 0)`
- Surface: `oklch(0.965 0.006 29)`
- Ink: `oklch(0.17 0.014 29)`
- Muted ink: `oklch(0.43 0.015 29)`
- Rule: `oklch(0.86 0.009 29)`
- Accent: `oklch(0.46 0.19 29)`
- Accent dark: `oklch(0.38 0.16 29)`
- Dark surface: `oklch(0.16 0.012 29)`

## Typography

- Display and interface: Archivo variable, with platform Chinese sans-serif fallbacks.
- Reading and research descriptions: Literata, with platform Chinese serif fallbacks.
- No fluid type below 1rem. Display letter spacing stays at or above `-0.03em`.

## Layout

- Maximum content width: `90rem`.
- Page gutters: `clamp(1.25rem, 4vw, 4.5rem)`.
- Desktop hero: asymmetric two-column composition with text at left and a tall campus photograph at right.
- Mobile hero: single column with the photograph following the identity and email block.
- Sections are separated by full-width rules rather than floating cards.
- All corners are square to support the record-like academic tone.

## Components

- Compact sticky header with text navigation.
- Email link and optional copy button.
- Rule-separated research interest list.
- Current education record with a solid accent cap.
- Dark contact band containing correspondence details and image attribution.

## Motion

No decorative entrance animation. Interaction feedback is limited to color, underline, background, and a 1px pressed movement. All transitions collapse under reduced-motion preferences.
