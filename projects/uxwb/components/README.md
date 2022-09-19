# @uxwb/components

## Installation

```bash
  $ npm i @uxwb/components --save
```

## Use

`styles.scss`

```scss
@import "@uxwb/components/style/core.scss";
```

`app.module.ts`

```typescript
import { UxwbComponentsModule } from '@uxwb/components';

@NgModule({
  ...
  imports: [
    ...
    UxwbComponentsModule,
  ],
  ...
})
```

## Components

* uxwb-list
* uxwb-input
