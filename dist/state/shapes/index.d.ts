import type { TDShapeUtil } from './TDShapeUtil';
import { RectangleUtil } from './RectangleUtil';
import { TriangleUtil } from './TriangleUtil';
import { EllipseUtil } from './EllipseUtil';
import { ArrowUtil } from './ArrowUtil';
import { GroupUtil } from './GroupUtil';
import { StickyUtil } from './StickyUtil';
import { TextUtil } from './TextUtil';
import { DrawUtil } from './DrawUtil';
import { ImageUtil } from './ImageUtil';
import { TDShape, TDShapeType } from '../../types';
import { VideoUtil } from './VideoUtil';
export declare const Rectangle: RectangleUtil;
export declare const Triangle: TriangleUtil;
export declare const Ellipse: EllipseUtil;
export declare const Draw: DrawUtil;
export declare const Arrow: ArrowUtil;
export declare const Text: TextUtil;
export declare const Group: GroupUtil;
export declare const Sticky: StickyUtil;
export declare const Image: ImageUtil;
export declare const Video: VideoUtil;
export declare const shapeUtils: {
    rectangle: RectangleUtil;
    triangle: TriangleUtil;
    ellipse: EllipseUtil;
    draw: DrawUtil;
    arrow: ArrowUtil;
    text: TextUtil;
    group: GroupUtil;
    sticky: StickyUtil;
    image: ImageUtil;
    video: VideoUtil;
};
export declare const getShapeUtil: <T extends TDShape>(shape: T | T["type"]) => TDShapeType.Draw | TDShapeUtil<T, any>;
//# sourceMappingURL=index.d.ts.map