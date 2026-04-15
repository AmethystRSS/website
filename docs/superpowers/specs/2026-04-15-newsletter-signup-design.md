# Newsletter Signup Component

## Overview

Add a newsletter email collection form to the Amethyst marketing site front page, using Buttondown's free tier as the backend. The goal is to collect emails now for future newsletter use.

## Approach

Direct client-side POST to Buttondown's public subscribe API. No server-side route or API key management needed.

## Component: `NewsletterSignup`

**File:** `app/components/NewsletterSignup.tsx`

A `"use client"` component containing an email input form that submits directly to Buttondown.

### Placement

In `app/page.tsx`, after the features grid and before the closing `</main>` tag. Wrapped in a section with vertical padding to separate it from the feature cards.

### Visual Design

- Centered container, `max-w-xl`, matching the existing card style (`rounded-lg`, backdrop blur, border treatment matching feature cards)
- Heading: "Stay in the loop" (or similar) in the same violet gradient text style used for the hero
- Subtext: One line of copy, e.g., "Get occasional updates about Amethyst — no spam."
- Form layout: Horizontal on desktop (input + button side by side via flex), stacks vertically on mobile
- Submit button: Matches App Store CTA style — `rounded-full`, dark bg, white text, violet hover accent
- Email input: Rounded, border matching the card borders, focus ring in violet

### State Management

Three states managed via `useState`:

- **idle:** Default. Form is interactive.
- **loading:** After submit, before response. Button shows loading indicator or "Subscribing..." text. Input and button disabled.
- **success:** API returned 2xx. Form replaced by or supplemented with a success message: "You're subscribed! Check your email to confirm."
- **error:** API returned an error. Inline error message below the form. User can retry. Special case for duplicate email ("You're already subscribed!").

### API Integration

- **Endpoint:** `POST https://api.buttondown.email/v1/subscribers`
- **Headers:** `Content-Type: application/json`
- **Body:** `{ "email_address": "<user input>", "tags": ["website"] }`
- **Auth:** No API key needed for the public subscribe endpoint. The Buttondown username is passed via the endpoint URL or as a query param (to be confirmed during implementation — the public endpoint may be `https://api.buttondown.email/v1/subscribers/<username>`).
- **Success response:** 201 Created
- **Error responses:** 400 for invalid email, 409 for duplicate subscriber

### Validation

- HTML-native `type="email"` and `required` attributes on the input
- No additional client-side validation library needed

### No Bot Protection

Not needed for a low-traffic marketing page. Buttondown handles abuse on their end.

## Files Changed

1. **`app/components/NewsletterSignup.tsx`** — New file. The self-contained newsletter form component.
2. **`app/page.tsx`** — Import and render `<NewsletterSignup />` after the features grid.

## Dependencies

None. Uses only React, Tailwind, and the browser `fetch` API.

## Out of Scope

- Server-side API route / proxy
- Rate limiting or CAPTCHA
- Newsletter sending workflow
- Admin dashboard or subscriber management (handled by Buttondown)
