# Developer Brief: Product Detail Page — Parts Catalog Integration

## Overview

This brief specifies the implementation of a **Product Detail Page** component suite for the parts-catalog application. The design is derived from the Figma file below and must be re-implemented as native Vue 3 Single File Components (SFCs) inside the existing Nuxt 3 parts-catalog app.

**Figma Design Source:**
`https://www.figma.com/design/ARrOJD2JMjEu7FBc1zwgrX/Product_Card_2026`

**Visual Reference (React prototype):**
This repo (`Productcard`) is a working implementation of the design in React + TypeScript + Tailwind. It is provided as a visual and behavioral reference only — do not port or reuse any React code. Build the Vue components from scratch against the Figma design, using this repo to verify layout and interaction details where the Figma is ambiguous.

---

## Recommended Tech Stack

| Concern | Choice |
|---|---|
| Framework | Vue 3 with `<script setup>` (Composition API) |
| Meta-framework | Nuxt 3 |
| Styling | Tailwind CSS v3 or v4 |
| Country flags | `flag-icons` npm package |
| Icons | `lucide-vue-next` (ChevronLeft, ExternalLink) |
| UI primitives | Optional — Headless UI or Radix Vue for tab/accordion if needed |

Install the two required packages if not already in the catalog app:

```bash
npm install flag-icons lucide-vue-next
```

Import the flag-icons CSS once in your Nuxt layout or `app.vue`:

```typescript
// nuxt.config.ts
css: ['flag-icons/css/flag-icons.min.css']
```

---

## Component Architecture

Build the following four Vue SFCs. Suggested location: `components/product/`

| File | Purpose |
|---|---|
| `ProductPage.vue` | Full-page orchestrator — accepts all product data as props and renders every section |
| `ComponentSpecTable.vue` | Horizontal 8-column specifications table |
| `DetailedSpecColumn.vue` | Vertical label/value specification list (used 3× in a grid) |
| `ImageWithFallback.vue` | `<img>` wrapper that shows an SVG placeholder on load error |

---

## Data Model

All product data is passed as props to `ProductPage.vue`. Define the following TypeScript interfaces in a shared types file (e.g., `types/product.ts`) and import them into each component.

```typescript
// types/product.ts

export interface SpecRow {
  /** Display label, e.g. "Supply Voltage" */
  label: string;
  /** Display value, e.g. "12V ± 5%" */
  value: string;
}

export interface ComponentSpec {
  /** Manufacturer Part Number */
  mpn: string;
  /** Array of applicable standards, e.g. ["MIL-STD-461", "MIL-STD-810"] */
  standards: string[];
  /** Technology type, e.g. "GaN" or "CMOS" */
  technology: string;
  /** Radiation/SEU info, e.g. "Report Available" or "N/A" */
  radiation: string;
  /** Frequency bands, e.g. ["L-Band (1-2 GHz)", "S-Band (2-4 GHz)"] */
  bands: string[];
  /** VSWR spec, e.g. "<1.5:1" */
  vswr: string;
  /** Polarization type, e.g. "RHCP", "Linear" */
  polarization: string;
  /** LNA Gain value; empty string if not applicable */
  lnaGain: string;
}

export type TabColor = 'orange' | 'blue' | 'emerald' | 'purple' | 'indigo' | 'green';

export interface TabConfig {
  /** Tab label shown in the UI */
  name: string;
  /** Background color of the active tab */
  color: TabColor;
}

export interface ManufacturerInfo {
  /** Company name — used to auto-bold in the description's first paragraph */
  name: string;
  website: {
    /** Full URL including protocol */
    url: string;
    /** Shortened display text, e.g. "example.com" */
    displayText: string;
  };
  /** Quality certification string, e.g. "ISO 9001:2015 Certified" */
  qualitySystem: string;
  /**
   * Array of paragraph strings. The company name is auto-bolded
   * wherever it appears in the first paragraph.
   */
  description: string[];
}

export interface ProductPageData {
  // ── Hero ──────────────────────────────────────────────────
  /** URL or path to the hero background image (1920×400px min) */
  heroBackground: string;
  /** Short category label shown as a badge, e.g. "GPS Antenna" */
  productCategory: string;
  /** Reference number shown as "Ref: ..." */
  productReference: string;
  /** Main product title (H1) */
  productTitle: string;
  /** One-to-two sentence product description (≤200 chars recommended) */
  productDescription: string;

  // ── Product Highlights ────────────────────────────────────
  origin: {
    /** Country display name, e.g. "Canada" */
    country: string;
    /** ISO 3166-1 alpha-2 code for flag-icons, e.g. "ca" */
    flagCode: string;
  };
  /** URL or path to the manufacturer logo (225×100px recommended, transparent bg) */
  manufacturerLogo: string;
  /** URL or path to the product image (280×280px recommended) */
  productImage: string;
  /** Optional URL to the product datasheet PDF */
  datasheetUrl?: string;

  // ── Specifications ────────────────────────────────────────
  componentSpec: ComponentSpec;
  electricalSpecs: SpecRow[];
  mechanicalSpecs: SpecRow[];
  environmentalSpecs: SpecRow[];

  // ── Navigation ────────────────────────────────────────────
  tabs: TabConfig[];
  /** Name of the tab that should be active on initial render; defaults to first tab */
  defaultTab?: string;

  // ── Manufacturer ──────────────────────────────────────────
  manufacturerInfo: ManufacturerInfo;
}
```

