import type { Configuration, Entry, EntryFunc, Output, Compiler as WebpackCompiler } from 'webpack';
interface Compiler extends WebpackCompiler {
    options: WebpackOptionsNormalized;
}
interface EntryPoint {
    getFiles(): string[];
}
interface WebpackOptionsNormalized extends Configuration {
    entry: EntryNormalized;
    output: OutputNormalized;
}
declare type EntryNormalized = string | string[] | Entry | EntryFunc;
interface OutputNormalized extends Output {
    filename: string;
    path: string;
}
export type { Compiler, EntryPoint, WebpackOptionsNormalized, };
//# sourceMappingURL=types-normalized.d.ts.map