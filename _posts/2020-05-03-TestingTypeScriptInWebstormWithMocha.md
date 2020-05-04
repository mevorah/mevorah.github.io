---
layout: post
title:  "Unit Testing TypeScript In WebStorm"
categories: [Testing]
excerpt_separator: <!--more-->
---

Recently I switched from using *Sublime Text* to Jetbrains' *WebStorm* for developing my NodeJs TypeScript web app. WebStorm comes with a lot of great features (like all Idea IDEs), but one of my favorites is its unit testing UI. Who could know why it took so long to get unit testing set up in my environment (hours), but it did. I found that there is a lot of conflicting info out there (like how the Mocha test framework can't be run on TypeScript), so hopefully this will help people looking for a distilled step-by-step guide!

## Setup

1. Install mocha:
  a. `npm install mocha`
  b. `npm install @types/mocha`
2. Install chai:
  a. `npm install chai`
  b. `npm install @types/chai`
3. Install ts-node (You should already have this)
  a. `npm install ts-node`
4. Turn on "Recompile on changes" for TypeScript
  a. In WebStorm go to Preferences > Languages & Frameworks > TypeScript > Recompile on changes
4. Verify your TypeScript tsconfig.json
  a. ```
  {
    "compilerOptions": {
        "module": "commonjs", // Required - ts-node doesn't support ES imports ([details](https://github.com/mochajs/mocha-examples/tree/master/packages/typescript))
    },
    "include": [
      "**/*.ts"
    ]
  }
  ```

## Testing

Write tests - assuming you have a structure like:
```
root
|-- src/car.ts
|-- tst/car-tests.ts
```

In `car.ts`:
```
export class Car {
    private color: string;

    constructor(
        color: string,
    ) {
        this.color = color;
    }

    getColor(): string {
    	return this.color;
    }
}
```

Then in `car-tests.ts`
```
'strict-mode'

import { Car } from "../src/car.ts";
import { assert } from "chai";

describe('Car::getColor', function() {
    it('returns the same color passed on construction', function() {
    	let specificColor: string = "red";
    	let car: Car = new Car(specificColor);
        assert(specificColor === car.getColor());
    });
});
```

## Conclusion

After you have this setup, you should be good to go to expand your test suite and make use of other offerings from [Mocha](https://mochajs.org) and [Chai](https://www.chaijs.com)!