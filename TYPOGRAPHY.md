# Global Typography System

## Overview

This project uses a **semantic text hierarchy system** with global CSS classes that define different text levels across the application. All text styling is centralized in [src/App.css](src/App.css) following modern React best practices.

## Text Levels & Classes

### 1. **Page Title** (`.page-title`)
- **Usage**: Main page titles with animation
- **Font Size**: 5rem
- **Font Family**: Dancing Script (cursive)
- **Styling**: Gradient background, glowing animation
- **Example**: "Professional Experience", "Technical Skills", "Education & Certifications"
```tsx
<h1 className="page-title">Professional Experience</h1>
```

---

### 2. **Heading** (`.text-heading`)
- **Usage**: Major section headers with decorative underline
- **Font Size**: 2rem
- **Font Weight**: 600
- **Color**: Primary text color
- **Features**: Includes animated gradient underline (::after pseudo-element)
- **Example**: Section dividers within pages
```tsx
<h2 className="text-heading">Work Experience</h2>
<h2 className="text-heading">Education</h2>
<h2 className="text-heading">English Language Certifications</h2>
```

---

### 3. **Heading-2** (`.text-heading-2`)
- **Usage**: Smaller subsection headers (skill categories, card titles)
- **Font Size**: 1.5rem
- **Font Weight**: 700
- **Color**: Primary text color
- **Features**: Subtle text shadow for depth
- **Example**: Skill category names
```tsx
<h3 className="text-heading-2">{skillCategory.title}</h3>
```

---

### 4. **Subheading** (`.text-subheading`)
- **Usage**: Card titles, item headers, bold subsection titles
- **Font Size**: 1.2rem
- **Font Weight**: 600
- **Color**: Primary text color
- **Example**: Position titles, degree titles, certification names
```tsx
<h3 className="text-subheading">{experienceItem.position}</h3>
<h3 className="text-subheading">{educationItem.degree}</h3>
```

---

### 5. **Label** (`.text-label`)
- **Usage**: Section labels, metadata headers, form labels
- **Font Size**: 1rem
- **Font Weight**: 600
- **Color**: Primary text color
- **Features**: Uppercase, letter-spacing
- **Example**: "Key Responsibilities", "Technologies & Tools", "Score Breakdown"
```tsx
<h5 className="text-label">Key Responsibilities</h5>
<h5 className="text-label">Relevant Courses</h5>
```

---

### 6. **Primary** (`.text-primary`)
- **Usage**: Main body text, descriptions, content
- **Font Size**: 1rem
- **Font Weight**: 500
- **Color**: Primary text color
- **Line Height**: 1.6
- **Example**: Experience descriptions, about paragraphs
```tsx
<p className="text-primary">
  Software engineer with a strong foundation in data structures...
</p>
```

---

### 7. **Secondary** (`.text-secondary`)
- **Usage**: Supporting text, metadata, lighter descriptions
- **Font Size**: 0.95rem
- **Color**: Secondary text color (lighter)
- **Font Style**: Italic
- **Example**: Locations, dates, company/university names as supplementary info
```tsx
<p className="text-secondary">{companyName}</p>
<p className="text-secondary">{location}</p>
```

---

### 8. **Tertiary** (`.text-tertiary`)
- **Usage**: Very light supporting information
- **Font Size**: 0.9rem
- **Color**: Tertiary text color (very light)
- **Example**: Credential IDs, expiration dates, very small supporting text
```tsx
<div className="text-tertiary">ID: {credentialId}</div>
<div className="text-tertiary">Expires: {expiryDate}</div>
```

---

### 9. **Accent** (`.text-accent`)
- **Usage**: Highlighted important text, interactive elements
- **Font Size**: 1.1rem
- **Font Weight**: 600
- **Color**: Primary accent color (bright cyan)
- **Example**: Company names, important metrics, key values
```tsx
<h4 className="text-accent">{companyName}</h4>
<span className="text-accent">{statValue}</span>
```

---

### 10. **Accent-Secondary** (`.text-accent-secondary`)
- **Usage**: Secondary accent highlighting (success/special values)
- **Font Size**: 1rem
- **Font Weight**: 700
- **Color**: Secondary accent color (teal/green)
- **Example**: GPA highlights, success indicators
```tsx
<span className="text-accent-secondary">{gpa}</span>
```

---

### 11. **Badge** (`.text-badge`)
- **Usage**: Inline badges, duration tags, small highlighted elements
- **Font Size**: 0.95rem
- **Font Weight**: 600
- **Color**: Accent color on subtle gradient background
- **Features**: Padding, border-radius, inline-block display
- **Example**: Duration badges, year badges
```tsx
<div className="text-badge">{duration}</div>
<div className="text-badge">{graduationYear}</div>
```

---

### 12. **Small** (`.text-small`)
- **Usage**: Tiny supporting text, footer information
- **Font Size**: 0.85rem
- **Color**: Secondary text color
- **Example**: Small disclaimers, copyright info
```tsx
<span className="text-small">Copyright © 2024</span>
```

---

## Color Scheme

All text uses CSS variables defined in `:root`:

