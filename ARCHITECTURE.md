# Modern React Architecture

## Overview

The project follows modern React best practices with strict separation of concerns:

```
src/
├── constants/              # Pure data (NO React/JSX)
│   ├── aboutData.ts
│   ├── skillsData.ts
│   ├── experienceData.ts
│   └── educationData.ts
├── hooks/                  # Custom hooks (logic ONLY, return data/functions)
│   ├── useAbout.ts        # Returns pure data (AboutSkill[], AboutStatData[])
│   ├── useSkills.ts       # Returns pure data (SkillCategory[])
│   ├── useExperiences.ts  # Returns pure data (Experience[])
│   ├── useEducation.ts    # Returns pure data (Education[], Certification[])
│   └── index.ts
├── utils/                  # Utility functions (NO hooks, NO state)
│   └── iconMapper.tsx     # Pure function to map icon strings to components
├── components/             # Presentational components (render JSX)
│   ├── StatDetails/
│   │   └── StatDetails.tsx  # Renders detailed stat information
│   ├── FiveInARow/
│   ├── Header/
│   └── Sidebar/
└── pages/                  # Page components (use hooks + components)
    ├── About/
    ├── Skills/
    ├── Experience/
    └── Education/
```

## Architecture Principles

### 1. **Constants Layer** (`src/constants/`)

**Purpose**: Store pure data, configuration, and static values

**Rules**:
- ❌ NO React imports
- ❌ NO JSX/Components
- ✅ Plain objects, arrays, and strings
- ✅ Type-safe with TypeScript
- ✅ Immutable data

### 2. **Utility Functions** (`src/utils/`)

**Purpose**: Pure utility functions with no side effects

**Rules**:
- ❌ NO React hooks
- ❌ NO state or side effects
- ✅ Pure functions (same input = same output)
- ✅ Type-safe
- ✅ Can return JSX components (like icon mappers)

**Example**:
```typescript
// ✅ GOOD - Pure function
export const getIconComponent = (iconType: string): React.ReactNode => {
  return iconMap[iconType] || <CodeOutlined />;
};
```

### 3. **Hooks Layer** (`src/hooks/`)

**Purpose**: Encapsulate business logic and data fetching

**Responsibilities**:
- Fetch/process data from constants
- Handle memoization with useMemo
- Integrate with React Router (useNavigate, etc.)
- Transform raw data into a usable format

**IMPORTANT RULE**: 
- ✅ Return **data/functions ONLY** (string, number, object, array)
- ❌ Do NOT return JSX components
- Use `.ts` file extension (not `.tsx`)

**Example**:
```typescript
// hooks/useAbout.ts ✅ CORRECT
export const useAboutStats = (): AboutStatData[] => {
  return useMemo(() => ABOUT_STATS_DATA, []);
};

// ❌ WRONG - Don't do this in hooks
export const useAboutStats = (): StatItem[] => {
  return useMemo(() => {
    return ABOUT_STATS_DATA.map(stat => ({
      ...stat,
      details: <div>{/* JSX here */}</div>  // ❌ NO JSX in hooks
    }));
  }, []);
};
```

### 4. **Component Layer** (`src/components/` & `src/pages/`)

**Purpose**: Render UI and handle user interactions

**Responsibilities**:
- Use hooks to get data
- Transform data into JSX using utility functions
- Handle user interactions
- Manage local UI state (modals, forms, etc.)

**Rules**:
- ✅ Import from hooks and utilities
- ✅ Create JSX here
- ✅ Handle interactions and navigation
- ❌ Don't fetch/process complex data directly

**Example**:
```typescript
// components/StatDetails/StatDetails.tsx ✅ CORRECT
export const StatDetails: React.FC<StatDetailsProps> = ({ stat }) => {
  const navigate = useNavigate();
  const details = ABOUT_STATS_DETAILS[stat.detailsKey];
  
  return (
    <div>
      <Title>{details.title}</Title>
      {/* JSX rendering here */}
    </div>
  );
};
```

## Data Flow

```
Constants (Raw Data)
        ↓
   Hooks (Process & Memoize Data)
        ↓
   Utils (Map data to components/JSX)
        ↓
  Components (Render UI)
        ↓
    UI (User Interaction)
```

## File Extension Rules

| Extension | Purpose | Can Return JSX | Can Use Hooks |
|-----------|---------|---|---|
| `.ts` | Pure data/logic | ❌ No | ✅ Yes (hooks only) |
| `.tsx` | Components that render JSX | ✅ Yes | ✅ Yes |

**Applied in this project**:
- `hooks/*.ts` - Data-only hooks
- `utils/*.tsx` - Utility functions that return JSX
- `components/**/*.tsx` - Components that render
- `constants/*.ts` - Pure data

## When to Use Each Layer

### Constants
- Static configuration
- Default values
- Data that rarely changes
- Content/text/labels

### Utils
- Icon mapping
- Date formatting
- String manipulation
- Utility components (like icon getters)
- Pure functions with no dependencies

### Hooks
- Data transformation
- Memoization
- React Router integration
- Complex state logic (future)
- Return pure data ONLY

### Components
- Render UI
- Handle clicks/forms
- Use hooks to get data
- Transform data to JSX (using utils if needed)
- Manage local UI state

## Usage Examples

### Using Hooks + Utils + Components

```typescript
// Step 1: Get data from hook (pure data)
function AboutPage() {
  const statsData = useAboutStats();  // Returns AboutStatData[]
  
  // Step 2: Transform to JSX using component
  return (
    <Modal open={isOpen}>
      <StatDetails stat={statsData[0]} />  {/* Component handles JSX */}
    </Modal>
  );
}

// Step 3: Component renders with help from utils
export const StatDetails = ({ stat }) => {
  const icon = getIconComponent(stat.iconType);  {/* Utils for icon mapping */}
  
  return (
    <div>
      {icon}
      {/* JSX rendering here */}
    </div>
  );
};
```

### Creating a New Feature (3-Step Process)

**Step 1: Add data to constants** (`src/constants/featureData.ts`):
```typescript
export const FEATURE_DATA = [
  { id: 1, name: 'Item 1', iconType: 'code' }
];
```

**Step 2: Create a hook** (`src/hooks/useFeature.ts`):
```typescript
export const useFeature = (): FeatureData[] => {
  return useMemo(() => FEATURE_DATA, []);
};
```

**Step 3: Use in component** (`src/components/FeatureCard.tsx`):
```typescript
import { getIconComponent } from '../utils/iconMapper';
import { useFeature } from '../hooks/useFeature';

export function FeatureCard() {
  const data = useFeature();  // Get pure data
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {getIconComponent(item.iconType)}  {/* Utils for JSX */}
          {item.name}
        </div>
      ))}
    </div>
  );
}
```

## Refactoring Example: About Page

## Benefits of This Architecture

| Aspect | Benefit |
|--------|---------|
| **Testability** | Constants and hooks are easy to unit test |
| **Reusability** | Hooks can be used across multiple components |
| **Maintainability** | Clear separation makes code easier to understand |
| **Scalability** | Easy to add new features following the pattern |
| **Performance** | useMemo prevents unnecessary recalculations |
| **Type Safety** | Full TypeScript support at all layers |

## Migration Notes

This architecture was refactored from:
- ❌ Storing JSX components in constants
- ❌ Inline data in components
- ❌ Duplicate logic across components

To:
- ✅ Pure data in constants
- ✅ Logic in custom hooks
- ✅ Clean, focused components
