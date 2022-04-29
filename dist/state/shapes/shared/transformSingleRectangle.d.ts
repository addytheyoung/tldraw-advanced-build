import type { TLBounds, TLShape } from '@tldraw/core';
/**
 * Transform a single rectangular shape.
 * @param shape
 * @param bounds
 */
export declare function transformSingleRectangle<T extends TLShape & {
    size: number[];
}>(shape: T, bounds: TLBounds): {
    size: any;
    point: any;
};
//# sourceMappingURL=transformSingleRectangle.d.ts.map