---

## Section-by-Section Layout Specification

### Section 1 — Hero Header

**Purpose:** Full-width dark banner at the top of the page containing the product identity and the tab navigation bar.

**Layout:**
- Outer wrapper: full-width, `bg-slate-900`, bottom border `border-white/10`, `shadow-2xl`
- Background image: absolutely positioned, `w-full h-full object-cover opacity-60`
- Gradient overlay: absolutely positioned over the image, `bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent`
- Content container: `max-w-[1440px] mx-auto px-4 md:px-8 pt-6 pb-0`

**Back Button (top of content area):**
- `mb-8`, text color `text-blue-300`, hover `text-white`
- Font: Inter 14px / 500 weight
- Left-chevron icon (`ChevronLeft`, 16px) that nudges left on hover (`-translate-x-1`)

**Product Identity block (bottom-left):**
- Category badge: `px-2 py-0.5 bg-blue-500/20 text-blue-200 border border-blue-500/30 rounded text-[12px] font-medium tracking-wide uppercase`
- Reference: `text-slate-400 text-[14px]` — displayed inline as "Ref: {productReference}"
- Title (H1): `text-[28px] md:text-[40px] font-bold text-white tracking-tight`, Inter
- Description: `text-slate-300 mt-2 max-w-xl text-[14px] md:text-[15px] leading-relaxed`

**Tab Bar (bottom-right, flex-end aligned):**
- Container: `flex gap-1 bg-white/5 p-1 rounded-lg backdrop-blur-md border border-white/10 overflow-x-auto`
- Each tab button: `px-4 md:px-5 py-2 md:py-2.5 rounded-md text-[13px] font-semibold whitespace-nowrap transition-all duration-200`
- Inactive tab: `text-slate-300 hover:text-white hover:bg-white/10`
- Active tab colors by `TabConfig.color`:

  | color | active class |
  |---|---|
  | orange | `bg-orange-500 text-white shadow-lg shadow-orange-900/20` |
  | blue | `bg-blue-600 text-white shadow-lg shadow-blue-900/20` |
  | emerald | `bg-emerald-600 text-white shadow-lg shadow-emerald-900/20` |
  | purple | `bg-purple-600 text-white shadow-lg shadow-purple-900/20` |
  | indigo | `bg-indigo-600 text-white shadow-lg shadow-indigo-900/20` |
  | green | `bg-green-600 text-white shadow-lg shadow-green-900/20` |

- On mobile: title block and tab bar stack vertically; on `md+` they sit side-by-side (`flex-row items-end justify-between`)

---

### Section 2 — Product Highlights Card

**Purpose:** Three-column white card showing origin, manufacturer logo, and product image.

**Card wrapper:** `bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-8`

**Grid:** `grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-center`

**Column 1 — Actions (order-2 on mobile, order-1 on md+):**
- "ORIGIN" label: `text-[12px] font-medium uppercase tracking-wider text-slate-500`
- Country name: `text-[18px] font-semibold text-slate-900`, Inter
- Country flag: `<span class="fi fi-{flagCode} text-[24px] shadow-sm rounded-sm"></span>` (flag-icons)
- CTA Button: `w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-[14px] font-semibold shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0`
  - Button label: **"Request Loan or Sample"**
- Datasheet link (conditional, only if `datasheetUrl` exists): `text-[13px] text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors` with ExternalLink icon (12px) — label "View Datasheet"

**Column 2 — Manufacturer Logo (order-1 on mobile, order-2 on md+):**
- `flex justify-center py-4 md:py-0`
- Separated from adjacent columns by `border-y md:border-y-0 md:border-x border-slate-100`
- `<img>` max width `180px` on mobile, `225px` on md+; `opacity-90 hover:opacity-100 transition-opacity`

