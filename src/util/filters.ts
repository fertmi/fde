
/**
 * Get the backend end point
 */
export function getBackendEndpoint() : string {
    return window.location.origin;
}

/**
 * The substitution of the href
 * @param content The content
 * @param local Currect language
 */
export function hrefSubstitute(content: string, local: string) : string {

    return replace(content, (arg: string) => {
        const url = `${getBackendEndpoint()}/${local}/events${arg}`;
        return url;
    });

}

export function hrefSubstituteFacts(content: string, local: string) : string {

    return replace(content, (arg: string) => {
        const url = `${getBackendEndpoint()}/${local}/facts/${arg}`;
        return url;
    });

}

/**
 * The function to substitute moustache defined variables in input string
 * @example Hello {{user_name}} -> Hello UserName
 * @param body The input string
 * @param resolver The resolver function
 */
const replace = (body: string, resolver: (arg: string) => string): string => {
    return body.replace(new RegExp('\{{.*?\}}', 'g'), (arg) => {
        arg = arg.replace(new RegExp('{{|}}', 'g'), '');
        let e = resolver(arg);
        if (e === undefined) {
            return 'undefined';
        }
        return e;
    });
};
