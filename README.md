# dotenv-getter

Simply provides a global env() function to get environment variables, instead of process.env.CONSTANT

## Installation

Use the node package manager to install dotenv-getter.

```bash
npm install dotenv-getter
```

## Usage

```node
// set global env() helper
import "dotenv-getter"

// get your .env constant
const appKey = env('APP_KEY')

// provide a default value
const appEnv = env('APP_ENV', 'production')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)