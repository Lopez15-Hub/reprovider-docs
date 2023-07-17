---
sidebar_position: 1
---
# Quickstart

### Install

with npm:

```powershell
npm i reprovider
```

### Using Reprovider

First create the repository, it can contains the interactions with an A.P.I or Database.

_**greets.repository.ts**_

```typescript
export class GreetsRepository {
  hello = () => "Hello ";
  goodBay = () => "Goodbay ";
}
```

Now create the service and inject the repository into constructor.

_**greets.service.ts**_

```typescript
import { GreetsRepository } from "../repository/greets.repository";

export class GreetsService {
  constructor(private readonly repository: GreetsRepository) {}
  sayHello = (): string => `${this.repository.hello()} World From Reprovider`;
  sayGoodbye = (): string =>
    `${this.repository.goodBay()} World From Reprovider`;
}
```

Its time to create the registry file.

It contains all services with its dependencies that will register into ServiceProvider

_**registry.ts**_

```typescript
import { Service } from "reprovider";
import { GreetsService } from "./services/greets.service";
import { GreetsRepository } from "./repository/greets.repository";

export const services: Service[] = [
  {
    description: "Service for greeting people",
    service: GreetsService,
    dependencies: [GreetsRepository],
  },
];
```

Once do you configure the services and declared into registry file. FInally we can inject the services into the app.

For that, add the ServiceProvider at the top of the app.

The service provided will be responsible of create the context that we will using later calling the useProvider hook.

_**app.tsx**_

```typescript
import { ServiceProvider } from "reprovider";
import SayHello from "./components/say-hello.component";
import { services } from "./core/registry";

const App = (): JSX.Element => {
  return (
    <ServiceProvider services={services}>
      <SayHello />
    </ServiceProvider>
  );
};

export default App;
```

### Say hello with useProvider

Finally, just import the useProvider, pass the reference of Service that you wan use and desestructure the provider.
:::tip
Optional: You can rename the provider as you want. This is recommended for understand the code, better.
:::
_**say-hello.component.tsx**_

```typescript
import { useProvider } from "reprovider";
import { GreetsService } from "../core/services/greets.service";

/**
 * Show a simple hello world
 *
 */
const SayHello = () => {
  /**
   * Optional: Also we can rename the provider or use the standard reference.
   * Is recommended rename the provider for understand the code better
   */
  const { provider: greetsService } = useProvider(GreetsService);

  return (
    <div>
      <h1>{greetsService.sayHello()}</h1>
    </div>
  );
};

export default SayHello;
```
