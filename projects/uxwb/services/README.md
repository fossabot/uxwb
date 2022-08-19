# @uxwb/services

## Installation

```bash
  $ npm i @uxwb/services --save
```

## Config

```typescript
class Config {
  ajaxPrefixUrl?:string;
  webSocketUrl?:string;
}
```
## Use

```typescript
import { UxwbServicesModule } from '@uxwb/services';

@NgModule({
  ...
  imports: [
    ...
    UxwbServicesModule.forRoot({ ajaxPrefixUrl:'/api', webSocketUrl:'/ws' }),
  ],
  ...
})
```

## Donate

You can support this and other projects by following the [link](https://sobe.ru/na/X2R2S0s9u1d8).
