import { buildWorkerDefinition } from 'monaco-editor-workers';
buildWorkerDefinition('../../../node_modules/monaco-editor-workers/dist/workers', import.meta.url, false);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MonacoEditorReactComp } from '@typefox/monaco-editor-react';

const languageId = 'plaintext';
const codeMain = `#ff0000 (red)
#00ff00 (green)
#0000ff (blue)`;
const languageExtensionConfig = {
    id: 'plaintext',
    extensions: ['.txt'],
    aliases: ['PLAINTEXT', 'plaintext'],
    mimetypes: ['text/plain']
};
const rawMonacoEditorOptions = {
    lineHeight: 24
};
const comp = <MonacoEditorReactComp
    languageId={languageId}
    text={codeMain}
    rawMonacoEditorOptions={rawMonacoEditorOptions}
    languageExtensionConfig={languageExtensionConfig}
    theme={'vs-light'}
    webworkerUri={'./packages/examples/src/serverWorker.ts'}
    workerName={'color-lsp'}
    workerType={'module'}
    style={{
        'paddingTop': '5px',
        'height': '100%',
        'width': '100%'
    }}
/>;

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(comp);
