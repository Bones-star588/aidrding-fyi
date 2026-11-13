# Design System

## Overview

A single-page academic profile for Ding Rui. The visual direction combines a sea-mist neutral field, sharp editorial rules, one crimson accent, cinematic campus photography, and a dark project archive.

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
- No fluid type below 1rem. Display letter spacing stays at or above `-0.03em`.

## Layout

- Maximum content width: `90rem`.
- Page gutters: `clamp(1.25rem, 4vw, 4.5rem)`.
- Desktop hero: asymmetric two-column composition with text at left and two high-resolution Weihai campus photographs crossfading at right.
- Mobile hero: single column with a full-width campus photo band following the identity and email block.
- Photograph edges use alpha masks so images dissolve into the sea-mist background without visible frames.
- Selected projects use a dark record-like list with expandable evidence panels rather than a generic card grid.
- Sections are separated by full-width rules rather than floating cards.
- All corners are square to support the record-like academic tone.

## Components

- Compact sticky header with text navigation and scroll-aware active state.
- Email link and optional copy button.
- Expandable project entries with outcome highlights, metrics, technology, and explicit scope.
- Rule-separated research interest list.
- Current education record with a solid accent cap.
- Crimson contact band containing correspondence details and image attribution.

## Motion

The hero alternates two campus photographs with slow crossfades and restrained image drift. Project entries reveal on scroll when motion is available and expand natively on interaction. All motion is removed under reduced-motion preferences.
