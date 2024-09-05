# Schneider Electric Plain English Language Extension for VS Code

[![CI](https://github.com/S-Tier-Building-Automation/plainenglish-lang/actions/workflows/ci.yml/badge.svg)](https://github.com/S-Tier-Building-Automation/plainenglish-lang/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Latest Release](https://img.shields.io/github/v/release/S-Tier-Building-Automation/plainenglish-lang?include_prereleases)](https://github.com/S-Tier-Building-Automation/plainenglish-lang/releases)

This Visual Studio Code extension provides comprehensive language support for Schneider Electric Plain English programming language, enhancing productivity and code quality for Schneider Electric automation projects.

## Features

- Syntax highlighting for Schneider Electric Plain English files (`.pe` extension)
- Intelligent code completion
- Real-time error checking and linting
- Snippets for common Schneider Electric Plain English constructs
- Hover information for language constructs
- Go to definition and find all references
- Automated versioning and release process

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/S-Tier-Building-Automation/plainenglish-lang.git
   ```
2. Open the project in Visual Studio Code.
3. Run the following commands in the terminal:
   ```
   npm install
   npm run compile
   ```
4. Press F5 to run the extension in a new Extension Development Host window.

## Usage

1. Open a `.pe` file or create a new file with a `.pe` extension.
2. Start writing Schneider Electric Plain English code.
3. Enjoy enhanced coding experience with syntax highlighting, auto-completion, and error checking.

## Example

Here's a simple example of Schneider Electric Plain English code:

```plainenglish
Numeric Input ZnOcc, EmergencyStop
Numeric Output Safety

If ZnOcc Then
  Safety = On
Else
  If EmergencyStop Then
    Safety = Off
  End If
End If
```

## Contributing

We welcome contributions to improve this extension! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

## Development

To set up the development environment:

1. Ensure you have Node.js installed.
2. Run `npm install` to install dependencies.
3. Run `npm run compile` to compile the TypeScript code.
4. Use `npm run lint` to check for code style issues.
5. Run `npm test` to execute the test suite.

## Automated Versioning and Release

This project uses GitHub Actions for automated versioning and release creation. To create a new release:

1. Go to the "Actions" tab in the GitHub repository.
2. Select the "CI" workflow.
3. Click "Run workflow" and choose the version increment type (patch, minor, or major).
4. The workflow will automatically update version numbers, create a new release, and upload the packaged extension.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have suggestions for improving the language support, please [open an issue](https://github.com/S-Tier-Building-Automation/plainenglish-lang/issues) on our GitHub repository.

## Acknowledgements

Special thanks to the Schneider Electric developer community for their invaluable input and support in creating this extension.