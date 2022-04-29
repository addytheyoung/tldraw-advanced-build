import type { TDDocument } from '../../types';
import type { FileSystemHandle } from './browser-fs-access';
export declare function loadFileHandle(): Promise<any>;
export declare function saveFileHandle(fileHandle: FileSystemHandle | null): Promise<void>;
export declare function saveToFileSystem(document: TDDocument, fileHandle: FileSystemHandle | null): Promise<FileSystemHandle | null>;
export declare function openFromFileSystem(): Promise<null | {
    fileHandle: FileSystemHandle | null;
    document: TDDocument;
}>;
export declare function openAssetFromFileSystem(): Promise<import("./browser-fs-access").FileWithHandle>;
export declare function fileToBase64(file: Blob): Promise<string | ArrayBuffer | null>;
export declare function fileToText(file: Blob): Promise<string | ArrayBuffer | null>;
export declare function getImageSizeFromSrc(src: string): Promise<number[]>;
export declare function getVideoSizeFromSrc(src: string): Promise<number[]>;
//# sourceMappingURL=filesystem.d.ts.map