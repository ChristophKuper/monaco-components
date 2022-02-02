export default function defineWorkers(_basePath) {
    if (!MonacoEnvironment) return;

    const exisingFunc = MonacoEnvironment.getWorker;

    MonacoEnvironment.getWorker = function (_, label) {
        if (label === 'typescript' || label === 'javascript') {
            return new Worker(_basePath + '/assets/ts.worker.d75e32f4.js');
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new Worker(_basePath + '/assets/html.worker.3f2697f1.js');
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new Worker(_basePath + '/assets/css.worker.5157db2f.js');
        }
        if (label === 'json') {
            return new Worker(_basePath + '/assets/json.worker.66c12891.js');
        }
        if (exisingFunc) {
            return exisingFunc(_, label);
        }
    };
}
