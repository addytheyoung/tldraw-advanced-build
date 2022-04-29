import { TLBoundsEventHandler, TLBoundsHandleEventHandler, TLKeyboardEventHandler, TLShapeCloneHandler, TLCanvasEventHandler, TLPageState, TLPinchEventHandler, TLPointerEventHandler, TLWheelEventHandler, TLDropEventHandler } from '@tldraw/core';
import { TDDocument, AlignType, StretchType, DistributeType, ShapeStyles, TDShape, TDShapeType, TDSnapshot, TDPage, TDBinding, TldrawCommand, TDUser, SessionType, TDToolType, TDAsset, TDExportTypes, TDAssets, TDExport } from '../types';
import { FileSystemHandle } from './data';
import { TLDR } from './TLDR';
import { SessionArgsOfType, TldrawSession } from './sessions';
import type { BaseTool } from './tools/BaseTool';
import { SelectTool } from './tools/SelectTool';
import { EraseTool } from './tools/EraseTool';
import { TextTool } from './tools/TextTool';
import { DrawTool } from './tools/DrawTool';
import { EllipseTool } from './tools/EllipseTool';
import { RectangleTool } from './tools/RectangleTool';
import { TriangleTool } from './tools/TriangleTool';
import { LineTool } from './tools/LineTool';
import { ArrowTool } from './tools/ArrowTool';
import { StickyTool } from './tools/StickyTool';
import { StateManager } from './StateManager';
export interface TDCallbacks {
    /**
     * (optional) A callback to run when the component mounts.
     */
    onMount?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the component's state changes.
     */
    onChange?: (state: TldrawApp, reason?: string) => void;
    /**
     * (optional) A callback to run when the user creates a new project through the menu or through a keyboard shortcut.
     */
    onNewProject?: (state: TldrawApp, e?: KeyboardEvent) => void;
    /**
     * (optional) A callback to run when the user saves a project through the menu or through a keyboard shortcut.
     */
    onSaveProject?: (state: TldrawApp, e?: KeyboardEvent) => void;
    /**
     * (optional) A callback to run when the user saves a project as a new project through the menu or through a keyboard shortcut.
     */
    onSaveProjectAs?: (state: TldrawApp, e?: KeyboardEvent) => void;
    /**
     * (optional) A callback to run when the user opens new project through the menu or through a keyboard shortcut.
     */
    onOpenProject?: (state: TldrawApp, e?: KeyboardEvent) => void;
    /**
     * (optional) A callback to run when the opens a file to upload.
     */
    onOpenMedia?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user signs in via the menu.
     */
    onSignIn?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user signs out via the menu.
     */
    onSignOut?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the state is patched.
     */
    onPatch?: (state: TldrawApp, reason?: string) => void;
    /**
     * (optional) A callback to run when the state is changed with a command.
     */
    onCommand?: (state: TldrawApp, reason?: string) => void;
    /**
     * (optional) A callback to run when the state is persisted.
     */
    onPersist?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user undos.
     */
    onUndo?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user redos.
     */
    onRedo?: (state: TldrawApp) => void;
    /**
     * (optional) A callback to run when the user changes the current page's shapes.
     */
    onChangePage?: (app: TldrawApp, shapes: Record<string, TDShape | undefined>, bindings: Record<string, TDBinding | undefined>, assets: Record<string, TDAsset | undefined>) => void;
    /**
     * (optional) A callback to run when the user creates a new project.
     */
    onChangePresence?: (state: TldrawApp, user: TDUser) => void;
    /**
     * (optional) A callback to run when an asset will be deleted.
     */
    onAssetDelete?: (assetId: string) => void;
    /**
     * (optional) A callback to run when an asset will be created. Should return the value for the image/video's `src` property.
     */
    onAssetCreate?: (file: File, id: string) => Promise<string | false>;
    /**
     * (optional) A callback to run when the user exports their page or selection.
     */
    onExport?: (info: TDExport) => Promise<void>;
}
export declare class TldrawApp extends StateManager<TDSnapshot> {
    callbacks: TDCallbacks;
    tools: {
        select: SelectTool;
        erase: EraseTool;
        text: TextTool;
        draw: DrawTool;
        ellipse: EllipseTool;
        rectangle: RectangleTool;
        triangle: TriangleTool;
        line: LineTool;
        arrow: ArrowTool;
        sticky: StickyTool;
    };
    currentTool: BaseTool;
    session?: TldrawSession;
    readOnly: boolean;
    isDirty: boolean;
    isCreating: boolean;
    originPoint: number[];
    currentPoint: number[];
    previousPoint: number[];
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    ctrlKey: boolean;
    spaceKey: boolean;
    isPointing: boolean;
    isForcePanning: boolean;
    editingStartTime: number;
    fileSystemHandle: FileSystemHandle | null;
    viewport: any;
    rendererBounds: any;
    selectHistory: {
        stack: string[][];
        pointer: number;
    };
    clipboard?: {
        shapes: TDShape[];
        bindings: TDBinding[];
        assets: TDAsset[];
    };
    rotationInfo: {
        selectedIds: string[];
        center: number[];
    };
    pasteInfo: {
        center: number[];
        offset: number[];
    };
    constructor(id?: string, callbacks?: TDCallbacks);
    protected migrate: (state: TDSnapshot) => TDSnapshot;
    protected onReady: () => void;
    /**
     * Cleanup the state after each state change.
     * @param state The new state
     * @param prev The previous state
     * @protected
     * @returns The final state
     */
    protected cleanup: (state: TDSnapshot, prev: TDSnapshot) => TDSnapshot;
    onPatch: (state: TDSnapshot, id?: string | undefined) => void;
    onCommand: (state: TDSnapshot, id?: string | undefined) => void;
    onReplace: () => void;
    onUndo: () => void;
    onRedo: () => void;
    onPersist: () => void;
    private prevSelectedIds;
    /**
     * Clear the selection history after each new command, undo or redo.
     * @param state
     * @param id
     */
    protected onStateDidChange: (_state: TDSnapshot, id?: string | undefined) => void;
    private justSent;
    private prevShapes;
    private prevBindings;
    private prevAssets;
    private broadcastPageChanges;
    getReservedContent: (coreReservedIds: string[], pageId?: string) => {
        reservedShapes: Record<string, TDShape>;
        reservedBindings: Record<string, import("../types").ArrowBinding>;
        strongReservedShapeIds: Set<string>;
    };
    /**
     * Manually patch in page content.
     */
    replacePageContent: (shapes: Record<string, TDShape>, bindings: Record<string, TDBinding>, assets: Record<string, TDAsset>, pageId?: string) => this;
    /**
     * Set the current status.
     * @param status The new status to set.
     * @private
     * @returns
     */
    setStatus(status: string): this;
    /**
     * Update the bounding box when the renderer's bounds change.
     * @param bounds
     */
    updateBounds: (bounds: TLBounds) => void;
    updateViewport: (point: number[], zoom: number) => void;
    /**
     * Set or clear the editing id
     * @param id [string]
     */
    setEditingId: (id?: string | undefined) => void;
    /**
     * Set or clear the hovered id
     * @param id [string]
     */
    setHoveredId: (id?: string | undefined) => void;
    /**
     * Set a setting.
     */
    setSetting: <T extends "isDarkMode" | "showGrid" | "isSnapping" | "isCadSelectMode" | "isDebugMode" | "isPenMode" | "isReadonlyMode" | "isZoomSnap" | "nudgeDistanceSmall" | "nudgeDistanceLarge" | "isFocusMode" | "showRotateHandles" | "showBindingHandles" | "showCloneHandles", V extends {
        isCadSelectMode: boolean; /**
         * (optional) A callback to run when the user saves a project as a new project through the menu or through a keyboard shortcut.
         */
        isDarkMode: boolean;
        isDebugMode: boolean;
        isPenMode: boolean;
        isReadonlyMode: boolean;
        isZoomSnap: boolean;
        nudgeDistanceSmall: number;
        nudgeDistanceLarge: number;
        isFocusMode: boolean;
        isSnapping: boolean;
        showRotateHandles: boolean;
        showBindingHandles: boolean;
        showCloneHandles: boolean;
        showGrid: boolean;
    }[T]>(name: T, value: V | ((value: V) => V)) => this;
    /**
     * Toggle pen mode.
     */
    toggleFocusMode: () => this;
    /**
     * Toggle pen mode.
     */
    togglePenMode: () => this;
    /**
     * Toggle dark mode.
     */
    toggleDarkMode: () => this;
    /**
     * Toggle zoom snap.
     */
    toggleZoomSnap: () => this;
    /**
     * Toggle debug mode.
     */
    toggleDebugMode: () => this;
    /**
     * Toggles the state if menu is opened
     */
    setMenuOpen: (isOpen: boolean) => this;
    /**
     * Toggles the state if something is loading
     */
    setIsLoading: (isLoading: boolean) => this;
    setDisableAssets: (disableAssets: boolean) => this;
    get isMenuOpen(): boolean;
    get isLoading(): boolean;
    get disableAssets(): boolean;
    /**
     * Toggle grids.
     */
    toggleGrid: () => this;
    /**
     * Select a tool.
     * @param tool The tool to select, or "select".
     */
    selectTool: (type: TDToolType) => this;
    /**
     * Toggle the tool lock option.
     */
    toggleToolLock: () => this;
    /**
     * Reset the document to a blank state.
     */
    resetDocument: () => this;
    /**
     *
     * @param document
     */
    updateUsers: (users: TDUser[], isOwnUpdate?: boolean) => void;
    removeUser: (userId: string) => void;
    /**
     * Merge a new document patch into the current document.
     * @param document
     */
    mergeDocument: (document: TDDocument) => this;
    /**
     * Update the current document.
     * @param document
     */
    updateDocument: (document: TDDocument, reason?: string) => this;
    /**
     * Load a fresh room into the state.
     * @param roomId
     */
    loadRoom: (roomId: string) => this;
    /**
     * Load a new document.
     * @param document The document to load
     */
    loadDocument: (document: TDDocument) => this;
    /**
     * Create a new project.
     */
    newProject: () => void;
    /**
     * Save the current project.
     */
    saveProject: () => Promise<this | undefined>;
    /**
     * Save the current project as a new file.
     */
    saveProjectAs: () => Promise<this>;
    /**
     * Load a project from the filesystem.
     * @todo
     */
    openProject: () => Promise<void>;
    /**
     * Upload media from file
     */
    openAsset: () => Promise<void>;
    /**
     * Sign out of the current account.
     * Should move to the www layer.
     * @todo
     */
    signOut: () => void;
    /**
     * Get the current app state.
     */
    getAppState: () => TDSnapshot['appState'];
    /**
     * Get a page.
     * @param pageId (optional) The page's id.
     */
    getPage: (pageId?: string) => TLPage<TDShape, import("../types").ArrowBinding>;
    /**
     * Get the shapes (as an array) from a given page.
     * @param pageId (optional) The page's id.
     */
    getShapes: (pageId?: string) => TDShape[];
    /**
     * Get the bindings from a given page.
     * @param pageId (optional) The page's id.
     */
    getBindings: (pageId?: string) => TDBinding[];
    /**
     * Get a shape from a given page.
     * @param id The shape's id.
     * @param pageId (optional) The page's id.
     */
    getShape: <T extends TDShape = TDShape>(id: string, pageId?: string) => T;
    /**
     * Get the bounds of a shape on a given page.
     * @param id The shape's id.
     * @param pageId (optional) The page's id.
     */
    getShapeBounds: (id: string, pageId?: string) => TLBounds;
    /**
     * Get a binding from a given page.
     * @param id The binding's id.
     * @param pageId (optional) The page's id.
     */
    getBinding: (id: string, pageId?: string) => TDBinding;
    /**
     * Get the page state for a given page.
     * @param pageId (optional) The page's id.
     */
    getPageState: (pageId?: string) => TLPageState;
    /**
     * Turn a screen point into a point on the page.
     * @param point The screen point
     * @param pageId (optional) The page to use
     */
    getPagePoint: (point: number[], pageId?: string) => number[];
    /**
     * Get the current undo/redo stack.
     */
    get history(): TldrawCommand[];
    /**
     * Replace the current history stack.
     */
    set history(commands: TldrawCommand[]);
    /**
     * The current document.
     */
    get document(): TDDocument;
    /**
     * The current app state.
     */
    get settings(): TDSnapshot['settings'];
    /**
     * The current app state.
     */
    get appState(): TDSnapshot['appState'];
    /**
     * The current page id.
     */
    get currentPageId(): string;
    /**
     * The current page.
     */
    get page(): TDPage;
    /**
     * The current page's shapes (as an array).
     */
    get shapes(): TDShape[];
    /**
     * The current page's bindings.
     */
    get bindings(): TDBinding[];
    /**
     * The document's assets (as an array).
     */
    get assets(): TDAsset[];
    /**
     * The current page's state.
     */
    get pageState(): TLPageState;
    /**
     * The page's current selected ids.
     */
    get selectedIds(): string[];
    /**
     * Create a new page.
     * @param pageId (optional) The new page's id.
     */
    createPage: (id?: string | undefined) => this;
    /**
     * Change the current page.
     * @param pageId The new current page's id.
     */
    changePage: (pageId: string) => this;
    /**
     * Rename a page.
     * @param pageId The id of the page to rename.
     * @param name The page's new name
     */
    renamePage: (pageId: string, name: string) => this;
    /**
     * Duplicate a page.
     * @param pageId The id of the page to duplicate.
     */
    duplicatePage: (pageId: string) => this;
    /**
     * Delete a page.
     * @param pageId The id of the page to delete.
     */
    deletePage: (pageId?: string | undefined) => this;
    /**
     * Copy one or more shapes to the clipboard.
     * @param ids The ids of the shapes to copy.
     */
    copy: (ids?: string[]) => this;
    /**
     * Cut (copy and delete) one or more shapes to the clipboard.
     * @param ids The ids of the shapes to cut.
     */
    cut: (ids?: string[]) => this;
    /**
     * Paste shapes (or text) from clipboard to a certain point.
     * @param point
     */
    paste: (point?: number[] | undefined) => this | undefined;
    /**
     * Copy one or more shapes as SVG.
     * @param ids The ids of the shapes to copy.
     * @param pageId The page from which to copy the shapes.
     * @returns A string containing the JSON.
     */
    copySvg: (ids?: string[], pageId?: string) => string | undefined;
    /**
     * Copy one or more shapes as JSON.
     * @param ids The ids of the shapes to copy.
     * @param pageId The page from which to copy the shapes.
     * @returns A string containing the JSON.
     */
    copyJson: (ids?: string[], pageId?: string) => string | undefined;
    /**
     * Set the camera to a specific point and zoom.
     * @param point The camera point (top left of the viewport).
     * @param zoom The zoom level.
     * @param reason Why did the camera change?
     */
    setCamera: (point: number[], zoom: number, reason: string) => this;
    /**
     * Reset the camera to the default position
     */
    resetCamera: () => this;
    /**
     * Pan the camera
     * @param delta
     */
    pan: (delta: number[]) => this;
    /**
     * Pinch to a new zoom level, possibly together with a pan.
     * @param point The current point under the cursor.
     * @param delta The movement delta.
     * @param zoomDelta The zoom detal
     */
    pinchZoom: (point: number[], delta: number[], zoom: number) => this;
    /**
     * Zoom to a new zoom level, keeping the point under the cursor in the same position
     * @param next The new zoom level.
     * @param center The point to zoom towards (defaults to screen center).
     */
    zoomTo: (next: number, center?: any) => this;
    /**
     * Zoom out by 25%
     */
    zoomIn: () => this;
    /**
     * Zoom in by 25%.
     */
    zoomOut: () => this;
    /**
     * Zoom to fit the page's shapes.
     */
    zoomToFit: () => this;
    /**
     * Zoom to the selected shapes.
     */
    zoomToSelection: () => this;
    /**
     * Zoom back to content when the canvas is empty.
     */
    zoomToContent: () => this;
    /**
     * Zoom the camera to 100%.
     */
    resetZoom: () => this;
    /**
     * Zoom the camera by a certain delta.
     * @param delta The zoom delta.
     * @param center The point to zoom toward.
     */
    zoomBy: any;
    /**
     * Clear the selection history (undo/redo stack for selection).
     */
    private clearSelectHistory;
    /**
     * Adds a selection to the selection history (undo/redo stack for selection).
     */
    private addToSelectHistory;
    /**
     * Set the current selection.
     * @param ids The ids to select
     * @param push Whether to add the ids to the current selection instead.
     */
    private setSelectedIds;
    /**
     * Undo the most recent selection.
     */
    undoSelect: () => this;
    /**
     * Redo the previous selection.
     */
    redoSelect: () => this;
    /**
     * Select one or more shapes.
     * @param ids The shape ids to select.
     */
    select: (...ids: string[]) => this;
    /**
     * Select all shapes on the page.
     */
    selectAll: (pageId?: string) => this;
    /**
     * Deselect any selected shapes.
     */
    selectNone: () => this;
    /**
     * Start a new session.
     * @param session The new session
     * @param args arguments of the session's start method.
     */
    startSession: <T extends SessionType>(type: T, ...args: import("../types").ExceptFirst<ConstructorParameters<import("./sessions").SessionOfType<T>>>) => this;
    /**
     * updateSession.
     * @param args The arguments of the current session's update method.
     */
    updateSession: () => this;
    /**
     * Cancel the current session.
     * @param args The arguments of the current session's cancel method.
     */
    cancelSession: () => this;
    /**
     * Complete the current session.
     * @param args The arguments of the current session's complete method.
     */
    completeSession: () => this;
    /**
     * Manually create shapes on the page.
     * @param shapes An array of shape partials, containing the initial props for the shapes.
     * @command
     */
    createShapes: (...shapes: ({
        id: string;
        type: TDShapeType;
    } & Partial<TDShape>)[]) => this;
    /**
     * Manually update a set of shapes.
     * @param shapes An array of shape partials, containing the changes to be made to each shape.
     * @command
     */
    updateShapes: (...shapes: ({
        id: string;
    } & Partial<TDShape>)[]) => this;
    createTextShapeAtPoint(point: number[], id?: string): this;
    createImageOrVideoShapeAtPoint(id: string, type: TDShapeType.Image | TDShapeType.Video, point: number[], size: number[], assetId: string): this;
    /**
     * Create one or more shapes.
     * @param shapes An array of shapes.
     * @command
     */
    create: (shapes?: TDShape[], bindings?: TDBinding[]) => this;
    /**
     * Patch in a new set of shapes
     * @param shapes
     * @param bindings
     */
    patchCreate: (shapes?: TDShape[], bindings?: TDBinding[]) => this;
    /**
     * Delete one or more shapes.
     * @param ids The ids of the shapes to delete.
     * @command
     */
    delete: (ids?: string[]) => this;
    /**
     * Delete all shapes on the page.
     */
    deleteAll: () => this;
    /**
     * Change the style for one or more shapes.
     * @param style A style partial to apply to the shapes.
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    style: (style: Partial<ShapeStyles>, ids?: string[]) => this;
    /**
     * Align one or more shapes.
     * @param direction Whether to align horizontally or vertically.
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    align: (type: AlignType, ids?: string[]) => this;
    /**
     * Distribute one or more shapes.
     * @param direction Whether to distribute horizontally or vertically..
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    distribute: (direction: DistributeType, ids?: string[]) => this;
    /**
     * Stretch one or more shapes to their common bounds.
     * @param direction Whether to stretch horizontally or vertically.
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    stretch: (direction: StretchType, ids?: string[]) => this;
    /**
     * Flip one or more shapes horizontally.
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    flipHorizontal: (ids?: string[]) => this;
    /**
     * Flip one or more shapes vertically.
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    flipVertical: (ids?: string[]) => this;
    /**
     * Move one or more shapes to a new page. Will also break or move bindings.
     * @param toPageId The id of the page to move the shapes to.
     * @param fromPageId The id of the page to move the shapes from (defaults to current page).
     * @param ids The ids of the shapes to move (defaults to selection).
     */
    moveToPage: (toPageId: string, fromPageId?: string, ids?: string[]) => this;
    /**
     * Move one or more shapes to the back of the page.
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    moveToBack: (ids?: string[]) => this;
    /**
     * Move one or more shapes backward on of the page.
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    moveBackward: (ids?: string[]) => this;
    /**
     * Move one or more shapes forward on the page.
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    moveForward: (ids?: string[]) => this;
    /**
     * Move one or more shapes to the front of the page.
     * @param ids The ids of the shapes to change (defaults to selection).
     */
    moveToFront: (ids?: string[]) => this;
    /**
     * Nudge one or more shapes in a direction.
     * @param delta The direction to nudge the shapes.
     * @param isMajor Whether this is a major (i.e. shift) nudge.
     * @param ids The ids to change (defaults to selection).
     */
    nudge: (delta: number[], isMajor?: boolean, ids?: string[]) => this;
    /**
     * Duplicate one or more shapes.
     * @param ids The ids to duplicate (defaults to selection).
     */
    duplicate: (ids?: string[], point?: number[] | undefined) => this;
    /**
     * Reset the bounds for one or more shapes. Usually when the
     * bounding box of a shape is double-clicked. Different shapes may
     * handle this differently.
     * @param ids The ids to change (defaults to selection).
     */
    resetBounds: (ids?: string[]) => this;
    /**
     * Toggle the hidden property of one or more shapes.
     * @param ids The ids to change (defaults to selection).
     */
    toggleHidden: (ids?: string[]) => this;
    /**
     * Toggle the locked property of one or more shapes.
     * @param ids The ids to change (defaults to selection).
     */
    toggleLocked: (ids?: string[]) => this;
    /**
     * Toggle the fixed-aspect-ratio property of one or more shapes.
     * @param ids The ids to change (defaults to selection).
     */
    toggleAspectRatioLocked: (ids?: string[]) => this;
    /**
     * Toggle the decoration at a handle of one or more shapes.
     * @param handleId The handle to toggle.
     * @param ids The ids of the shapes to toggle the decoration on.
     */
    toggleDecoration: (handleId: string, ids?: string[]) => this;
    /**
     * Set the props of one or more shapes
     * @param props The props to set on the shapes.
     * @param ids The ids of the shapes to set props on.
     */
    setShapeProps: <T extends TDShape>(props: Partial<T>, ids?: string[]) => this;
    /**
     * Rotate one or more shapes by a delta.
     * @param delta The delta in radians.
     * @param ids The ids to rotate (defaults to selection).
     */
    rotate: (delta?: number, ids?: string[]) => this;
    /**
     * Group the selected shapes.
     * @param ids The ids to group (defaults to selection).
     * @param groupId The new group's id.
     */
    group: (ids?: string[], groupId?: any, pageId?: string) => this;
    /**
     * Ungroup the selected groups.
     * @todo
     */
    ungroup: (ids?: string[], pageId?: string) => this;
    /**
     * Cancel the current session.
     */
    cancel: () => this;
    private addMediaFromFile;
    private getViewboxFromSVG;
    onKeyDown: TLKeyboardEventHandler;
    onKeyUp: TLKeyboardEventHandler;
    /** Force bounding boxes to reset when the document loads. */
    refreshBoundingBoxes: () => void;
    onDragOver: TLDropEventHandler;
    onDrop: TLDropEventHandler;
    onPinchStart: TLPinchEventHandler;
    onPinchEnd: TLPinchEventHandler;
    onPinch: TLPinchEventHandler;
    onPan: TLWheelEventHandler;
    onZoom: TLWheelEventHandler;
    updateInputs: TLPointerEventHandler;
    onPointerMove: TLPointerEventHandler;
    onPointerDown: TLPointerEventHandler;
    onPointerUp: TLPointerEventHandler;
    onPointCanvas: TLCanvasEventHandler;
    onDoubleClickCanvas: TLCanvasEventHandler;
    onRightPointCanvas: TLCanvasEventHandler;
    onDragCanvas: TLCanvasEventHandler;
    onReleaseCanvas: TLCanvasEventHandler;
    onPointShape: TLPointerEventHandler;
    onReleaseShape: TLPointerEventHandler;
    onDoubleClickShape: TLPointerEventHandler;
    onRightPointShape: TLPointerEventHandler;
    onDragShape: TLPointerEventHandler;
    onHoverShape: TLPointerEventHandler;
    onUnhoverShape: TLPointerEventHandler;
    onPointBounds: TLBoundsEventHandler;
    onDoubleClickBounds: TLBoundsEventHandler;
    onRightPointBounds: TLBoundsEventHandler;
    onDragBounds: TLBoundsEventHandler;
    onHoverBounds: TLBoundsEventHandler;
    onUnhoverBounds: TLBoundsEventHandler;
    onReleaseBounds: TLBoundsEventHandler;
    onPointBoundsHandle: TLBoundsHandleEventHandler;
    onDoubleClickBoundsHandle: TLBoundsHandleEventHandler;
    onRightPointBoundsHandle: TLBoundsHandleEventHandler;
    onDragBoundsHandle: TLBoundsHandleEventHandler;
    onHoverBoundsHandle: TLBoundsHandleEventHandler;
    onUnhoverBoundsHandle: TLBoundsHandleEventHandler;
    onReleaseBoundsHandle: TLBoundsHandleEventHandler;
    onPointHandle: TLPointerEventHandler;
    onDoubleClickHandle: TLPointerEventHandler;
    onRightPointHandle: TLPointerEventHandler;
    onDragHandle: TLPointerEventHandler;
    onHoverHandle: TLPointerEventHandler;
    onUnhoverHandle: TLPointerEventHandler;
    onReleaseHandle: TLPointerEventHandler;
    onShapeChange: (shape: {
        id: string;
    } & Partial<TDShape>) => void;
    onShapeBlur: () => void;
    onShapeClone: TLShapeCloneHandler;
    onRenderCountChange: (ids: string[]) => void;
    onError: () => void;
    isSelected(id: string): boolean;
    /**
     * Get a snapshot of a video at current frame as base64 encoded image
     * @param id ID of video shape
     * @returns base64 encoded frame
     * @throws Error if video shape with given ID does not exist
     */
    serializeVideo(id: string): string;
    /**
     * Get a snapshot of a image (e.g. a GIF) as base64 encoded image
     * @param id ID of image shape
     * @returns base64 encoded frame
     * @throws Error if image shape with given ID does not exist
     */
    serializeImage(id: string): string;
    patchAssets(assets: TDAssets): void;
    exportAllShapesAs(type: TDExportTypes): Promise<void>;
    exportSelectedShapesAs(type: TDExportTypes): Promise<void>;
    exportShapesAs(shapeIds: string[], size: number[], type: TDExportTypes): Promise<void>;
    get room(): {
        id: string;
        userId: string;
        users: Record<string, TDUser>;
    } | undefined;
    get isLocal(): boolean;
    get status(): string;
    get currentUser(): TDUser | undefined;
    get centerPoint(): any;
    get currentGrid(): number;
    getShapeUtil: typeof TLDR.getShapeUtil;
    static version: number;
    static defaultDocument: TDDocument;
    static defaultState: TDSnapshot;
}
//# sourceMappingURL=TldrawApp.d.ts.map