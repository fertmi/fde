import { IResponse } from './IResponse';

/**
 * Markdown response
 */
export interface IMarkdownResponse extends IResponse {
    /**
     * Text in markdown style
     */
    text?: string;
}