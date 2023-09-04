<!-- 
SPDX-FileCopyrightText: 2023 Kevin de Jong <monkaii@hotmail.com>
SPDX-License-Identifier: MIT
-->

# Marked Asciidoc - An Asciidoc renderer for Marked

An Asciidoc renderer for [marked](https://www.npmjs.com/package/marked).

## Usage

```typescript
import * as marked from "marked";
import { Asciidoc } from "@dev-build-deploy/marked-asciidoc";

marked.use({ renderer: Asciidoc })
marked.parse("# Hello world!");
```

## Contributing

If you have suggestions for how `marked-asciidoc` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

- [MIT](./LICENSES/MIT.txt) © 2023 Kevin de Jong \<monkaii@hotmail.com\>

[SemVer 2.0.0]: https://semver.org
[CalVer]: https://calver.org