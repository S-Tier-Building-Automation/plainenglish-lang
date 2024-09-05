# Maintenance Guide for Schneider Electric Plain English Language Extension

## Creating New Releases

1. Update the version number in `package.json`.
2. Make your code changes and commit them.
3. Package the extension:
   ```
   npx vsce package
   ```
4. Go to the GitHub repository page.
5. Click on "Releases" and then "Create a new release".
6. Set the tag version (e.g., "v0.0.4") and release title.
7. Add release notes or a changelog in the description.
8. Upload the .vsix file generated in step 3.
9. Publish the release.

## Updating version-info.json

1. Open `version-info.json`.
2. Update the "version" to match the new version number.
3. Update the "downloadUrl" to point to the new release. The format is:
   ```
   https://github.com/S-Tier-Building-Automation/plainenglish-lang/releases/download/v[VERSION]/plainenglish-lang-[VERSION].vsix
   ```
   Replace [VERSION] with the new version number.
4. Commit and push these changes to the master branch.

## Installing Updates (for users)

When a new version is available:

1. Users will see a notification in VS Code prompting them to update.
2. If they choose "Yes", it will open the GitHub release page in their browser.
3. Download the .vsix file from the release page.
4. In VS Code, go to the Extensions view (Ctrl+Shift+X).
5. Click on the "..." at the top of the Extensions view.
6. Choose "Install from VSIX...".
7. Select the downloaded .vsix file.
8. Restart VS Code when prompted.

## Troubleshooting

- If users don't see update notifications, ensure they have an active internet connection and that GitHub is accessible from their network.
- If the extension fails to load after an update, try uninstalling and reinstalling it.
- For any other issues, please create an issue in the GitHub repository.