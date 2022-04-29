import { StrokeOptions } from 'perfect-freehand';
import type { DrawShape } from '../../../types';
export declare function getFreehandOptions(shape: DrawShape): StrokeOptions;
export declare function getFillPath(shape: DrawShape): any;
export declare function getDrawStrokePoints(shape: DrawShape, options: StrokeOptions): import("perfect-freehand").StrokePoint[];
/**
 * Get path data for a stroke with the DashStyle.Draw dash style.
 */
export declare function getDrawStrokePathTDSnapshot(shape: DrawShape): any;
/**
 * Get SVG path data for a shape that has a DashStyle other than DashStyles.Draw.
 */
export declare function getSolidStrokePathTDSnapshot(shape: DrawShape): any;
//# sourceMappingURL=drawHelpers.d.ts.map