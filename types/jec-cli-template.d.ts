/*!
 * JEC CLI TEMPLATE Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-cli-template" {

export abstract class AbstractTemplateGenerator implements TemplateGenerator {    constructor();    protected _sanitizerMap: Map<string, Function>;    protected cleanPattern(template: string, pattern: string, replaceValue: string): string;    generate(config: any): string;    clean(template: string): string;    getSanitizers(): Map<string, Function>;}export class BootstrapTemplateGenerator extends AbstractTemplateGenerator implements TemplateGenerator {    constructor();    generate(config: any): string;    clean(template: string): string;}export class WebJsletTemplateGenerator extends AbstractTemplateGenerator implements TemplateGenerator {    constructor();    private initObj();    generate(config: any): string;    clean(template: string): string;}export interface JecTemplate {    getTemplate(): string;}export class BootstrapTemplate implements JecTemplate {    constructor();    getTemplate(): string;}export class WebJsletTemplate implements JecTemplate {    constructor();    getTemplate(): string;}export interface TemplateGenerator {    generate(config: any): string;    clean(template: string): string;    getSanitizers(): Map<string, Function>;}export class FileWriter {    constructor();    write(generatorClass: any, config: any, callback: Function): void;}export class MapUtils {    static objectToMap(obj: any): Map<string, any>;}export class SanitizerUtils {    static readonly EMPTY_STRING: string;    static readonly COMA: string;    static sanitizeStringList(input: string): string;}export class TemplateBuilder {    constructor();    build(generatorClass: any, config: any): string;}export class TemplatePropertiesProcessor {    constructor();    private static readonly PROP_PATTERN;    private static readonly FUNCTION_PATTERN;    private sanitize(template, input, config, sanitizers);    private replace(template, input, config);    resolve(template: string, config: Map<string, any>, sanitizers: Map<string, Function>): string;}
}