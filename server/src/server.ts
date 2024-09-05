import {
  createConnection,
  TextDocuments,
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures,
  TextDocumentSyncKind,
  InitializeResult
} from 'vscode-languageserver/node';

import { TextDocument } from 'vscode-languageserver-textdocument';

const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize(() => {
  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true
      }
    }
  };
  return result;
});

documents.onDidChangeContent(change => {
  validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
  const text = textDocument.getText();
  const pattern = /\b(If|Then|Goto)\b/g;
  const diagnostics: Diagnostic[] = [];

  let match;
  while ((match = pattern.exec(text))) {
    const keyword = match[0];
    if (keyword === 'If' && text.indexOf('Then', match.index) === -1) {
      diagnostics.push({
        severity: DiagnosticSeverity.Error,
        range: {
          start: textDocument.positionAt(match.index),
          end: textDocument.positionAt(match.index + keyword.length)
        },
        message: `'If' statement must be followed by 'Then'`,
        source: 'plainenglish'
      });
    }
    // Add more rules here
  }

  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

documents.listen(connection);
connection.listen();