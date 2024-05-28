'use client';
export function getCoverParamUrl(index: number) {
    return { pathname: process.env.NEXT_PUBLIC_COVERS_URL, query: { index: index.toString() } };
}