| Class | Color Variable | Purpose |
|-------|----------------|---------|
| `.text-primary` | `--color-text-primary` | Main content text (#F0F5FA) |
| `.text-secondary` | `--color-text-secondary` | Supporting text (#D4DCE6) |
| `.text-tertiary` | `--color-text-tertiary` | Light supporting text (#B5C4D4) |
| `.text-accent` | `--ocean-primary` | Primary highlights (bright cyan #38BDF8) |
| `.text-accent-secondary` | `--ocean-secondary` | Secondary highlights (teal #34D399) |
| `.text-badge` | `--ocean-primary` + gradient background | Highlighted badges |

---

## Implementation Guidelines

### ✅ DO

1. **Use semantic classes** - Choose the class that best matches the text's role
   ```tsx
   // Good
   <h3 className="text-subheading">React</h3>
   <p className="text-primary">Experienced in building scalable systems</p>
   ```

2. **Combine with semantic HTML** - Use appropriate HTML tags
   ```tsx
   // Good
   <h1 className="page-title">Professional Experience</h1>
   <h2 className="text-heading">Work History</h2>
   <h3 className="text-subheading">Senior Engineer</h3>
   <p className="text-primary">Description...</p>
   ```

3. **Stack classes for additional styling** - Add global classes without losing semantics
   ```tsx
   // Good
   <p className="text-primary" style={{ marginTop: '1rem' }}>Text</p>
   ```

4. **Use CSS variables** - All colors are variables, allowing for easy theme changes
   ```css
   color: var(--ocean-primary);
   background: var(--ocean-gradient-subtle);
   ```

### ❌ DON'T

1. **Don't mix old custom classes with new global classes**
   ```tsx
   // Bad - old style
   <h3 className="position-title">Senior Engineer</h3>
   
   // Good - new style
   <h3 className="text-subheading">Senior Engineer</h3>
   ```

2. **Don't use inline styles for text properties** - Use global classes instead
   ```tsx
   // Bad
   <p style={{ fontSize: '1rem', color: '#F0F5FA' }}>Text</p>
   
   // Good
   <p className="text-primary">Text</p>
   ```

3. **Don't override text classes with inline styles** - Extend with margin/padding instead
   ```tsx
   // Bad
   <p className="text-primary" style={{ fontSize: '1.2rem' }}>Text</p>
   
   // Good
   <p className="text-primary" style={{ marginTop: '1rem' }}>Text</p>
   ```

4. **Don't create new text-related CSS classes** - Use or extend the global system
   ```css
   /* Bad - creates maintenance burden */
   .my-custom-heading { }
   
   /* Good - extend existing structure if needed */
   .text-heading { }
   ```

---

## Real-World Examples

### Experience Card
```tsx
<div className="experience-card">
  <div className="experience-header">
    <div className="position-info">
      <h3 className="text-subheading">{exp.position}</h3>
      <h4 className="text-accent">{exp.company}</h4>
      <p className="text-secondary">{exp.location}</p>
    </div>
    <div className="text-badge">{exp.duration}</div>
  </div>
  
  <p className="text-primary">{exp.description}</p>
  
  <div className="responsibilities-section">
    <h5 className="text-label">Key Responsibilities</h5>
    <ul>
      {exp.responsibilities.map(r => (
        <li key={r} className="text-primary">{r}</li>
      ))}
    </ul>
  </div>
</div>
```

### About Section
```tsx
<div className="animate-in info-container">
  <p className="text-primary" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)' }}>
    <RocketOutlined style={{ color: 'var(--ocean-primary)', marginRight: '10px' }}/>
    Software engineer with a strong foundation in data structures...
  </p>
</div>
```

### Education Card
```tsx
<div className="education-card">
  <div className="education-header">
    <h3 className="text-subheading">{edu.degree}</h3>
    <div className="text-badge">{edu.graduationYear}</div>
  </div>
  
  <div className="university-info">
    <h4 className="text-accent">{edu.university}</h4>
    <p className="text-secondary">{edu.location}</p>
  </div>
  
  <div className="education-details">
    <div className="detail-row">
      <span className="text-label">GPA:</span>
      <span className="text-accent-secondary">{edu.gpa}</span>
    </div>
  </div>
  
  <div className="courses-section">
    <h5 className="text-label">Relevant Courses</h5>
  </div>
</div>
```

---

## Hierarchy Reference

```
.page-title                (5rem)    ← Page main title, largest, animated
    ↓
.text-heading              (2rem)    ← Section headers with underline
    ↓
.text-heading-2            (1.5rem)  ← Subsection headers
    ↓
.text-subheading           (1.2rem)  ← Card/item titles
    ↓
.text-label                (1rem)    ← Metadata labels, uppercase
    ↓
.text-primary              (1rem)    ← Body text, main content
    ↓
.text-badge                (0.95rem) ← Highlighted badges
.text-secondary            (0.95rem) ← Supporting metadata
    ↓
.text-tertiary             (0.9rem)  ← Light info, smallest
.text-small                (0.85rem) ← Tiny text
```

---

## Maintenance & Updates

If you need to update the typography system:

1. **Edit [src/App.css](src/App.css)** - All text classes defined here
2. **Update [TYPOGRAPHY.md](TYPOGRAPHY.md)** - Keep documentation in sync
3. **Find & replace old classes** - Use search to find components using old custom classes
4. **No component-specific CSS needed** - All text styling should be global

---

## Benefits of This Approach

✅ **Consistency** - All text styling follows the same semantic hierarchy  
✅ **Maintainability** - Update all text styling in one place  
✅ **Scalability** - Easy to add new text levels if needed  
✅ **Accessibility** - Semantic HTML + meaningful class names  
✅ **Theme-friendly** - CSS variables allow quick theme switching  
✅ **DRY Principle** - No duplicate styling across components  