**Column 3 — Product Image (order-3):**
- Outer div: `flex justify-center relative group`
- Glow overlay (hover effect): `absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`
- Image (use `ImageWithFallback`): `relative w-full max-w-[280px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500`; inline style: `filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15))`

---

### Section 3 — Component Specifications

**Purpose:** Single-row horizontal table summarising the 8 key specification columns.

**Section heading:** `text-[18px] font-bold text-slate-900 mb-4 flex items-center gap-2`, Inter
- Blue accent bar: `w-1.5 h-5 bg-blue-600 rounded-full`
- Text: "Component Specifications"

**Table wrapper:** `bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden`

**Table:** `w-full border-collapse` (inside `overflow-x-auto` scroll container)

**Header row:** `bg-slate-50 border-b border-slate-200`
- Each `<th>`: `px-4 py-3 text-[13px] font-semibold text-slate-600 text-center uppercase tracking-wider`, Inter
- Columns in order: MPN | Standards | Technology | Radiation-SEU | Bands | VSWR | Polarization | LNA Gain

**Data row:** `bg-white hover:bg-slate-50/50 transition-colors`
- Each `<td>`: `px-4 py-6 text-[14px] text-slate-600 text-center`, Inter
- MPN cell uses `font-medium text-slate-900`
- Standards and Bands cells: render each array item as a separate `<div>`

---

### Section 4 — Detailed Specifications Grid

**Purpose:** Three equal-width columns, each showing a category of specifications as a label/value table.

**Grid container:** `grid grid-cols-1 md:grid-cols-3 gap-6`

**Each column card** (`DetailedSpecColumn.vue`):
- Outer: `flex-1 bg-[#F6F7F9] rounded-xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow`
- Column title: `text-[15px] font-bold text-slate-800 mb-4 flex items-center gap-2`, Inter
  - Orange accent bar: `w-1 h-4 bg-orange-500 rounded-full inline-block`
- Inner table wrapper: `bg-white rounded-lg border border-slate-200 overflow-hidden`
- Table: `w-full`, rows: `border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors`
- Label cell: `px-4 py-3 text-[13px] font-medium text-slate-500 border-r border-slate-100 bg-slate-50/50` width 45%
- Value cell: `px-4 py-3 text-[13px] font-semibold text-slate-900` width 55%

**Three column instances:**
1. title="Electrical" — `electricalSpecs`
2. title="Mechanical" — `mechanicalSpecs`
3. title="Environmental" — `environmentalSpecs`

---

### Section 5 — Manufacturer Information

**Purpose:** Company metadata (website, quality system) alongside descriptive paragraphs.

**Card wrapper:** `bg-white rounded-xl shadow-sm border border-slate-200 p-8`

**Section heading:** `text-[16px] font-bold text-slate-900 mb-6 flex items-center gap-2`, Inter
- Accent bar: `w-1.5 h-5 bg-slate-600 rounded-full`
- Text: "Manufacturer Information"

**Grid:** `grid grid-cols-1 md:grid-cols-3 gap-8`

**Left column (1/3 width):** `space-y-4`
- Website info card: `bg-slate-50 p-4 rounded-lg border border-slate-200/60`
  - Label: `text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1` — "Website"
  - Link: `text-[13px] text-blue-600 hover:text-blue-700 font-medium break-all block hover:underline`; opens in new tab
- Quality system card: same card styling
  - Label: "Quality System"
  - Content: `text-[13px] text-slate-900 font-medium flex items-center gap-2`
    - Green dot: `w-2 h-2 rounded-full bg-green-500`
    - Quality system string

**Right two-column span (2/3 width):** `md:col-span-2`
- Prose container: `text-slate-600 text-[14px] leading-relaxed`
- Render each paragraph in `manufacturerInfo.description`
- First paragraph: bold the `manufacturerInfo.name` substring at its first occurrence
- Paragraphs except the last: `mb-4`

---

## Design Tokens

Use these values directly as Tailwind classes or CSS custom properties.

### Typography
| Use | Size | Weight |
|---|---|---|
| Product title | 28px mobile / 40px desktop | 700 (bold) |
| Section headings (H2) | 18px | 700 |
| Column headings | 15–16px | 700 |
| Table headers | 13px | 600 (semibold) |
| Body / table cells | 13–14px | 400 / 500 |
| Small labels / badges | 11–12px | 500–600 |

