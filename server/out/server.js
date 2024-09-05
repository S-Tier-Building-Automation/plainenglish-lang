"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
const documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
connection.onInitialize((params) => {
    const result = {
        capabilities: {
            textDocumentSync: node_1.TextDocumentSyncKind.Incremental,
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
async function validateTextDocument(textDocument) {
    const text = textDocument.getText();
    const pattern = /\b(If|Then|Goto)\b/g;
    const diagnostics = [];
    let match;
    while ((match = pattern.exec(text))) {
        const keyword = match[0];
        if (keyword === 'If' && text.indexOf('Then', match.index) === -1) {
            diagnostics.push({
                severity: node_1.DiagnosticSeverity.Error,
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
//# sourceMappingURL=server.js.map