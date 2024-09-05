import * as path from 'path';
import { workspace, ExtensionContext, window, commands, Uri } from 'vscode';
import * as https from 'https';
import * as fs from 'fs';

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  const serverModule = context.asAbsolutePath(
    path.join('server', 'out', 'server.js')
  );
  const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions
    }
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'plainenglish' }],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
    }
  };

  client = new LanguageClient(
    'plainenglishLanguageServer',
    'Plain English Language Server',
    serverOptions,
    clientOptions
  );

  client.start();

  // Check for updates every day
  setInterval(checkForUpdates, 24 * 60 * 60 * 1000);
  // Also check for updates on activation
  checkForUpdates();
}

function checkForUpdates() {
  const versionUrl = 'https://raw.githubusercontent.com/S-Tier-Building-Automation/plainenglish-lang/main/version-info.json';
  https.get(versionUrl, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const versionInfo = JSON.parse(data);
      const currentVersion = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'package.json'), 'utf8')).version;
      if (versionInfo.version !== currentVersion) {
        promptForUpdate(versionInfo.downloadUrl);
      }
    });
  }).on('error', (err) => {
    console.error('Error checking for updates:', err);
  });
}

function promptForUpdate(downloadUrl: string) {
  window.showInformationMessage(
    'A new version of the Plain English Language extension is available. Would you like to download it?',
    'Yes', 'No'
  ).then(selection => {
    if (selection === 'Yes') {
      commands.executeCommand('vscode.open', Uri.parse(downloadUrl));
    }
  });
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}