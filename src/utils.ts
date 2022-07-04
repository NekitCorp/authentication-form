export function getAssetPath(path: string) {
    const repositoryName = process.env.REPOSITORY_NAME;
    return repositoryName ? `/${repositoryName}${path}` : path;
}
