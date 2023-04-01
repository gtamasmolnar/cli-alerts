# cli-alerts

## Install

```sh
npm install @gtamo/cli-alerts
```

## Usage

```js
import alert from '@gtamo/cli-alerts';

// Provide the type, msg, and name options.
alert({type: `success`, msg: `Everything finished!`});
// Prints: ✔ SUCCESS Everything finished!

alert({type: `success`, msg: `Everything finished!`, name: `DONE`});
// Prints: ✔ DONE Everything finished!

alert({type: `warning`, msg: `You didn't add something!`});
// Prints: ⚠ WARNING You didn't add something!

alert({type: `info`, msg: `Awais is really awesome!`});
// Prints: ℹ INFO Awais is really awesome!

alert({type: `error`, msg: `Something went wrong!`});
// Prints: ✖ ERROR Something went wrong!
```

## API

### alert(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

##### ❯ type

Type: `string`<br>
Default: `error`

##### ❯ msg

Type: `string`<br>
Default: `You forgot to define all options.` (Error message)

##### ❯ name

Type: `string`<br>
Default: `''` (Empty string)

## Changelog

[❯ Read the changelog here →](changelog.md)

## License & Conduct

- MIT © [Tamas Molnar](LICENSE)
- [Code of Conduct](code-of-conduct.md)
