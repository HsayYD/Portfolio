# Yashashwin Doranala — Portfolio (Engineering Drawing Package)

A personal portfolio presented as a CAD drawing set: a bordered sheet with zone
references, a manufacturing-style title block, and sheet tabs (G00–G07) along
the bottom. Built with Next.js 16, TypeScript, Tailwind CSS 4 and lucide icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to /out — host anywhere
npm run lint
npm run typecheck
```

`npm run build` produces a fully static site in `out/` (GitHub Pages, Netlify,
Vercel, S3 …). Set `siteUrl` in `src/data/profile.ts` to your real domain.

## Where things live

| What | File |
|---|---|
| All resume content (roles, dates, education, skills, projects, contact) | `src/data/profile.ts` |
| Sheet codes, titles, drawing numbers | `src/data/sheets.ts` |
| Every project image path + figure number + caption | `src/data/images.ts` |
| Resume download | `public/resume/Yashashwin-Doranala-Resume.pdf` |

### Components

- `DrawingWorkspace` — app shell: toolbar (zoom, workspace shade, prev/next), sheet state, keyboard shortcuts, status bar
- `DrawingSheet` — paper, frame, content area, title block (collapsible on mobile)
- `DrawingBorder` — zone numbers 1–8 / A–F and centring marks
- `TitleBlock` — updates with the active sheet
- `SheetTabs` — bottom tab bar (ARIA tablist, arrow/Home/End keys)
- `SheetHeader` / `Sec` — sheet header strip and numbered section headings
- `TechnicalCallout`, `ProjectImagePlaceholder`, `ResumeDownload`, `PlatformIsometric`
- `sheets/G00General.tsx` … `sheets/G07Contact.tsx` — one file per sheet

## Adding your project photos

1. Save the image at the path listed for it in `src/data/images.ts`, e.g.
   `public/images/platform-designer/generated-assembly.png`.
2. Set `ready: true` on that entry.

The frame, figure number and caption stay put. Each entry has a `ratio`
(width ÷ height) that reserves the space — crop to roughly that ratio, or edit
the ratio. The optional portrait is the `portrait` entry
(`public/images/profile/portrait.jpg`).

## Navigation

- Click a tab, or use the ◀ ▶ controls
- `←` / `→` (or `[` / `]`) — previous / next sheet
- `0`–`7` — jump to sheet G00–G07
- Each sheet has its own URL (`/#g02`), so links can point straight to a sheet
  and the browser back button works.

## Updating the resume

Replace `public/resume/Yashashwin-Doranala-Resume.pdf` and edit
`src/data/profile.ts` to match.
