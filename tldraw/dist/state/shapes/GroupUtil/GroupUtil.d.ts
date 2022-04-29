import { TDShapeType, GroupShape } from '../../../types';
import { TDShapeUtil } from '../TDShapeUtil';
declare type T = GroupShape;
declare type E = SVGSVGElement;
export declare class GroupUtil extends TDShapeUtil<T, E> {
    type: TDShapeType.Group;
    canBind: boolean;
    getShape: (props: Partial<T>) => T;
    Component: any;
    Indicator: any;
    getBounds: (shape: T) => any;
    shouldRender: (prev: T, next: T) => boolean;
}
export {};
//# sourceMappingURL=GroupUtil.d.ts.map