- **Font family:** Inter (Google Fonts) — weights 400, 500, 600, 700
- **Line height (body):** 1.5–1.6 (`leading-relaxed`)

### Color Palette
| Role | Value |
|---|---|
| Page background | `#f8fafc` (slate-50) |
| Card background | `#ffffff` |
| Spec column background | `#F6F7F9` |
| Primary text | `#0f172a` (slate-900) |
| Secondary text | `#475569` (slate-600) |
| Muted text | `#64748b` (slate-500) |
| CTA / primary action | `#f97316` (orange-500) |
| CTA hover | `#ea580c` (orange-600) |
| Link / active accent | `#2563eb` (blue-600) |
| Hero background | `#0f172a` (slate-900) |
| Tab bar backdrop | `rgba(255,255,255,0.05)` |
| Border (light) | `#e2e8f0` (slate-200) |
| Divider | `#f1f5f9` (slate-100) |

### Shadows & Radius
| Element | Shadow | Radius |
|---|---|---|
| Cards | `shadow-sm` (`0 1px 2px rgba(0,0,0,0.05)`) | `rounded-xl` (12px) |
| CTA button | `shadow-md shadow-orange-500/20` | `rounded-lg` (8px) |
| Hero | `shadow-2xl` | none |
| Product image | `drop-shadow(0 10px 20px rgba(0,0,0,0.15))` | n/a |

---

## Page Layout & Max Width

- Page max width: **1440px**, centered with `mx-auto`
- Horizontal padding: `px-4` mobile / `px-8` desktop
- Vertical spacing between sections: `py-6 md:py-10`, `space-y-6 md:space-y-8`
- All content below the hero lives inside this container

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `< md` (< 768px) | All 3-col grids collapse to single column; hero title stacks above tab bar; Product Highlights card columns reorder (logo top, image bottom, actions middle); tab bar scrolls horizontally |
| `≥ md` (≥ 768px) | 3-col grids active; hero title and tab bar sit side-by-side; full desktop spacing |

---

## Nuxt Integration Pattern

### Route

Create the product detail page at:

```
pages/products/[slug].vue
```

### Data Fetching

Fetch product data from your catalog API using Nuxt's `useFetch` composable:

```vue
<script setup lang="ts">
import type { ProductPageData } from '~/types/product'

const route = useRoute()
const { data: product, error } = await useFetch<ProductPageData>(
  `/api/products/${route.params.slug}`
)
</script>

<template>
  <ProductPage v-if="product" :data="product" />
  <div v-else-if="error">Product not found.</div>
</template>
```

If the catalog API returns a different shape, create a thin transformer function to map the API response to the `ProductPageData` interface before passing it as props.

### Passing Static Data (development/testing)

During development without a live API, import a static fixture file:

```vue
<script setup lang="ts">
import { exampleProduct } from '~/fixtures/example-product'
</script>

<template>
  <ProductPage :data="exampleProduct" />
</template>
```

---

## ImageWithFallback Component

`ImageWithFallback.vue` wraps a native `<img>` and swaps in an SVG placeholder if the image fails to load. This is important for product images that may not yet have assets.

```vue
<!-- components/product/ImageWithFallback.vue -->
<script setup lang="ts">
defineProps<{ src: string; alt: string; class?: string; style?: string }>()

const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgZmlsbD0iI2YxZjVmOSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iSW50ZXIsc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk0YTNiOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='

function onError(e: Event) {
  (e.target as HTMLImageElement).src = fallbackSvg
}
</script>

<template>
  <img :src="src" :alt="alt" :class="$props.class" :style="$props.style" @error="onError" />
</template>
```

---

## Acceptance Criteria

### Visual Fidelity
- [ ] Hero header background image is visible at 60% opacity with the left-to-transparent dark gradient overlay
- [ ] Category badge uses the blue tinted style; reference number is styled as muted text
- [ ] Active tab shows the correct color from `TabConfig.color` with appropriate box shadow
- [ ] Product Highlights card renders as three equal columns on desktop
- [ ] Country flag renders correctly using `flag-icons` with the correct `fi-{flagCode}` class
- [ ] CTA button ("Request Loan or Sample") is orange, full-width on mobile, auto-width on sm+
- [ ] "View Datasheet" link is hidden when `datasheetUrl` is undefined
- [ ] Component Specifications table has 8 columns with standards and bands rendered as stacked items
- [ ] Detailed Specs grid shows 3 equal columns on desktop, stacked on mobile
- [ ] Each spec column has the orange accent bar left of its title
- [ ] Manufacturer info left column shows two info cards; right side shows description paragraphs
- [ ] First occurrence of `manufacturerInfo.name` in the first paragraph is bold

