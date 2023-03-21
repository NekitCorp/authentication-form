export const REPOSITORY_NAME = process.env.NEXT_PUBLIC_REPOSITORY_NAME;
export const PREFIX = REPOSITORY_NAME ? `/${REPOSITORY_NAME}` : '';

/**
 * https://nextjs.org/docs/api-reference/next.config.js/basepath#images
 * When using the `next/image` component, you will need to add the `basePath` in front of src.
 */
export function getAssetPath(path: string) {
    return `${PREFIX}${path}`;
}
