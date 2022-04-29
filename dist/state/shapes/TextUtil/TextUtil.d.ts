import { TextShape, TDShapeType, TransformInfo, AlignStyle } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = TextShape;
declare type E = HTMLDivElement;
export declare class TextUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Text;
    isAspectRatioLocked: boolean;
    canEdit: boolean;
    canBind: boolean;
    canClone: boolean;
    bindingDistance: number;
    getShape: (props: Partial<T>) => T;
    texts: Map<string, string>;
    Component: any;
    Indicator: any;
    getBounds: (shape: T) => any;
    shouldRender: (prev: T, next: T) => boolean;
    transform: (shape: T, bounds: TLBounds, { initialShape, scaleX, scaleY }: TransformInfo<T>) => Partial<T>;
    transformSingle: (shape: T, bounds: TLBounds, { initialShape, scaleX, scaleY }: TransformInfo<T>) => Partial<T> | void;
    onDoubleClickBoundsHandle: (shape: T) => {
        style: {
            scale: number;
            color: import("../../../types").ColorStyle;
            size: import("../../../types").SizeStyle;
            dash: import("../../../types").DashStyle;
            font?: import("../../../types").FontStyle | undefined;
            textAlign?: AlignStyle | undefined;
            isFilled?: boolean | undefined;
            customColorString?: string | undefined;
            customSize?: number | undefined;
            customOpacity?: number | undefined;
        };
        point: any;
    };
    getSvgElement: (shape: T) => SVGElement | void;
}
export {};
//# sourceMappingURL=TextUtil.d.ts.map