### Functionality
- [ ] Clicking a tab updates the active tab styling; `defaultTab` (or first tab) is pre-selected on load
- [ ] Product image shows the SVG placeholder (not a broken image icon) when the `src` fails to load
- [ ] "View Datasheet" link opens in a new tab
- [ ] Manufacturer website link opens in a new tab with `rel="noopener noreferrer"`

### Data & Props
- [ ] All `ProductPageData` fields are correctly typed in `defineProps`
- [ ] Arrays (`standards`, `bands`, `electricalSpecs`, etc.) render all items correctly
- [ ] Empty `lnaGain` string renders an empty cell (no error)
- [ ] Tabs with all 6 color variants (`orange`, `blue`, `emerald`, `purple`, `indigo`, `green`) display correctly

### Responsive Layout
- [ ] Below `md` breakpoint: hero title and tabs stack vertically
- [ ] Below `md` breakpoint: all 3-col grids collapse to single column
- [ ] Tab bar scrolls horizontally on narrow viewports without clipping
- [ ] Product Highlights card column order on mobile: logo → actions → image

### Integration
- [ ] Page renders without error when loaded via `/products/[slug]` route in Nuxt
- [ ] All props are passed correctly from the page to `ProductPage.vue` and down to child components
- [ ] No console errors in production build

---

## Example Product Data (for Development Fixture)

Use this as a starting point for your development fixture file:

```typescript
// fixtures/example-product.ts
import type { ProductPageData } from '~/types/product'

export const exampleProduct: ProductPageData = {
  heroBackground: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920',
  productCategory: 'GPS Antenna',
  productReference: 'ANT-GPS-001',
  productTitle: 'G3ANT-3XXX High-Precision GPS Antenna',
  productDescription:
    'Aviation-grade GPS antenna with tri-band coverage and radiation-hardened design for demanding aerospace applications.',

  origin: { country: 'Canada', flagCode: 'ca' },
  manufacturerLogo: 'https://via.placeholder.com/225x100/e2e8f0/64748b?text=Logo',
  productImage: 'https://via.placeholder.com/280x280/f1f5f9/64748b?text=Product',
  datasheetUrl: 'https://example.com/datasheet.pdf',

  componentSpec: {
    mpn: 'G3ANT-3XXX',
    standards: ['DO-160G', 'MIL-STD-810'],
    technology: 'Patch Array',
    radiation: 'Report Available',
    bands: ['GPS L1 (1575 MHz)', 'GPS L2 (1227 MHz)', 'GPS L5 (1176 MHz)'],
    vswr: '<2.0:1',
    polarization: 'RHCP',
    lnaGain: '28 dB',
  },

  electricalSpecs: [
    { label: 'Supply Voltage', value: '3.3 – 5.0 VDC' },
    { label: 'Current Draw', value: '35 mA typical' },
    { label: 'Connector', value: 'SMA Female' },
    { label: 'Impedance', value: '50 Ohm' },
  ],
  mechanicalSpecs: [
    { label: 'Weight', value: '85 g' },
    { label: 'Dimensions', value: '100 × 100 × 15 mm' },
    { label: 'Housing', value: 'Anodized Aluminum' },
    { label: 'Mounting', value: 'Through-hole, 4× M3' },
  ],
  environmentalSpecs: [
    { label: 'Operating Temp', value: '-55°C to +85°C' },
    { label: 'Storage Temp', value: '-65°C to +105°C' },
    { label: 'Humidity', value: '95% RH non-condensing' },
    { label: 'Altitude', value: 'Up to 70,000 ft' },
    { label: 'Vibration', value: 'DO-160G Cat. S' },
  ],

  tabs: [
    { name: 'Aviation', color: 'orange' },
    { name: 'Space', color: 'blue' },
    { name: 'Defense', color: 'emerald' },
  ],
  defaultTab: 'Aviation',

  manufacturerInfo: {
    name: 'Antcom Corporation',
    website: { url: 'https://www.antcom.com', displayText: 'antcom.com' },
    qualitySystem: 'ISO 9001:2015 Certified',
    description: [
      'Antcom Corporation is a leading Canadian manufacturer of high-performance GNSS antennas for aviation, space, and defense since 1989.',
      'Antcom antennas are qualified to the most stringent international standards and are deployed in manned and unmanned aircraft, satellites, and ground stations worldwide.',
    ],
  },
}
```
