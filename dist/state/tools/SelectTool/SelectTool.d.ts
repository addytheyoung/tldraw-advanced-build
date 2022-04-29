import { TLBoundsCorner, TLBoundsEdge, TLBoundsEventHandler, TLBoundsHandleEventHandler, TLCanvasEventHandler, TLPointerEventHandler, TLKeyboardEventHandler, TLShapeCloneHandler } from '@tldraw/core';
import { TDShapeType } from '../../../types';
import { BaseTool } from '../BaseTool';
declare enum Status {
    Idle = "idle",
    Creating = "creating",
    Pinching = "pinching",
    PointingCanvas = "pointingCanvas",
    PointingHandle = "pointingHandle",
    PointingBounds = "pointingBounds",
    PointingClone = "pointingClone",
    TranslatingClone = "translatingClone",
    PointingBoundsHandle = "pointingBoundsHandle",
    TranslatingHandle = "translatingHandle",
    Translating = "translating",
    Transforming = "transforming",
    Rotating = "rotating",
    Brushing = "brushing",
    GridCloning = "gridCloning",
    ClonePainting = "clonePainting"
}
export declare class SelectTool extends BaseTool<Status> {
    type: "select";
    pointedId?: string;
    selectedGroupId?: string;
    pointedHandleId?: 'start' | 'end' | 'bend';
    pointedBoundsHandle?: TLBoundsCorner | TLBoundsEdge | 'rotate' | 'center' | 'left' | 'right';
    pointedLinkHandleId?: 'left' | 'center' | 'right';
    private deselect;
    private select;
    private pushSelect;
    private selectNone;
    onEnter: () => void;
    onExit: () => void;
    clonePaint: (point: number[]) => void;
    getShapeClone: (id: string, side: 'top' | 'right' | 'bottom' | 'left' | 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft') => {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Rectangle;
        size: number[];
        label?: string | undefined;
        labelPoint?: number[] | undefined;
        style: import("../../../types").ShapeStyles;
        handles?: Record<string, import("../../../types").TDHandle> | undefined;
    } | {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Ellipse;
        radius: number[];
        label?: string | undefined;
        labelPoint?: number[] | undefined;
        style: import("../../../types").ShapeStyles;
        handles?: Record<string, import("../../../types").TDHandle> | undefined;
    } | {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Triangle;
        size: number[];
        label?: string | undefined;
        labelPoint?: number[] | undefined;
        style: import("../../../types").ShapeStyles;
        handles?: Record<string, import("../../../types").TDHandle> | undefined;
    } | {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Draw;
        points: number[][];
        isComplete: boolean;
        style: import("../../../types").ShapeStyles;
        label?: string | undefined;
        handles?: Record<string, import("../../../types").TDHandle> | undefined;
    } | {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Arrow;
        bend: number;
        handles: {
            start: import("../../../types").TDHandle;
            bend: import("../../../types").TDHandle;
            end: import("../../../types").TDHandle;
        };
        decorations?: {
            start?: import("../../../types").Decoration | undefined;
            end?: import("../../../types").Decoration | undefined;
            middle?: import("../../../types").Decoration | undefined;
        } | undefined;
        label?: string | undefined;
        labelPoint?: number[] | undefined;
        style: import("../../../types").ShapeStyles;
    } | {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Text;
        text: string;
        style: import("../../../types").ShapeStyles;
        label?: string | undefined;
        handles?: Record<string, import("../../../types").TDHandle> | undefined;
    } | {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Group;
        size: number[];
        children: string[];
        style: import("../../../types").ShapeStyles;
        label?: string | undefined;
        handles?: Record<string, import("../../../types").TDHandle> | undefined;
    } | {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Sticky;
        size: number[];
        text: string;
        style: import("../../../types").ShapeStyles;
        label?: string | undefined;
        handles?: Record<string, import("../../../types").TDHandle> | undefined;
    } | {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Image;
        size: number[];
        assetId: string;
        style: import("../../../types").ShapeStyles;
        label?: string | undefined;
        handles?: Record<string, import("../../../types").TDHandle> | undefined;
    } | {
        id: any;
        point: any[] | number[];
        type: TDShapeType.Video;
        size: number[];
        assetId: string;
        isPlaying: boolean;
        currentTime: number;
        style: import("../../../types").ShapeStyles;
        label?: string | undefined;
        handles?: Record<string, import("../../../types").TDHandle> | undefined;
    } | undefined;
    onCancel: () => void;
    onKeyDown: TLKeyboardEventHandler;
    onKeyUp: TLKeyboardEventHandler;
    onPointerMove: TLPointerEventHandler;
    onPointerDown: TLPointerEventHandler;
    onPointerUp: TLPointerEventHandler;
    onDoubleClickCanvas: TLCanvasEventHandler;
    onPointShape: TLPointerEventHandler;
    onDoubleClickShape: TLPointerEventHandler;
    onRightPointShape: TLPointerEventHandler;
    onHoverShape: TLPointerEventHandler;
    onUnhoverShape: TLPointerEventHandler;
    onPointBounds: TLBoundsEventHandler;
    onRightPointBounds: TLPointerEventHandler;
    onReleaseBounds: TLBoundsEventHandler;
    onPointBoundsHandle: TLBoundsHandleEventHandler;
    onDoubleClickBoundsHandle: TLBoundsHandleEventHandler;
    onReleaseBoundsHandle: TLBoundsHandleEventHandler;
    onPointHandle: TLPointerEventHandler;
    onDoubleClickHandle: TLPointerEventHandler;
    onReleaseHandle: TLPointerEventHandler;
    onShapeClone: TLShapeCloneHandler;
}
export {};
//# sourceMappingURL=SelectTool.d.ts.map