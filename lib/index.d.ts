import type { WebpackPluginInstance } from 'webpack';
import type { Options, PreprocessedEntry, PreprocessedOutput, ProcessedOptions } from './types';
import type { Compiler, WebpackOptionsNormalized } from './types-normalized';
declare class BytenodeWebpackPlugin implements WebpackPluginInstance {
    private readonly name;
    private readonly options;
    constructor(options?: Partial<Options>);
    apply(compiler: Compiler): void;
    processOptions(options: WebpackOptionsNormalized): ProcessedOptions;
    preprocessOutput({ context, output }: WebpackOptionsNormalized): PreprocessedOutput;
    preprocessEntry({ context, entry }: WebpackOptionsNormalized): PreprocessedEntry[];
    debug(title: unknown, data: unknown, ...rest: unknown[]): void;
    log(...messages: unknown[]): void;
    setupLifecycleLogging(compiler: Compiler): void;
}
export { BytenodeWebpackPlugin, };
//# sourceMappingURL=index.d.ts.map