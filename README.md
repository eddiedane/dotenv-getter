# dotenv-getter

Simply provides a global env() function to get environment variables, instead of process.env.CONSTANT

## Installation

Use the node package manager to install dotenv-getter.

```bash
npm install dotenv-getter
```

## Usage

```node
// configures dotenv and sets global env() helper
import "dotenv-getter"

// get your .env constant
const appKey = env('APP_KEY')

// provide a default value
const appEnv = env('APP_ENV', 'production')
```

## Flexible

When preloading dotenv from the command line, like when using import statements (checkout the [dotenv docs](https://www.npmjs.com/package/dotenv) for more info)

```
$ node -r dotenv/config your_script.js
```

Set only global env() helper

```
import "dotenv-getter/helper"
```

Manually configure dotenv or use the parse() function

```
// imports dotenv and sets global env() helper
import { config, parse } from 'dotenv-getter/dotenv'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)