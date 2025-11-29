# Typography Quick Reference

## Text Classes Hierarchy

| Class | Size | Weight | Purpose | Example |
|-------|------|--------|---------|---------|
| `.page-title` | 5rem | 700 | Main page headers | `<h1 className="page-title">Skills</h1>` |
| `.text-heading` | 2rem | 600 | Section headers | `<h2 className="text-heading">Experience</h2>` |
| `.text-heading-2` | 1.5rem | 700 | Subsections | `<h3 className="text-heading-2">Frontend</h3>` |
| `.text-subheading` | 1.2rem | 600 | Card titles | `<h3 className="text-subheading">React</h3>` |
| `.text-label` | 1rem | 600 | Labels (uppercase) | `<h5 className="text-label">KEY SKILLS</h5>` |
| `.text-primary` | 1rem | 500 | Body text | `<p className="text-primary">Description...</p>` |
| `.text-accent` | 1.1rem | 600 | Highlights (cyan) | `<h4 className="text-accent">Company</h4>` |
| `.text-accent-secondary` | 1rem | 700 | Highlights (teal) | `<span className="text-accent-secondary">4.0</span>` |
| `.text-badge` | 0.95rem | 600 | Badges | `<div className="text-badge">2 years</div>` |
| `.text-secondary` | 0.95rem | 400 | Supporting | `<p className="text-secondary">Location</p>` |
| `.text-tertiary` | 0.9rem | 400 | Light info | `<div className="text-tertiary">ID: XYZ</div>` |
| `.text-small` | 0.85rem | 400 | Tiny text | `<span className="text-small">©2024</span>` |

## Colors

- **Primary Text**: `--color-text-primary` (#F0F5FA)
- **Secondary Text**: `--color-text-secondary` (#D4DCE6)
- **Tertiary Text**: `--color-text-tertiary` (#B5C4D4)
- **Accent**: `--ocean-primary` (Cyan #38BDF8)
- **Accent Secondary**: `--ocean-secondary` (Teal #34D399)

## Common Patterns

### Experience Card
```tsx
<h3 className="text-subheading">{position}</h3>
<h4 className="text-accent">{company}</h4>
<p className="text-secondary">{location}</p>
<div className="text-badge">{duration}</div>
<p className="text-primary">{description}</p>
<h5 className="text-label">RESPONSIBILITIES</h5>
```

### Section Header
```tsx
<h2 className="text-heading">Work Experience</h2>
```

### Education Card
```tsx
<h3 className="text-subheading">{degree}</h3>
<h4 className="text-accent">{university}</h4>
<p className="text-secondary">{location}</p>
<div className="text-badge">{year}</div>
<span className="text-label">GPA:</span>
<span className="text-accent-secondary">{gpa}</span>
```

## Usage Tips

✅ Use semantic HTML tags + class names  
✅ Combine spacing with inline styles: `style={{ marginTop: '1rem' }}`  
✅ Stack multiple text classes if needed  
✅ Refer to TYPOGRAPHY.md for detailed examples

❌ Don't use custom text class names  
❌ Don't use inline font-size/color styles  
❌ Don't override with inline styles  

## Documentation
See [TYPOGRAPHY.md](TYPOGRAPHY.md) for complete reference with examples.
