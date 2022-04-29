var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject2) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject2(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject2(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/state/data/browser-fs-access/supported.js
var supported, supported_default;
var init_supported = __esm({
  "src/state/data/browser-fs-access/supported.js"() {
    supported = (() => {
      if (typeof self === "undefined") {
        return false;
      }
      if ("top" in self && self !== top) {
        try {
          top.location + "";
        } catch (e) {
          return false;
        }
      } else if ("showOpenFilePicker" in self) {
        return "showOpenFilePicker";
      }
      return false;
    })();
    supported_default = supported;
  }
});

// src/state/data/browser-fs-access/legacy/file-open.js
var file_open_exports = {};
__export(file_open_exports, {
  default: () => file_open_default
});
var file_open_default;
var init_file_open = __esm({
  "src/state/data/browser-fs-access/legacy/file-open.js"() {
    file_open_default = (..._0) => __async(void 0, [..._0], function* (options2 = [{}]) {
      if (!Array.isArray(options2)) {
        options2 = [options2];
      }
      return new Promise((resolve, reject2) => {
        const input = document.createElement("input");
        input.type = "file";
        const accept = [
          ...options2.map((option) => option.mimeTypes || []).join(),
          options2.map((option) => option.extensions || []).join()
        ].join();
        input.multiple = options2[0].multiple || false;
        input.accept = accept || "";
        const _reject = () => cleanupListenersAndMaybeReject(reject2);
        const _resolve = (value) => {
          if (typeof cleanupListenersAndMaybeReject === "function") {
            cleanupListenersAndMaybeReject();
          }
          resolve(value);
        };
        const cleanupListenersAndMaybeReject = options2[0].legacySetup && options2[0].legacySetup(_resolve, _reject, input);
        input.addEventListener("change", () => {
          _resolve(input.multiple ? Array.from(input.files) : input.files[0]);
        });
        input.click();
      });
    });
  }
});

// src/state/data/browser-fs-access/fs-access/file-open.js
var file_open_exports2 = {};
__export(file_open_exports2, {
  default: () => file_open_default2
});
var getFileWithHandle, file_open_default2;
var init_file_open2 = __esm({
  "src/state/data/browser-fs-access/fs-access/file-open.js"() {
    getFileWithHandle = (handle) => __async(void 0, null, function* () {
      const file = yield handle.getFile();
      file.handle = handle;
      return file;
    });
    file_open_default2 = (..._0) => __async(void 0, [..._0], function* (options2 = [{}]) {
      if (!Array.isArray(options2)) {
        options2 = [options2];
      }
      const types = [];
      options2.forEach((option, i) => {
        types[i] = {
          description: option.description || "",
          accept: {}
        };
        if (option.mimeTypes) {
          option.mimeTypes.map((mimeType) => {
            types[i].accept[mimeType] = option.extensions || [];
          });
        } else {
          types[i].accept["*/*"] = option.extensions || [];
        }
      });
      const handleOrHandles = yield window.showOpenFilePicker({
        id: options2[0].id,
        startIn: options2[0].startIn,
        types,
        multiple: options2[0].multiple || false,
        excludeAcceptAllOption: options2[0].excludeAcceptAllOption || false
      });
      const files = yield Promise.all(handleOrHandles.map(getFileWithHandle));
      if (options2[0].multiple) {
        return files;
      }
      return files[0];
    });
  }
});

// src/state/data/browser-fs-access/file-open.js
function fileOpen(...args) {
  return __async(this, null, function* () {
    return (yield implementation).default(...args);
  });
}
var implementation;
var init_file_open3 = __esm({
  "src/state/data/browser-fs-access/file-open.js"() {
    init_supported();
    implementation = !supported_default ? Promise.resolve().then(() => (init_file_open(), file_open_exports)) : Promise.resolve().then(() => (init_file_open2(), file_open_exports2));
  }
});

// src/state/data/browser-fs-access/legacy/directory-open.js
var directory_open_exports = {};
__export(directory_open_exports, {
  default: () => directory_open_default
});
var directory_open_default;
var init_directory_open = __esm({
  "src/state/data/browser-fs-access/legacy/directory-open.js"() {
    directory_open_default = (..._0) => __async(void 0, [..._0], function* (options2 = [{}]) {
      if (!Array.isArray(options2)) {
        options2 = [options2];
      }
      options2[0].recursive = options2[0].recursive || false;
      return new Promise((resolve, reject2) => {
        const input = document.createElement("input");
        input.type = "file";
        input.webkitdirectory = true;
        const _reject = () => cleanupListenersAndMaybeReject(reject2);
        const _resolve = (value) => {
          if (typeof cleanupListenersAndMaybeReject === "function") {
            cleanupListenersAndMaybeReject();
          }
          resolve(value);
        };
        const cleanupListenersAndMaybeReject = options2[0].legacySetup && options2[0].legacySetup(_resolve, _reject, input);
        input.addEventListener("change", () => {
          let files = Array.from(input.files);
          if (!options2[0].recursive) {
            files = files.filter((file) => {
              return file.webkitRelativePath.split("/").length === 2;
            });
          } else if (options2[0].recursive && options2[0].skipDirectory) {
            files = files.filter((file) => {
              const directoriesName = file.webkitRelativePath.split("/");
              return directoriesName.every((directoryName) => !options2[0].skipDirectory({
                name: directoryName,
                kind: "directory"
              }));
            });
          }
          _resolve(files);
        });
        input.click();
      });
    });
  }
});

// src/state/data/browser-fs-access/fs-access/directory-open.js
var directory_open_exports2 = {};
__export(directory_open_exports2, {
  default: () => directory_open_default2
});
var getFiles, directory_open_default2;
var init_directory_open2 = __esm({
  "src/state/data/browser-fs-access/fs-access/directory-open.js"() {
    getFiles = (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (dirHandle, recursive, path = dirHandle.name, skipDirectory) {
      const dirs = [];
      const files = [];
      for (const entry of dirHandle.values()) {
        const nestedPath = `${path}/${entry.name}`;
        if (entry.kind === "file") {
          files.push(yield entry.getFile().then((file) => {
            file.directoryHandle = dirHandle;
            return Object.defineProperty(file, "webkitRelativePath", {
              configurable: true,
              enumerable: true,
              get: () => nestedPath
            });
          }));
        } else if (entry.kind === "directory" && recursive && (!skipDirectory || !skipDirectory(entry))) {
          dirs.push(yield getFiles(entry, recursive, nestedPath, skipDirectory));
        }
      }
      return [...(yield Promise.all(dirs)).flat(), ...yield Promise.all(files)];
    });
    directory_open_default2 = (..._0) => __async(void 0, [..._0], function* (options2 = {}) {
      options2.recursive = options2.recursive || false;
      const handle = yield window.showDirectoryPicker({
        id: options2.id,
        startIn: options2.startIn
      });
      return getFiles(handle, options2.recursive, void 0, options2.skipDirectory);
    });
  }
});

// src/state/data/browser-fs-access/directory-open.js
function directoryOpen(...args) {
  return __async(this, null, function* () {
    return (yield implementation2).default(...args);
  });
}
var implementation2;
var init_directory_open3 = __esm({
  "src/state/data/browser-fs-access/directory-open.js"() {
    init_supported();
    implementation2 = !supported_default ? Promise.resolve().then(() => (init_directory_open(), directory_open_exports)) : Promise.resolve().then(() => (init_directory_open2(), directory_open_exports2));
  }
});

// src/state/data/browser-fs-access/legacy/file-save.js
var file_save_exports = {};
__export(file_save_exports, {
  default: () => file_save_default
});
function streamToBlob(stream, type) {
  return __async(this, null, function* () {
    const reader = stream.getReader();
    const pumpedStream = new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return __async(this, null, function* () {
            return reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              controller.enqueue(value);
              return pump();
            });
          });
        }
      }
    });
    const res = new Response(pumpedStream);
    reader.releaseLock();
    return new Blob([yield res.blob()], { type });
  });
}
var file_save_default;
var init_file_save = __esm({
  "src/state/data/browser-fs-access/legacy/file-save.js"() {
    file_save_default = (_0, ..._1) => __async(void 0, [_0, ..._1], function* (blobOrResponse, options2 = {}) {
      if (Array.isArray(options2)) {
        options2 = options2[0];
      }
      const a = document.createElement("a");
      let data = blobOrResponse;
      if ("body" in blobOrResponse) {
        data = yield streamToBlob(blobOrResponse.body, blobOrResponse.headers.get("content-type"));
      }
      a.download = options2.fileName || "Untitled";
      a.href = URL.createObjectURL(data);
      const _reject = () => cleanupListenersAndMaybeReject(reject);
      const _resolve = () => {
        if (typeof cleanupListenersAndMaybeReject === "function") {
          cleanupListenersAndMaybeReject();
        }
      };
      const cleanupListenersAndMaybeReject = options2.legacySetup && options2.legacySetup(_resolve, _reject, a);
      a.addEventListener("click", () => {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1e3);
        _resolve(null);
      });
      a.click();
      return null;
    });
  }
});

// src/state/data/browser-fs-access/fs-access/file-save.js
var file_save_exports2 = {};
__export(file_save_exports2, {
  default: () => file_save_default2
});
var file_save_default2;
var init_file_save2 = __esm({
  "src/state/data/browser-fs-access/fs-access/file-save.js"() {
    file_save_default2 = (_0, ..._1) => __async(void 0, [_0, ..._1], function* (blobOrResponse, options2 = [{}], existingHandle = null, throwIfExistingHandleNotGood = false) {
      if (!Array.isArray(options2)) {
        options2 = [options2];
      }
      options2[0].fileName = options2[0].fileName || "Untitled";
      const types = [];
      options2.forEach((option, i) => {
        types[i] = {
          description: option.description || "",
          accept: {}
        };
        if (option.mimeTypes) {
          if (i === 0) {
            if (blobOrResponse.type) {
              option.mimeTypes.push(blobOrResponse.type);
            } else if (blobOrResponse.headers && blobOrResponse.headers.get("content-type")) {
              option.mimeTypes.push(blobOrResponse.headers.get("content-type"));
            }
          }
          option.mimeTypes.map((mimeType) => {
            types[i].accept[mimeType] = option.extensions || [];
          });
        } else if (blobOrResponse.type) {
          types[i].accept[blobOrResponse.type] = option.extensions || [];
        }
      });
      if (existingHandle) {
        try {
          yield existingHandle.getFile();
        } catch (err) {
          existingHandle = null;
          if (throwIfExistingHandleNotGood) {
            throw err;
          }
        }
      }
      const handle = existingHandle || (yield window.showSaveFilePicker({
        suggestedName: options2[0].fileName,
        id: options2[0].id,
        startIn: options2[0].startIn,
        types,
        excludeAcceptAllOption: options2[0].excludeAcceptAllOption || false
      }));
      const writable = yield handle.createWritable();
      if ("stream" in blobOrResponse) {
        const stream = blobOrResponse.stream();
        yield stream.pipeTo(writable);
        return handle;
      } else if ("body" in blobOrResponse) {
        yield blobOrResponse.body.pipeTo(writable);
        return handle;
      }
      yield writable.write(blob);
      yield writable.close();
      return handle;
    });
  }
});

// src/state/data/browser-fs-access/file-save.js
function fileSave(...args) {
  return __async(this, null, function* () {
    return (yield implementation3).default(...args);
  });
}
var implementation3;
var init_file_save3 = __esm({
  "src/state/data/browser-fs-access/file-save.js"() {
    init_supported();
    implementation3 = !supported_default ? Promise.resolve().then(() => (init_file_save(), file_save_exports)) : Promise.resolve().then(() => (init_file_save2(), file_save_exports2));
  }
});

// src/state/data/browser-fs-access/index.js
var browser_fs_access_exports = {};
__export(browser_fs_access_exports, {
  directoryOpen: () => directoryOpen,
  fileOpen: () => fileOpen,
  fileSave: () => fileSave,
  supported: () => supported_default
});
var init_browser_fs_access = __esm({
  "src/state/data/browser-fs-access/index.js"() {
    init_file_open3();
    init_directory_open3();
    init_file_save3();
    init_supported();
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AlignStyle: () => AlignStyle,
  AlignType: () => AlignType,
  Arrow: () => Arrow,
  ColorStyle: () => ColorStyle,
  DashStyle: () => DashStyle,
  Decoration: () => Decoration,
  DistributeType: () => DistributeType,
  Draw: () => Draw,
  Ellipse: () => Ellipse,
  FlipType: () => FlipType,
  FontSize: () => FontSize,
  FontStyle: () => FontStyle,
  Group: () => Group,
  Image: () => Image2,
  MoveType: () => MoveType,
  Rectangle: () => Rectangle,
  SessionType: () => SessionType,
  SizeStyle: () => SizeStyle,
  Sticky: () => Sticky,
  StretchType: () => StretchType,
  TDAssetType: () => TDAssetType,
  TDEventHandler: () => TDEventHandler,
  TDExportTypes: () => TDExportTypes,
  TDShapeType: () => TDShapeType,
  TDStatus: () => TDStatus,
  TDUserStatus: () => TDUserStatus,
  Text: () => Text,
  Tldraw: () => Tldraw,
  TldrawApp: () => TldrawApp,
  Triangle: () => Triangle,
  Video: () => Video,
  getShapeUtil: () => getShapeUtil,
  shapeUtils: () => shapeUtils,
  useFileSystem: () => useFileSystem
});

// src/Tldraw.tsx
var React77 = __toESM(require("react"));
var import_core55 = require("@tldraw/core");

// src/styles/stitches.config.ts
var import_react = require("@stitches/react");
var { styled, createTheme } = (0, import_react.createStitches)({
  themeMap: __spreadValues({}, import_react.defaultThemeMap),
  theme: {
    colors: {
      bounds: "rgba(65, 132, 244, 1.000)",
      boundsBg: "rgba(65, 132, 244, 0.05)",
      hover: "#ececec",
      overlay: "rgba(0, 0, 0, 0.15)",
      overlayContrast: "rgba(255, 255, 255, 0.15)",
      panel: "#fefefe",
      panelContrast: "#ffffff",
      selected: "rgba(66, 133, 244, 1.000)",
      selectedContrast: "#fefefe",
      sponsor: "#ec6cb9",
      sponsorContrast: "#ec6cb944",
      text: "#333333",
      tooltip: "#1d1d1d",
      tooltipContrast: "#ffffff",
      warn: "rgba(255, 100, 100, 1)"
    },
    shadows: {
      2: "0px 1px 1px rgba(0, 0, 0, 0.14)",
      3: "0px 2px 3px rgba(0, 0, 0, 0.14)",
      4: "0px 4px 5px -1px rgba(0, 0, 0, 0.14)",
      8: "0px 12px 17px rgba(0, 0, 0, 0.14)",
      12: "0px 12px 17px rgba(0, 0, 0, 0.14)",
      24: "0px 24px 38px rgba(0, 0, 0, 0.14)",
      key: "1px 1px rgba(0,0,0,1)",
      panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -8px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -12px rgba(0, 0, 0, 0.12),
        0px 0px 2px 0px rgba(0, 0, 0, 0.08)`
    },
    space: {
      0: "2px",
      1: "3px",
      2: "4px",
      3: "8px",
      4: "12px",
      5: "16px",
      6: "32px",
      7: "48px"
    },
    fontSizes: {
      0: "10px",
      1: "12px",
      2: "13px",
      3: "16px",
      4: "18px"
    },
    fonts: {
      ui: '"Recursive", system-ui, sans-serif',
      body: '"Recursive", system-ui, sans-serif',
      mono: '"Recursive Mono", monospace'
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      0: "$1"
    },
    borderStyles: {},
    radii: {
      0: "2px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px"
    },
    zIndices: {},
    transitions: {}
  },
  media: {
    micro: "(max-width: 370px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)"
  },
  utils: {
    zStrokeWidth: () => (value) => {
      if (Array.isArray(value)) {
        return {
          strokeWidth: `calc(${value[0]}px / var(--camera-zoom))`
        };
      }
      return {
        strokeWidth: `calc(${value}px / var(--camera-zoom))`
      };
    }
  }
});
var dark = createTheme({
  colors: {
    bounds: "rgba(38, 150, 255, 1.000)",
    boundsBg: "rgba(38, 150, 255, 0.05)",
    hover: "#444A50",
    overlay: "rgba(0, 0, 0, 0.15)",
    overlayContrast: "rgba(255, 255, 255, 0.15)",
    panel: "#363D44",
    panelContrast: "#49555f",
    selected: "rgba(38, 150, 255, 1.000)",
    selectedContrast: "#fefefe",
    text: "#f8f9fa",
    tooltip: "#1d1d1d",
    tooltipContrast: "#ffffff"
  },
  shadows: {
    2: "0px 1px 1px rgba(0, 0, 0, 0.24)",
    3: "0px 2px 3px rgba(0, 0, 0, 0.24)",
    4: "0px 4px 5px -1px rgba(0, 0, 0, 0.24)",
    8: "0px 12px 17px rgba(0, 0, 0, 0.24)",
    12: "0px 12px 17px rgba(0, 0, 0, 0.24)",
    24: "0px 24px 38px rgba(0, 0, 0, 0.24)",
    panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
      0px 0px 16px -8px rgba(0, 0, 0, 0.09), 
      0px 0px 16px -12px rgba(0, 0, 0, 0.2)`
  }
});

// src/types.ts
var TDEventHandler = class {
  constructor() {
    __publicField(this, "onPinchStart");
    __publicField(this, "onPinchEnd");
    __publicField(this, "onPinch");
    __publicField(this, "onKeyDown");
    __publicField(this, "onKeyUp");
    __publicField(this, "onPointerMove");
    __publicField(this, "onPointerUp");
    __publicField(this, "onPan");
    __publicField(this, "onZoom");
    __publicField(this, "onPointerDown");
    __publicField(this, "onPointCanvas");
    __publicField(this, "onDoubleClickCanvas");
    __publicField(this, "onRightPointCanvas");
    __publicField(this, "onDragCanvas");
    __publicField(this, "onReleaseCanvas");
    __publicField(this, "onPointShape");
    __publicField(this, "onDoubleClickShape");
    __publicField(this, "onRightPointShape");
    __publicField(this, "onDragShape");
    __publicField(this, "onHoverShape");
    __publicField(this, "onUnhoverShape");
    __publicField(this, "onReleaseShape");
    __publicField(this, "onPointBounds");
    __publicField(this, "onDoubleClickBounds");
    __publicField(this, "onRightPointBounds");
    __publicField(this, "onDragBounds");
    __publicField(this, "onHoverBounds");
    __publicField(this, "onUnhoverBounds");
    __publicField(this, "onReleaseBounds");
    __publicField(this, "onPointBoundsHandle");
    __publicField(this, "onDoubleClickBoundsHandle");
    __publicField(this, "onRightPointBoundsHandle");
    __publicField(this, "onDragBoundsHandle");
    __publicField(this, "onHoverBoundsHandle");
    __publicField(this, "onUnhoverBoundsHandle");
    __publicField(this, "onReleaseBoundsHandle");
    __publicField(this, "onPointHandle");
    __publicField(this, "onDoubleClickHandle");
    __publicField(this, "onRightPointHandle");
    __publicField(this, "onDragHandle");
    __publicField(this, "onHoverHandle");
    __publicField(this, "onUnhoverHandle");
    __publicField(this, "onReleaseHandle");
    __publicField(this, "onShapeBlur");
    __publicField(this, "onShapeClone");
  }
};
var TDUserStatus = /* @__PURE__ */ ((TDUserStatus2) => {
  TDUserStatus2["Idle"] = "idle";
  TDUserStatus2["Connecting"] = "connecting";
  TDUserStatus2["Connected"] = "connected";
  TDUserStatus2["Disconnected"] = "disconnected";
  return TDUserStatus2;
})(TDUserStatus || {});
var SessionType = /* @__PURE__ */ ((SessionType2) => {
  SessionType2["Transform"] = "transform";
  SessionType2["Translate"] = "translate";
  SessionType2["TransformSingle"] = "transformSingle";
  SessionType2["Brush"] = "brush";
  SessionType2["Arrow"] = "arrow";
  SessionType2["Draw"] = "draw";
  SessionType2["Erase"] = "erase";
  SessionType2["Rotate"] = "rotate";
  SessionType2["Handle"] = "handle";
  SessionType2["Grid"] = "grid";
  return SessionType2;
})(SessionType || {});
var TDStatus = /* @__PURE__ */ ((TDStatus2) => {
  TDStatus2["Idle"] = "idle";
  TDStatus2["PointingHandle"] = "pointingHandle";
  TDStatus2["PointingBounds"] = "pointingBounds";
  TDStatus2["PointingBoundsHandle"] = "pointingBoundsHandle";
  TDStatus2["TranslatingLabel"] = "translatingLabel";
  TDStatus2["TranslatingHandle"] = "translatingHandle";
  TDStatus2["Translating"] = "translating";
  TDStatus2["Transforming"] = "transforming";
  TDStatus2["Rotating"] = "rotating";
  TDStatus2["Pinching"] = "pinching";
  TDStatus2["Brushing"] = "brushing";
  TDStatus2["Creating"] = "creating";
  TDStatus2["EditingText"] = "editing-text";
  return TDStatus2;
})(TDStatus || {});
var MoveType = /* @__PURE__ */ ((MoveType2) => {
  MoveType2["Backward"] = "backward";
  MoveType2["Forward"] = "forward";
  MoveType2["ToFront"] = "toFront";
  MoveType2["ToBack"] = "toBack";
  return MoveType2;
})(MoveType || {});
var AlignType = /* @__PURE__ */ ((AlignType3) => {
  AlignType3["Top"] = "top";
  AlignType3["CenterVertical"] = "centerVertical";
  AlignType3["Bottom"] = "bottom";
  AlignType3["Left"] = "left";
  AlignType3["CenterHorizontal"] = "centerHorizontal";
  AlignType3["Right"] = "right";
  return AlignType3;
})(AlignType || {});
var StretchType = /* @__PURE__ */ ((StretchType3) => {
  StretchType3["Horizontal"] = "horizontal";
  StretchType3["Vertical"] = "vertical";
  return StretchType3;
})(StretchType || {});
var DistributeType = /* @__PURE__ */ ((DistributeType3) => {
  DistributeType3["Horizontal"] = "horizontal";
  DistributeType3["Vertical"] = "vertical";
  return DistributeType3;
})(DistributeType || {});
var FlipType = /* @__PURE__ */ ((FlipType2) => {
  FlipType2["Horizontal"] = "horizontal";
  FlipType2["Vertical"] = "vertical";
  return FlipType2;
})(FlipType || {});
var TDShapeType = /* @__PURE__ */ ((TDShapeType2) => {
  TDShapeType2["Sticky"] = "sticky";
  TDShapeType2["Ellipse"] = "ellipse";
  TDShapeType2["Rectangle"] = "rectangle";
  TDShapeType2["Triangle"] = "triangle";
  TDShapeType2["Draw"] = "draw";
  TDShapeType2["Arrow"] = "arrow";
  TDShapeType2["Line"] = "line";
  TDShapeType2["Text"] = "text";
  TDShapeType2["Group"] = "group";
  TDShapeType2["Image"] = "image";
  TDShapeType2["Video"] = "video";
  return TDShapeType2;
})(TDShapeType || {});
var Decoration = /* @__PURE__ */ ((Decoration2) => {
  Decoration2["Arrow"] = "arrow";
  return Decoration2;
})(Decoration || {});
var ColorStyle = /* @__PURE__ */ ((ColorStyle3) => {
  ColorStyle3["White"] = "white";
  ColorStyle3["LightGray"] = "lightGray";
  ColorStyle3["Gray"] = "gray";
  ColorStyle3["Black"] = "black";
  ColorStyle3["Green"] = "green";
  ColorStyle3["Cyan"] = "cyan";
  ColorStyle3["Blue"] = "blue";
  ColorStyle3["Indigo"] = "indigo";
  ColorStyle3["Violet"] = "violet";
  ColorStyle3["Red"] = "red";
  ColorStyle3["Orange"] = "orange";
  ColorStyle3["Yellow"] = "yellow";
  return ColorStyle3;
})(ColorStyle || {});
var SizeStyle = /* @__PURE__ */ ((SizeStyle2) => {
  SizeStyle2["Small"] = "small";
  SizeStyle2["Medium"] = "medium";
  SizeStyle2["Large"] = "large";
  return SizeStyle2;
})(SizeStyle || {});
var DashStyle = /* @__PURE__ */ ((DashStyle2) => {
  DashStyle2["Draw"] = "draw";
  DashStyle2["Solid"] = "solid";
  DashStyle2["Dashed"] = "dashed";
  DashStyle2["Dotted"] = "dotted";
  return DashStyle2;
})(DashStyle || {});
var FontSize = /* @__PURE__ */ ((FontSize2) => {
  FontSize2["Small"] = "small";
  FontSize2["Medium"] = "medium";
  FontSize2["Large"] = "large";
  FontSize2["ExtraLarge"] = "extraLarge";
  return FontSize2;
})(FontSize || {});
var AlignStyle = /* @__PURE__ */ ((AlignStyle2) => {
  AlignStyle2["Start"] = "start";
  AlignStyle2["Middle"] = "middle";
  AlignStyle2["End"] = "end";
  AlignStyle2["Justify"] = "justify";
  return AlignStyle2;
})(AlignStyle || {});
var FontStyle = /* @__PURE__ */ ((FontStyle2) => {
  FontStyle2["Script"] = "script";
  FontStyle2["Sans"] = "sans";
  FontStyle2["Serif"] = "erif";
  FontStyle2["Mono"] = "mono";
  return FontStyle2;
})(FontStyle || {});
var TDAssetType = /* @__PURE__ */ ((TDAssetType2) => {
  TDAssetType2["Image"] = "image";
  TDAssetType2["Video"] = "video";
  return TDAssetType2;
})(TDAssetType || {});
var TDExportTypes = /* @__PURE__ */ ((TDExportTypes2) => {
  TDExportTypes2["PNG"] = "png";
  TDExportTypes2["JPG"] = "jpeg";
  TDExportTypes2["WEBP"] = "webp";
  TDExportTypes2["PDF"] = "pdf";
  TDExportTypes2["SVG"] = "svg";
  TDExportTypes2["JSON"] = "json";
  return TDExportTypes2;
})(TDExportTypes || {});

// src/state/TldrawApp.ts
var import_vec43 = require("@tldraw/vec");
var import_core53 = require("@tldraw/core");

// src/state/data/migrate.ts
function migrate(document2, newVersion) {
  const { version = 0 } = document2;
  if (!("assets" in document2)) {
    document2.assets = {};
  }
  const assetIdsInUse = /* @__PURE__ */ new Set();
  Object.values(document2.pages).forEach((page) => Object.values(page.shapes).forEach((shape) => {
    const { parentId, children, assetId } = shape;
    if (assetId) {
      assetIdsInUse.add(assetId);
    }
    if (parentId !== page.id && !page.shapes[parentId]) {
      console.warn("Encountered a shape with a missing parent!");
      shape.parentId = page.id;
    }
    if (shape.type === "group" /* Group */ && children) {
      children.forEach((childId) => {
        if (!page.shapes[childId]) {
          console.warn("Encountered a parent with a missing child!", shape.id, childId);
          children == null ? void 0 : children.splice(children.indexOf(childId), 1);
        }
      });
    }
  }));
  Object.keys(document2.assets).forEach((assetId) => {
    if (!assetIdsInUse.has(assetId)) {
      delete document2.assets[assetId];
    }
  });
  if (version === newVersion)
    return document2;
  if (version < 14) {
    Object.values(document2.pages).forEach((page) => {
      Object.values(page.shapes).filter((shape) => shape.type === "text" /* Text */).forEach((shape) => shape.style.font === "script" /* Script */);
    });
  }
  if (version <= 13) {
    Object.values(document2.pages).forEach((page) => {
      Object.values(page.bindings).forEach((binding) => {
        Object.assign(binding, binding.meta);
      });
      Object.values(page.shapes).forEach((shape) => {
        Object.entries(shape.style).forEach(([id, style]) => {
          if (typeof style === "string") {
            shape.style[id] = style.toLowerCase();
          }
        });
        if (shape.type === "arrow" /* Arrow */) {
          if (shape.decorations) {
            Object.entries(shape.decorations).forEach(([id, decoration]) => {
              if (decoration === "Arrow") {
                shape.decorations = __spreadProps(__spreadValues({}, shape.decorations), {
                  [id]: "arrow" /* Arrow */
                });
              }
            });
          }
        }
      });
    });
  }
  if (version <= 13.1) {
    document2.name = "New Document";
  }
  if (version < 15) {
    document2.assets = {};
  }
  Object.values(document2.pages).forEach((page) => {
    Object.values(page.shapes).forEach((shape) => {
      if (version < 15.2) {
        if (shape.type === "image" /* Image */ || shape.type === "video" /* Video */) {
          shape.style.isFilled = true;
        }
      }
      if (version < 15.3) {
        if (shape.type === "rectangle" /* Rectangle */ || shape.type === "triangle" /* Triangle */ || shape.type === "ellipse" /* Ellipse */ || shape.type === "arrow" /* Arrow */) {
          shape.label = shape.text || "";
          shape.labelPoint = [0.5, 0.5];
        }
      }
    });
  });
  Object.values(document2.pageStates).forEach((pageState) => {
    pageState.selectedIds = pageState.selectedIds.filter((id) => {
      return document2.pages[pageState.id].shapes[id] !== void 0;
    });
    pageState.bindingId = void 0;
    pageState.editingId = void 0;
    pageState.hoveredId = void 0;
    pageState.pointedId = void 0;
  });
  document2.version = newVersion;
  return document2;
}

// src/state/data/filesystem.ts
var import_idb_keyval = require("idb-keyval");

// src/constants.ts
var LETTER_SPACING = "-0.03em";
var LINE_HEIGHT = 1.3;
var GRID_SIZE = 8;
var SVG_EXPORT_PADDING = 16;
var BINDING_DISTANCE = 16;
var CLONING_DISTANCE = 32;
var FIT_TO_SCREEN_PADDING = 128;
var SNAP_DISTANCE = 5;
var SLOW_SPEED = 10;
var GHOSTED_OPACITY = 0.3;
var DEAD_ZONE = 3;
var LABEL_POINT = [0.5, 0.5];
var PI2 = Math.PI * 2;
var EASINGS = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => --t * t * t + 1,
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - --t * t * t * t,
  easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  easeInQuint: (t) => t * t * t * t * t,
  easeOutQuint: (t) => 1 + --t * t * t * t * t,
  easeInOutQuint: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
  easeInSine: (t) => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: (t) => Math.sin(t * Math.PI / 2),
  easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  easeInExpo: (t) => t <= 0 ? 0 : Math.pow(2, 10 * t - 10),
  easeOutExpo: (t) => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: (t) => t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2
};
var USER_COLORS = [
  "#EC5E41",
  "#F2555A",
  "#F04F88",
  "#E34BA9",
  "#BD54C6",
  "#9D5BD2",
  "#7B66DC",
  "#02B1CC",
  "#11B3A3",
  "#39B178",
  "#55B467",
  "#FF802B"
];
var isSafari = typeof Window === "undefined" ? false : /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var IMAGE_EXTENSIONS = [".png", ".svg", ".jpg", ".jpeg", ".gif"];
var VIDEO_EXTENSIONS = isSafari ? [] : [".mp4", ".webm"];

// src/state/data/filesystem.ts
var options = { mode: "readwrite" };
var checkPermissions = (handle) => __async(void 0, null, function* () {
  return (yield handle.queryPermission(options)) === "granted" || (yield handle.requestPermission(options)) === "granted";
});
function loadFileHandle() {
  return __async(this, null, function* () {
    if (typeof Window === "undefined" || !("_location" in Window))
      return;
    const fileHandle = yield (0, import_idb_keyval.get)(`Tldraw_file_handle_${window.location.origin}`);
    if (!fileHandle)
      return null;
    return fileHandle;
  });
}
function saveFileHandle(fileHandle) {
  return __async(this, null, function* () {
    return (0, import_idb_keyval.set)(`Tldraw_file_handle_${window.location.origin}`, fileHandle);
  });
}
function saveToFileSystem(document2, fileHandle) {
  return __async(this, null, function* () {
    const file = {
      name: document2.name || "New Document",
      fileHandle: fileHandle != null ? fileHandle : null,
      document: document2,
      assets: {}
    };
    const json = JSON.stringify(file, null, 2);
    const blob2 = new Blob([json], {
      type: "application/vnd.Tldraw+json"
    });
    if (fileHandle) {
      const hasPermissions = yield checkPermissions(fileHandle);
      if (!hasPermissions)
        return null;
    }
    const browserFS = yield Promise.resolve().then(() => (init_browser_fs_access(), browser_fs_access_exports));
    const fileSave2 = browserFS.fileSave;
    const newFileHandle = yield fileSave2(blob2, {
      fileName: `${file.name}.tldr`,
      description: "Tldraw File",
      extensions: [`.tldr`]
    }, fileHandle);
    yield saveFileHandle(newFileHandle);
    return newFileHandle;
  });
}
function openFromFileSystem() {
  return __async(this, null, function* () {
    var _a;
    const browserFS = yield Promise.resolve().then(() => (init_browser_fs_access(), browser_fs_access_exports));
    const fileOpen2 = browserFS.fileOpen;
    const blob2 = yield fileOpen2({
      description: "Tldraw File",
      extensions: [`.tldr`],
      multiple: false
    });
    if (!blob2)
      return null;
    const json = yield new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === FileReader.DONE) {
          resolve(reader.result);
        }
      };
      reader.readAsText(blob2, "utf8");
    });
    const file = JSON.parse(json);
    const fileHandle = (_a = blob2.handle) != null ? _a : null;
    yield saveFileHandle(fileHandle);
    return {
      fileHandle,
      document: file.document
    };
  });
}
function openAssetFromFileSystem() {
  return __async(this, null, function* () {
    const browserFS = yield Promise.resolve().then(() => (init_browser_fs_access(), browser_fs_access_exports));
    const fileOpen2 = browserFS.fileOpen;
    return fileOpen2({
      description: "Image or Video",
      extensions: [...IMAGE_EXTENSIONS, ...VIDEO_EXTENSIONS],
      multiple: false
    });
  });
}
function fileToBase64(file) {
  return new Promise((resolve, reject2) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject2(error);
      reader.onabort = (error) => reject2(error);
    }
  });
}
function fileToText(file) {
  return new Promise((resolve, reject2) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject2(error);
      reader.onabort = (error) => reject2(error);
    }
  });
}
function getImageSizeFromSrc(src) {
  return new Promise((resolve, reject2) => {
    const img = new Image();
    img.onload = () => resolve([img.width, img.height]);
    img.onerror = () => reject2(new Error("Could not get image size"));
    img.src = src;
  });
}
function getVideoSizeFromSrc(src) {
  return new Promise((resolve, reject2) => {
    const video = document.createElement("video");
    video.onloadedmetadata = () => resolve([video.videoWidth, video.videoHeight]);
    video.onerror = () => reject2(new Error("Could not get video size"));
    video.src = src;
  });
}

// src/state/data/index.ts
init_browser_fs_access();

// src/state/TLDR.ts
var import_core24 = require("@tldraw/core");
var import_vec18 = require("@tldraw/vec");

// src/state/shapes/RectangleUtil/RectangleUtil.tsx
var React7 = __toESM(require("react"));
var import_core6 = require("@tldraw/core");

// src/state/shapes/TDShapeUtil.tsx
var import_core3 = require("@tldraw/core");
var import_intersect = require("@tldraw/intersect");
var import_vec3 = require("@tldraw/vec");
var React3 = __toESM(require("react"));

// src/state/shapes/shared/shape-styles.ts
var import_core = require("@tldraw/core");
var canvasLight = "#fafafa";
var canvasDark = "#343d45";
var colors = {
  ["white" /* White */]: "#f0f1f3",
  ["lightGray" /* LightGray */]: "#c6cbd1",
  ["gray" /* Gray */]: "#788492",
  ["black" /* Black */]: "#1d1d1d",
  ["green" /* Green */]: "#36b24d",
  ["cyan" /* Cyan */]: "#0e98ad",
  ["blue" /* Blue */]: "#1c7ed6",
  ["indigo" /* Indigo */]: "#4263eb",
  ["violet" /* Violet */]: "#7746f1",
  ["red" /* Red */]: "#ff2133",
  ["orange" /* Orange */]: "#ff9433",
  ["yellow" /* Yellow */]: "#ffc936"
};
var stickyFills = {
  light: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, import_core.Utils.lerpColor(v, canvasLight, 0.45)]))), {
    ["white" /* White */]: "#ffffff",
    ["black" /* Black */]: "#3d3d3d"
  }),
  dark: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [
    k,
    import_core.Utils.lerpColor(import_core.Utils.lerpColor(v, "#999999", 0.3), canvasDark, 0.4)
  ]))), {
    ["white" /* White */]: "#1d1d1d",
    ["black" /* Black */]: "#bbbbbb"
  })
};
var strokes = {
  light: __spreadProps(__spreadValues({}, colors), {
    ["white" /* White */]: "#1d1d1d"
  }),
  dark: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, import_core.Utils.lerpColor(v, canvasDark, 0.1)]))), {
    ["white" /* White */]: "#cecece",
    ["black" /* Black */]: "#cecece"
  })
};
var fills = {
  light: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, import_core.Utils.lerpColor(v, canvasLight, 0.82)]))), {
    ["white" /* White */]: "#fefefe"
  }),
  dark: __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, import_core.Utils.lerpColor(v, canvasDark, 0.82)]))), {
    ["white" /* White */]: "rgb(30,33,37)",
    ["black" /* Black */]: "#1e1e1f"
  })
};
var strokeWidths = {
  ["small" /* Small */]: 2,
  ["medium" /* Medium */]: 3.5,
  ["large" /* Large */]: 5
};
var fontSizes = {
  ["small" /* Small */]: 28,
  ["medium" /* Medium */]: 48,
  ["large" /* Large */]: 96,
  auto: "auto"
};
var fontFaces = {
  ["script" /* Script */]: '"Caveat Brush"',
  ["sans" /* Sans */]: '"Source Sans Pro"',
  ["erif" /* Serif */]: '"Crimson Pro"',
  ["mono" /* Mono */]: '"Source Code Pro"'
};
var fontSizeModifiers = {
  ["script" /* Script */]: 1,
  ["sans" /* Sans */]: 1,
  ["erif" /* Serif */]: 1,
  ["mono" /* Mono */]: 1
};
var stickyFontSizes = {
  ["small" /* Small */]: 24,
  ["medium" /* Medium */]: 36,
  ["large" /* Large */]: 48,
  auto: "auto"
};
function getStrokeWidth(size) {
  return strokeWidths[size];
}
function getFontSize(size, fontStyle = "script" /* Script */) {
  return fontSizes[size] * fontSizeModifiers[fontStyle];
}
function getFontFace(font = "script" /* Script */) {
  return fontFaces[font];
}
function getStickyFontSize(size) {
  return stickyFontSizes[size];
}
function getFontStyle(style) {
  const fontSize = getFontSize(style.size, style.font);
  const fontFace = getFontFace(style.font);
  const { scale = 1 } = style;
  return `${fontSize * scale}px/1 ${fontFace}`;
}
function getStickyFontStyle(style) {
  const fontSize = getStickyFontSize(style.size);
  const fontFace = getFontFace(style.font);
  const { scale = 1 } = style;
  return `${fontSize * scale}px/1 ${fontFace}`;
}
function getStickyShapeStyle(style, isDarkMode = false) {
  const { color } = style;
  const theme = isDarkMode ? "dark" : "light";
  const adjustedColor = color === "white" /* White */ || color === "black" /* Black */ ? "yellow" /* Yellow */ : color;
  return {
    fill: stickyFills[theme][adjustedColor],
    stroke: strokes[theme][adjustedColor],
    color: isDarkMode ? "#1d1d1d" : "#0d0d0d"
  };
}
function getShapeStyle(style, isDarkMode) {
  const { color, size, isFilled, customColorString, customOpacity, customSize } = style;
  const theme = isDarkMode ? "dark" : "light";
  let strokeWidth = 0;
  if (customSize)
    strokeWidth = customSize;
  else
    strokeWidth = getStrokeWidth(size);
  let stroke = "#000000";
  if (customColorString)
    stroke = customColorString;
  else
    stroke = strokes[theme][color];
  let opacity = 1;
  if (customOpacity)
    opacity = customOpacity;
  return {
    stroke,
    fill: isFilled ? fills[theme][color] : "none",
    strokeWidth,
    opacity
  };
}
var defaultStyle = {
  color: "black" /* Black */,
  size: "small" /* Small */,
  isFilled: false,
  dash: "draw" /* Draw */,
  scale: 1
};
var defaultTextStyle = __spreadProps(__spreadValues({}, defaultStyle), {
  font: "script" /* Script */,
  textAlign: "middle" /* Middle */
});

// src/state/shapes/shared/getTextAlign.ts
var ALIGN_VALUES = {
  ["start" /* Start */]: "left",
  ["middle" /* Middle */]: "center",
  ["end" /* End */]: "right",
  ["justify" /* Justify */]: "justify"
};
function getTextAlign(alignStyle = "start" /* Start */) {
  return ALIGN_VALUES[alignStyle];
}

// src/state/shapes/shared/getTextSvgElement.ts
function getTextSvgElement(text, style, bounds) {
  const fontSize = getFontSize(style.size, style.font);
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const textLines = text.split("\n").map((line, i) => {
    const textElm = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElm.textContent = line;
    textElm.setAttribute("y", LINE_HEIGHT * fontSize * (0.5 + i) + "");
    g.appendChild(textElm);
    return textElm;
  });
  g.setAttribute("font-size", fontSize + "");
  g.setAttribute("font-family", getFontFace(style.font).slice(1, -1));
  g.setAttribute("text-align", getTextAlign(style.textAlign));
  switch (style.textAlign) {
    case "middle" /* Middle */: {
      g.setAttribute("text-align", "center");
      g.setAttribute("text-anchor", "middle");
      textLines.forEach((textElm) => textElm.setAttribute("x", bounds.width / 2 + ""));
      break;
    }
    case "end" /* End */: {
      g.setAttribute("text-align", "right");
      g.setAttribute("text-anchor", "end");
      textLines.forEach((textElm) => textElm.setAttribute("x", bounds.width + ""));
      break;
    }
    case "start" /* Start */: {
      g.setAttribute("text-anchor", "start");
      g.setAttribute("alignment-baseline", "central");
    }
  }
  return g;
}

// src/state/shapes/shared/getTextSize.ts
var melm;
function getMeasurementDiv() {
  var _a;
  (_a = document.getElementById("__textLabelMeasure")) == null ? void 0 : _a.remove();
  const pre = document.createElement("pre");
  pre.id = "__textLabelMeasure";
  Object.assign(pre.style, {
    whiteSpace: "pre",
    width: "auto",
    border: "1px solid transparent",
    padding: "4px",
    margin: "0px",
    letterSpacing: LETTER_SPACING,
    opacity: "0",
    position: "absolute",
    top: "-500px",
    left: "0px",
    zIndex: "9999",
    pointerEvents: "none",
    userSelect: "none",
    alignmentBaseline: "mathematical",
    dominantBaseline: "mathematical"
  });
  pre.tabIndex = -1;
  document.body.appendChild(pre);
  return pre;
}
if (typeof window !== "undefined") {
  melm = getMeasurementDiv();
}
var prevText = "";
var prevFont = "";
var prevSize = [0, 0];
function clearPrevSize() {
  prevText = "";
}
function getTextLabelSize(text, font) {
  if (!text) {
    return [16, 32];
  }
  if (!melm) {
    return [10, 10];
  }
  if (!melm.parent)
    document.body.appendChild(melm);
  if (text === prevText && font === prevFont) {
    return prevSize;
  }
  prevText = text;
  prevFont = font;
  melm.textContent = text;
  melm.style.font = font;
  const width = melm.offsetWidth || 1;
  const height = melm.offsetHeight || 1;
  prevSize = [width, height];
  return prevSize;
}

// src/state/shapes/shared/getBoundsRectangle.ts
var import_core2 = require("@tldraw/core");
function getBoundsRectangle(shape, boundsCache) {
  const bounds = import_core2.Utils.getFromCache(boundsCache, shape, () => {
    const [width, height] = shape.size;
    return {
      minX: 0,
      maxX: width,
      minY: 0,
      maxY: height,
      width,
      height
    };
  });
  return import_core2.Utils.translateBounds(bounds, shape.point);
}

// src/state/shapes/shared/transformRectangle.ts
var import_vec = __toESM(require("@tldraw/vec"));
function transformRectangle(shape, bounds, { initialShape, transformOrigin, scaleX, scaleY }) {
  if (shape.rotation || initialShape.isAspectRatioLocked) {
    const size = import_vec.default.toFixed(import_vec.default.mul(initialShape.size, Math.min(Math.abs(scaleX), Math.abs(scaleY))));
    const point = import_vec.default.toFixed([
      bounds.minX + (bounds.width - shape.size[0]) * (scaleX < 0 ? 1 - transformOrigin[0] : transformOrigin[0]),
      bounds.minY + (bounds.height - shape.size[1]) * (scaleY < 0 ? 1 - transformOrigin[1] : transformOrigin[1])
    ]);
    const rotation = scaleX < 0 && scaleY >= 0 || scaleY < 0 && scaleX >= 0 ? initialShape.rotation ? -initialShape.rotation : 0 : initialShape.rotation;
    return {
      size,
      point,
      rotation
    };
  } else {
    return {
      point: import_vec.default.toFixed([bounds.minX, bounds.minY]),
      size: import_vec.default.toFixed([bounds.width, bounds.height])
    };
  }
}

// src/state/shapes/shared/transformSingleRectangle.ts
var import_vec2 = __toESM(require("@tldraw/vec"));
function transformSingleRectangle(shape, bounds) {
  return {
    size: import_vec2.default.toFixed([bounds.width, bounds.height]),
    point: import_vec2.default.toFixed([bounds.minX, bounds.minY])
  };
}

// src/state/shapes/shared/TextAreaUtils.ts
var INDENT = "  ";
var TextAreaUtils = class {
  static insertTextFirefox(field, text) {
    field.setRangeText(text, field.selectionStart || 0, field.selectionEnd || 0, "end");
    field.dispatchEvent(new InputEvent("input", {
      data: text,
      inputType: "insertText",
      isComposing: false
    }));
  }
  static insert(field, text) {
    const document2 = field.ownerDocument;
    const initialFocus = document2.activeElement;
    if (initialFocus !== field) {
      field.focus();
    }
    if (!document2.execCommand("insertText", false, text)) {
      TextAreaUtils.insertTextFirefox(field, text);
    }
    if (initialFocus === document2.body) {
      field.blur();
    } else if (initialFocus instanceof HTMLElement && initialFocus !== field) {
      initialFocus.focus();
    }
  }
  static set(field, text) {
    field.select();
    TextAreaUtils.insert(field, text);
  }
  static getSelection(field) {
    const { selectionStart, selectionEnd } = field;
    return field.value.slice(selectionStart ? selectionStart : void 0, selectionEnd ? selectionEnd : void 0);
  }
  static wrapSelection(field, wrap, wrapEnd) {
    const { selectionStart, selectionEnd } = field;
    const selection = TextAreaUtils.getSelection(field);
    TextAreaUtils.insert(field, wrap + selection + (wrapEnd != null ? wrapEnd : wrap));
    field.selectionStart = (selectionStart || 0) + wrap.length;
    field.selectionEnd = (selectionEnd || 0) + wrap.length;
  }
  static replace(field, searchValue, replacer) {
    let drift = 0;
    field.value.replace(searchValue, (...args) => {
      const matchStart = drift + args[args.length - 2];
      const matchLength = args[0].length;
      field.selectionStart = matchStart;
      field.selectionEnd = matchStart + matchLength;
      const replacement = typeof replacer === "string" ? replacer : replacer(...args);
      TextAreaUtils.insert(field, replacement);
      field.selectionStart = matchStart;
      drift += replacement.length - matchLength;
      return replacement;
    });
  }
  static findLineEnd(value, currentEnd) {
    const lastLineStart = value.lastIndexOf("\n", currentEnd - 1) + 1;
    if (value.charAt(lastLineStart) !== "	") {
      return currentEnd;
    }
    return lastLineStart + 1;
  }
  static indent(element) {
    var _a;
    const { selectionStart, selectionEnd, value } = element;
    const selectedContrast = value.slice(selectionStart, selectionEnd);
    const lineBreakCount = (_a = /\n/g.exec(selectedContrast)) == null ? void 0 : _a.length;
    if (lineBreakCount && lineBreakCount > 0) {
      const firstLineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
      const newSelection = element.value.slice(firstLineStart, selectionEnd - 1);
      const indentedText = newSelection.replace(/^|\n/g, `$&${INDENT}`);
      const replacementsCount = indentedText.length - newSelection.length;
      element.setSelectionRange(firstLineStart, selectionEnd - 1);
      TextAreaUtils.insert(element, indentedText);
      element.setSelectionRange(selectionStart + 1, selectionEnd + replacementsCount);
    } else {
      TextAreaUtils.insert(element, INDENT);
    }
  }
  static unindent(element) {
    const { selectionStart, selectionEnd, value } = element;
    const firstLineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
    const minimumSelectionEnd = TextAreaUtils.findLineEnd(value, selectionEnd);
    const newSelection = element.value.slice(firstLineStart, minimumSelectionEnd);
    const indentedText = newSelection.replace(/(^|\n)(\t| {1,2})/g, "$1");
    const replacementsCount = newSelection.length - indentedText.length;
    element.setSelectionRange(firstLineStart, minimumSelectionEnd);
    TextAreaUtils.insert(element, indentedText);
    const firstLineIndentation = /\t| {1,2}/.exec(value.slice(firstLineStart, selectionStart));
    const difference = firstLineIndentation ? firstLineIndentation[0].length : 0;
    const newSelectionStart = selectionStart - difference;
    element.setSelectionRange(selectionStart - difference, Math.max(newSelectionStart, selectionEnd - replacementsCount));
  }
};

// src/state/shapes/shared/TextLabel.tsx
var React2 = __toESM(require("react"));

// src/components/stopPropagation.ts
var stopPropagation = (e) => e.stopPropagation();

// src/state/shapes/shared/useTextKeyboardEvents.ts
var React = __toESM(require("react"));
function useTextKeyboardEvents(onChange) {
  const handleKeyDown = React.useCallback((e) => {
    if (e.metaKey)
      e.stopPropagation();
    switch (e.key) {
      case "Meta": {
        e.stopPropagation();
        break;
      }
      case "z": {
        if (e.metaKey) {
          if (e.shiftKey) {
            document.execCommand("redo", false);
          } else {
            document.execCommand("undo", false);
          }
          e.preventDefault();
        }
        break;
      }
      case "Escape": {
        e.currentTarget.blur();
        break;
      }
      case "Enter": {
        if (e.ctrlKey || e.metaKey) {
          e.currentTarget.blur();
        }
        break;
      }
      case "Tab": {
        e.preventDefault();
        if (e.shiftKey) {
          TextAreaUtils.unindent(e.currentTarget);
        } else {
          TextAreaUtils.indent(e.currentTarget);
        }
        onChange(TLDR.normalizeText(e.currentTarget.value));
        break;
      }
    }
  }, [onChange]);
  return handleKeyDown;
}

// src/state/shapes/shared/TextLabel.tsx
var TextLabel = React2.memo(function TextLabel2({
  font,
  text,
  color,
  offsetX = 0,
  offsetY = 0,
  scale = 1,
  isEditing = false,
  onBlur,
  onChange
}) {
  const rInput = React2.useRef(null);
  const rIsMounted = React2.useRef(false);
  const rTextContent = React2.useRef(text);
  const handleChange = React2.useCallback((e) => {
    rTextContent.current = TLDR.normalizeText(e.currentTarget.value);
    onChange(rTextContent.current);
  }, [onChange]);
  const handleKeyDown = useTextKeyboardEvents(onChange);
  const handleBlur = React2.useCallback((e) => {
    e.currentTarget.setSelectionRange(0, 0);
    onBlur == null ? void 0 : onBlur();
  }, [onBlur]);
  const handleFocus = React2.useCallback((e) => {
    if (!isEditing)
      return;
    if (!rIsMounted.current)
      return;
    if (document.activeElement === e.currentTarget) {
      e.currentTarget.select();
    }
  }, [isEditing]);
  const handlePointerDown = React2.useCallback((e) => {
    if (isEditing) {
      e.stopPropagation();
    }
  }, [isEditing]);
  React2.useEffect(() => {
    if (isEditing) {
      rTextContent.current = text;
      requestAnimationFrame(() => {
        rIsMounted.current = true;
        const elm = rInput.current;
        if (elm) {
          elm.focus();
          elm.select();
        }
      });
    } else {
      onBlur == null ? void 0 : onBlur();
    }
  }, [isEditing, onBlur]);
  const rInnerWrapper = React2.useRef(null);
  React2.useLayoutEffect(() => {
    const elm = rInnerWrapper.current;
    if (!elm)
      return;
    const size = getTextLabelSize(text, font);
    elm.style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
    elm.style.width = size[0] + 1 + "px";
    elm.style.height = size[1] + 1 + "px";
  }, [text, font, offsetY, offsetX, scale]);
  return /* @__PURE__ */ React2.createElement(TextWrapper, null, /* @__PURE__ */ React2.createElement(InnerWrapper, {
    ref: rInnerWrapper,
    hasText: !!text,
    isEditing,
    style: {
      font,
      color
    }
  }, isEditing ? /* @__PURE__ */ React2.createElement(TextArea, {
    ref: rInput,
    style: {
      font,
      color
    },
    name: "text",
    tabIndex: -1,
    autoComplete: "false",
    autoCapitalize: "false",
    autoCorrect: "false",
    autoSave: "false",
    autoFocus: true,
    placeholder: "",
    spellCheck: "true",
    wrap: "off",
    dir: "auto",
    datatype: "wysiwyg",
    defaultValue: rTextContent.current,
    color,
    onFocus: handleFocus,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onPointerDown: handlePointerDown,
    onContextMenu: stopPropagation
  }) : text, "\u200B"));
});
var TextWrapper = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  userSelect: "none",
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    }
  }
});
var commonTextWrapping = {
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word"
};
var InnerWrapper = styled("div", __spreadValues({
  position: "absolute",
  padding: "4px",
  zIndex: 1,
  minHeight: 1,
  minWidth: 1,
  lineHeight: 1,
  letterSpacing: LETTER_SPACING,
  outline: 0,
  fontWeight: "500",
  textAlign: "center",
  backfaceVisibility: "hidden",
  userSelect: "none",
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
  variants: {
    hasText: {
      false: {
        pointerEvents: "none"
      },
      true: {
        pointerEvents: "all"
      }
    },
    isEditing: {
      false: {
        userSelect: "none"
      },
      true: {
        background: "$boundsBg",
        userSelect: "text",
        WebkitUserSelect: "text"
      }
    }
  }
}, commonTextWrapping));
var TextArea = styled("textarea", __spreadValues({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  border: "none",
  padding: "4px",
  resize: "none",
  textAlign: "inherit",
  minHeight: "inherit",
  minWidth: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  outline: 0,
  fontWeight: "inherit",
  overflow: "hidden",
  backfaceVisibility: "hidden",
  display: "inline-block",
  pointerEvents: "all",
  background: "$boundsBg",
  userSelect: "text",
  WebkitUserSelect: "text",
  fontSmooth: "always",
  WebkitFontSmoothing: "subpixel-antialiased",
  MozOsxFontSmoothing: "auto"
}, commonTextWrapping));

// src/state/shapes/TDShapeUtil.tsx
var TDShapeUtil = class extends import_core3.TLShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "canBind", false);
    __publicField(this, "canEdit", false);
    __publicField(this, "canClone", false);
    __publicField(this, "isAspectRatioLocked", false);
    __publicField(this, "hideResizeHandles", false);
    __publicField(this, "bindingDistance", BINDING_DISTANCE);
    __publicField(this, "hitTestPoint", (shape, point) => {
      return import_core3.Utils.pointInBounds(point, this.getRotatedBounds(shape));
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      const box = import_core3.Utils.getBoundsFromPoints([A, B]);
      const bounds = this.getBounds(shape);
      return import_core3.Utils.boundsContain(bounds, box) || shape.rotation ? (0, import_intersect.intersectLineSegmentPolyline)(A, B, import_core3.Utils.getRotatedCorners(this.getBounds(shape))).didIntersect : (0, import_intersect.intersectLineSegmentBounds)(A, B, this.getBounds(shape)).length > 0;
    });
    __publicField(this, "create", (props) => {
      this.refMap.set(props.id, React3.createRef());
      return this.getShape(props);
    });
    __publicField(this, "getCenter", (shape) => {
      return import_core3.Utils.getBoundsCenter(this.getBounds(shape));
    });
    __publicField(this, "getExpandedBounds", (shape) => {
      return import_core3.Utils.expandBounds(this.getBounds(shape), this.bindingDistance);
    });
    __publicField(this, "getBindingPoint", (shape, fromShape, point, origin, direction, bindAnywhere) => {
      const bounds = this.getBounds(shape);
      const expandedBounds = this.getExpandedBounds(shape);
      if (!import_core3.Utils.pointInBounds(point, expandedBounds))
        return;
      const intersections = (0, import_intersect.intersectRayBounds)(origin, direction, expandedBounds).filter((int) => int.didIntersect).map((int) => int.points[0]);
      if (!intersections.length)
        return;
      const center = this.getCenter(shape);
      const intersection = intersections.sort((a, b) => import_vec3.Vec.dist(b, origin) - import_vec3.Vec.dist(a, origin))[0];
      const middlePoint = import_vec3.Vec.med(point, intersection);
      let anchor;
      let distance;
      if (bindAnywhere) {
        anchor = import_vec3.Vec.dist(point, center) < BINDING_DISTANCE / 2 ? center : point;
        distance = 0;
      } else {
        if (import_vec3.Vec.distanceToLineSegment(point, middlePoint, center) < BINDING_DISTANCE / 2) {
          anchor = center;
        } else {
          anchor = middlePoint;
        }
        if (import_core3.Utils.pointInBounds(point, bounds)) {
          distance = this.bindingDistance;
        } else {
          distance = Math.max(this.bindingDistance, import_core3.Utils.getBoundsSides(bounds).map((side) => import_vec3.Vec.distanceToLineSegment(side[1][0], side[1][1], point)).sort((a, b) => a - b)[0]);
        }
      }
      const bindingPoint = import_vec3.Vec.divV(import_vec3.Vec.sub(anchor, [expandedBounds.minX, expandedBounds.minY]), [
        expandedBounds.width,
        expandedBounds.height
      ]);
      return {
        point: import_vec3.Vec.clampV(bindingPoint, 0, 1),
        distance
      };
    });
    __publicField(this, "mutate", (shape, props) => {
      return props;
    });
    __publicField(this, "transform", (shape, bounds, info) => {
      return __spreadProps(__spreadValues({}, shape), { point: [bounds.minX, bounds.minY] });
    });
    __publicField(this, "transformSingle", (shape, bounds, info) => {
      return this.transform(shape, bounds, info);
    });
    __publicField(this, "updateChildren");
    __publicField(this, "onChildrenChange");
    __publicField(this, "onHandleChange");
    __publicField(this, "onRightPointHandle");
    __publicField(this, "onDoubleClickHandle");
    __publicField(this, "onDoubleClickBoundsHandle");
    __publicField(this, "onSessionComplete");
    __publicField(this, "getSvgElement", (shape) => {
      var _a;
      const elm = (_a = document.getElementById(shape.id + "_svg")) == null ? void 0 : _a.cloneNode(true);
      if (!elm)
        return;
      if ("label" in shape && shape.label !== void 0) {
        const s = shape;
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const bounds = this.getBounds(shape);
        const labelElm = getTextSvgElement(s["label"], shape.style, bounds);
        labelElm.setAttribute("fill", getShapeStyle(shape.style).stroke);
        const font = getFontStyle(shape.style);
        const size = getTextLabelSize(s["label"], font);
        labelElm.setAttribute("transform-origin", "top left");
        labelElm.setAttribute("transform", `translate(${(bounds.width - size[0]) / 2}, ${(bounds.height - size[1]) / 2})`);
        g.appendChild(elm);
        g.appendChild(labelElm);
        return g;
      }
      return elm;
    });
  }
};

// src/state/shapes/RectangleUtil/rectangleHelpers.ts
var import_core4 = require("@tldraw/core");
var import_vec4 = __toESM(require("@tldraw/vec"));
var import_perfect_freehand = __toESM(require("perfect-freehand"));
function getRectangleDrawPoints(id, style, size) {
  const styles2 = getShapeStyle(style);
  const getRandom = import_core4.Utils.rng(id);
  const sw = styles2.strokeWidth;
  const w = Math.max(0, size[0]);
  const h = Math.max(0, size[1]);
  const offsets = Array.from(Array(4)).map(() => {
    return [getRandom() * sw * 0.75, getRandom() * sw * 0.75];
  });
  const tl = import_vec4.default.add([sw / 2, sw / 2], offsets[0]);
  const tr = import_vec4.default.add([w - sw / 2, sw / 2], offsets[1]);
  const br = import_vec4.default.add([w - sw / 2, h - sw / 2], offsets[2]);
  const bl = import_vec4.default.add([sw / 2, h - sw / 2], offsets[3]);
  const rm = Math.round(Math.abs(getRandom() * 2 * 4));
  const rx = Math.min(w / 2, sw * 2);
  const ry = Math.min(h / 2, sw * 2);
  const px = Math.max(8, Math.floor(w / 16));
  const py = Math.max(8, Math.floor(h / 16));
  const lines = import_core4.Utils.rotateArray([
    import_vec4.default.pointsBetween(import_vec4.default.add(tl, [rx, 0]), import_vec4.default.sub(tr, [rx, 0]), px),
    import_vec4.default.pointsBetween(import_vec4.default.add(tr, [0, ry]), import_vec4.default.sub(br, [0, ry]), py),
    import_vec4.default.pointsBetween(import_vec4.default.sub(br, [rx, 0]), import_vec4.default.add(bl, [rx, 0]), px),
    import_vec4.default.pointsBetween(import_vec4.default.sub(bl, [0, ry]), import_vec4.default.add(tl, [0, ry]), py)
  ], rm);
  const points = [...lines.flat(), ...lines[0]].slice(5, Math.floor((rm % 2 === 0 ? px : py) / -2) + 3);
  return {
    points
  };
}
function getDrawStrokeInfo(id, style, size) {
  const { points } = getRectangleDrawPoints(id, style, size);
  const { strokeWidth } = getShapeStyle(style);
  const options2 = {
    size: strokeWidth,
    thinning: 0.65,
    streamline: 0.3,
    smoothing: 1,
    simulatePressure: false,
    last: true
  };
  return { points, options: options2 };
}
function getRectanglePath(id, style, size) {
  const { points, options: options2 } = getDrawStrokeInfo(id, style, size);
  const stroke = (0, import_perfect_freehand.default)(points, options2);
  return import_core4.Utils.getSvgPathFromStroke(stroke);
}
function getRectangleIndicatorPathTDSnapshot(id, style, size) {
  const { points, options: options2 } = getDrawStrokeInfo(id, style, size);
  const strokePoints = (0, import_perfect_freehand.getStrokePoints)(points, options2);
  return import_core4.Utils.getSvgPathFromStroke(strokePoints.map((pt) => pt.point.slice(0, 2)), false);
}

// src/state/shapes/RectangleUtil/components/DrawRectangle.tsx
var React4 = __toESM(require("react"));
var DrawRectangle = React4.memo(function DrawRectangle2({
  id,
  style,
  size,
  isSelected,
  isDarkMode
}) {
  const { isFilled } = style;
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const pathTDSnapshot = getRectanglePath(id, style, size);
  const innerPath = getRectangleIndicatorPathTDSnapshot(id, style, size);
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("path", {
    className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
    d: innerPath
  }), isFilled && /* @__PURE__ */ React4.createElement("path", {
    d: innerPath,
    fill,
    pointerEvents: "none"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: pathTDSnapshot,
    fill: stroke,
    stroke,
    strokeWidth,
    pointerEvents: "none"
  }));
});

// src/state/shapes/RectangleUtil/components/DashedRectangle.tsx
var React5 = __toESM(require("react"));
var import_core5 = require("@tldraw/core");
var DashedRectangle = React5.memo(function DashedRectangle2({
  id,
  style,
  size,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const sw = 1 + strokeWidth * 1.618;
  const w = Math.max(0, size[0] - sw / 2);
  const h = Math.max(0, size[1] - sw / 2);
  const strokes2 = [
    [[sw / 2, sw / 2], [w, sw / 2], w - sw / 2],
    [[w, sw / 2], [w, h], h - sw / 2],
    [[w, h], [sw / 2, h], w - sw / 2],
    [[sw / 2, h], [sw / 2, sw / 2], h - sw / 2]
  ];
  const paths = strokes2.map(([start, end, length], i) => {
    const { strokeDasharray, strokeDashoffset } = import_core5.Utils.getPerfectDashProps(length, strokeWidth * 1.618, style.dash);
    return /* @__PURE__ */ React5.createElement("line", {
      key: id + "_" + i,
      x1: start[0],
      y1: start[1],
      x2: end[0],
      y2: end[1],
      strokeDasharray,
      strokeDashoffset
    });
  });
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement("rect", {
    className: isSelected || style.isFilled ? "tl-fill-hitarea" : "tl-stroke-hitarea",
    x: sw / 2,
    y: sw / 2,
    width: w,
    height: h,
    strokeWidth: BINDING_DISTANCE
  }), style.isFilled && /* @__PURE__ */ React5.createElement("rect", {
    x: sw / 2,
    y: sw / 2,
    width: w,
    height: h,
    fill,
    pointerEvents: "none"
  }), /* @__PURE__ */ React5.createElement("g", {
    pointerEvents: "none",
    stroke,
    strokeWidth: sw,
    strokeLinecap: "round"
  }, paths));
});

// src/state/shapes/RectangleUtil/components/BindingIndicator.tsx
var React6 = __toESM(require("react"));
function BindingIndicator({ strokeWidth, size }) {
  return /* @__PURE__ */ React6.createElement("rect", {
    className: "tl-binding-indicator",
    x: strokeWidth,
    y: strokeWidth,
    width: Math.max(0, size[0] - strokeWidth / 2),
    height: Math.max(0, size[1] - strokeWidth / 2),
    strokeWidth: BINDING_DISTANCE * 2
  });
}

// src/state/shapes/RectangleUtil/RectangleUtil.tsx
var RectangleUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "rectangle" /* Rectangle */);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "getShape", (props) => {
      return import_core6.Utils.deepMerge({
        id: "id",
        type: "rectangle" /* Rectangle */,
        name: "Rectangle",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        size: [1, 1],
        rotation: 0,
        style: defaultStyle,
        label: "",
        labelPoint: [0.5, 0.5]
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(({
      shape,
      isEditing,
      isBinding,
      isSelected,
      isGhost,
      meta,
      bounds,
      events,
      onShapeBlur,
      onShapeChange
    }, ref) => {
      const { id, size, style, label = "", labelPoint = LABEL_POINT } = shape;
      const font = getFontStyle(style);
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const Component = style.dash === "draw" /* Draw */ ? DrawRectangle : DashedRectangle;
      const handleLabelChange = React7.useCallback((label2) => onShapeChange == null ? void 0 : onShapeChange({ id, label: label2 }), [onShapeChange]);
      return /* @__PURE__ */ React7.createElement(FullWrapper, __spreadValues({
        ref
      }, events), /* @__PURE__ */ React7.createElement(TextLabel, {
        isEditing,
        onChange: handleLabelChange,
        onBlur: onShapeBlur,
        font,
        text: label,
        color: styles2.stroke,
        offsetX: (labelPoint[0] - 0.5) * bounds.width,
        offsetY: (labelPoint[1] - 0.5) * bounds.height
      }), /* @__PURE__ */ React7.createElement(import_core6.SVGContainer, {
        id: shape.id + "_svg",
        opacity: isGhost ? GHOSTED_OPACITY : 1
      }, isBinding && /* @__PURE__ */ React7.createElement(BindingIndicator, {
        strokeWidth: styles2.strokeWidth,
        size
      }), /* @__PURE__ */ React7.createElement(Component, {
        id,
        style,
        size,
        isSelected,
        isDarkMode: meta.isDarkMode
      })));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { id, style, size } = shape;
      const styles2 = getShapeStyle(style, false);
      const sw = styles2.strokeWidth;
      if (style.dash === "draw" /* Draw */) {
        return /* @__PURE__ */ React7.createElement("path", {
          d: getRectangleIndicatorPathTDSnapshot(id, style, size)
        });
      }
      return /* @__PURE__ */ React7.createElement("rect", {
        x: sw,
        y: sw,
        rx: 1,
        ry: 1,
        width: Math.max(1, size[0] - sw * 2),
        height: Math.max(1, size[1] - sw * 2)
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style || next.label !== prev.label;
    });
    __publicField(this, "transform", transformRectangle);
    __publicField(this, "transformSingle", transformSingleRectangle);
  }
};
var FullWrapper = styled("div", { width: "100%", height: "100%" });

// src/state/shapes/TriangleUtil/TriangleUtil.tsx
var React11 = __toESM(require("react"));
var import_core9 = require("@tldraw/core");
var import_intersect3 = require("@tldraw/intersect");
var import_vec8 = __toESM(require("@tldraw/vec"));

// src/state/shapes/TriangleUtil/triangleHelpers.ts
var import_core7 = require("@tldraw/core");
var import_vec6 = __toESM(require("@tldraw/vec"));
var import_perfect_freehand2 = __toESM(require("perfect-freehand"));

// src/state/shapes/shared/PolygonUtils.ts
var import_intersect2 = require("@tldraw/intersect");
var import_vec5 = __toESM(require("@tldraw/vec"));
var PI22 = Math.PI * 2;
var _PolygonUtils = class {
  static inwardEdgeNormal(edge) {
    const delta = import_vec5.default.sub(edge[1], edge[0]);
    const len = import_vec5.default.len2(delta);
    return [-delta[0] / len, delta[1] / len];
  }
  static outwardEdgeNormal(edge) {
    return import_vec5.default.neg(_PolygonUtils.inwardEdgeNormal(edge));
  }
  static isReflexVertex(polygon, index) {
    const len = polygon.length;
    const v0 = polygon[(index + len - 1) % len];
    const v1 = polygon[index];
    const v2 = polygon[(index + 1) % len];
    if (_PolygonUtils.leftSide(v0, v2, v1) < 0)
      return true;
    return false;
  }
  static getEdges(vertices) {
    return vertices.map((vert, i) => [vert, vertices[(i + 1) % vertices.length]]);
  }
  static edgesIntersection([A1, A2], [B1, B2]) {
    const den = (B2[1] - B1[1]) * (A2[0] - A1[0]) - (B2[0] - B1[0]) * (A2[1] - A1[1]);
    if (den == 0)
      return null;
    const ua = ((B2[0] - B1[0]) * (A1[1] - B1[1]) - (B2[1] - B1[1]) * (A1[0] - B1[0])) / den;
    const ub = ((A2[0] - A1[0]) * (A1[1] - B1[1]) - (A2[1] - A1[1]) * (A1[0] - B1[0])) / den;
    if (ua < 0 || ub < 0 || ua > 1 || ub > 1)
      return null;
    return [A1[0] + ua * (A2[0] - A1[0]), A1[1] + ua * (A2[1] - A1[1])];
  }
  static appendArc(polygon, center, radius, startVertex, endVertex, isPaddingBoundary = false) {
    const vertices = [...polygon];
    let startAngle = Math.atan2(startVertex[1] - center[1], startVertex[0] - center[0]);
    let endAngle = Math.atan2(endVertex[1] - center[1], endVertex[0] - center[0]);
    if (startAngle < 0)
      startAngle += PI22;
    if (endAngle < 0)
      endAngle += PI22;
    const arcSegmentCount = 5;
    const angle = startAngle > endAngle ? startAngle - endAngle : startAngle + PI22 - endAngle;
    const angle5 = (isPaddingBoundary ? -angle : PI22 - angle) / arcSegmentCount;
    vertices.push(startVertex);
    for (let i = 1; i < arcSegmentCount; ++i) {
      const angle2 = startAngle + angle5 * i;
      vertices.push([center[0] + Math.cos(angle2) * radius, center[1] + Math.sin(angle2) * radius]);
    }
    vertices.push(endVertex);
    return vertices;
  }
  static createOffsetEdge(edge, offset) {
    return edge.map((vert) => import_vec5.default.add(vert, offset));
  }
  static getOffsetPolygon(polygon, offset = 0) {
    const edges = _PolygonUtils.getEdges(polygon);
    const offsetEdges = edges.map((edge) => _PolygonUtils.createOffsetEdge(edge, import_vec5.default.mul(_PolygonUtils.outwardEdgeNormal(edge), offset)));
    const vertices = [];
    for (let i = 0; i < offsetEdges.length; i++) {
      const thisEdge = offsetEdges[i];
      const prevEdge = offsetEdges[(i + offsetEdges.length - 1) % offsetEdges.length];
      const vertex = _PolygonUtils.edgesIntersection(prevEdge, thisEdge);
      if (vertex)
        vertices.push(vertex);
      else {
        _PolygonUtils.appendArc(vertices, edges[i][0], offset, prevEdge[1], thisEdge[0], false);
      }
    }
    return vertices;
  }
  static createPaddingPolygon(polygon, shapePadding = 0) {
    const offsetEdges = polygon.map((edge) => _PolygonUtils.createOffsetEdge(edge, _PolygonUtils.inwardEdgeNormal(edge)));
    const vertices = [];
    for (let i = 0; i < offsetEdges.length; i++) {
      const thisEdge = offsetEdges[i];
      const prevEdge = offsetEdges[(i + offsetEdges.length - 1) % offsetEdges.length];
      const vertex = _PolygonUtils.edgesIntersection(prevEdge, thisEdge);
      if (vertex)
        vertices.push(vertex);
      else {
        _PolygonUtils.appendArc(vertices, polygon[i][0], shapePadding, prevEdge[1], thisEdge[0], true);
      }
    }
    return vertices;
  }
};
var PolygonUtils = _PolygonUtils;
__publicField(PolygonUtils, "leftSide", import_vec5.default.isLeft);
function getOffsetPolygon(points, offset) {
  if (points.length < 3)
    throw Error("Polygon must have at least 3 points");
  const len = points.length;
  return points.map((point, i) => [point, points[(i + 1) % len]]).map(([A, B]) => {
    const offsetVector = import_vec5.default.mul(import_vec5.default.per(import_vec5.default.uni(import_vec5.default.sub(B, A))), offset);
    return [import_vec5.default.add(A, offsetVector), import_vec5.default.add(B, offsetVector)];
  }).map((edge, i, edges) => {
    const intersection = (0, import_intersect2.intersectLineLine)(edge, edges[(i + 1) % edges.length]);
    if (intersection === void 0)
      throw Error("Expected an intersection");
    return intersection;
  });
}

// src/state/shapes/TriangleUtil/triangleHelpers.ts
function getTrianglePoints(size, offset = 0, rotation = 0) {
  const [w, h] = size;
  let points = [
    [w / 2, 0],
    [w, h],
    [0, h]
  ];
  if (offset)
    points = getOffsetPolygon(points, offset);
  if (rotation)
    points = points.map((pt) => import_vec6.default.rotWith(pt, [w / 2, h / 2], rotation));
  return points;
}
function getTriangleCentroid(size) {
  const [w, h] = size;
  const points = [
    [w / 2, 0],
    [w, h],
    [0, h]
  ];
  return [
    (points[0][0] + points[1][0] + points[2][0]) / 3,
    (points[0][1] + points[1][1] + points[2][1]) / 3
  ];
}
function getTriangleDrawPoints(id, size, strokeWidth) {
  const [w, h] = size;
  const getRandom = import_core7.Utils.rng(id);
  const offsets = Array.from(Array(3)).map(() => {
    return [getRandom() * strokeWidth * 0.75, getRandom() * strokeWidth * 0.75];
  });
  const corners = [
    import_vec6.default.add([w / 2, 0], offsets[0]),
    import_vec6.default.add([w, h], offsets[1]),
    import_vec6.default.add([0, h], offsets[2])
  ];
  const rm = Math.round(Math.abs(getRandom() * 2 * 3));
  const lines = import_core7.Utils.rotateArray([
    import_vec6.default.pointsBetween(corners[0], corners[1], 32),
    import_vec6.default.pointsBetween(corners[1], corners[2], 32),
    import_vec6.default.pointsBetween(corners[2], corners[0], 32)
  ], rm);
  const points = [...lines.flat(), ...lines[0]];
  return {
    points
  };
}
function getDrawStrokeInfo2(id, size, style) {
  const { strokeWidth } = getShapeStyle(style);
  const { points } = getTriangleDrawPoints(id, size, strokeWidth);
  const options2 = {
    size: strokeWidth,
    thinning: 0.65,
    streamline: 0.3,
    smoothing: 1,
    simulatePressure: false,
    last: true
  };
  return { points, options: options2 };
}
function getTrianglePath(id, size, style) {
  const { points, options: options2 } = getDrawStrokeInfo2(id, size, style);
  const stroke = (0, import_perfect_freehand2.default)(points, options2);
  return import_core7.Utils.getSvgPathFromStroke(stroke);
}
function getTriangleIndicatorPathTDSnapshot(id, size, style) {
  const { points, options: options2 } = getDrawStrokeInfo2(id, size, style);
  const strokePoints = (0, import_perfect_freehand2.getStrokePoints)(points, options2);
  return import_core7.Utils.getSvgPathFromStroke(strokePoints.map((pt) => pt.point.slice(0, 2)), false);
}

// src/state/shapes/TriangleUtil/components/DrawTriangle.tsx
var React8 = __toESM(require("react"));
var DrawTriangle = React8.memo(function DrawTriangle2({
  id,
  size,
  style,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const pathTDSnapshot = getTrianglePath(id, size, style);
  const indicatorPath = getTriangleIndicatorPathTDSnapshot(id, size, style);
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("path", {
    className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
    d: indicatorPath
  }), style.isFilled && /* @__PURE__ */ React8.createElement("path", {
    d: indicatorPath,
    fill,
    pointerEvents: "none"
  }), /* @__PURE__ */ React8.createElement("path", {
    d: pathTDSnapshot,
    fill: stroke,
    stroke,
    strokeWidth,
    pointerEvents: "none"
  }));
});

// src/state/shapes/TriangleUtil/components/DashedTriangle.tsx
var React9 = __toESM(require("react"));
var import_core8 = require("@tldraw/core");
var import_vec7 = __toESM(require("@tldraw/vec"));
var DashedTriangle = React9.memo(function DashedTriangle2({
  id,
  size,
  style,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const sw = 1 + strokeWidth * 1.618;
  const points = getTrianglePoints(size);
  const sides = import_core8.Utils.pointsToLineSegments(points, true);
  const paths = sides.map(([start, end], i) => {
    const { strokeDasharray, strokeDashoffset } = import_core8.Utils.getPerfectDashProps(import_vec7.default.dist(start, end), strokeWidth * 1.618, style.dash);
    return /* @__PURE__ */ React9.createElement("line", {
      key: id + "_" + i,
      x1: start[0],
      y1: start[1],
      x2: end[0],
      y2: end[1],
      stroke,
      strokeWidth: sw,
      strokeLinecap: "round",
      strokeDasharray,
      strokeDashoffset
    });
  });
  const bgPath = points.join();
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("polygon", {
    className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
    points: bgPath
  }), style.isFilled && /* @__PURE__ */ React9.createElement("polygon", {
    fill,
    points: bgPath,
    pointerEvents: "none"
  }), /* @__PURE__ */ React9.createElement("g", {
    pointerEvents: "stroke"
  }, paths));
});

// src/state/shapes/TriangleUtil/components/TriangleBindingIndicator.tsx
var React10 = __toESM(require("react"));
function TriangleBindingIndicator({ size }) {
  const trianglePoints = getTrianglePoints(size).join();
  return /* @__PURE__ */ React10.createElement("polygon", {
    className: "tl-binding-indicator",
    points: trianglePoints,
    strokeWidth: BINDING_DISTANCE * 2
  });
}

// src/state/shapes/TriangleUtil/TriangleUtil.tsx
var TriangleUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "triangle" /* Triangle */);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "getShape", (props) => {
      return import_core9.Utils.deepMerge({
        id: "id",
        type: "triangle" /* Triangle */,
        name: "Triangle",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        size: [1, 1],
        rotation: 0,
        style: defaultStyle,
        label: "",
        labelPoint: [0.5, 0.5]
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(({
      shape,
      bounds,
      isBinding,
      isEditing,
      isSelected,
      isGhost,
      meta,
      events,
      onShapeChange,
      onShapeBlur
    }, ref) => {
      const { id, label = "", size, style, labelPoint = LABEL_POINT } = shape;
      const font = getFontStyle(style);
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const Component = style.dash === "draw" /* Draw */ ? DrawTriangle : DashedTriangle;
      const handleLabelChange = React11.useCallback((label2) => onShapeChange == null ? void 0 : onShapeChange({ id, label: label2 }), [onShapeChange]);
      const offsetY = React11.useMemo(() => {
        const center = import_vec8.default.div(size, 2);
        const centroid = getTriangleCentroid(size);
        return (centroid[1] - center[1]) * 0.72;
      }, [size]);
      return /* @__PURE__ */ React11.createElement(FullWrapper2, __spreadValues({
        ref
      }, events), /* @__PURE__ */ React11.createElement(TextLabel, {
        font,
        text: label,
        color: styles2.stroke,
        offsetX: (labelPoint[0] - 0.5) * bounds.width,
        offsetY: offsetY + (labelPoint[1] - 0.5) * bounds.height,
        isEditing,
        onChange: handleLabelChange,
        onBlur: onShapeBlur
      }), /* @__PURE__ */ React11.createElement(import_core9.SVGContainer, {
        id: shape.id + "_svg",
        opacity: isGhost ? GHOSTED_OPACITY : 1
      }, isBinding && /* @__PURE__ */ React11.createElement(TriangleBindingIndicator, {
        size
      }), /* @__PURE__ */ React11.createElement(Component, {
        id,
        style,
        size,
        isSelected,
        isDarkMode: meta.isDarkMode
      })));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { size } = shape;
      return /* @__PURE__ */ React11.createElement("polygon", {
        points: getTrianglePoints(size).join()
      });
    }));
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style || next.label !== prev.label;
    });
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "getExpandedBounds", (shape) => {
      return import_core9.Utils.getBoundsFromPoints(getTrianglePoints(shape.size, this.bindingDistance).map((pt) => import_vec8.default.add(pt, shape.point)));
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      return (0, import_intersect3.intersectLineSegmentPolyline)(A, B, this.getPoints(shape)).didIntersect;
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      return import_core9.Utils.boundsContained(this.getBounds(shape), bounds) || (0, import_intersect3.intersectBoundsPolygon)(bounds, this.getPoints(shape)).length > 0;
    });
    __publicField(this, "getBindingPoint", (shape, fromShape, point, origin, direction, bindAnywhere) => {
      const expandedBounds = this.getExpandedBounds(shape);
      if (!import_core9.Utils.pointInBounds(point, expandedBounds))
        return;
      const points = getTrianglePoints(shape.size).map((pt) => import_vec8.default.add(pt, shape.point));
      const expandedPoints = getTrianglePoints(shape.size, this.bindingDistance).map((pt) => import_vec8.default.add(pt, shape.point));
      const closestDistanceToEdge = import_core9.Utils.pointsToLineSegments(points, true).map(([a, b]) => import_vec8.default.distanceToLineSegment(a, b, point)).sort((a, b) => a - b)[0];
      if (!(import_core9.Utils.pointInPolygon(point, expandedPoints) || closestDistanceToEdge < this.bindingDistance))
        return;
      const intersections = import_core9.Utils.pointsToLineSegments(expandedPoints.concat([expandedPoints[0]])).map((segment) => (0, import_intersect3.intersectRayLineSegment)(origin, direction, segment[0], segment[1])).filter((intersection2) => intersection2.didIntersect).flatMap((intersection2) => intersection2.points);
      if (!intersections.length)
        return;
      const center = import_vec8.default.add(getTriangleCentroid(shape.size), shape.point);
      const intersection = intersections.sort((a, b) => import_vec8.default.dist(b, origin) - import_vec8.default.dist(a, origin))[0];
      const middlePoint = import_vec8.default.med(point, intersection);
      let anchor;
      let distance;
      if (bindAnywhere) {
        anchor = import_vec8.default.dist(point, center) < BINDING_DISTANCE / 2 ? center : point;
        distance = 0;
      } else {
        if (import_vec8.default.distanceToLineSegment(point, middlePoint, center) < BINDING_DISTANCE / 2) {
          anchor = center;
        } else {
          anchor = middlePoint;
        }
        if (import_core9.Utils.pointInPolygon(point, points)) {
          distance = this.bindingDistance;
        } else {
          distance = Math.max(this.bindingDistance, closestDistanceToEdge);
        }
      }
      const bindingPoint = import_vec8.default.divV(import_vec8.default.sub(anchor, [expandedBounds.minX, expandedBounds.minY]), [
        expandedBounds.width,
        expandedBounds.height
      ]);
      return {
        point: import_vec8.default.clampV(bindingPoint, 0, 1),
        distance
      };
    });
    __publicField(this, "transform", transformRectangle);
    __publicField(this, "transformSingle", transformSingleRectangle);
  }
  getPoints(shape) {
    const {
      rotation = 0,
      point: [x, y],
      size: [w, h]
    } = shape;
    return [
      [x + w / 2, y],
      [x, y + h],
      [x + w, y + h]
    ].map((pt) => import_vec8.default.rotWith(pt, this.getCenter(shape), rotation));
  }
};
var FullWrapper2 = styled("div", { width: "100%", height: "100%" });

// src/state/shapes/EllipseUtil/EllipseUtil.tsx
var React14 = __toESM(require("react"));
var import_core12 = require("@tldraw/core");
var import_vec9 = require("@tldraw/vec");
var import_intersect4 = require("@tldraw/intersect");

// src/state/shapes/EllipseUtil/ellipseHelpers.ts
var import_core10 = require("@tldraw/core");
var import_perfect_freehand3 = require("perfect-freehand");
function getEllipseStrokePoints(id, radius, style) {
  const { strokeWidth } = getShapeStyle(style);
  const getRandom = import_core10.Utils.rng(id);
  const rx = radius[0] + getRandom() * strokeWidth * 2;
  const ry = radius[1] + getRandom() * strokeWidth * 2;
  const perimeter = import_core10.Utils.perimeterOfEllipse(rx, ry);
  const points = [];
  const start = Math.PI + Math.PI * getRandom();
  const extra = Math.abs(getRandom());
  const count = Math.max(16, perimeter / 10);
  for (let i = 0; i < count; i++) {
    const t = EASINGS.easeInOutSine(i / (count + 1));
    const rads = start * 2 + Math.PI * (2 + extra) * t;
    const c = Math.cos(rads);
    const s = Math.sin(rads);
    points.push([rx * c + radius[0], ry * s + radius[1], t + 0.5 + getRandom() / 2]);
  }
  return (0, import_perfect_freehand3.getStrokePoints)(points, {
    size: 1 + strokeWidth * 2,
    thinning: 0.618,
    end: { taper: perimeter / 8 },
    start: { taper: perimeter / 12 },
    streamline: 0,
    simulatePressure: true
  });
}
function getEllipsePath(id, radius, style) {
  const { strokeWidth } = getShapeStyle(style);
  const getRandom = import_core10.Utils.rng(id);
  const rx = radius[0] + getRandom() * strokeWidth * 2;
  const ry = radius[1] + getRandom() * strokeWidth * 2;
  const perimeter = import_core10.Utils.perimeterOfEllipse(rx, ry);
  return import_core10.Utils.getSvgPathFromStroke((0, import_perfect_freehand3.getStrokeOutlinePoints)(getEllipseStrokePoints(id, radius, style), {
    size: 2 + strokeWidth * 2,
    thinning: 0.618,
    end: { taper: perimeter / 8 },
    start: { taper: perimeter / 12 },
    streamline: 0,
    simulatePressure: true
  }));
}
function getEllipseIndicatorPath(id, radius, style) {
  return import_core10.Utils.getSvgPathFromStroke(getEllipseStrokePoints(id, radius, style).map((pt) => pt.point.slice(0, 2)), false);
}

// src/state/shapes/EllipseUtil/components/DrawEllipse.tsx
var React12 = __toESM(require("react"));
var DrawEllipse = React12.memo(function DrawEllipse2({
  id,
  radius,
  style,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const innerPath = getEllipsePath(id, radius, style);
  return /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement("ellipse", {
    className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
    cx: radius[0],
    cy: radius[1],
    rx: radius[0],
    ry: radius[1]
  }), style.isFilled && /* @__PURE__ */ React12.createElement("path", {
    d: getEllipseIndicatorPath(id, radius, style),
    stroke: "none",
    fill,
    pointerEvents: "none"
  }), /* @__PURE__ */ React12.createElement("path", {
    d: innerPath,
    fill: stroke,
    stroke,
    strokeWidth,
    pointerEvents: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});

// src/state/shapes/EllipseUtil/components/DashedEllipse.tsx
var React13 = __toESM(require("react"));
var import_core11 = require("@tldraw/core");
var DashedEllipse = React13.memo(function DashedEllipse2({
  radius,
  style,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const sw = 1 + strokeWidth * 1.618;
  const rx = Math.max(0, radius[0] - sw / 2);
  const ry = Math.max(0, radius[1] - sw / 2);
  const perimeter = import_core11.Utils.perimeterOfEllipse(rx, ry);
  const { strokeDasharray, strokeDashoffset } = import_core11.Utils.getPerfectDashProps(perimeter < 64 ? perimeter * 2 : perimeter, strokeWidth * 1.618, style.dash, 4);
  return /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("ellipse", {
    className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
    cx: radius[0],
    cy: radius[1],
    rx: radius[0],
    ry: radius[1]
  }), /* @__PURE__ */ React13.createElement("ellipse", {
    cx: radius[0],
    cy: radius[1],
    rx,
    ry,
    fill,
    stroke,
    strokeWidth: sw,
    strokeDasharray,
    strokeDashoffset,
    pointerEvents: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});

// src/state/shapes/EllipseUtil/EllipseUtil.tsx
var EllipseUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "ellipse" /* Ellipse */);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "getShape", (props) => {
      return import_core12.Utils.deepMerge({
        id: "id",
        type: "ellipse" /* Ellipse */,
        name: "Ellipse",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        radius: [1, 1],
        rotation: 0,
        style: defaultStyle,
        label: "",
        labelPoint: [0.5, 0.5]
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(({
      shape,
      isGhost,
      isSelected,
      isBinding,
      isEditing,
      meta,
      bounds,
      events,
      onShapeChange,
      onShapeBlur
    }, ref) => {
      const { id, radius, style, label = "", labelPoint = LABEL_POINT } = shape;
      const font = getFontStyle(shape.style);
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const strokeWidth = styles2.strokeWidth;
      const sw = 1 + strokeWidth * 1.618;
      const rx = Math.max(0, radius[0] - sw / 2);
      const ry = Math.max(0, radius[1] - sw / 2);
      const Component = style.dash === "draw" /* Draw */ ? DrawEllipse : DashedEllipse;
      const handleLabelChange = React14.useCallback((label2) => onShapeChange == null ? void 0 : onShapeChange({ id, label: label2 }), [onShapeChange]);
      return /* @__PURE__ */ React14.createElement(FullWrapper3, __spreadValues({
        ref
      }, events), /* @__PURE__ */ React14.createElement(TextLabel, {
        isEditing,
        onChange: handleLabelChange,
        onBlur: onShapeBlur,
        font,
        text: label,
        color: styles2.stroke,
        offsetX: (labelPoint[0] - 0.5) * bounds.width,
        offsetY: (labelPoint[1] - 0.5) * bounds.height
      }), /* @__PURE__ */ React14.createElement(import_core12.SVGContainer, {
        id: shape.id + "_svg",
        opacity: isGhost ? GHOSTED_OPACITY : 1
      }, isBinding && /* @__PURE__ */ React14.createElement("ellipse", {
        className: "tl-binding-indicator",
        cx: radius[0],
        cy: radius[1],
        rx,
        ry,
        strokeWidth: this.bindingDistance
      }), /* @__PURE__ */ React14.createElement(Component, {
        id,
        radius,
        style,
        isSelected,
        isDarkMode: meta.isDarkMode
      })));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { id, radius, style } = shape;
      const styles2 = getShapeStyle(style);
      const strokeWidth = styles2.strokeWidth;
      const sw = 1 + strokeWidth * 1.618;
      const rx = Math.max(0, radius[0] - sw / 2);
      const ry = Math.max(0, radius[1] - sw / 2);
      return style.dash === "draw" /* Draw */ ? /* @__PURE__ */ React14.createElement("path", {
        d: getEllipseIndicatorPath(id, radius, style)
      }) : /* @__PURE__ */ React14.createElement("ellipse", {
        cx: radius[0],
        cy: radius[1],
        rx,
        ry
      });
    }));
    __publicField(this, "hitTestPoint", (shape, point) => {
      return import_core12.Utils.pointInBounds(point, this.getRotatedBounds(shape)) && import_core12.Utils.pointInEllipse(point, this.getCenter(shape), shape.radius[0], shape.radius[1], shape.rotation || 0);
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      return (0, import_intersect4.intersectLineSegmentEllipse)(A, B, this.getCenter(shape), shape.radius[0], shape.radius[1], shape.rotation || 0).didIntersect;
    });
    __publicField(this, "getBounds", (shape) => {
      return import_core12.Utils.getFromCache(this.boundsCache, shape, () => {
        return import_core12.Utils.getRotatedEllipseBounds(shape.point[0], shape.point[1], shape.radius[0], shape.radius[1], 0);
      });
    });
    __publicField(this, "getRotatedBounds", (shape) => {
      return import_core12.Utils.getRotatedEllipseBounds(shape.point[0], shape.point[1], shape.radius[0], shape.radius[1], shape.rotation);
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      const shapeBounds = this.getBounds(shape);
      return import_core12.Utils.boundsContained(shapeBounds, bounds) || (0, import_intersect4.intersectEllipseBounds)(this.getCenter(shape), shape.radius[0], shape.radius[1], shape.rotation || 0, bounds).length > 0;
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.radius !== prev.radius || next.style !== prev.style || next.label !== prev.label;
    });
    __publicField(this, "getCenter", (shape) => {
      return import_vec9.Vec.add(shape.point, shape.radius);
    });
    __publicField(this, "getBindingPoint", (shape, fromShape, point, origin, direction, bindAnywhere) => {
      {
        const expandedBounds = this.getExpandedBounds(shape);
        const center = this.getCenter(shape);
        let bindingPoint;
        let distance;
        if (!import_core12.Utils.pointInEllipse(point, center, shape.radius[0] + this.bindingDistance, shape.radius[1] + this.bindingDistance)) {
          return;
        }
        if (bindAnywhere) {
          if (import_vec9.Vec.dist(point, this.getCenter(shape)) < 12) {
            bindingPoint = [0.5, 0.5];
          } else {
            bindingPoint = import_vec9.Vec.divV(import_vec9.Vec.sub(point, [expandedBounds.minX, expandedBounds.minY]), [
              expandedBounds.width,
              expandedBounds.height
            ]);
          }
          distance = 0;
        } else {
          let intersection = (0, import_intersect4.intersectRayEllipse)(origin, direction, center, shape.radius[0], shape.radius[1], shape.rotation || 0).points.sort((a, b) => import_vec9.Vec.dist(a, origin) - import_vec9.Vec.dist(b, origin))[0];
          if (!intersection) {
            intersection = (0, import_intersect4.intersectLineSegmentEllipse)(point, center, center, shape.radius[0], shape.radius[1], shape.rotation || 0).points.sort((a, b) => import_vec9.Vec.dist(a, point) - import_vec9.Vec.dist(b, point))[0];
          }
          if (!intersection) {
            return void 0;
          }
          const anchor = import_vec9.Vec.med(point, intersection);
          if (import_vec9.Vec.distanceToLineSegment(point, anchor, this.getCenter(shape)) < 12) {
            bindingPoint = [0.5, 0.5];
          } else {
            bindingPoint = import_vec9.Vec.divV(import_vec9.Vec.sub(anchor, [expandedBounds.minX, expandedBounds.minY]), [
              expandedBounds.width,
              expandedBounds.height
            ]);
          }
          if (import_core12.Utils.pointInEllipse(point, center, shape.radius[0], shape.radius[1], shape.rotation || 0)) {
            distance = this.bindingDistance / 2;
          } else {
            const innerIntersection = (0, import_intersect4.intersectLineSegmentEllipse)(point, center, center, shape.radius[0], shape.radius[1], shape.rotation || 0).points[0];
            if (!innerIntersection)
              return void 0;
            distance = Math.max(this.bindingDistance / 2, import_vec9.Vec.dist(point, innerIntersection));
          }
        }
        return {
          point: bindingPoint,
          distance
        };
      }
    });
    __publicField(this, "transform", (shape, bounds, { scaleX, scaleY, initialShape }) => {
      const { rotation = 0 } = initialShape;
      return {
        point: [bounds.minX, bounds.minY],
        radius: [bounds.width / 2, bounds.height / 2],
        rotation: scaleX < 0 && scaleY >= 0 || scaleY < 0 && scaleX >= 0 ? -(rotation || 0) : rotation || 0
      };
    });
    __publicField(this, "transformSingle", (shape, bounds) => {
      return {
        point: import_vec9.Vec.toFixed([bounds.minX, bounds.minY]),
        radius: import_vec9.Vec.div([bounds.width, bounds.height], 2)
      };
    });
  }
};
var FullWrapper3 = styled("div", { width: "100%", height: "100%" });

// src/state/shapes/ArrowUtil/ArrowUtil.tsx
var React19 = __toESM(require("react"));
var import_core16 = require("@tldraw/core");
var import_vec13 = require("@tldraw/vec");
var import_intersect6 = require("@tldraw/intersect");

// src/state/shapes/ArrowUtil/arrowHelpers.ts
var import_core13 = require("@tldraw/core");
var import_intersect5 = require("@tldraw/intersect");
var import_vec10 = __toESM(require("@tldraw/vec"));
var import_perfect_freehand4 = __toESM(require("perfect-freehand"));
function getArrowArcPath(start, end, circle, bend) {
  return [
    "M",
    start[0],
    start[1],
    "A",
    circle[2],
    circle[2],
    0,
    0,
    bend < 0 ? 0 : 1,
    end[0],
    end[1]
  ].join(" ");
}
function getBendPoint(handles, bend) {
  const { start, end } = handles;
  const dist = import_vec10.default.dist(start.point, end.point);
  const midPoint = import_vec10.default.med(start.point, end.point);
  const bendDist = dist / 2 * bend;
  const u = import_vec10.default.uni(import_vec10.default.vec(start.point, end.point));
  const point = import_vec10.default.toFixed(Math.abs(bendDist) < 10 ? midPoint : import_vec10.default.add(midPoint, import_vec10.default.mul(import_vec10.default.per(u), bendDist)));
  return point;
}
function renderFreehandArrowShaft(id, style, start, end, decorationStart, decorationEnd) {
  const getRandom = import_core13.Utils.rng(id);
  const strokeWidth = getShapeStyle(style).strokeWidth;
  const startPoint = decorationStart ? import_vec10.default.nudge(start, end, strokeWidth) : start;
  const endPoint = decorationEnd ? import_vec10.default.nudge(end, start, strokeWidth) : end;
  const stroke = (0, import_perfect_freehand4.default)([startPoint, endPoint], {
    size: strokeWidth,
    thinning: 0.618 + getRandom() * 0.2,
    easing: EASINGS.easeOutQuad,
    simulatePressure: true,
    streamline: 0,
    last: true
  });
  return import_core13.Utils.getSvgPathFromStroke(stroke);
}
function renderCurvedFreehandArrowShaft(id, style, start, end, decorationStart, decorationEnd, center, radius, length, easing) {
  const getRandom = import_core13.Utils.rng(id);
  const strokeWidth = getShapeStyle(style).strokeWidth;
  const startPoint = decorationStart ? import_vec10.default.rotWith(start, center, strokeWidth / length) : start;
  const endPoint = decorationEnd ? import_vec10.default.rotWith(end, center, -(strokeWidth / length)) : end;
  const startAngle = import_vec10.default.angle(center, startPoint);
  const endAngle = import_vec10.default.angle(center, endPoint);
  const points = [];
  const count = 8 + Math.floor(Math.abs(length) / 20 * 1 + getRandom() / 2);
  for (let i = 0; i < count; i++) {
    const t = easing(i / count);
    const angle = import_core13.Utils.lerpAngles(startAngle, endAngle, t);
    points.push(import_vec10.default.toFixed(import_vec10.default.nudgeAtAngle(center, angle, radius)));
  }
  const stroke = (0, import_perfect_freehand4.default)([startPoint, ...points, endPoint], {
    size: 1 + strokeWidth,
    thinning: 0.618 + getRandom() * 0.2,
    easing: EASINGS.easeOutQuad,
    simulatePressure: false,
    streamline: 0,
    last: true
  });
  return import_core13.Utils.getSvgPathFromStroke(stroke);
}
function getCtp(start, bend, end) {
  return import_core13.Utils.circleFromThreePoints(start, end, bend);
}
function getCurvedArrowHeadPoints(A, r1, C, r2, sweep) {
  const ints = (0, import_intersect5.intersectCircleCircle)(A, r1 * 0.618, C, r2).points;
  if (!ints) {
    TLDR.warn("Could not find an intersection for the arrow head.");
    return { left: A, right: A };
  }
  const int = sweep ? ints[0] : ints[1];
  const left = int ? import_vec10.default.nudge(import_vec10.default.rotWith(int, A, Math.PI / 6), A, r1 * -0.382) : A;
  const right = int ? import_vec10.default.nudge(import_vec10.default.rotWith(int, A, -Math.PI / 6), A, r1 * -0.382) : A;
  return { left, right };
}
function getStraightArrowHeadPoints(A, B, r) {
  const ints = (0, import_intersect5.intersectCircleLineSegment)(A, r, A, B).points;
  if (!ints) {
    TLDR.warn("Could not find an intersection for the arrow head.");
    return { left: A, right: A };
  }
  const int = ints[0];
  const left = int ? import_vec10.default.rotWith(int, A, Math.PI / 6) : A;
  const right = int ? import_vec10.default.rotWith(int, A, -Math.PI / 6) : A;
  return { left, right };
}
function getCurvedArrowHeadPath(A, r1, C, r2, sweep) {
  const { left, right } = getCurvedArrowHeadPoints(A, r1, C, r2, sweep);
  return `M ${left} L ${A} ${right}`;
}
function getStraightArrowHeadPath(A, B, r) {
  const { left, right } = getStraightArrowHeadPoints(A, B, r);
  return `M ${left} L ${A} ${right}`;
}
function getArrowPath(style, start, bend, end, decorationStart, decorationEnd) {
  const { strokeWidth } = getShapeStyle(style, false);
  const arrowDist = import_vec10.default.dist(start, end);
  const arrowHeadLength = Math.min(arrowDist / 3, strokeWidth * 8);
  const path = [];
  const isStraightLine = import_vec10.default.dist(bend, import_vec10.default.toFixed(import_vec10.default.med(start, end))) < 1;
  if (isStraightLine) {
    path.push(`M ${start} L ${end}`);
    if (decorationStart) {
      path.push(getStraightArrowHeadPath(start, end, arrowHeadLength));
    }
    if (decorationEnd) {
      path.push(getStraightArrowHeadPath(end, start, arrowHeadLength));
    }
  } else {
    const circle = getCtp(start, bend, end);
    const center = [circle[0], circle[1]];
    const radius = circle[2];
    const length = getArcLength(center, radius, start, end);
    path.push(`M ${start} A ${radius} ${radius} 0 0 ${length > 0 ? "1" : "0"} ${end}`);
    if (decorationStart)
      path.push(getCurvedArrowHeadPath(start, arrowHeadLength, center, radius, length < 0));
    if (decorationEnd) {
      path.push(getCurvedArrowHeadPath(end, arrowHeadLength, center, radius, length >= 0));
    }
  }
  return path.join(" ");
}
function getArcPoints(start, bend, end) {
  if (import_vec10.default.dist2(bend, import_vec10.default.med(start, end)) <= 4)
    return [start, end];
  const points = [];
  const circle = getCtp(start, bend, end);
  const center = [circle[0], circle[1]];
  const radius = circle[2];
  const startAngle = import_vec10.default.angle(center, start);
  const endAngle = import_vec10.default.angle(center, end);
  for (let i = 1 / 20; i < 1; i += 1 / 20) {
    const angle = import_core13.Utils.lerpAngles(startAngle, endAngle, i);
    points.push(import_vec10.default.nudgeAtAngle(center, angle, radius));
  }
  return points;
}
function isAngleBetween(a, b, c) {
  if (c === a || c === b)
    return true;
  const PI24 = Math.PI * 2;
  const AB = (b - a + PI24) % PI24;
  const AC = (c - a + PI24) % PI24;
  return AB <= Math.PI !== AC > AB;
}
function getArcLength(C, r, A, B) {
  const sweep = import_core13.Utils.getSweep(C, A, B);
  return r * (2 * Math.PI) * (sweep / (2 * Math.PI));
}

// src/state/shapes/ArrowUtil/components/StraightArrow.tsx
var import_core14 = require("@tldraw/core");
var import_vec11 = __toESM(require("@tldraw/vec"));
var React16 = __toESM(require("react"));

// src/state/shapes/ArrowUtil/components/ArrowHead.tsx
var React15 = __toESM(require("react"));
function Arrowhead({ left, middle, right, stroke, strokeWidth }) {
  return /* @__PURE__ */ React15.createElement("g", null, /* @__PURE__ */ React15.createElement("path", {
    className: "tl-stroke-hitarea",
    d: `M ${left} L ${middle} ${right}`
  }), /* @__PURE__ */ React15.createElement("path", {
    d: `M ${left} L ${middle} ${right}`,
    fill: "none",
    stroke,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    pointerEvents: "none"
  }));
}

// src/state/shapes/ArrowUtil/components/StraightArrow.tsx
var StraightArrow = React16.memo(function StraightArrow2({
  id,
  style,
  start,
  end,
  decorationStart,
  decorationEnd,
  isDraw,
  isDarkMode
}) {
  const arrowDist = import_vec11.default.dist(start, end);
  if (arrowDist < 2)
    return null;
  const styles2 = getShapeStyle(style, isDarkMode);
  const { strokeWidth } = styles2;
  const sw = 1 + strokeWidth * 1.618;
  const path = isDraw ? renderFreehandArrowShaft(id, style, start, end, decorationStart, decorationEnd) : "M" + import_vec11.default.toFixed(start) + "L" + import_vec11.default.toFixed(end);
  const { strokeDasharray, strokeDashoffset } = import_core14.Utils.getPerfectDashProps(arrowDist, strokeWidth * 1.618, style.dash, 2, false);
  const arrowHeadLength = Math.min(arrowDist / 3, strokeWidth * 8);
  const startArrowHead = decorationStart ? getStraightArrowHeadPoints(start, end, arrowHeadLength) : null;
  const endArrowHead = decorationEnd ? getStraightArrowHeadPoints(end, start, arrowHeadLength) : null;
  return /* @__PURE__ */ React16.createElement(React16.Fragment, null, /* @__PURE__ */ React16.createElement("path", {
    className: "tl-stroke-hitarea",
    d: path
  }), /* @__PURE__ */ React16.createElement("path", {
    d: path,
    fill: styles2.stroke,
    stroke: styles2.stroke,
    strokeWidth: isDraw ? sw / 2 : sw,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    pointerEvents: "stroke"
  }), startArrowHead && /* @__PURE__ */ React16.createElement(Arrowhead, {
    left: startArrowHead.left,
    middle: start,
    right: startArrowHead.right,
    stroke: styles2.stroke,
    strokeWidth: sw
  }), endArrowHead && /* @__PURE__ */ React16.createElement(Arrowhead, {
    left: endArrowHead.left,
    middle: end,
    right: endArrowHead.right,
    stroke: styles2.stroke,
    strokeWidth: sw
  }));
});

// src/state/shapes/ArrowUtil/components/CurvedArrow.tsx.tsx
var import_core15 = require("@tldraw/core");
var import_vec12 = __toESM(require("@tldraw/vec"));
var React17 = __toESM(require("react"));
var CurvedArrow = React17.memo(function CurvedArrow2({
  id,
  style,
  start,
  bend,
  end,
  arrowBend,
  decorationStart,
  decorationEnd,
  isDraw,
  isDarkMode
}) {
  const arrowDist = import_vec12.default.dist(start, end);
  if (arrowDist < 2)
    return null;
  const styles2 = getShapeStyle(style, isDarkMode);
  const { strokeWidth } = styles2;
  const sw = 1 + strokeWidth * 1.618;
  const circle = getCtp(start, bend, end);
  const center = [circle[0], circle[1]];
  const radius = circle[2];
  const length = getArcLength(center, radius, start, end);
  const getRandom = import_core15.Utils.rng(id);
  const easing = EASINGS[getRandom() > 0 ? "easeInOutSine" : "easeInOutCubic"];
  const path = isDraw ? renderCurvedFreehandArrowShaft(id, style, start, end, decorationStart, decorationEnd, center, radius, length, easing) : getArrowArcPath(start, end, circle, arrowBend);
  const { strokeDasharray, strokeDashoffset } = import_core15.Utils.getPerfectDashProps(Math.abs(length), sw, style.dash, 2, false);
  const arrowHeadLength = Math.min(arrowDist / 3, strokeWidth * 8);
  const startArrowHead = decorationStart ? getCurvedArrowHeadPoints(start, arrowHeadLength, center, radius, length < 0) : null;
  const endArrowHead = decorationEnd ? getCurvedArrowHeadPoints(end, arrowHeadLength, center, radius, length >= 0) : null;
  return /* @__PURE__ */ React17.createElement(React17.Fragment, null, /* @__PURE__ */ React17.createElement("path", {
    className: "tl-stroke-hitarea",
    d: path
  }), /* @__PURE__ */ React17.createElement("path", {
    d: path,
    fill: isDraw ? styles2.stroke : "none",
    stroke: styles2.stroke,
    strokeWidth: isDraw ? 0 : sw,
    strokeDasharray,
    strokeDashoffset,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    pointerEvents: "none"
  }), startArrowHead && /* @__PURE__ */ React17.createElement(Arrowhead, {
    left: startArrowHead.left,
    middle: start,
    right: startArrowHead.right,
    stroke: styles2.stroke,
    strokeWidth: sw
  }), endArrowHead && /* @__PURE__ */ React17.createElement(Arrowhead, {
    left: endArrowHead.left,
    middle: end,
    right: endArrowHead.right,
    stroke: styles2.stroke,
    strokeWidth: sw
  }));
});

// src/state/shapes/shared/LabelMask.tsx
var React18 = __toESM(require("react"));
function LabelMask({ id, bounds, labelSize, offset, scale = 1 }) {
  return /* @__PURE__ */ React18.createElement("defs", null, /* @__PURE__ */ React18.createElement("mask", {
    id: id + "_clip"
  }, /* @__PURE__ */ React18.createElement("rect", {
    x: -100,
    y: -100,
    width: bounds.width + 200,
    height: bounds.height + 200,
    fill: "white"
  }), /* @__PURE__ */ React18.createElement("rect", {
    x: bounds.width / 2 - labelSize[0] / 2 * scale + ((offset == null ? void 0 : offset[0]) || 0),
    y: bounds.height / 2 - labelSize[1] / 2 * scale + ((offset == null ? void 0 : offset[1]) || 0),
    width: labelSize[0] * scale,
    height: labelSize[1] * scale,
    rx: 4 * scale,
    ry: 4 * scale,
    fill: "black",
    opacity: Math.max(scale, 0.8)
  })));
}

// src/state/shapes/ArrowUtil/ArrowUtil.tsx
var ArrowUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "arrow" /* Arrow */);
    __publicField(this, "hideBounds", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "pathCache", /* @__PURE__ */ new WeakMap());
    __publicField(this, "getShape", (props) => {
      var _a, _b, _c, _d;
      return __spreadValues({
        id: "id",
        type: "arrow" /* Arrow */,
        name: "Arrow",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        rotation: 0,
        bend: 0,
        handles: {
          start: __spreadValues({
            id: "start",
            index: 0,
            point: [0, 0],
            canBind: true
          }, (_a = props.handles) == null ? void 0 : _a.start),
          end: __spreadValues({
            id: "end",
            index: 1,
            point: [1, 1],
            canBind: true
          }, (_b = props.handles) == null ? void 0 : _b.end),
          bend: __spreadValues({
            id: "bend",
            index: 2,
            point: [0.5, 0.5]
          }, (_c = props.handles) == null ? void 0 : _c.bend)
        },
        decorations: (_d = props.decorations) != null ? _d : {
          end: "arrow" /* Arrow */
        },
        style: __spreadValues(__spreadProps(__spreadValues({}, defaultStyle), {
          isFilled: false
        }), props.style),
        label: "",
        labelPoint: [0.5, 0.5]
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(({ shape, isEditing, isGhost, meta, events, onShapeChange, onShapeBlur }, ref) => {
      const {
        id,
        label = "",
        handles: { start, bend, end },
        decorations = {},
        style
      } = shape;
      const isStraightLine = import_vec13.Vec.dist(bend.point, import_vec13.Vec.toFixed(import_vec13.Vec.med(start.point, end.point))) < 1;
      const font = getFontStyle(style);
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const labelSize = label || isEditing ? getTextLabelSize(label, font) : [0, 0];
      const bounds = this.getBounds(shape);
      const dist = React19.useMemo(() => {
        const { start: start2, bend: bend2, end: end2 } = shape.handles;
        if (isStraightLine)
          return import_vec13.Vec.dist(start2.point, end2.point);
        const circle = getCtp(start2.point, bend2.point, end2.point);
        const center = circle.slice(0, 2);
        const radius = circle[2];
        const length = getArcLength(center, radius, start2.point, end2.point);
        return Math.abs(length);
      }, [shape.handles]);
      const scale = Math.max(0.5, Math.min(1, Math.max(dist / (labelSize[1] + 128), dist / (labelSize[0] + 128))));
      const offset = React19.useMemo(() => {
        const bounds2 = this.getBounds(shape);
        const offset2 = import_vec13.Vec.sub(shape.handles.bend.point, import_vec13.Vec.toFixed([bounds2.width / 2, bounds2.height / 2]));
        return offset2;
      }, [shape, scale]);
      const handleLabelChange = React19.useCallback((label2) => {
        onShapeChange == null ? void 0 : onShapeChange({ id, label: label2 });
      }, [onShapeChange]);
      const Component = isStraightLine ? StraightArrow : CurvedArrow;
      return /* @__PURE__ */ React19.createElement(FullWrapper4, __spreadValues({
        ref
      }, events), /* @__PURE__ */ React19.createElement(TextLabel, {
        font,
        text: label,
        color: styles2.stroke,
        offsetX: offset[0],
        offsetY: offset[1],
        scale,
        isEditing,
        onChange: handleLabelChange,
        onBlur: onShapeBlur
      }), /* @__PURE__ */ React19.createElement(import_core16.SVGContainer, {
        id: shape.id + "_svg"
      }, /* @__PURE__ */ React19.createElement("defs", null, /* @__PURE__ */ React19.createElement("mask", {
        id: shape.id + "_clip"
      }, /* @__PURE__ */ React19.createElement("rect", {
        x: -100,
        y: -100,
        width: bounds.width + 200,
        height: bounds.height + 200,
        fill: "white"
      }), /* @__PURE__ */ React19.createElement("rect", {
        x: bounds.width / 2 - labelSize[0] / 2 * scale + offset[0],
        y: bounds.height / 2 - labelSize[1] / 2 * scale + offset[1],
        width: labelSize[0] * scale,
        height: labelSize[1] * scale,
        rx: 4 * scale,
        ry: 4 * scale,
        fill: "black",
        opacity: 1
      }))), /* @__PURE__ */ React19.createElement("g", {
        pointerEvents: "none",
        opacity: isGhost ? GHOSTED_OPACITY : 1,
        mask: label || isEditing ? `url(#${shape.id}_clip)` : ``
      }, /* @__PURE__ */ React19.createElement(Component, {
        id,
        style,
        start: start.point,
        end: end.point,
        bend: bend.point,
        arrowBend: shape.bend,
        decorationStart: decorations == null ? void 0 : decorations.start,
        decorationEnd: decorations == null ? void 0 : decorations.end,
        isDraw: style.dash === "draw" /* Draw */,
        isDarkMode: meta.isDarkMode
      }))));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape, bounds }) => {
      const {
        style,
        decorations,
        label,
        handles: { start, bend, end }
      } = shape;
      const font = getFontStyle(style);
      const labelSize = label ? getTextLabelSize(label, font) : [0, 0];
      const isStraightLine = import_vec13.Vec.dist(bend.point, import_vec13.Vec.toFixed(import_vec13.Vec.med(start.point, end.point))) < 1;
      const dist = React19.useMemo(() => {
        const { start: start2, bend: bend2, end: end2 } = shape.handles;
        if (isStraightLine)
          return import_vec13.Vec.dist(start2.point, end2.point);
        const circle = getCtp(start2.point, bend2.point, end2.point);
        const center = circle.slice(0, 2);
        const radius = circle[2];
        const length = getArcLength(center, radius, start2.point, end2.point);
        return Math.abs(length);
      }, [shape.handles]);
      const scale = Math.max(0.5, Math.min(1, Math.max(dist / (labelSize[1] + 128), dist / (labelSize[0] + 128))));
      const offset = React19.useMemo(() => {
        const bounds2 = this.getBounds(shape);
        const offset2 = import_vec13.Vec.sub(shape.handles.bend.point, [bounds2.width / 2, bounds2.height / 2]);
        return offset2;
      }, [shape, scale]);
      return /* @__PURE__ */ React19.createElement(React19.Fragment, null, /* @__PURE__ */ React19.createElement(LabelMask, {
        id: shape.id,
        scale,
        offset,
        bounds,
        labelSize
      }), /* @__PURE__ */ React19.createElement("path", {
        d: getArrowPath(style, start.point, bend.point, end.point, decorations == null ? void 0 : decorations.start, decorations == null ? void 0 : decorations.end),
        mask: label ? `url(#${shape.id}_clip)` : ``
      }), label && /* @__PURE__ */ React19.createElement("rect", {
        x: bounds.width / 2 - labelSize[0] / 2 * scale + offset[0],
        y: bounds.height / 2 - labelSize[1] / 2 * scale + offset[1],
        width: labelSize[0] * scale,
        height: labelSize[1] * scale,
        rx: 4 * scale,
        ry: 4 * scale,
        fill: "transparent"
      }));
    }));
    __publicField(this, "getBounds", (shape) => {
      const bounds = import_core16.Utils.getFromCache(this.boundsCache, shape, () => {
        const {
          handles: { start, bend, end }
        } = shape;
        return import_core16.Utils.getBoundsFromPoints(getArcPoints(start.point, bend.point, end.point));
      });
      return import_core16.Utils.translateBounds(bounds, shape.point);
    });
    __publicField(this, "getRotatedBounds", (shape) => {
      const {
        handles: { start, bend, end }
      } = shape;
      let points = getArcPoints(start.point, bend.point, end.point);
      const { minX, minY, maxX, maxY } = import_core16.Utils.getBoundsFromPoints(points);
      if (shape.rotation !== 0) {
        points = points.map((pt) => import_vec13.Vec.rotWith(pt, [(minX + maxX) / 2, (minY + maxY) / 2], shape.rotation || 0));
      }
      return import_core16.Utils.translateBounds(import_core16.Utils.getBoundsFromPoints(points), shape.point);
    });
    __publicField(this, "getCenter", (shape) => {
      const { start, end } = shape.handles;
      return import_vec13.Vec.add(shape.point, import_vec13.Vec.med(start.point, end.point));
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.decorations !== prev.decorations || next.handles !== prev.handles || next.style !== prev.style || next.label !== prev.label;
    });
    __publicField(this, "hitTestPoint", (shape, point) => {
      const {
        handles: { start, bend, end }
      } = shape;
      const pt = import_vec13.Vec.sub(point, shape.point);
      const points = getArcPoints(start.point, bend.point, end.point);
      for (let i = 1; i < points.length; i++) {
        if (import_vec13.Vec.distanceToLineSegment(points[i - 1], points[i], pt) < 1) {
          return true;
        }
      }
      return false;
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      const {
        handles: { start, bend, end }
      } = shape;
      const ptA = import_vec13.Vec.sub(A, shape.point);
      const ptB = import_vec13.Vec.sub(B, shape.point);
      const points = getArcPoints(start.point, bend.point, end.point);
      for (let i = 1; i < points.length; i++) {
        if ((0, import_intersect6.intersectLineSegmentLineSegment)(points[i - 1], points[i], ptA, ptB).didIntersect) {
          return true;
        }
      }
      return false;
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      const { start, end, bend } = shape.handles;
      const sp = import_vec13.Vec.add(shape.point, start.point);
      const ep = import_vec13.Vec.add(shape.point, end.point);
      if (import_core16.Utils.pointInBounds(sp, bounds) || import_core16.Utils.pointInBounds(ep, bounds)) {
        return true;
      }
      if (import_vec13.Vec.isEqual(import_vec13.Vec.med(start.point, end.point), bend.point)) {
        return (0, import_intersect6.intersectLineSegmentBounds)(sp, ep, bounds).length > 0;
      } else {
        const [cx, cy, r] = getCtp(start.point, bend.point, end.point);
        const cp = import_vec13.Vec.add(shape.point, [cx, cy]);
        return (0, import_intersect6.intersectArcBounds)(cp, r, sp, ep, bounds).length > 0;
      }
    });
    __publicField(this, "transform", (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const initialShapeBounds = this.getBounds(initialShape);
      const handles = ["start", "end"];
      const nextHandles = __spreadValues({}, initialShape.handles);
      handles.forEach((handle) => {
        const [x, y] = nextHandles[handle].point;
        const nw = x / initialShapeBounds.width;
        const nh = y / initialShapeBounds.height;
        nextHandles[handle] = __spreadProps(__spreadValues({}, nextHandles[handle]), {
          point: [
            bounds.width * (scaleX < 0 ? 1 - nw : nw),
            bounds.height * (scaleY < 0 ? 1 - nh : nh)
          ]
        });
      });
      const { start, bend, end } = nextHandles;
      const dist = import_vec13.Vec.dist(start.point, end.point);
      const midPoint = import_vec13.Vec.med(start.point, end.point);
      const bendDist = dist / 2 * initialShape.bend;
      const u = import_vec13.Vec.uni(import_vec13.Vec.vec(start.point, end.point));
      const point = import_vec13.Vec.add(midPoint, import_vec13.Vec.mul(import_vec13.Vec.per(u), bendDist));
      nextHandles["bend"] = __spreadProps(__spreadValues({}, bend), {
        point: import_vec13.Vec.toFixed(Math.abs(bendDist) < 10 ? midPoint : point)
      });
      return {
        point: import_vec13.Vec.toFixed([bounds.minX, bounds.minY]),
        handles: nextHandles
      };
    });
    __publicField(this, "onDoubleClickHandle", (shape, handle) => {
      var _a, _b;
      switch (handle) {
        case "bend": {
          return {
            bend: 0,
            handles: __spreadProps(__spreadValues({}, shape.handles), {
              bend: __spreadProps(__spreadValues({}, shape.handles.bend), {
                point: getBendPoint(shape.handles, shape.bend)
              })
            })
          };
        }
        case "start": {
          return {
            decorations: __spreadProps(__spreadValues({}, shape.decorations), {
              start: ((_a = shape.decorations) == null ? void 0 : _a.start) ? void 0 : "arrow" /* Arrow */
            })
          };
        }
        case "end": {
          return {
            decorations: __spreadProps(__spreadValues({}, shape.decorations), {
              end: ((_b = shape.decorations) == null ? void 0 : _b.end) ? void 0 : "arrow" /* Arrow */
            })
          };
        }
      }
      return this;
    });
    __publicField(this, "onHandleChange", (shape, handles) => {
      let nextHandles = import_core16.Utils.deepMerge(shape.handles, handles);
      let nextBend = shape.bend;
      nextHandles = import_core16.Utils.deepMerge(nextHandles, {
        start: {
          point: import_vec13.Vec.toFixed(nextHandles.start.point)
        },
        end: {
          point: import_vec13.Vec.toFixed(nextHandles.end.point)
        }
      });
      if (import_vec13.Vec.isEqual(nextHandles.start.point, nextHandles.end.point))
        return;
      if ("bend" in handles) {
        const { start, end, bend } = nextHandles;
        const distance = import_vec13.Vec.dist(start.point, end.point);
        const midPoint = import_vec13.Vec.med(start.point, end.point);
        const angle = import_vec13.Vec.angle(start.point, end.point);
        const u = import_vec13.Vec.uni(import_vec13.Vec.vec(start.point, end.point));
        const ap = import_vec13.Vec.add(midPoint, import_vec13.Vec.mul(import_vec13.Vec.per(u), distance));
        const bp = import_vec13.Vec.sub(midPoint, import_vec13.Vec.mul(import_vec13.Vec.per(u), distance));
        const bendPoint = import_vec13.Vec.nearestPointOnLineSegment(ap, bp, bend.point, true);
        const bendDist = import_vec13.Vec.dist(midPoint, bendPoint);
        const realBend = bendDist / (distance / 2);
        nextBend = import_core16.Utils.clamp(realBend, -0.99, 0.99);
        const angleToBend = import_vec13.Vec.angle(start.point, bendPoint);
        if (import_vec13.Vec.isEqual(midPoint, getBendPoint(nextHandles, nextBend))) {
          nextBend = 0;
        } else if (isAngleBetween(angle, angle + Math.PI, angleToBend)) {
          nextBend *= -1;
        }
      }
      const nextShape = {
        point: shape.point,
        bend: nextBend,
        handles: __spreadProps(__spreadValues({}, nextHandles), {
          bend: __spreadProps(__spreadValues({}, nextHandles.bend), {
            point: getBendPoint(nextHandles, nextBend)
          })
        })
      };
      const topLeft = shape.point;
      const nextBounds = this.getBounds(__spreadValues({}, nextShape));
      const offset = import_vec13.Vec.sub([nextBounds.minX, nextBounds.minY], topLeft);
      if (!import_vec13.Vec.isEqual(offset, [0, 0])) {
        Object.values(nextShape.handles).forEach((handle) => {
          handle.point = import_vec13.Vec.toFixed(import_vec13.Vec.sub(handle.point, offset));
        });
        nextShape.point = import_vec13.Vec.toFixed(import_vec13.Vec.add(nextShape.point, offset));
      }
      return nextShape;
    });
  }
};
var FullWrapper4 = styled("div", { width: "100%", height: "100%" });

// src/state/shapes/GroupUtil/GroupUtil.tsx
var React20 = __toESM(require("react"));
var import_core17 = require("@tldraw/core");
var GroupUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "group" /* Group */);
    __publicField(this, "canBind", true);
    __publicField(this, "getShape", (props) => {
      return import_core17.Utils.deepMerge({
        id: "id",
        type: "group" /* Group */,
        name: "Group",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        size: [100, 100],
        rotation: 0,
        children: [],
        style: defaultStyle
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(({ shape, isBinding, isGhost, isHovered, isSelected, events }, ref) => {
      const { id, size } = shape;
      const sw = 2;
      const w = Math.max(0, size[0] - sw / 2);
      const h = Math.max(0, size[1] - sw / 2);
      const strokes2 = [
        [[sw / 2, sw / 2], [w, sw / 2], w - sw / 2],
        [[w, sw / 2], [w, h], h - sw / 2],
        [[w, h], [sw / 2, h], w - sw / 2],
        [[sw / 2, h], [sw / 2, sw / 2], h - sw / 2]
      ];
      const paths = strokes2.map(([start, end], i) => {
        return /* @__PURE__ */ React20.createElement("line", {
          key: id + "_" + i,
          x1: start[0],
          y1: start[1],
          x2: end[0],
          y2: end[1]
        });
      });
      return /* @__PURE__ */ React20.createElement(import_core17.SVGContainer, __spreadValues({
        ref
      }, events), isBinding && /* @__PURE__ */ React20.createElement("rect", {
        className: "tl-binding-indicator",
        strokeWidth: this.bindingDistance
      }), /* @__PURE__ */ React20.createElement("g", {
        opacity: isGhost ? GHOSTED_OPACITY : 1
      }, /* @__PURE__ */ React20.createElement("rect", {
        x: 0,
        y: 0,
        width: size[0],
        height: size[1],
        fill: "transparent",
        pointerEvents: "all"
      }), /* @__PURE__ */ React20.createElement(ScaledLines, {
        stroke: "black" /* Black */,
        opacity: isHovered || isSelected ? 1 : 0,
        strokeLinecap: "round",
        pointerEvents: "stroke"
      }, paths)));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { id, size } = shape;
      const sw = 2;
      const w = Math.max(0, size[0] - sw / 2);
      const h = Math.max(0, size[1] - sw / 2);
      const strokes2 = [
        [[sw / 2, sw / 2], [w, sw / 2], w - sw / 2],
        [[w, sw / 2], [w, h], h - sw / 2],
        [[w, h], [sw / 2, h], w - sw / 2],
        [[sw / 2, h], [sw / 2, sw / 2], h - sw / 2]
      ];
      const paths = strokes2.map(([start, end], i) => {
        return /* @__PURE__ */ React20.createElement("line", {
          key: id + "_" + i,
          x1: start[0],
          y1: start[1],
          x2: end[0],
          y2: end[1]
        });
      });
      return /* @__PURE__ */ React20.createElement(ScaledLines, {
        strokeLinecap: "round",
        pointerEvents: "stroke"
      }, paths);
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style;
    });
  }
};
var ScaledLines = styled("g", {
  strokeWidth: "calc(1.5px * var(--tl-scale))",
  strokeDasharray: `calc(1px * var(--tl-scale)), calc(3px * var(--tl-scale))`
});

// src/state/shapes/StickyUtil/StickyUtil.tsx
var React21 = __toESM(require("react"));
var import_core18 = require("@tldraw/core");
var import_vec14 = require("@tldraw/vec");
var StickyUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "sticky" /* Sticky */);
    __publicField(this, "canBind", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "canClone", true);
    __publicField(this, "hideResizeHandles", true);
    __publicField(this, "showCloneHandles", true);
    __publicField(this, "getShape", (props) => {
      return import_core18.Utils.deepMerge({
        id: "id",
        type: "sticky" /* Sticky */,
        name: "Sticky",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        size: [200, 200],
        text: "",
        rotation: 0,
        style: defaultTextStyle
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(({ shape, meta, events, isGhost, isBinding, isEditing, onShapeBlur, onShapeChange }, ref) => {
      const font = getStickyFontStyle(shape.style);
      const { color, fill } = getStickyShapeStyle(shape.style, meta.isDarkMode);
      const rContainer = React21.useRef(null);
      const rTextArea = React21.useRef(null);
      const rText = React21.useRef(null);
      const rTextContent = React21.useRef(shape.text);
      const rIsMounted = React21.useRef(false);
      const handlePointerDown = React21.useCallback((e) => {
        e.stopPropagation();
      }, []);
      const handleTextChange = React21.useCallback((e) => {
        rTextContent.current = TLDR.normalizeText(e.currentTarget.value);
        onShapeChange == null ? void 0 : onShapeChange({
          id: shape.id,
          type: shape.type,
          text: rTextContent.current
        });
      }, [onShapeChange]);
      const handleKeyDown = React21.useCallback((e) => {
        if (e.key === "Escape")
          return;
        if (e.key === "Tab" && shape.text.length === 0) {
          e.preventDefault();
          return;
        }
        if (!(e.key === "Meta" || e.metaKey)) {
          e.stopPropagation();
        } else if (e.key === "z" && e.metaKey) {
          if (e.shiftKey) {
            document.execCommand("redo", false);
          } else {
            document.execCommand("undo", false);
          }
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        if (e.key === "Tab") {
          e.preventDefault();
          if (e.shiftKey) {
            TextAreaUtils.unindent(e.currentTarget);
          } else {
            TextAreaUtils.indent(e.currentTarget);
          }
          rTextContent.current = TLDR.normalizeText(e.currentTarget.value);
          onShapeChange == null ? void 0 : onShapeChange(__spreadProps(__spreadValues({}, shape), { text: rTextContent.current }));
        }
      }, [shape, onShapeChange]);
      const handleBlur = React21.useCallback((e) => {
        e.currentTarget.setSelectionRange(0, 0);
        onShapeBlur == null ? void 0 : onShapeBlur();
      }, []);
      const handleFocus = React21.useCallback((e) => {
        if (!isEditing)
          return;
        if (!rIsMounted.current)
          return;
        e.currentTarget.select();
      }, [isEditing]);
      React21.useEffect(() => {
        if (isEditing) {
          rTextContent.current = shape.text;
          rIsMounted.current = true;
          const elm = rTextArea.current;
          elm.focus();
          elm.select();
        }
      }, [isEditing]);
      React21.useEffect(() => {
        const text = rText.current;
        const { size } = shape;
        const { offsetHeight: currTextHeight } = text;
        const minTextHeight = MIN_CONTAINER_HEIGHT - PADDING * 2;
        const prevTextHeight = size[1] - PADDING * 2;
        if (currTextHeight === prevTextHeight)
          return;
        if (currTextHeight > minTextHeight) {
          onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, size: [size[0], currTextHeight + PADDING * 2] });
          return;
        }
        if (currTextHeight < minTextHeight && size[1] > MIN_CONTAINER_HEIGHT) {
          onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, size: [size[0], MIN_CONTAINER_HEIGHT] });
          return;
        }
        const textarea = rTextArea.current;
        textarea == null ? void 0 : textarea.focus();
      }, [shape.text, shape.size[1], shape.style]);
      const style = {
        font,
        color,
        textShadow: meta.isDarkMode ? `0.5px 0.5px 2px rgba(255, 255, 255,.25)` : `0.5px 0.5px 2px rgba(255, 255, 255,.5)`
      };
      return /* @__PURE__ */ React21.createElement(import_core18.HTMLContainer, __spreadValues({
        ref
      }, events), /* @__PURE__ */ React21.createElement(StyledStickyContainer, {
        ref: rContainer,
        isDarkMode: meta.isDarkMode,
        isGhost,
        style: __spreadValues({ backgroundColor: fill }, style)
      }, isBinding && /* @__PURE__ */ React21.createElement("div", {
        className: "tl-binding-indicator",
        style: {
          position: "absolute",
          top: -this.bindingDistance,
          left: -this.bindingDistance,
          width: `calc(100% + ${this.bindingDistance * 2}px)`,
          height: `calc(100% + ${this.bindingDistance * 2}px)`,
          backgroundColor: "var(--tl-selectFill)"
        }
      }), /* @__PURE__ */ React21.createElement(StyledText, {
        ref: rText,
        isEditing,
        alignment: shape.style.textAlign
      }, isEditing ? rTextContent.current : shape.text, "\u200B"), isEditing && /* @__PURE__ */ React21.createElement(StyledTextArea, {
        ref: rTextArea,
        onPointerDown: handlePointerDown,
        value: isEditing ? rTextContent.current : shape.text,
        onChange: handleTextChange,
        onKeyDown: handleKeyDown,
        onFocus: handleFocus,
        onBlur: handleBlur,
        tabIndex: -1,
        autoComplete: "false",
        autoCapitalize: "false",
        autoCorrect: "false",
        autoSave: "false",
        autoFocus: true,
        spellCheck: true,
        alignment: shape.style.textAlign,
        onContextMenu: stopPropagation
      })));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const {
        size: [width, height]
      } = shape;
      return /* @__PURE__ */ React21.createElement("rect", {
        x: 0,
        y: 0,
        rx: 3,
        ry: 3,
        width: Math.max(1, width),
        height: Math.max(1, height)
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style || next.text !== prev.text;
    });
    __publicField(this, "transform", (shape, bounds, { scaleX, scaleY, transformOrigin }) => {
      const point = import_vec14.Vec.toFixed([
        bounds.minX + (bounds.width - shape.size[0]) * (scaleX < 0 ? 1 - transformOrigin[0] : transformOrigin[0]),
        bounds.minY + (bounds.height - shape.size[1]) * (scaleY < 0 ? 1 - transformOrigin[1] : transformOrigin[1])
      ]);
      return {
        point
      };
    });
    __publicField(this, "transformSingle", (shape) => {
      return shape;
    });
    __publicField(this, "getSvgElement", (shape) => {
      const bounds = this.getBounds(shape);
      const textBounds = import_core18.Utils.expandBounds(bounds, -PADDING);
      const textElm = getTextSvgElement(shape.text, shape.style, textBounds);
      const style = getStickyShapeStyle(shape.style);
      textElm.setAttribute("fill", style.color);
      textElm.setAttribute("transform", `translate(${PADDING}, ${PADDING})`);
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("width", bounds.width + "");
      rect.setAttribute("height", bounds.height + "");
      rect.setAttribute("fill", style.fill);
      rect.setAttribute("rx", "3");
      rect.setAttribute("ry", "3");
      g.appendChild(rect);
      g.appendChild(textElm);
      return g;
    });
  }
};
var PADDING = 16;
var MIN_CONTAINER_HEIGHT = 200;
var StyledStickyContainer = styled("div", {
  pointerEvents: "all",
  position: "relative",
  backgroundColor: "rgba(255, 220, 100)",
  fontFamily: "sans-serif",
  height: "100%",
  width: "100%",
  padding: PADDING + "px",
  borderRadius: "3px",
  perspective: "800px",
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isDarkMode: {
      true: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)"
      },
      false: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)"
      }
    }
  }
});
var commonTextWrapping2 = {
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word"
};
var StyledText = styled("div", __spreadValues({
  position: "absolute",
  top: PADDING,
  left: PADDING,
  width: `calc(100% - ${PADDING * 2}px)`,
  height: "fit-content",
  font: "inherit",
  pointerEvents: "none",
  userSelect: "none",
  variants: {
    isEditing: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 1
      }
    },
    alignment: {
      ["start" /* Start */]: {
        textAlign: "left"
      },
      ["middle" /* Middle */]: {
        textAlign: "center"
      },
      ["end" /* End */]: {
        textAlign: "right"
      },
      ["justify" /* Justify */]: {
        textAlign: "justify"
      }
    }
  }
}, commonTextWrapping2));
var StyledTextArea = styled("textarea", __spreadProps(__spreadValues({
  width: "100%",
  height: "100%",
  border: "none",
  overflow: "hidden",
  background: "none",
  outline: "none",
  textAlign: "left",
  font: "inherit",
  padding: 0,
  color: "transparent",
  verticalAlign: "top",
  resize: "none",
  caretColor: "black"
}, commonTextWrapping2), {
  variants: {
    alignment: {
      ["start" /* Start */]: {
        textAlign: "left"
      },
      ["middle" /* Middle */]: {
        textAlign: "center"
      },
      ["end" /* End */]: {
        textAlign: "right"
      },
      ["justify" /* Justify */]: {
        textAlign: "justify"
      }
    }
  }
}));

// src/state/shapes/TextUtil/TextUtil.tsx
var React22 = __toESM(require("react"));
var import_core19 = require("@tldraw/core");
var import_vec15 = require("@tldraw/vec");
var TextUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "text" /* Text */);
    __publicField(this, "isAspectRatioLocked", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "bindingDistance", BINDING_DISTANCE / 2);
    __publicField(this, "getShape", (props) => {
      return import_core19.Utils.deepMerge({
        id: "id",
        type: "text" /* Text */,
        name: "Text",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        rotation: 0,
        text: " ",
        style: defaultTextStyle
      }, props);
    });
    __publicField(this, "texts", /* @__PURE__ */ new Map());
    __publicField(this, "Component", TDShapeUtil.Component(({ shape, isBinding, isGhost, isEditing, onShapeBlur, onShapeChange, meta, events }, ref) => {
      const { text, style } = shape;
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const font = getFontStyle(shape.style);
      const rInput = React22.useRef(null);
      const rIsMounted = React22.useRef(false);
      const handleChange = React22.useCallback((e) => {
        let delta = [0, 0];
        const newText = TLDR.normalizeText(e.currentTarget.value);
        const currentBounds = this.getBounds(shape);
        this.texts.set(shape.id, newText);
        const nextBounds = this.getBounds(__spreadProps(__spreadValues({}, shape), {
          text: newText
        }));
        switch (shape.style.textAlign) {
          case "start" /* Start */: {
            break;
          }
          case "middle" /* Middle */: {
            delta = import_vec15.Vec.div([nextBounds.width - currentBounds.width, 0], 2);
            break;
          }
          case "end" /* End */: {
            delta = [nextBounds.width - currentBounds.width, 0];
            break;
          }
        }
        onShapeChange == null ? void 0 : onShapeChange(__spreadProps(__spreadValues({}, shape), {
          id: shape.id,
          point: import_vec15.Vec.sub(shape.point, delta),
          text: newText
        }));
      }, [shape.id, shape.point]);
      const onChange = React22.useCallback((text2) => {
        this.texts.set(shape.id, TLDR.normalizeText(text2));
        onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, text: this.texts.get(shape.id) });
      }, [shape.id]);
      const handleKeyDown = useTextKeyboardEvents(onChange);
      const handleBlur = React22.useCallback((e) => {
        e.currentTarget.setSelectionRange(0, 0);
        onShapeBlur == null ? void 0 : onShapeBlur();
      }, []);
      const handleFocus = React22.useCallback((e) => {
        if (!isEditing)
          return;
        if (!rIsMounted.current)
          return;
        if (document.activeElement === e.currentTarget) {
          e.currentTarget.select();
        }
      }, [isEditing]);
      const handlePointerDown = React22.useCallback((e) => {
        if (isEditing) {
          e.stopPropagation();
        }
      }, [isEditing]);
      React22.useEffect(() => {
        if (isEditing) {
          this.texts.set(shape.id, text);
          requestAnimationFrame(() => {
            rIsMounted.current = true;
            const elm = rInput.current;
            if (elm) {
              elm.focus();
              elm.select();
            }
          });
        } else {
          onShapeBlur == null ? void 0 : onShapeBlur();
        }
      }, [isEditing]);
      return /* @__PURE__ */ React22.createElement(import_core19.HTMLContainer, __spreadValues({
        ref
      }, events), /* @__PURE__ */ React22.createElement(Wrapper, {
        isGhost,
        isEditing,
        onPointerDown: handlePointerDown
      }, /* @__PURE__ */ React22.createElement(InnerWrapper2, {
        style: {
          font,
          color: styles2.stroke,
          textAlign: getTextAlign(style.textAlign)
        }
      }, isBinding && /* @__PURE__ */ React22.createElement("div", {
        className: "tl-binding-indicator",
        style: {
          position: "absolute",
          top: -this.bindingDistance,
          left: -this.bindingDistance,
          width: `calc(100% + ${this.bindingDistance * 2}px)`,
          height: `calc(100% + ${this.bindingDistance * 2}px)`,
          backgroundColor: "var(--tl-selectFill)"
        }
      }), isEditing ? /* @__PURE__ */ React22.createElement(TextArea2, {
        ref: rInput,
        style: {
          font,
          color: styles2.stroke
        },
        name: "text",
        tabIndex: -1,
        autoComplete: "false",
        autoCapitalize: "false",
        autoCorrect: "false",
        autoSave: "false",
        autoFocus: true,
        placeholder: "",
        spellCheck: "true",
        wrap: "off",
        dir: "auto",
        datatype: "wysiwyg",
        defaultValue: text,
        color: styles2.stroke,
        onFocus: handleFocus,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        onPointerDown: handlePointerDown,
        onContextMenu: stopPropagation
      }) : text, "\u200B")));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { width, height } = this.getBounds(shape);
      return /* @__PURE__ */ React22.createElement("rect", {
        x: 0,
        y: 0,
        width,
        height
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      const bounds = import_core19.Utils.getFromCache(this.boundsCache, shape, () => {
        var _a;
        if (!melm2) {
          return { minX: 0, minY: 0, maxX: 10, maxY: 10, width: 10, height: 10 };
        }
        if (!melm2.parentNode)
          document.body.appendChild(melm2);
        melm2.style.font = getFontStyle(shape.style);
        melm2.textContent = (_a = this.texts.get(shape.id)) != null ? _a : shape.text;
        const width = melm2.offsetWidth || 1;
        const height = melm2.offsetHeight || 1;
        return {
          minX: 0,
          maxX: width,
          minY: 0,
          maxY: height,
          width,
          height
        };
      });
      return import_core19.Utils.translateBounds(bounds, shape.point);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.text !== prev.text || next.style.scale !== prev.style.scale || next.style !== prev.style;
    });
    __publicField(this, "transform", (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const {
        rotation = 0,
        style: { scale = 1 }
      } = initialShape;
      const nextScale = scale * Math.abs(Math.min(scaleX, scaleY));
      return {
        point: [bounds.minX, bounds.minY],
        rotation: scaleX < 0 && scaleY >= 0 || scaleY < 0 && scaleX >= 0 ? -(rotation || 0) : rotation,
        style: __spreadProps(__spreadValues({}, initialShape.style), {
          scale: nextScale
        })
      };
    });
    __publicField(this, "transformSingle", (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const {
        style: { scale = 1 }
      } = initialShape;
      return {
        point: import_vec15.Vec.toFixed([bounds.minX, bounds.minY]),
        style: __spreadProps(__spreadValues({}, initialShape.style), {
          scale: scale * Math.max(Math.abs(scaleY), Math.abs(scaleX))
        })
      };
    });
    __publicField(this, "onDoubleClickBoundsHandle", (shape) => {
      const center = this.getCenter(shape);
      const newCenter = this.getCenter(__spreadProps(__spreadValues({}, shape), {
        style: __spreadProps(__spreadValues({}, shape.style), {
          scale: 1
        })
      }));
      return {
        style: __spreadProps(__spreadValues({}, shape.style), {
          scale: 1
        }),
        point: import_vec15.Vec.toFixed(import_vec15.Vec.add(shape.point, import_vec15.Vec.sub(center, newCenter)))
      };
    });
    __publicField(this, "getSvgElement", (shape) => {
      const bounds = this.getBounds(shape);
      const elm = getTextSvgElement(shape.text, shape.style, bounds);
      elm.setAttribute("fill", getShapeStyle(shape.style).stroke);
      return elm;
    });
  }
};
var melm2;
function getMeasurementDiv2() {
  var _a;
  (_a = document.getElementById("__textMeasure")) == null ? void 0 : _a.remove();
  const pre = document.createElement("pre");
  pre.id = "__textMeasure";
  Object.assign(pre.style, {
    whiteSpace: "pre",
    width: "auto",
    border: "1px solid transparent",
    padding: "4px",
    margin: "0px",
    letterSpacing: LETTER_SPACING,
    opacity: "0",
    position: "absolute",
    top: "-500px",
    left: "0px",
    zIndex: "9999",
    pointerEvents: "none",
    userSelect: "none",
    alignmentBaseline: "mathematical",
    dominantBaseline: "mathematical"
  });
  pre.tabIndex = -1;
  document.body.appendChild(pre);
  return pre;
}
if (typeof window !== "undefined") {
  melm2 = getMeasurementDiv2();
}
var Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isEditing: {
      false: {
        pointerEvents: "all",
        userSelect: "all"
      },
      true: {
        pointerEvents: "none",
        userSelect: "none"
      }
    }
  }
});
var commonTextWrapping3 = {
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word"
};
var InnerWrapper2 = styled("div", __spreadValues({
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: "4px",
  zIndex: 1,
  minHeight: 1,
  minWidth: 1,
  lineHeight: 1,
  letterSpacing: LETTER_SPACING,
  outline: 0,
  fontWeight: "500",
  backfaceVisibility: "hidden",
  userSelect: "none",
  pointerEvents: "none",
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
  isEditing: {
    false: {},
    true: {
      pointerEvents: "all",
      background: "$boundsBg",
      userSelect: "text",
      WebkitUserSelect: "text"
    }
  }
}, commonTextWrapping3));
var TextArea2 = styled("textarea", __spreadValues({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  border: "none",
  padding: "4px",
  resize: "none",
  textAlign: "inherit",
  minHeight: "inherit",
  minWidth: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  outline: 0,
  fontWeight: "inherit",
  overflow: "hidden",
  backfaceVisibility: "hidden",
  display: "inline-block",
  pointerEvents: "all",
  background: "$boundsBg",
  userSelect: "text",
  WebkitUserSelect: "text"
}, commonTextWrapping3));

// src/state/shapes/DrawUtil/DrawUtil.tsx
var React23 = __toESM(require("react"));
var import_core21 = require("@tldraw/core");
var import_vec17 = require("@tldraw/vec");
var import_intersect7 = require("@tldraw/intersect");

// src/state/shapes/DrawUtil/drawHelpers.ts
var import_core20 = require("@tldraw/core");
var import_vec16 = __toESM(require("@tldraw/vec"));
var import_perfect_freehand5 = require("perfect-freehand");
var simulatePressureSettings = {
  easing: (t) => Math.sin(t * Math.PI / 2),
  simulatePressure: true
};
var realPressureSettings = {
  easing: (t) => t * t,
  simulatePressure: false
};
function getFreehandOptions(shape) {
  const styles2 = getShapeStyle(shape.style);
  const options2 = __spreadProps(__spreadValues({
    size: 1 + styles2.strokeWidth * 1.5,
    thinning: 0.65,
    streamline: 0.65,
    smoothing: 0.65
  }, shape.points[1][2] === 0.5 ? simulatePressureSettings : realPressureSettings), {
    last: shape.isComplete
  });
  return options2;
}
function getFillPath(shape) {
  if (shape.points.length < 2)
    return "";
  return import_core20.Utils.getSvgPathFromStroke((0, import_perfect_freehand5.getStrokePoints)(shape.points, getFreehandOptions(shape)).map((pt) => pt.point));
}
function getDrawStrokePoints(shape, options2) {
  return (0, import_perfect_freehand5.getStrokePoints)(shape.points, options2);
}
function getDrawStrokePathTDSnapshot(shape) {
  if (shape.points.length < 2)
    return "";
  const options2 = getFreehandOptions(shape);
  const strokePoints = getDrawStrokePoints(shape, options2);
  const path = import_core20.Utils.getSvgPathFromStroke((0, import_perfect_freehand5.getStrokeOutlinePoints)(strokePoints, options2));
  return path;
}
function getSolidStrokePathTDSnapshot(shape) {
  const { points } = shape;
  if (points.length < 2)
    return "M 0 0 L 0 0";
  const options2 = getFreehandOptions(shape);
  const strokePoints = getDrawStrokePoints(shape, options2).map((pt) => pt.point.slice(0, 2));
  const last = points[points.length - 1].slice(0, 2);
  if (!import_vec16.default.isEqual(strokePoints[0], last))
    strokePoints.push(last);
  const path = import_core20.Utils.getSvgPathFromStroke(strokePoints, false);
  return path;
}

// src/state/shapes/DrawUtil/DrawUtil.tsx
var DrawUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "draw" /* Draw */);
    __publicField(this, "pointsBoundsCache", /* @__PURE__ */ new WeakMap([]));
    __publicField(this, "shapeBoundsCache", /* @__PURE__ */ new Map());
    __publicField(this, "rotatedCache", /* @__PURE__ */ new WeakMap([]));
    __publicField(this, "pointCache", {});
    __publicField(this, "canClone", true);
    __publicField(this, "getShape", (props) => {
      return import_core21.Utils.deepMerge({
        id: "id",
        type: "draw" /* Draw */,
        name: "Draw",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        rotation: 0,
        style: defaultStyle,
        points: [],
        isComplete: false
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(({ shape, meta, isSelected, isGhost, events }, ref) => {
      const { points, style, isComplete } = shape;
      const polygonPathTDSnapshot = React23.useMemo(() => {
        return getFillPath(shape);
      }, [points, style.size]);
      const pathTDSnapshot = React23.useMemo(() => {
        return style.dash === "draw" /* Draw */ ? getDrawStrokePathTDSnapshot(shape) : getSolidStrokePathTDSnapshot(shape);
      }, [points, style.size, style.dash, isComplete]);
      const styles2 = getShapeStyle(style, meta.isDarkMode);
      const { stroke, fill, strokeWidth, opacity } = styles2;
      const bounds = this.getBounds(shape);
      const verySmall = bounds.width <= strokeWidth / 2 && bounds.height <= strokeWidth / 2;
      if (verySmall) {
        const sw2 = 1 + strokeWidth;
        return /* @__PURE__ */ React23.createElement(import_core21.SVGContainer, __spreadValues({
          ref,
          id: shape.id + "_svg"
        }, events), /* @__PURE__ */ React23.createElement("circle", {
          r: sw2,
          fill: stroke,
          stroke,
          pointerEvents: "all",
          opacity: isGhost ? GHOSTED_OPACITY : opacity
        }));
      }
      const shouldFill = style.isFilled && points.length > 3 && import_vec17.Vec.dist(points[0], points[points.length - 1]) < strokeWidth * 2;
      if (shape.style.dash === "draw" /* Draw */) {
        return /* @__PURE__ */ React23.createElement(import_core21.SVGContainer, __spreadValues({
          ref,
          id: shape.id + "_svg"
        }, events), /* @__PURE__ */ React23.createElement("g", {
          opacity: isGhost ? GHOSTED_OPACITY : opacity
        }, /* @__PURE__ */ React23.createElement("path", {
          className: shouldFill || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
          d: pathTDSnapshot
        }), shouldFill && /* @__PURE__ */ React23.createElement("path", {
          d: polygonPathTDSnapshot,
          stroke: "none",
          fill,
          strokeLinejoin: "round",
          strokeLinecap: "round",
          pointerEvents: "none"
        }), /* @__PURE__ */ React23.createElement("path", {
          d: pathTDSnapshot,
          fill: stroke,
          stroke,
          strokeWidth: strokeWidth / 2,
          strokeLinejoin: "round",
          strokeLinecap: "round",
          pointerEvents: "none"
        })));
      }
      const strokeDasharray = {
        ["draw" /* Draw */]: "none",
        ["solid" /* Solid */]: `none`,
        ["dotted" /* Dotted */]: `0.1 ${strokeWidth * 4}`,
        ["dashed" /* Dashed */]: `${strokeWidth * 4} ${strokeWidth * 4}`
      }[style.dash];
      const strokeDashoffset = {
        ["draw" /* Draw */]: "none",
        ["solid" /* Solid */]: `none`,
        ["dotted" /* Dotted */]: `0`,
        ["dashed" /* Dashed */]: `0`
      }[style.dash];
      const sw = 1 + strokeWidth * 1.5;
      return /* @__PURE__ */ React23.createElement(import_core21.SVGContainer, __spreadValues({
        ref,
        id: shape.id + "_svg"
      }, events), /* @__PURE__ */ React23.createElement("g", {
        opacity: isGhost ? GHOSTED_OPACITY : opacity
      }, /* @__PURE__ */ React23.createElement("path", {
        className: shouldFill && isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        d: pathTDSnapshot
      }), /* @__PURE__ */ React23.createElement("path", {
        d: pathTDSnapshot,
        fill: shouldFill ? fill : "none",
        stroke: "none",
        strokeWidth: Math.min(4, strokeWidth * 2),
        strokeLinejoin: "round",
        strokeLinecap: "round",
        pointerEvents: "none"
      }), /* @__PURE__ */ React23.createElement("path", {
        d: pathTDSnapshot,
        fill: "none",
        stroke,
        strokeWidth: sw,
        strokeDasharray,
        strokeDashoffset,
        strokeLinejoin: "round",
        strokeLinecap: "round",
        pointerEvents: "none"
      })));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { points } = shape;
      const pathTDSnapshot = React23.useMemo(() => {
        return getSolidStrokePathTDSnapshot(shape);
      }, [points]);
      const bounds = this.getBounds(shape);
      const verySmall = bounds.width < 4 && bounds.height < 4;
      if (verySmall) {
        return /* @__PURE__ */ React23.createElement("circle", {
          x: bounds.width / 2,
          y: bounds.height / 2,
          r: 1
        });
      }
      return /* @__PURE__ */ React23.createElement("path", {
        d: pathTDSnapshot
      });
    }));
    __publicField(this, "transform", (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const initialShapeBounds = import_core21.Utils.getFromCache(this.boundsCache, initialShape, () => import_core21.Utils.getBoundsFromPoints(initialShape.points));
      const points = initialShape.points.map(([x, y, r]) => {
        return [
          bounds.width * (scaleX < 0 ? 1 - x / initialShapeBounds.width : x / initialShapeBounds.width),
          bounds.height * (scaleY < 0 ? 1 - y / initialShapeBounds.height : y / initialShapeBounds.height),
          r
        ];
      });
      const newBounds = import_core21.Utils.getBoundsFromPoints(shape.points);
      const point = import_vec17.Vec.sub([bounds.minX, bounds.minY], [newBounds.minX, newBounds.minY]);
      return {
        points,
        point
      };
    });
    __publicField(this, "getBounds", (shape) => {
      const pointsHaveChanged = !this.pointsBoundsCache.has(shape.points);
      const pointHasChanged = !(this.pointCache[shape.id] === shape.point);
      if (pointsHaveChanged) {
        const bounds = import_core21.Utils.getBoundsFromPoints(shape.points);
        this.pointsBoundsCache.set(shape.points, bounds);
        this.shapeBoundsCache.set(shape.id, import_core21.Utils.translateBounds(bounds, shape.point));
        this.pointCache[shape.id] = shape.point;
      } else if (pointHasChanged && !pointsHaveChanged) {
        this.pointCache[shape.id] = shape.point;
        this.shapeBoundsCache.set(shape.id, import_core21.Utils.translateBounds(this.pointsBoundsCache.get(shape.points), shape.point));
      }
      return this.shapeBoundsCache.get(shape.id);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.points !== prev.points || next.style !== prev.style || next.isComplete !== prev.isComplete;
    });
    __publicField(this, "hitTestPoint", (shape, point) => {
      const ptA = import_vec17.Vec.sub(point, shape.point);
      return import_core21.Utils.pointInPolyline(ptA, shape.points);
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      const { points, point } = shape;
      const ptA = import_vec17.Vec.sub(A, point);
      const ptB = import_vec17.Vec.sub(B, point);
      const bounds = this.getBounds(shape);
      if (points.length <= 2) {
        return import_vec17.Vec.distanceToLineSegment(A, B, shape.point) < 4;
      }
      if ((0, import_intersect7.intersectLineSegmentBounds)(ptA, ptB, bounds)) {
        for (let i = 1; i < points.length; i++) {
          if ((0, import_intersect7.intersectLineSegmentLineSegment)(points[i - 1], points[i], ptA, ptB).didIntersect) {
            return true;
          }
        }
      }
      return false;
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      if (!shape.rotation) {
        const shapeBounds = this.getBounds(shape);
        return import_core21.Utils.boundsContain(bounds, shapeBounds) || (import_core21.Utils.boundsContain(shapeBounds, bounds) || (0, import_intersect7.intersectBoundsBounds)(shapeBounds, bounds).length > 0) && (0, import_intersect7.intersectBoundsPolyline)(import_core21.Utils.translateBounds(bounds, import_vec17.Vec.neg(shape.point)), shape.points).length > 0;
      }
      const rBounds = this.getRotatedBounds(shape);
      const rotatedBounds = import_core21.Utils.getFromCache(this.rotatedCache, shape, () => {
        const c = import_core21.Utils.getBoundsCenter(import_core21.Utils.getBoundsFromPoints(shape.points));
        return shape.points.map((pt) => import_vec17.Vec.rotWith(pt, c, shape.rotation || 0));
      });
      return import_core21.Utils.boundsContain(bounds, rBounds) || (0, import_intersect7.intersectBoundsPolyline)(import_core21.Utils.translateBounds(bounds, import_vec17.Vec.neg(shape.point)), rotatedBounds).length > 0;
    });
  }
};

// src/state/shapes/ImageUtil/ImageUtil.tsx
var React24 = __toESM(require("react"));
var import_core22 = require("@tldraw/core");
var import_react2 = require("@stitches/react");
var ImageUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "image" /* Image */);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "isAspectRatioLocked", true);
    __publicField(this, "showCloneHandles", true);
    __publicField(this, "getShape", (props) => {
      return import_core22.Utils.deepMerge({
        id: "image",
        type: "image" /* Image */,
        name: "Image",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        size: [1, 1],
        rotation: 0,
        style: __spreadProps(__spreadValues({}, defaultStyle), { isFilled: true }),
        assetId: "assetId"
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(({ shape, asset = { src: "" }, isBinding, isGhost, meta, events, onShapeChange }, ref) => {
      const { size, style } = shape;
      const rImage = React24.useRef(null);
      const rWrapper = React24.useRef(null);
      React24.useLayoutEffect(() => {
        const wrapper = rWrapper.current;
        if (!wrapper)
          return;
        const [width, height] = size;
        wrapper.style.width = `${width}px`;
        wrapper.style.height = `${height}px`;
      }, [size]);
      return /* @__PURE__ */ React24.createElement(import_core22.HTMLContainer, __spreadValues({
        ref
      }, events), isBinding && /* @__PURE__ */ React24.createElement("div", {
        className: "tl-binding-indicator",
        style: {
          position: "absolute",
          top: `calc(${-this.bindingDistance}px * var(--tl-zoom))`,
          left: `calc(${-this.bindingDistance}px * var(--tl-zoom))`,
          width: `calc(100% + ${this.bindingDistance * 2}px * var(--tl-zoom))`,
          height: `calc(100% + ${this.bindingDistance * 2}px * var(--tl-zoom))`,
          backgroundColor: "var(--tl-selectFill)"
        }
      }), /* @__PURE__ */ React24.createElement(Wrapper2, {
        ref: rWrapper,
        isDarkMode: meta.isDarkMode,
        isFilled: style.isFilled,
        isGhost
      }, /* @__PURE__ */ React24.createElement(ImageElement, {
        id: shape.id + "_image",
        ref: rImage,
        src: asset.src,
        alt: "tl_image_asset",
        draggable: false
      })));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const {
        size: [width, height]
      } = shape;
      return /* @__PURE__ */ React24.createElement("rect", {
        x: 0,
        y: 0,
        rx: 2,
        ry: 2,
        width: Math.max(1, width),
        height: Math.max(1, height)
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style;
    });
    __publicField(this, "transform", transformRectangle);
    __publicField(this, "transformSingle", transformSingleRectangle);
    __publicField(this, "getSvgElement", (shape) => {
      const bounds = this.getBounds(shape);
      const elm = document.createElementNS("http://www.w3.org/2000/svg", "image");
      elm.setAttribute("width", `${bounds.width}`);
      elm.setAttribute("height", `${bounds.height}`);
      elm.setAttribute("xmlns:xlink", `http://www.w3.org/1999/xlink`);
      return elm;
    });
  }
};
var Wrapper2 = (0, import_react2.styled)("div", {
  pointerEvents: "all",
  position: "relative",
  fontFamily: "sans-serif",
  fontSize: "2em",
  height: "100%",
  width: "100%",
  borderRadius: "3px",
  perspective: "800px",
  overflow: "hidden",
  p: {
    userSelect: "none"
  },
  img: {
    userSelect: "none"
  },
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isFilled: {
      true: {},
      false: {}
    },
    isDarkMode: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      isFilled: true,
      isDarkMode: true,
      css: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)"
      }
    },
    {
      isFilled: true,
      isDarkMode: false,
      css: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)"
      }
    }
  ]
});
var ImageElement = (0, import_react2.styled)("img", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  minWidth: "100%",
  pointerEvents: "none",
  objectFit: "cover",
  userSelect: "none",
  borderRadius: 2
});

// src/state/shapes/VideoUtil/VideoUtil.tsx
var React25 = __toESM(require("react"));
var import_core23 = require("@tldraw/core");
var import_react3 = require("@stitches/react");
var VideoUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "video" /* Video */);
    __publicField(this, "canBind", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "canClone", true);
    __publicField(this, "isAspectRatioLocked", true);
    __publicField(this, "showCloneHandles", true);
    __publicField(this, "isStateful", true);
    __publicField(this, "getShape", (props) => {
      return import_core23.Utils.deepMerge({
        id: "video",
        type: "video" /* Video */,
        name: "Video",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        size: [1, 1],
        rotation: 0,
        style: defaultStyle,
        assetId: "assetId",
        isPlaying: true,
        currentTime: 0
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(({ shape, asset = { src: "" }, isBinding, isEditing, isGhost, meta, events, onShapeChange }, ref) => {
      const rVideo = React25.useRef(null);
      const rWrapper = React25.useRef(null);
      const { currentTime = 0, size, isPlaying, style } = shape;
      React25.useLayoutEffect(() => {
        const wrapper = rWrapper.current;
        if (!wrapper)
          return;
        const [width, height] = size;
        wrapper.style.width = `${width}px`;
        wrapper.style.height = `${height}px`;
      }, [size]);
      React25.useLayoutEffect(() => {
        const video = rVideo.current;
        if (!video)
          return;
        if (isPlaying)
          video.play();
        else
          video.pause();
      }, [isPlaying]);
      React25.useLayoutEffect(() => {
        const video = rVideo.current;
        if (!video)
          return;
        if (currentTime !== video.currentTime) {
          video.currentTime = currentTime;
        }
      }, [currentTime]);
      const handlePlay = React25.useCallback(() => {
        onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, isPlaying: true });
      }, []);
      const handlePause = React25.useCallback(() => {
        onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, isPlaying: false });
      }, []);
      const handleSetCurrentTime = React25.useCallback(() => {
        const video = rVideo.current;
        if (!video)
          return;
        if (!isEditing)
          return;
        onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, currentTime: video.currentTime });
      }, [isEditing]);
      return /* @__PURE__ */ React25.createElement(import_core23.HTMLContainer, __spreadValues({
        ref
      }, events), isBinding && /* @__PURE__ */ React25.createElement("div", {
        className: "tl-binding-indicator",
        style: {
          position: "absolute",
          top: -this.bindingDistance,
          left: -this.bindingDistance,
          width: `calc(100% + ${this.bindingDistance * 2}px)`,
          height: `calc(100% + ${this.bindingDistance * 2}px)`,
          backgroundColor: "var(--tl-selectFill)"
        }
      }), /* @__PURE__ */ React25.createElement(Wrapper3, {
        ref: rWrapper,
        isDarkMode: meta.isDarkMode,
        isGhost,
        isFilled: style.isFilled
      }, /* @__PURE__ */ React25.createElement(VideoElement, {
        ref: rVideo,
        id: shape.id + "_video",
        muted: true,
        loop: true,
        playsInline: true,
        disableRemotePlayback: true,
        disablePictureInPicture: true,
        controls: isEditing,
        autoPlay: isPlaying,
        onPlay: handlePlay,
        onPause: handlePause,
        onTimeUpdate: handleSetCurrentTime
      }, /* @__PURE__ */ React25.createElement("source", {
        src: asset.src
      }))));
    }));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const {
        size: [width, height]
      } = shape;
      return /* @__PURE__ */ React25.createElement("rect", {
        x: 0,
        y: 0,
        rx: 2,
        ry: 2,
        width: Math.max(1, width),
        height: Math.max(1, height)
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style || next.isPlaying !== prev.isPlaying;
    });
    __publicField(this, "getSvgElement", (shape) => {
      const bounds = this.getBounds(shape);
      const elm = document.createElementNS("http://www.w3.org/2000/svg", "image");
      elm.setAttribute("width", `${bounds.width}`);
      elm.setAttribute("height", `${bounds.height}`);
      elm.setAttribute("xmlns:xlink", `http://www.w3.org/1999/xlink`);
      return elm;
    });
    __publicField(this, "transform", transformRectangle);
    __publicField(this, "transformSingle", transformSingleRectangle);
  }
};
var Wrapper3 = (0, import_react3.styled)("div", {
  pointerEvents: "all",
  position: "relative",
  fontFamily: "sans-serif",
  fontSize: "2em",
  height: "100%",
  width: "100%",
  borderRadius: "3px",
  perspective: "800px",
  overflow: "hidden",
  p: {
    userSelect: "none"
  },
  img: {
    userSelect: "none"
  },
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isFilled: {
      true: {},
      false: {}
    },
    isDarkMode: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      isFilled: true,
      isDarkMode: true,
      css: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)"
      }
    },
    {
      isFilled: true,
      isDarkMode: false,
      css: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)"
      }
    }
  ]
});
var VideoElement = (0, import_react3.styled)("video", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  minWidth: "100%",
  pointerEvents: "none",
  objectFit: "cover",
  userSelect: "none",
  borderRadius: 2
});

// src/state/shapes/index.ts
var Rectangle = new RectangleUtil();
var Triangle = new TriangleUtil();
var Ellipse = new EllipseUtil();
var Draw = new DrawUtil();
var Arrow = new ArrowUtil();
var Text = new TextUtil();
var Group = new GroupUtil();
var Sticky = new StickyUtil();
var Image2 = new ImageUtil();
var Video = new VideoUtil();
var shapeUtils = {
  ["rectangle" /* Rectangle */]: Rectangle,
  ["triangle" /* Triangle */]: Triangle,
  ["ellipse" /* Ellipse */]: Ellipse,
  ["draw" /* Draw */]: Draw,
  ["arrow" /* Arrow */]: Arrow,
  ["text" /* Text */]: Text,
  ["group" /* Group */]: Group,
  ["sticky" /* Sticky */]: Sticky,
  ["image" /* Image */]: Image2,
  ["video" /* Video */]: Video
};
var getShapeUtil = (shape) => {
  if (typeof shape === "string")
    return shapeUtils[shape];
  return shapeUtils[shape.type];
};

// src/state/StateManager/copy.ts
function deepCopy(target) {
  if (target === null) {
    return target;
  }
  if (target instanceof Date) {
    return new Date(target.getTime());
  }
  if (typeof target === "object") {
    if (typeof target[Symbol.iterator] === "function") {
      const cp = [];
      if (target.length > 0) {
        for (const arrayMember of target) {
          cp.push(deepCopy(arrayMember));
        }
      }
      return cp;
    } else {
      const targetKeys = Object.keys(target);
      const cp = {};
      if (targetKeys.length > 0) {
        for (const key of targetKeys) {
          cp[key] = deepCopy(target[key]);
        }
      }
      return cp;
    }
  }
  return target;
}

// src/state/TLDR.ts
var import_intersect8 = require("@tldraw/intersect");
var isDev = false;
var _TLDR = class {
  static getShapeUtil(shape) {
    return getShapeUtil(shape);
  }
  static getSelectedShapes(data, pageId) {
    const page = _TLDR.getPage(data, pageId);
    const selectedIds = _TLDR.getSelectedIds(data, pageId);
    return selectedIds.map((id) => page.shapes[id]);
  }
  static screenToWorld(data, point) {
    const camera = _TLDR.getPageState(data, data.appState.currentPageId).camera;
    return import_vec18.Vec.sub(import_vec18.Vec.div(point, camera.zoom), camera.point);
  }
  static getCameraZoom(zoom) {
    return import_core24.Utils.clamp(zoom, 0.1, 5);
  }
  static getPage(data, pageId) {
    return data.document.pages[pageId];
  }
  static getPageState(data, pageId) {
    return data.document.pageStates[pageId];
  }
  static getSelectedIds(data, pageId) {
    return _TLDR.getPageState(data, pageId).selectedIds;
  }
  static getShapes(data, pageId) {
    return Object.values(_TLDR.getPage(data, pageId).shapes);
  }
  static getCamera(data, pageId) {
    return _TLDR.getPageState(data, pageId).camera;
  }
  static getShape(data, shapeId, pageId) {
    return _TLDR.getPage(data, pageId).shapes[shapeId];
  }
  static getCenter(shape) {
    return _TLDR.getShapeUtil(shape).getCenter(shape);
  }
  static getBounds(shape) {
    return _TLDR.getShapeUtil(shape).getBounds(shape);
  }
  static getRotatedBounds(shape) {
    return _TLDR.getShapeUtil(shape).getRotatedBounds(shape);
  }
  static getSelectedBounds(data) {
    return import_core24.Utils.getCommonBounds(_TLDR.getSelectedShapes(data, data.appState.currentPageId).map((shape) => _TLDR.getShapeUtil(shape).getBounds(shape)));
  }
  static getParentId(data, id, pageId) {
    return _TLDR.getShape(data, id, pageId).parentId;
  }
  static getDocumentBranch(data, id, pageId) {
    const shape = _TLDR.getShape(data, id, pageId);
    if (shape.children === void 0)
      return [id];
    return [
      id,
      ...shape.children.flatMap((childId) => _TLDR.getDocumentBranch(data, childId, pageId))
    ];
  }
  static getSelectedBranchSnapshot(data, pageId, fn) {
    const page = _TLDR.getPage(data, pageId);
    const copies = _TLDR.getSelectedIds(data, pageId).flatMap((id) => _TLDR.getDocumentBranch(data, id, pageId).map((id2) => page.shapes[id2])).filter((shape) => !shape.isLocked).map(import_core24.Utils.deepClone);
    if (fn !== void 0) {
      return copies.map((shape) => __spreadValues({ id: shape.id }, fn(shape)));
    }
    return copies;
  }
  static getSelectedShapeSnapshot(data, pageId, fn) {
    const copies = _TLDR.getSelectedShapes(data, pageId).filter((shape) => !shape.isLocked).map(import_core24.Utils.deepClone);
    if (fn !== void 0) {
      return copies.map((shape) => __spreadValues({ id: shape.id }, fn(shape)));
    }
    return copies;
  }
  static getAllEffectedShapeIds(data, ids, pageId) {
    const page = _TLDR.getPage(data, pageId);
    const visited = new Set(ids);
    ids.forEach((id) => {
      const shape = page.shapes[id];
      function collectDescendants(shape2) {
        if (shape2.children === void 0)
          return;
        shape2.children.filter((childId) => !visited.has(childId)).forEach((childId) => {
          visited.add(childId);
          collectDescendants(page.shapes[childId]);
        });
      }
      collectDescendants(shape);
      function collectAscendants(shape2) {
        const parentId = shape2.parentId;
        if (parentId === page.id)
          return;
        if (visited.has(parentId))
          return;
        visited.add(parentId);
        collectAscendants(page.shapes[parentId]);
      }
      collectAscendants(shape);
      visited.forEach((id2) => {
        Object.values(page.bindings).filter((binding) => binding.fromId === id2 || binding.toId === id2).forEach((binding) => visited.add(binding.fromId === id2 ? binding.toId : binding.fromId));
      });
    });
    return Array.from(visited.values());
  }
  static getLinkedShapeIds(data, pageId, direction, includeArrows = true) {
    const selectedIds = _TLDR.getSelectedIds(data, pageId);
    const page = _TLDR.getPage(data, pageId);
    const linkedIds = new Set(selectedIds);
    const checkedIds = /* @__PURE__ */ new Set();
    const idsToCheck = [...selectedIds];
    const arrows = new Set(Object.values(page.shapes).filter((shape) => {
      var _a;
      return shape.type === "arrow" /* Arrow */ && (shape.handles.start.bindingId || ((_a = shape.handles) == null ? void 0 : _a.end.bindingId));
    }));
    while (idsToCheck.length) {
      const id = idsToCheck.pop();
      if (!(id && arrows.size))
        break;
      if (checkedIds.has(id))
        continue;
      checkedIds.add(id);
      arrows.forEach((arrow) => {
        var _a, _b;
        const {
          handles: {
            start: { bindingId: startBindingId },
            end: { bindingId: endBindingId }
          }
        } = arrow;
        const startBinding = startBindingId ? page.bindings[startBindingId] : null;
        const endBinding = endBindingId ? page.bindings[endBindingId] : null;
        let hit = false;
        if (startBinding && startBinding.toId === id) {
          if (direction === "center") {
            hit = true;
          } else if (((_a = arrow.decorations) == null ? void 0 : _a.start) && endBinding) {
            hit = direction === "left";
          } else {
            hit = direction === "right";
          }
          if (hit) {
            if (includeArrows)
              linkedIds.add(arrow.id);
            linkedIds.add(id);
            if (endBinding) {
              linkedIds.add(endBinding.toId);
              idsToCheck.push(endBinding.toId);
            }
          }
        } else if (endBinding && endBinding.toId === id) {
          if (direction === "center") {
            hit = true;
          } else if (((_b = arrow.decorations) == null ? void 0 : _b.end) && startBinding) {
            hit = direction === "left";
          } else {
            hit = direction === "right";
          }
          if (hit) {
            if (includeArrows)
              linkedIds.add(arrow.id);
            linkedIds.add(id);
            if (startBinding) {
              linkedIds.add(startBinding.toId);
              idsToCheck.push(startBinding.toId);
            }
          }
        }
        if ((!startBinding || linkedIds.has(startBinding.toId)) && (!endBinding || linkedIds.has(endBinding.toId))) {
          arrows.delete(arrow);
        }
      });
    }
    return Array.from(linkedIds.values());
  }
  static getChildIndexAbove(data, id, pageId) {
    const page = data.document.pages[pageId];
    const shape = page.shapes[id];
    let siblings;
    if (shape.parentId === page.id) {
      siblings = Object.values(page.shapes).filter((shape2) => shape2.parentId === page.id).sort((a, b) => a.childIndex - b.childIndex);
    } else {
      const parent = page.shapes[shape.parentId];
      if (!parent.children)
        throw Error("No children in parent!");
      siblings = parent.children.map((childId) => page.shapes[childId]).sort((a, b) => a.childIndex - b.childIndex);
    }
    const index = siblings.indexOf(shape);
    const nextSibling = siblings[index + 1];
    if (!nextSibling)
      return shape.childIndex + 1;
    return nextSibling.childIndex;
  }
  static getBeforeShape(shape, change) {
    return Object.fromEntries(Object.keys(change).map((k) => [k, shape[k]]));
  }
  static mutateShapes(data, ids, fn, pageId) {
    const beforeShapes = {};
    const afterShapes = {};
    ids.forEach((id, i) => {
      const shape = _TLDR.getShape(data, id, pageId);
      if (shape.isLocked)
        return;
      const change = fn(shape, i);
      if (change) {
        beforeShapes[id] = _TLDR.getBeforeShape(shape, change);
        afterShapes[id] = change;
      }
    });
    const dataWithMutations = import_core24.Utils.deepMerge(data, {
      document: {
        pages: {
          [data.appState.currentPageId]: {
            shapes: afterShapes
          }
        }
      }
    });
    return {
      before: beforeShapes,
      after: afterShapes,
      data: dataWithMutations
    };
  }
  static createShapes(data, shapes, pageId) {
    const before = {
      document: {
        pages: {
          [pageId]: {
            shapes: __spreadValues({}, Object.fromEntries(shapes.flatMap((shape) => {
              const results = [[shape.id, void 0]];
              if (shape.parentId !== pageId) {
                const parent = _TLDR.getShape(data, shape.parentId, pageId);
                if (!parent.children)
                  throw Error("No children in parent!");
                results.push([parent.id, { children: parent.children }]);
              }
              return results;
            })))
          }
        }
      }
    };
    const after = {
      document: {
        pages: {
          [pageId]: {
            shapes: {
              shapes: __spreadValues({}, Object.fromEntries(shapes.flatMap((shape) => {
                const results = [[shape.id, shape]];
                if (shape.parentId !== pageId) {
                  const parent = _TLDR.getShape(data, shape.parentId, pageId);
                  if (!parent.children)
                    throw Error("No children in parent!");
                  results.push([parent.id, { children: [...parent.children, shape.id] }]);
                }
                return results;
              })))
            }
          }
        }
      }
    };
    return {
      before,
      after
    };
  }
  static deleteShapes(data, shapes, pageId) {
    pageId = pageId ? pageId : data.appState.currentPageId;
    const page = _TLDR.getPage(data, pageId);
    const shapeIds = typeof shapes[0] === "string" ? shapes : shapes.map((shape) => shape.id);
    const before = {
      document: {
        pages: {
          [pageId]: {
            shapes: __spreadValues({}, Object.fromEntries(shapeIds.flatMap((id) => {
              const shape = page.shapes[id];
              const results = [[shape.id, shape]];
              if (shape.parentId !== pageId) {
                const parent = page.shapes[shape.parentId];
                if (!parent.children)
                  throw Error("No children in parent!");
                results.push([parent.id, { children: parent.children }]);
              }
              return results;
            }))),
            bindings: __spreadValues({}, Object.fromEntries(Object.values(page.bindings).filter((binding) => {
              return shapeIds.includes(binding.fromId) || shapeIds.includes(binding.toId);
            }).map((binding) => {
              return [binding.id, binding];
            })))
          }
        }
      }
    };
    const after = {
      document: {
        pages: {
          [pageId]: {
            shapes: __spreadValues({}, Object.fromEntries(shapeIds.flatMap((id) => {
              const shape = page.shapes[id];
              const results = [[shape.id, void 0]];
              if (shape.parentId !== page.id) {
                const parent = page.shapes[shape.parentId];
                if (!parent.children)
                  throw Error("No children in parent!");
                results.push([
                  parent.id,
                  { children: parent.children.filter((id2) => id2 !== shape.id) }
                ]);
              }
              return results;
            })))
          }
        }
      }
    };
    return {
      before,
      after
    };
  }
  static onSessionComplete(shape) {
    var _a, _b;
    const delta = (_b = (_a = _TLDR.getShapeUtil(shape)).onSessionComplete) == null ? void 0 : _b.call(_a, shape);
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static onChildrenChange(data, shape, pageId) {
    var _a, _b;
    if (!shape.children)
      return;
    const delta = (_b = (_a = _TLDR.getShapeUtil(shape)).onChildrenChange) == null ? void 0 : _b.call(_a, shape, shape.children.map((id) => _TLDR.getShape(data, id, pageId)));
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static updateArrowBindings(page, arrowShape) {
    var _a, _b, _c, _d, _e, _f;
    const result = {
      start: deepCopy(arrowShape.handles.start),
      end: deepCopy(arrowShape.handles.end)
    };
    let start = {
      isBound: false,
      handle: arrowShape.handles.start,
      point: import_vec18.Vec.add(arrowShape.handles.start.point, arrowShape.point)
    };
    let end = {
      isBound: false,
      handle: arrowShape.handles.end,
      point: import_vec18.Vec.add(arrowShape.handles.end.point, arrowShape.point)
    };
    if (arrowShape.handles.start.bindingId) {
      const hasDecoration = ((_a = arrowShape.decorations) == null ? void 0 : _a.start) !== void 0;
      const handle = arrowShape.handles.start;
      const binding = page.bindings[arrowShape.handles.start.bindingId];
      if (!binding)
        throw Error("Could not find a binding to match the start handle's bindingId");
      const target = page.shapes[binding.toId];
      const util = _TLDR.getShapeUtil(target);
      const bounds = util.getBounds(target);
      const expandedBounds = util.getExpandedBounds(target);
      const intersectBounds = hasDecoration ? import_core24.Utils.expandBounds(bounds, binding.distance) : bounds;
      const { minX, minY, width, height } = expandedBounds;
      const anchorPoint = import_vec18.Vec.add([minX, minY], import_vec18.Vec.mulV([width, height], import_vec18.Vec.rotWith(binding.point, [0.5, 0.5], target.rotation || 0)));
      start = {
        isBound: true,
        hasDecoration,
        binding,
        handle,
        point: anchorPoint,
        util,
        target,
        bounds,
        expandedBounds,
        intersectBounds,
        center: util.getCenter(target)
      };
    }
    if (arrowShape.handles.end.bindingId) {
      const hasDecoration = ((_b = arrowShape.decorations) == null ? void 0 : _b.end) !== void 0;
      const handle = arrowShape.handles.end;
      const binding = page.bindings[arrowShape.handles.end.bindingId];
      if (!binding)
        throw Error("Could not find a binding to match the end handle's bindingId");
      const target = page.shapes[binding.toId];
      const util = _TLDR.getShapeUtil(target);
      const bounds = util.getBounds(target);
      const expandedBounds = util.getExpandedBounds(target);
      const intersectBounds = hasDecoration ? import_core24.Utils.expandBounds(bounds, binding.distance) : bounds;
      const { minX, minY, width, height } = expandedBounds;
      const anchorPoint = import_vec18.Vec.add([minX, minY], import_vec18.Vec.mulV([width, height], import_vec18.Vec.rotWith(binding.point, [0.5, 0.5], target.rotation || 0)));
      end = {
        isBound: true,
        hasDecoration,
        binding,
        handle,
        point: anchorPoint,
        util,
        target,
        bounds,
        expandedBounds,
        intersectBounds,
        center: util.getCenter(target)
      };
    }
    for (const ID of ["end", "start"]) {
      const A = ID === "start" ? start : end;
      const B = ID === "start" ? end : start;
      if (A.isBound) {
        if (!A.binding.distance) {
          result[ID].point = import_vec18.Vec.sub(A.point, arrowShape.point);
        } else {
          const direction = import_vec18.Vec.uni(import_vec18.Vec.sub(A.point, B.point));
          switch (A.target.type) {
            case "ellipse" /* Ellipse */: {
              const hits = (0, import_intersect8.intersectRayEllipse)(B.point, direction, A.center, A.target.radius[0] + (A.hasDecoration ? A.binding.distance : 0), A.target.radius[1] + (A.hasDecoration ? A.binding.distance : 0), A.target.rotation || 0).points.sort((a, b) => import_vec18.Vec.dist(a, B.point) - import_vec18.Vec.dist(b, B.point));
              if (hits[0] !== void 0) {
                result[ID].point = import_vec18.Vec.toFixed(import_vec18.Vec.sub(hits[0], arrowShape.point));
              }
              break;
            }
            case "triangle" /* Triangle */: {
              const targetPoint = A.target.point;
              const points = getTrianglePoints(A.target.size, A.hasDecoration ? BINDING_DISTANCE : 0, A.target.rotation).map((pt) => import_vec18.Vec.add(pt, targetPoint));
              const hits = import_core24.Utils.pointsToLineSegments(points, true).map(([p0, p1]) => (0, import_intersect8.intersectRayLineSegment)(B.point, direction, p0, p1)).filter((intersection) => intersection.didIntersect).flatMap((intersection) => intersection.points).sort((a, b) => import_vec18.Vec.dist(a, B.point) - import_vec18.Vec.dist(b, B.point));
              if (hits[0] !== void 0) {
                result[ID].point = import_vec18.Vec.toFixed(import_vec18.Vec.sub(hits[0], arrowShape.point));
              }
              break;
            }
            default: {
              const hits = (0, import_intersect8.intersectRayBounds)(B.point, direction, A.intersectBounds, A.target.rotation).filter((int) => int.didIntersect).map((int) => int.points[0]).sort((a, b) => import_vec18.Vec.dist(a, B.point) - import_vec18.Vec.dist(b, B.point));
              if (!hits[0])
                continue;
              let bHit = void 0;
              if (B.isBound) {
                const bHits = (0, import_intersect8.intersectRayBounds)(B.point, direction, B.intersectBounds, B.target.rotation).filter((int) => int.didIntersect).map((int) => int.points[0]).sort((a, b) => import_vec18.Vec.dist(a, B.point) - import_vec18.Vec.dist(b, B.point));
                bHit = bHits[0];
              }
              if (B.isBound && (hits.length < 2 || bHit && hits[0] && Math.ceil(import_vec18.Vec.dist(hits[0], bHit)) < BINDING_DISTANCE * 2.5 || import_core24.Utils.boundsContain(A.expandedBounds, B.expandedBounds) || import_core24.Utils.boundsCollide(A.expandedBounds, B.expandedBounds))) {
                const shortArrowDirection = import_vec18.Vec.uni(import_vec18.Vec.sub(B.point, A.point));
                const shortArrowHits = (0, import_intersect8.intersectRayBounds)(A.point, shortArrowDirection, A.bounds, A.target.rotation).filter((int) => int.didIntersect).map((int) => int.points[0]);
                if (!shortArrowHits[0])
                  continue;
                result[ID].point = import_vec18.Vec.toFixed(import_vec18.Vec.sub(shortArrowHits[0], arrowShape.point));
                result[ID === "start" ? "end" : "start"].point = import_vec18.Vec.toFixed(import_vec18.Vec.add(import_vec18.Vec.sub(shortArrowHits[0], arrowShape.point), import_vec18.Vec.mul(shortArrowDirection, Math.min(import_vec18.Vec.dist(shortArrowHits[0], B.point), BINDING_DISTANCE * 2.5 * (import_core24.Utils.boundsContain(B.bounds, A.intersectBounds) ? -1 : 1)))));
              } else if (!B.isBound && (hits[0] && import_vec18.Vec.dist(hits[0], B.point) < BINDING_DISTANCE * 2.5 || import_core24.Utils.pointInBounds(B.point, A.intersectBounds))) {
                const shortArrowDirection = import_vec18.Vec.uni(import_vec18.Vec.sub(A.center, B.point));
                return (_d = (_c = _TLDR.getShapeUtil(arrowShape)).onHandleChange) == null ? void 0 : _d.call(_c, arrowShape, {
                  [ID]: __spreadProps(__spreadValues({}, arrowShape.handles[ID]), {
                    point: import_vec18.Vec.toFixed(import_vec18.Vec.add(import_vec18.Vec.sub(B.point, arrowShape.point), import_vec18.Vec.mul(shortArrowDirection, BINDING_DISTANCE * 2.5)))
                  })
                });
              } else if (hits[0]) {
                result[ID].point = import_vec18.Vec.toFixed(import_vec18.Vec.sub(hits[0], arrowShape.point));
              }
            }
          }
        }
      }
    }
    return (_f = (_e = _TLDR.getShapeUtil(arrowShape)).onHandleChange) == null ? void 0 : _f.call(_e, arrowShape, result);
  }
  static transform(shape, bounds, info) {
    const delta = _TLDR.getShapeUtil(shape).transform(shape, bounds, info);
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static transformSingle(shape, bounds, info) {
    const delta = _TLDR.getShapeUtil(shape).transformSingle(shape, bounds, info);
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static getRotatedShapeMutation(shape, center, origin, delta) {
    var _a, _b;
    const relativeCenter = import_vec18.Vec.sub(center, shape.point);
    const rotatedCenter = import_vec18.Vec.rotWith(center, origin, delta);
    const nextPoint = import_vec18.Vec.toFixed(import_vec18.Vec.sub(rotatedCenter, relativeCenter));
    if (shape.handles !== void 0) {
      const change = (_b = (_a = this.getShapeUtil(shape)).onHandleChange) == null ? void 0 : _b.call(_a, __spreadProps(__spreadValues({}, shape), { point: nextPoint }), Object.fromEntries(Object.entries(shape.handles).map(([handleId, handle]) => {
        const point = import_vec18.Vec.toFixed(import_vec18.Vec.rotWith(handle.point, relativeCenter, delta));
        return [handleId, __spreadProps(__spreadValues({}, handle), { point })];
      })));
      return change;
    }
    const nextRotation = import_core24.Utils.clampRadians((shape.rotation || 0) + delta);
    return {
      point: nextPoint,
      rotation: nextRotation
    };
  }
  static updateParents(data, pageId, changedShapeIds) {
    const page = _TLDR.getPage(data, pageId);
    if (changedShapeIds.length === 0)
      return;
    const { shapes } = _TLDR.getPage(data, pageId);
    const parentToUpdateIds = Array.from(new Set(changedShapeIds.map((id) => shapes[id].parentId).values())).filter((id) => id !== page.id);
    for (const parentId of parentToUpdateIds) {
      const parent = shapes[parentId];
      if (!parent.children) {
        throw Error("A shape is parented to a shape without a children array.");
      }
      _TLDR.onChildrenChange(data, parent, pageId);
    }
    _TLDR.updateParents(data, pageId, parentToUpdateIds);
  }
  static getBinding(data, id, pageId) {
    return _TLDR.getPage(data, pageId).bindings[id];
  }
  static getBindings(data, pageId) {
    const page = _TLDR.getPage(data, pageId);
    return Object.values(page.bindings);
  }
  static getBindableShapeIds(data) {
    return _TLDR.getShapes(data, data.appState.currentPageId).filter((shape) => _TLDR.getShapeUtil(shape).canBind).sort((a, b) => b.childIndex - a.childIndex).map((shape) => shape.id);
  }
  static getBindingsWithShapeIds(data, ids, pageId) {
    return Array.from(new Set(_TLDR.getBindings(data, pageId).filter((binding) => {
      return ids.includes(binding.toId) || ids.includes(binding.fromId);
    })).values());
  }
  static getRelatedBindings(data, ids, pageId) {
    const changedShapeIds = new Set(ids);
    const page = _TLDR.getPage(data, pageId);
    const bindingsArr = Object.values(page.bindings);
    const bindingsToUpdate = new Set(bindingsArr.filter((binding) => changedShapeIds.has(binding.toId) || changedShapeIds.has(binding.fromId)));
    let prevSize2 = bindingsToUpdate.size;
    let delta = -1;
    while (delta !== 0) {
      bindingsToUpdate.forEach((binding) => {
        const fromId = binding.fromId;
        for (const otherBinding of bindingsArr) {
          if (otherBinding.fromId === fromId) {
            bindingsToUpdate.add(otherBinding);
          }
          if (otherBinding.toId === fromId) {
            bindingsToUpdate.add(otherBinding);
          }
        }
      });
      delta = bindingsToUpdate.size - prevSize2;
      prevSize2 = bindingsToUpdate.size;
    }
    return Array.from(bindingsToUpdate.values());
  }
  static normalizeText(text) {
    return text.replace(_TLDR.fixNewLines, "\n").split("\n").map((x) => x || " ").join("\n");
  }
  static assertShapeHasProperty(shape, prop) {
    if (shape[prop] === void 0) {
      throw new Error();
    }
  }
  static warn(e) {
    if (isDev) {
      console.warn(e);
    }
  }
  static error(e) {
    if (isDev) {
      console.error(e);
    }
  }
};
var TLDR = _TLDR;
__publicField(TLDR, "copyStringToClipboard", (string) => {
  try {
    navigator.clipboard.writeText(string);
  } catch (e) {
    const textarea = document.createElement("textarea");
    textarea.setAttribute("position", "fixed");
    textarea.setAttribute("top", "0");
    textarea.setAttribute("readonly", "true");
    textarea.setAttribute("contenteditable", "true");
    textarea.style.position = "fixed";
    textarea.value = string;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      const range = document.createRange();
      range.selectNodeContents(textarea);
      const sel = window.getSelection();
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
        textarea.setSelectionRange(0, textarea.value.length);
      }
    } catch (err) {
      null;
    } finally {
      document.body.removeChild(textarea);
    }
  }
});
__publicField(TLDR, "flattenShape", (data, shape) => {
  var _a;
  return [
    shape,
    ...((_a = shape.children) != null ? _a : []).map((childId) => _TLDR.getShape(data, childId, data.appState.currentPageId)).sort((a, b) => a.childIndex - b.childIndex).flatMap((shape2) => _TLDR.flattenShape(data, shape2))
  ];
});
__publicField(TLDR, "flattenPage", (data, pageId) => {
  return Object.values(data.document.pages[pageId].shapes).sort((a, b) => a.childIndex - b.childIndex).reduce((acc, shape) => [...acc, ..._TLDR.flattenShape(data, shape)], []);
});
__publicField(TLDR, "getTopChildIndex", (data, pageId) => {
  const shapes = _TLDR.getShapes(data, pageId);
  return shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === pageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
});
__publicField(TLDR, "fixNewLines", /\r?\n|\r/g);

// src/state/commands/alignShapes/alignShapes.ts
var import_vec19 = require("@tldraw/vec");
var import_core25 = require("@tldraw/core");
function alignShapes(app, ids, type) {
  const { currentPageId } = app;
  const initialShapes = ids.map((id) => app.getShape(id));
  const boundsForShapes = initialShapes.map((shape) => {
    return {
      id: shape.id,
      point: [...shape.point],
      bounds: TLDR.getBounds(shape)
    };
  });
  const commonBounds = import_core25.Utils.getCommonBounds(boundsForShapes.map(({ bounds }) => bounds));
  const midX = commonBounds.minX + commonBounds.width / 2;
  const midY = commonBounds.minY + commonBounds.height / 2;
  const deltaMap = Object.fromEntries(boundsForShapes.map(({ id, point, bounds }) => {
    return [
      id,
      {
        prev: point,
        next: {
          ["centerVertical" /* CenterVertical */]: [point[0], midY - bounds.height / 2],
          ["centerHorizontal" /* CenterHorizontal */]: [midX - bounds.width / 2, point[1]],
          ["top" /* Top */]: [point[0], commonBounds.minY],
          ["bottom" /* Bottom */]: [point[0], commonBounds.maxY - bounds.height],
          ["left" /* Left */]: [commonBounds.minX, point[1]],
          ["right" /* Right */]: [commonBounds.maxX - bounds.width, point[1]]
        }[type]
      }
    ];
  }));
  const { before, after } = TLDR.mutateShapes(app.state, ids, (shape) => {
    if (!deltaMap[shape.id])
      return shape;
    return { point: deltaMap[shape.id].next };
  }, currentPageId);
  initialShapes.forEach((shape) => {
    if (shape.type === "group" /* Group */) {
      const delta = import_vec19.Vec.sub(after[shape.id].point, before[shape.id].point);
      shape.children.forEach((id) => {
        const child = app.getShape(id);
        before[child.id] = { point: child.point };
        after[child.id] = { point: import_vec19.Vec.add(child.point, delta) };
      });
      delete before[shape.id];
      delete after[shape.id];
    }
  });
  return {
    id: "align",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: before
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: after
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/changePage/changePage.ts
function changePage(app, pageId) {
  return {
    id: "change_page",
    before: {
      appState: {
        currentPageId: app.currentPageId
      }
    },
    after: {
      appState: {
        currentPageId: pageId
      }
    }
  };
}

// src/state/commands/createPage/createPage.ts
var import_core26 = require("@tldraw/core");
function createPage(app, center, pageId = import_core26.Utils.uniqueId()) {
  const { currentPageId } = app;
  const topPage = Object.values(app.state.document.pages).sort((a, b) => (b.childIndex || 0) - (a.childIndex || 0))[0];
  const nextChildIndex = (topPage == null ? void 0 : topPage.childIndex) ? (topPage == null ? void 0 : topPage.childIndex) + 1 : 1;
  const nextName = `New Page`;
  const page = {
    id: pageId,
    name: nextName,
    childIndex: nextChildIndex,
    shapes: {},
    bindings: {}
  };
  const pageState = {
    id: pageId,
    selectedIds: [],
    camera: { point: center, zoom: 1 },
    editingId: void 0,
    bindingId: void 0,
    hoveredId: void 0,
    pointedId: void 0
  };
  return {
    id: "create_page",
    before: {
      appState: {
        currentPageId
      },
      document: {
        pages: {
          [pageId]: void 0
        },
        pageStates: {
          [pageId]: void 0
        }
      }
    },
    after: {
      appState: {
        currentPageId: page.id
      },
      document: {
        pages: {
          [pageId]: page
        },
        pageStates: {
          [pageId]: pageState
        }
      }
    }
  };
}

// src/state/commands/createShapes/createShapes.ts
function createShapes(app, shapes, bindings = []) {
  const { currentPageId } = app;
  const beforeShapes = {};
  const afterShapes = {};
  shapes.forEach((shape) => {
    beforeShapes[shape.id] = void 0;
    afterShapes[shape.id] = shape;
  });
  const beforeBindings = {};
  const afterBindings = {};
  bindings.forEach((binding) => {
    beforeBindings[binding.id] = void 0;
    afterBindings[binding.id] = binding;
  });
  return {
    id: "create",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: beforeShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: [...app.selectedIds]
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: afterShapes,
            bindings: afterBindings
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: shapes.map((shape) => shape.id)
          }
        }
      }
    }
  };
}

// src/state/commands/deletePage/deletePage.ts
function deletePage(app, pageId) {
  const {
    currentPageId,
    document: { pages, pageStates }
  } = app;
  const pagesArr = Object.values(pages).sort((a, b) => (a.childIndex || 0) - (b.childIndex || 0));
  const currentIndex = pagesArr.findIndex((page) => page.id === pageId);
  let nextCurrentPageId;
  if (pageId === currentPageId) {
    if (currentIndex === pagesArr.length - 1) {
      nextCurrentPageId = pagesArr[pagesArr.length - 2].id;
    } else {
      nextCurrentPageId = pagesArr[currentIndex + 1].id;
    }
  } else {
    nextCurrentPageId = currentPageId;
  }
  return {
    id: "delete_page",
    before: {
      appState: {
        currentPageId: pageId
      },
      document: {
        pages: {
          [pageId]: __spreadValues({}, pages[pageId])
        },
        pageStates: {
          [pageId]: __spreadValues({}, pageStates[pageId])
        }
      }
    },
    after: {
      appState: {
        currentPageId: nextCurrentPageId
      },
      document: {
        pages: {
          [pageId]: void 0
        },
        pageStates: {
          [pageId]: void 0
        }
      }
    }
  };
}

// src/state/commands/shared/removeShapesFromPage.ts
function removeShapesFromPage(data, ids, pageId) {
  const before = {
    shapes: {},
    bindings: {}
  };
  const after = {
    shapes: {},
    bindings: {}
  };
  const parentsToUpdate = [];
  const deletedIds = /* @__PURE__ */ new Set();
  const assetsToRemove = /* @__PURE__ */ new Set();
  ids.filter((id) => !TLDR.getShape(data, id, pageId).isLocked).forEach((id) => {
    deletedIds.add(id);
    const shape = TLDR.getShape(data, id, pageId);
    before.shapes[id] = shape;
    after.shapes[id] = void 0;
    if (shape.children !== void 0) {
      shape.children.forEach((childId) => {
        deletedIds.add(childId);
        const child = TLDR.getShape(data, childId, pageId);
        before.shapes[childId] = child;
        after.shapes[childId] = void 0;
      });
    }
    if (shape.parentId !== pageId) {
      parentsToUpdate.push(TLDR.getShape(data, shape.parentId, pageId));
    }
    if (shape.assetId) {
      assetsToRemove.add(shape.assetId);
    }
  });
  parentsToUpdate.forEach((parent) => {
    var _a;
    if (ids.includes(parent.id))
      return;
    deletedIds.add(parent.id);
    before.shapes[parent.id] = { children: parent.children };
    after.shapes[parent.id] = { children: parent.children.filter((id) => !ids.includes(id)) };
    if (((_a = after.shapes[parent.id]) == null ? void 0 : _a.children.length) === 0) {
      after.shapes[parent.id] = void 0;
      before.shapes[parent.id] = TLDR.getShape(data, parent.id, pageId);
    }
  });
  const page = TLDR.getPage(data, pageId);
  Object.values(page.bindings).filter((binding) => deletedIds.has(binding.fromId) || deletedIds.has(binding.toId)).forEach((binding) => {
    for (const id of [binding.toId, binding.fromId]) {
      if (after.shapes[id] === void 0) {
        before.bindings[binding.id] = binding;
        after.bindings[binding.id] = void 0;
        const shape = page.shapes[id];
        if (shape && shape.handles) {
          Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
            var _a, _b, _c, _d, _e, _f;
            before.shapes[id] = __spreadProps(__spreadValues({}, before.shapes[id]), {
              handles: __spreadProps(__spreadValues({}, (_a = before.shapes[id]) == null ? void 0 : _a.handles), {
                [handle.id]: __spreadProps(__spreadValues({}, (_c = (_b = before.shapes[id]) == null ? void 0 : _b.handles) == null ? void 0 : _c[handle.id]), {
                  bindingId: binding.id
                })
              })
            });
            if (!deletedIds.has(id)) {
              after.shapes[id] = __spreadProps(__spreadValues({}, after.shapes[id]), {
                handles: __spreadProps(__spreadValues({}, (_d = after.shapes[id]) == null ? void 0 : _d.handles), {
                  [handle.id]: __spreadProps(__spreadValues({}, (_f = (_e = after.shapes[id]) == null ? void 0 : _e.handles) == null ? void 0 : _f[handle.id]), {
                    bindingId: void 0
                  })
                })
              });
            }
          });
        }
      }
    }
  });
  Object.values(data.document.pages).flatMap((page2) => Object.values(page2.shapes)).forEach((shape) => {
    if ("assetId" in shape && shape.assetId && !deletedIds.has(shape.id)) {
      assetsToRemove.delete(shape.assetId);
    }
  });
  return { before, after, assetsToRemove: Array.from(assetsToRemove) };
}

// src/state/commands/deleteShapes/deleteShapes.ts
var removeAssetsFromDocument = (assets, idsToRemove) => {
  const afterAssets = __spreadValues({}, assets);
  idsToRemove.forEach((id) => afterAssets[id] = void 0);
  return afterAssets;
};
function deleteShapes(app, ids, pageId = app.currentPageId) {
  const {
    pageState,
    selectedIds,
    document: { assets: beforeAssets }
  } = app;
  const { before, after, assetsToRemove } = removeShapesFromPage(app.state, ids, pageId);
  const afterAssets = removeAssetsFromDocument(beforeAssets, assetsToRemove);
  return {
    id: "delete",
    before: {
      document: {
        assets: beforeAssets,
        pages: {
          [pageId]: before
        },
        pageStates: {
          [pageId]: { selectedIds: [...app.selectedIds] }
        }
      }
    },
    after: {
      document: {
        assets: afterAssets,
        pages: {
          [pageId]: after
        },
        pageStates: {
          [pageId]: {
            selectedIds: selectedIds.filter((id) => !ids.includes(id)),
            hoveredId: pageState.hoveredId && ids.includes(pageState.hoveredId) ? void 0 : pageState.hoveredId
          }
        }
      }
    }
  };
}

// src/state/commands/distributeShapes/distributeShapes.ts
var import_core27 = require("@tldraw/core");
var import_vec20 = __toESM(require("@tldraw/vec"));
function distributeShapes(app, ids, type) {
  const { currentPageId } = app;
  const initialShapes = ids.map((id) => app.getShape(id));
  const deltaMap = Object.fromEntries(getDistributions(initialShapes, type).map((d) => [d.id, d]));
  const { before, after } = TLDR.mutateShapes(app.state, ids.filter((id) => deltaMap[id] !== void 0), (shape) => ({ point: deltaMap[shape.id].next }), currentPageId);
  initialShapes.forEach((shape) => {
    if (shape.type === "group" /* Group */) {
      const delta = import_vec20.default.sub(after[shape.id].point, before[shape.id].point);
      shape.children.forEach((id) => {
        const child = app.getShape(id);
        before[child.id] = { point: child.point };
        after[child.id] = { point: import_vec20.default.add(child.point, delta) };
      });
      delete before[shape.id];
      delete after[shape.id];
    }
  });
  return {
    id: "distribute",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}
function getDistributions(initialShapes, type) {
  const entries = initialShapes.map((shape) => {
    const utils = TLDR.getShapeUtil(shape);
    return {
      id: shape.id,
      point: [...shape.point],
      bounds: utils.getBounds(shape),
      center: utils.getCenter(shape)
    };
  });
  const len = entries.length;
  const commonBounds = import_core27.Utils.getCommonBounds(entries.map(({ bounds }) => bounds));
  const results = [];
  switch (type) {
    case "horizontal" /* Horizontal */: {
      const span = entries.reduce((a, c) => a + c.bounds.width, 0);
      if (span > commonBounds.width) {
        const left = entries.sort((a, b) => a.bounds.minX - b.bounds.minX)[0];
        const right = entries.sort((a, b) => b.bounds.maxX - a.bounds.maxX)[0];
        const entriesToMove = entries.filter((a) => a !== left && a !== right).sort((a, b) => a.center[0] - b.center[0]);
        const step = (right.center[0] - left.center[0]) / (len - 1);
        const x = left.center[0] + step;
        entriesToMove.forEach(({ id, point, bounds }, i) => {
          results.push({
            id,
            prev: point,
            next: [x + step * i - bounds.width / 2, bounds.minY]
          });
        });
      } else {
        const entriesToMove = entries.sort((a, b) => a.center[0] - b.center[0]);
        let x = commonBounds.minX;
        const step = (commonBounds.width - span) / (len - 1);
        entriesToMove.forEach(({ id, point, bounds }) => {
          results.push({ id, prev: point, next: [x, bounds.minY] });
          x += bounds.width + step;
        });
      }
      break;
    }
    case "vertical" /* Vertical */: {
      const span = entries.reduce((a, c) => a + c.bounds.height, 0);
      if (span > commonBounds.height) {
        const top2 = entries.sort((a, b) => a.bounds.minY - b.bounds.minY)[0];
        const bottom = entries.sort((a, b) => b.bounds.maxY - a.bounds.maxY)[0];
        const entriesToMove = entries.filter((a) => a !== top2 && a !== bottom).sort((a, b) => a.center[1] - b.center[1]);
        const step = (bottom.center[1] - top2.center[1]) / (len - 1);
        const y = top2.center[1] + step;
        entriesToMove.forEach(({ id, point, bounds }, i) => {
          results.push({
            id,
            prev: point,
            next: [bounds.minX, y + step * i - bounds.height / 2]
          });
        });
      } else {
        const entriesToMove = entries.sort((a, b) => a.center[1] - b.center[1]);
        let y = commonBounds.minY;
        const step = (commonBounds.height - span) / (len - 1);
        entriesToMove.forEach(({ id, point, bounds }) => {
          results.push({ id, prev: point, next: [bounds.minX, y] });
          y += bounds.height + step;
        });
      }
      break;
    }
  }
  return results;
}

// src/state/commands/duplicatePage/duplicatePage.ts
var import_core28 = require("@tldraw/core");
function duplicatePage(app, pageId) {
  const newId = import_core28.Utils.uniqueId();
  const {
    currentPageId,
    page,
    pageState: { camera }
  } = app;
  const nextPage = __spreadProps(__spreadValues({}, page), {
    id: newId,
    name: page.name + " Copy",
    shapes: Object.fromEntries(Object.entries(page.shapes).map(([id, shape]) => {
      return [
        id,
        __spreadProps(__spreadValues({}, shape), {
          parentId: shape.parentId === pageId ? newId : shape.parentId
        })
      ];
    }))
  });
  return {
    id: "duplicate_page",
    before: {
      appState: {
        currentPageId
      },
      document: {
        pages: {
          [newId]: void 0
        },
        pageStates: {
          [newId]: void 0
        }
      }
    },
    after: {
      appState: {
        currentPageId: newId
      },
      document: {
        pages: {
          [newId]: nextPage
        },
        pageStates: {
          [newId]: __spreadProps(__spreadValues({}, page), {
            id: newId,
            selectedIds: [],
            camera: __spreadValues({}, camera),
            editingId: void 0,
            bindingId: void 0,
            hoveredId: void 0,
            pointedId: void 0
          })
        }
      }
    }
  };
}

// src/state/commands/duplicateShapes/duplicateShapes.ts
var import_core29 = require("@tldraw/core");
var import_vec21 = require("@tldraw/vec");
function duplicateShapes(app, ids, point) {
  const { selectedIds, currentPageId, page, shapes } = app;
  const before = {
    shapes: {},
    bindings: {}
  };
  const after = {
    shapes: {},
    bindings: {}
  };
  const duplicateMap = {};
  const shapesToDuplicate = ids.map((id) => app.getShape(id)).filter((shape) => !ids.includes(shape.parentId));
  shapesToDuplicate.forEach((shape) => {
    const duplicatedId = import_core29.Utils.uniqueId();
    before.shapes[duplicatedId] = void 0;
    after.shapes[duplicatedId] = __spreadProps(__spreadValues({}, import_core29.Utils.deepClone(shape)), {
      id: duplicatedId,
      childIndex: TLDR.getChildIndexAbove(app.state, shape.id, currentPageId)
    });
    if (shape.children) {
      after.shapes[duplicatedId].children = [];
    }
    if (shape.parentId !== currentPageId) {
      const parent = app.getShape(shape.parentId);
      before.shapes[parent.id] = __spreadProps(__spreadValues({}, before.shapes[parent.id]), {
        children: parent.children
      });
      after.shapes[parent.id] = __spreadProps(__spreadValues({}, after.shapes[parent.id]), {
        children: [...(after.shapes[parent.id] || parent).children, duplicatedId]
      });
    }
    duplicateMap[shape.id] = duplicatedId;
  });
  shapesToDuplicate.forEach((shape) => {
    if (shape.children) {
      shape.children.forEach((childId) => {
        var _a, _b;
        const child = app.getShape(childId);
        const duplicatedId = import_core29.Utils.uniqueId();
        const duplicatedParentId = duplicateMap[shape.id];
        before.shapes[duplicatedId] = void 0;
        after.shapes[duplicatedId] = __spreadProps(__spreadValues({}, import_core29.Utils.deepClone(child)), {
          id: duplicatedId,
          parentId: duplicatedParentId,
          childIndex: TLDR.getChildIndexAbove(app.state, child.id, currentPageId)
        });
        duplicateMap[childId] = duplicatedId;
        (_b = (_a = after.shapes[duplicateMap[shape.id]]) == null ? void 0 : _a.children) == null ? void 0 : _b.push(duplicatedId);
      });
    }
  });
  const dupedShapeIds = new Set(Object.keys(duplicateMap));
  Object.values(page.bindings).filter((binding) => dupedShapeIds.has(binding.fromId) || dupedShapeIds.has(binding.toId)).forEach((binding) => {
    if (dupedShapeIds.has(binding.fromId)) {
      if (dupedShapeIds.has(binding.toId)) {
        const duplicatedBindingId = import_core29.Utils.uniqueId();
        const duplicatedBinding = __spreadProps(__spreadValues({}, import_core29.Utils.deepClone(binding)), {
          id: duplicatedBindingId,
          fromId: duplicateMap[binding.fromId],
          toId: duplicateMap[binding.toId]
        });
        before.bindings[duplicatedBindingId] = void 0;
        after.bindings[duplicatedBindingId] = duplicatedBinding;
        const boundShape = after.shapes[duplicatedBinding.fromId];
        Object.values(boundShape.handles).forEach((handle) => {
          if (handle.bindingId === binding.id) {
            handle.bindingId = duplicatedBindingId;
          }
        });
      } else {
        const boundShape = after.shapes[duplicateMap[binding.fromId]];
        Object.values(boundShape.handles).forEach((handle) => {
          if (handle.bindingId === binding.id) {
            handle.bindingId = void 0;
          }
        });
      }
    }
  });
  const shapesToMove = Object.values(after.shapes);
  if (point) {
    const commonBounds = import_core29.Utils.getCommonBounds(shapesToMove.map((shape) => TLDR.getBounds(shape)));
    const center = import_core29.Utils.getBoundsCenter(commonBounds);
    shapesToMove.forEach((shape) => {
      if (!shape.point)
        return;
      shape.point = import_vec21.Vec.sub(point, import_vec21.Vec.sub(center, shape.point));
    });
  } else {
    const offset = [16, 16];
    shapesToMove.forEach((shape) => {
      if (!shape.point)
        return;
      shape.point = import_vec21.Vec.add(shape.point, offset);
    });
  }
  shapesToMove.forEach((shape) => {
    if (shape.isLocked) {
      shape.isLocked = false;
    }
  });
  return {
    id: "duplicate",
    before: {
      document: {
        pages: {
          [currentPageId]: before
        },
        pageStates: {
          [currentPageId]: { selectedIds }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: after
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: Array.from(dupedShapeIds.values()).map((id) => duplicateMap[id])
          }
        }
      }
    }
  };
}

// src/state/commands/flipShapes/flipShapes.ts
var import_core30 = require("@tldraw/core");
function flipShapes(app, ids, type) {
  const { selectedIds, currentPageId, shapes } = app;
  const boundsForShapes = shapes.map((shape) => TLDR.getBounds(shape));
  const commonBounds = import_core30.Utils.getCommonBounds(boundsForShapes);
  const { before, after } = TLDR.mutateShapes(app.state, ids, (shape) => {
    const shapeBounds = TLDR.getBounds(shape);
    switch (type) {
      case "horizontal" /* Horizontal */: {
        const newShapeBounds = import_core30.Utils.getRelativeTransformedBoundingBox(commonBounds, commonBounds, shapeBounds, true, false);
        return TLDR.getShapeUtil(shape).transform(shape, newShapeBounds, {
          type: import_core30.TLBoundsCorner.TopLeft,
          scaleX: -1,
          scaleY: 1,
          initialShape: shape,
          transformOrigin: [0.5, 0.5]
        });
      }
      case "vertical" /* Vertical */: {
        const newShapeBounds = import_core30.Utils.getRelativeTransformedBoundingBox(commonBounds, commonBounds, shapeBounds, false, true);
        return TLDR.getShapeUtil(shape).transform(shape, newShapeBounds, {
          type: import_core30.TLBoundsCorner.TopLeft,
          scaleX: 1,
          scaleY: -1,
          initialShape: shape,
          transformOrigin: [0.5, 0.5]
        });
      }
    }
  }, currentPageId);
  return {
    id: "flip",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/groupShapes/groupShapes.ts
var import_core31 = require("@tldraw/core");
function groupShapes(app, ids, groupId, pageId) {
  var _a, _b;
  if (ids.length < 2)
    return;
  const beforeShapes = {};
  const afterShapes = {};
  const beforeBindings = {};
  const afterBindings = {};
  const idsToGroup = [...ids];
  const shapesToGroup = [];
  const deletedGroupIds = [];
  const otherEffectedGroups = [];
  for (const id of ids) {
    const shape = app.getShape(id);
    if (shape.isLocked)
      continue;
    if (shape.children === void 0) {
      shapesToGroup.push(shape);
    } else {
      const childIds = shape.children.filter((id2) => !app.getShape(id2).isLocked);
      otherEffectedGroups.push(shape);
      idsToGroup.push(...childIds);
      shapesToGroup.push(...childIds.map((id2) => app.getShape(id2)).filter(Boolean));
    }
  }
  if (shapesToGroup.every((shape) => shape.parentId === shapesToGroup[0].parentId)) {
    if (shapesToGroup[0].parentId !== pageId) {
      const commonParent = app.getShape(shapesToGroup[0].parentId);
      if (((_a = commonParent.children) == null ? void 0 : _a.length) === idsToGroup.length) {
        return;
      }
    }
  }
  const flattenedShapes = TLDR.flattenPage(app.state, pageId);
  const shapeIndexMap = Object.fromEntries(shapesToGroup.map((shape) => [shape.id, flattenedShapes.indexOf(shape)]));
  const sortedShapes = shapesToGroup.sort((a, b) => shapeIndexMap[a.id] - shapeIndexMap[b.id]);
  const groupParentId = pageId;
  const groupChildIndex = (sortedShapes.filter((shape) => shape.parentId === pageId)[0] || sortedShapes[0]).childIndex;
  const groupBounds = import_core31.Utils.getCommonBounds(shapesToGroup.map((shape) => TLDR.getBounds(shape)));
  beforeShapes[groupId] = void 0;
  afterShapes[groupId] = TLDR.getShapeUtil("group" /* Group */).create({
    id: groupId,
    childIndex: groupChildIndex,
    parentId: groupParentId,
    point: [groupBounds.minX, groupBounds.minY],
    size: [groupBounds.width, groupBounds.height],
    children: sortedShapes.map((shape) => shape.id)
  });
  sortedShapes.forEach((shape, index) => {
    if (shape.parentId !== pageId) {
      const parentShape = app.getShape(shape.parentId);
      otherEffectedGroups.push(parentShape);
    }
    beforeShapes[shape.id] = __spreadProps(__spreadValues({}, beforeShapes[shape.id]), {
      parentId: shape.parentId,
      childIndex: shape.childIndex
    });
    afterShapes[shape.id] = __spreadProps(__spreadValues({}, afterShapes[shape.id]), {
      parentId: groupId,
      childIndex: index + 1
    });
  });
  while (otherEffectedGroups.length > 0) {
    const shape = otherEffectedGroups.pop();
    if (!shape)
      break;
    const nextChildren = (((_b = beforeShapes[shape.id]) == null ? void 0 : _b.children) || shape.children).filter((childId) => childId && !(idsToGroup.includes(childId) || deletedGroupIds.includes(childId)));
    if (nextChildren.length === 0) {
      beforeShapes[shape.id] = shape;
      afterShapes[shape.id] = void 0;
      if (shape.parentId !== pageId) {
        deletedGroupIds.push(shape.id);
        otherEffectedGroups.push(app.getShape(shape.parentId));
      }
    } else {
      beforeShapes[shape.id] = __spreadProps(__spreadValues({}, beforeShapes[shape.id]), {
        children: shape.children
      });
      afterShapes[shape.id] = __spreadProps(__spreadValues({}, afterShapes[shape.id]), {
        children: nextChildren
      });
    }
  }
  const { bindings } = app;
  const deletedGroupIdsSet = new Set(deletedGroupIds);
  bindings.forEach((binding) => {
    for (const id of [binding.toId, binding.fromId]) {
      if (deletedGroupIdsSet.has(id)) {
        beforeBindings[binding.id] = binding;
        afterBindings[binding.id] = void 0;
        const shape = app.getShape(id);
        if (shape.handles) {
          Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
            var _a2, _b2;
            beforeShapes[id] = __spreadProps(__spreadValues({}, beforeShapes[id]), {
              handles: __spreadProps(__spreadValues({}, (_a2 = beforeShapes[id]) == null ? void 0 : _a2.handles), {
                [handle.id]: { bindingId: binding.id }
              })
            });
            if (!deletedGroupIds.includes(id)) {
              afterShapes[id] = __spreadProps(__spreadValues({}, afterShapes[id]), {
                handles: __spreadProps(__spreadValues({}, (_b2 = afterShapes[id]) == null ? void 0 : _b2.handles), {
                  [handle.id]: { bindingId: void 0 }
                })
              });
            }
          });
        }
      }
    }
  });
  return {
    id: "group",
    before: {
      document: {
        pages: {
          [pageId]: {
            shapes: beforeShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: {
            shapes: afterShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: [groupId]
          }
        }
      }
    }
  };
}

// src/state/commands/moveShapesToPage/moveShapesToPage.ts
var import_core32 = require("@tldraw/core");
var import_vec22 = require("@tldraw/vec");
function moveShapesToPage(app, ids, viewportBounds, fromPageId, toPageId) {
  const { page } = app;
  const fromPage = {
    before: {
      shapes: {},
      bindings: {}
    },
    after: {
      shapes: {},
      bindings: {}
    }
  };
  const toPage = {
    before: {
      shapes: {},
      bindings: {}
    },
    after: {
      shapes: {},
      bindings: {}
    }
  };
  const movingShapeIds = /* @__PURE__ */ new Set();
  const shapesToMove = /* @__PURE__ */ new Set();
  ids.map((id) => app.getShape(id, fromPageId)).filter((shape) => !shape.isLocked).forEach((shape) => {
    movingShapeIds.add(shape.id);
    shapesToMove.add(shape);
    if (shape.children !== void 0) {
      shape.children.forEach((childId) => {
        movingShapeIds.add(childId);
        shapesToMove.add(app.getShape(childId, fromPageId));
      });
    }
  });
  const startingChildIndex = TLDR.getTopChildIndex(app.state, toPageId);
  const movingShapes = Array.from(shapesToMove.values());
  movingShapes.forEach((shape, i) => {
    fromPage.before.shapes[shape.id] = shape;
    fromPage.after.shapes[shape.id] = void 0;
    toPage.before.shapes[shape.id] = void 0;
    toPage.after.shapes[shape.id] = shape;
    if (!movingShapeIds.has(shape.parentId)) {
      toPage.after.shapes[shape.id] = __spreadProps(__spreadValues({}, shape), {
        parentId: toPageId,
        childIndex: startingChildIndex + i
      });
      if (shape.parentId !== fromPageId) {
        const parent = app.getShape(shape.parentId, fromPageId);
        fromPage.before.shapes[parent.id] = {
          children: parent.children
        };
        fromPage.after.shapes[parent.id] = {
          children: parent.children.filter((childId) => childId !== shape.id)
        };
      }
    }
  });
  Object.values(page.bindings).filter((binding) => movingShapeIds.has(binding.fromId) || movingShapeIds.has(binding.toId)).forEach((binding) => {
    fromPage.before.bindings[binding.id] = binding;
    fromPage.after.bindings[binding.id] = void 0;
    const fromBoundShape = app.getShape(binding.fromId, fromPageId);
    const shouldCopy = movingShapeIds.has(binding.fromId) && movingShapeIds.has(binding.toId);
    if (shouldCopy) {
      toPage.before.bindings[binding.id] = void 0;
      toPage.after.bindings[binding.id] = binding;
    } else {
      if (movingShapeIds.has(binding.fromId)) {
        const fromShape = app.getShape(binding.fromId, fromPageId);
        const handle = Object.values(fromBoundShape.handles).find((handle2) => handle2.bindingId === binding.id);
        const handleId = handle.id;
        const toPageShape = toPage.after.shapes[fromShape.id];
        toPageShape.handles = __spreadProps(__spreadValues({}, toPageShape.handles), {
          [handleId]: __spreadProps(__spreadValues({}, toPageShape.handles[handleId]), {
            bindingId: void 0
          })
        });
      } else {
        const fromShape = app.getShape(binding.fromId, fromPageId);
        const handle = Object.values(fromBoundShape.handles).find((handle2) => handle2.bindingId === binding.id);
        fromPage.before.shapes[fromShape.id] = {
          handles: { [handle.id]: { bindingId: binding.id } }
        };
        fromPage.after.shapes[fromShape.id] = {
          handles: { [handle.id]: { bindingId: void 0 } }
        };
      }
    }
  });
  const toPageState = app.state.document.pageStates[toPageId];
  const bounds = import_core32.Utils.getCommonBounds(movingShapes.map((shape) => TLDR.getBounds(shape)));
  const zoom = TLDR.getCameraZoom(viewportBounds.width < viewportBounds.height ? (viewportBounds.width - 128) / bounds.width : (viewportBounds.height - 128) / bounds.height);
  const mx = (viewportBounds.width - bounds.width * zoom) / 2 / zoom;
  const my = (viewportBounds.height - bounds.height * zoom) / 2 / zoom;
  const point = import_vec22.Vec.toFixed(import_vec22.Vec.add([-bounds.minX, -bounds.minY], [mx, my]));
  return {
    id: "move_to_page",
    before: {
      appState: {
        currentPageId: fromPageId
      },
      document: {
        pages: {
          [fromPageId]: fromPage.before,
          [toPageId]: toPage.before
        },
        pageStates: {
          [fromPageId]: { selectedIds: ids },
          [toPageId]: {
            selectedIds: toPageState.selectedIds,
            camera: toPageState.camera
          }
        }
      }
    },
    after: {
      appState: {
        currentPageId: toPageId
      },
      document: {
        pages: {
          [fromPageId]: fromPage.after,
          [toPageId]: toPage.after
        },
        pageStates: {
          [fromPageId]: { selectedIds: [] },
          [toPageId]: {
            selectedIds: ids,
            camera: {
              zoom,
              point
            }
          }
        }
      }
    }
  };
}

// src/state/commands/reorderShapes/reorderShapes.ts
function reorderShapes(app, ids, type) {
  const { currentPageId, page } = app;
  const parentIds = new Set(ids.map((id) => app.getShape(id).parentId));
  let result = { before: {}, after: {} };
  let startIndex;
  let startChildIndex;
  let step;
  Array.from(parentIds.values()).forEach((parentId) => {
    let sortedChildren = [];
    if (parentId === page.id) {
      sortedChildren = Object.values(page.shapes).sort((a, b) => a.childIndex - b.childIndex);
    } else {
      const parent = app.getShape(parentId);
      if (!parent.children)
        throw Error("No children in parent!");
      sortedChildren = parent.children.map((childId) => app.getShape(childId)).sort((a, b) => a.childIndex - b.childIndex);
    }
    const sortedChildIds = sortedChildren.map((shape) => shape.id);
    const sortedIndicesToMove = ids.filter((id) => sortedChildIds.includes(id)).map((id) => sortedChildIds.indexOf(id)).sort((a, b) => a - b);
    if (sortedIndicesToMove.length === sortedChildIds.length)
      return;
    switch (type) {
      case "toBack" /* ToBack */: {
        for (let i = 0; i < sortedChildIds.length; i++) {
          if (sortedIndicesToMove.includes(i))
            continue;
          startIndex = i;
          break;
        }
        startChildIndex = sortedChildren[startIndex].childIndex;
        step = startChildIndex / (sortedIndicesToMove.length + 1);
        result = TLDR.mutateShapes(app.state, sortedIndicesToMove.map((i) => sortedChildren[i].id).reverse(), (_shape, i) => ({
          childIndex: startChildIndex - (i + 1) * step
        }), currentPageId);
        break;
      }
      case "toFront" /* ToFront */: {
        for (let i = sortedChildIds.length - 1; i >= 0; i--) {
          if (sortedIndicesToMove.includes(i))
            continue;
          startIndex = i;
          break;
        }
        startChildIndex = sortedChildren[startIndex].childIndex;
        step = 1;
        result = TLDR.mutateShapes(app.state, sortedIndicesToMove.map((i) => sortedChildren[i].id), (_shape, i) => ({
          childIndex: startChildIndex + (i + 1)
        }), currentPageId);
        break;
      }
      case "backward" /* Backward */: {
        const indexMap = {};
        for (let i = sortedChildIds.length - 1; i >= 0; i--) {
          if (sortedIndicesToMove.includes(i)) {
            for (let j = i; j >= 0; j--) {
              if (!sortedIndicesToMove.includes(j)) {
                const endChildIndex = sortedChildren[j].childIndex;
                let startChildIndex2;
                let step2;
                if (j === 0) {
                  startChildIndex2 = endChildIndex / 2;
                  step2 = endChildIndex / 2 / (i - j + 1);
                } else {
                  startChildIndex2 = sortedChildren[j - 1].childIndex;
                  step2 = (endChildIndex - startChildIndex2) / (i - j + 1);
                  startChildIndex2 += step2;
                }
                for (let k = 0; k < i - j; k++) {
                  indexMap[sortedChildren[j + k + 1].id] = startChildIndex2 + step2 * k;
                }
                break;
              }
            }
          }
        }
        if (Object.values(indexMap).length > 0) {
          result = TLDR.mutateShapes(app.state, sortedIndicesToMove.map((i) => sortedChildren[i].id), (shape) => ({
            childIndex: indexMap[shape.id]
          }), currentPageId);
        }
        break;
      }
      case "forward" /* Forward */: {
        const indexMap = {};
        for (let i = 0; i < sortedChildIds.length; i++) {
          if (sortedIndicesToMove.includes(i)) {
            for (let j = i; j < sortedChildIds.length; j++) {
              if (!sortedIndicesToMove.includes(j)) {
                startChildIndex = sortedChildren[j].childIndex;
                const step2 = j === sortedChildIds.length - 1 ? 1 : (sortedChildren[j + 1].childIndex - startChildIndex) / (j - i + 1);
                for (let k = 0; k < j - i; k++) {
                  indexMap[sortedChildren[i + k].id] = startChildIndex + step2 * (k + 1);
                }
                break;
              }
            }
          }
        }
        if (Object.values(indexMap).length > 0) {
          result = TLDR.mutateShapes(app.state, sortedIndicesToMove.map((i) => sortedChildren[i].id), (shape) => ({
            childIndex: indexMap[shape.id]
          }), currentPageId);
        }
        break;
      }
    }
  });
  return {
    id: "move",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: result.before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: result.after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/renamePage/renamePage.ts
function renamePage(app, pageId, name) {
  const { page } = app;
  return {
    id: "rename_page",
    before: {
      document: {
        pages: {
          [pageId]: { name: page.name }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: { name }
        }
      }
    }
  };
}

// src/state/commands/resetBounds/resetBounds.ts
function resetBounds(app, ids, pageId) {
  const { currentPageId } = app;
  const { before, after } = TLDR.mutateShapes(app.state, ids, (shape) => {
    var _a, _b;
    return (_b = (_a = app.getShapeUtil(shape)).onDoubleClickBoundsHandle) == null ? void 0 : _b.call(_a, shape);
  }, pageId);
  return {
    id: "reset_bounds",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/rotateShapes/rotateShapes.ts
var import_core33 = require("@tldraw/core");
var PI23 = Math.PI * 2;
function rotateShapes(app, ids, delta = -PI23 / 4) {
  const { currentPageId } = app;
  const before = {};
  const after = {};
  const shapesToRotate = ids.flatMap((id) => {
    const shape = app.getShape(id);
    return shape.children ? shape.children.map((childId) => app.getShape(childId)) : shape;
  }).filter((shape) => !shape.isLocked);
  const origin = import_core33.Utils.getBoundsCenter(import_core33.Utils.getCommonBounds(shapesToRotate.map((shape) => TLDR.getBounds(shape))));
  shapesToRotate.forEach((shape) => {
    const change = TLDR.getRotatedShapeMutation(shape, TLDR.getCenter(shape), origin, delta);
    if (!change)
      return;
    before[shape.id] = TLDR.getBeforeShape(shape, change);
    after[shape.id] = change;
  });
  return {
    id: "rotate",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/stretchShapes/stretchShapes.ts
var import_core34 = require("@tldraw/core");
function stretchShapes(app, ids, type) {
  const { currentPageId, selectedIds } = app;
  const initialShapes = ids.map((id) => app.getShape(id));
  const boundsForShapes = initialShapes.map((shape) => TLDR.getBounds(shape));
  const commonBounds = import_core34.Utils.getCommonBounds(boundsForShapes);
  const idsToMutate = ids.flatMap((id) => {
    const shape = app.getShape(id);
    return shape.children ? shape.children : shape.id;
  }).filter((id) => !app.getShape(id).isLocked);
  const { before, after } = TLDR.mutateShapes(app.state, idsToMutate, (shape) => {
    const bounds = TLDR.getBounds(shape);
    switch (type) {
      case "horizontal" /* Horizontal */: {
        const newBounds = __spreadProps(__spreadValues({}, bounds), {
          minX: commonBounds.minX,
          maxX: commonBounds.maxX,
          width: commonBounds.width
        });
        return TLDR.getShapeUtil(shape).transformSingle(shape, newBounds, {
          type: import_core34.TLBoundsCorner.TopLeft,
          scaleX: newBounds.width / bounds.width,
          scaleY: 1,
          initialShape: shape,
          transformOrigin: [0.5, 0.5]
        });
      }
      case "vertical" /* Vertical */: {
        const newBounds = __spreadProps(__spreadValues({}, bounds), {
          minY: commonBounds.minY,
          maxY: commonBounds.maxY,
          height: commonBounds.height
        });
        return TLDR.getShapeUtil(shape).transformSingle(shape, newBounds, {
          type: import_core34.TLBoundsCorner.TopLeft,
          scaleX: 1,
          scaleY: newBounds.height / bounds.height,
          initialShape: shape,
          transformOrigin: [0.5, 0.5]
        });
      }
    }
  }, currentPageId);
  initialShapes.forEach((shape) => {
    if (shape.type === "group" /* Group */) {
      delete before[shape.id];
      delete after[shape.id];
    }
  });
  return {
    id: "stretch",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/styleShapes/styleShapes.ts
var import_vec23 = require("@tldraw/vec");
function styleShapes(app, ids, changes) {
  const { currentPageId, selectedIds } = app;
  const shapeIdsToMutate = ids.flatMap((id) => TLDR.getDocumentBranch(app.state, id, currentPageId)).filter((id) => !app.getShape(id).isLocked);
  const beforeShapes = {};
  const afterShapes = {};
  shapeIdsToMutate.map((id) => app.getShape(id)).filter((shape) => !shape.isLocked).forEach((shape) => {
    beforeShapes[shape.id] = {
      style: __spreadValues({}, Object.fromEntries(Object.keys(changes).map((key) => [key, shape.style[key]])))
    };
    afterShapes[shape.id] = {
      style: changes
    };
    if (shape.type === "text" /* Text */) {
      beforeShapes[shape.id].point = shape.point;
      afterShapes[shape.id].point = import_vec23.Vec.toFixed(import_vec23.Vec.add(shape.point, import_vec23.Vec.sub(app.getShapeUtil(shape).getCenter(shape), app.getShapeUtil(shape).getCenter(__spreadProps(__spreadValues({}, shape), {
        style: __spreadValues(__spreadValues({}, shape.style), changes)
      })))));
    }
  });
  return {
    id: "style",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: beforeShapes
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      },
      appState: {
        currentStyle: __spreadValues({}, app.appState.currentStyle)
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: afterShapes
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      },
      appState: {
        currentStyle: changes
      }
    }
  };
}

// src/state/commands/toggleShapesDecoration/toggleShapesDecoration.ts
function toggleShapesDecoration(app, ids, decorationId) {
  const { currentPageId, selectedIds } = app;
  const beforeShapes = Object.fromEntries(ids.map((id) => {
    var _a;
    return [
      id,
      {
        decorations: {
          [decorationId]: (_a = app.getShape(id).decorations) == null ? void 0 : _a[decorationId]
        }
      }
    ];
  }));
  const afterShapes = Object.fromEntries(ids.filter((id) => !app.getShape(id).isLocked).map((id) => {
    var _a;
    return [
      id,
      {
        decorations: {
          [decorationId]: ((_a = app.getShape(id).decorations) == null ? void 0 : _a[decorationId]) ? void 0 : "arrow" /* Arrow */
        }
      }
    ];
  }));
  return {
    id: "toggle_decorations",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: beforeShapes }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: afterShapes }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/toggleShapesProp/toggleShapesProp.ts
function toggleShapeProp(app, ids, prop) {
  const { currentPageId } = app;
  const initialShapes = ids.map((id) => app.getShape(id)).filter((shape) => prop === "isLocked" ? true : !shape.isLocked);
  const isAllToggled = initialShapes.every((shape) => shape[prop]);
  const before = {};
  const after = {};
  initialShapes.forEach((shape) => {
    before[shape.id] = { [prop]: shape[prop] };
    after[shape.id] = { [prop]: !isAllToggled };
  });
  return {
    id: "toggle",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: before
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: after
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/translateShapes/translateShapes.ts
var import_vec24 = require("@tldraw/vec");
function translateShapes(app, ids, delta) {
  const { currentPageId, selectedIds } = app;
  app.rotationInfo.selectedIds = [...selectedIds];
  const before = {
    shapes: {},
    bindings: {}
  };
  const after = {
    shapes: {},
    bindings: {}
  };
  const idsToMutate = ids.flatMap((id) => {
    const shape = app.getShape(id);
    return shape.children ? shape.children : shape.id;
  }).filter((id) => !app.getShape(id).isLocked);
  const change = TLDR.mutateShapes(app.state, idsToMutate, (shape) => ({
    point: import_vec24.Vec.toFixed(import_vec24.Vec.add(shape.point, delta))
  }), currentPageId);
  before.shapes = change.before;
  after.shapes = change.after;
  const bindingsToDelete = TLDR.getBindings(app.state, currentPageId).filter((binding) => ids.includes(binding.fromId) && !ids.includes(binding.toId));
  bindingsToDelete.forEach((binding) => {
    before.bindings[binding.id] = binding;
    after.bindings[binding.id] = void 0;
    for (const id of [binding.toId, binding.fromId]) {
      const shape = app.getShape(id);
      if (!shape.handles)
        continue;
      Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
        var _a, _b;
        before.shapes[id] = __spreadProps(__spreadValues({}, before.shapes[id]), {
          handles: __spreadProps(__spreadValues({}, (_a = before.shapes[id]) == null ? void 0 : _a.handles), {
            [handle.id]: { bindingId: binding.id }
          })
        });
        after.shapes[id] = __spreadProps(__spreadValues({}, after.shapes[id]), {
          handles: __spreadProps(__spreadValues({}, (_b = after.shapes[id]) == null ? void 0 : _b.handles), { [handle.id]: { bindingId: void 0 } })
        });
      });
    }
  });
  return {
    id: "translate",
    before: {
      document: {
        pages: {
          [currentPageId]: before
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: after
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/ungroupShapes/ungroupShapes.ts
function ungroupShapes(app, selectedIds, groupShapes2, pageId) {
  const { bindings } = app;
  const beforeShapes = {};
  const afterShapes = {};
  const beforeBindings = {};
  const afterBindings = {};
  const beforeSelectedIds = selectedIds;
  const afterSelectedIds = selectedIds.filter((id) => !groupShapes2.find((shape) => shape.id === id));
  groupShapes2.filter((shape) => !shape.isLocked).forEach((groupShape) => {
    const shapesToReparent = [];
    const deletedGroupIds = [];
    beforeShapes[groupShape.id] = groupShape;
    afterShapes[groupShape.id] = void 0;
    groupShape.children.forEach((id) => {
      afterSelectedIds.push(id);
      const shape = app.getShape(id, pageId);
      shapesToReparent.push(shape);
    });
    const startingChildIndex = groupShape.childIndex;
    const endingChildIndex = TLDR.getChildIndexAbove(app.state, groupShape.id, pageId);
    const step = (endingChildIndex - startingChildIndex) / shapesToReparent.length;
    const sortedShapes = shapesToReparent.sort((a, b) => a.childIndex - b.childIndex);
    sortedShapes.forEach((shape, index) => {
      beforeShapes[shape.id] = {
        parentId: shape.parentId,
        childIndex: shape.childIndex
      };
      afterShapes[shape.id] = {
        parentId: pageId,
        childIndex: startingChildIndex + step * index
      };
    });
    bindings.filter((binding) => binding.toId === groupShape.id || binding.fromId === groupShape.id).forEach((binding) => {
      for (const id of [binding.toId, binding.fromId]) {
        if (afterShapes[id] === void 0) {
          beforeBindings[binding.id] = binding;
          afterBindings[binding.id] = void 0;
          const shape = app.getShape(id, pageId);
          if (shape.handles) {
            Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
              var _a, _b;
              beforeShapes[id] = __spreadProps(__spreadValues({}, beforeShapes[id]), {
                handles: __spreadProps(__spreadValues({}, (_a = beforeShapes[id]) == null ? void 0 : _a.handles), {
                  [handle.id]: { bindingId: binding.id }
                })
              });
              if (!deletedGroupIds.includes(id)) {
                afterShapes[id] = __spreadProps(__spreadValues({}, afterShapes[id]), {
                  handles: __spreadProps(__spreadValues({}, (_b = afterShapes[id]) == null ? void 0 : _b.handles), {
                    [handle.id]: { bindingId: void 0 }
                  })
                });
              }
            });
          }
        }
      }
    });
  });
  return {
    id: "ungroup",
    before: {
      document: {
        pages: {
          [pageId]: {
            shapes: beforeShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: beforeSelectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: {
            shapes: afterShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: afterSelectedIds
          }
        }
      }
    }
  };
}

// src/state/commands/updateShapes/updateShapes.ts
function updateShapes(app, updates, pageId) {
  const ids = updates.map((update) => update.id);
  const change = TLDR.mutateShapes(app.state, ids.filter((id) => !app.getShape(id, pageId).isLocked), (_shape, i) => updates[i], pageId);
  return {
    id: "update",
    before: {
      document: {
        pages: {
          [pageId]: {
            shapes: change.before
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: {
            shapes: change.after
          }
        }
      }
    }
  };
}

// src/state/commands/setShapesProps/setShapesProps.ts
function setShapesProps(app, ids, partial) {
  const { currentPageId, selectedIds } = app;
  const initialShapes = ids.map((id) => app.getShape(id)).filter((shape) => partial["isLocked"] ? true : !shape.isLocked);
  const before = {};
  const after = {};
  const keys = Object.keys(partial);
  initialShapes.forEach((shape) => {
    before[shape.id] = Object.fromEntries(keys.map((key) => [key, shape[key]]));
    after[shape.id] = partial;
  });
  return {
    id: "set_props",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: before
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: after
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    }
  };
}

// src/state/sessions/ArrowSession/ArrowSession.ts
var import_vec25 = require("@tldraw/vec");

// src/state/sessions/BaseSession.ts
var BaseSession = class {
  constructor(app) {
    this.app = app;
  }
};

// src/state/sessions/ArrowSession/ArrowSession.ts
var import_core35 = require("@tldraw/core");
var ArrowSession = class extends BaseSession {
  constructor(app, shapeId, handleId, isCreate = false) {
    super(app);
    __publicField(this, "type", "arrow" /* Arrow */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "translatingHandle" /* TranslatingHandle */);
    __publicField(this, "newStartBindingId", import_core35.Utils.uniqueId());
    __publicField(this, "draggedBindingId", import_core35.Utils.uniqueId());
    __publicField(this, "didBind", false);
    __publicField(this, "initialShape");
    __publicField(this, "handleId");
    __publicField(this, "bindableShapeIds");
    __publicField(this, "initialBinding");
    __publicField(this, "startBindingShapeId");
    __publicField(this, "isCreate");
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      var _a, _b, _c;
      const { initialShape } = this;
      const {
        currentPoint,
        shiftKey,
        altKey,
        metaKey,
        currentGrid,
        settings: { showGrid }
      } = this.app;
      const shape = this.app.getShape(initialShape.id);
      if (shape.isLocked)
        return;
      const { handles } = initialShape;
      const handleId = this.handleId;
      if (!handles[handleId].canBind)
        return;
      let delta = import_vec25.Vec.sub(currentPoint, import_vec25.Vec.add(handles[handleId].point, initialShape.point));
      if (shiftKey) {
        const A = altKey ? import_vec25.Vec.med(handles.start.point, handles.end.point) : handles[handleId === "start" ? "end" : "start"].point;
        const B = handles[handleId].point;
        const C = import_vec25.Vec.add(B, delta);
        const angle = import_vec25.Vec.angle(A, C);
        const adjusted = import_vec25.Vec.rotWith(C, A, import_core35.Utils.snapAngleToSegments(angle, 24) - angle);
        delta = import_vec25.Vec.add(delta, import_vec25.Vec.sub(adjusted, C));
      }
      const nextPoint = import_vec25.Vec.add(handles[handleId].point, delta);
      const handleChanges = {
        [handleId]: __spreadProps(__spreadValues({}, handles[handleId]), {
          point: showGrid ? import_vec25.Vec.snap(nextPoint, currentGrid) : import_vec25.Vec.toFixed(nextPoint),
          bindingId: void 0
        })
      };
      if (altKey) {
        const oppositeHandleId = handleId === "start" ? "end" : "start";
        const nextPoint2 = import_vec25.Vec.sub(handles[oppositeHandleId].point, delta);
        handleChanges[oppositeHandleId] = __spreadProps(__spreadValues({}, handles[oppositeHandleId]), {
          point: showGrid ? import_vec25.Vec.snap(nextPoint2, currentGrid) : import_vec25.Vec.toFixed(nextPoint2),
          bindingId: void 0
        });
      }
      const utils = shapeUtils["arrow" /* Arrow */];
      const handleChange = (_a = utils.onHandleChange) == null ? void 0 : _a.call(utils, initialShape, handleChanges);
      if (!handleChange)
        return;
      const next = {
        shape: import_core35.Utils.deepMerge(shape, handleChange),
        bindings: {}
      };
      let draggedBinding;
      const draggingHandle = next.shape.handles[this.handleId];
      const oppositeHandle = next.shape.handles[this.handleId === "start" ? "end" : "start"];
      if (this.startBindingShapeId) {
        let nextStartBinding;
        const startTarget = this.app.page.shapes[this.startBindingShapeId];
        const startTargetUtils = TLDR.getShapeUtil(startTarget);
        const center = startTargetUtils.getCenter(startTarget);
        const startHandle = next.shape.handles.start;
        const endHandle = next.shape.handles.end;
        const rayPoint = import_vec25.Vec.add(startHandle.point, next.shape.point);
        if (import_vec25.Vec.isEqual(rayPoint, center))
          rayPoint[1]++;
        const rayOrigin = center;
        const isInsideShape = startTargetUtils.hitTestPoint(startTarget, currentPoint);
        const rayDirection = import_vec25.Vec.uni(import_vec25.Vec.sub(rayPoint, rayOrigin));
        const hasStartBinding = this.app.getBinding(this.newStartBindingId) !== void 0;
        if (!metaKey && !startTargetUtils.hitTestPoint(startTarget, import_vec25.Vec.add(next.shape.point, endHandle.point))) {
          nextStartBinding = this.findBindingPoint(shape, startTarget, "start", this.newStartBindingId, center, rayOrigin, rayDirection, isInsideShape);
        }
        if (nextStartBinding && !hasStartBinding) {
          this.didBind = true;
          next.bindings[this.newStartBindingId] = nextStartBinding;
          next.shape = import_core35.Utils.deepMerge(next.shape, {
            handles: {
              start: {
                bindingId: nextStartBinding.id
              }
            }
          });
        } else if (!nextStartBinding && hasStartBinding) {
          this.didBind = false;
          next.bindings[this.newStartBindingId] = void 0;
          next.shape = import_core35.Utils.deepMerge(initialShape, {
            handles: {
              start: {
                bindingId: void 0
              }
            }
          });
        }
      }
      if (!metaKey) {
        const rayOrigin = import_vec25.Vec.add(oppositeHandle.point, next.shape.point);
        const rayPoint = import_vec25.Vec.add(draggingHandle.point, next.shape.point);
        const rayDirection = import_vec25.Vec.uni(import_vec25.Vec.sub(rayPoint, rayOrigin));
        const startPoint = import_vec25.Vec.add(next.shape.point, next.shape.handles.start.point);
        const endPoint = import_vec25.Vec.add(next.shape.point, next.shape.handles.end.point);
        const targets = this.bindableShapeIds.map((id) => this.app.page.shapes[id]).sort((a, b) => b.childIndex - a.childIndex).filter((shape2) => {
          const utils2 = TLDR.getShapeUtil(shape2);
          return ![startPoint, endPoint].every((point) => utils2.hitTestPoint(shape2, point));
        });
        for (const target of targets) {
          draggedBinding = this.findBindingPoint(shape, target, this.handleId, this.draggedBindingId, rayPoint, rayOrigin, rayDirection, altKey);
          if (draggedBinding)
            break;
        }
      }
      if (draggedBinding) {
        this.didBind = true;
        next.bindings[this.draggedBindingId] = draggedBinding;
        next.shape = import_core35.Utils.deepMerge(next.shape, {
          handles: {
            [this.handleId]: {
              bindingId: this.draggedBindingId
            }
          }
        });
      } else {
        this.didBind = this.didBind || false;
        const currentBindingId = shape.handles[this.handleId].bindingId;
        if (currentBindingId !== void 0) {
          next.bindings[currentBindingId] = void 0;
          next.shape = import_core35.Utils.deepMerge(next.shape, {
            handles: {
              [this.handleId]: {
                bindingId: void 0
              }
            }
          });
        }
      }
      const change = (_c = (_b = TLDR.getShapeUtil(next.shape)).onHandleChange) == null ? void 0 : _c.call(_b, next.shape, next.shape.handles);
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [shape.id]: __spreadValues(__spreadValues({}, next.shape), change != null ? change : {})
              },
              bindings: next.bindings
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              bindingId: next.shape.handles[handleId].bindingId
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const { initialShape, initialBinding, newStartBindingId, draggedBindingId } = this;
      const currentShape = TLDR.onSessionComplete(this.app.page.shapes[initialShape.id]);
      const isDeleting = this.isCreate || import_vec25.Vec.dist(currentShape.handles.start.point, currentShape.handles.end.point) < 4;
      const afterBindings = {};
      afterBindings[draggedBindingId] = void 0;
      if (initialBinding) {
        afterBindings[initialBinding.id] = isDeleting ? void 0 : initialBinding;
      }
      if (newStartBindingId) {
        afterBindings[newStartBindingId] = void 0;
      }
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [initialShape.id]: isDeleting ? void 0 : initialShape
              },
              bindings: afterBindings
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              selectedIds: isDeleting ? [] : [initialShape.id],
              bindingId: void 0,
              hoveredId: void 0,
              editingId: void 0
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const { initialShape, initialBinding, newStartBindingId, startBindingShapeId, handleId } = this;
      const currentShape = TLDR.onSessionComplete(this.app.page.shapes[initialShape.id]);
      const currentBindingId = currentShape.handles[handleId].bindingId;
      const length = import_vec25.Vec.dist(currentShape.handles.start.point, currentShape.handles.end.point);
      if (!(currentBindingId || initialBinding) && length < 4)
        return this.cancel();
      const beforeBindings = {};
      const afterBindings = {};
      if (initialBinding) {
        beforeBindings[initialBinding.id] = this.isCreate ? void 0 : initialBinding;
        afterBindings[initialBinding.id] = void 0;
      }
      if (currentBindingId) {
        beforeBindings[currentBindingId] = void 0;
        afterBindings[currentBindingId] = this.app.page.bindings[currentBindingId];
      }
      if (startBindingShapeId) {
        beforeBindings[newStartBindingId] = void 0;
        afterBindings[newStartBindingId] = this.app.page.bindings[newStartBindingId];
      }
      return {
        id: "arrow",
        before: {
          document: {
            pages: {
              [this.app.currentPageId]: {
                shapes: {
                  [initialShape.id]: this.isCreate ? void 0 : initialShape
                },
                bindings: beforeBindings
              }
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: this.isCreate ? [] : [initialShape.id],
                bindingId: void 0,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [this.app.currentPageId]: {
                shapes: {
                  [initialShape.id]: currentShape
                },
                bindings: afterBindings
              }
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: [initialShape.id],
                bindingId: void 0,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        }
      };
    });
    __publicField(this, "findBindingPoint", (shape, target, handleId, bindingId, point, origin, direction, bindAnywhere) => {
      const util = TLDR.getShapeUtil(target.type);
      const bindingPoint = util.getBindingPoint(target, shape, point, origin, direction, bindAnywhere);
      if (!bindingPoint)
        return;
      return {
        id: bindingId,
        type: "arrow",
        fromId: shape.id,
        toId: target.id,
        handleId,
        point: import_vec25.Vec.toFixed(bindingPoint.point),
        distance: bindingPoint.distance
      };
    });
    var _a, _b, _c;
    this.isCreate = isCreate;
    const { currentPageId } = app.state.appState;
    const page = app.state.document.pages[currentPageId];
    this.handleId = handleId;
    this.initialShape = deepCopy(page.shapes[shapeId]);
    this.bindableShapeIds = TLDR.getBindableShapeIds(app.state).filter((id) => !(id === this.initialShape.id || id === this.initialShape.parentId));
    const oppositeHandleBindingId = (_a = this.initialShape.handles[handleId === "start" ? "end" : "start"]) == null ? void 0 : _a.bindingId;
    if (oppositeHandleBindingId) {
      const oppositeToId = (_b = page.bindings[oppositeHandleBindingId]) == null ? void 0 : _b.toId;
      if (oppositeToId) {
        this.bindableShapeIds = this.bindableShapeIds.filter((id) => id !== oppositeToId);
      }
    }
    const { originPoint } = this.app;
    if (this.isCreate) {
      this.startBindingShapeId = (_c = this.bindableShapeIds.map((id) => page.shapes[id]).filter((shape) => import_core35.Utils.pointInBounds(originPoint, TLDR.getShapeUtil(shape).getBounds(shape))).sort((a, b) => {
        return b.childIndex - a.childIndex;
      })[0]) == null ? void 0 : _c.id;
      if (this.startBindingShapeId) {
        this.bindableShapeIds.splice(this.bindableShapeIds.indexOf(this.startBindingShapeId), 1);
      }
    } else {
      const initialBindingId = this.initialShape.handles[this.handleId].bindingId;
      if (initialBindingId) {
        this.initialBinding = page.bindings[initialBindingId];
      } else {
        this.initialShape.handles[this.handleId].bindingId = void 0;
      }
    }
  }
};

// src/state/sessions/BrushSession/BrushSession.ts
var import_core36 = require("@tldraw/core");
var BrushSession = class extends BaseSession {
  constructor(app) {
    super(app);
    __publicField(this, "type", "brush" /* Brush */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "brushing" /* Brushing */);
    __publicField(this, "initialSelectedIds");
    __publicField(this, "shapesToTest");
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      const {
        initialSelectedIds,
        shapesToTest,
        app: { metaKey, settings, originPoint, currentPoint }
      } = this;
      const brush = import_core36.Utils.getBoundsFromPoints([originPoint, currentPoint]);
      const selectByContain = settings.isCadSelectMode ? !metaKey && originPoint[0] < currentPoint[0] : metaKey;
      const hits = /* @__PURE__ */ new Set();
      const selectedIds = new Set(initialSelectedIds);
      shapesToTest.forEach(({ id, selectId }) => {
        const shape = this.app.getShape(id);
        if (!hits.has(selectId)) {
          const util = this.app.getShapeUtil(shape);
          if (selectByContain ? import_core36.Utils.boundsContain(brush, util.getBounds(shape)) : util.hitTestBounds(shape, brush)) {
            hits.add(selectId);
            if (!selectedIds.has(selectId)) {
              selectedIds.add(selectId);
            }
          } else if (selectedIds.has(selectId)) {
            selectedIds.delete(selectId);
          }
        }
      });
      const currentSelectedIds = this.app.selectedIds;
      const didChange = selectedIds.size !== currentSelectedIds.length || currentSelectedIds.some((id) => !selectedIds.has(id));
      const afterSelectedIds = didChange ? Array.from(selectedIds.values()) : currentSelectedIds;
      return {
        appState: {
          selectByContain
        },
        document: {
          pageStates: {
            [this.app.currentPageId]: {
              brush,
              selectedIds: afterSelectedIds
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      return {
        appState: {
          selectByContain: false
        },
        document: {
          pageStates: {
            [this.app.currentPageId]: {
              brush: null,
              selectedIds: Array.from(this.initialSelectedIds.values())
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      return {
        appState: {
          selectByContain: false
        },
        document: {
          pageStates: {
            [this.app.currentPageId]: {
              brush: null,
              selectedIds: [...this.app.selectedIds]
            }
          }
        }
      };
    });
    const { currentPageId } = app;
    this.initialSelectedIds = new Set(this.app.selectedIds);
    this.shapesToTest = this.app.shapes.filter((shape) => !(shape.isLocked || shape.isHidden || shape.parentId !== currentPageId || this.initialSelectedIds.has(shape.id) || this.initialSelectedIds.has(shape.parentId))).map((shape) => ({
      id: shape.id,
      bounds: this.app.getShapeUtil(shape).getBounds(shape),
      selectId: shape.id
    }));
    this.update();
  }
};

// src/state/sessions/DrawSession/DrawSession.ts
var import_core37 = require("@tldraw/core");
var import_vec26 = require("@tldraw/vec");
var DrawSession = class extends BaseSession {
  constructor(app, id) {
    super(app);
    __publicField(this, "type", "draw" /* Draw */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "creating" /* Creating */);
    __publicField(this, "topLeft");
    __publicField(this, "points");
    __publicField(this, "initialShape");
    __publicField(this, "lastAdjustedPoint");
    __publicField(this, "shiftedPoints", []);
    __publicField(this, "shapeId");
    __publicField(this, "isLocked");
    __publicField(this, "isExtending");
    __publicField(this, "lockedDirection");
    __publicField(this, "start", () => {
      var _a;
      const currentPoint = this.app.originPoint;
      const newAdjustedPoint = [0, 0, (_a = currentPoint[2]) != null ? _a : 0.5];
      this.points.push(newAdjustedPoint);
      const topLeft = [
        Math.min(this.topLeft[0], currentPoint[0]),
        Math.min(this.topLeft[1], currentPoint[1])
      ];
      const delta = import_vec26.Vec.sub(topLeft, currentPoint);
      this.topLeft = topLeft;
      this.shiftedPoints = this.points.map((pt) => import_vec26.Vec.toFixed(import_vec26.Vec.sub(pt, delta)).concat(pt[2]));
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [this.shapeId]: {
                  point: this.topLeft,
                  points: this.shiftedPoints
                }
              }
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              selectedIds: [this.shapeId]
            }
          }
        }
      };
    });
    __publicField(this, "update", () => {
      const { shapeId } = this;
      const { currentPoint, originPoint, shiftKey } = this.app;
      if (!this.lockedDirection && this.points.length > 1) {
        const bounds = import_core37.Utils.getBoundsFromPoints(this.points);
        if (bounds.width > 8 || bounds.height > 8) {
          this.lockedDirection = bounds.width > bounds.height ? "horizontal" : "vertical";
        }
      }
      if (shiftKey) {
        if (!this.isLocked && this.points.length > 2) {
          if (!this.lockedDirection) {
            const bounds = import_core37.Utils.getBoundsFromPoints(this.points);
            this.lockedDirection = bounds.width > bounds.height ? "horizontal" : "vertical";
          }
          this.isLocked = true;
          const returning = [...this.lastAdjustedPoint];
          if (this.lockedDirection === "vertical") {
            returning[0] = 0;
          } else {
            returning[1] = 0;
          }
          this.points.push(returning.concat(currentPoint[2]));
        }
      } else if (this.isLocked) {
        this.isLocked = false;
      }
      if (this.isLocked) {
        if (this.lockedDirection === "vertical") {
          currentPoint[0] = originPoint[0];
        } else {
          currentPoint[1] = originPoint[1];
        }
      }
      const change = this.addPoint(currentPoint);
      if (!change)
        return;
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [shapeId]: change
              }
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              selectedIds: [shapeId]
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const { shapeId } = this;
      const pageId = this.app.currentPageId;
      return {
        document: {
          pages: {
            [pageId]: {
              shapes: {
                [shapeId]: this.isExtending ? this.initialShape : void 0
              }
            }
          },
          pageStates: {
            [pageId]: {
              selectedIds: []
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const { shapeId } = this;
      const pageId = this.app.currentPageId;
      const shape = this.app.getShape(shapeId);
      return {
        id: "create_draw",
        before: {
          document: {
            pages: {
              [pageId]: {
                shapes: {
                  [shapeId]: this.isExtending ? this.initialShape : void 0
                }
              }
            },
            pageStates: {
              [pageId]: {
                selectedIds: []
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [pageId]: {
                shapes: {
                  [shapeId]: __spreadProps(__spreadValues({}, shape), {
                    point: import_vec26.Vec.toFixed(shape.point),
                    points: shape.points.map((pt) => import_vec26.Vec.toFixed(pt)),
                    isComplete: true
                  })
                }
              }
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: []
              }
            }
          }
        }
      };
    });
    __publicField(this, "addPoint", (currentPoint) => {
      const { originPoint } = this.app;
      const newAdjustedPoint = import_vec26.Vec.toFixed(import_vec26.Vec.sub(currentPoint, originPoint)).concat(currentPoint[2]);
      if (import_vec26.Vec.isEqual(this.lastAdjustedPoint, newAdjustedPoint))
        return;
      this.points.push(newAdjustedPoint);
      this.lastAdjustedPoint = newAdjustedPoint;
      const prevTopLeft = [...this.topLeft];
      const topLeft = [
        Math.min(this.topLeft[0], currentPoint[0]),
        Math.min(this.topLeft[1], currentPoint[1])
      ];
      const delta = import_vec26.Vec.sub(topLeft, originPoint);
      let points;
      if (prevTopLeft[0] !== topLeft[0] || prevTopLeft[1] !== topLeft[1]) {
        this.topLeft = topLeft;
        points = this.points.map((pt) => import_vec26.Vec.toFixed(import_vec26.Vec.sub(pt, delta)).concat(pt[2]));
      } else {
        points = [...this.shiftedPoints, import_vec26.Vec.sub(newAdjustedPoint, delta).concat(newAdjustedPoint[2])];
      }
      this.shiftedPoints = points;
      return {
        point: this.topLeft,
        points
      };
    });
    var _a;
    const { originPoint } = this.app;
    this.shapeId = id;
    this.initialShape = this.app.getShape(id);
    this.topLeft = [...this.initialShape.point];
    const currentPoint = [0, 0, (_a = originPoint[2]) != null ? _a : 0.5];
    const delta = import_vec26.Vec.sub(originPoint, this.topLeft);
    const initialPoints = this.initialShape.points.map((pt) => import_vec26.Vec.sub(pt, delta).concat(pt[2]));
    this.isExtending = initialPoints.length > 0;
    const newPoints = [];
    if (this.isExtending) {
      const prevPoint = initialPoints[initialPoints.length - 1];
      newPoints.push(prevPoint, prevPoint);
      const len = Math.ceil(import_vec26.Vec.dist(prevPoint, currentPoint) / 16);
      for (let i = 0; i < len; i++) {
        const t = i / (len - 1);
        newPoints.push(import_vec26.Vec.lrp(prevPoint, currentPoint, t).concat(prevPoint[2]));
      }
    } else {
      newPoints.push(currentPoint);
    }
    this.points = [...initialPoints, ...newPoints];
    this.shiftedPoints = this.points.map((pt) => import_vec26.Vec.add(pt, delta).concat(pt[2]));
    this.lastAdjustedPoint = this.points[this.points.length - 1];
  }
};

// src/state/sessions/HandleSession/HandleSession.ts
var import_vec27 = require("@tldraw/vec");
var HandleSession = class extends BaseSession {
  constructor(app, shapeId, handleId, commandId = "move_handle") {
    super(app);
    __publicField(this, "type", "handle" /* Handle */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "translatingHandle" /* TranslatingHandle */);
    __publicField(this, "commandId");
    __publicField(this, "topLeft");
    __publicField(this, "shiftKey", false);
    __publicField(this, "initialShape");
    __publicField(this, "handleId");
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      var _a, _b;
      const {
        initialShape,
        app: { currentPageId, currentPoint }
      } = this;
      const shape = this.app.getShape(initialShape.id);
      if (shape.isLocked)
        return void 0;
      const handles = shape.handles;
      const handleId = this.handleId;
      const delta = import_vec27.Vec.sub(currentPoint, handles[handleId].point);
      const handleChanges = {
        [handleId]: __spreadProps(__spreadValues({}, handles[handleId]), {
          point: import_vec27.Vec.sub(import_vec27.Vec.add(handles[handleId].point, delta), shape.point)
        })
      };
      const change = (_b = (_a = TLDR.getShapeUtil(shape)).onHandleChange) == null ? void 0 : _b.call(_a, shape, handleChanges);
      if (!change)
        return;
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: {
                [shape.id]: change
              }
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: {
                [initialShape.id]: initialShape
              }
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      return {
        id: this.commandId,
        before: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: {
                  [initialShape.id]: initialShape
                }
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: {
                  [initialShape.id]: TLDR.onSessionComplete(this.app.getShape(this.initialShape.id))
                }
              }
            }
          }
        }
      };
    });
    const { originPoint } = app;
    this.topLeft = [...originPoint];
    this.handleId = handleId;
    this.initialShape = this.app.getShape(shapeId);
    this.commandId = commandId;
  }
};

// src/state/sessions/RotateSession/RotateSession.ts
var import_core38 = require("@tldraw/core");
var import_vec28 = require("@tldraw/vec");
var RotateSession = class extends BaseSession {
  constructor(app) {
    super(app);
    __publicField(this, "type", "rotate" /* Rotate */);
    __publicField(this, "status", "transforming" /* Transforming */);
    __publicField(this, "performanceMode");
    __publicField(this, "delta", [0, 0]);
    __publicField(this, "commonBoundsCenter");
    __publicField(this, "initialAngle");
    __publicField(this, "initialShapes");
    __publicField(this, "changes", {});
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      const {
        commonBoundsCenter,
        initialShapes,
        app: { currentPageId, currentPoint, shiftKey }
      } = this;
      const shapes = {};
      let directionDelta = import_vec28.Vec.angle(commonBoundsCenter, currentPoint) - this.initialAngle;
      if (shiftKey) {
        directionDelta = import_core38.Utils.snapAngleToSegments(directionDelta, 24);
      }
      initialShapes.forEach(({ center, shape }) => {
        const { rotation = 0 } = shape;
        let shapeDelta = 0;
        if (shiftKey) {
          const snappedRotation = import_core38.Utils.snapAngleToSegments(rotation, 24);
          shapeDelta = snappedRotation - rotation;
        }
        const change = TLDR.getRotatedShapeMutation(shape, center, commonBoundsCenter, shiftKey ? directionDelta + shapeDelta : directionDelta);
        if (change) {
          shapes[shape.id] = change;
        }
      });
      this.changes = shapes;
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        initialShapes,
        app: { currentPageId }
      } = this;
      const shapes = {};
      initialShapes.forEach(({ shape }) => shapes[shape.id] = shape);
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        initialShapes,
        app: { currentPageId }
      } = this;
      const beforeShapes = {};
      const afterShapes = this.changes;
      initialShapes.forEach(({ shape: { id, point, rotation, handles } }) => {
        beforeShapes[id] = { point, rotation, handles };
      });
      return {
        id: "rotate",
        before: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            }
          }
        }
      };
    });
    const {
      app: { currentPageId, pageState, originPoint }
    } = this;
    const initialShapes = TLDR.getSelectedBranchSnapshot(app.state, currentPageId).filter((shape) => !shape.isLocked);
    if (initialShapes.length === 0) {
      throw Error("No selected shapes!");
    }
    if (app.rotationInfo.selectedIds === pageState.selectedIds) {
      if (app.rotationInfo.center === void 0) {
        throw Error("We should have a center for rotation!");
      }
      this.commonBoundsCenter = app.rotationInfo.center;
    } else {
      this.commonBoundsCenter = import_core38.Utils.getBoundsCenter(import_core38.Utils.getCommonBounds(initialShapes.map(TLDR.getBounds)));
      app.rotationInfo.selectedIds = pageState.selectedIds;
      app.rotationInfo.center = this.commonBoundsCenter;
    }
    this.initialShapes = initialShapes.filter((shape) => shape.children === void 0).map((shape) => {
      return {
        shape,
        center: this.app.getShapeUtil(shape).getCenter(shape)
      };
    });
    this.initialAngle = import_vec28.Vec.angle(this.commonBoundsCenter, originPoint);
  }
};

// src/state/sessions/TransformSession/TransformSession.ts
var import_core39 = require("@tldraw/core");
var import_vec29 = require("@tldraw/vec");
var TransformSession = class extends BaseSession {
  constructor(app, transformType = import_core39.TLBoundsCorner.BottomRight, isCreate = false) {
    super(app);
    this.transformType = transformType;
    this.isCreate = isCreate;
    __publicField(this, "type", "transform" /* Transform */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "transforming" /* Transforming */);
    __publicField(this, "scaleX", 1);
    __publicField(this, "scaleY", 1);
    __publicField(this, "initialShapes");
    __publicField(this, "initialShapeIds");
    __publicField(this, "initialSelectedIds");
    __publicField(this, "shapeBounds");
    __publicField(this, "hasUnlockedShapes");
    __publicField(this, "isAllAspectRatioLocked");
    __publicField(this, "initialCommonBounds");
    __publicField(this, "snapInfo", { state: "empty" });
    __publicField(this, "prevPoint", [0, 0]);
    __publicField(this, "speed", 1);
    __publicField(this, "start", () => {
      this.snapInfo = {
        state: "ready",
        bounds: this.app.shapes.filter((shape) => !this.initialShapeIds.includes(shape.id)).map((shape) => import_core39.Utils.getBoundsWithCenter(TLDR.getRotatedBounds(shape)))
      };
      return void 0;
    });
    __publicField(this, "update", () => {
      const {
        transformType,
        shapeBounds,
        initialCommonBounds,
        isAllAspectRatioLocked,
        app: {
          currentPageId,
          pageState: { camera },
          viewport,
          currentPoint,
          previousPoint,
          originPoint,
          shiftKey,
          altKey,
          metaKey,
          currentGrid,
          settings: { isSnapping, showGrid }
        }
      } = this;
      const shapes = {};
      const delta = altKey ? import_vec29.Vec.mul(import_vec29.Vec.sub(currentPoint, originPoint), 2) : import_vec29.Vec.sub(currentPoint, originPoint);
      let newBounds = import_core39.Utils.getTransformedBoundingBox(initialCommonBounds, transformType, delta, 0, shiftKey || isAllAspectRatioLocked);
      if (altKey) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), import_core39.Utils.centerBounds(newBounds, import_core39.Utils.getBoundsCenter(initialCommonBounds)));
      }
      if (showGrid) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), import_core39.Utils.snapBoundsToGrid(newBounds, currentGrid));
      }
      const speed = import_vec29.Vec.dist(currentPoint, previousPoint);
      const speedChange = speed - this.speed;
      this.speed = this.speed + speedChange * (speedChange > 1 ? 0.5 : 0.15);
      let snapLines = [];
      if ((isSnapping && !metaKey || !isSnapping && metaKey) && this.speed * camera.zoom < SLOW_SPEED && this.snapInfo.state === "ready") {
        const snapResult = import_core39.Utils.getSnapPoints(import_core39.Utils.getBoundsWithCenter(newBounds), this.snapInfo.bounds.filter((bounds) => import_core39.Utils.boundsContain(viewport, bounds) || import_core39.Utils.boundsCollide(viewport, bounds)), SNAP_DISTANCE / camera.zoom);
        if (snapResult) {
          snapLines = snapResult.snapLines;
          newBounds = import_core39.Utils.getTransformedBoundingBox(initialCommonBounds, transformType, import_vec29.Vec.sub(delta, snapResult.offset), 0, shiftKey || isAllAspectRatioLocked);
        }
      }
      this.scaleX = newBounds.scaleX;
      this.scaleY = newBounds.scaleY;
      shapeBounds.forEach(({ initialShape, initialShapeBounds, transformOrigin }) => {
        let newShapeBounds = import_core39.Utils.getRelativeTransformedBoundingBox(newBounds, initialCommonBounds, initialShapeBounds, this.scaleX < 0, this.scaleY < 0);
        if (showGrid) {
          newShapeBounds = import_core39.Utils.snapBoundsToGrid(newShapeBounds, currentGrid);
        }
        const afterShape = TLDR.transform(this.app.getShape(initialShape.id), newShapeBounds, {
          type: this.transformType,
          initialShape,
          scaleX: this.scaleX,
          scaleY: this.scaleY,
          transformOrigin
        });
        shapes[initialShape.id] = afterShape;
      });
      return {
        appState: {
          snapLines
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        shapeBounds,
        app: { currentPageId }
      } = this;
      const shapes = {};
      if (this.isCreate) {
        shapeBounds.forEach((shape) => shapes[shape.initialShape.id] = void 0);
      } else {
        shapeBounds.forEach((shape) => shapes[shape.initialShape.id] = shape.initialShape);
      }
      return {
        appState: {
          snapLines: []
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          },
          pageStates: {
            [currentPageId]: {
              selectedIds: this.isCreate ? [] : shapeBounds.map((shape) => shape.initialShape.id)
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        isCreate,
        shapeBounds,
        hasUnlockedShapes,
        app: { currentPageId }
      } = this;
      if (!hasUnlockedShapes)
        return;
      if (this.isCreate && import_vec29.Vec.dist(this.app.originPoint, this.app.currentPoint) < 2) {
        return this.cancel();
      }
      const beforeShapes = {};
      const afterShapes = {};
      let beforeSelectedIds;
      let afterSelectedIds;
      if (isCreate) {
        beforeSelectedIds = [];
        afterSelectedIds = [];
        shapeBounds.forEach(({ initialShape }) => {
          beforeShapes[initialShape.id] = void 0;
          afterShapes[initialShape.id] = this.app.getShape(initialShape.id);
        });
      } else {
        beforeSelectedIds = this.initialSelectedIds;
        afterSelectedIds = this.initialSelectedIds;
        shapeBounds.forEach(({ initialShape }) => {
          beforeShapes[initialShape.id] = initialShape;
          afterShapes[initialShape.id] = this.app.getShape(initialShape.id);
        });
      }
      return {
        id: "transform",
        before: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: beforeSelectedIds,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        },
        after: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: afterSelectedIds,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        }
      };
    });
    this.initialSelectedIds = [...this.app.selectedIds];
    this.app.rotationInfo.selectedIds = [...this.initialSelectedIds];
    this.initialShapes = TLDR.getSelectedBranchSnapshot(this.app.state, this.app.currentPageId).filter((shape) => !shape.isLocked);
    this.initialShapeIds = this.initialShapes.map((shape) => shape.id);
    this.hasUnlockedShapes = this.initialShapes.length > 0;
    this.isAllAspectRatioLocked = this.initialShapes.every((shape) => shape.isAspectRatioLocked || TLDR.getShapeUtil(shape).isAspectRatioLocked);
    const shapesBounds = Object.fromEntries(this.initialShapes.map((shape) => [shape.id, TLDR.getBounds(shape)]));
    const boundsArr = Object.values(shapesBounds);
    this.initialCommonBounds = import_core39.Utils.getCommonBounds(boundsArr);
    const initialInnerBounds = import_core39.Utils.getBoundsFromPoints(boundsArr.map(import_core39.Utils.getBoundsCenter));
    this.shapeBounds = this.initialShapes.map((shape) => {
      const initialShapeBounds = shapesBounds[shape.id];
      const ic = import_core39.Utils.getBoundsCenter(initialShapeBounds);
      const ix = (ic[0] - initialInnerBounds.minX) / initialInnerBounds.width;
      const iy = (ic[1] - initialInnerBounds.minY) / initialInnerBounds.height;
      return {
        initialShape: shape,
        initialShapeBounds,
        transformOrigin: [ix, iy]
      };
    });
  }
};

// src/state/sessions/TransformSingleSession/TransformSingleSession.ts
var import_core40 = require("@tldraw/core");
var import_vec30 = require("@tldraw/vec");
var TransformSingleSession = class extends BaseSession {
  constructor(app, id, transformType, isCreate = false) {
    super(app);
    __publicField(this, "type", "transformSingle" /* TransformSingle */);
    __publicField(this, "status", "transforming" /* Transforming */);
    __publicField(this, "performanceMode");
    __publicField(this, "transformType");
    __publicField(this, "scaleX", 1);
    __publicField(this, "scaleY", 1);
    __publicField(this, "isCreate");
    __publicField(this, "initialShape");
    __publicField(this, "initialShapeBounds");
    __publicField(this, "initialCommonBounds");
    __publicField(this, "snapInfo", { state: "empty" });
    __publicField(this, "prevPoint", [0, 0]);
    __publicField(this, "speed", 1);
    __publicField(this, "start", () => {
      this.snapInfo = {
        state: "ready",
        bounds: this.app.shapes.filter((shape) => shape.id !== this.initialShape.id).map((shape) => import_core40.Utils.getBoundsWithCenter(TLDR.getRotatedBounds(shape)))
      };
      return void 0;
    });
    __publicField(this, "update", () => {
      const {
        transformType,
        initialShape,
        initialShapeBounds,
        app: {
          settings: { isSnapping, showGrid },
          currentPageId,
          pageState: { camera },
          viewport,
          currentPoint,
          previousPoint,
          originPoint,
          currentGrid,
          shiftKey,
          altKey,
          metaKey
        }
      } = this;
      if (initialShape.isLocked)
        return void 0;
      const shapes = {};
      const delta = altKey ? import_vec30.Vec.mul(import_vec30.Vec.sub(currentPoint, originPoint), 2) : import_vec30.Vec.sub(currentPoint, originPoint);
      const shape = this.app.getShape(initialShape.id);
      const utils = TLDR.getShapeUtil(shape);
      let newBounds = import_core40.Utils.getTransformedBoundingBox(initialShapeBounds, transformType, delta, shape.rotation, shiftKey || shape.isAspectRatioLocked || utils.isAspectRatioLocked);
      if (altKey) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), import_core40.Utils.centerBounds(newBounds, import_core40.Utils.getBoundsCenter(initialShapeBounds)));
      }
      if (showGrid) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), import_core40.Utils.snapBoundsToGrid(newBounds, currentGrid));
      }
      const speed = import_vec30.Vec.dist(currentPoint, previousPoint);
      const speedChange = speed - this.speed;
      this.speed = this.speed + speedChange * (speedChange > 1 ? 0.5 : 0.15);
      let snapLines = [];
      if ((isSnapping && !metaKey || !isSnapping && metaKey) && !initialShape.rotation && this.speed * camera.zoom < SLOW_SPEED && this.snapInfo.state === "ready") {
        const snapResult = import_core40.Utils.getSnapPoints(import_core40.Utils.getBoundsWithCenter(newBounds), this.snapInfo.bounds.filter((bounds) => import_core40.Utils.boundsContain(viewport, bounds) || import_core40.Utils.boundsCollide(viewport, bounds)), SNAP_DISTANCE / camera.zoom);
        if (snapResult) {
          snapLines = snapResult.snapLines;
          newBounds = import_core40.Utils.getTransformedBoundingBox(initialShapeBounds, transformType, import_vec30.Vec.sub(delta, snapResult.offset), shape.rotation, shiftKey || shape.isAspectRatioLocked || utils.isAspectRatioLocked);
        }
      }
      const afterShape = TLDR.getShapeUtil(shape).transformSingle(shape, newBounds, {
        initialShape,
        type: this.transformType,
        scaleX: newBounds.scaleX,
        scaleY: newBounds.scaleY,
        transformOrigin: [0.5, 0.5]
      });
      if (afterShape) {
        shapes[shape.id] = afterShape;
      }
      if (showGrid && afterShape && afterShape.point) {
        afterShape.point = import_vec30.Vec.snap(afterShape.point, currentGrid);
      }
      return {
        appState: {
          snapLines
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      const shapes = {};
      if (this.isCreate) {
        shapes[initialShape.id] = void 0;
      } else {
        shapes[initialShape.id] = initialShape;
      }
      return {
        appState: {
          snapLines: []
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          },
          pageStates: {
            [currentPageId]: {
              selectedIds: this.isCreate ? [] : [initialShape.id]
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      if (initialShape.isLocked)
        return;
      if (this.isCreate && import_vec30.Vec.dist(this.app.originPoint, this.app.currentPoint) < 2) {
        return this.cancel();
      }
      const beforeShapes = {};
      const afterShapes = {};
      beforeShapes[initialShape.id] = this.isCreate ? void 0 : initialShape;
      afterShapes[initialShape.id] = TLDR.onSessionComplete(this.app.getShape(initialShape.id));
      return {
        id: "transform_single",
        before: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: this.isCreate ? [] : [initialShape.id],
                editingId: void 0,
                hoveredId: void 0
              }
            }
          }
        },
        after: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: [initialShape.id],
                editingId: void 0,
                hoveredId: void 0
              }
            }
          }
        }
      };
    });
    this.isCreate = isCreate;
    this.transformType = transformType;
    const shape = this.app.getShape(id);
    this.initialShape = shape;
    this.initialShapeBounds = TLDR.getBounds(shape);
    this.initialCommonBounds = TLDR.getRotatedBounds(shape);
    this.app.rotationInfo.selectedIds = [shape.id];
  }
};

// src/state/sessions/TranslateSession/TranslateSession.ts
var import_core41 = require("@tldraw/core");
var import_vec31 = require("@tldraw/vec");
var TranslateSession = class extends BaseSession {
  constructor(app, isCreate = false, link = false) {
    super(app);
    __publicField(this, "performanceMode");
    __publicField(this, "type", "translate" /* Translate */);
    __publicField(this, "status", "translating" /* Translating */);
    __publicField(this, "delta", [0, 0]);
    __publicField(this, "prev", [0, 0]);
    __publicField(this, "prevPoint", [0, 0]);
    __publicField(this, "speed", 1);
    __publicField(this, "cloneInfo", {
      state: "empty"
    });
    __publicField(this, "snapInfo", {
      state: "empty"
    });
    __publicField(this, "snapLines", []);
    __publicField(this, "isCloning", false);
    __publicField(this, "isCreate");
    __publicField(this, "link");
    __publicField(this, "initialIds");
    __publicField(this, "hasUnlockedShapes");
    __publicField(this, "initialSelectedIds");
    __publicField(this, "initialCommonBounds");
    __publicField(this, "initialShapes");
    __publicField(this, "initialParentChildren");
    __publicField(this, "bindingsToDelete");
    __publicField(this, "start", () => {
      const {
        bindingsToDelete,
        initialIds,
        app: { currentPageId, page }
      } = this;
      const allBounds = [];
      const otherBounds = [];
      Object.values(page.shapes).forEach((shape) => {
        const bounds = import_core41.Utils.getBoundsWithCenter(TLDR.getRotatedBounds(shape));
        allBounds.push(bounds);
        if (!initialIds.has(shape.id)) {
          otherBounds.push(bounds);
        }
      });
      this.snapInfo = {
        state: "ready",
        bounds: allBounds,
        others: otherBounds
      };
      if (bindingsToDelete.length === 0)
        return;
      const nextBindings = {};
      bindingsToDelete.forEach((binding) => nextBindings[binding.id] = void 0);
      return {
        document: {
          pages: {
            [currentPageId]: {
              bindings: nextBindings
            }
          }
        }
      };
    });
    __publicField(this, "update", () => {
      const {
        initialParentChildren,
        initialShapes,
        initialCommonBounds,
        bindingsToDelete,
        app: {
          pageState: { camera },
          settings: { isSnapping, showGrid },
          currentPageId,
          viewport,
          selectedIds,
          currentPoint,
          previousPoint,
          originPoint,
          altKey,
          shiftKey,
          metaKey,
          currentGrid
        }
      } = this;
      const nextBindings = {};
      const nextShapes = {};
      const nextPageState = {};
      let delta = import_vec31.Vec.sub(currentPoint, originPoint);
      let didChangeCloning = false;
      if (!this.isCreate) {
        if (altKey && !this.isCloning) {
          this.isCloning = true;
          didChangeCloning = true;
        } else if (!altKey && this.isCloning) {
          this.isCloning = false;
          didChangeCloning = true;
        }
      }
      if (shiftKey) {
        if (Math.abs(delta[0]) < Math.abs(delta[1])) {
          delta[0] = 0;
        } else {
          delta[1] = 0;
        }
      }
      const speed = import_vec31.Vec.dist(currentPoint, previousPoint);
      const change = speed - this.speed;
      this.speed = this.speed + change * (change > 1 ? 0.5 : 0.15);
      this.snapLines = [];
      if ((isSnapping && !metaKey || !isSnapping && metaKey) && this.speed * camera.zoom < SLOW_SPEED && this.snapInfo.state === "ready") {
        const snapResult = import_core41.Utils.getSnapPoints(import_core41.Utils.getBoundsWithCenter(showGrid ? import_core41.Utils.snapBoundsToGrid(import_core41.Utils.translateBounds(initialCommonBounds, delta), currentGrid) : import_core41.Utils.translateBounds(initialCommonBounds, delta)), (this.isCloning ? this.snapInfo.bounds : this.snapInfo.others).filter((bounds) => {
          return import_core41.Utils.boundsContain(viewport, bounds) || import_core41.Utils.boundsCollide(viewport, bounds);
        }), SNAP_DISTANCE / camera.zoom);
        if (snapResult) {
          this.snapLines = snapResult.snapLines;
          delta = import_vec31.Vec.sub(delta, snapResult.offset);
        }
      }
      this.prev = delta;
      if (this.isCloning) {
        if (didChangeCloning) {
          if (this.cloneInfo.state === "empty") {
            this.createCloneInfo();
          }
          if (this.cloneInfo.state === "empty") {
            throw Error;
          }
          const { clones, clonedBindings } = this.cloneInfo;
          this.isCloning = true;
          bindingsToDelete.forEach((binding) => nextBindings[binding.id] = binding);
          initialShapes.forEach((shape) => nextShapes[shape.id] = { point: shape.point });
          clones.forEach((clone) => {
            var _a;
            nextShapes[clone.id] = __spreadValues({}, clone);
            if (clone.parentId !== currentPageId && !selectedIds.includes(clone.parentId)) {
              const children = ((_a = nextShapes[clone.parentId]) == null ? void 0 : _a.children) || initialParentChildren[clone.parentId];
              if (!children.includes(clone.id)) {
                nextShapes[clone.parentId] = __spreadProps(__spreadValues({}, nextShapes[clone.parentId]), {
                  children: [...children, clone.id]
                });
              }
            }
          });
          for (const binding of clonedBindings) {
            nextBindings[binding.id] = binding;
          }
          nextPageState.selectedIds = clones.map((clone) => clone.id);
          clones.forEach((clone) => {
            nextShapes[clone.id] = __spreadProps(__spreadValues({}, clone), {
              point: showGrid ? import_vec31.Vec.snap(import_vec31.Vec.toFixed(import_vec31.Vec.add(clone.point, delta)), currentGrid) : import_vec31.Vec.toFixed(import_vec31.Vec.add(clone.point, delta))
            });
          });
        } else {
          if (this.cloneInfo.state === "empty")
            throw Error;
          const { clones } = this.cloneInfo;
          clones.forEach((clone) => {
            nextShapes[clone.id] = {
              point: showGrid ? import_vec31.Vec.snap(import_vec31.Vec.toFixed(import_vec31.Vec.add(clone.point, delta)), currentGrid) : import_vec31.Vec.toFixed(import_vec31.Vec.add(clone.point, delta))
            };
          });
        }
      } else {
        if (didChangeCloning) {
          if (this.cloneInfo.state === "empty")
            throw Error;
          const { clones, clonedBindings } = this.cloneInfo;
          this.isCloning = false;
          bindingsToDelete.forEach((binding) => nextBindings[binding.id] = void 0);
          clones.forEach((clone) => {
            if (clone.parentId !== currentPageId) {
              nextShapes[clone.parentId] = __spreadProps(__spreadValues({}, nextShapes[clone.parentId]), {
                children: initialParentChildren[clone.parentId]
              });
            }
          });
          clones.forEach((clone) => nextShapes[clone.id] = void 0);
          initialShapes.forEach((shape) => {
            nextShapes[shape.id] = {
              point: showGrid ? import_vec31.Vec.snap(import_vec31.Vec.toFixed(import_vec31.Vec.add(shape.point, delta)), currentGrid) : import_vec31.Vec.toFixed(import_vec31.Vec.add(shape.point, delta))
            };
          });
          for (const binding of clonedBindings) {
            nextBindings[binding.id] = void 0;
          }
          nextPageState.selectedIds = initialShapes.map((shape) => shape.id);
        } else {
          initialShapes.forEach((shape) => {
            nextShapes[shape.id] = {
              point: showGrid ? import_vec31.Vec.snap(import_vec31.Vec.toFixed(import_vec31.Vec.add(shape.point, delta)), currentGrid) : import_vec31.Vec.toFixed(import_vec31.Vec.add(shape.point, delta))
            };
          });
        }
      }
      return {
        appState: {
          snapLines: this.snapLines
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes,
              bindings: nextBindings
            }
          },
          pageStates: {
            [currentPageId]: nextPageState
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        initialShapes,
        initialSelectedIds,
        bindingsToDelete,
        app: { currentPageId }
      } = this;
      const nextBindings = {};
      const nextShapes = {};
      const nextPageState = {
        editingId: void 0,
        hoveredId: void 0
      };
      bindingsToDelete.forEach((binding) => nextBindings[binding.id] = binding);
      if (this.isCreate) {
        initialShapes.forEach(({ id }) => nextShapes[id] = void 0);
        nextPageState.selectedIds = [];
      } else {
        initialShapes.forEach(({ id, point }) => nextShapes[id] = __spreadProps(__spreadValues({}, nextShapes[id]), { point }));
        nextPageState.selectedIds = initialSelectedIds;
      }
      if (this.cloneInfo.state === "ready") {
        const { clones, clonedBindings } = this.cloneInfo;
        clones.forEach((clone) => nextShapes[clone.id] = void 0);
        clonedBindings.forEach((binding) => nextBindings[binding.id] = void 0);
      }
      return {
        appState: {
          snapLines: []
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes,
              bindings: nextBindings
            }
          },
          pageStates: {
            [currentPageId]: nextPageState
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        initialShapes,
        initialParentChildren,
        bindingsToDelete,
        app: { currentPageId }
      } = this;
      const beforeBindings = {};
      const beforeShapes = {};
      const afterBindings = {};
      const afterShapes = {};
      if (this.isCloning) {
        if (this.cloneInfo.state === "empty") {
          this.createCloneInfo();
        }
        if (this.cloneInfo.state !== "ready")
          throw Error;
        const { clones, clonedBindings } = this.cloneInfo;
        clones.forEach((clone) => {
          beforeShapes[clone.id] = void 0;
          afterShapes[clone.id] = this.app.getShape(clone.id);
          if (clone.parentId !== currentPageId) {
            beforeShapes[clone.parentId] = __spreadProps(__spreadValues({}, beforeShapes[clone.parentId]), {
              children: initialParentChildren[clone.parentId]
            });
            afterShapes[clone.parentId] = __spreadProps(__spreadValues({}, afterShapes[clone.parentId]), {
              children: this.app.getShape(clone.parentId).children
            });
          }
        });
        clonedBindings.forEach((binding) => {
          beforeBindings[binding.id] = void 0;
          afterBindings[binding.id] = this.app.getBinding(binding.id);
        });
      } else {
        initialShapes.forEach((shape) => {
          beforeShapes[shape.id] = this.isCreate ? void 0 : __spreadProps(__spreadValues({}, beforeShapes[shape.id]), {
            point: shape.point
          });
          afterShapes[shape.id] = __spreadValues(__spreadValues({}, afterShapes[shape.id]), this.isCreate ? this.app.getShape(shape.id) : { point: this.app.getShape(shape.id).point });
        });
      }
      bindingsToDelete.forEach((binding) => {
        beforeBindings[binding.id] = binding;
        for (const id of [binding.toId, binding.fromId]) {
          const shape = this.app.getShape(id);
          if (!shape.handles)
            continue;
          Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
            beforeShapes[id] = __spreadProps(__spreadValues({}, beforeShapes[id]), { handles: {} });
            afterShapes[id] = __spreadProps(__spreadValues({}, afterShapes[id]), { handles: {} });
            beforeShapes[id].handles[handle.id] = {
              bindingId: binding.id
            };
            afterShapes[id].handles[handle.id] = {
              bindingId: void 0
            };
          });
        }
      });
      return {
        id: "translate",
        before: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes,
                bindings: beforeBindings
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: this.isCreate ? [] : [...this.initialSelectedIds]
              }
            }
          }
        },
        after: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes,
                bindings: afterBindings
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: [...this.app.selectedIds]
              }
            }
          }
        }
      };
    });
    __publicField(this, "createCloneInfo", () => {
      const {
        initialShapes,
        initialParentChildren,
        app: { selectedIds, currentPageId, page }
      } = this;
      const cloneMap = {};
      const clonedBindingsMap = {};
      const clonedBindings = [];
      const clones = [];
      initialShapes.forEach((shape) => {
        const newId = import_core41.Utils.uniqueId();
        initialParentChildren[newId] = initialParentChildren[shape.id];
        cloneMap[shape.id] = newId;
        const clone = __spreadProps(__spreadValues({}, import_core41.Utils.deepClone(shape)), {
          id: newId,
          parentId: shape.parentId,
          childIndex: TLDR.getChildIndexAbove(this.app.state, shape.id, currentPageId)
        });
        if (clone.type === "video" /* Video */) {
          const element = document.getElementById(shape.id + "_video");
          if (element)
            clone.currentTime = (element.currentTime + 16) % element.duration;
        }
        clones.push(clone);
      });
      clones.forEach((clone) => {
        if (clone.children !== void 0) {
          clone.children = clone.children.map((childId) => cloneMap[childId]);
        }
      });
      clones.forEach((clone) => {
        if (selectedIds.includes(clone.parentId)) {
          clone.parentId = cloneMap[clone.parentId];
        }
      });
      const clonedShapeIds = new Set(Object.keys(cloneMap));
      Object.values(page.bindings).filter((binding) => clonedShapeIds.has(binding.fromId) || clonedShapeIds.has(binding.toId)).forEach((binding) => {
        if (clonedShapeIds.has(binding.fromId)) {
          if (clonedShapeIds.has(binding.toId)) {
            const cloneId = import_core41.Utils.uniqueId();
            const cloneBinding = __spreadProps(__spreadValues({}, import_core41.Utils.deepClone(binding)), {
              id: cloneId,
              fromId: cloneMap[binding.fromId] || binding.fromId,
              toId: cloneMap[binding.toId] || binding.toId
            });
            clonedBindingsMap[binding.id] = cloneId;
            clonedBindings.push(cloneBinding);
          }
        }
      });
      clones.forEach((clone) => {
        if (clone.handles) {
          if (clone.handles) {
            for (const id in clone.handles) {
              const handle = clone.handles[id];
              handle.bindingId = handle.bindingId ? clonedBindingsMap[handle.bindingId] : void 0;
            }
          }
        }
      });
      clones.forEach((clone) => {
        if (page.shapes[clone.id]) {
          throw Error("uh oh, we didn't clone correctly");
        }
      });
      this.cloneInfo = {
        state: "ready",
        clones,
        cloneMap,
        clonedBindings
      };
    });
    this.isCreate = isCreate;
    this.link = link;
    const { currentPageId, selectedIds, page } = this.app;
    this.initialSelectedIds = [...selectedIds];
    const selectedShapes = (link ? TLDR.getLinkedShapeIds(this.app.state, currentPageId, link, false) : selectedIds).map((id) => this.app.getShape(id)).filter((shape) => !shape.isLocked);
    const selectedShapeIds = new Set(selectedShapes.map((shape) => shape.id));
    this.hasUnlockedShapes = selectedShapes.length > 0;
    this.initialShapes = Array.from(new Set(selectedShapes.filter((shape) => !selectedShapeIds.has(shape.parentId)).flatMap((shape) => {
      return shape.children ? [shape, ...shape.children.map((childId) => this.app.getShape(childId))] : [shape];
    })).values());
    this.initialIds = new Set(this.initialShapes.map((shape) => shape.id));
    this.bindingsToDelete = [];
    Object.values(page.bindings).filter((binding) => this.initialIds.has(binding.fromId) || this.initialIds.has(binding.toId)).forEach((binding) => {
      if (this.initialIds.has(binding.fromId)) {
        if (!this.initialIds.has(binding.toId)) {
          this.bindingsToDelete.push(binding);
        }
      }
    });
    this.initialParentChildren = {};
    this.initialShapes.map((s) => s.parentId).filter((id) => id !== page.id).forEach((id) => {
      this.initialParentChildren[id] = this.app.getShape(id).children;
    });
    this.initialCommonBounds = import_core41.Utils.getCommonBounds(this.initialShapes.map(TLDR.getRotatedBounds));
    this.app.rotationInfo.selectedIds = [...this.app.selectedIds];
  }
};

// src/state/sessions/EraseSession/EraseSession.ts
var import_vec32 = require("@tldraw/vec");
var EraseSession = class extends BaseSession {
  constructor(app) {
    super(app);
    __publicField(this, "type", "draw" /* Draw */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "creating" /* Creating */);
    __publicField(this, "isLocked");
    __publicField(this, "lockedDirection");
    __publicField(this, "erasedShapes", /* @__PURE__ */ new Set());
    __publicField(this, "erasedBindings", /* @__PURE__ */ new Set());
    __publicField(this, "initialSelectedShapes");
    __publicField(this, "erasableShapes");
    __publicField(this, "prevPoint");
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      const { page, shiftKey, originPoint, currentPoint } = this.app;
      if (shiftKey) {
        if (!this.isLocked && import_vec32.Vec.dist(originPoint, currentPoint) > 4) {
          if (!this.lockedDirection) {
            const delta = import_vec32.Vec.sub(currentPoint, originPoint);
            this.lockedDirection = delta[0] > delta[1] ? "horizontal" : "vertical";
          }
          this.isLocked = true;
        }
      } else if (this.isLocked) {
        this.isLocked = false;
      }
      if (this.isLocked) {
        if (this.lockedDirection === "vertical") {
          currentPoint[0] = originPoint[0];
        } else {
          currentPoint[1] = originPoint[1];
        }
      }
      const newPoint = import_vec32.Vec.toFixed(import_vec32.Vec.add(originPoint, import_vec32.Vec.sub(currentPoint, originPoint)));
      const deletedShapeIds = /* @__PURE__ */ new Set([]);
      this.erasableShapes.forEach((shape) => {
        if (this.erasedShapes.has(shape))
          return;
        if (this.app.getShapeUtil(shape).hitTestLineSegment(shape, this.prevPoint, newPoint)) {
          this.erasedShapes.add(shape);
          deletedShapeIds.add(shape.id);
          if (shape.children !== void 0) {
            for (const childId of shape.children) {
              this.erasedShapes.add(this.app.getShape(childId));
              deletedShapeIds.add(childId);
            }
          }
        }
      });
      Object.values(page.bindings).forEach((binding) => {
        for (const id of [binding.toId, binding.fromId]) {
          if (deletedShapeIds.has(id)) {
            this.erasedBindings.add(binding);
          }
        }
      });
      this.erasedShapes.forEach((shape) => {
        if (!this.app.getShape(shape.id)) {
          this.erasedShapes.delete(shape);
          this.erasableShapes.delete(shape);
          deletedShapeIds.delete(shape.id);
        }
      });
      const erasedShapes = Array.from(this.erasedShapes.values());
      this.prevPoint = newPoint;
      return {
        document: {
          pages: {
            [page.id]: {
              shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, { isGhost: true }]))
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const { page } = this.app;
      this.erasedShapes.forEach((shape) => {
        if (!this.app.getShape(shape.id)) {
          this.erasedShapes.delete(shape);
          this.erasableShapes.delete(shape);
        }
      });
      const erasedShapes = Array.from(this.erasedShapes.values());
      return {
        document: {
          pages: {
            [page.id]: {
              shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, { isGhost: false }]))
            }
          },
          pageStates: {
            [page.id]: {
              selectedIds: this.initialSelectedShapes.map((shape) => shape.id)
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const { page } = this.app;
      this.erasedShapes.forEach((shape) => {
        if (!this.app.getShape(shape.id)) {
          this.erasedShapes.delete(shape);
          this.erasableShapes.delete(shape);
        }
      });
      this.erasedBindings.forEach((binding) => {
        if (!this.app.getBinding(binding.id)) {
          this.erasedBindings.delete(binding);
        }
      });
      const erasedShapes = Array.from(this.erasedShapes.values());
      const erasedBindings = Array.from(this.erasedBindings.values());
      const erasedShapeIds = erasedShapes.map((shape) => shape.id);
      const erasedBindingIds = erasedBindings.map((binding) => binding.id);
      const before = {
        shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, shape])),
        bindings: Object.fromEntries(erasedBindings.map((binding) => [binding.id, binding]))
      };
      const after = {
        shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, void 0])),
        bindings: Object.fromEntries(erasedBindings.map((binding) => [binding.id, void 0]))
      };
      this.app.shapes.forEach((shape) => {
        if (shape.handles && !after.shapes[shape.id]) {
          Object.values(shape.handles).forEach((handle) => {
            var _a, _b;
            if (handle.bindingId && erasedBindingIds.includes(handle.bindingId)) {
              before.shapes[shape.id] = __spreadProps(__spreadValues({}, before.shapes[shape.id]), {
                handles: __spreadProps(__spreadValues({}, (_a = before.shapes[shape.id]) == null ? void 0 : _a.handles), {
                  [handle.id]: handle
                })
              });
              if (!erasedShapeIds.includes(shape.id)) {
                after.shapes[shape.id] = __spreadProps(__spreadValues({}, after.shapes[shape.id]), {
                  handles: __spreadProps(__spreadValues({}, (_b = after.shapes[shape.id]) == null ? void 0 : _b.handles), {
                    [handle.id]: __spreadProps(__spreadValues({}, handle), {
                      bindingId: void 0
                    })
                  })
                });
              }
            }
          });
        }
      });
      return {
        id: "erase",
        before: {
          document: {
            pages: {
              [page.id]: before
            },
            pageStates: {
              [page.id]: {
                selectedIds: this.initialSelectedShapes.filter((shape) => !!this.app.getShape(shape.id)).map((shape) => shape.id)
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [page.id]: after
            },
            pageStates: {
              [page.id]: {
                selectedIds: this.initialSelectedShapes.filter((shape) => !!this.app.getShape(shape.id)).filter((shape) => !erasedShapeIds.includes(shape.id)).map((shape) => shape.id)
              }
            }
          }
        }
      };
    });
    this.prevPoint = [...app.originPoint];
    this.initialSelectedShapes = this.app.selectedIds.map((id) => this.app.getShape(id));
    this.erasableShapes = new Set(this.app.shapes.filter((shape) => !shape.isLocked));
  }
};

// src/state/sessions/GridSession/GridSession.ts
var import_core42 = require("@tldraw/core");
var import_vec33 = require("@tldraw/vec");
var GridSession = class extends BaseSession {
  constructor(app, id) {
    super(app);
    __publicField(this, "type", "grid" /* Grid */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "translating" /* Translating */);
    __publicField(this, "shape");
    __publicField(this, "bounds");
    __publicField(this, "initialSelectedIds");
    __publicField(this, "initialSiblings");
    __publicField(this, "grid", {});
    __publicField(this, "columns", 1);
    __publicField(this, "rows", 1);
    __publicField(this, "isCopying", false);
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      const { currentPageId, altKey, shiftKey, currentPoint } = this.app;
      const nextShapes = {};
      const nextPageState = {};
      const center = import_core42.Utils.getBoundsCenter(this.bounds);
      const offset = import_vec33.Vec.sub(currentPoint, center);
      if (shiftKey) {
        if (Math.abs(offset[0]) < Math.abs(offset[1])) {
          offset[0] = 0;
        } else {
          offset[1] = 0;
        }
      }
      const gapX = this.bounds.width + 32;
      const gapY = this.bounds.height + 32;
      const columns = Math.ceil(offset[0] / gapX);
      const rows = Math.ceil(offset[1] / gapY);
      const minX = Math.min(columns, 0);
      const minY = Math.min(rows, 0);
      const maxX = Math.max(columns, 1);
      const maxY = Math.max(rows, 1);
      const inGrid = /* @__PURE__ */ new Set();
      const isCopying = altKey;
      if (isCopying !== this.isCopying) {
        Object.values(this.grid).filter((id) => id !== this.shape.id).forEach((id) => nextShapes[id] = void 0);
        this.grid = { "0_0": this.shape.id };
        this.isCopying = isCopying;
      }
      for (let x = minX; x < maxX; x++) {
        for (let y = minY; y < maxY; y++) {
          const position = `${x}_${y}`;
          inGrid.add(position);
          if (this.grid[position])
            continue;
          if (x === 0 && y === 0)
            continue;
          const clone = this.getClone(import_vec33.Vec.add(this.shape.point, [x * gapX, y * gapY]), isCopying);
          nextShapes[clone.id] = clone;
          this.grid[position] = clone.id;
        }
      }
      Object.entries(this.grid).forEach(([position, id]) => {
        if (!inGrid.has(position)) {
          nextShapes[id] = void 0;
          delete this.grid[position];
        }
      });
      if (Object.values(nextShapes).length === 0)
        return;
      if (this.initialSiblings) {
        nextShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, ...Object.values(this.grid)]
        };
      }
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes
            }
          },
          pageStates: {
            [currentPageId]: nextPageState
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const { currentPageId } = this.app;
      const nextShapes = {};
      Object.values(this.grid).forEach((id) => {
        nextShapes[id] = void 0;
      });
      nextShapes[this.shape.id] = __spreadProps(__spreadValues({}, nextShapes[this.shape.id]), { point: this.shape.point });
      if (this.initialSiblings) {
        nextShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, this.shape.id]
        };
      }
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes
            }
          },
          pageStates: {
            [currentPageId]: {
              selectedIds: [this.shape.id]
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const { currentPageId } = this.app;
      const beforeShapes = {};
      const afterShapes = {};
      const afterSelectedIds = [];
      Object.values(this.grid).forEach((id) => {
        beforeShapes[id] = void 0;
        afterShapes[id] = this.app.getShape(id);
        afterSelectedIds.push(id);
      });
      beforeShapes[this.shape.id] = this.shape;
      if (this.initialSiblings) {
        beforeShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, this.shape.id]
        };
        afterShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, ...Object.values(this.grid)]
        };
      }
      if (afterSelectedIds.length === 1)
        return;
      return {
        id: "grid",
        before: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: [],
                hoveredId: void 0
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: afterSelectedIds,
                hoveredId: void 0
              }
            }
          }
        }
      };
    });
    __publicField(this, "getClone", (point, copy) => {
      const clone = __spreadProps(__spreadValues({}, this.shape), {
        id: import_core42.Utils.uniqueId(),
        point
      });
      if (!copy) {
        if (clone.type === "sticky" /* Sticky */) {
          clone.text = "";
        }
      }
      return clone;
    });
    var _a;
    this.shape = this.app.getShape(id);
    this.grid["0_0"] = this.shape.id;
    this.bounds = this.app.getShapeBounds(id);
    this.initialSelectedIds = [...this.app.selectedIds];
    if (this.shape.parentId !== this.app.currentPageId) {
      this.initialSiblings = (_a = this.app.getShape(this.shape.parentId).children) == null ? void 0 : _a.filter((id2) => id2 !== this.shape.id);
    }
  }
};

// src/state/sessions/index.ts
var sessions = {
  ["arrow" /* Arrow */]: ArrowSession,
  ["brush" /* Brush */]: BrushSession,
  ["draw" /* Draw */]: DrawSession,
  ["erase" /* Erase */]: EraseSession,
  ["handle" /* Handle */]: HandleSession,
  ["rotate" /* Rotate */]: RotateSession,
  ["transform" /* Transform */]: TransformSession,
  ["transformSingle" /* TransformSingle */]: TransformSingleSession,
  ["translate" /* Translate */]: TranslateSession,
  ["grid" /* Grid */]: GridSession
};
var getSession = (type) => {
  return sessions[type];
};

// src/state/tools/SelectTool/SelectTool.ts
var import_core44 = require("@tldraw/core");

// src/state/tools/BaseTool.ts
var import_core43 = require("@tldraw/core");
var BaseTool = class extends TDEventHandler {
  constructor(app) {
    super();
    this.app = app;
    __publicField(this, "type", "select");
    __publicField(this, "previous");
    __publicField(this, "status", "idle" /* Idle */);
    __publicField(this, "setStatus", (status) => {
      this.status = status;
      this.app.setStatus(this.status);
    });
    __publicField(this, "onEnter", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onExit", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onCancel", () => {
      if (this.status === "idle" /* Idle */) {
        this.app.selectTool("select");
      } else {
        this.setStatus("idle" /* Idle */);
      }
      this.app.cancelSession();
    });
    __publicField(this, "getNextChildIndex", () => {
      const {
        shapes,
        appState: { currentPageId }
      } = this.app;
      return shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === currentPageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
    });
    __publicField(this, "onPinchStart", () => {
      this.app.cancelSession();
      this.setStatus("pinching" /* Pinching */);
    });
    __publicField(this, "onPinchEnd", () => {
      if (import_core43.Utils.isMobileSafari()) {
        this.app.undoSelect();
      }
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onPinch", (info, e) => {
      var _a;
      if (this.status !== "pinching")
        return;
      if (isNaN(info.delta[0]) || isNaN(info.delta[1]))
        return;
      this.app.pinchZoom(info.point, info.delta, info.delta[2]);
      (_a = this.onPointerMove) == null ? void 0 : _a.call(this, info, e);
    });
    __publicField(this, "onKeyDown", (key) => {
      if (key === "Escape") {
        this.onCancel();
        return;
      }
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    });
    __publicField(this, "onKeyUp", (key) => {
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    });
    __publicField(this, "onPointerMove", () => {
      if (this.status === "creating" /* Creating */) {
        this.app.updateSession();
      }
    });
    __publicField(this, "onPointerUp", () => {
      if (this.status === "creating" /* Creating */) {
        this.app.completeSession();
        const { isToolLocked } = this.app.appState;
        if (!isToolLocked) {
          this.app.selectTool("select");
        }
      }
      this.setStatus("idle" /* Idle */);
    });
  }
};

// src/state/tools/SelectTool/SelectTool.ts
var import_vec34 = __toESM(require("@tldraw/vec"));
var SelectTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "select");
    __publicField(this, "pointedId");
    __publicField(this, "selectedGroupId");
    __publicField(this, "pointedHandleId");
    __publicField(this, "pointedBoundsHandle");
    __publicField(this, "pointedLinkHandleId");
    __publicField(this, "onEnter", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onExit", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "clonePaint", (point) => {
      if (this.app.selectedIds.length === 0)
        return;
      const shapes = this.app.selectedIds.map((id) => this.app.getShape(id));
      const bounds = import_core44.Utils.expandBounds(import_core44.Utils.getCommonBounds(shapes.map(TLDR.getBounds)), 16);
      const center = import_core44.Utils.getBoundsCenter(bounds);
      const size = [bounds.width, bounds.height];
      const gridPoint = [
        center[0] + size[0] * Math.floor((point[0] + size[0] / 2 - center[0]) / size[0]),
        center[1] + size[1] * Math.floor((point[1] + size[1] / 2 - center[1]) / size[1])
      ];
      const centeredBounds = import_core44.Utils.centerBounds(bounds, gridPoint);
      const hit = this.app.shapes.some((shape) => TLDR.getShapeUtil(shape).hitTestBounds(shape, centeredBounds));
      if (!hit) {
        this.app.duplicate(this.app.selectedIds, gridPoint);
      }
    });
    __publicField(this, "getShapeClone", (id, side) => {
      const shape = this.app.getShape(id);
      const utils = TLDR.getShapeUtil(shape);
      if (utils.canClone) {
        const bounds = utils.getBounds(shape);
        const center = utils.getCenter(shape);
        let point = {
          top: [bounds.minX, bounds.minY - (bounds.height + CLONING_DISTANCE)],
          right: [bounds.maxX + CLONING_DISTANCE, bounds.minY],
          bottom: [bounds.minX, bounds.maxY + CLONING_DISTANCE],
          left: [bounds.minX - (bounds.width + CLONING_DISTANCE), bounds.minY],
          topLeft: [
            bounds.minX - (bounds.width + CLONING_DISTANCE),
            bounds.minY - (bounds.height + CLONING_DISTANCE)
          ],
          topRight: [
            bounds.maxX + CLONING_DISTANCE,
            bounds.minY - (bounds.height + CLONING_DISTANCE)
          ],
          bottomLeft: [
            bounds.minX - (bounds.width + CLONING_DISTANCE),
            bounds.maxY + CLONING_DISTANCE
          ],
          bottomRight: [bounds.maxX + CLONING_DISTANCE, bounds.maxY + CLONING_DISTANCE]
        }[side];
        if (shape.rotation !== 0) {
          const newCenter = import_vec34.default.add(point, [bounds.width / 2, bounds.height / 2]);
          const rotatedCenter = import_vec34.default.rotWith(newCenter, center, shape.rotation || 0);
          point = import_vec34.default.sub(rotatedCenter, [bounds.width / 2, bounds.height / 2]);
        }
        const id2 = import_core44.Utils.uniqueId();
        const clone = __spreadProps(__spreadValues({}, shape), {
          id: id2,
          point
        });
        if (clone.type === "sticky" /* Sticky */) {
          clone.text = "";
        }
        return clone;
      }
      return;
    });
    __publicField(this, "onCancel", () => {
      if (this.app.pageState.editingId) {
        this.app.setEditingId();
      } else {
        this.selectNone();
      }
      this.app.cancelSession();
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onKeyDown", (key, info, e) => {
      switch (key) {
        case "Escape": {
          this.onCancel();
          break;
        }
        case "Tab": {
          if (!this.app.pageState.editingId && this.status === "idle" /* Idle */ && this.app.selectedIds.length === 1) {
            const [selectedId] = this.app.selectedIds;
            const clonedShape = this.getShapeClone(selectedId, "right");
            if (clonedShape) {
              this.app.createShapes(clonedShape);
              this.setStatus("idle" /* Idle */);
              if (clonedShape.type === "sticky" /* Sticky */) {
                this.app.select(clonedShape.id);
                this.app.setEditingId(clonedShape.id);
              }
            }
          }
          break;
        }
        case "Meta":
        case "Control":
        case "Alt": {
          this.app.updateSession();
          break;
        }
        case "Enter": {
          const { pageState } = this.app;
          if (pageState.selectedIds.length === 1 && !pageState.editingId) {
            this.app.setEditingId(pageState.selectedIds[0]);
            e.preventDefault();
          }
        }
      }
    });
    __publicField(this, "onKeyUp", (key, info) => {
      if (this.status === "clonePainting" /* ClonePainting */ && !(info.altKey && info.shiftKey)) {
        this.setStatus("idle" /* Idle */);
        return;
      }
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    });
    __publicField(this, "onPointerMove", (info, e) => {
      const { originPoint, currentPoint } = this.app;
      switch (this.status) {
        case "pointingBoundsHandle" /* PointingBoundsHandle */: {
          if (!this.pointedBoundsHandle)
            throw Error("No pointed bounds handle");
          if (import_vec34.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
            if (this.pointedBoundsHandle === "rotate") {
              this.setStatus("rotating" /* Rotating */);
              this.app.startSession("rotate" /* Rotate */);
            } else if (this.pointedBoundsHandle === "center" || this.pointedBoundsHandle === "left" || this.pointedBoundsHandle === "right") {
              this.setStatus("translating" /* Translating */);
              this.app.startSession("translate" /* Translate */, false, this.pointedBoundsHandle);
            } else {
              this.setStatus("transforming" /* Transforming */);
              const idsToTransform = this.app.selectedIds.flatMap((id) => TLDR.getDocumentBranch(this.app.state, id, this.app.currentPageId));
              if (idsToTransform.length === 1) {
                this.app.startSession("transformSingle" /* TransformSingle */, idsToTransform[0], this.pointedBoundsHandle);
              } else {
                this.app.startSession("transform" /* Transform */, this.pointedBoundsHandle);
              }
            }
            this.app.updateSession();
          }
          break;
        }
        case "pointingCanvas" /* PointingCanvas */: {
          if (import_vec34.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
            this.app.startSession("brush" /* Brush */);
            this.setStatus("brushing" /* Brushing */);
          }
          break;
        }
        case "pointingClone" /* PointingClone */: {
          if (import_vec34.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
            this.setStatus("translatingClone" /* TranslatingClone */);
            this.app.startSession("translate" /* Translate */);
            this.app.updateSession();
          }
          break;
        }
        case "pointingBounds" /* PointingBounds */: {
          if (import_vec34.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
            this.setStatus("translating" /* Translating */);
            this.app.startSession("translate" /* Translate */);
            this.app.updateSession();
          }
          break;
        }
        case "pointingHandle" /* PointingHandle */: {
          if (!this.pointedHandleId)
            throw Error("No pointed handle");
          if (import_vec34.default.dist(originPoint, currentPoint) > DEAD_ZONE) {
            this.setStatus("translatingHandle" /* TranslatingHandle */);
            const selectedShape = this.app.getShape(this.app.selectedIds[0]);
            if (selectedShape) {
              if (this.pointedHandleId === "bend") {
                this.app.startSession("handle" /* Handle */, selectedShape.id, this.pointedHandleId);
                this.app.updateSession();
              } else {
                this.app.startSession("arrow" /* Arrow */, selectedShape.id, this.pointedHandleId, false);
                this.app.updateSession();
              }
            }
          }
          break;
        }
        case "clonePainting" /* ClonePainting */: {
          this.clonePaint(currentPoint);
          break;
        }
        default: {
          if (this.app.session) {
            this.app.updateSession();
            break;
          }
        }
      }
    });
    __publicField(this, "onPointerDown", (info, e) => {
      if (info.target === "canvas" && this.status === "idle" /* Idle */) {
        const { currentPoint } = this.app;
        if (info.spaceKey && e.buttons === 1)
          return;
        if (this.status === "idle" /* Idle */ && info.altKey && info.shiftKey) {
          this.setStatus("clonePainting" /* ClonePainting */);
          this.clonePaint(currentPoint);
          return;
        }
        if (!info.shiftKey) {
          this.app.onShapeBlur();
          if (info.altKey && this.app.selectedIds.length > 0) {
            this.app.duplicate(this.app.selectedIds, currentPoint);
            return;
          }
          this.selectNone();
        }
        this.setStatus("pointingCanvas" /* PointingCanvas */);
      }
    });
    __publicField(this, "onPointerUp", (info) => {
      if (this.status === "translatingClone" /* TranslatingClone */ || this.status === "pointingClone" /* PointingClone */) {
        if (this.pointedId) {
          this.app.completeSession();
          this.app.setEditingId(this.pointedId);
        }
        this.setStatus("idle" /* Idle */);
        this.pointedId = void 0;
        return;
      }
      if (this.status === "pointingBounds" /* PointingBounds */) {
        if (info.target === "bounds") {
          this.selectNone();
        } else if (this.app.isSelected(info.target)) {
          if (info.shiftKey) {
            if (this.pointedId !== info.target) {
              this.deselect(info.target);
            }
          } else {
            if (this.pointedId !== info.target && this.app.selectedIds.length > 1) {
              this.select(info.target);
            }
          }
        } else if (this.pointedId === info.target) {
          if (this.app.getShape(info.target).isLocked)
            return;
          if (info.shiftKey) {
            this.pushSelect(info.target);
          } else {
            this.select(info.target);
          }
        }
      }
      this.app.completeSession();
      this.setStatus("idle" /* Idle */);
      this.pointedBoundsHandle = void 0;
      this.pointedHandleId = void 0;
      this.pointedId = void 0;
    });
    __publicField(this, "onDoubleClickCanvas", () => {
    });
    __publicField(this, "onPointShape", (info, e) => {
      if (info.spaceKey && e.buttons === 1)
        return;
      if (this.app.getShape(info.target).isLocked)
        return;
      const { editingId, hoveredId } = this.app.pageState;
      if (editingId && info.target !== editingId) {
        this.app.onShapeBlur();
      }
      if ((this.status === "idle" /* Idle */ || this.status === "pointingBounds" /* PointingBounds */) && info.metaKey && info.shiftKey && hoveredId) {
        this.pointedId = hoveredId;
        if (this.app.isSelected(hoveredId)) {
          this.deselect(hoveredId);
        } else {
          this.pushSelect(hoveredId);
          this.setStatus("pointingBounds" /* PointingBounds */);
        }
        return;
      }
      if (this.status === "pointingBounds" /* PointingBounds */) {
        const { parentId } = this.app.getShape(info.target);
        this.pointedId = parentId === this.app.currentPageId ? info.target : parentId;
        return;
      }
      if (this.status === "idle" /* Idle */) {
        this.setStatus("pointingBounds" /* PointingBounds */);
        if (info.metaKey) {
          if (!info.shiftKey) {
            this.selectNone();
          }
          this.app.startSession("brush" /* Brush */);
          this.setStatus("brushing" /* Brushing */);
          return;
        }
        let shapeIdToSelect;
        const { parentId } = this.app.getShape(info.target);
        if (parentId === this.app.currentPageId) {
          shapeIdToSelect = info.target;
          this.selectedGroupId = void 0;
        } else {
          if (parentId === this.selectedGroupId) {
            shapeIdToSelect = info.target;
          } else {
            shapeIdToSelect = parentId;
            this.selectedGroupId = void 0;
          }
        }
        if (!this.app.isSelected(shapeIdToSelect)) {
          this.pointedId = shapeIdToSelect;
          if (info.shiftKey) {
            this.pushSelect(shapeIdToSelect);
          } else {
            this.select(shapeIdToSelect);
          }
        }
      }
    });
    __publicField(this, "onDoubleClickShape", (info) => {
      const shape = this.app.getShape(info.target);
      if (shape.isLocked) {
        this.app.select(info.target);
        return;
      }
      if (TLDR.getShapeUtil(shape.type).canEdit && (shape.parentId === this.app.currentPageId || shape.parentId === this.selectedGroupId)) {
        this.app.setEditingId(info.target);
      }
      if (shape.parentId !== this.app.currentPageId) {
        this.selectedGroupId = shape.parentId;
      }
      this.app.select(info.target);
    });
    __publicField(this, "onRightPointShape", (info) => {
      if (!this.app.isSelected(info.target)) {
        this.app.select(info.target);
      }
    });
    __publicField(this, "onHoverShape", (info) => {
      this.app.setHoveredId(info.target);
    });
    __publicField(this, "onUnhoverShape", (info) => {
      const { currentPageId: oldCurrentPageId } = this.app;
      requestAnimationFrame(() => {
        if (oldCurrentPageId === this.app.currentPageId && this.app.pageState.hoveredId === info.target) {
          this.app.setHoveredId(void 0);
        }
      });
    });
    __publicField(this, "onPointBounds", (info) => {
      if (info.metaKey) {
        if (!info.shiftKey) {
          this.selectNone();
        }
        this.app.startSession("brush" /* Brush */);
        this.setStatus("brushing" /* Brushing */);
        return;
      }
      this.setStatus("pointingBounds" /* PointingBounds */);
    });
    __publicField(this, "onRightPointBounds", (info, e) => {
      e.stopPropagation();
    });
    __publicField(this, "onReleaseBounds", () => {
      if (this.status === "translating" /* Translating */ || this.status === "brushing" /* Brushing */) {
        this.app.completeSession();
      }
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onPointBoundsHandle", (info) => {
      this.pointedBoundsHandle = info.target;
      this.setStatus("pointingBoundsHandle" /* PointingBoundsHandle */);
    });
    __publicField(this, "onDoubleClickBoundsHandle", (info) => {
      switch (info.target) {
        case "center":
        case "left":
        case "right": {
          this.app.select(...TLDR.getLinkedShapeIds(this.app.state, this.app.currentPageId, info.target, info.shiftKey));
          break;
        }
        default: {
          if (this.app.selectedIds.length === 1) {
            this.app.resetBounds(this.app.selectedIds);
            const shape = this.app.getShape(this.app.selectedIds[0]);
            if ("label" in shape) {
              this.app.setEditingId(shape.id);
            }
          }
        }
      }
    });
    __publicField(this, "onReleaseBoundsHandle", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onPointHandle", (info) => {
      this.pointedHandleId = info.target;
      this.setStatus("pointingHandle" /* PointingHandle */);
    });
    __publicField(this, "onDoubleClickHandle", (info) => {
      if (info.target === "bend") {
        const { selectedIds } = this.app;
        if (selectedIds.length !== 1)
          return;
        const shape = this.app.getShape(selectedIds[0]);
        if (TLDR.getShapeUtil(shape.type).canEdit && (shape.parentId === this.app.currentPageId || shape.parentId === this.selectedGroupId)) {
          this.app.setEditingId(shape.id);
        }
        return;
      }
      this.app.toggleDecoration(info.target);
    });
    __publicField(this, "onReleaseHandle", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onShapeClone", (info) => {
      const selectedShapeId = this.app.selectedIds[0];
      const clonedShape = this.getShapeClone(selectedShapeId, info.target);
      if (info.target === "left" || info.target === "right" || info.target === "top" || info.target === "bottom") {
        if (clonedShape) {
          this.app.createShapes(clonedShape);
          this.pointedId = clonedShape.id;
          this.setStatus("pointingClone" /* PointingClone */);
        }
      } else {
        this.setStatus("gridCloning" /* GridCloning */);
        this.app.startSession("grid" /* Grid */, selectedShapeId);
      }
    });
  }
  deselect(id) {
    this.app.select(...this.app.selectedIds.filter((oid) => oid !== id));
  }
  select(id) {
    this.app.select(id);
  }
  pushSelect(id) {
    const shape = this.app.getShape(id);
    this.app.select(...this.app.selectedIds.filter((oid) => oid !== shape.parentId), id);
  }
  selectNone() {
    this.app.selectNone();
  }
};

// src/state/tools/EraseTool/EraseTool.ts
var import_vec35 = __toESM(require("@tldraw/vec"));
var EraseTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "erase");
    __publicField(this, "status", "idle" /* Idle */);
    __publicField(this, "onPointerDown", () => {
      if (this.status !== "idle" /* Idle */)
        return;
      this.setStatus("pointing" /* Pointing */);
    });
    __publicField(this, "onPointerMove", (info) => {
      switch (this.status) {
        case "pointing" /* Pointing */: {
          if (import_vec35.default.dist(info.origin, info.point) > DEAD_ZONE) {
            this.app.startSession("erase" /* Erase */);
            this.app.updateSession();
            this.setStatus("erasing" /* Erasing */);
          }
          break;
        }
        case "erasing" /* Erasing */: {
          this.app.updateSession();
        }
      }
    });
    __publicField(this, "onPointerUp", () => {
      switch (this.status) {
        case "pointing" /* Pointing */: {
          const shapeIdsAtPoint = this.app.shapes.filter((shape) => !shape.isLocked).filter((shape) => this.app.getShapeUtil(shape).hitTestPoint(shape, this.app.currentPoint)).flatMap((shape) => shape.children ? [shape.id, ...shape.children] : shape.id);
          this.app.delete(shapeIdsAtPoint);
          break;
        }
        case "erasing" /* Erasing */: {
          this.app.completeSession();
        }
      }
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onCancel", () => {
      if (this.status === "idle" /* Idle */) {
        if (this.previous) {
          this.app.selectTool(this.previous);
        } else {
          this.app.selectTool("select");
        }
      } else {
        this.setStatus("idle" /* Idle */);
      }
      this.app.cancelSession();
    });
  }
};

// src/state/tools/TextTool/TextTool.ts
var import_vec36 = __toESM(require("@tldraw/vec"));
var TextTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "text" /* Text */);
    __publicField(this, "stopEditingShape", () => {
      this.setStatus("idle" /* Idle */);
      if (!this.app.appState.isToolLocked) {
        this.app.selectTool("select");
      }
    });
    __publicField(this, "onKeyUp", () => {
    });
    __publicField(this, "onKeyDown", () => {
    });
    __publicField(this, "onPointerDown", () => {
      if (this.status === "creating" /* Creating */) {
        this.stopEditingShape();
        return;
      }
      if (this.status === "idle" /* Idle */) {
        const {
          currentPoint,
          currentGrid,
          settings: { showGrid }
        } = this.app;
        this.app.createTextShapeAtPoint(showGrid ? import_vec36.default.snap(currentPoint, currentGrid) : currentPoint);
        this.setStatus("creating" /* Creating */);
        return;
      }
    });
    __publicField(this, "onPointerUp", () => {
    });
    __publicField(this, "onPointShape", (info) => {
      const shape = this.app.getShape(info.target);
      if (shape.type === "text" /* Text */) {
        this.setStatus("idle" /* Idle */);
        this.app.setEditingId(shape.id);
      }
    });
    __publicField(this, "onShapeBlur", () => {
      this.stopEditingShape();
    });
  }
};

// src/state/tools/DrawTool/DrawTool.ts
var import_core45 = require("@tldraw/core");
var DrawTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "draw" /* Draw */);
    __publicField(this, "lastShapeId");
    __publicField(this, "onEnter", () => {
      this.lastShapeId = void 0;
    });
    __publicField(this, "onCancel", () => {
      switch (this.status) {
        case "idle" /* Idle */: {
          this.app.selectTool("select");
          break;
        }
        default: {
          this.setStatus("idle" /* Idle */);
          break;
        }
      }
      this.app.cancelSession();
    });
    __publicField(this, "onPointerDown", (info) => {
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        appState: { currentPageId, currentStyle }
      } = this.app;
      const previous = this.lastShapeId && this.app.getShape(this.lastShapeId);
      if (info.shiftKey && previous) {
        this.app.startSession("draw" /* Draw */, previous.id);
        this.setStatus("extending" /* Extending */);
      } else {
        const childIndex = this.getNextChildIndex();
        const id = import_core45.Utils.uniqueId();
        const newShape = Draw.create({
          id,
          parentId: currentPageId,
          childIndex,
          point: currentPoint,
          style: __spreadValues({}, currentStyle)
        });
        this.lastShapeId = id;
        this.app.patchCreate([newShape]);
        this.app.startSession("draw" /* Draw */, id);
        this.setStatus("creating" /* Creating */);
      }
    });
    __publicField(this, "onPointerMove", () => {
      switch (this.status) {
        case "extending" /* Extending */:
        case "creating" /* Creating */: {
          this.app.updateSession();
        }
      }
    });
    __publicField(this, "onPointerUp", () => {
      this.app.completeSession();
      this.setStatus("idle" /* Idle */);
    });
  }
};

// src/state/tools/EllipseTool/EllipseTool.ts
var import_core46 = require("@tldraw/core");
var import_vec37 = __toESM(require("@tldraw/vec"));
var EllipseTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "ellipse" /* Ellipse */);
    __publicField(this, "onPointerDown", () => {
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core46.Utils.uniqueId();
      const newShape = Ellipse.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? import_vec37.default.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession("transformSingle" /* TransformSingle */, newShape.id, import_core46.TLBoundsCorner.BottomRight, true);
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/tools/RectangleTool/RectangleTool.ts
var import_core47 = require("@tldraw/core");
var import_vec38 = __toESM(require("@tldraw/vec"));
var RectangleTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "rectangle" /* Rectangle */);
    __publicField(this, "onPointerDown", () => {
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core47.Utils.uniqueId();
      const newShape = Rectangle.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? import_vec38.default.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession("transformSingle" /* TransformSingle */, newShape.id, import_core47.TLBoundsCorner.BottomRight, true);
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/tools/TriangleTool/TriangleTool.ts
var import_core48 = require("@tldraw/core");
var import_vec39 = __toESM(require("@tldraw/vec"));
var TriangleTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "triangle" /* Triangle */);
    __publicField(this, "onPointerDown", () => {
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core48.Utils.uniqueId();
      const newShape = Triangle.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? import_vec39.default.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession("transformSingle" /* TransformSingle */, newShape.id, import_core48.TLBoundsCorner.BottomRight, true);
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/tools/LineTool/LineTool.ts
var import_core49 = require("@tldraw/core");
var import_vec40 = __toESM(require("@tldraw/vec"));
var LineTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "line" /* Line */);
    __publicField(this, "onPointerDown", () => {
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core49.Utils.uniqueId();
      const newShape = Arrow.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? import_vec40.default.snap(currentPoint, currentGrid) : currentPoint,
        decorations: {
          start: void 0,
          end: void 0
        },
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession("arrow" /* Arrow */, newShape.id, "end", true);
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/tools/ArrowTool/ArrowTool.ts
var import_core50 = require("@tldraw/core");
var import_vec41 = __toESM(require("@tldraw/vec"));
var ArrowTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "arrow" /* Arrow */);
    __publicField(this, "onPointerDown", () => {
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = import_core50.Utils.uniqueId();
      const newShape = Arrow.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? import_vec41.default.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession("arrow" /* Arrow */, newShape.id, "end", true);
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/tools/StickyTool/StickyTool.ts
var import_vec42 = __toESM(require("@tldraw/vec"));
var import_core51 = require("@tldraw/core");
var StickyTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "sticky" /* Sticky */);
    __publicField(this, "shapeId");
    __publicField(this, "onPointerDown", () => {
      if (this.status === "creating" /* Creating */) {
        this.setStatus("idle" /* Idle */);
        if (!this.app.appState.isToolLocked) {
          this.app.selectTool("select");
        }
        return;
      }
      if (this.status === "idle" /* Idle */) {
        const {
          currentPoint,
          currentGrid,
          settings: { showGrid },
          appState: { currentPageId, currentStyle }
        } = this.app;
        const childIndex = this.getNextChildIndex();
        const id = import_core51.Utils.uniqueId();
        this.shapeId = id;
        const newShape = Sticky.create({
          id,
          parentId: currentPageId,
          childIndex,
          point: showGrid ? import_vec42.default.snap(currentPoint, currentGrid) : currentPoint,
          style: __spreadValues({}, currentStyle)
        });
        const bounds = Sticky.getBounds(newShape);
        newShape.point = import_vec42.default.sub(newShape.point, [bounds.width / 2, bounds.height / 2]);
        this.app.createShapes(newShape);
        this.app.startSession("translate" /* Translate */);
        this.setStatus("creating" /* Creating */);
      }
    });
    __publicField(this, "onPointerUp", () => {
      if (this.status === "creating" /* Creating */) {
        this.setStatus("idle" /* Idle */);
        this.app.completeSession();
        this.app.selectTool("select");
        this.app.setEditingId(this.shapeId);
      }
    });
  }
};

// src/state/StateManager/StateManager.ts
var import_vanilla = __toESM(require("zustand/vanilla"));
var import_zustand = __toESM(require("zustand"));
var idb = __toESM(require("idb-keyval"));
var import_core52 = require("@tldraw/core");
var StateManager = class {
  constructor(initialState, id, version, update) {
    __publicField(this, "_idbId");
    __publicField(this, "initialState");
    __publicField(this, "store");
    __publicField(this, "pointer", -1);
    __publicField(this, "_state");
    __publicField(this, "_status", "loading");
    __publicField(this, "stack", []);
    __publicField(this, "_snapshot");
    __publicField(this, "useStore");
    __publicField(this, "ready");
    __publicField(this, "isPaused", false);
    __publicField(this, "persist", (id) => {
      if (this._status !== "ready")
        return;
      if (this.onPersist) {
        this.onPersist(this._state, id);
      }
      if (this._idbId) {
        return idb.set(this._idbId, this._state).catch((e) => console.error(e));
      }
    });
    __publicField(this, "applyPatch", (patch, id) => {
      const prev = this._state;
      const next = import_core52.Utils.deepMerge(this._state, patch);
      const final = this.cleanup(next, prev, patch, id);
      if (this.onStateWillChange) {
        this.onStateWillChange(final, id);
      }
      this._state = final;
      this.store.setState(this._state, true);
      if (this.onStateDidChange) {
        this.onStateDidChange(this._state, id);
      }
      return this;
    });
    __publicField(this, "migrate", (next) => {
      return next;
    });
    __publicField(this, "cleanup", (nextState, prevState, patch, id) => nextState);
    __publicField(this, "onStateWillChange");
    __publicField(this, "onStateDidChange");
    __publicField(this, "patchState", (patch, id) => {
      this.applyPatch(patch, id);
      if (this.onPatch) {
        this.onPatch(this._state, id);
      }
      return this;
    });
    __publicField(this, "replaceState", (state, id) => {
      const final = this.cleanup(state, this._state, state, id);
      if (this.onStateWillChange) {
        this.onStateWillChange(final, "replace");
      }
      this._state = final;
      this.store.setState(this._state, true);
      if (this.onStateDidChange) {
        this.onStateDidChange(this._state, "replace");
      }
      return this;
    });
    __publicField(this, "setState", (command, id = command.id) => {
      if (this.pointer < this.stack.length - 1) {
        this.stack = this.stack.slice(0, this.pointer + 1);
      }
      this.stack.push(__spreadProps(__spreadValues({}, command), { id }));
      this.pointer = this.stack.length - 1;
      this.applyPatch(command.after, id);
      if (this.onCommand)
        this.onCommand(this._state, id);
      this.persist(id);
      return this;
    });
    __publicField(this, "onReady");
    __publicField(this, "onPatch");
    __publicField(this, "onCommand");
    __publicField(this, "onPersist");
    __publicField(this, "onReplace");
    __publicField(this, "onReset");
    __publicField(this, "onResetHistory");
    __publicField(this, "onUndo");
    __publicField(this, "onRedo");
    __publicField(this, "reset", () => {
      if (this.onStateWillChange) {
        this.onStateWillChange(this.initialState, "reset");
      }
      this._state = this.initialState;
      this.store.setState(this._state, true);
      this.resetHistory();
      this.persist("reset");
      if (this.onStateDidChange) {
        this.onStateDidChange(this._state, "reset");
      }
      if (this.onReset) {
        this.onReset(this._state);
      }
      return this;
    });
    __publicField(this, "replaceHistory", (history, pointer = history.length - 1) => {
      this.stack = history;
      this.pointer = pointer;
      if (this.onReplace) {
        this.onReplace(this._state);
      }
      return this;
    });
    __publicField(this, "resetHistory", () => {
      this.stack = [];
      this.pointer = -1;
      if (this.onResetHistory) {
        this.onResetHistory(this._state);
      }
      return this;
    });
    __publicField(this, "undo", () => {
      if (!this.isPaused) {
        if (!this.canUndo)
          return this;
        const command = this.stack[this.pointer];
        this.pointer--;
        this.applyPatch(command.before, `undo`);
        this.persist("undo");
      }
      if (this.onUndo)
        this.onUndo(this._state);
      return this;
    });
    __publicField(this, "redo", () => {
      if (!this.isPaused) {
        if (!this.canRedo)
          return this;
        this.pointer++;
        const command = this.stack[this.pointer];
        this.applyPatch(command.after, "redo");
        this.persist("undo");
      }
      if (this.onRedo)
        this.onRedo(this._state);
      return this;
    });
    __publicField(this, "setSnapshot", () => {
      this._snapshot = __spreadValues({}, this._state);
      return this;
    });
    __publicField(this, "forceUpdate", () => {
      this.store.setState(this._state, true);
    });
    this._idbId = id;
    this._state = deepCopy(initialState);
    this._snapshot = deepCopy(initialState);
    this.initialState = deepCopy(initialState);
    this.store = (0, import_vanilla.default)(() => this._state);
    this.useStore = (0, import_zustand.default)(this.store);
    this.ready = new Promise((resolve) => {
      let message = "none";
      if (this._idbId) {
        message = "restored";
        idb.get(this._idbId).then((saved) => __async(this, null, function* () {
          if (saved) {
            let next = saved;
            if (version) {
              const savedVersion = yield idb.get(id + "_version");
              if (savedVersion && savedVersion < version) {
                next = update ? update(saved, initialState, savedVersion) : initialState;
                message = "migrated";
              }
            }
            yield idb.set(id + "_version", version || -1);
            const prevEmpty = this._state.appState.isEmptyCanvas;
            next = this.migrate(next);
            this._state = deepCopy(next);
            this._snapshot = deepCopy(next);
            this._state.appState.isEmptyCanvas = prevEmpty;
            this.store.setState(this._state, true);
          } else {
            yield idb.set(id + "_version", version || -1);
          }
          this._status = "ready";
          resolve(message);
        })).catch((e) => console.error(e));
      } else {
        this._status = "ready";
        resolve(message);
      }
    }).then((message) => {
      if (this.onReady)
        this.onReady(message);
      return message;
    });
  }
  pause() {
    this.isPaused = true;
  }
  resume() {
    this.isPaused = false;
  }
  get canUndo() {
    return this.pointer > -1;
  }
  get canRedo() {
    return this.pointer < this.stack.length - 1;
  }
  get state() {
    return this._state;
  }
  get status() {
    return this._status;
  }
  get snapshot() {
    return this._snapshot;
  }
};

// src/state/TldrawApp.ts
var uuid = import_core53.Utils.uniqueId();
var _TldrawApp = class extends StateManager {
  constructor(id, callbacks = {}) {
    super(_TldrawApp.defaultState, id, _TldrawApp.version, (prev, next, prevVersion) => {
      return __spreadProps(__spreadValues({}, next), {
        document: migrate(__spreadProps(__spreadValues(__spreadValues({}, next.document), prev.document), { version: prevVersion }), _TldrawApp.version)
      });
    });
    __publicField(this, "callbacks", {});
    __publicField(this, "tools", {
      select: new SelectTool(this),
      erase: new EraseTool(this),
      ["text" /* Text */]: new TextTool(this),
      ["draw" /* Draw */]: new DrawTool(this),
      ["ellipse" /* Ellipse */]: new EllipseTool(this),
      ["rectangle" /* Rectangle */]: new RectangleTool(this),
      ["triangle" /* Triangle */]: new TriangleTool(this),
      ["line" /* Line */]: new LineTool(this),
      ["arrow" /* Arrow */]: new ArrowTool(this),
      ["sticky" /* Sticky */]: new StickyTool(this)
    });
    __publicField(this, "currentTool", this.tools.select);
    __publicField(this, "session");
    __publicField(this, "readOnly", false);
    __publicField(this, "isDirty", false);
    __publicField(this, "isCreating", false);
    __publicField(this, "originPoint", [0, 0]);
    __publicField(this, "currentPoint", [0, 0]);
    __publicField(this, "previousPoint", [0, 0]);
    __publicField(this, "shiftKey", false);
    __publicField(this, "altKey", false);
    __publicField(this, "metaKey", false);
    __publicField(this, "ctrlKey", false);
    __publicField(this, "spaceKey", false);
    __publicField(this, "isPointing", false);
    __publicField(this, "isForcePanning", false);
    __publicField(this, "editingStartTime", -1);
    __publicField(this, "fileSystemHandle", null);
    __publicField(this, "viewport", import_core53.Utils.getBoundsFromPoints([
      [0, 0],
      [100, 100]
    ]));
    __publicField(this, "rendererBounds", import_core53.Utils.getBoundsFromPoints([
      [0, 0],
      [100, 100]
    ]));
    __publicField(this, "selectHistory", {
      stack: [[]],
      pointer: 0
    });
    __publicField(this, "clipboard");
    __publicField(this, "rotationInfo", {
      selectedIds: [],
      center: [0, 0]
    });
    __publicField(this, "pasteInfo", {
      center: [0, 0],
      offset: [0, 0]
    });
    __publicField(this, "migrate", (state) => {
      return __spreadProps(__spreadValues({}, state), {
        document: migrate(state.document, _TldrawApp.version)
      });
    });
    __publicField(this, "onReady", () => {
      var _a, _b;
      this.loadDocument(this.document);
      loadFileHandle().then((fileHandle) => {
        this.fileSystemHandle = fileHandle;
      });
      try {
        this.patchState({
          appState: {
            status: "idle" /* Idle */
          },
          document: migrate(this.document, _TldrawApp.version)
        });
      } catch (e) {
        console.error("The data appears to be corrupted. Resetting!", e);
        localStorage.setItem(this.document.id + "_corrupted", JSON.stringify(this.document));
        this.patchState(__spreadProps(__spreadValues({}, _TldrawApp.defaultState), {
          appState: __spreadProps(__spreadValues({}, _TldrawApp.defaultState.appState), {
            status: "idle" /* Idle */
          })
        }));
      }
      (_b = (_a = this.callbacks).onMount) == null ? void 0 : _b.call(_a, this);
    });
    __publicField(this, "cleanup", (state, prev) => {
      var _a;
      const next = __spreadValues({}, state);
      if (next.document !== prev.document) {
        Object.entries(next.document.pages).forEach(([pageId, page]) => {
          if (page === void 0) {
            delete next.document.pages[pageId];
            delete next.document.pageStates[pageId];
            return;
          }
          const prevPage = prev.document.pages[pageId];
          const changedShapes = {};
          if (!prevPage || page.shapes !== prevPage.shapes || page.bindings !== prevPage.bindings) {
            page.shapes = __spreadValues({}, page.shapes);
            page.bindings = __spreadValues({}, page.bindings);
            const groupsToUpdate = /* @__PURE__ */ new Set();
            Object.entries(page.shapes).forEach(([id, shape]) => {
              var _a2;
              let parentId;
              if (!shape) {
                parentId = (_a2 = prevPage == null ? void 0 : prevPage.shapes[id]) == null ? void 0 : _a2.parentId;
                delete page.shapes[id];
              } else {
                parentId = shape.parentId;
              }
              if (page.id === next.appState.currentPageId) {
                if ((prevPage == null ? void 0 : prevPage.shapes[id]) !== shape) {
                  changedShapes[id] = shape;
                }
              }
              if (parentId && parentId !== pageId) {
                const group = page.shapes[parentId];
                if (group !== void 0) {
                  groupsToUpdate.add(page.shapes[parentId]);
                }
              }
            });
            Object.keys(page.bindings).forEach((id) => {
              if (!page.bindings[id]) {
                delete page.bindings[id];
              }
            });
            next.document.pages[pageId] = page;
            const bindingsToUpdate = TLDR.getRelatedBindings(next, Object.keys(changedShapes), pageId);
            const visitedShapes = /* @__PURE__ */ new Set();
            bindingsToUpdate.forEach((binding) => {
              if (!page.bindings[binding.id]) {
                return;
              }
              const toShape = page.shapes[binding.toId];
              const fromShape = page.shapes[binding.fromId];
              if (!(toShape && fromShape)) {
                delete next.document.pages[pageId].bindings[binding.id];
                return;
              }
              if (visitedShapes.has(fromShape)) {
                return;
              }
              const fromDelta = TLDR.updateArrowBindings(page, fromShape);
              visitedShapes.add(fromShape);
              if (fromDelta) {
                const nextShape = __spreadValues(__spreadValues({}, fromShape), fromDelta);
                page.shapes[fromShape.id] = nextShape;
              }
            });
            groupsToUpdate.forEach((group) => {
              if (!group)
                throw Error("no group!");
              const children = group.children.filter((id) => page.shapes[id] !== void 0);
              const commonBounds = import_core53.Utils.getCommonBounds(children.map((id) => page.shapes[id]).filter(Boolean).map((shape) => TLDR.getRotatedBounds(shape)));
              page.shapes[group.id] = __spreadProps(__spreadValues({}, group), {
                point: [commonBounds.minX, commonBounds.minY],
                size: [commonBounds.width, commonBounds.height],
                children
              });
            });
          }
          const nextPageState = __spreadValues({}, next.document.pageStates[pageId]);
          if (!nextPageState.brush) {
            delete nextPageState.brush;
          }
          if (nextPageState.hoveredId && !page.shapes[nextPageState.hoveredId]) {
            delete nextPageState.hoveredId;
          }
          if (nextPageState.bindingId && !page.bindings[nextPageState.bindingId]) {
            TLDR.warn(`Could not find the binding of ${pageId}`);
            delete nextPageState.bindingId;
          }
          if (nextPageState.editingId && !page.shapes[nextPageState.editingId]) {
            TLDR.warn("Could not find the editing shape!");
            delete nextPageState.editingId;
          }
          next.document.pageStates[pageId] = nextPageState;
        });
      }
      Object.keys((_a = next.document.assets) != null ? _a : {}).forEach((id) => {
        var _a2, _b;
        if (!((_a2 = next.document.assets) == null ? void 0 : _a2[id])) {
          (_b = next.document.assets) == null ? true : delete _b[id];
        }
      });
      const currentPageId = next.appState.currentPageId;
      const currentPageState = next.document.pageStates[currentPageId];
      if (next.room && next.room !== prev.room) {
        const room = __spreadProps(__spreadValues({}, next.room), { users: __spreadValues({}, next.room.users) });
        if (prev.room) {
          Object.values(prev.room.users).filter(Boolean).forEach((user) => {
            if (room.users[user.id] === void 0) {
              delete room.users[user.id];
            }
          });
        }
        next.room = room;
      }
      if (next.room) {
        next.room.users[next.room.userId] = __spreadProps(__spreadValues({}, next.room.users[next.room.userId]), {
          point: this.currentPoint,
          selectedIds: currentPageState.selectedIds
        });
      }
      if (this.readOnly) {
        next.document.pages = prev.document.pages;
      }
      return next;
    });
    __publicField(this, "onPatch", (state, id) => {
      var _a, _b;
      (_b = (_a = this.callbacks).onPatch) == null ? void 0 : _b.call(_a, this, id);
    });
    __publicField(this, "onCommand", (state, id) => {
      var _a, _b;
      this.clearSelectHistory();
      this.isDirty = true;
      (_b = (_a = this.callbacks).onCommand) == null ? void 0 : _b.call(_a, this, id);
    });
    __publicField(this, "onReplace", () => {
      this.clearSelectHistory();
      this.isDirty = false;
    });
    __publicField(this, "onUndo", () => {
      var _a, _b;
      this.rotationInfo.selectedIds = [...this.selectedIds];
      (_b = (_a = this.callbacks).onUndo) == null ? void 0 : _b.call(_a, this);
    });
    __publicField(this, "onRedo", () => {
      var _a, _b;
      this.rotationInfo.selectedIds = [...this.selectedIds];
      (_b = (_a = this.callbacks).onRedo) == null ? void 0 : _b.call(_a, this);
    });
    __publicField(this, "onPersist", () => {
      var _a, _b;
      if (this.callbacks.onChangePage) {
        this.broadcastPageChanges();
      }
      (_b = (_a = this.callbacks).onPersist) == null ? void 0 : _b.call(_a, this);
    });
    __publicField(this, "prevSelectedIds", this.selectedIds);
    __publicField(this, "onStateDidChange", (_state, id) => {
      var _a, _b, _c, _d;
      (_b = (_a = this.callbacks).onChange) == null ? void 0 : _b.call(_a, this, id);
      if (this.room && this.selectedIds !== this.prevSelectedIds) {
        (_d = (_c = this.callbacks).onChangePresence) == null ? void 0 : _d.call(_c, this, __spreadProps(__spreadValues({}, this.room.users[this.room.userId]), {
          selectedIds: this.selectedIds
        }));
        this.prevSelectedIds = this.selectedIds;
      }
    });
    __publicField(this, "justSent", false);
    __publicField(this, "prevShapes", this.page.shapes);
    __publicField(this, "prevBindings", this.page.bindings);
    __publicField(this, "prevAssets", this.document.assets);
    __publicField(this, "broadcastPageChanges", () => {
      var _a, _b;
      const visited = /* @__PURE__ */ new Set();
      const changedShapes = {};
      const changedBindings = {};
      const changedAssets = {};
      this.shapes.forEach((shape) => {
        visited.add(shape.id);
        if (this.prevShapes[shape.id] !== shape) {
          changedShapes[shape.id] = shape;
        }
      });
      Object.keys(this.prevShapes).filter((id) => !visited.has(id)).forEach((id) => {
        changedShapes[id] = void 0;
      });
      this.bindings.forEach((binding) => {
        visited.add(binding.id);
        if (this.prevBindings[binding.id] !== binding) {
          changedBindings[binding.id] = binding;
        }
      });
      Object.keys(this.prevBindings).filter((id) => !visited.has(id)).forEach((id) => {
        changedBindings[id] = void 0;
      });
      this.assets.forEach((asset) => {
        visited.add(asset.id);
        if (this.prevAssets[asset.id] !== asset) {
          changedAssets[asset.id] = asset;
        }
      });
      Object.keys(this.prevAssets).filter((id) => !visited.has(id)).forEach((id) => {
        changedAssets[id] = void 0;
      });
      if (Object.keys(changedBindings).length > 0 || Object.keys(changedShapes).length > 0 || Object.keys(changedAssets).length > 0) {
        this.justSent = true;
        (_b = (_a = this.callbacks).onChangePage) == null ? void 0 : _b.call(_a, this, changedShapes, changedBindings, changedAssets);
        this.prevShapes = this.page.shapes;
        this.prevBindings = this.page.bindings;
        this.prevAssets = this.document.assets;
      }
    });
    __publicField(this, "getReservedContent", (coreReservedIds, pageId = this.currentPageId) => {
      const { bindings } = this.document.pages[pageId];
      const reservedShapes = {};
      const reservedBindings = {};
      const bindingsArr = Object.values(bindings);
      const boundTos = new Map(bindingsArr.map((binding) => [binding.toId, binding]));
      const boundFroms = new Map(bindingsArr.map((binding) => [binding.fromId, binding]));
      const bindingMaps = [boundTos, boundFroms];
      const reservedShapeIds = [];
      if (this.session)
        coreReservedIds.forEach((id) => reservedShapeIds.push(id));
      if (this.pageState.editingId)
        reservedShapeIds.push(this.pageState.editingId);
      const strongReservedShapeIds = new Set(reservedShapeIds);
      const visited = /* @__PURE__ */ new Set();
      while (reservedShapeIds.length > 0) {
        const id = reservedShapeIds.pop();
        if (!id)
          break;
        if (visited.has(id))
          continue;
        visited.add(id);
        const shape = this.getShape(id);
        reservedShapes[id] = shape;
        if (shape.parentId !== pageId)
          reservedShapeIds.push(shape.parentId);
        if (shape.children)
          reservedShapeIds.push(...shape.children);
        bindingMaps.map((map) => map.get(shape.id)).filter(Boolean).forEach((binding) => {
          reservedBindings[binding.id] = binding;
          reservedShapeIds.push(binding.toId, binding.fromId);
        });
      }
      return { reservedShapes, reservedBindings, strongReservedShapeIds };
    });
    __publicField(this, "replacePageContent", (shapes, bindings, assets, pageId = this.currentPageId) => {
      if (this.justSent) {
        this.justSent = false;
        return this;
      }
      const page = this.document.pages[this.currentPageId];
      Object.values(shapes).forEach((shape) => {
        if (shape.parentId !== pageId && !(page.shapes[shape.parentId] || shapes[shape.parentId])) {
          console.warn("Added a shape without a parent on the page");
          shape.parentId = pageId;
        }
      });
      this.useStore.setState((current) => {
        const { hoveredId, editingId, bindingId, selectedIds } = current.document.pageStates[pageId];
        const coreReservedIds = [...selectedIds];
        const editingShape = editingId && current.document.pages[this.currentPageId].shapes[editingId];
        if (editingShape)
          coreReservedIds.push(editingShape.id);
        const { reservedShapes, reservedBindings, strongReservedShapeIds } = this.getReservedContent(coreReservedIds, this.currentPageId);
        Object.values(reservedShapes).filter((reservedShape) => !("text" in reservedShape)).forEach((reservedShape) => {
          const incomingShape = shapes[reservedShape.id];
          if (!incomingShape)
            return;
          if (!(reservedShape.type === "arrow" /* Arrow */ || strongReservedShapeIds.has(reservedShape.id))) {
            shapes[reservedShape.id] = incomingShape;
            return;
          }
          if ("decorations" in incomingShape && "decorations" in reservedShape) {
            shapes[reservedShape.id] = __spreadProps(__spreadValues({}, reservedShape), { decorations: incomingShape.decorations });
          }
          reservedShape.style = incomingShape.style;
        });
        this.prevShapes = shapes;
        this.prevBindings = bindings;
        this.prevAssets = assets;
        const nextShapes = __spreadValues(__spreadValues({}, shapes), reservedShapes);
        if (editingShape) {
          nextShapes[editingShape.id] = editingShape;
        }
        const nextBindings = __spreadValues(__spreadValues({}, bindings), reservedBindings);
        const nextAssets = __spreadValues({}, assets);
        const next = __spreadProps(__spreadValues({}, current), {
          document: __spreadProps(__spreadValues({}, current.document), {
            pages: {
              [pageId]: __spreadProps(__spreadValues({}, current.document.pages[pageId]), {
                shapes: nextShapes,
                bindings: nextBindings
              })
            },
            assets: nextAssets,
            pageStates: __spreadProps(__spreadValues({}, current.document.pageStates), {
              [pageId]: __spreadProps(__spreadValues({}, current.document.pageStates[pageId]), {
                selectedIds: selectedIds.filter((id) => nextShapes[id] !== void 0),
                hoveredId: hoveredId ? nextShapes[hoveredId] === void 0 ? void 0 : hoveredId : void 0,
                editingId,
                bindingId: bindingId ? nextBindings[bindingId] === void 0 ? void 0 : bindingId : void 0
              })
            })
          })
        });
        const page2 = next.document.pages[pageId];
        const bindingsToUpdate = TLDR.getRelatedBindings(next, Object.keys(nextShapes), pageId);
        const visitedShapes = /* @__PURE__ */ new Set();
        bindingsToUpdate.forEach((binding) => {
          if (!page2.bindings[binding.id]) {
            return;
          }
          const fromShape = page2.shapes[binding.fromId];
          if (visitedShapes.has(fromShape)) {
            return;
          }
          const fromDelta = TLDR.updateArrowBindings(page2, fromShape);
          visitedShapes.add(fromShape);
          if (fromDelta) {
            const nextShape = __spreadValues(__spreadValues({}, fromShape), fromDelta);
            page2.shapes[fromShape.id] = nextShape;
          }
        });
        Object.values(nextShapes).forEach((shape) => {
          if (shape.type !== "group" /* Group */)
            return;
          const children = shape.children.filter((id) => page2.shapes[id] !== void 0);
          const commonBounds = import_core53.Utils.getCommonBounds(children.map((id) => page2.shapes[id]).filter(Boolean).map((shape2) => TLDR.getRotatedBounds(shape2)));
          page2.shapes[shape.id] = __spreadProps(__spreadValues({}, shape), {
            point: [commonBounds.minX, commonBounds.minY],
            size: [commonBounds.width, commonBounds.height],
            children
          });
        });
        this.state.document = next.document;
        return next;
      }, true);
      return this;
    });
    __publicField(this, "updateBounds", (bounds) => {
      this.rendererBounds = bounds;
      const { point, zoom } = this.pageState.camera;
      this.updateViewport(point, zoom);
      if (!this.readOnly && this.session) {
        this.session.update();
      }
    });
    __publicField(this, "updateViewport", (point, zoom) => {
      const { width, height } = this.rendererBounds;
      const [minX, minY] = import_vec43.Vec.sub(import_vec43.Vec.div([0, 0], zoom), point);
      const [maxX, maxY] = import_vec43.Vec.sub(import_vec43.Vec.div([width, height], zoom), point);
      this.viewport = {
        minX,
        minY,
        maxX,
        maxY,
        height: maxX - minX,
        width: maxY - minY
      };
    });
    __publicField(this, "setEditingId", (id) => {
      if (this.readOnly)
        return;
      this.editingStartTime = performance.now();
      this.patchState({
        document: {
          pageStates: {
            [this.currentPageId]: {
              editingId: id
            }
          }
        }
      }, `set_editing_id`);
    });
    __publicField(this, "setHoveredId", (id) => {
      this.patchState({
        document: {
          pageStates: {
            [this.currentPageId]: {
              hoveredId: id
            }
          }
        }
      }, `set_hovered_id`);
    });
    __publicField(this, "setSetting", (name, value) => {
      if (this.session)
        return this;
      this.patchState({
        settings: {
          [name]: typeof value === "function" ? value(this.settings[name]) : value
        }
      }, `settings:${name}`);
      this.persist();
      return this;
    });
    __publicField(this, "toggleFocusMode", () => {
      if (this.session)
        return this;
      this.patchState({
        settings: {
          isFocusMode: !this.settings.isFocusMode
        }
      }, `settings:toggled_focus_mode`);
      this.persist();
      return this;
    });
    __publicField(this, "togglePenMode", () => {
      if (this.session)
        return this;
      this.patchState({
        settings: {
          isPenMode: !this.settings.isPenMode
        }
      }, `settings:toggled_pen_mode`);
      this.persist();
      return this;
    });
    __publicField(this, "toggleDarkMode", () => {
      if (this.session)
        return this;
      this.patchState({ settings: { isDarkMode: !this.settings.isDarkMode } }, `settings:toggled_dark_mode`);
      this.persist();
      return this;
    });
    __publicField(this, "toggleZoomSnap", () => {
      if (this.session)
        return this;
      this.patchState({ settings: { isZoomSnap: !this.settings.isZoomSnap } }, `settings:toggled_zoom_snap`);
      this.persist();
      return this;
    });
    __publicField(this, "toggleDebugMode", () => {
      if (this.session)
        return this;
      this.patchState({ settings: { isDebugMode: !this.settings.isDebugMode } }, `settings:toggled_debug`);
      this.persist();
      return this;
    });
    __publicField(this, "setMenuOpen", (isOpen) => {
      this.patchState({ appState: { isMenuOpen: isOpen } }, "ui:toggled_menu_opened");
      this.persist();
      return this;
    });
    __publicField(this, "setIsLoading", (isLoading) => {
      this.patchState({ appState: { isLoading } }, "ui:toggled_is_loading");
      this.persist();
      return this;
    });
    __publicField(this, "setDisableAssets", (disableAssets) => {
      this.patchState({ appState: { disableAssets } }, "ui:toggled_disable_images");
      return this;
    });
    __publicField(this, "toggleGrid", () => {
      if (this.session)
        return this;
      this.patchState({ settings: { showGrid: !this.settings.showGrid } }, "settings:toggled_grid");
      this.persist();
      return this;
    });
    __publicField(this, "selectTool", (type) => {
      if (this.readOnly || this.session)
        return this;
      this.isPointing = false;
      const tool = this.tools[type];
      if (tool === this.currentTool) {
        this.patchState({
          appState: {
            isToolLocked: false
          }
        });
        return this;
      }
      this.currentTool.onExit();
      tool.previous = this.currentTool.type;
      this.currentTool = tool;
      this.currentTool.onEnter();
      return this.patchState({
        appState: {
          activeTool: type,
          isToolLocked: false
        }
      }, `selected_tool:${type}`);
    });
    __publicField(this, "toggleToolLock", () => {
      if (this.session)
        return this;
      return this.patchState({
        appState: {
          isToolLocked: !this.appState.isToolLocked
        }
      }, `toggled_tool_lock`);
    });
    __publicField(this, "resetDocument", () => {
      if (this.session)
        return this;
      this.session = void 0;
      this.pasteInfo.offset = [0, 0];
      this.currentTool = this.tools.select;
      this.resetHistory().clearSelectHistory().loadDocument(migrate(_TldrawApp.defaultDocument, _TldrawApp.version)).persist();
      return this;
    });
    __publicField(this, "updateUsers", (users, isOwnUpdate = false) => {
      this.patchState({
        room: {
          users: Object.fromEntries(users.map((user) => [user.id, user]))
        }
      }, isOwnUpdate ? "room:self:update" : "room:user:update");
    });
    __publicField(this, "removeUser", (userId) => {
      this.patchState({
        room: {
          users: {
            [userId]: void 0
          }
        }
      });
    });
    __publicField(this, "mergeDocument", (document2) => {
      if (this.document.id !== document2.id) {
        this.replaceState(__spreadProps(__spreadValues({}, this.state), {
          appState: __spreadProps(__spreadValues({}, this.appState), {
            currentPageId: Object.keys(document2.pages)[0]
          }),
          document: migrate(document2, _TldrawApp.version)
        }));
        return this;
      }
      const currentPageStates = __spreadValues({}, this.document.pageStates);
      const nextAppState = __spreadProps(__spreadValues({}, this.appState), {
        currentPageId: document2.pages[this.currentPageId] ? this.currentPageId : Object.keys(document2.pages)[0],
        pages: Object.values(document2.pages).map((page, i) => ({
          id: page.id,
          name: page.name,
          childIndex: page.childIndex || i
        }))
      });
      this.resetHistory();
      Object.keys(this.document.pages).forEach((pageId) => {
        if (!document2.pages[pageId]) {
          if (pageId === this.appState.currentPageId) {
            this.cancelSession();
            this.selectNone();
          }
          currentPageStates[pageId] = void 0;
        }
      });
      if (this.session) {
        this.selectedIds.filter((id) => !document2.pages[this.currentPageId].shapes[id]).forEach((id) => document2.pages[this.currentPageId].shapes[id] = this.page.shapes[id]);
      }
      Object.entries(currentPageStates).forEach(([pageId, pageState]) => {
        pageState.selectedIds = pageState.selectedIds.filter((id) => !!document2.pages[pageId].shapes[id]);
      });
      const { editingId } = this.pageState;
      if (editingId) {
        document2.pages[this.currentPageId].shapes[editingId] = this.page.shapes[editingId];
        currentPageStates[this.currentPageId].selectedIds = [editingId];
      }
      return this.replaceState(__spreadProps(__spreadValues({}, this.state), {
        appState: nextAppState,
        document: __spreadProps(__spreadValues({}, migrate(document2, _TldrawApp.version)), {
          pageStates: currentPageStates
        })
      }), "merge");
    });
    __publicField(this, "updateDocument", (document2, reason = "updated_document") => {
      const prevState = this.state;
      const nextState = __spreadProps(__spreadValues({}, prevState), { document: __spreadValues({}, prevState.document) });
      if (!document2.pages[this.currentPageId]) {
        nextState.appState = __spreadProps(__spreadValues({}, prevState.appState), {
          currentPageId: Object.keys(document2.pages)[0]
        });
      }
      let i = 1;
      for (const nextPage of Object.values(document2.pages)) {
        if (nextPage !== prevState.document.pages[nextPage.id]) {
          nextState.document.pages[nextPage.id] = nextPage;
          if (!nextPage.name) {
            nextState.document.pages[nextPage.id].name = `Page ${i + 1}`;
            i++;
          }
        }
      }
      for (const nextPageState of Object.values(document2.pageStates)) {
        if (nextPageState !== prevState.document.pageStates[nextPageState.id]) {
          nextState.document.pageStates[nextPageState.id] = nextPageState;
          const nextPage = document2.pages[nextPageState.id];
          const keysToCheck = ["bindingId", "editingId", "hoveredId", "pointedId"];
          for (const key of keysToCheck) {
            if (!nextPage.shapes[key]) {
              nextPageState[key] = void 0;
            }
          }
          nextPageState.selectedIds = nextPageState.selectedIds.filter((id) => !!document2.pages[nextPage.id].shapes[id]);
        }
      }
      nextState.document = migrate(nextState.document, nextState.document.version || 0);
      return this.replaceState(nextState, `${reason}:${document2.id}`);
    });
    __publicField(this, "loadRoom", (roomId) => {
      this.patchState({
        room: {
          id: roomId,
          userId: uuid,
          users: {
            [uuid]: {
              id: uuid,
              color: USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)],
              point: [100, 100],
              selectedIds: [],
              activeShapes: []
            }
          }
        }
      });
      return this;
    });
    __publicField(this, "loadDocument", (document2) => {
      this.selectNone();
      this.resetHistory();
      this.clearSelectHistory();
      this.session = void 0;
      this.replaceState(__spreadProps(__spreadValues({}, _TldrawApp.defaultState), {
        settings: __spreadValues({}, this.state.settings),
        document: migrate(document2, _TldrawApp.version),
        appState: __spreadProps(__spreadValues(__spreadValues({}, _TldrawApp.defaultState.appState), this.state.appState), {
          currentPageId: Object.keys(document2.pages)[0],
          disableAssets: this.disableAssets
        })
      }), "loaded_document");
      const { point, zoom } = this.pageState.camera;
      this.updateViewport(point, zoom);
      return this;
    });
    __publicField(this, "newProject", () => {
      if (!this.isLocal)
        return;
      this.fileSystemHandle = null;
      this.resetDocument();
    });
    __publicField(this, "saveProject", () => __async(this, null, function* () {
      if (this.readOnly)
        return;
      try {
        const fileHandle = yield saveToFileSystem(migrate(this.document, _TldrawApp.version), this.fileSystemHandle);
        this.fileSystemHandle = fileHandle;
        this.persist();
        this.isDirty = false;
      } catch (e) {
        console.error(e.message);
      }
      return this;
    }));
    __publicField(this, "saveProjectAs", () => __async(this, null, function* () {
      try {
        const fileHandle = yield saveToFileSystem(this.document, null);
        this.fileSystemHandle = fileHandle;
        this.persist();
        this.isDirty = false;
      } catch (e) {
        console.error(e.message);
      }
      return this;
    }));
    __publicField(this, "openProject", () => __async(this, null, function* () {
      if (!this.isLocal)
        return;
      try {
        const result = yield openFromFileSystem();
        if (!result) {
          throw Error();
        }
        const { fileHandle, document: document2 } = result;
        this.loadDocument(document2);
        this.fileSystemHandle = fileHandle;
        this.zoomToFit();
        this.persist();
      } catch (e) {
        console.error(e);
      } finally {
        this.persist();
      }
    }));
    __publicField(this, "openAsset", () => __async(this, null, function* () {
      if (!this.disableAssets)
        try {
          const file = yield openAssetFromFileSystem();
          if (!file)
            return;
          this.addMediaFromFile(file);
        } catch (e) {
          console.error(e);
        } finally {
          this.persist();
        }
    }));
    __publicField(this, "signOut", () => {
    });
    __publicField(this, "getAppState", () => {
      return this.appState;
    });
    __publicField(this, "getPage", (pageId = this.currentPageId) => {
      return TLDR.getPage(this.state, pageId || this.currentPageId);
    });
    __publicField(this, "getShapes", (pageId = this.currentPageId) => {
      return TLDR.getShapes(this.state, pageId || this.currentPageId);
    });
    __publicField(this, "getBindings", (pageId = this.currentPageId) => {
      return TLDR.getBindings(this.state, pageId || this.currentPageId);
    });
    __publicField(this, "getShape", (id, pageId = this.currentPageId) => {
      return TLDR.getShape(this.state, id, pageId);
    });
    __publicField(this, "getShapeBounds", (id, pageId = this.currentPageId) => {
      return TLDR.getBounds(this.getShape(id, pageId));
    });
    __publicField(this, "getBinding", (id, pageId = this.currentPageId) => {
      return TLDR.getBinding(this.state, id, pageId);
    });
    __publicField(this, "getPageState", (pageId = this.currentPageId) => {
      return TLDR.getPageState(this.state, pageId || this.currentPageId);
    });
    __publicField(this, "getPagePoint", (point, pageId = this.currentPageId) => {
      const { camera } = this.getPageState(pageId);
      return import_vec43.Vec.sub(import_vec43.Vec.div(point, camera.zoom), camera.point);
    });
    __publicField(this, "createPage", (id) => {
      if (this.readOnly)
        return this;
      const { width, height } = this.rendererBounds;
      return this.setState(createPage(this, [-width / 2, -height / 2], id));
    });
    __publicField(this, "changePage", (pageId) => {
      return this.setState(changePage(this, pageId));
    });
    __publicField(this, "renamePage", (pageId, name) => {
      if (this.readOnly)
        return this;
      return this.setState(renamePage(this, pageId, name));
    });
    __publicField(this, "duplicatePage", (pageId) => {
      if (this.readOnly)
        return this;
      return this.setState(duplicatePage(this, pageId));
    });
    __publicField(this, "deletePage", (pageId) => {
      if (this.readOnly)
        return this;
      if (Object.values(this.document.pages).length <= 1)
        return this;
      return this.setState(deletePage(this, pageId ? pageId : this.currentPageId));
    });
    __publicField(this, "copy", (ids = this.selectedIds) => {
      const copyingShapeIds = ids.flatMap((id) => TLDR.getDocumentBranch(this.state, id, this.currentPageId));
      const copyingShapes = copyingShapeIds.map((id) => import_core53.Utils.deepClone(this.getShape(id, this.currentPageId)));
      if (copyingShapes.length === 0)
        return this;
      const copyingBindings = Object.values(this.page.bindings).filter((binding) => copyingShapeIds.includes(binding.fromId) && copyingShapeIds.includes(binding.toId));
      const copyingAssets = copyingShapes.map((shape) => {
        if (!shape.assetId)
          return;
        return this.document.assets[shape.assetId];
      }).filter(Boolean);
      this.clipboard = {
        shapes: copyingShapes,
        bindings: copyingBindings,
        assets: copyingAssets
      };
      try {
        const text = JSON.stringify(__spreadValues({
          type: "tldr/clipboard"
        }, this.clipboard));
        navigator.clipboard.writeText(text).then(() => {
        }, () => {
        });
      } catch (e) {
      }
      this.pasteInfo.offset = [0, 0];
      this.pasteInfo.center = [0, 0];
      return this;
    });
    __publicField(this, "cut", (ids = this.selectedIds) => {
      this.copy(ids);
      this.delete(ids);
      return this;
    });
    __publicField(this, "paste", (point) => {
      if (this.readOnly)
        return;
      const pasteInCurrentPage = (shapes, bindings, assets) => {
        const idsMap = {};
        const newAssets = assets.filter((asset) => this.document.assets[asset.id] === void 0);
        if (newAssets.length) {
          this.patchState({
            document: {
              assets: Object.fromEntries(newAssets.map((asset) => [asset.id, asset]))
            }
          });
        }
        shapes.forEach((shape) => idsMap[shape.id] = import_core53.Utils.uniqueId());
        bindings.forEach((binding) => idsMap[binding.id] = import_core53.Utils.uniqueId());
        let startIndex = TLDR.getTopChildIndex(this.state, this.currentPageId);
        const shapesToPaste = shapes.sort((a, b) => a.childIndex - b.childIndex).map((shape) => {
          const parentShapeId = idsMap[shape.parentId];
          const copy = __spreadProps(__spreadValues({}, shape), {
            id: idsMap[shape.id],
            parentId: parentShapeId || this.currentPageId
          });
          if (shape.children) {
            copy.children = shape.children.map((id) => idsMap[id]);
          }
          if (!parentShapeId) {
            copy.childIndex = startIndex;
            startIndex++;
          }
          if (copy.handles) {
            Object.values(copy.handles).forEach((handle) => {
              if (handle.bindingId) {
                handle.bindingId = idsMap[handle.bindingId];
              }
            });
          }
          return copy;
        });
        const bindingsToPaste = bindings.map((binding) => __spreadProps(__spreadValues({}, binding), {
          id: idsMap[binding.id],
          toId: idsMap[binding.toId],
          fromId: idsMap[binding.fromId]
        }));
        const commonBounds = import_core53.Utils.getCommonBounds(shapesToPaste.map(TLDR.getBounds));
        let center = import_vec43.Vec.toFixed(this.getPagePoint(point || this.centerPoint));
        if (import_vec43.Vec.dist(center, this.pasteInfo.center) < 2 || import_vec43.Vec.dist(center, import_vec43.Vec.toFixed(import_core53.Utils.getBoundsCenter(commonBounds))) < 2) {
          center = import_vec43.Vec.add(center, this.pasteInfo.offset);
          this.pasteInfo.offset = import_vec43.Vec.add(this.pasteInfo.offset, [GRID_SIZE, GRID_SIZE]);
        } else {
          this.pasteInfo.center = center;
          this.pasteInfo.offset = [0, 0];
        }
        const centeredBounds = import_core53.Utils.centerBounds(commonBounds, center);
        const delta = import_vec43.Vec.sub(import_core53.Utils.getBoundsCenter(centeredBounds), import_core53.Utils.getBoundsCenter(commonBounds));
        this.create(shapesToPaste.map((shape) => TLDR.getShapeUtil(shape.type).create(__spreadProps(__spreadValues({}, shape), {
          point: import_vec43.Vec.toFixed(import_vec43.Vec.add(shape.point, delta)),
          parentId: shape.parentId || this.currentPageId
        }))), bindingsToPaste);
      };
      if (!("clipboard" in navigator && navigator.clipboard.readText)) {
        TLDR.warn("This browser does not support the Clipboard API!");
        if (this.clipboard) {
          pasteInCurrentPage(this.clipboard.shapes, this.clipboard.bindings, this.clipboard.assets);
        }
        return;
      }
      navigator.clipboard.readText().then((result) => {
        const data = JSON.parse(result);
        if (data.type === "tldr/clipboard") {
          pasteInCurrentPage(data.shapes, data.bindings, data.assets);
        } else {
          TLDR.warn("The selected shape was not a tldraw shape, treating as text.");
          const shapeId = import_core53.Utils.uniqueId();
          this.createShapes({
            id: shapeId,
            type: "text" /* Text */,
            parentId: this.appState.currentPageId,
            text: TLDR.normalizeText(result),
            point: this.getPagePoint(this.centerPoint, this.currentPageId),
            style: __spreadValues({}, this.appState.currentStyle)
          });
          this.select(shapeId);
        }
      }).catch(() => {
        TLDR.warn("Read permissions denied!");
        if (this.clipboard) {
          pasteInCurrentPage(this.clipboard.shapes, this.clipboard.bindings, this.clipboard.assets);
        }
      });
      return this;
    });
    __publicField(this, "copySvg", (ids = this.selectedIds, pageId = this.currentPageId) => {
      if (ids.length === 0)
        ids = Object.keys(this.page.shapes);
      if (ids.length === 0)
        return;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
      style.textContent = `@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Crimson+Pro&display=block');`;
      defs.appendChild(style);
      svg.appendChild(defs);
      const shapes = ids.map((id) => this.getShape(id, pageId)).sort((a, b) => a.childIndex - b.childIndex);
      const commonBounds = import_core53.Utils.getCommonBounds(shapes.map(TLDR.getRotatedBounds));
      const getSvgElementForShape = (shape) => {
        const util = TLDR.getShapeUtil(shape);
        const bounds = util.getBounds(shape);
        const elm = util.getSvgElement(shape);
        if (!elm)
          return;
        if (shape.type === "image" /* Image */) {
          elm.setAttribute("xlink:href", this.document.assets[shape.assetId].src);
        } else if (shape.type === "video" /* Video */) {
          elm.setAttribute("xlink:href", this.serializeVideo(shape.id));
        }
        elm.setAttribute("transform", `translate(${SVG_EXPORT_PADDING + shape.point[0] - commonBounds.minX}, ${SVG_EXPORT_PADDING + shape.point[1] - commonBounds.minY}) rotate(${(shape.rotation || 0) * 180 / Math.PI}, ${bounds.width / 2}, ${bounds.height / 2})`);
        return elm;
      };
      shapes.forEach((shape) => {
        var _a;
        if ((_a = shape.children) == null ? void 0 : _a.length) {
          const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
          shape.children.forEach((childId) => {
            const shape2 = this.getShape(childId, pageId);
            const elm2 = getSvgElementForShape(shape2);
            if (elm2)
              g.appendChild(elm2);
          });
          svg.appendChild(g);
          return;
        }
        const elm = getSvgElementForShape(shape);
        if (elm)
          svg.appendChild(elm);
      });
      svg.setAttribute("viewBox", [
        0,
        0,
        commonBounds.width + SVG_EXPORT_PADDING * 2,
        commonBounds.height + SVG_EXPORT_PADDING * 2
      ].join(" "));
      svg.setAttribute("width", String(commonBounds.width));
      svg.setAttribute("height", String(commonBounds.height));
      svg.setAttribute("fill", "transparent");
      svg.querySelectorAll(".tl-fill-hitarea, .tl-stroke-hitarea, .tl-binding-indicator").forEach((elm) => elm.remove());
      const svgString = new XMLSerializer().serializeToString(svg).replaceAll("&#10;      ", "").replaceAll(/((\s|")[0-9]*\.[0-9]{2})([0-9]*)(\b|"|\))/g, "$1");
      TLDR.copyStringToClipboard(svgString);
      return svgString;
    });
    __publicField(this, "copyJson", (ids = this.selectedIds, pageId = this.currentPageId) => {
      if (ids.length === 0)
        ids = Object.keys(this.page.shapes);
      if (ids.length === 0)
        return;
      const shapes = ids.map((id) => this.getShape(id, pageId));
      const json = JSON.stringify(shapes, null, 2);
      TLDR.copyStringToClipboard(json);
      return json;
    });
    __publicField(this, "setCamera", (point, zoom, reason) => {
      this.updateViewport(point, zoom);
      this.patchState({
        document: {
          pageStates: {
            [this.currentPageId]: { camera: { point, zoom } }
          }
        }
      }, reason);
      return this;
    });
    __publicField(this, "resetCamera", () => {
      return this.setCamera(this.centerPoint, 1, `reset_camera`);
    });
    __publicField(this, "pan", (delta) => {
      const { camera } = this.pageState;
      return this.setCamera(import_vec43.Vec.toFixed(import_vec43.Vec.sub(camera.point, delta)), camera.zoom, `panned`);
    });
    __publicField(this, "pinchZoom", (point, delta, zoom) => {
      const { camera } = this.pageState;
      const nextPoint = import_vec43.Vec.sub(camera.point, import_vec43.Vec.div(delta, camera.zoom));
      const nextZoom = zoom;
      const p0 = import_vec43.Vec.sub(import_vec43.Vec.div(point, camera.zoom), nextPoint);
      const p1 = import_vec43.Vec.sub(import_vec43.Vec.div(point, nextZoom), nextPoint);
      return this.setCamera(import_vec43.Vec.toFixed(import_vec43.Vec.add(nextPoint, import_vec43.Vec.sub(p1, p0))), nextZoom, `pinch_zoomed`);
    });
    __publicField(this, "zoomTo", (next, center = this.centerPoint) => {
      const { zoom, point } = this.pageState.camera;
      const p0 = import_vec43.Vec.sub(import_vec43.Vec.div(center, zoom), point);
      const p1 = import_vec43.Vec.sub(import_vec43.Vec.div(center, next), point);
      return this.setCamera(import_vec43.Vec.toFixed(import_vec43.Vec.add(point, import_vec43.Vec.sub(p1, p0))), next, `zoomed_camera`);
    });
    __publicField(this, "zoomIn", () => {
      const i = Math.round(this.pageState.camera.zoom * 100 / 25);
      const nextZoom = TLDR.getCameraZoom((i + 1) * 0.25);
      return this.zoomTo(nextZoom);
    });
    __publicField(this, "zoomOut", () => {
      const i = Math.round(this.pageState.camera.zoom * 100 / 25);
      const nextZoom = TLDR.getCameraZoom((i - 1) * 0.25);
      return this.zoomTo(nextZoom);
    });
    __publicField(this, "zoomToFit", () => {
      const {
        shapes,
        pageState: { camera }
      } = this;
      if (shapes.length === 0)
        return this;
      const { rendererBounds } = this;
      const commonBounds = import_core53.Utils.getCommonBounds(shapes.map(TLDR.getBounds));
      let zoom = TLDR.getCameraZoom(Math.min((rendererBounds.width - FIT_TO_SCREEN_PADDING) / commonBounds.width, (rendererBounds.height - FIT_TO_SCREEN_PADDING) / commonBounds.height));
      zoom = camera.zoom === zoom || camera.zoom < 1 ? Math.min(1, zoom) : zoom;
      const mx = (rendererBounds.width - commonBounds.width * zoom) / 2 / zoom;
      const my = (rendererBounds.height - commonBounds.height * zoom) / 2 / zoom;
      return this.setCamera(import_vec43.Vec.toFixed(import_vec43.Vec.sub([mx, my], [commonBounds.minX, commonBounds.minY])), zoom, `zoomed_to_fit`);
    });
    __publicField(this, "zoomToSelection", () => {
      if (this.selectedIds.length === 0)
        return this;
      const { rendererBounds } = this;
      const selectedBounds = TLDR.getSelectedBounds(this.state);
      let zoom = TLDR.getCameraZoom(Math.min((rendererBounds.width - FIT_TO_SCREEN_PADDING) / selectedBounds.width, (rendererBounds.height - FIT_TO_SCREEN_PADDING) / selectedBounds.height));
      zoom = this.pageState.camera.zoom === zoom || this.pageState.camera.zoom < 1 ? Math.min(1, zoom) : zoom;
      const mx = (rendererBounds.width - selectedBounds.width * zoom) / 2 / zoom;
      const my = (rendererBounds.height - selectedBounds.height * zoom) / 2 / zoom;
      return this.setCamera(import_vec43.Vec.toFixed(import_vec43.Vec.sub([mx, my], [selectedBounds.minX, selectedBounds.minY])), zoom, `zoomed_to_selection`);
    });
    __publicField(this, "zoomToContent", () => {
      const shapes = this.shapes;
      const pageState = this.pageState;
      if (shapes.length === 0)
        return this;
      const { rendererBounds } = this;
      const { zoom } = pageState.camera;
      const commonBounds = import_core53.Utils.getCommonBounds(shapes.map(TLDR.getBounds));
      const mx = (rendererBounds.width - commonBounds.width * zoom) / 2 / zoom;
      const my = (rendererBounds.height - commonBounds.height * zoom) / 2 / zoom;
      return this.setCamera(import_vec43.Vec.toFixed(import_vec43.Vec.sub([mx, my], [commonBounds.minX, commonBounds.minY])), this.pageState.camera.zoom, `zoomed_to_content`);
    });
    __publicField(this, "resetZoom", () => {
      return this.zoomTo(1);
    });
    __publicField(this, "zoomBy", import_core53.Utils.throttle((delta, center) => {
      const { zoom } = this.pageState.camera;
      const nextZoom = TLDR.getCameraZoom(zoom - delta * zoom);
      return this.zoomTo(nextZoom, center);
    }, 16));
    __publicField(this, "clearSelectHistory", () => {
      this.selectHistory.pointer = 0;
      this.selectHistory.stack = [this.selectedIds];
      return this;
    });
    __publicField(this, "addToSelectHistory", (ids) => {
      if (this.selectHistory.pointer < this.selectHistory.stack.length) {
        this.selectHistory.stack = this.selectHistory.stack.slice(0, this.selectHistory.pointer + 1);
      }
      this.selectHistory.pointer++;
      this.selectHistory.stack.push(ids);
      return this;
    });
    __publicField(this, "setSelectedIds", (ids, push = false) => {
      const nextIds = push ? [...this.pageState.selectedIds, ...ids] : [...ids];
      return this.patchState({
        appState: {
          activeTool: "select"
        },
        document: {
          pageStates: {
            [this.currentPageId]: {
              selectedIds: nextIds
            }
          }
        }
      }, `selected`);
    });
    __publicField(this, "undoSelect", () => {
      if (this.selectHistory.pointer > 0) {
        this.selectHistory.pointer--;
        this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer]);
      }
      return this;
    });
    __publicField(this, "redoSelect", () => {
      if (this.selectHistory.pointer < this.selectHistory.stack.length - 1) {
        this.selectHistory.pointer++;
        this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer]);
      }
      return this;
    });
    __publicField(this, "select", (...ids) => {
      ids.forEach((id) => {
        if (!this.page.shapes[id]) {
          throw Error(`That shape does not exist on page ${this.currentPageId}`);
        }
      });
      this.setSelectedIds(ids);
      this.addToSelectHistory(ids);
      return this;
    });
    __publicField(this, "selectAll", (pageId = this.currentPageId) => {
      if (this.session)
        return this;
      this.setSelectedIds(Object.values(this.document.pages[pageId].shapes).filter((shape) => shape.parentId === pageId).map((shape) => shape.id));
      this.addToSelectHistory(this.selectedIds);
      this.selectTool("select");
      return this;
    });
    __publicField(this, "selectNone", () => {
      this.setSelectedIds([]);
      this.addToSelectHistory(this.selectedIds);
      return this;
    });
    __publicField(this, "startSession", (type, ...args) => {
      if (this.readOnly && type !== "brush" /* Brush */)
        return this;
      if (this.session) {
        TLDR.warn(`Already in a session! (${this.session.constructor.name})`);
        this.cancelSession();
      }
      const Session = getSession(type);
      this.session = new Session(this, ...args);
      const result = this.session.start();
      if (result) {
        this.patchState(result, `session:start_${this.session.constructor.name}`);
      }
      return this;
    });
    __publicField(this, "updateSession", () => {
      const { session } = this;
      if (!session)
        return this;
      const patch = session.update();
      if (!patch)
        return this;
      return this.patchState(patch, `session:${session == null ? void 0 : session.constructor.name}`);
    });
    __publicField(this, "cancelSession", () => {
      const { session } = this;
      if (!session)
        return this;
      this.session = void 0;
      const result = session.cancel();
      if (result) {
        this.patchState(result, `session:cancel:${session.constructor.name}`);
      }
      return this;
    });
    __publicField(this, "completeSession", () => {
      var _a, _b, _c, _d, _e, _f, _g;
      const { session } = this;
      if (!session)
        return this;
      this.session = void 0;
      const result = session.complete();
      if (result === void 0) {
        this.isCreating = false;
        return this.patchState({
          appState: {
            status: "idle" /* Idle */
          },
          document: {
            pageStates: {
              [this.currentPageId]: {
                editingId: void 0,
                bindingId: void 0,
                hoveredId: void 0
              }
            }
          }
        }, `session:complete:${session.constructor.name}`);
      } else if ("after" in result) {
        if (this.isCreating) {
          result.before = {
            appState: __spreadProps(__spreadValues({}, result.before.appState), {
              status: "idle" /* Idle */
            }),
            document: {
              pages: {
                [this.currentPageId]: {
                  shapes: Object.fromEntries(this.selectedIds.map((id) => [id, void 0]))
                }
              },
              pageStates: {
                [this.currentPageId]: {
                  selectedIds: [],
                  editingId: null,
                  bindingId: null,
                  hoveredId: null
                }
              }
            }
          };
          if (this.appState.isToolLocked) {
            const pageState = ((_c = (_b = (_a = result.after) == null ? void 0 : _a.document) == null ? void 0 : _b.pageStates) == null ? void 0 : _c[this.currentPageId]) || {};
            pageState.selectedIds = [];
          }
          this.isCreating = false;
        }
        result.after.appState = __spreadProps(__spreadValues({}, result.after.appState), {
          status: "idle" /* Idle */
        });
        result.after.document = __spreadProps(__spreadValues({}, result.after.document), {
          pageStates: __spreadProps(__spreadValues({}, (_d = result.after.document) == null ? void 0 : _d.pageStates), {
            [this.currentPageId]: __spreadProps(__spreadValues({}, (((_e = result.after.document) == null ? void 0 : _e.pageStates) || {})[this.currentPageId]), {
              editingId: null
            })
          })
        });
        this.setState(result, `session:complete:${session.constructor.name}`);
      } else {
        this.patchState(__spreadProps(__spreadValues({}, result), {
          appState: __spreadProps(__spreadValues({}, result.appState), {
            status: "idle" /* Idle */
          }),
          document: __spreadProps(__spreadValues({}, result.document), {
            pageStates: {
              [this.currentPageId]: __spreadProps(__spreadValues({}, (_g = (_f = result.document) == null ? void 0 : _f.pageStates) == null ? void 0 : _g[this.currentPageId]), {
                editingId: null
              })
            }
          })
        }), `session:complete:${session.constructor.name}`);
      }
      return this;
    });
    __publicField(this, "createShapes", (...shapes) => {
      if (shapes.length === 0)
        return this;
      return this.create(shapes.map((shape) => {
        return TLDR.getShapeUtil(shape.type).create(__spreadValues({
          parentId: this.currentPageId
        }, shape));
      }));
    });
    __publicField(this, "updateShapes", (...shapes) => {
      const pageShapes = this.document.pages[this.currentPageId].shapes;
      const shapesToUpdate = shapes.filter((shape) => pageShapes[shape.id]);
      if (shapesToUpdate.length === 0)
        return this;
      return this.setState(updateShapes(this, shapesToUpdate, this.currentPageId), "updated_shapes");
    });
    __publicField(this, "create", (shapes = [], bindings = []) => {
      if (shapes.length === 0)
        return this;
      return this.setState(createShapes(this, shapes, bindings));
    });
    __publicField(this, "patchCreate", (shapes = [], bindings = []) => {
      if (shapes.length === 0)
        return this;
      return this.patchState(createShapes(this, shapes, bindings).after);
    });
    __publicField(this, "delete", (ids = this.selectedIds) => {
      var _a, _b;
      if (ids.length === 0)
        return this;
      const drawCommand = deleteShapes(this, ids);
      if (this.callbacks.onAssetDelete && ((_a = drawCommand.before.document) == null ? void 0 : _a.assets) && ((_b = drawCommand.after.document) == null ? void 0 : _b.assets)) {
        const beforeAssetIds = Object.keys(drawCommand.before.document.assets).filter((k) => !!drawCommand.before.document.assets[k]);
        const afterAssetIds = Object.keys(drawCommand.after.document.assets).filter((k) => !!drawCommand.after.document.assets[k]);
        const intersection = beforeAssetIds.filter((x) => !afterAssetIds.includes(x));
        intersection.forEach((id) => this.callbacks.onAssetDelete(id));
      }
      return this.setState(drawCommand);
    });
    __publicField(this, "deleteAll", () => {
      this.selectAll();
      this.delete();
      return this;
    });
    __publicField(this, "style", (style, ids = this.selectedIds) => {
      return this.setState(styleShapes(this, ids, style));
    });
    __publicField(this, "align", (type, ids = this.selectedIds) => {
      if (ids.length < 2)
        return this;
      return this.setState(alignShapes(this, ids, type));
    });
    __publicField(this, "distribute", (direction, ids = this.selectedIds) => {
      if (ids.length < 3)
        return this;
      return this.setState(distributeShapes(this, ids, direction));
    });
    __publicField(this, "stretch", (direction, ids = this.selectedIds) => {
      if (ids.length < 2)
        return this;
      return this.setState(stretchShapes(this, ids, direction));
    });
    __publicField(this, "flipHorizontal", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(flipShapes(this, ids, "horizontal" /* Horizontal */));
    });
    __publicField(this, "flipVertical", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(flipShapes(this, ids, "vertical" /* Vertical */));
    });
    __publicField(this, "moveToPage", (toPageId, fromPageId = this.currentPageId, ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      const { rendererBounds } = this;
      this.setState(moveShapesToPage(this, ids, rendererBounds, fromPageId, toPageId));
      return this;
    });
    __publicField(this, "moveToBack", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, "toBack" /* ToBack */));
    });
    __publicField(this, "moveBackward", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, "backward" /* Backward */));
    });
    __publicField(this, "moveForward", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, "forward" /* Forward */));
    });
    __publicField(this, "moveToFront", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, "toFront" /* ToFront */));
    });
    __publicField(this, "nudge", (delta, isMajor = false, ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      const size = isMajor ? this.settings.showGrid ? this.currentGrid * 4 : 10 : this.settings.showGrid ? this.currentGrid : 1;
      return this.setState(translateShapes(this, ids, import_vec43.Vec.mul(delta, size)));
    });
    __publicField(this, "duplicate", (ids = this.selectedIds, point) => {
      if (this.readOnly)
        return this;
      if (ids.length === 0)
        return this;
      return this.setState(duplicateShapes(this, ids, point));
    });
    __publicField(this, "resetBounds", (ids = this.selectedIds) => {
      const command = resetBounds(this, ids, this.currentPageId);
      return this.setState(resetBounds(this, ids, this.currentPageId), command.id);
    });
    __publicField(this, "toggleHidden", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(toggleShapeProp(this, ids, "isHidden"));
    });
    __publicField(this, "toggleLocked", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(toggleShapeProp(this, ids, "isLocked"));
    });
    __publicField(this, "toggleAspectRatioLocked", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(toggleShapeProp(this, ids, "isAspectRatioLocked"));
    });
    __publicField(this, "toggleDecoration", (handleId, ids = this.selectedIds) => {
      if (ids.length === 0 || !(handleId === "start" || handleId === "end"))
        return this;
      return this.setState(toggleShapesDecoration(this, ids, handleId));
    });
    __publicField(this, "setShapeProps", (props, ids = this.selectedIds) => {
      return this.setState(setShapesProps(this, ids, props));
    });
    __publicField(this, "rotate", (delta = Math.PI * -0.5, ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      const change = rotateShapes(this, ids, delta);
      if (!change)
        return this;
      return this.setState(change);
    });
    __publicField(this, "group", (ids = this.selectedIds, groupId = import_core53.Utils.uniqueId(), pageId = this.currentPageId) => {
      if (this.readOnly)
        return this;
      if (ids.length === 1 && this.getShape(ids[0], pageId).type === "group" /* Group */) {
        return this.ungroup(ids, pageId);
      }
      if (ids.length < 2)
        return this;
      const command = groupShapes(this, ids, groupId, pageId);
      if (!command)
        return this;
      return this.setState(command);
    });
    __publicField(this, "ungroup", (ids = this.selectedIds, pageId = this.currentPageId) => {
      if (this.readOnly)
        return this;
      const groups = ids.map((id) => this.getShape(id, pageId)).filter((shape) => shape.type === "group" /* Group */);
      if (groups.length === 0)
        return this;
      const command = ungroupShapes(this, ids, groups, pageId);
      if (!command)
        return this;
      return this.setState(command);
    });
    __publicField(this, "cancel", () => {
      var _a, _b;
      (_b = (_a = this.currentTool).onCancel) == null ? void 0 : _b.call(_a);
      return this;
    });
    __publicField(this, "addMediaFromFile", (_0, ..._1) => __async(this, [_0, ..._1], function* (file, point = this.centerPoint) {
      this.setIsLoading(true);
      const id = import_core53.Utils.uniqueId();
      const pagePoint = this.getPagePoint(point);
      const extension = file.name.match(/\.[0-9a-z]+$/i);
      if (!extension)
        throw Error("No extension");
      const isImage = IMAGE_EXTENSIONS.includes(extension[0].toLowerCase());
      const isVideo = VIDEO_EXTENSIONS.includes(extension[0].toLowerCase());
      if (!(isImage || isVideo))
        throw Error("Wrong extension");
      const shapeType = isImage ? "image" /* Image */ : "video" /* Video */;
      const assetType = isImage ? "image" /* Image */ : "video" /* Video */;
      let src;
      try {
        if (this.callbacks.onAssetCreate) {
          const result = yield this.callbacks.onAssetCreate(file, id);
          if (!result)
            throw Error("Asset creation callback returned false");
          src = result;
        } else {
          src = yield fileToBase64(file);
        }
        if (typeof src === "string") {
          let size = [0, 0];
          if (isImage) {
            if (extension[0] == ".svg") {
              let viewBox;
              const svgString = yield fileToText(file);
              const viewBoxAttribute = this.getViewboxFromSVG(svgString);
              if (viewBoxAttribute) {
                viewBox = viewBoxAttribute.split(" ");
                size[0] = parseFloat(viewBox[2]);
                size[1] = parseFloat(viewBox[3]);
              }
            }
            if (import_vec43.Vec.isEqual(size, [0, 0])) {
              size = yield getImageSizeFromSrc(src);
            }
          } else {
            size = yield getVideoSizeFromSrc(src);
          }
          const match = Object.values(this.document.assets).find((asset) => asset.type === assetType && asset.src === src);
          let assetId;
          if (!match) {
            assetId = import_core53.Utils.uniqueId();
            const asset = {
              id: assetId,
              type: assetType,
              src,
              size
            };
            this.patchState({
              document: {
                assets: {
                  [assetId]: asset
                }
              }
            });
          } else
            assetId = match.id;
          this.createImageOrVideoShapeAtPoint(id, shapeType, pagePoint, size, assetId);
        }
      } catch (error) {
        console.warn(error);
        this.setIsLoading(false);
        return this;
      }
      this.setIsLoading(false);
      return this;
    }));
    __publicField(this, "getViewboxFromSVG", (svgStr) => {
      const viewBoxRegex = /.*?viewBox=["'](-?[\d.]+[, ]+-?[\d.]+[, ][\d.]+[, ][\d.]+)["']/;
      if (typeof svgStr === "string") {
        const matches = svgStr.match(viewBoxRegex);
        return matches && matches.length >= 2 ? matches[1] : null;
      }
      console.warn("could not get viewbox from svg string");
      this.setIsLoading(false);
      return null;
    });
    __publicField(this, "onKeyDown", (key, info, e) => {
      var _a, _b;
      switch (e.key) {
        case "/": {
          if (this.status === "idle" && !this.pageState.editingId) {
            const { shiftKey, metaKey, altKey, ctrlKey, spaceKey } = this;
            this.onPointerDown({
              target: "canvas",
              pointerId: 0,
              origin: info.point,
              point: info.point,
              delta: [0, 0],
              pressure: 0.5,
              shiftKey,
              ctrlKey,
              metaKey,
              altKey,
              spaceKey
            }, {
              shiftKey,
              altKey,
              ctrlKey,
              pointerId: 0,
              clientX: info.point[0],
              clientY: info.point[1]
            });
          }
          break;
        }
        case "Escape": {
          this.cancel();
          break;
        }
        case "Meta": {
          this.metaKey = true;
          break;
        }
        case "Alt": {
          this.altKey = true;
          break;
        }
        case "Control": {
          this.ctrlKey = true;
          break;
        }
        case " ": {
          this.isForcePanning = true;
          this.spaceKey = true;
          break;
        }
      }
      (_b = (_a = this.currentTool).onKeyDown) == null ? void 0 : _b.call(_a, key, info, e);
      return this;
    });
    __publicField(this, "onKeyUp", (key, info, e) => {
      var _a, _b;
      if (!info)
        return;
      switch (e.key) {
        case "/": {
          const { currentPoint, shiftKey, metaKey, altKey, ctrlKey, spaceKey } = this;
          this.onPointerUp({
            target: "canvas",
            pointerId: 0,
            origin: currentPoint,
            point: currentPoint,
            delta: [0, 0],
            pressure: 0.5,
            shiftKey,
            ctrlKey,
            metaKey,
            altKey,
            spaceKey
          }, {
            shiftKey,
            altKey,
            ctrlKey,
            pointerId: 0,
            clientX: currentPoint[0],
            clientY: currentPoint[1]
          });
          break;
        }
        case "Meta": {
          this.metaKey = false;
          break;
        }
        case "Alt": {
          this.altKey = false;
          break;
        }
        case "Control": {
          this.ctrlKey = false;
          break;
        }
        case " ": {
          this.isForcePanning = false;
          this.spaceKey = false;
          break;
        }
      }
      (_b = (_a = this.currentTool).onKeyUp) == null ? void 0 : _b.call(_a, key, info, e);
    });
    __publicField(this, "refreshBoundingBoxes", () => {
      const force = this.shapes.map((shape) => {
        return [
          shape.id,
          __spreadValues({
            point: [...shape.point]
          }, "label" in shape && { label: "" })
        ];
      });
      const restore = this.shapes.map((shape) => {
        return [
          shape.id,
          __spreadValues({
            point: [...shape.point]
          }, "label" in shape && { label: shape.label })
        ];
      });
      clearPrevSize();
      this.patchState({
        document: {
          pages: {
            [this.currentPageId]: {
              shapes: Object.fromEntries(force)
            }
          }
        }
      });
      this.patchState({
        document: {
          pages: {
            [this.currentPageId]: {
              shapes: Object.fromEntries(restore)
            }
          }
        }
      });
    });
    __publicField(this, "onDragOver", (e) => {
      e.preventDefault();
    });
    __publicField(this, "onDrop", (e) => __async(this, null, function* () {
      var _a;
      e.preventDefault();
      if (this.disableAssets)
        return this;
      if ((_a = e.dataTransfer.files) == null ? void 0 : _a.length) {
        const file = e.dataTransfer.files[0];
        this.addMediaFromFile(file, [e.clientX, e.clientY]);
      }
      return this;
    }));
    __publicField(this, "onPinchStart", (info, e) => {
      var _a, _b;
      (_b = (_a = this.currentTool).onPinchStart) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPinchEnd", (info, e) => {
      var _a, _b;
      return (_b = (_a = this.currentTool).onPinchEnd) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPinch", (info, e) => {
      var _a, _b;
      return (_b = (_a = this.currentTool).onPinch) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPan", (info, e) => {
      if (this.appState.status === "pinching")
        return;
      const delta = import_vec43.Vec.div(info.delta, this.pageState.camera.zoom);
      const prev = this.pageState.camera.point;
      const next = import_vec43.Vec.sub(prev, delta);
      if (import_vec43.Vec.isEqual(next, prev))
        return;
      this.pan(delta);
      if (!this.isForcePanning)
        this.onPointerMove(info, e);
    });
    __publicField(this, "onZoom", (info, e) => {
      if (this.state.appState.status !== "idle" /* Idle */)
        return;
      const delta = info.delta[2] / 50;
      this.zoomBy(delta, info.point);
      this.onPointerMove(info, e);
    });
    __publicField(this, "updateInputs", (info) => {
      this.currentPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.shiftKey = info.shiftKey;
      this.altKey = info.altKey;
      this.ctrlKey = info.ctrlKey;
      this.metaKey = info.metaKey;
    });
    __publicField(this, "onPointerMove", (info, e) => {
      var _a, _b, _c, _d, _e;
      this.previousPoint = this.currentPoint;
      this.updateInputs(info, e);
      if (this.isForcePanning && this.isPointing) {
        (_a = this.onPan) == null ? void 0 : _a.call(this, __spreadProps(__spreadValues({}, info), { delta: import_vec43.Vec.neg(info.delta) }), e);
        return;
      }
      (_c = (_b = this.currentTool).onPointerMove) == null ? void 0 : _c.call(_b, info, e);
      if (this.state.room) {
        const { users, userId } = this.state.room;
        (_e = (_d = this.callbacks).onChangePresence) == null ? void 0 : _e.call(_d, this, __spreadProps(__spreadValues({}, users[userId]), {
          point: this.getPagePoint(info.point)
        }));
      }
    });
    __publicField(this, "onPointerDown", (info, e) => {
      var _a, _b;
      if (e.buttons === 4) {
        this.isForcePanning = true;
      } else if (this.isPointing) {
        return;
      }
      this.isPointing = true;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      if (this.isForcePanning)
        return;
      (_b = (_a = this.currentTool).onPointerDown) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointerUp", (info, e) => {
      var _a, _b;
      this.isPointing = false;
      if (!this.shiftKey)
        this.isForcePanning = false;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointerUp) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRightPointCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointShape", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseShape", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickShape", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRightPointShape", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragShape", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onHoverShape", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onUnhoverShape", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointBounds", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickBounds", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRightPointBounds", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragBounds", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onHoverBounds", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onUnhoverBounds", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseBounds", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointBoundsHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickBoundsHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
      if (this.selectedIds.length !== 1)
        return;
      const shape = this.getShape(this.selectedIds[0]);
      if (shape.type === "image" /* Image */ || shape.type === "video" /* Video */) {
        const asset = this.document.assets[shape.assetId];
        const util = TLDR.getShapeUtil(shape);
        const centerA = util.getCenter(shape);
        const centerB = util.getCenter(__spreadProps(__spreadValues({}, shape), { size: asset.size }));
        const delta = import_vec43.Vec.sub(centerB, centerA);
        this.updateShapes({
          id: shape.id,
          point: import_vec43.Vec.sub(shape.point, delta),
          size: asset.size
        });
      }
    });
    __publicField(this, "onRightPointBoundsHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragBoundsHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onHoverBoundsHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onUnhoverBoundsHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseBoundsHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRightPointHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onHoverHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onUnhoverHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onShapeChange", (shape) => {
      this.updateShapes(shape);
    });
    __publicField(this, "onShapeBlur", () => {
      var _a, _b;
      if (performance.now() - this.editingStartTime < 50)
        return;
      const { editingId } = this.pageState;
      const { isToolLocked } = this.getAppState();
      if (editingId) {
        const shape = this.getShape(editingId);
        this.setEditingId();
        if (shape.type === "text" /* Text */) {
          if (shape.text.trim().length <= 0) {
            this.patchState(deleteShapes(this, [editingId]).after, "delete_empty_text");
          } else if (!isToolLocked) {
            this.select(editingId);
          }
        }
      }
      (_b = (_a = this.currentTool).onShapeBlur) == null ? void 0 : _b.call(_a);
    });
    __publicField(this, "onShapeClone", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onShapeClone) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRenderCountChange", (ids) => {
      const appState = this.getAppState();
      if (appState.isEmptyCanvas && ids.length > 0) {
        this.patchState({
          appState: {
            isEmptyCanvas: false
          }
        }, "empty_canvas:false");
      } else if (!appState.isEmptyCanvas && ids.length <= 0) {
        this.patchState({
          appState: {
            isEmptyCanvas: true
          }
        }, "empty_canvas:true");
      }
    });
    __publicField(this, "onError", () => {
    });
    __publicField(this, "getShapeUtil", TLDR.getShapeUtil);
    this.callbacks = callbacks;
  }
  setStatus(status) {
    return this.patchState({
      appState: { status }
    }, `set_status:${status}`);
  }
  get isMenuOpen() {
    return this.appState.isMenuOpen;
  }
  get isLoading() {
    return this.appState.isLoading;
  }
  get disableAssets() {
    return this.appState.disableAssets;
  }
  get history() {
    return this.stack.slice(0, this.pointer + 1);
  }
  set history(commands) {
    this.replaceHistory(commands);
  }
  get document() {
    return this.state.document;
  }
  get settings() {
    return this.state.settings;
  }
  get appState() {
    return this.state.appState;
  }
  get currentPageId() {
    return this.state.appState.currentPageId;
  }
  get page() {
    return this.state.document.pages[this.currentPageId];
  }
  get shapes() {
    return Object.values(this.page.shapes);
  }
  get bindings() {
    return Object.values(this.page.bindings);
  }
  get assets() {
    return Object.values(this.document.assets);
  }
  get pageState() {
    return this.state.document.pageStates[this.currentPageId];
  }
  get selectedIds() {
    return this.pageState.selectedIds;
  }
  createTextShapeAtPoint(point, id) {
    const {
      shapes,
      appState: { currentPageId, currentStyle }
    } = this;
    const childIndex = shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === currentPageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
    const Text2 = shapeUtils["text" /* Text */];
    const newShape = Text2.create({
      id: id || import_core53.Utils.uniqueId(),
      parentId: currentPageId,
      childIndex,
      point,
      style: __spreadValues({}, currentStyle)
    });
    const bounds = Text2.getBounds(newShape);
    newShape.point = import_vec43.Vec.sub(newShape.point, [bounds.width / 2, bounds.height / 2]);
    this.createShapes(newShape);
    this.setEditingId(newShape.id);
    return this;
  }
  createImageOrVideoShapeAtPoint(id, type, point, size, assetId) {
    const {
      shapes,
      appState: { currentPageId, currentStyle }
    } = this;
    const childIndex = shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === currentPageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
    const Shape = shapeUtils[type];
    const newShape = Shape.create({
      id,
      parentId: currentPageId,
      childIndex,
      point,
      size,
      style: __spreadValues({}, currentStyle),
      assetId
    });
    const bounds = Shape.getBounds(newShape);
    newShape.point = import_vec43.Vec.sub(newShape.point, [bounds.width / 2, bounds.height / 2]);
    this.createShapes(newShape);
    return this;
  }
  isSelected(id) {
    return this.selectedIds.includes(id);
  }
  serializeVideo(id) {
    const video = document.getElementById(id + "_video");
    if (video) {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      return canvas.toDataURL("image/png");
    } else
      throw new Error("Video with id " + id + " not found");
  }
  serializeImage(id) {
    const image = document.getElementById(id + "_image");
    if (image) {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      canvas.getContext("2d").drawImage(image, 0, 0);
      return canvas.toDataURL("image/png");
    } else
      throw new Error("Image with id " + id + " not found");
  }
  patchAssets(assets) {
    this.document.assets = __spreadValues(__spreadValues({}, this.document.assets), assets);
  }
  exportAllShapesAs(type) {
    return __async(this, null, function* () {
      const initialSelectedIds = [...this.selectedIds];
      this.selectAll();
      const { width, height } = import_core53.Utils.expandBounds(TLDR.getSelectedBounds(this.state), 64);
      const idsToExport = TLDR.getAllEffectedShapeIds(this.state, this.selectedIds, this.currentPageId);
      this.setSelectedIds(initialSelectedIds);
      yield this.exportShapesAs(idsToExport, [width, height], type);
    });
  }
  exportSelectedShapesAs(type) {
    return __async(this, null, function* () {
      const { width, height } = import_core53.Utils.expandBounds(TLDR.getSelectedBounds(this.state), 64);
      const idsToExport = TLDR.getAllEffectedShapeIds(this.state, this.selectedIds, this.currentPageId);
      yield this.exportShapesAs(idsToExport, [width, height], type);
    });
  }
  exportShapesAs(shapeIds, size, type) {
    return __async(this, null, function* () {
      var _a;
      if (!this.callbacks.onExport)
        return;
      this.setIsLoading(true);
      try {
        const assets = {};
        const shapes = shapeIds.map((id) => {
          const shape = __spreadValues({}, this.getShape(id));
          if (shape.assetId) {
            const asset = __spreadValues({}, this.document.assets[shape.assetId]);
            if (asset.src.toLowerCase().endsWith("gif")) {
              asset.src = this.serializeImage(shape.id);
            }
            if (shape.type === "video" /* Video */) {
              asset.src = this.serializeVideo(shape.id);
              asset.type = "image" /* Image */;
              shape.type = "image" /* Image */;
            }
            assets[shape.assetId] = asset;
          }
          return shape;
        });
        let serialized;
        if (type === "svg" /* SVG */) {
          serialized = this.copySvg(shapeIds);
        } else if (type === "json" /* JSON */) {
          serialized = this.copyJson(shapeIds);
        }
        const exportInfo = {
          currentPageId: this.currentPageId,
          name: (_a = this.page.name) != null ? _a : "export",
          shapes,
          assets,
          type,
          serialized,
          size: type === "png" ? import_vec43.Vec.mul(size, 2) : size
        };
        yield this.callbacks.onExport(exportInfo);
      } catch (error) {
        console.error(error);
      } finally {
        this.setIsLoading(false);
      }
    });
  }
  get room() {
    return this.state.room;
  }
  get isLocal() {
    return this.state.room === void 0 || this.state.room.id === "local";
  }
  get status() {
    return this.appState.status;
  }
  get currentUser() {
    if (!this.state.room)
      return;
    return this.state.room.users[this.state.room.userId];
  }
  get centerPoint() {
    const { width, height } = this.rendererBounds;
    return import_vec43.Vec.toFixed([width / 2, height / 2]);
  }
  get currentGrid() {
    const { zoom } = this.pageState.camera;
    if (zoom < 0.15) {
      return GRID_SIZE * 16;
    } else if (zoom < 1) {
      return GRID_SIZE * 4;
    } else {
      return GRID_SIZE * 1;
    }
  }
};
var TldrawApp = _TldrawApp;
__publicField(TldrawApp, "version", 15.3);
__publicField(TldrawApp, "defaultDocument", {
  id: "doc",
  name: "New Document",
  version: _TldrawApp.version,
  pages: {
    page: {
      id: "page",
      name: "Page 1",
      childIndex: 1,
      shapes: {},
      bindings: {}
    }
  },
  pageStates: {
    page: {
      id: "page",
      selectedIds: [],
      camera: {
        point: [0, 0],
        zoom: 1
      }
    }
  },
  assets: {}
});
__publicField(TldrawApp, "defaultState", {
  settings: {
    isCadSelectMode: false,
    isPenMode: false,
    isDarkMode: false,
    isZoomSnap: false,
    isFocusMode: false,
    isSnapping: false,
    isDebugMode: false,
    isReadonlyMode: false,
    nudgeDistanceLarge: 16,
    nudgeDistanceSmall: 1,
    showRotateHandles: true,
    showBindingHandles: true,
    showCloneHandles: false,
    showGrid: false
  },
  appState: {
    status: "idle" /* Idle */,
    activeTool: "select",
    hoveredId: void 0,
    currentPageId: "page",
    currentStyle: defaultStyle,
    isToolLocked: false,
    isMenuOpen: false,
    isEmptyCanvas: false,
    snapLines: [],
    isLoading: false,
    disableAssets: false
  },
  document: _TldrawApp.defaultDocument
});

// src/state/tools/index.ts
var tools = {
  select: SelectTool,
  erase: EraseTool,
  ["text" /* Text */]: TextTool,
  ["draw" /* Draw */]: DrawTool,
  ["ellipse" /* Ellipse */]: EllipseTool,
  ["rectangle" /* Rectangle */]: RectangleTool,
  ["triangle" /* Triangle */]: TriangleTool,
  ["line" /* Line */]: LineTool,
  ["arrow" /* Arrow */]: ArrowTool,
  ["sticky" /* Sticky */]: StickyTool
};

// src/hooks/useKeyboardShortcuts.tsx
var React26 = __toESM(require("react"));
var import_react_hotkeys_hook = require("react-hotkeys-hook");
function useKeyboardShortcuts(ref) {
  const app = useTldrawApp();
  const canHandleEvent = React26.useCallback((ignoreMenus = false) => {
    const elm = ref.current;
    if (ignoreMenus && app.isMenuOpen)
      return true;
    return elm && (document.activeElement === elm || elm.contains(document.activeElement));
  }, [ref]);
  (0, import_react_hotkeys_hook.useHotkeys)("v,1", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("select");
  }, [app, ref.current]);
  (0, import_react_hotkeys_hook.useHotkeys)("d,p,2", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("draw" /* Draw */);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("e,3", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("erase");
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("r,4", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("rectangle" /* Rectangle */);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("o,5", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("ellipse" /* Ellipse */);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("g,6", () => {
    if (!canHandleEvent())
      return;
    app.selectTool("triangle" /* Triangle */);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("l,7", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("line" /* Line */);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("a,8", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("arrow" /* Arrow */);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("t,9", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("text" /* Text */);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("s,0", () => {
    if (!canHandleEvent(true))
      return;
    app.selectTool("sticky" /* Sticky */);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift+d,\u2318+shift+d", (e) => {
    if (!canHandleEvent(true))
      return;
    app.toggleDarkMode();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+.,\u2318+.", () => {
    if (!canHandleEvent(true))
      return;
    app.toggleFocusMode();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift+g,\u2318+shift+g", () => {
    if (!canHandleEvent(true))
      return;
    app.toggleGrid();
  }, void 0, [app]);
  const { onNewProject, onOpenProject, onSaveProject, onSaveProjectAs, onOpenMedia } = useFileSystemHandlers();
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+n,\u2318+n", (e) => {
    if (!canHandleEvent())
      return;
    onNewProject(e);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+s,\u2318+s", (e) => {
    if (!canHandleEvent())
      return;
    onSaveProject(e);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift+s,\u2318+shift+s", (e) => {
    if (!canHandleEvent())
      return;
    onSaveProjectAs(e);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+o,\u2318+o", (e) => {
    if (!canHandleEvent())
      return;
    onOpenProject(e);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+u,\u2318+u", (e) => {
    if (!canHandleEvent())
      return;
    onOpenMedia(e);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+z,ctrl+z", () => {
    if (!canHandleEvent(true))
      return;
    if (app.session) {
      app.cancelSession();
    } else {
      app.undo();
    }
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift+z,\u2318+shift+z", () => {
    if (!canHandleEvent(true))
      return;
    if (app.session) {
      app.cancelSession();
    } else {
      app.redo();
    }
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+u,ctrl+u", () => {
    if (!canHandleEvent())
      return;
    app.undoSelect();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift-u,\u2318+shift+u", () => {
    if (!canHandleEvent())
      return;
    app.redoSelect();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+=,\u2318+=,ctrl+num_subtract,\u2318+num_subtract", (e) => {
    if (!canHandleEvent(true))
      return;
    app.zoomIn();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+-,\u2318+-,ctrl+num_add,\u2318+num_add", (e) => {
    if (!canHandleEvent(true))
      return;
    app.zoomOut();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+0,ctrl+numpad_0,\u2318+numpad_0", () => {
    if (!canHandleEvent(true))
      return;
    app.resetZoom();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+1", () => {
    if (!canHandleEvent(true))
      return;
    app.zoomToFit();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+2", () => {
    if (!canHandleEvent(true))
      return;
    app.zoomToSelection();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+d,\u2318+d", (e) => {
    if (!canHandleEvent())
      return;
    app.duplicate();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+h", () => {
    if (!canHandleEvent(true))
      return;
    app.flipHorizontal();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+v", () => {
    if (!canHandleEvent(true))
      return;
    app.flipVertical();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("escape", () => {
    if (!canHandleEvent(true))
      return;
    app.cancel();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("backspace,del", () => {
    if (!canHandleEvent())
      return;
    app.delete();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+a,ctrl+a", () => {
    if (!canHandleEvent(true))
      return;
    app.selectAll();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("up", () => {
    if (!canHandleEvent())
      return;
    app.nudge([0, -1], false);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("right", () => {
    if (!canHandleEvent())
      return;
    app.nudge([1, 0], false);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("down", () => {
    if (!canHandleEvent())
      return;
    app.nudge([0, 1], false);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("left", () => {
    if (!canHandleEvent())
      return;
    app.nudge([-1, 0], false);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+up", () => {
    if (!canHandleEvent())
      return;
    app.nudge([0, -1], true);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+right", () => {
    if (!canHandleEvent())
      return;
    app.nudge([1, 0], true);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+down", () => {
    if (!canHandleEvent())
      return;
    app.nudge([0, 1], true);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+left", () => {
    if (!canHandleEvent())
      return;
    app.nudge([-1, 0], true);
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+shift+l,ctrl+shift+l", () => {
    if (!canHandleEvent())
      return;
    app.toggleLocked();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+c,ctrl+c", () => {
    if (!canHandleEvent())
      return;
    app.copy();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+shift+c,ctrl+shift+c", (e) => {
    if (!canHandleEvent())
      return;
    app.copySvg();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+x,ctrl+x", () => {
    if (!canHandleEvent())
      return;
    app.cut();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+v,ctrl+v", () => {
    if (!canHandleEvent())
      return;
    app.paste();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+g,ctrl+g", (e) => {
    if (!canHandleEvent())
      return;
    app.group();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("\u2318+shift+g,ctrl+shift+g", (e) => {
    if (!canHandleEvent())
      return;
    app.ungroup();
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("[", () => {
    if (!canHandleEvent(true))
      return;
    app.moveBackward();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("]", () => {
    if (!canHandleEvent(true))
      return;
    app.moveForward();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+[", () => {
    if (!canHandleEvent(true))
      return;
    app.moveToBack();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("shift+]", () => {
    if (!canHandleEvent(true))
      return;
    app.moveToFront();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("ctrl+shift+backspace,\u2318+shift+backspace", (e) => {
    if (!canHandleEvent())
      return;
    if (app.settings.isDebugMode) {
      app.resetDocument();
    }
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("alt+command+l,alt+ctrl+l", (e) => {
    if (!canHandleEvent(true))
      return;
    app.style({ textAlign: "start" /* Start */ });
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("alt+command+t,alt+ctrl+t", (e) => {
    if (!canHandleEvent(true))
      return;
    app.style({ textAlign: "middle" /* Middle */ });
    e.preventDefault();
  }, void 0, [app]);
  (0, import_react_hotkeys_hook.useHotkeys)("alt+command+r,alt+ctrl+r", (e) => {
    if (!canHandleEvent(true))
      return;
    app.style({ textAlign: "end" /* End */ });
    e.preventDefault();
  }, void 0, [app]);
}

// src/hooks/useTldrawApp.tsx
var React27 = __toESM(require("react"));
var TldrawContext = React27.createContext({});
function useTldrawApp() {
  const context = React27.useContext(TldrawContext);
  return context;
}

// src/hooks/useStylesheet.ts
var React28 = __toESM(require("react"));
var styles = /* @__PURE__ */ new Map();
var UID = `Tldraw-fonts`;
var WEBFONT_URL = "https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Crimson+Pro&display=block";
var CSS = `
@import url('');
`;
function useStylesheet() {
  React28.useLayoutEffect(() => {
    if (styles.get(UID))
      return;
    const style = document.createElement("style");
    style.innerHTML = `@import url('${WEBFONT_URL}');`;
    style.setAttribute("id", UID);
    document.head.appendChild(style);
    styles.set(UID, style);
    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
        styles.delete(UID);
      }
    };
  }, [UID, CSS]);
}

// src/hooks/useFileSystemHandlers.ts
var React29 = __toESM(require("react"));
function useFileSystemHandlers() {
  const app = useTldrawApp();
  const onNewProject = React29.useCallback((e) => __async(this, null, function* () {
    var _a, _b;
    if (e && app.callbacks.onOpenProject)
      e.preventDefault();
    (_b = (_a = app.callbacks).onNewProject) == null ? void 0 : _b.call(_a, app);
  }), [app]);
  const onSaveProject = React29.useCallback((e) => {
    var _a, _b;
    if (e && app.callbacks.onOpenProject)
      e.preventDefault();
    (_b = (_a = app.callbacks).onSaveProject) == null ? void 0 : _b.call(_a, app);
  }, [app]);
  const onSaveProjectAs = React29.useCallback((e) => {
    var _a, _b;
    if (e && app.callbacks.onOpenProject)
      e.preventDefault();
    (_b = (_a = app.callbacks).onSaveProjectAs) == null ? void 0 : _b.call(_a, app);
  }, [app]);
  const onOpenProject = React29.useCallback((e) => __async(this, null, function* () {
    var _a, _b;
    if (e && app.callbacks.onOpenProject)
      e.preventDefault();
    (_b = (_a = app.callbacks).onOpenProject) == null ? void 0 : _b.call(_a, app);
  }), [app]);
  const onOpenMedia = React29.useCallback((e) => __async(this, null, function* () {
    var _a, _b;
    if (e && app.callbacks.onOpenMedia)
      e.preventDefault();
    (_b = (_a = app.callbacks).onOpenMedia) == null ? void 0 : _b.call(_a, app);
  }), [app]);
  return {
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject,
    onOpenMedia
  };
}

// src/hooks/useFileSystem.ts
var React30 = __toESM(require("react"));
function useFileSystem() {
  const promptSaveBeforeChange = React30.useCallback((app) => __async(this, null, function* () {
    if (app.isDirty) {
      if (app.fileSystemHandle) {
        if (window.confirm("Do you want to save changes to your current project?")) {
          yield app.saveProject();
        }
      } else {
        if (window.confirm("Do you want to save your current project?")) {
          yield app.saveProject();
        }
      }
    }
  }), []);
  const onNewProject = React30.useCallback((app) => __async(this, null, function* () {
    if (window.confirm("Do you want to create a new project?")) {
      yield promptSaveBeforeChange(app);
      app.newProject();
    }
  }), [promptSaveBeforeChange]);
  const onSaveProject = React30.useCallback((app) => {
    app.saveProject();
  }, []);
  const onSaveProjectAs = React30.useCallback((app) => {
    app.saveProjectAs();
  }, []);
  const onOpenProject = React30.useCallback((app) => __async(this, null, function* () {
    yield promptSaveBeforeChange(app);
    app.openProject();
  }), [promptSaveBeforeChange]);
  const onOpenMedia = React30.useCallback((app) => __async(this, null, function* () {
    var _a;
    (_a = app.openAsset) == null ? void 0 : _a.call(app);
  }), []);
  return {
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject,
    onOpenMedia
  };
}

// src/components/ToolsPanel/ToolsPanel.tsx
var React63 = __toESM(require("react"));

// src/components/ToolsPanel/StatusBar.tsx
var React31 = __toESM(require("react"));

// src/components/breakpoints.tsx
var breakpoints = {
  "@initial": "mobile",
  "@micro": "micro",
  "@sm": "small",
  "@md": "medium",
  "@lg": "large"
};

// src/components/ToolsPanel/StatusBar.tsx
var statusSelector = (s) => s.appState.status;
var activeToolSelector = (s) => s.appState.activeTool;
function StatusBar() {
  const app = useTldrawApp();
  const status = app.useStore(statusSelector);
  const activeTool = app.useStore(activeToolSelector);
  return /* @__PURE__ */ React31.createElement(StyledStatusBar, {
    bp: breakpoints,
    id: "TD-StatusBar"
  }, /* @__PURE__ */ React31.createElement(StyledSection, null, activeTool, " | ", status));
}
var StyledStatusBar = styled("div", {
  height: 40,
  userSelect: "none",
  borderTop: "1px solid $panelContrast",
  gridArea: "status",
  display: "flex",
  color: "$text",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "$panel",
  gap: 8,
  fontFamily: "$ui",
  fontSize: "$0",
  padding: "0 16px",
  variants: {
    bp: {
      small: {
        fontSize: "$1"
      }
    }
  }
});
var StyledSection = styled("div", {
  whiteSpace: "nowrap",
  overflow: "hidden"
});

// src/components/ToolsPanel/BackToContent.tsx
var React34 = __toESM(require("react"));

// src/components/Primitives/RowButton/RowButton.tsx
var import_react_dropdown_menu = require("@radix-ui/react-dropdown-menu");
var import_react_icons = require("@radix-ui/react-icons");
var React33 = __toESM(require("react"));

// src/components/Primitives/Kbd/Kbd.tsx
var React32 = __toESM(require("react"));
var import_core54 = require("@tldraw/core");
var commandKey = () => import_core54.Utils.isDarwin() ? "\u2318" : "Ctrl";
function Kbd({
  variant,
  children
}) {
  return /* @__PURE__ */ React32.createElement(StyledKbd, {
    variant
  }, children.split("").map((k, i) => {
    return /* @__PURE__ */ React32.createElement("span", {
      key: i
    }, k.replace("#", commandKey()));
  }));
}
var StyledKbd = styled("kbd", {
  marginLeft: "$3",
  textShadow: "$2",
  textAlign: "center",
  fontSize: "$0",
  fontFamily: "$ui",
  color: "$text",
  background: "none",
  fontWeight: 400,
  gap: "$1",
  display: "flex",
  alignItems: "center",
  "& > span": {
    padding: "$0",
    borderRadius: "$0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  variants: {
    variant: {
      tooltip: {
        "& > span": {
          color: "$tooltipContrast",
          background: "$overlayContrast",
          boxShadow: "$key",
          width: "20px",
          height: "20px"
        }
      },
      menu: {}
    }
  }
});

// src/components/Primitives/SmallIcon/SmallIcon.tsx
var SmallIcon = styled("div", {
  height: "100%",
  borderRadius: "4px",
  marginRight: "1px",
  width: "fit-content",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  cursor: "pointer",
  color: "currentColor",
  "& svg": {
    height: 16,
    width: 16,
    strokeWidth: 1
  },
  "& > *": {
    gridRow: 1,
    gridColumn: 1
  }
});

// src/components/Primitives/RowButton/RowButton.tsx
var RowButton = React33.forwardRef((_a, ref) => {
  var _b = _a, {
    onClick,
    isActive = false,
    isWarning = false,
    hasIndicator = false,
    hasArrow = false,
    disabled = false,
    isSponsor = false,
    variant,
    kbd,
    children
  } = _b, rest = __objRest(_b, [
    "onClick",
    "isActive",
    "isWarning",
    "hasIndicator",
    "hasArrow",
    "disabled",
    "isSponsor",
    "variant",
    "kbd",
    "children"
  ]);
  return /* @__PURE__ */ React33.createElement(StyledRowButton, __spreadValues({
    ref,
    bp: breakpoints,
    isWarning,
    isActive,
    isSponsor,
    disabled,
    onClick,
    variant
  }, rest), /* @__PURE__ */ React33.createElement(StyledRowButtonInner, null, children, kbd ? /* @__PURE__ */ React33.createElement(Kbd, {
    variant: "menu"
  }, kbd) : void 0, hasIndicator && /* @__PURE__ */ React33.createElement(import_react_dropdown_menu.ItemIndicator, {
    dir: "ltr"
  }, /* @__PURE__ */ React33.createElement(SmallIcon, null, /* @__PURE__ */ React33.createElement(import_react_icons.CheckIcon, null))), hasArrow && /* @__PURE__ */ React33.createElement(SmallIcon, null, /* @__PURE__ */ React33.createElement(import_react_icons.ChevronRightIcon, null))));
});
var StyledRowButtonInner = styled("div", {
  height: "100%",
  width: "100%",
  backgroundColor: "$panel",
  borderRadius: "$2",
  display: "flex",
  gap: "$1",
  flexDirection: "row",
  alignItems: "center",
  padding: "0 $3",
  justifyContent: "space-between",
  border: "1px solid transparent",
  "& svg": {
    position: "relative",
    stroke: "$overlay",
    strokeWidth: 1,
    zIndex: 1
  }
});
var StyledRowButton = styled("button", {
  position: "relative",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  height: "32px",
  outline: "none",
  color: "$text",
  fontFamily: "$ui",
  fontWeight: 400,
  fontSize: "$1",
  borderRadius: 4,
  userSelect: "none",
  margin: 0,
  padding: "0 0",
  "&[data-disabled]": {
    opacity: 0.3
  },
  "&:disabled": {
    opacity: 0.3
  },
  [`&:focus:not(:disabled) ${StyledRowButtonInner}`]: {
    backgroundColor: "$hover"
  },
  "& a": {
    textDecoration: "none",
    color: "$text"
  },
  variants: {
    bp: {
      mobile: {},
      small: {}
    },
    variant: {
      styleMenu: {
        margin: "$1 0 $1 0"
      },
      wide: {
        gridColumn: "1 / span 4"
      }
    },
    size: {
      icon: {
        padding: "4px ",
        width: "auto"
      }
    },
    isSponsor: {
      true: {
        color: "#eb30a2"
      },
      false: {}
    },
    isWarning: {
      true: {
        color: "$warn"
      }
    },
    isActive: {
      true: {
        backgroundColor: "$hover"
      },
      false: {}
    }
  },
  compoundVariants: [
    {
      isActive: false,
      isSponsor: true,
      bp: "small",
      css: {
        [`&:hover:not(:disabled) ${StyledRowButtonInner}`]: {
          backgroundColor: "$sponsorContrast",
          border: "1px solid $panel",
          '& *[data-shy="true"]': {
            opacity: 1
          }
        }
      }
    },
    {
      isActive: false,
      isSponsor: false,
      bp: "small",
      css: {
        [`&:hover:not(:disabled) ${StyledRowButtonInner}`]: {
          backgroundColor: "$hover",
          border: "1px solid $panel",
          '& *[data-shy="true"]': {
            opacity: 1
          }
        }
      }
    }
  ]
});

// src/components/Primitives/MenuContent/MenuContent.ts
var MenuContent = styled("div", {
  position: "relative",
  overflow: "hidden",
  userSelect: "none",
  display: "flex",
  flexDirection: "column",
  zIndex: 180,
  minWidth: 180,
  pointerEvents: "all",
  backgroundColor: "$panel",
  boxShadow: "$panel",
  padding: "$2 $2",
  borderRadius: "$3",
  font: "$ui",
  variants: {
    size: {
      small: {
        minWidth: 72
      }
    }
  }
});

// src/components/ToolsPanel/BackToContent.tsx
var isEmptyCanvasSelector = (s) => {
  return s.appState.isEmptyCanvas && Object.keys(s.document.pages[s.appState.currentPageId].shapes).length > 0;
};
var BackToContent = React34.memo(function BackToContent2() {
  const app = useTldrawApp();
  const isEmptyCanvas = app.useStore(isEmptyCanvasSelector);
  if (!isEmptyCanvas)
    return null;
  return /* @__PURE__ */ React34.createElement(BackToContentContainer, {
    id: "TD-Tools-Back_to_content"
  }, /* @__PURE__ */ React34.createElement(RowButton, {
    onClick: app.zoomToContent
  }, "Back to content"));
});
var BackToContentContainer = styled(MenuContent, {
  pointerEvents: "all",
  width: "fit-content",
  minWidth: 0,
  gridRow: 1,
  flexGrow: 2,
  display: "block"
});

// src/components/ToolsPanel/PrimaryTools.tsx
var React55 = __toESM(require("react"));
var import_react_icons3 = require("@radix-ui/react-icons");

// src/components/Primitives/ToolButton/ToolButton.tsx
var React36 = __toESM(require("react"));

// src/components/Primitives/Tooltip/Tooltip.tsx
var RadixTooltip = __toESM(require("@radix-ui/react-tooltip"));
var React35 = __toESM(require("react"));
function Tooltip({
  children,
  label,
  kbd: kbdProp,
  id,
  side = "top"
}) {
  return /* @__PURE__ */ React35.createElement("span", {
    id
  }, /* @__PURE__ */ React35.createElement(RadixTooltip.Root, null, /* @__PURE__ */ React35.createElement(RadixTooltip.Trigger, {
    dir: "ltr",
    asChild: true
  }, /* @__PURE__ */ React35.createElement("span", null, children)), /* @__PURE__ */ React35.createElement(StyledContent, {
    dir: "ltr",
    side,
    sideOffset: 8
  }, label, kbdProp ? /* @__PURE__ */ React35.createElement(Kbd, {
    variant: "tooltip"
  }, kbdProp) : null, /* @__PURE__ */ React35.createElement(StyledArrow, null))));
}
var StyledContent = styled(RadixTooltip.Content, {
  borderRadius: 3,
  padding: "$3 $3 $3 $3",
  fontSize: "$1",
  backgroundColor: "$tooltip",
  color: "$tooltipContrast",
  boxShadow: "$3",
  display: "flex",
  alignItems: "center",
  fontFamily: "$ui",
  userSelect: "none"
});
var StyledArrow = styled(RadixTooltip.Arrow, {
  fill: "$tooltip",
  margin: "0 8px"
});

// src/components/Primitives/ToolButton/ToolButton.tsx
var ToolButton = React36.forwardRef((_a, ref) => {
  var _b = _a, {
    onSelect,
    onClick,
    onDoubleClick,
    variant,
    children,
    isToolLocked = false,
    disabled = false,
    isActive = false,
    isSponsor = false,
    onKeyDown,
    id
  } = _b, rest = __objRest(_b, [
    "onSelect",
    "onClick",
    "onDoubleClick",
    "variant",
    "children",
    "isToolLocked",
    "disabled",
    "isActive",
    "isSponsor",
    "onKeyDown",
    "id"
  ]);
  return /* @__PURE__ */ React36.createElement(StyledToolButton, __spreadValues({
    ref,
    isActive,
    isSponsor,
    variant,
    onClick,
    disabled,
    onPointerDown: onSelect,
    onDoubleClick,
    onKeyDown,
    bp: breakpoints,
    id
  }, rest), /* @__PURE__ */ React36.createElement(StyledToolButtonInner, null, children), isToolLocked && /* @__PURE__ */ React36.createElement(ToolLockIndicator, null));
});
function ToolButtonWithTooltip(_a) {
  var _b = _a, {
    label,
    kbd,
    isLocked
  } = _b, rest = __objRest(_b, [
    "label",
    "kbd",
    "isLocked"
  ]);
  const app = useTldrawApp();
  const handleDoubleClick = React36.useCallback(() => {
    app.toggleToolLock();
  }, []);
  const handleKeyDown = React36.useCallback((e) => {
    if (e.key === " " && app.isForcePanning) {
      e.preventDefault();
    }
  }, []);
  return /* @__PURE__ */ React36.createElement(Tooltip, {
    label: label[0].toUpperCase() + label.slice(1),
    kbd
  }, /* @__PURE__ */ React36.createElement(ToolButton, __spreadProps(__spreadValues({}, rest), {
    variant: "primary",
    isToolLocked: isLocked && rest.isActive,
    onDoubleClick: handleDoubleClick,
    onKeyDown: handleKeyDown
  })));
}
var StyledToolButtonInner = styled("div", {
  position: "relative",
  height: "100%",
  width: "100%",
  backgroundColor: "$panel",
  borderRadius: "$2",
  margin: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$ui",
  color: "inherit",
  userSelect: "none",
  boxSizing: "border-box",
  border: "1px solid transparent"
});
var StyledToolButton = styled("button", {
  position: "relative",
  color: "$text",
  fontSize: "$0",
  background: "none",
  margin: "0",
  padding: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  cursor: "pointer",
  pointerEvents: "all",
  border: "none",
  height: "40px",
  width: "40px",
  [`&:disabled ${StyledToolButtonInner}`]: {
    opacity: 0.618
  },
  variants: {
    variant: {
      primary: {
        marginTop: "0"
      },
      icon: {
        [`& ${StyledToolButtonInner}`]: {
          display: "grid",
          "& > *": {
            gridRow: 1,
            gridColumn: 1
          }
        }
      },
      text: {
        width: "auto",
        [`& ${StyledToolButtonInner}`]: {
          fontSize: "$1",
          padding: "0 $3",
          gap: "$3"
        }
      },
      circle: {
        padding: "$2",
        [`& ${StyledToolButtonInner}`]: {
          border: "1px solid $panelContrast",
          borderRadius: "100%",
          boxShadow: "$panel"
        },
        [`& ${StyledToolButtonInner} > svg`]: {
          width: 14,
          height: 14
        }
      }
    },
    isSponsor: {
      true: {
        [`${StyledToolButtonInner}`]: {
          backgroundColor: "$sponsorContrast"
        }
      }
    },
    isActive: {
      true: {},
      false: {}
    },
    bp: {
      mobile: {},
      small: {}
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      bp: "mobile",
      css: {
        height: "40px",
        width: "40px",
        [`& ${StyledToolButtonInner} > svg`]: {
          width: 16,
          height: 16
        }
      }
    },
    {
      variant: "primary",
      bp: "small",
      css: {
        height: "44px",
        width: "44px",
        [`& ${StyledToolButtonInner} > svg`]: {
          width: 20,
          height: 20
        }
      }
    },
    {
      isActive: true,
      isSponsor: false,
      css: {
        [`${StyledToolButtonInner}`]: {
          backgroundColor: "$selected",
          color: "$selectedContrast"
        }
      }
    },
    {
      isActive: false,
      isSponsor: false,
      bp: "small",
      css: {
        [`&:hover:not(:disabled) ${StyledToolButtonInner}`]: {
          backgroundColor: "$hover",
          border: "1px solid $panel"
        },
        [`&:focus:not(:disabled) ${StyledToolButtonInner}`]: {
          backgroundColor: "$hover"
        }
      }
    }
  ]
});
var ToolLockIndicator = styled("div", {
  position: "absolute",
  width: 10,
  height: 10,
  backgroundColor: "$selected",
  borderRadius: "100%",
  bottom: -2,
  border: "2px solid $panel",
  zIndex: 100
});

// src/components/Primitives/Panel/Panel.tsx
var Panel = styled("div", {
  backgroundColor: "$panel",
  display: "flex",
  flexDirection: "row",
  boxShadow: "$panel",
  padding: "$2",
  border: "1px solid $panelContrast",
  gap: 0,
  variants: {
    side: {
      center: {
        borderRadius: "$4"
      },
      left: {
        padding: 0,
        borderTop: 0,
        borderLeft: 0,
        borderTopRightRadius: "$1",
        borderBottomRightRadius: "$3",
        borderBottomLeftRadius: "$1"
      },
      right: {
        padding: 0,
        borderTop: 0,
        borderRight: 0,
        borderTopLeftRadius: "$1",
        borderBottomLeftRadius: "$3",
        borderBottomRightRadius: "$1"
      }
    }
  }
});

// src/components/ToolsPanel/ShapesMenu.tsx
var React54 = __toESM(require("react"));
var DropdownMenu = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_react_icons2 = require("@radix-ui/react-icons");

// src/components/Primitives/icons/BoxIcon.tsx
var React37 = __toESM(require("react"));

// src/components/Primitives/icons/CircleIcon.tsx
var React38 = __toESM(require("react"));
function CircleIcon(props) {
  const _a = props, { size = 16 } = _a, rest = __objRest(_a, ["size"]);
  return /* @__PURE__ */ React38.createElement("svg", __spreadValues({
    width: 24,
    height: 24
  }, rest), /* @__PURE__ */ React38.createElement("circle", {
    cx: 12,
    cy: 12,
    r: size / 2
  }));
}

// src/components/Primitives/icons/DashDashedIcon.tsx
var React39 = __toESM(require("react"));
function DashDashedIcon() {
  return /* @__PURE__ */ React39.createElement("svg", {
    width: "24",
    height: "24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React39.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 8,
    fill: "none",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeDasharray: 50.26548 * 0.1
  }));
}

// src/components/Primitives/icons/DashDottedIcon.tsx
var React40 = __toESM(require("react"));
var dottedDasharray = `${50.26548 * 0.025} ${50.26548 * 0.1}`;
function DashDottedIcon() {
  return /* @__PURE__ */ React40.createElement("svg", {
    width: "24",
    height: "24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React40.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 8,
    fill: "none",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeDasharray: dottedDasharray
  }));
}

// src/components/Primitives/icons/DashDrawIcon.tsx
var React41 = __toESM(require("react"));
function DashDrawIcon() {
  return /* @__PURE__ */ React41.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "1 1.5 21 22",
    fill: "currentColor",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React41.createElement("path", {
    d: "M10.0162 19.2768C10.0162 19.2768 9.90679 19.2517 9.6879 19.2017C9.46275 19.1454 9.12816 19.0422 8.68413 18.8921C8.23384 18.7358 7.81482 18.545 7.42707 18.3199C7.03307 18.101 6.62343 17.7883 6.19816 17.3818C5.77289 16.9753 5.33511 16.3718 4.88482 15.5713C4.43453 14.7645 4.1531 13.8545 4.04053 12.8414C3.92795 11.822 4.04991 10.8464 4.40639 9.91451C4.76286 8.98266 5.39452 8.10084 6.30135 7.26906C7.21444 6.44353 8.29325 5.83377 9.5378 5.43976C10.7823 5.05202 11.833 4.92068 12.6898 5.04576C13.5466 5.16459 14.3878 5.43664 15.2133 5.86191C16.0388 6.28718 16.7768 6.8688 17.4272 7.60678C18.0714 8.34475 18.5404 9.21406 18.8344 10.2147C19.1283 11.2153 19.1721 12.2598 18.9657 13.348C18.7593 14.4299 18.2872 15.4337 17.5492 16.3593C16.8112 17.2849 15.9263 18.0072 14.8944 18.5263C13.8624 19.0391 12.9056 19.3174 12.0238 19.3612C11.142 19.405 10.2101 19.2705 9.22823 18.9578C8.24635 18.6451 7.35828 18.151 6.56402 17.4756C5.77601 16.8002 6.08871 16.8658 7.50212 17.6726C8.90927 18.4731 10.1444 18.8484 11.2076 18.7983C12.2645 18.7545 13.2965 18.4825 14.3034 17.9822C15.3102 17.4819 16.1264 16.8221 16.7518 16.0028C17.3772 15.1835 17.7681 14.3111 17.9244 13.3855C18.0808 12.4599 18.0401 11.5781 17.8025 10.74C17.5586 9.902 17.1739 9.15464 16.6486 8.49797C16.1233 7.8413 15.2289 7.27844 13.9656 6.80939C12.7086 6.34034 11.4203 6.20901 10.1007 6.41539C8.78732 6.61552 7.69599 7.06893 6.82669 7.77564C5.96363 8.48859 5.34761 9.26409 4.97863 10.1021C4.60964 10.9402 4.45329 11.8376 4.50958 12.7945C4.56586 13.7513 4.79101 14.6238 5.18501 15.4118C5.57276 16.1998 5.96363 16.8002 6.35764 17.2129C6.75164 17.6257 7.13313 17.9509 7.50212 18.1886C7.87736 18.4325 8.28074 18.642 8.71227 18.8171C9.15005 18.9922 9.47839 19.111 9.69728 19.1736C9.91617 19.2361 10.0256 19.2705 10.0256 19.2768H10.0162Z",
    strokeWidth: "2"
  }));
}

// src/components/Primitives/icons/DashSolidIcon.tsx
var React42 = __toESM(require("react"));
function DashSolidIcon() {
  return /* @__PURE__ */ React42.createElement("svg", {
    width: "24",
    height: "24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React42.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 8,
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round"
  }));
}

// src/components/Primitives/icons/IsFilledIcon.tsx
var React43 = __toESM(require("react"));

// src/components/Primitives/icons/RedoIcon.tsx
var React44 = __toESM(require("react"));
function RedoIcon(props) {
  return /* @__PURE__ */ React44.createElement("svg", __spreadValues({
    width: 32,
    height: 32,
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React44.createElement("path", {
    d: "M4.32978 8.5081C4.32978 10.1923 5.70009 11.5625 7.38418 11.5625H8.46539C8.64456 11.5625 8.78975 11.4173 8.78975 11.2382V11.13C8.78975 10.9508 8.64457 10.8057 8.46539 10.8057H7.38418C6.11736 10.8057 5.08662 9.77492 5.08662 8.5081C5.08662 7.24128 6.11736 6.21054 7.38418 6.21054H9.37894L8.00515 7.58433C7.8576 7.73183 7.8576 7.97195 8.00515 8.11944C8.14833 8.26251 8.39751 8.2623 8.54036 8.11944L10.56 6.09971C10.6315 6.02824 10.6709 5.93321 10.6709 5.8321C10.6709 5.73106 10.6315 5.63598 10.56 5.56454L8.54025 3.54472C8.3974 3.40176 8.14801 3.40176 8.00513 3.54472C7.85758 3.69218 7.85758 3.93234 8.00513 4.07979L9.37892 5.45368H7.38418C5.70009 5.45368 4.32978 6.82393 4.32978 8.5081Z"
  }));
}

// src/components/Primitives/icons/TrashIcon.tsx
var React45 = __toESM(require("react"));
function TrashIcon(props) {
  return /* @__PURE__ */ React45.createElement("svg", __spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React45.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 4.656a.5.5 0 01.5-.5h9.7a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5z"
  }), /* @__PURE__ */ React45.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.272 3a.578.578 0 00-.578.578v.578h3.311v-.578A.578.578 0 008.428 3H6.272zm3.733 1.156v-.578A1.578 1.578 0 008.428 2H6.272a1.578 1.578 0 00-1.578 1.578v.578H3.578a.5.5 0 00-.5.5V12.2a1.578 1.578 0 001.577 1.578h5.39a1.578 1.578 0 001.577-1.578V4.656a.5.5 0 00-.5-.5h-1.117zm-5.927 1V12.2a.578.578 0 00.577.578h5.39a.578.578 0 00.577-.578V5.156H4.078z"
  }), /* @__PURE__ */ React45.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.272 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5zM8.428 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5z"
  }));
}

// src/components/Primitives/icons/UndoIcon.tsx
var React46 = __toESM(require("react"));
function UndoIcon(props) {
  return /* @__PURE__ */ React46.createElement("svg", __spreadValues({
    width: 32,
    height: 32,
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React46.createElement("path", {
    d: "M10.6707 8.5081C10.6707 10.1923 9.3004 11.5625 7.61631 11.5625H6.5351C6.35593 11.5625 6.21074 11.4173 6.21074 11.2382V11.13C6.21074 10.9508 6.35591 10.8057 6.5351 10.8057H7.61631C8.88313 10.8057 9.91387 9.77492 9.91387 8.5081C9.91387 7.24128 8.88313 6.21054 7.61631 6.21054H5.62155L6.99534 7.58433C7.14289 7.73183 7.14289 7.97195 6.99534 8.11944C6.85216 8.26251 6.60298 8.2623 6.46013 8.11944L4.44045 6.09971C4.36898 6.02824 4.32959 5.93321 4.32959 5.8321C4.32959 5.73106 4.36898 5.63598 4.44045 5.56454L6.46024 3.54472C6.60309 3.40176 6.85248 3.40176 6.99535 3.54472C7.14291 3.69218 7.14291 3.93234 6.99535 4.07979L5.62156 5.45368H7.61631C9.3004 5.45368 10.6707 6.82393 10.6707 8.5081Z"
  }));
}

// src/components/Primitives/icons/SizeSmallIcon.tsx
var React47 = __toESM(require("react"));
function SizeSmallIcon(props) {
  return /* @__PURE__ */ React47.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    viewBox: "-2 -2 28 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React47.createElement("path", {
    d: "M12.4239 4.62C13.3572 4.62 14.1572 4.73333 14.8239 4.96C15.4906 5.17333 15.9772 5.43333 16.2839 5.74C16.3639 5.82 16.4039 5.94 16.4039 6.1V8.86H14.0639C13.9172 8.86 13.8439 8.78666 13.8439 8.64V7.26C13.4306 7.12666 12.9572 7.06 12.4239 7.06C11.6506 7.06 11.0639 7.18 10.6639 7.42C10.2639 7.66 10.0639 8.04666 10.0639 8.58V9C10.0639 9.38666 10.1639 9.69333 10.3639 9.92C10.5772 10.1333 11.0306 10.3467 11.7239 10.56L13.6439 11.14C14.4706 11.38 15.1172 11.66 15.5839 11.98C16.0506 12.3 16.3772 12.68 16.5639 13.12C16.7639 13.5467 16.8639 14.0733 16.8639 14.7V15.62C16.8639 16.7933 16.4039 17.7133 15.4839 18.38C14.5639 19.0467 13.2839 19.38 11.6439 19.38C10.6706 19.38 9.79723 19.2867 9.0239 19.1C8.2639 18.9133 7.71056 18.6533 7.3639 18.32C7.3239 18.28 7.29056 18.24 7.2639 18.2C7.25056 18.1467 7.2439 18.06 7.2439 17.94V15.74H7.6239C8.2239 16.1533 8.85056 16.4533 9.5039 16.64C10.1572 16.8267 10.9306 16.92 11.8239 16.92C12.6506 16.92 13.2506 16.7867 13.6239 16.52C14.0106 16.2533 14.2039 15.9333 14.2039 15.56V14.88C14.2039 14.6667 14.1639 14.48 14.0839 14.32C14.0172 14.16 13.8706 14.0133 13.6439 13.88C13.4172 13.7467 13.0572 13.6067 12.5639 13.46L10.6639 12.88C9.7839 12.6133 9.11056 12.3 8.6439 11.94C8.17723 11.58 7.85056 11.18 7.6639 10.74C7.49056 10.3 7.4039 9.83333 7.4039 9.34V8.38C7.4039 7.64666 7.61056 7 8.0239 6.44C8.43723 5.88 9.01723 5.44 9.7639 5.12C10.5239 4.78666 11.4106 4.62 12.4239 4.62Z"
  }));
}

// src/components/Primitives/icons/SizeMediumIcon.tsx
var React48 = __toESM(require("react"));
function SizeMediumIcon(props) {
  return /* @__PURE__ */ React48.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    viewBox: "-2 -2 28 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React48.createElement("path", {
    d: "M8.16191 19H5.68191C5.53525 19 5.46191 18.9267 5.46191 18.78V5H8.76191C8.88191 5 8.97525 5.03333 9.04191 5.1C9.10858 5.15333 9.17525 5.27333 9.24191 5.46C9.72191 6.59333 10.1686 7.7 10.5819 8.78C11.0086 9.84667 11.4352 10.98 11.8619 12.18H12.1619C12.6019 10.9667 13.0352 9.79333 13.4619 8.66C13.8886 7.52667 14.3552 6.30667 14.8619 5H18.3219C18.4686 5 18.5419 5.07333 18.5419 5.22V19H16.0619C15.9152 19 15.8419 18.9267 15.8419 18.78V16.26C15.8419 15.5267 15.8486 14.8133 15.8619 14.12C15.8886 13.4267 15.9286 12.6867 15.9819 11.9C16.0486 11.1 16.1419 10.1933 16.2619 9.18H15.9019C15.4352 10.3533 14.9486 11.5667 14.4419 12.82C13.9486 14.06 13.4819 15.2333 13.0419 16.34H11.1019C11.0619 16.34 11.0152 16.3333 10.9619 16.32C10.9219 16.2933 10.8886 16.2467 10.8619 16.18C10.4619 15.18 10.0086 14.06 9.50191 12.82C9.00858 11.58 8.53525 10.3667 8.08191 9.18H7.70191C7.83525 10.18 7.93525 11.0733 8.00191 11.86C8.06858 12.6467 8.10858 13.3933 8.12191 14.1C8.14858 14.8067 8.16191 15.5267 8.16191 16.26V19Z"
  }));
}

// src/components/Primitives/icons/SizeLargeIcon.tsx
var React49 = __toESM(require("react"));
function SizeLargeIcon(props) {
  return /* @__PURE__ */ React49.createElement("svg", __spreadValues({
    width: 24,
    height: 24,
    viewBox: "-2 -2 28 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React49.createElement("path", {
    d: "M7.68191 19C7.53525 19 7.46191 18.9267 7.46191 18.78V5H10.1219C10.2686 5 10.3419 5.07333 10.3419 5.22V16.56H13.4419V15.02H15.7619C15.9086 15.02 15.9819 15.0933 15.9819 15.24V19H7.68191Z"
  }));
}

// src/components/Primitives/icons/EraserIcon.tsx
var React50 = __toESM(require("react"));
function EraserIcon() {
  return /* @__PURE__ */ React50.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React50.createElement("path", {
    d: "M1.72838 9.33987L8.84935 2.34732C9.23874 1.96494 9.86279 1.96539 10.2516 2.34831L13.5636 5.60975C13.9655 6.00555 13.9607 6.65526 13.553 7.04507L8.13212 12.2278C7.94604 12.4057 7.69851 12.505 7.44107 12.505L6.06722 12.505L3.83772 12.505C3.5673 12.505 3.30842 12.3954 3.12009 12.2014L1.7114 10.7498C1.32837 10.3551 1.33596 9.72521 1.72838 9.33987Z",
    stroke: "currentColor"
  }), /* @__PURE__ */ React50.createElement("line", {
    x1: "6.01807",
    y1: "12.5",
    x2: "10.7959",
    y2: "12.5",
    stroke: "currentColor",
    strokeLinecap: "round"
  }), /* @__PURE__ */ React50.createElement("line", {
    x1: "5.50834",
    y1: "5.74606",
    x2: "10.1984",
    y2: "10.4361",
    stroke: "currentColor"
  }));
}

// src/components/Primitives/icons/MultiplayerIcon.tsx
var React51 = __toESM(require("react"));
function MultiplayerIcon() {
  return /* @__PURE__ */ React51.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React51.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M5.73545 0.0494623C5.93029 -0.0395285 6.15915 -0.00663838 6.32104 0.133622L14.8111 7.48911C14.9804 7.63581 15.0432 7.87091 14.9696 8.08249C14.8959 8.29408 14.7007 8.4394 14.4769 8.44927L11.4564 8.58248L13.2249 12.4682C13.35 12.7431 13.2286 13.0675 12.9537 13.1927L10.9304 14.1145C10.6554 14.2397 10.331 14.1184 10.2057 13.8435L8.43441 9.95846L6.42883 12.0731L7.0482 13.434C7.17335 13.709 7.05195 14.0333 6.77702 14.1586L5.03829 14.9506C4.76335 15.0759 4.43894 14.9546 4.31361 14.6797L2.83886 11.445L1.13458 13.242C0.980476 13.4045 0.742914 13.4566 0.534904 13.3737C0.326893 13.2907 0.19043 13.0894 0.19043 12.8654V3.2218C0.19043 3.0076 0.315424 2.81309 0.510266 2.7241C0.705108 2.63511 0.933961 2.668 1.09586 2.80826L5.41561 6.55076V0.547159C5.41561 0.332956 5.54061 0.138453 5.73545 0.0494623ZM6.74741 10.147L6.50992 10.3974V10.1575V9.0621V8.94669V7.49882V1.74513L13.0561 7.41656L10.5986 7.52495C10.417 7.53296 10.2512 7.63066 10.1562 7.78567C10.1444 7.80505 10.1338 7.825 10.1245 7.84541C10.0596 7.98828 10.0589 8.15342 10.1247 8.2982V8.2982L12.0023 12.4236L10.9745 12.8919L9.09356 8.7663C9.0181 8.60079 8.86531 8.4836 8.68589 8.45361C8.50647 8.42363 8.32389 8.48478 8.19871 8.61676L8.019 8.80624L6.74741 10.147ZM5.41561 9.11037V7.99863L1.28473 4.41977V11.4934L2.60315 10.1033C2.72833 9.97131 2.91091 9.91016 3.09033 9.94014C3.26975 9.97013 3.42254 10.0873 3.498 10.2528L5.08241 13.728L5.82563 13.3895L4.24404 9.91441C4.16873 9.74894 4.18053 9.55687 4.27553 9.40186C4.37052 9.24685 4.53631 9.14915 4.71793 9.14114L5.41561 9.11037Z",
    fill: "currentColor"
  }));
}

// src/components/Primitives/icons/DiscordIcon.tsx
var React52 = __toESM(require("react"));
function DiscordIcon() {
  return /* @__PURE__ */ React52.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16"
  }, /* @__PURE__ */ React52.createElement("path", {
    d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
  }));
}

// src/components/Primitives/icons/LineIcon.tsx
var React53 = __toESM(require("react"));
function LineIcon() {
  return /* @__PURE__ */ React53.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React53.createElement("path", {
    d: "M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645C12.0488 3.34171 12.0488 3.65829 11.8536 3.85355L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
  }));
}

// src/components/ToolsPanel/ShapesMenu.tsx
var shapeShapes = [
  "rectangle" /* Rectangle */,
  "ellipse" /* Ellipse */,
  "triangle" /* Triangle */,
  "line" /* Line */
];
var shapeShapeIcons = {
  ["rectangle" /* Rectangle */]: /* @__PURE__ */ React54.createElement(import_react_icons2.SquareIcon, null),
  ["ellipse" /* Ellipse */]: /* @__PURE__ */ React54.createElement(import_react_icons2.CircleIcon, null),
  ["triangle" /* Triangle */]: /* @__PURE__ */ React54.createElement(import_react_icons2.VercelLogoIcon, null),
  ["line" /* Line */]: /* @__PURE__ */ React54.createElement(LineIcon, null)
};
var statusSelector2 = (s) => s.appState.status;
var ShapesMenu = React54.memo(function ShapesMenu2({
  activeTool,
  isToolLocked
}) {
  const app = useTldrawApp();
  const status = app.useStore(statusSelector2);
  const [lastActiveTool, setLastActiveTool] = React54.useState("rectangle" /* Rectangle */);
  React54.useEffect(() => {
    if (shapeShapes.includes(activeTool) && lastActiveTool !== activeTool) {
      setLastActiveTool(activeTool);
    }
  }, [activeTool]);
  const selectShapeTool = React54.useCallback(() => {
    app.selectTool(lastActiveTool);
  }, [activeTool, app]);
  const handleDoubleClick = React54.useCallback(() => {
    app.toggleToolLock();
  }, [app]);
  const handleKeyDown = React54.useCallback((e) => {
    if (e.key === " ") {
      if (app.shiftKey) {
        e.preventDefault();
      }
    }
  }, []);
  const isActive = shapeShapes.includes(activeTool);
  return /* @__PURE__ */ React54.createElement(DropdownMenu.Root, {
    dir: "ltr",
    onOpenChange: selectShapeTool
  }, /* @__PURE__ */ React54.createElement(DropdownMenu.Trigger, {
    dir: "ltr",
    asChild: true,
    id: "TD-PrimaryTools-Shapes"
  }, /* @__PURE__ */ React54.createElement(ToolButton, {
    disabled: isActive && app.shiftKey,
    variant: "primary",
    onDoubleClick: handleDoubleClick,
    isToolLocked: isActive && isToolLocked,
    isActive,
    onKeyDown: handleKeyDown
  }, shapeShapeIcons[lastActiveTool])), /* @__PURE__ */ React54.createElement(DropdownMenu.Content, {
    asChild: true,
    dir: "ltr",
    side: "top",
    sideOffset: 12
  }, /* @__PURE__ */ React54.createElement(Panel, {
    side: "center"
  }, shapeShapes.map((shape, i) => /* @__PURE__ */ React54.createElement(Tooltip, {
    key: shape,
    label: shape[0].toUpperCase() + shape.slice(1),
    kbd: (4 + i).toString(),
    id: `TD-PrimaryTools-Shapes-${shape}`
  }, /* @__PURE__ */ React54.createElement(DropdownMenu.Item, {
    asChild: true
  }, /* @__PURE__ */ React54.createElement(ToolButton, {
    variant: "primary",
    onClick: () => {
      app.selectTool(shape);
      setLastActiveTool(shape);
    }
  }, shapeShapeIcons[shape])))))));
});

// src/components/ToolsPanel/PrimaryTools.tsx
var activeToolSelector2 = (s) => s.appState.activeTool;
var toolLockedSelector = (s) => s.appState.isToolLocked;
var PrimaryTools = React55.memo(function PrimaryTools2() {
  const app = useTldrawApp();
  const activeTool = app.useStore(activeToolSelector2);
  const isToolLocked = app.useStore(toolLockedSelector);
  const selectSelectTool = React55.useCallback(() => {
    app.selectTool("select");
  }, [app]);
  const selectEraseTool = React55.useCallback(() => {
    app.selectTool("erase");
  }, [app]);
  const selectDrawTool = React55.useCallback(() => {
    app.selectTool("draw" /* Draw */);
  }, [app]);
  const selectArrowTool = React55.useCallback(() => {
    app.selectTool("arrow" /* Arrow */);
  }, [app]);
  const selectTextTool = React55.useCallback(() => {
    app.selectTool("text" /* Text */);
  }, [app]);
  const selectStickyTool = React55.useCallback(() => {
    app.selectTool("sticky" /* Sticky */);
  }, [app]);
  return /* @__PURE__ */ React55.createElement(Panel, {
    side: "center",
    id: "TD-PrimaryTools"
  }, /* @__PURE__ */ React55.createElement(ToolButtonWithTooltip, {
    kbd: "1",
    label: "select",
    onClick: selectSelectTool,
    isActive: activeTool === "select",
    id: "TD-PrimaryTools-CursorArrow"
  }, /* @__PURE__ */ React55.createElement(import_react_icons3.CursorArrowIcon, null)), /* @__PURE__ */ React55.createElement(ToolButtonWithTooltip, {
    kbd: "2",
    label: "draw" /* Draw */,
    onClick: selectDrawTool,
    isActive: activeTool === "draw" /* Draw */,
    id: "TD-PrimaryTools-Pencil"
  }, /* @__PURE__ */ React55.createElement(import_react_icons3.Pencil1Icon, null)), /* @__PURE__ */ React55.createElement(ToolButtonWithTooltip, {
    kbd: "3",
    label: "eraser",
    onClick: selectEraseTool,
    isActive: activeTool === "erase",
    id: "TD-PrimaryTools-Eraser"
  }, /* @__PURE__ */ React55.createElement(EraserIcon, null)), /* @__PURE__ */ React55.createElement(ShapesMenu, {
    activeTool,
    isToolLocked
  }), /* @__PURE__ */ React55.createElement(ToolButtonWithTooltip, {
    kbd: "8",
    label: "arrow" /* Arrow */,
    onClick: selectArrowTool,
    isLocked: isToolLocked,
    isActive: activeTool === "arrow" /* Arrow */,
    id: "TD-PrimaryTools-ArrowTopRight"
  }, /* @__PURE__ */ React55.createElement(import_react_icons3.ArrowTopRightIcon, null)), /* @__PURE__ */ React55.createElement(ToolButtonWithTooltip, {
    kbd: "9",
    label: "text" /* Text */,
    onClick: selectTextTool,
    isLocked: isToolLocked,
    isActive: activeTool === "text" /* Text */,
    id: "TD-PrimaryTools-Text"
  }, /* @__PURE__ */ React55.createElement(import_react_icons3.TextIcon, null)), /* @__PURE__ */ React55.createElement(ToolButtonWithTooltip, {
    kbd: "0",
    label: "sticky" /* Sticky */,
    onClick: selectStickyTool,
    isActive: activeTool === "sticky" /* Sticky */,
    id: "TD-PrimaryTools-Pencil2"
  }, /* @__PURE__ */ React55.createElement(import_react_icons3.Pencil2Icon, null)));
});

// src/components/ToolsPanel/ActionButton.tsx
var React61 = __toESM(require("react"));
var DropdownMenu2 = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_react_icons4 = require("@radix-ui/react-icons");

// src/components/Primitives/DropdownMenu/DMArrow.tsx
var import_react_dropdown_menu2 = require("@radix-ui/react-dropdown-menu");
var DMArrow = styled(import_react_dropdown_menu2.Arrow, { fill: "$panel", bp: breakpoints });

// src/components/Primitives/DropdownMenu/DMItem.tsx
var React56 = __toESM(require("react"));
var import_react_dropdown_menu3 = require("@radix-ui/react-dropdown-menu");
function DMItem(_a) {
  var _b = _a, {
    onSelect,
    id
  } = _b, rest = __objRest(_b, [
    "onSelect",
    "id"
  ]);
  return /* @__PURE__ */ React56.createElement(import_react_dropdown_menu3.Item, {
    dir: "ltr",
    asChild: true,
    onSelect,
    id
  }, /* @__PURE__ */ React56.createElement(RowButton, __spreadValues({}, rest)));
}

// src/components/Primitives/DropdownMenu/DMCheckboxItem.tsx
var React57 = __toESM(require("react"));
var import_react_dropdown_menu4 = require("@radix-ui/react-dropdown-menu");

// src/components/preventEvent.ts
var preventEvent = (e) => e.preventDefault();

// src/components/Primitives/DropdownMenu/DMCheckboxItem.tsx
function DMCheckboxItem({
  checked,
  disabled = false,
  variant,
  onCheckedChange,
  kbd,
  id,
  children
}) {
  return /* @__PURE__ */ React57.createElement(import_react_dropdown_menu4.CheckboxItem, {
    dir: "ltr",
    onSelect: preventEvent,
    onCheckedChange,
    checked,
    disabled,
    asChild: true,
    id
  }, /* @__PURE__ */ React57.createElement(RowButton, {
    kbd,
    variant,
    hasIndicator: true
  }, children));
}

// src/components/Primitives/DropdownMenu/DMContent.tsx
var React58 = __toESM(require("react"));
var import_react_dropdown_menu5 = require("@radix-ui/react-dropdown-menu");
function DMContent({
  sideOffset = 8,
  children,
  align,
  variant,
  id
}) {
  return /* @__PURE__ */ React58.createElement(import_react_dropdown_menu5.Content, {
    dir: "ltr",
    align,
    sideOffset,
    onEscapeKeyDown: stopPropagation,
    asChild: true,
    id
  }, /* @__PURE__ */ React58.createElement(StyledContent2, {
    variant
  }, children));
}
var StyledContent2 = styled(MenuContent, {
  width: "fit-content",
  height: "fit-content",
  minWidth: 0,
  maxHeight: "75vh",
  overflowY: "auto",
  "& *": {
    boxSizing: "border-box"
  },
  variants: {
    variant: {
      horizontal: {
        flexDirection: "row"
      },
      menu: {
        minWidth: 128
      }
    }
  }
});

// src/components/Primitives/DropdownMenu/DMDivider.tsx
var import_react_dropdown_menu6 = require("@radix-ui/react-dropdown-menu");
var DMDivider = styled(import_react_dropdown_menu6.Separator, {
  backgroundColor: "$hover",
  height: 1,
  marginTop: "$2",
  marginRight: "-$2",
  marginBottom: "$2",
  marginLeft: "-$2"
});

// src/components/Primitives/DropdownMenu/DMRadioItem.tsx
var import_react_dropdown_menu7 = require("@radix-ui/react-dropdown-menu");
var DMRadioItem = styled(import_react_dropdown_menu7.RadioItem, {
  height: "32px",
  width: "32px",
  backgroundColor: "$panel",
  borderRadius: "4px",
  padding: "0",
  margin: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  cursor: "pointer",
  variants: {
    isActive: {
      true: {
        backgroundColor: "$selected",
        color: "$panel"
      },
      false: {}
    },
    bp: {
      mobile: {},
      small: {}
    }
  },
  compoundVariants: [
    {
      isActive: false,
      bp: "small",
      css: {
        "&:focus": {
          backgroundColor: "$hover"
        },
        "&:hover:not(:disabled)": {
          backgroundColor: "$hover"
        }
      }
    }
  ]
});

// src/components/Primitives/DropdownMenu/DMSubMenu.tsx
var React59 = __toESM(require("react"));
var import_react_dropdown_menu8 = require("@radix-ui/react-dropdown-menu");
function DMSubMenu({
  children,
  size,
  disabled = false,
  label,
  id
}) {
  return /* @__PURE__ */ React59.createElement("span", {
    id
  }, /* @__PURE__ */ React59.createElement(import_react_dropdown_menu8.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React59.createElement(import_react_dropdown_menu8.TriggerItem, {
    dir: "ltr",
    asChild: true
  }, /* @__PURE__ */ React59.createElement(RowButton, {
    disabled,
    hasArrow: true
  }, label)), /* @__PURE__ */ React59.createElement(import_react_dropdown_menu8.Content, {
    dir: "ltr",
    asChild: true,
    sideOffset: 2,
    alignOffset: -2
  }, /* @__PURE__ */ React59.createElement(MenuContent, {
    size
  }, children, /* @__PURE__ */ React59.createElement(import_react_dropdown_menu8.Arrow, {
    offset: 13
  })))));
}

// src/components/Primitives/DropdownMenu/DMTriggerIcon.tsx
var React60 = __toESM(require("react"));
var import_react_dropdown_menu9 = require("@radix-ui/react-dropdown-menu");
function DMTriggerIcon(_a) {
  var _b = _a, { id, children } = _b, rest = __objRest(_b, ["id", "children"]);
  return /* @__PURE__ */ React60.createElement(import_react_dropdown_menu9.Trigger, {
    asChild: true,
    id
  }, /* @__PURE__ */ React60.createElement(ToolButton, __spreadValues({}, rest), children));
}

// src/components/Primitives/Divider/Divider.tsx
var Divider = styled("hr", {
  height: 1,
  marginTop: "$1",
  marginRight: "-$0",
  marginBottom: "$1",
  marginLeft: "-$0",
  border: "none",
  borderBottom: "1px solid $hover"
});

// src/components/ToolsPanel/ActionButton.tsx
var selectedShapesCountSelector = (s) => s.document.pageStates[s.appState.currentPageId].selectedIds.length;
var isAllLockedSelector = (s) => {
  const page = s.document.pages[s.appState.currentPageId];
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.every((id) => page.shapes[id].isLocked);
};
var isAllAspectLockedSelector = (s) => {
  const page = s.document.pages[s.appState.currentPageId];
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.every((id) => page.shapes[id].isAspectRatioLocked);
};
var isAllGroupedSelector = (s) => {
  const page = s.document.pages[s.appState.currentPageId];
  const selectedShapes = s.document.pageStates[s.appState.currentPageId].selectedIds.map((id) => page.shapes[id]);
  return selectedShapes.every((shape) => shape.children !== void 0 || shape.parentId === selectedShapes[0].parentId && selectedShapes[0].parentId !== s.appState.currentPageId);
};
var hasSelectionSelector = (s) => {
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.length > 0;
};
var hasMultipleSelectionSelector = (s) => {
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.length > 1;
};
function ActionButton() {
  const app = useTldrawApp();
  const isAllLocked = app.useStore(isAllLockedSelector);
  const isAllAspectLocked = app.useStore(isAllAspectLockedSelector);
  const isAllGrouped = app.useStore(isAllGroupedSelector);
  const hasSelection = app.useStore(hasSelectionSelector);
  const hasMultipleSelection = app.useStore(hasMultipleSelectionSelector);
  const selectedShapesCount = app.useStore(selectedShapesCountSelector);
  const hasTwoOrMore = selectedShapesCount > 1;
  const hasThreeOrMore = selectedShapesCount > 2;
  const handleRotate = React61.useCallback(() => {
    app.rotate();
  }, [app]);
  const handleDuplicate = React61.useCallback(() => {
    app.duplicate();
  }, [app]);
  const handleToggleLocked = React61.useCallback(() => {
    app.toggleLocked();
  }, [app]);
  const handleToggleAspectRatio = React61.useCallback(() => {
    app.toggleAspectRatioLocked();
  }, [app]);
  const handleGroup = React61.useCallback(() => {
    app.group();
  }, [app]);
  const handleMoveToBack = React61.useCallback(() => {
    app.moveToBack();
  }, [app]);
  const handleMoveBackward = React61.useCallback(() => {
    app.moveBackward();
  }, [app]);
  const handleMoveForward = React61.useCallback(() => {
    app.moveForward();
  }, [app]);
  const handleMoveToFront = React61.useCallback(() => {
    app.moveToFront();
  }, [app]);
  const handleResetAngle = React61.useCallback(() => {
    app.setShapeProps({ rotation: 0 });
  }, [app]);
  const alignTop = React61.useCallback(() => {
    app.align("top" /* Top */);
  }, [app]);
  const alignCenterVertical = React61.useCallback(() => {
    app.align("centerVertical" /* CenterVertical */);
  }, [app]);
  const alignBottom = React61.useCallback(() => {
    app.align("bottom" /* Bottom */);
  }, [app]);
  const stretchVertically = React61.useCallback(() => {
    app.stretch("vertical" /* Vertical */);
  }, [app]);
  const distributeVertically = React61.useCallback(() => {
    app.distribute("vertical" /* Vertical */);
  }, [app]);
  const alignLeft = React61.useCallback(() => {
    app.align("left" /* Left */);
  }, [app]);
  const alignCenterHorizontal = React61.useCallback(() => {
    app.align("centerHorizontal" /* CenterHorizontal */);
  }, [app]);
  const alignRight = React61.useCallback(() => {
    app.align("right" /* Right */);
  }, [app]);
  const stretchHorizontally = React61.useCallback(() => {
    app.stretch("horizontal" /* Horizontal */);
  }, [app]);
  const distributeHorizontally = React61.useCallback(() => {
    app.distribute("horizontal" /* Horizontal */);
  }, [app]);
  const handleMenuOpenChange = React61.useCallback((open) => {
    app.setMenuOpen(open);
  }, [app]);
  return /* @__PURE__ */ React61.createElement(DropdownMenu2.Root, {
    dir: "ltr",
    onOpenChange: handleMenuOpenChange
  }, /* @__PURE__ */ React61.createElement(DropdownMenu2.Trigger, {
    dir: "ltr",
    asChild: true,
    id: "TD-Tools-Dots"
  }, /* @__PURE__ */ React61.createElement(ToolButton, {
    variant: "circle"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.DotsHorizontalIcon, null))), /* @__PURE__ */ React61.createElement(DMContent, {
    sideOffset: 16
  }, /* @__PURE__ */ React61.createElement(React61.Fragment, null, /* @__PURE__ */ React61.createElement(ButtonsRow, null, /* @__PURE__ */ React61.createElement(ToolButton, {
    variant: "icon",
    disabled: !hasSelection,
    onClick: handleDuplicate
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Duplicate",
    kbd: `#D`,
    id: "TD-Tools-Copy"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.CopyIcon, null))), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleRotate
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Rotate",
    id: "TD-Tools-Rotate"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.RotateCounterClockwiseIcon, null))), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleToggleLocked
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Toggle Locked",
    kbd: `#L`,
    id: "TD-Tools-Lock"
  }, isAllLocked ? /* @__PURE__ */ React61.createElement(import_react_icons4.LockClosedIcon, null) : /* @__PURE__ */ React61.createElement(import_react_icons4.LockOpen1Icon, null))), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleToggleAspectRatio
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Toggle Aspect Ratio Lock",
    id: "TD-Tools-AspectRatio"
  }, isAllAspectLocked ? /* @__PURE__ */ React61.createElement(import_react_icons4.AspectRatioIcon, null) : /* @__PURE__ */ React61.createElement(import_react_icons4.BoxIcon, null))), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasSelection || !isAllGrouped && !hasMultipleSelection,
    onClick: handleGroup
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Group",
    kbd: `#G`,
    id: "TD-Tools-Group"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.GroupIcon, null)))), /* @__PURE__ */ React61.createElement(ButtonsRow, null, /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleMoveToBack
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Move to Back",
    kbd: `#\u21E7[`,
    id: "TD-Tools-PinBottom"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.PinBottomIcon, null))), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleMoveBackward
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Move Backward",
    kbd: `#[`,
    id: "TD-Tools-ArrowDown"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.ArrowDownIcon, null))), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleMoveForward
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Move Forward",
    kbd: `#]`,
    id: "TD-Tools-ArrowUp"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.ArrowUpIcon, null))), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleMoveToFront
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Move to Front",
    kbd: `#\u21E7]`,
    id: "TD-Tools-PinTop"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.PinTopIcon, null))), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasSelection,
    onClick: handleResetAngle
  }, /* @__PURE__ */ React61.createElement(Tooltip, {
    label: "Reset Angle",
    id: "TD-Tools-ResetAngle"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.AngleIcon, null)))), /* @__PURE__ */ React61.createElement(Divider, null), /* @__PURE__ */ React61.createElement(ButtonsRow, null, /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignLeft,
    id: "TD-Tools-AlignLeft"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.AlignLeftIcon, null)), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignCenterHorizontal,
    id: "TD-Tools-AlignCenterHorizontal"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.AlignCenterHorizontallyIcon, null)), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignRight,
    id: "TD-Tools-AlignRight"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.AlignRightIcon, null)), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: stretchHorizontally,
    id: "TD-Tools-StretchHorizontal"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.StretchHorizontallyIcon, null)), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasThreeOrMore,
    onClick: distributeHorizontally,
    id: "TD-Tools-SpaceEvenlyHorizontal"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.SpaceEvenlyHorizontallyIcon, null))), /* @__PURE__ */ React61.createElement(ButtonsRow, null, /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignTop,
    id: "TD-Tools-AlignTop"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.AlignTopIcon, null)), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignCenterVertical,
    id: "TD-Tools-AlignCenterVertical"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.AlignCenterVerticallyIcon, null)), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: alignBottom,
    id: "TD-Tools-AlignBottom"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.AlignBottomIcon, null)), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasTwoOrMore,
    onClick: stretchVertically,
    id: "TD-Tools-tretchVertical"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.StretchVerticallyIcon, null)), /* @__PURE__ */ React61.createElement(ToolButton, {
    disabled: !hasThreeOrMore,
    onClick: distributeVertically,
    id: "TD-Tools-SpaceEvenlyVertical"
  }, /* @__PURE__ */ React61.createElement(import_react_icons4.SpaceEvenlyVerticallyIcon, null))))));
}
var ButtonsRow = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  outline: "none",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0
});

// src/components/ToolsPanel/DeleteButton.tsx
var React62 = __toESM(require("react"));
function DeleteButton() {
  const app = useTldrawApp();
  const handleDelete = React62.useCallback(() => {
    app.delete();
  }, [app]);
  const hasSelection = app.useStore((s) => s.appState.status === "idle" && s.document.pageStates[s.appState.currentPageId].selectedIds.length > 0);
  return /* @__PURE__ */ React62.createElement(Tooltip, {
    label: "Delete",
    kbd: "\u232B",
    id: "TD-Delete"
  }, /* @__PURE__ */ React62.createElement(ToolButton, {
    variant: "circle",
    disabled: !hasSelection,
    onSelect: handleDelete
  }, /* @__PURE__ */ React62.createElement(TrashIcon, null)));
}

// src/components/ToolsPanel/ToolsPanel.tsx
var isDebugModeSelector = (s) => s.settings.isDebugMode;
var ToolsPanel = React63.memo(function ToolsPanel2({ onBlur }) {
  const app = useTldrawApp();
  const isDebugMode = app.useStore(isDebugModeSelector);
  return /* @__PURE__ */ React63.createElement(StyledToolsPanelContainer, {
    onBlur
  }, /* @__PURE__ */ React63.createElement(StyledCenterWrap, {
    id: "TD-Tools"
  }, /* @__PURE__ */ React63.createElement(BackToContent, null), /* @__PURE__ */ React63.createElement(StyledPrimaryTools, null, /* @__PURE__ */ React63.createElement(ActionButton, null), /* @__PURE__ */ React63.createElement(PrimaryTools, null), /* @__PURE__ */ React63.createElement(DeleteButton, null))), isDebugMode && /* @__PURE__ */ React63.createElement(StyledStatusWrap, null, /* @__PURE__ */ React63.createElement(StatusBar, null)));
});
var StyledToolsPanelContainer = styled("div", {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto auto",
  justifyContent: "space-between",
  padding: "0",
  gap: "$4",
  zIndex: 200,
  pointerEvents: "none",
  "& > div > *": {
    pointerEvents: "all"
  }
});
var StyledCenterWrap = styled("div", {
  gridRow: 1,
  gridColumn: 2,
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "$4"
});
var StyledStatusWrap = styled("div", {
  gridRow: 2,
  gridColumn: "1 / span 3"
});
var StyledPrimaryTools = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "$2"
});

// src/components/TopPanel/TopPanel.tsx
var React73 = __toESM(require("react"));

// src/components/TopPanel/Menu/Menu.tsx
var React66 = __toESM(require("react"));
var import_react_icons5 = require("@radix-ui/react-icons");
var DropdownMenu3 = __toESM(require("@radix-ui/react-dropdown-menu"));

// src/components/TopPanel/PreferencesMenu/PreferencesMenu.tsx
var React64 = __toESM(require("react"));
var settingsSelector = (s) => s.settings;
function PreferencesMenu() {
  const app = useTldrawApp();
  const settings = app.useStore(settingsSelector);
  const toggleDebugMode = React64.useCallback(() => {
    app.setSetting("isDebugMode", (v) => !v);
  }, [app]);
  const toggleDarkMode = React64.useCallback(() => {
    app.setSetting("isDarkMode", (v) => !v);
  }, [app]);
  const toggleFocusMode = React64.useCallback(() => {
    app.setSetting("isFocusMode", (v) => !v);
  }, [app]);
  const toggleRotateHandle = React64.useCallback(() => {
    app.setSetting("showRotateHandles", (v) => !v);
  }, [app]);
  const toggleGrid = React64.useCallback(() => {
    app.setSetting("showGrid", (v) => !v);
  }, [app]);
  const toggleBoundShapesHandle = React64.useCallback(() => {
    app.setSetting("showBindingHandles", (v) => !v);
  }, [app]);
  const toggleisSnapping = React64.useCallback(() => {
    app.setSetting("isSnapping", (v) => !v);
  }, [app]);
  const toggleCloneControls = React64.useCallback(() => {
    app.setSetting("showCloneHandles", (v) => !v);
  }, [app]);
  const toggleCadSelectMode = React64.useCallback(() => {
    app.setSetting("isCadSelectMode", (v) => !v);
  }, [app]);
  return /* @__PURE__ */ React64.createElement(DMSubMenu, {
    label: "Preferences",
    id: "TD-MenuItem-Preferences"
  }, /* @__PURE__ */ React64.createElement(DMCheckboxItem, {
    checked: settings.isDarkMode,
    onCheckedChange: toggleDarkMode,
    kbd: "#\u21E7D",
    id: "TD-MenuItem-Preferences-Dark_Mode"
  }, "Dark Mode"), /* @__PURE__ */ React64.createElement(DMCheckboxItem, {
    checked: settings.isFocusMode,
    onCheckedChange: toggleFocusMode,
    kbd: "#.",
    id: "TD-MenuItem-Preferences-Focus_Mode"
  }, "Focus Mode"), /* @__PURE__ */ React64.createElement(DMCheckboxItem, {
    checked: settings.isDebugMode,
    onCheckedChange: toggleDebugMode,
    id: "TD-MenuItem-Preferences-Debug_Mode"
  }, "Debug Mode"), /* @__PURE__ */ React64.createElement(DMDivider, null), /* @__PURE__ */ React64.createElement(DMCheckboxItem, {
    checked: settings.showGrid,
    onCheckedChange: toggleGrid,
    kbd: "#\u21E7G",
    id: "TD-MenuItem-Preferences-Grid"
  }, "Show Grid"), /* @__PURE__ */ React64.createElement(DMCheckboxItem, {
    checked: settings.isCadSelectMode,
    onCheckedChange: toggleCadSelectMode,
    id: "TD-MenuItem-Preferences-Cad_Selection"
  }, "Use CAD Selection"), /* @__PURE__ */ React64.createElement(DMCheckboxItem, {
    checked: settings.isSnapping,
    onCheckedChange: toggleisSnapping,
    id: "TD-MenuItem-Preferences-Always_Show_Snaps"
  }, "Always Show Snaps"), /* @__PURE__ */ React64.createElement(DMCheckboxItem, {
    checked: settings.showRotateHandles,
    onCheckedChange: toggleRotateHandle,
    id: "TD-MenuItem-Preferences-Rotate_Handles"
  }, "Rotate Handles"), /* @__PURE__ */ React64.createElement(DMCheckboxItem, {
    checked: settings.showBindingHandles,
    onCheckedChange: toggleBoundShapesHandle,
    id: "TD-MenuItem-Preferences-Binding_Handles"
  }, "Binding Handles"), /* @__PURE__ */ React64.createElement(DMCheckboxItem, {
    checked: settings.showCloneHandles,
    onCheckedChange: toggleCloneControls,
    id: "TD-MenuItem-Preferences-Clone_Handles"
  }, "Clone Handles"));
}

// src/components/Primitives/icons/HeartIcon.tsx
var React65 = __toESM(require("react"));
function HeartIcon() {
  return /* @__PURE__ */ React65.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React65.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
}

// src/components/TopPanel/Menu/Menu.tsx
var numberOfSelectedIdsSelector = (s) => {
  return s.document.pageStates[s.appState.currentPageId].selectedIds.length;
};
var disableAssetsSelector = (s) => {
  return s.appState.disableAssets;
};
var Menu = React66.memo(function Menu2({ showSponsorLink, readOnly }) {
  const app = useTldrawApp();
  const numberOfSelectedIds = app.useStore(numberOfSelectedIdsSelector);
  const disableAssets = app.useStore(disableAssetsSelector);
  const [_, setForce] = React66.useState(0);
  React66.useEffect(() => setForce(1), []);
  const { onNewProject, onOpenProject, onSaveProject, onSaveProjectAs } = useFileSystemHandlers();
  const handleExportPNG = React66.useCallback(() => __async(this, null, function* () {
    yield app.exportAllShapesAs("png" /* PNG */);
  }), [app]);
  const handleExportJPG = React66.useCallback(() => __async(this, null, function* () {
    yield app.exportAllShapesAs("jpeg" /* JPG */);
  }), [app]);
  const handleExportWEBP = React66.useCallback(() => __async(this, null, function* () {
    yield app.exportAllShapesAs("webp" /* WEBP */);
  }), [app]);
  const handleExportPDF = React66.useCallback(() => __async(this, null, function* () {
    yield app.exportAllShapesAs("pdf" /* PDF */);
  }), [app]);
  const handleExportSVG = React66.useCallback(() => __async(this, null, function* () {
    yield app.exportAllShapesAs("svg" /* SVG */);
  }), [app]);
  const handleExportJSON = React66.useCallback(() => __async(this, null, function* () {
    yield app.exportAllShapesAs("json" /* JSON */);
  }), [app]);
  const handleSignIn = React66.useCallback(() => {
    var _a, _b;
    (_b = (_a = app.callbacks).onSignIn) == null ? void 0 : _b.call(_a, app);
  }, [app]);
  const handleSignOut = React66.useCallback(() => {
    var _a, _b;
    (_b = (_a = app.callbacks).onSignOut) == null ? void 0 : _b.call(_a, app);
  }, [app]);
  const handleCut = React66.useCallback(() => {
    app.cut();
  }, [app]);
  const handleCopy = React66.useCallback(() => {
    app.copy();
  }, [app]);
  const handlePaste = React66.useCallback(() => {
    app.paste();
  }, [app]);
  const handleCopySvg = React66.useCallback(() => {
    app.copySvg();
  }, [app]);
  const handleCopyJson = React66.useCallback(() => {
    app.copyJson();
  }, [app]);
  const handleSelectAll = React66.useCallback(() => {
    app.selectAll();
  }, [app]);
  const handleSelectNone = React66.useCallback(() => {
    app.selectNone();
  }, [app]);
  const handleUploadMedia = React66.useCallback(() => {
    app.openAsset();
  }, [app]);
  const handleZoomTo100 = React66.useCallback(() => {
    app.zoomTo(1);
  }, [app]);
  const showFileMenu = app.callbacks.onNewProject || app.callbacks.onOpenProject || app.callbacks.onSaveProject || app.callbacks.onSaveProjectAs || app.callbacks.onExport;
  const showSignInOutMenu = app.callbacks.onSignIn || app.callbacks.onSignOut || showSponsorLink;
  const hasSelection = numberOfSelectedIds > 0;
  return /* @__PURE__ */ React66.createElement(DropdownMenu3.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React66.createElement(DMTriggerIcon, {
    isSponsor: showSponsorLink,
    id: "TD-MenuIcon"
  }, /* @__PURE__ */ React66.createElement(import_react_icons5.HamburgerMenuIcon, null)), /* @__PURE__ */ React66.createElement(DMContent, {
    variant: "menu",
    id: "TD-Menu"
  }, showFileMenu && /* @__PURE__ */ React66.createElement(DMSubMenu, {
    label: "File...",
    id: "TD-MenuItem-File"
  }, app.callbacks.onNewProject && /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: onNewProject,
    kbd: "#N",
    id: "TD-MenuItem-File-New_Project"
  }, "New Project"), app.callbacks.onOpenProject && /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: onOpenProject,
    kbd: "#O",
    id: "TD-MenuItem-File-Open"
  }, "Open..."), app.callbacks.onSaveProject && /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: onSaveProject,
    kbd: "#S",
    id: "TD-MenuItem-File-Save"
  }, "Save"), app.callbacks.onSaveProjectAs && /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: onSaveProjectAs,
    kbd: "#\u21E7S",
    id: "TD-MenuItem-File-Save_As"
  }, "Save As..."), app.callbacks.onExport && /* @__PURE__ */ React66.createElement(React66.Fragment, null, /* @__PURE__ */ React66.createElement(Divider, null), /* @__PURE__ */ React66.createElement(DMSubMenu, {
    label: "Export",
    size: "small",
    id: "TD-MenuItem-File-Export"
  }, /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: handleExportPNG,
    id: "TD-MenuItem-File-Export-PNG"
  }, "PNG"), /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: handleExportJPG,
    id: "TD-MenuItem-File-Export-JPG"
  }, "JPG"), /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: handleExportWEBP,
    id: "TD-MenuItem-File-Export-WEBP"
  }, "WEBP"), /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: handleExportSVG,
    id: "TD-MenuItem-File-Export-SVG"
  }, "SVG"), /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: handleExportJSON,
    id: "TD-MenuItem-File-Export-JSON"
  }, "JSON"))), !disableAssets && /* @__PURE__ */ React66.createElement(React66.Fragment, null, /* @__PURE__ */ React66.createElement(Divider, null), /* @__PURE__ */ React66.createElement(DMItem, {
    onClick: handleUploadMedia,
    kbd: "#U",
    id: "TD-MenuItem-File-Upload_Media"
  }, "Upload Media"))), !readOnly && /* @__PURE__ */ React66.createElement(React66.Fragment, null, /* @__PURE__ */ React66.createElement(DMSubMenu, {
    label: "Edit...",
    id: "TD-MenuItem-Edit"
  }, /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.undo,
    kbd: "#Z",
    id: "TD-MenuItem-Edit-Undo"
  }, "Undo"), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.redo,
    kbd: "#\u21E7Z",
    id: "TD-MenuItem-Edit-Redo"
  }, "Redo"), /* @__PURE__ */ React66.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    disabled: !hasSelection,
    onClick: handleCut,
    kbd: "#X",
    id: "TD-MenuItem-Edit-Cut"
  }, "Cut"), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    disabled: !hasSelection,
    onClick: handleCopy,
    kbd: "#C",
    id: "TD-MenuItem-Edit-Copy"
  }, "Copy"), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: handlePaste,
    kbd: "#V",
    id: "TD-MenuItem-Edit-Paste"
  }, "Paste"), /* @__PURE__ */ React66.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    disabled: !hasSelection,
    onClick: handleCopySvg,
    kbd: "#\u21E7C",
    id: "TD-MenuItem-Edit-Copy_as_SVG"
  }, "Copy as SVG"), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    disabled: !hasSelection,
    onClick: handleCopyJson,
    id: "TD-MenuItem-Edit-Copy_as_JSON"
  }, "Copy as JSON"), /* @__PURE__ */ React66.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: handleSelectAll,
    kbd: "#A",
    id: "TD-MenuItem-Select_All"
  }, "Select All"), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: handleSelectNone,
    id: "TD-MenuItem-Select_None"
  }, "Select None"))), /* @__PURE__ */ React66.createElement(DMSubMenu, {
    label: "View",
    id: "TD-MenuItem-Edit"
  }, /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomIn,
    kbd: "#+",
    id: "TD-MenuItem-View-ZoomIn"
  }, "Zoom In"), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomOut,
    kbd: "#-",
    id: "TD-MenuItem-View-ZoomOut"
  }, "Zoom Out"), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: handleZoomTo100,
    kbd: "\u21E7+0",
    id: "TD-MenuItem-View-ZoomTo100"
  }, "Zoom to 100%"), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomToFit,
    kbd: "\u21E7+1",
    id: "TD-MenuItem-View-ZoomToFit"
  }, "Zoom to Fit"), /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomToSelection,
    kbd: "\u21E7+2",
    id: "TD-MenuItem-View-ZoomToSelection"
  }, "Zoom to Selection")), /* @__PURE__ */ React66.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React66.createElement(PreferencesMenu, null), /* @__PURE__ */ React66.createElement(DMDivider, {
    dir: "ltr"
  }), /* @__PURE__ */ React66.createElement("a", {
    href: "https://github.com/Tldraw/Tldraw",
    target: "_blank",
    rel: "nofollow"
  }, /* @__PURE__ */ React66.createElement(DMItem, {
    id: "TD-MenuItem-Github"
  }, "GitHub", /* @__PURE__ */ React66.createElement(SmallIcon, null, /* @__PURE__ */ React66.createElement(import_react_icons5.GitHubLogoIcon, null)))), /* @__PURE__ */ React66.createElement("a", {
    href: "https://twitter.com/Tldraw",
    target: "_blank",
    rel: "nofollow"
  }, /* @__PURE__ */ React66.createElement(DMItem, {
    id: "TD-MenuItem-Twitter"
  }, "Twitter", /* @__PURE__ */ React66.createElement(SmallIcon, null, /* @__PURE__ */ React66.createElement(import_react_icons5.TwitterLogoIcon, null)))), /* @__PURE__ */ React66.createElement("a", {
    href: "https://discord.gg/SBBEVCA4PG",
    target: "_blank",
    rel: "nofollow"
  }, /* @__PURE__ */ React66.createElement(DMItem, {
    id: "TD-MenuItem-Discord"
  }, "Discord", /* @__PURE__ */ React66.createElement(SmallIcon, null, /* @__PURE__ */ React66.createElement(DiscordIcon, null)))), showSponsorLink && /* @__PURE__ */ React66.createElement("a", {
    href: "https://github.com/sponsors/steveruizok",
    target: "_blank",
    rel: "nofollow"
  }, /* @__PURE__ */ React66.createElement(DMItem, {
    isSponsor: true,
    id: "TD-MenuItem-Become_a_Sponsor"
  }, "Become a Sponsor", " ", /* @__PURE__ */ React66.createElement(SmallIcon, null, /* @__PURE__ */ React66.createElement(HeartIcon, null)))), showSignInOutMenu && /* @__PURE__ */ React66.createElement(React66.Fragment, null, /* @__PURE__ */ React66.createElement(DMDivider, {
    dir: "ltr"
  }), " ", app.callbacks.onSignIn && /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: handleSignIn,
    id: "TD-MenuItem-Sign_in"
  }, "Sign In"), app.callbacks.onSignOut && /* @__PURE__ */ React66.createElement(DMItem, {
    onSelect: handleSignOut,
    id: "TD-MenuItem-Sign_out"
  }, "Sign Out", /* @__PURE__ */ React66.createElement(SmallIcon, null, /* @__PURE__ */ React66.createElement(import_react_icons5.ExitIcon, null))))));
});

// src/components/TopPanel/PageMenu/PageMenu.tsx
var React69 = __toESM(require("react"));
var DropdownMenu4 = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_react_icons7 = require("@radix-ui/react-icons");

// src/components/TopPanel/PageOptionsDialog/PageOptionsDialog.tsx
var React68 = __toESM(require("react"));
var Dialog = __toESM(require("@radix-ui/react-alert-dialog"));
var import_react_icons6 = require("@radix-ui/react-icons");

// src/components/Primitives/IconButton/IconButton.tsx
var IconButton = styled("button", {
  position: "relative",
  height: "32px",
  width: "32px",
  backgroundColor: "$panel",
  borderRadius: "4px",
  padding: "0",
  margin: "0",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  fontSize: "$0",
  color: "$text",
  cursor: "pointer",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  "& > *": {
    gridRow: 1,
    gridColumn: 1
  },
  "&:disabled": {
    opacity: "0.5"
  },
  "& > span": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  variants: {
    bp: {
      mobile: {
        backgroundColor: "transparent"
      },
      small: {
        "&:hover:not(:disabled)": {
          backgroundColor: "$hover"
        }
      }
    },
    size: {
      small: {
        height: 32,
        width: 32,
        "& svg:nth-of-type(1)": {
          height: "16px",
          width: "16px"
        }
      },
      medium: {
        height: 44,
        width: 44,
        "& svg:nth-of-type(1)": {
          height: "18px",
          width: "18px"
        }
      },
      large: {
        height: 44,
        width: 44,
        "& svg:nth-of-type(1)": {
          height: "20px",
          width: "20px"
        }
      }
    },
    isActive: {
      true: {
        color: "$selected"
      }
    }
  }
});

// src/components/Primitives/TextField/TextField.tsx
var React67 = __toESM(require("react"));
var TextField = ({ value, onChange, placeholder = "", icon }) => {
  return /* @__PURE__ */ React67.createElement(StyledInputWrapper, null, /* @__PURE__ */ React67.createElement(StyledInput, {
    value,
    onChange,
    placeholder
  }), icon ? /* @__PURE__ */ React67.createElement(StyledInputIcon, null, icon) : null);
};
var StyledInputWrapper = styled("div", {
  position: "relative",
  width: "100%",
  height: "min-content"
});
var StyledInput = styled("input", {
  color: "$text",
  border: "none",
  textAlign: "left",
  width: "100%",
  paddingLeft: "$3",
  paddingRight: "$6",
  height: "32px",
  outline: "none",
  fontFamily: "$ui",
  fontSize: "$1",
  "&:focus": {
    backgroundColor: "$hover"
  },
  borderRadius: "$2"
});
var StyledInputIcon = styled(SmallIcon, {
  top: 0,
  right: 0,
  position: "absolute",
  paddingLeft: "$3",
  paddingRight: "$3",
  pointerEvents: "none"
});

// src/components/TopPanel/PageOptionsDialog/PageOptionsDialog.tsx
var canDeleteSelector = (s) => {
  return Object.keys(s.document.pages).length > 1;
};
function PageOptionsDialog({ page, onOpen, onClose }) {
  const app = useTldrawApp();
  const [isOpen, setIsOpen] = React68.useState(false);
  const [pageName, setPageName] = React68.useState(page.name || "Page");
  const canDelete = app.useStore(canDeleteSelector);
  const rInput = React68.useRef(null);
  const handleDuplicate = React68.useCallback(() => {
    app.duplicatePage(page.id);
    onClose == null ? void 0 : onClose();
  }, [app]);
  const handleDelete = React68.useCallback(() => {
    if (window.confirm(`Are you sure you want to delete this page?`)) {
      app.deletePage(page.id);
      onClose == null ? void 0 : onClose();
    }
  }, [app]);
  const handleOpenChange = React68.useCallback((isOpen2) => {
    setIsOpen(isOpen2);
    if (isOpen2) {
      onOpen == null ? void 0 : onOpen();
      return;
    }
  }, [app]);
  const close = React68.useCallback(() => setIsOpen(false), []);
  function stopPropagation2(e) {
    e.stopPropagation();
  }
  function handleRename(event) {
    setPageName(event.target.value);
    app.renamePage(page.id, event.target.value || page.name || "Page");
  }
  React68.useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        const elm = rInput.current;
        if (elm) {
          elm.focus();
          elm.select();
        }
      });
    }
  }, [isOpen]);
  return /* @__PURE__ */ React68.createElement(Dialog.Root, {
    open: isOpen,
    onOpenChange: handleOpenChange
  }, /* @__PURE__ */ React68.createElement(Dialog.Trigger, {
    asChild: true,
    "data-shy": "true"
  }, /* @__PURE__ */ React68.createElement(IconButton, {
    bp: breakpoints
  }, /* @__PURE__ */ React68.createElement(SmallIcon, null, /* @__PURE__ */ React68.createElement(import_react_icons6.MixerVerticalIcon, null)))), /* @__PURE__ */ React68.createElement(Dialog.Portal, null, /* @__PURE__ */ React68.createElement(StyledDialogOverlay, {
    onPointerDown: close
  }), /* @__PURE__ */ React68.createElement(StyledDialogContent, {
    dir: "ltr",
    onKeyDown: stopPropagation2,
    onKeyUp: stopPropagation2
  }, /* @__PURE__ */ React68.createElement(TextField, {
    placeholder: "Page name",
    value: pageName,
    onChange: handleRename,
    icon: /* @__PURE__ */ React68.createElement(import_react_icons6.Pencil1Icon, null)
  }), /* @__PURE__ */ React68.createElement(Divider, null), /* @__PURE__ */ React68.createElement(DialogAction, {
    onSelect: handleDuplicate
  }, "Duplicate"), /* @__PURE__ */ React68.createElement(DialogAction, {
    disabled: !canDelete,
    onSelect: handleDelete
  }, "Delete"), /* @__PURE__ */ React68.createElement(Divider, null), /* @__PURE__ */ React68.createElement(Dialog.Cancel, {
    asChild: true
  }, /* @__PURE__ */ React68.createElement(RowButton, null, "Cancel")))));
}
var StyledDialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 240,
  maxWidth: "fit-content",
  maxHeight: "85vh",
  marginTop: "-5vh",
  pointerEvents: "all",
  backgroundColor: "$panel",
  padding: "$0",
  borderRadius: "$2",
  font: "$ui",
  "&:focus": {
    outline: "none"
  }
});
var StyledDialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, .15)",
  position: "fixed",
  pointerEvents: "all",
  inset: 0
});
function DialogAction(_a) {
  var _b = _a, {
    onSelect
  } = _b, rest = __objRest(_b, [
    "onSelect"
  ]);
  return /* @__PURE__ */ React68.createElement(Dialog.Action, {
    asChild: true,
    onClick: onSelect,
    onSelect
  }, /* @__PURE__ */ React68.createElement(RowButton, __spreadValues({}, rest)));
}

// src/components/TopPanel/PageMenu/PageMenu.tsx
var sortedSelector = (s) => Object.values(s.document.pages).sort((a, b) => (a.childIndex || 0) - (b.childIndex || 0));
var currentPageNameSelector = (s) => s.document.pages[s.appState.currentPageId].name;
var currentPageIdSelector = (s) => s.document.pages[s.appState.currentPageId].id;
function PageMenu() {
  const app = useTldrawApp();
  const rIsOpen = React69.useRef(false);
  const [isOpen, setIsOpen] = React69.useState(false);
  React69.useEffect(() => {
    if (rIsOpen.current !== isOpen) {
      rIsOpen.current = isOpen;
    }
  }, [isOpen]);
  const handleClose = React69.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const handleOpenChange = React69.useCallback((isOpen2) => {
    if (rIsOpen.current !== isOpen2) {
      setIsOpen(isOpen2);
    }
  }, [setIsOpen]);
  const currentPageName = app.useStore(currentPageNameSelector);
  return /* @__PURE__ */ React69.createElement(DropdownMenu4.Root, {
    dir: "ltr",
    open: isOpen,
    onOpenChange: handleOpenChange
  }, /* @__PURE__ */ React69.createElement(DropdownMenu4.Trigger, {
    dir: "ltr",
    asChild: true,
    id: "TD-Page"
  }, /* @__PURE__ */ React69.createElement(ToolButton, {
    variant: "text"
  }, currentPageName || "Page")), /* @__PURE__ */ React69.createElement(DMContent, {
    variant: "menu",
    align: "start"
  }, isOpen && /* @__PURE__ */ React69.createElement(PageMenuContent, {
    onClose: handleClose
  })));
}
function PageMenuContent({ onClose }) {
  const app = useTldrawApp();
  const sortedPages = app.useStore(sortedSelector);
  const currentPageId = app.useStore(currentPageIdSelector);
  const handleCreatePage = React69.useCallback(() => {
    app.createPage();
  }, [app]);
  const handleChangePage = React69.useCallback((id) => {
    onClose();
    app.changePage(id);
  }, [app]);
  return /* @__PURE__ */ React69.createElement(React69.Fragment, null, /* @__PURE__ */ React69.createElement(DropdownMenu4.RadioGroup, {
    dir: "ltr",
    value: currentPageId,
    onValueChange: handleChangePage
  }, sortedPages.map((page) => /* @__PURE__ */ React69.createElement(ButtonWithOptions, {
    key: page.id
  }, /* @__PURE__ */ React69.createElement(DropdownMenu4.RadioItem, {
    title: page.name || "Page",
    value: page.id,
    key: page.id,
    asChild: true
  }, /* @__PURE__ */ React69.createElement(PageButton, null, /* @__PURE__ */ React69.createElement("span", null, page.name || "Page"), /* @__PURE__ */ React69.createElement(DropdownMenu4.ItemIndicator, null, /* @__PURE__ */ React69.createElement(SmallIcon, null, /* @__PURE__ */ React69.createElement(import_react_icons7.CheckIcon, null))))), /* @__PURE__ */ React69.createElement(PageOptionsDialog, {
    page,
    onClose
  })))), /* @__PURE__ */ React69.createElement(DMDivider, null), /* @__PURE__ */ React69.createElement(DropdownMenu4.Item, {
    onSelect: handleCreatePage,
    asChild: true
  }, /* @__PURE__ */ React69.createElement(RowButton, null, /* @__PURE__ */ React69.createElement("span", null, "Create Page"), /* @__PURE__ */ React69.createElement(SmallIcon, null, /* @__PURE__ */ React69.createElement(import_react_icons7.PlusIcon, null)))));
}
var ButtonWithOptions = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridAutoFlow: "column",
  '& > *[data-shy="true"]': {
    opacity: 0
  },
  '&:hover > *[data-shy="true"]': {
    opacity: 1
  }
});
var PageButton = styled(RowButton, {
  minWidth: 128
});

// src/components/TopPanel/ZoomMenu/ZoomMenu.tsx
var React70 = __toESM(require("react"));
var DropdownMenu5 = __toESM(require("@radix-ui/react-dropdown-menu"));
var zoomSelector = (s) => s.document.pageStates[s.appState.currentPageId].camera.zoom;
var ZoomMenu = React70.memo(function ZoomMenu2() {
  const app = useTldrawApp();
  const zoom = app.useStore(zoomSelector);
  return /* @__PURE__ */ React70.createElement(DropdownMenu5.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React70.createElement(DropdownMenu5.Trigger, {
    dir: "ltr",
    asChild: true,
    id: "TD-Zoom"
  }, /* @__PURE__ */ React70.createElement(FixedWidthToolButton, {
    onDoubleClick: app.resetZoom,
    variant: "text"
  }, Math.round(zoom * 100), "%")), /* @__PURE__ */ React70.createElement(DMContent, {
    align: "end"
  }, /* @__PURE__ */ React70.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomIn,
    kbd: "#+",
    id: "TD-Zoom-Zoom_In"
  }, "Zoom In"), /* @__PURE__ */ React70.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomOut,
    kbd: "#\u2212",
    id: "TD-Zoom-Zoom_Out"
  }, "Zoom Out"), /* @__PURE__ */ React70.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.resetZoom,
    kbd: "\u21E70",
    id: "TD-Zoom-Zoom_To_100%"
  }, "To 100%"), /* @__PURE__ */ React70.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomToFit,
    kbd: "\u21E71",
    id: "TD-Zoom-To_Fit"
  }, "To Fit"), /* @__PURE__ */ React70.createElement(DMItem, {
    onSelect: preventEvent,
    onClick: app.zoomToSelection,
    kbd: "\u21E72",
    id: "TD-Zoom-To_Selection"
  }, "To Selection")));
});
var FixedWidthToolButton = styled(ToolButton, {
  minWidth: 56
});

// src/components/TopPanel/StyleMenu/StyleMenu.tsx
var React71 = __toESM(require("react"));
var DropdownMenu6 = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_react_icons8 = require("@radix-ui/react-icons");
var currentStyleSelector = (s) => s.appState.currentStyle;
var selectedIdsSelector = (s) => s.document.pageStates[s.appState.currentPageId].selectedIds;
var STYLE_KEYS = Object.keys(defaultTextStyle);
var DASH_ICONS = {
  ["draw" /* Draw */]: /* @__PURE__ */ React71.createElement(DashDrawIcon, null),
  ["solid" /* Solid */]: /* @__PURE__ */ React71.createElement(DashSolidIcon, null),
  ["dashed" /* Dashed */]: /* @__PURE__ */ React71.createElement(DashDashedIcon, null),
  ["dotted" /* Dotted */]: /* @__PURE__ */ React71.createElement(DashDottedIcon, null)
};
var SIZE_ICONS = {
  ["small" /* Small */]: /* @__PURE__ */ React71.createElement(SizeSmallIcon, null),
  ["medium" /* Medium */]: /* @__PURE__ */ React71.createElement(SizeMediumIcon, null),
  ["large" /* Large */]: /* @__PURE__ */ React71.createElement(SizeLargeIcon, null)
};
var ALIGN_ICONS = {
  ["start" /* Start */]: /* @__PURE__ */ React71.createElement(import_react_icons8.TextAlignLeftIcon, null),
  ["middle" /* Middle */]: /* @__PURE__ */ React71.createElement(import_react_icons8.TextAlignCenterIcon, null),
  ["end" /* End */]: /* @__PURE__ */ React71.createElement(import_react_icons8.TextAlignRightIcon, null),
  ["justify" /* Justify */]: /* @__PURE__ */ React71.createElement(import_react_icons8.TextAlignJustifyIcon, null)
};
var themeSelector = (s) => s.settings.isDarkMode ? "dark" : "light";
var optionsSelector = (s) => {
  const { activeTool, currentPageId: pageId } = s.appState;
  switch (activeTool) {
    case "select": {
      const page = s.document.pages[pageId];
      let hasText = false;
      let hasLabel = false;
      for (const id of s.document.pageStates[pageId].selectedIds) {
        if ("text" in page.shapes[id])
          hasText = true;
        if ("label" in page.shapes[id])
          hasLabel = true;
      }
      return hasText ? "text" : hasLabel ? "label" : "";
    }
    case "text" /* Text */: {
      return "text";
    }
    case "rectangle" /* Rectangle */: {
      return "label";
    }
    case "ellipse" /* Ellipse */: {
      return "label";
    }
    case "triangle" /* Triangle */: {
      return "label";
    }
    case "arrow" /* Arrow */: {
      return "label";
    }
    case "line" /* Line */: {
      return "label";
    }
  }
  return false;
};
var StyleMenu = React71.memo(function ColorMenu() {
  const app = useTldrawApp();
  const theme = app.useStore(themeSelector);
  const options2 = app.useStore(optionsSelector);
  const currentStyle = app.useStore(currentStyleSelector);
  const selectedIds = app.useStore(selectedIdsSelector);
  const [displayedStyle, setDisplayedStyle] = React71.useState(currentStyle);
  const rDisplayedStyle = React71.useRef(currentStyle);
  React71.useEffect(() => {
    const {
      appState: { currentStyle: currentStyle2 },
      page,
      selectedIds: selectedIds2
    } = app;
    let commonStyle = {};
    if (selectedIds2.length <= 0) {
      commonStyle = currentStyle2;
    } else {
      const overrides = /* @__PURE__ */ new Set([]);
      app.selectedIds.map((id) => page.shapes[id]).forEach((shape) => {
        STYLE_KEYS.forEach((key) => {
          if (overrides.has(key))
            return;
          if (commonStyle[key] === void 0) {
            commonStyle[key] = shape.style[key];
          } else {
            if (commonStyle[key] === shape.style[key])
              return;
            commonStyle[key] = shape.style[key];
            overrides.add(key);
          }
        });
      });
    }
    if (JSON.stringify(commonStyle) !== JSON.stringify(rDisplayedStyle.current)) {
      rDisplayedStyle.current = commonStyle;
      setDisplayedStyle(commonStyle);
    }
  }, [currentStyle, selectedIds]);
  const handleToggleFilled = React71.useCallback((checked) => {
    app.style({ isFilled: checked });
  }, []);
  const handleDashChange = React71.useCallback((value) => {
    app.style({ dash: value });
  }, []);
  const handleSizeChange = React71.useCallback((value) => {
    app.style({ size: value });
  }, []);
  const handleFontChange = React71.useCallback((value) => {
    app.style({ font: value });
  }, []);
  const handleTextAlignChange = React71.useCallback((value) => {
    app.style({ textAlign: value });
  }, []);
  const handleMenuOpenChange = React71.useCallback((open) => {
    app.setMenuOpen(open);
  }, [app]);
  return /* @__PURE__ */ React71.createElement(DropdownMenu6.Root, {
    dir: "ltr",
    onOpenChange: handleMenuOpenChange
  }, /* @__PURE__ */ React71.createElement(DropdownMenu6.Trigger, {
    asChild: true,
    id: "TD-Styles"
  }, /* @__PURE__ */ React71.createElement(ToolButton, {
    variant: "text"
  }, "Styles", /* @__PURE__ */ React71.createElement(OverlapIcons, {
    style: {
      color: strokes[theme][displayedStyle.color]
    }
  }, displayedStyle.isFilled && /* @__PURE__ */ React71.createElement(CircleIcon, {
    size: 16,
    stroke: "none",
    fill: fills[theme][displayedStyle.color]
  }), DASH_ICONS[displayedStyle.dash]))), /* @__PURE__ */ React71.createElement(DMContent, null, /* @__PURE__ */ React71.createElement(StyledRow, {
    variant: "tall",
    id: "TD-Styles-Color-Container"
  }, /* @__PURE__ */ React71.createElement("span", null, "Color"), /* @__PURE__ */ React71.createElement(ColorGrid, null, Object.keys(strokes.light).map((style) => /* @__PURE__ */ React71.createElement(DropdownMenu6.Item, {
    key: style,
    onSelect: preventEvent,
    asChild: true,
    id: `TD-Styles-Color-Swatch-${style}`
  }, /* @__PURE__ */ React71.createElement(ToolButton, {
    variant: "icon",
    isActive: displayedStyle.color === style,
    onClick: () => app.style({ color: style })
  }, /* @__PURE__ */ React71.createElement(CircleIcon, {
    size: 18,
    strokeWidth: 2.5,
    fill: displayedStyle.isFilled ? fills.light[style] : "transparent",
    stroke: strokes.light[style]
  })))))), /* @__PURE__ */ React71.createElement(DMCheckboxItem, {
    variant: "styleMenu",
    checked: !!displayedStyle.isFilled,
    onCheckedChange: handleToggleFilled,
    id: "TD-Styles-Fill"
  }, "Fill"), /* @__PURE__ */ React71.createElement(StyledRow, {
    id: "TD-Styles-Dash-Container"
  }, "Dash", /* @__PURE__ */ React71.createElement(StyledGroup, {
    dir: "ltr",
    value: displayedStyle.dash,
    onValueChange: handleDashChange
  }, Object.values(DashStyle).map((style) => /* @__PURE__ */ React71.createElement(DMRadioItem, {
    key: style,
    isActive: style === displayedStyle.dash,
    value: style,
    onSelect: preventEvent,
    bp: breakpoints,
    id: `TD-Styles-Dash-${style}`
  }, DASH_ICONS[style])))), /* @__PURE__ */ React71.createElement(StyledRow, {
    id: "TD-Styles-Size-Container"
  }, "Size", /* @__PURE__ */ React71.createElement(StyledGroup, {
    dir: "ltr",
    value: displayedStyle.size,
    onValueChange: handleSizeChange
  }, Object.values(SizeStyle).map((sizeStyle) => /* @__PURE__ */ React71.createElement(DMRadioItem, {
    key: sizeStyle,
    isActive: sizeStyle === displayedStyle.size,
    value: sizeStyle,
    onSelect: preventEvent,
    bp: breakpoints,
    id: `TD-Styles-Dash-${sizeStyle}`
  }, SIZE_ICONS[sizeStyle])))), (options2 === "text" || options2 === "label") && /* @__PURE__ */ React71.createElement(React71.Fragment, null, /* @__PURE__ */ React71.createElement(Divider, null), /* @__PURE__ */ React71.createElement(StyledRow, {
    id: "TD-Styles-Font-Container"
  }, "Font", /* @__PURE__ */ React71.createElement(StyledGroup, {
    dir: "ltr",
    value: displayedStyle.font,
    onValueChange: handleFontChange
  }, Object.values(FontStyle).map((fontStyle) => /* @__PURE__ */ React71.createElement(DMRadioItem, {
    key: fontStyle,
    isActive: fontStyle === displayedStyle.font,
    value: fontStyle,
    onSelect: preventEvent,
    bp: breakpoints,
    id: `TD-Styles-Font-${fontStyle}`
  }, /* @__PURE__ */ React71.createElement(FontIcon, {
    fontStyle
  }, "Aa"))))), options2 === "text" && /* @__PURE__ */ React71.createElement(StyledRow, {
    id: "TD-Styles-Align-Container"
  }, "Align", /* @__PURE__ */ React71.createElement(StyledGroup, {
    dir: "ltr",
    value: displayedStyle.textAlign,
    onValueChange: handleTextAlignChange
  }, Object.values(AlignStyle).map((style) => /* @__PURE__ */ React71.createElement(DMRadioItem, {
    key: style,
    isActive: style === displayedStyle.textAlign,
    value: style,
    onSelect: preventEvent,
    bp: breakpoints,
    id: `TD-Styles-Align-${style}`
  }, ALIGN_ICONS[style])))))));
});
var ColorGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, auto)",
  gap: 0
});
var StyledRow = styled("div", {
  position: "relative",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  minHeight: "32px",
  outline: "none",
  color: "$text",
  fontFamily: "$ui",
  fontWeight: 400,
  fontSize: "$1",
  padding: "$2 0 $2 $3",
  borderRadius: 4,
  userSelect: "none",
  margin: 0,
  display: "flex",
  gap: "$3",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  variants: {
    variant: {
      tall: {
        alignItems: "flex-start",
        padding: "0 0 0 $3",
        "& > span": {
          paddingTop: "$4"
        }
      }
    }
  }
});
var StyledGroup = styled(DropdownMenu6.DropdownMenuRadioGroup, {
  display: "flex",
  flexDirection: "row",
  gap: "$1"
});
var OverlapIcons = styled("div", {
  display: "grid",
  "& > *": {
    gridColumn: 1,
    gridRow: 1
  }
});
var FontIcon = styled("div", {
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "$3",
  variants: {
    fontStyle: {
      ["script" /* Script */]: {
        fontFamily: "Caveat Brush"
      },
      ["sans" /* Sans */]: {
        fontFamily: "Recursive"
      },
      ["erif" /* Serif */]: {
        fontFamily: "Georgia"
      },
      ["mono" /* Mono */]: {
        fontFamily: "Recursive Mono"
      }
    }
  }
});

// src/components/TopPanel/MultiplayerMenu/MultiplayerMenu.tsx
var React72 = __toESM(require("react"));
var import_react_icons9 = require("@radix-ui/react-icons");
var DropdownMenu7 = __toESM(require("@radix-ui/react-dropdown-menu"));
var roomSelector = (state) => state.room;
var MultiplayerMenu = React72.memo(function MultiplayerMenu2() {
  const app = useTldrawApp();
  const room = app.useStore(roomSelector);
  const [copied, setCopied] = React72.useState(false);
  const handleCopySelect = React72.useCallback(() => {
    setCopied(true);
    TLDR.copyStringToClipboard(window.location.href);
    setTimeout(() => setCopied(false), 1200);
  }, []);
  const handleCreateMultiplayerRoom = React72.useCallback(() => __async(this, null, function* () {
    if (app.isDirty) {
      if (app.fileSystemHandle) {
        if (window.confirm("Do you want to save changes to your current project?")) {
          yield app.saveProject();
        }
      } else {
        if (window.confirm("Do you want to save your current project?")) {
          yield app.saveProject();
        }
      }
    } else if (!app.fileSystemHandle) {
      if (window.confirm("Do you want to save your current project?")) {
        yield app.saveProject();
      }
    }
  }), []);
  const handleCopyToMultiplayerRoom = React72.useCallback(() => __async(this, null, function* () {
    const myHeaders = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    const res = yield fetch("http://tldraw.com/api/create-multiplayer-room", {
      headers: myHeaders,
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(app.document)
    }).then((res2) => res2.json());
    window.location.href = `http://tldraw.com/r/${res.roomId}`;
  }), []);
  return /* @__PURE__ */ React72.createElement(DropdownMenu7.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React72.createElement(DMTriggerIcon, {
    id: "TD-MultiplayerMenuIcon"
  }, room ? /* @__PURE__ */ React72.createElement(MultiplayerIcon, null) : /* @__PURE__ */ React72.createElement(import_react_icons9.CursorArrowIcon, null)), /* @__PURE__ */ React72.createElement(DMContent, {
    variant: "menu",
    align: "start",
    id: "TD-MultiplayerMenu"
  }, /* @__PURE__ */ React72.createElement(DMItem, {
    id: "TD-Multiplayer-CopyInviteLink",
    onClick: handleCopySelect,
    disabled: !room
  }, "Copy Invite Link", /* @__PURE__ */ React72.createElement(SmallIcon, null, copied ? /* @__PURE__ */ React72.createElement(import_react_icons9.CheckIcon, null) : /* @__PURE__ */ React72.createElement(import_react_icons9.ClipboardIcon, null))), /* @__PURE__ */ React72.createElement(DMDivider, {
    id: "TD-Multiplayer-CopyInviteLinkDivider"
  }), /* @__PURE__ */ React72.createElement(DMItem, {
    id: "TD-Multiplayer-CreateMultiplayerRoom",
    onClick: handleCreateMultiplayerRoom
  }, /* @__PURE__ */ React72.createElement("a", {
    href: "https://tldraw.com/r"
  }, "Create a Multiplayer Project"))));
});

// src/components/TopPanel/TopPanel.tsx
function TopPanel({
  readOnly,
  showPages,
  showMenu,
  showStyles,
  showZoom,
  showSponsorLink,
  showMultiplayerMenu
}) {
  const app = useTldrawApp();
  return /* @__PURE__ */ React73.createElement(StyledTopPanel, null, (showMenu || showPages) && /* @__PURE__ */ React73.createElement(Panel, {
    side: "left",
    id: "TD-MenuPanel"
  }, showMenu && /* @__PURE__ */ React73.createElement(Menu, {
    showSponsorLink,
    readOnly
  }), showMultiplayerMenu && /* @__PURE__ */ React73.createElement(MultiplayerMenu, null), showPages && /* @__PURE__ */ React73.createElement(PageMenu, null)), /* @__PURE__ */ React73.createElement(StyledSpacer, null), (showStyles || showZoom) && /* @__PURE__ */ React73.createElement(Panel, {
    side: "right"
  }, showStyles && !readOnly && /* @__PURE__ */ React73.createElement(StyleMenu, null), /* @__PURE__ */ React73.createElement(ToolButton, null, /* @__PURE__ */ React73.createElement(UndoIcon, {
    onClick: app.undo
  })), /* @__PURE__ */ React73.createElement(ToolButton, null, /* @__PURE__ */ React73.createElement(RedoIcon, {
    onClick: app.redo
  })), showZoom && /* @__PURE__ */ React73.createElement(ZoomMenu, null)));
}
var StyledTopPanel = styled("div", {
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "row",
  pointerEvents: "none",
  "& > *": {
    pointerEvents: "all"
  }
});
var StyledSpacer = styled("div", {
  flexGrow: 2,
  pointerEvents: "none"
});

// src/components/ContextMenu/ContextMenu.tsx
var React74 = __toESM(require("react"));
var RadixContextMenu = __toESM(require("@radix-ui/react-context-menu"));
var import_react_icons10 = require("@radix-ui/react-icons");
var numberOfSelectedIdsSelector2 = (s) => {
  return s.document.pageStates[s.appState.currentPageId].selectedIds.length;
};
var isDebugModeSelector2 = (s) => {
  return s.settings.isDebugMode;
};
var hasGroupSelectedSelector = (s) => {
  return s.document.pageStates[s.appState.currentPageId].selectedIds.some((id) => s.document.pages[s.appState.currentPageId].shapes[id].children !== void 0);
};
var preventDefault = (e) => e.stopPropagation();
var ContextMenu = ({ onBlur, children }) => {
  return /* @__PURE__ */ React74.createElement(RadixContextMenu.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React74.createElement(RadixContextMenu.Trigger, {
    dir: "ltr"
  }, children), /* @__PURE__ */ React74.createElement(InnerMenu, {
    onBlur
  }));
};
var InnerMenu = React74.memo(function InnerMenu2({ onBlur }) {
  const app = useTldrawApp();
  const numberOfSelectedIds = app.useStore(numberOfSelectedIdsSelector2);
  const isDebugMode = app.useStore(isDebugModeSelector2);
  const hasGroupSelected = app.useStore(hasGroupSelectedSelector);
  const rContent = React74.useRef(null);
  const handleFlipHorizontal = React74.useCallback(() => {
    app.flipHorizontal();
  }, [app]);
  const handleFlipVertical = React74.useCallback(() => {
    app.flipVertical();
  }, [app]);
  const handleDuplicate = React74.useCallback(() => {
    app.duplicate();
  }, [app]);
  const handleLock = React74.useCallback(() => {
    app.toggleLocked();
  }, [app]);
  const handleGroup = React74.useCallback(() => {
    app.group();
  }, [app]);
  const handleMoveToBack = React74.useCallback(() => {
    app.moveToBack();
  }, [app]);
  const handleMoveBackward = React74.useCallback(() => {
    app.moveBackward();
  }, [app]);
  const handleMoveForward = React74.useCallback(() => {
    app.moveForward();
  }, [app]);
  const handleMoveToFront = React74.useCallback(() => {
    app.moveToFront();
  }, [app]);
  const handleDelete = React74.useCallback(() => {
    app.delete();
  }, [app]);
  const handleCopyJson = React74.useCallback(() => {
    app.copyJson();
  }, [app]);
  const handleCut = React74.useCallback(() => {
    app.cut();
  }, [app]);
  const handleCopy = React74.useCallback(() => {
    app.copy();
  }, [app]);
  const handlePaste = React74.useCallback(() => {
    app.paste();
  }, [app]);
  const handleCopySvg = React74.useCallback(() => {
    app.copySvg();
  }, [app]);
  const handleUndo = React74.useCallback(() => {
    app.undo();
  }, [app]);
  const handleRedo = React74.useCallback(() => {
    app.redo();
  }, [app]);
  const handleExportPNG = React74.useCallback(() => __async(this, null, function* () {
    yield app.exportSelectedShapesAs("png" /* PNG */);
  }), [app]);
  const handleExportJPG = React74.useCallback(() => __async(this, null, function* () {
    yield app.exportSelectedShapesAs("jpeg" /* JPG */);
  }), [app]);
  const handleExportWEBP = React74.useCallback(() => __async(this, null, function* () {
    yield app.exportSelectedShapesAs("webp" /* WEBP */);
  }), [app]);
  const handleExportSVG = React74.useCallback(() => __async(this, null, function* () {
    yield app.exportSelectedShapesAs("svg" /* SVG */);
  }), [app]);
  const handleExportJSON = React74.useCallback(() => __async(this, null, function* () {
    yield app.exportSelectedShapesAs("json" /* JSON */);
  }), [app]);
  const hasSelection = numberOfSelectedIds > 0;
  const hasTwoOrMore = numberOfSelectedIds > 1;
  const hasThreeOrMore = numberOfSelectedIds > 2;
  return /* @__PURE__ */ React74.createElement(RadixContextMenu.Content, {
    dir: "ltr",
    ref: rContent,
    onEscapeKeyDown: preventDefault,
    asChild: true,
    tabIndex: -1,
    onBlur
  }, /* @__PURE__ */ React74.createElement(MenuContent, {
    id: "TD-ContextMenu"
  }, hasSelection ? /* @__PURE__ */ React74.createElement(React74.Fragment, null, /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleDuplicate,
    kbd: "#D",
    id: "TD-ContextMenu-Duplicate"
  }, "Duplicate"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleFlipHorizontal,
    kbd: "\u21E7H",
    id: "TD-ContextMenu-Flip_Horizontal"
  }, "Flip Horizontal"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleFlipVertical,
    kbd: "\u21E7V",
    id: "TD-ContextMenu-Flip_Vertical"
  }, "Flip Vertical"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleLock,
    kbd: "#\u21E7L",
    id: "TD-ContextMenu- Lock_Unlock"
  }, "Lock / Unlock"), (hasTwoOrMore || hasGroupSelected) && /* @__PURE__ */ React74.createElement(Divider, null), hasTwoOrMore && /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleGroup,
    kbd: "#G",
    id: "TD-ContextMenu-Group"
  }, "Group"), hasGroupSelected && /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleGroup,
    kbd: "#G",
    id: "TD-ContextMenu-Ungroup"
  }, "Ungroup"), /* @__PURE__ */ React74.createElement(Divider, null), /* @__PURE__ */ React74.createElement(ContextMenuSubMenu, {
    label: "Move",
    id: "TD-ContextMenu-Move"
  }, /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleMoveToFront,
    kbd: "\u21E7]",
    id: "TD-ContextMenu-Move-To_Front"
  }, "To Front"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleMoveForward,
    kbd: "]",
    id: "TD-ContextMenu-Move-Forward"
  }, "Forward"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleMoveBackward,
    kbd: "[",
    id: "TD-ContextMenu-Move-Backward"
  }, "Backward"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleMoveToBack,
    kbd: "\u21E7[",
    id: "TD-ContextMenu-Move-To_Back"
  }, "To Back")), /* @__PURE__ */ React74.createElement(MoveToPageMenu, null), hasTwoOrMore && /* @__PURE__ */ React74.createElement(AlignDistributeSubMenu, {
    hasTwoOrMore,
    hasThreeOrMore
  }), app.callbacks.onExport ? /* @__PURE__ */ React74.createElement(React74.Fragment, null, /* @__PURE__ */ React74.createElement(Divider, null), /* @__PURE__ */ React74.createElement(ContextMenuSubMenu, {
    label: "Export",
    size: "small",
    id: "TD-ContextMenu-Export"
  }, /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleExportPNG,
    id: "TD-ContextMenu-Export-PNG"
  }, "PNG"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleExportJPG,
    id: "TD-ContextMenu-Export-JPG"
  }, "JPG"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleExportWEBP,
    id: "TD-ContextMenu-Export-WEBP"
  }, "WEBP"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleExportSVG,
    id: "TD-ContextMenu-Export-SVG"
  }, "SVG"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleExportJSON,
    id: "TD-ContextMenu-Export-JSON"
  }, "JSON"), /* @__PURE__ */ React74.createElement(Divider, null), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleCopySvg,
    kbd: "#\u21E7C",
    id: "TD-ContextMenu-Export-Copy_as_SVG"
  }, "Copy as SVG"), isDebugMode && /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleCopyJson,
    id: "TD-ContextMenu-Export-Copy_as_JSON"
  }, "Copy as JSON"))) : /* @__PURE__ */ React74.createElement(React74.Fragment, null, /* @__PURE__ */ React74.createElement(Divider, null), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleCopySvg,
    kbd: "#\u21E7C",
    id: "TD-ContextMenu-Export-Copy_as_SVG"
  }, "Copy as SVG"), isDebugMode && /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleCopyJson,
    id: "TD-ContextMenu-Export-Copy_as_JSON"
  }, "Copy as JSON")), /* @__PURE__ */ React74.createElement(Divider, null), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleCut,
    kbd: "#X",
    id: "TD-ContextMenu-Cut"
  }, "Cut"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleCopy,
    kbd: "#C",
    id: "TD-ContextMenu-Copy"
  }, "Copy"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handlePaste,
    kbd: "#V",
    id: "TD-ContextMenu-Paste"
  }, "Paste"), /* @__PURE__ */ React74.createElement(Divider, null), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleDelete,
    kbd: "\u232B",
    id: "TD-ContextMenu-Delete"
  }, "Delete")) : /* @__PURE__ */ React74.createElement(React74.Fragment, null, /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handlePaste,
    kbd: "#V",
    id: "TD-ContextMenu-Paste"
  }, "Paste"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleUndo,
    kbd: "#Z",
    id: "TD-ContextMenu-Undo"
  }, "Undo"), /* @__PURE__ */ React74.createElement(CMRowButton, {
    onClick: handleRedo,
    kbd: "#\u21E7Z",
    id: "TD-ContextMenu-Redo"
  }, "Redo"))));
});
function AlignDistributeSubMenu({
  hasThreeOrMore
}) {
  const app = useTldrawApp();
  const alignTop = React74.useCallback(() => {
    app.align("top" /* Top */);
  }, [app]);
  const alignCenterVertical = React74.useCallback(() => {
    app.align("centerVertical" /* CenterVertical */);
  }, [app]);
  const alignBottom = React74.useCallback(() => {
    app.align("bottom" /* Bottom */);
  }, [app]);
  const stretchVertically = React74.useCallback(() => {
    app.stretch("vertical" /* Vertical */);
  }, [app]);
  const distributeVertically = React74.useCallback(() => {
    app.distribute("vertical" /* Vertical */);
  }, [app]);
  const alignLeft = React74.useCallback(() => {
    app.align("left" /* Left */);
  }, [app]);
  const alignCenterHorizontal = React74.useCallback(() => {
    app.align("centerHorizontal" /* CenterHorizontal */);
  }, [app]);
  const alignRight = React74.useCallback(() => {
    app.align("right" /* Right */);
  }, [app]);
  const stretchHorizontally = React74.useCallback(() => {
    app.stretch("horizontal" /* Horizontal */);
  }, [app]);
  const distributeHorizontally = React74.useCallback(() => {
    app.distribute("horizontal" /* Horizontal */);
  }, [app]);
  return /* @__PURE__ */ React74.createElement("span", {
    id: "TD-ContextMenu-Align_Duplicate"
  }, /* @__PURE__ */ React74.createElement(RadixContextMenu.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React74.createElement(CMTriggerButton, {
    isSubmenu: true
  }, "Align / Distribute"), /* @__PURE__ */ React74.createElement(RadixContextMenu.Content, {
    asChild: true,
    sideOffset: 2,
    alignOffset: -2
  }, /* @__PURE__ */ React74.createElement(StyledGridContent, {
    numberOfSelected: hasThreeOrMore ? "threeOrMore" : "twoOrMore"
  }, /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: alignLeft,
    id: "TD-ContextMenu-Align_Duplicate-AlignLeft"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.AlignLeftIcon, null)), /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: alignCenterHorizontal,
    id: "TD-ContextMenu-Align_Duplicate-AlignCenterHorizontal"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.AlignCenterHorizontallyIcon, null)), /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: alignRight,
    id: "TD-ContextMenu-Align_Duplicate-AlignRight"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.AlignRightIcon, null)), /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: stretchHorizontally,
    id: "TD-ContextMenu-Align_Duplicate-StretchHorizontal"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.StretchHorizontallyIcon, null)), hasThreeOrMore && /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: distributeHorizontally,
    id: "TD-ContextMenu-Align_Duplicate-SpaceEvenlyHorizontal"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.SpaceEvenlyHorizontallyIcon, null)), /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: alignTop,
    id: "TD-ContextMenu-Align_Duplicate-AlignTop"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.AlignTopIcon, null)), /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: alignCenterVertical,
    id: "TD-ContextMenu-Align_Duplicate-AlignCenterVertical"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.AlignCenterVerticallyIcon, null)), /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: alignBottom,
    id: "TD-ContextMenu-Align_Duplicate-AlignBottom"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.AlignBottomIcon, null)), /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: stretchVertically,
    id: "TD-ContextMenu-Align_Duplicate-StretchVertical"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.StretchVerticallyIcon, null)), hasThreeOrMore && /* @__PURE__ */ React74.createElement(CMIconButton, {
    onClick: distributeVertically,
    id: "TD-ContextMenu-Align_Duplicate-SpaceEvenlyVertical"
  }, /* @__PURE__ */ React74.createElement(import_react_icons10.SpaceEvenlyVerticallyIcon, null)), /* @__PURE__ */ React74.createElement(CMArrow, {
    offset: 13
  })))));
}
var StyledGridContent = styled(MenuContent, {
  display: "grid",
  variants: {
    numberOfSelected: {
      threeOrMore: {
        gridTemplateColumns: "repeat(5, auto)"
      },
      twoOrMore: {
        gridTemplateColumns: "repeat(4, auto)"
      }
    }
  }
});
var currentPageIdSelector2 = (s) => s.appState.currentPageId;
var documentPagesSelector = (s) => s.document.pages;
function MoveToPageMenu() {
  const app = useTldrawApp();
  const currentPageId = app.useStore(currentPageIdSelector2);
  const documentPages = app.useStore(documentPagesSelector);
  const sorted = Object.values(documentPages).sort((a, b) => (a.childIndex || 0) - (b.childIndex || 0)).filter((a) => a.id !== currentPageId);
  if (sorted.length === 0)
    return null;
  return /* @__PURE__ */ React74.createElement(RadixContextMenu.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React74.createElement(CMTriggerButton, {
    isSubmenu: true
  }, "Move To Page"), /* @__PURE__ */ React74.createElement(RadixContextMenu.Content, {
    dir: "ltr",
    sideOffset: 2,
    alignOffset: -2,
    asChild: true
  }, /* @__PURE__ */ React74.createElement(MenuContent, null, sorted.map(({ id, name }, i) => /* @__PURE__ */ React74.createElement(CMRowButton, {
    key: id,
    disabled: id === currentPageId,
    onClick: () => app.moveToPage(id)
  }, name || `Page ${i}`)), /* @__PURE__ */ React74.createElement(CMArrow, {
    offset: 13
  }))));
}
function ContextMenuSubMenu({
  children,
  label,
  size,
  id
}) {
  return /* @__PURE__ */ React74.createElement("span", {
    id
  }, /* @__PURE__ */ React74.createElement(RadixContextMenu.Root, {
    dir: "ltr"
  }, /* @__PURE__ */ React74.createElement(CMTriggerButton, {
    isSubmenu: true
  }, label), /* @__PURE__ */ React74.createElement(RadixContextMenu.Content, {
    dir: "ltr",
    sideOffset: 2,
    alignOffset: -2,
    asChild: true
  }, /* @__PURE__ */ React74.createElement(MenuContent, {
    size
  }, children, /* @__PURE__ */ React74.createElement(CMArrow, {
    offset: 13
  })))));
}
var CMArrow = styled(RadixContextMenu.ContextMenuArrow, {
  fill: "$panel"
});
function CMIconButton(_a) {
  var _b = _a, { onSelect } = _b, rest = __objRest(_b, ["onSelect"]);
  return /* @__PURE__ */ React74.createElement(RadixContextMenu.ContextMenuItem, {
    dir: "ltr",
    onSelect,
    asChild: true
  }, /* @__PURE__ */ React74.createElement(ToolButton, __spreadValues({}, rest)));
}
var CMRowButton = (_a) => {
  var _b = _a, { id } = _b, rest = __objRest(_b, ["id"]);
  return /* @__PURE__ */ React74.createElement(RadixContextMenu.ContextMenuItem, {
    asChild: true,
    id
  }, /* @__PURE__ */ React74.createElement(RowButton, __spreadValues({}, rest)));
};
var CMTriggerButton = (_a) => {
  var _b = _a, { isSubmenu } = _b, rest = __objRest(_b, ["isSubmenu"]);
  return /* @__PURE__ */ React74.createElement(RadixContextMenu.ContextMenuTriggerItem, {
    asChild: true
  }, /* @__PURE__ */ React74.createElement(RowButton, __spreadValues({
    hasArrow: isSubmenu
  }, rest)));
};

// src/components/FocusButton/FocusButton.tsx
var import_react_icons11 = require("@radix-ui/react-icons");
var React75 = __toESM(require("react"));
function FocusButton({ onSelect }) {
  return /* @__PURE__ */ React75.createElement(StyledButtonContainer, null, /* @__PURE__ */ React75.createElement(IconButton, {
    onClick: onSelect
  }, /* @__PURE__ */ React75.createElement(import_react_icons11.DotFilledIcon, null)));
}
var StyledButtonContainer = styled("div", {
  opacity: 1,
  zIndex: 100,
  backgroundColor: "transparent",
  "& svg": {
    color: "$text"
  },
  "&:hover svg": {
    color: "$text"
  }
});

// src/components/Loading/Loading.tsx
var React76 = __toESM(require("react"));
var loadingSelector = (s) => s.appState.isLoading;
function Loading() {
  const app = useTldrawApp();
  const isLoading = app.useStore(loadingSelector);
  return /* @__PURE__ */ React76.createElement(StyledLoadingPanelContainer, {
    hidden: !isLoading
  }, "Loading...");
}
var StyledLoadingPanelContainer = styled("div", {
  position: "absolute",
  top: 0,
  left: "50%",
  transform: `translate(-50%, 0)`,
  borderBottomLeftRadius: "12px",
  borderBottomRightRadius: "12px",
  padding: "8px 16px",
  fontFamily: "var(--fonts-ui)",
  fontSize: "var(--fontSizes-1)",
  boxShadow: "var(--shadows-panel)",
  backgroundColor: "white",
  zIndex: 200,
  pointerEvents: "none",
  "& > div > *": {
    pointerEvents: "all"
  },
  variants: {
    transform: {
      hidden: {
        transform: `translate(-50%, 100%)`
      },
      visible: {
        transform: `translate(-50%, 0%)`
      }
    }
  }
});

// src/Tldraw.tsx
function Tldraw({
  id,
  document: document2,
  currentPageId,
  autofocus = true,
  showMenu = true,
  showMultiplayerMenu = true,
  showPages = true,
  showTools = true,
  showZoom = true,
  showStyles = true,
  showUI = true,
  readOnly = false,
  showSponsorLink = false,
  disableAssets = false,
  darkMode = false,
  onMount,
  onChange,
  onChangePresence,
  onNewProject,
  onSaveProject,
  onSaveProjectAs,
  onOpenProject,
  onOpenMedia,
  onSignOut,
  onSignIn,
  onUndo,
  onRedo,
  onPersist,
  onPatch,
  onCommand,
  onChangePage,
  onAssetCreate,
  onAssetDelete,
  onExport
}) {
  const [sId, setSId] = React77.useState(id);
  const [app, setApp] = React77.useState(() => {
    const app2 = new TldrawApp(id, {
      onMount,
      onChange,
      onChangePresence,
      onNewProject,
      onSaveProject,
      onSaveProjectAs,
      onOpenProject,
      onOpenMedia,
      onSignOut,
      onSignIn,
      onUndo,
      onRedo,
      onPersist,
      onPatch,
      onCommand,
      onChangePage,
      onAssetDelete,
      onAssetCreate
    });
    return app2;
  });
  React77.useLayoutEffect(() => {
    if (id === sId)
      return;
    const newApp = new TldrawApp(id, {
      onMount,
      onChange,
      onChangePresence,
      onNewProject,
      onSaveProject,
      onSaveProjectAs,
      onOpenProject,
      onOpenMedia,
      onSignOut,
      onSignIn,
      onUndo,
      onRedo,
      onPersist,
      onPatch,
      onCommand,
      onChangePage,
      onAssetDelete,
      onAssetCreate,
      onExport
    });
    setSId(id);
    setApp(newApp);
  }, [sId, id]);
  React77.useEffect(() => {
    if (!document2)
      return;
    if (document2.id === app.document.id) {
      app.updateDocument(document2);
    } else {
      app.loadDocument(document2);
    }
  }, [document2, app]);
  React77.useEffect(() => {
    app.setDisableAssets(disableAssets);
  }, [app, disableAssets]);
  React77.useEffect(() => {
    if (!currentPageId)
      return;
    app.changePage(currentPageId);
  }, [currentPageId, app]);
  React77.useEffect(() => {
    app.readOnly = readOnly;
  }, [app, readOnly]);
  React77.useEffect(() => {
    if (darkMode !== app.settings.isDarkMode) {
      app.toggleDarkMode();
    }
  }, [app, darkMode]);
  React77.useEffect(() => {
    app.callbacks = {
      onMount,
      onChange,
      onChangePresence,
      onNewProject,
      onSaveProject,
      onSaveProjectAs,
      onOpenProject,
      onOpenMedia,
      onSignOut,
      onSignIn,
      onUndo,
      onRedo,
      onPersist,
      onPatch,
      onCommand,
      onChangePage,
      onAssetDelete,
      onAssetCreate,
      onExport
    };
  }, [
    onMount,
    onChange,
    onChangePresence,
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject,
    onOpenMedia,
    onSignOut,
    onSignIn,
    onUndo,
    onRedo,
    onPersist,
    onPatch,
    onCommand,
    onChangePage,
    onAssetDelete,
    onAssetCreate,
    onExport
  ]);
  React77.useLayoutEffect(() => {
    var _a;
    if (typeof window === "undefined")
      return;
    if (!((_a = window.document) == null ? void 0 : _a.fonts))
      return;
    function refreshBoundingBoxes() {
      app.refreshBoundingBoxes();
    }
    window.document.fonts.addEventListener("loadingdone", refreshBoundingBoxes);
    return () => {
      window.document.fonts.removeEventListener("loadingdone", refreshBoundingBoxes);
    };
  }, [app]);
  return /* @__PURE__ */ React77.createElement(TldrawContext.Provider, {
    value: app
  }, /* @__PURE__ */ React77.createElement(InnerTldraw, {
    key: sId || "Tldraw",
    id: sId,
    autofocus,
    showPages,
    showMenu,
    showMultiplayerMenu,
    showStyles,
    showZoom,
    showTools,
    showUI,
    showSponsorLink,
    readOnly
  }));
}
var InnerTldraw = React77.memo(function InnerTldraw2({
  id,
  autofocus,
  showPages,
  showMenu,
  showMultiplayerMenu,
  showZoom,
  showStyles,
  showTools,
  showSponsorLink,
  readOnly,
  showUI
}) {
  var _a, _b;
  const app = useTldrawApp();
  const rWrapper = React77.useRef(null);
  const state = app.useStore();
  const { document: document2, settings, appState, room } = state;
  const isSelecting = state.appState.activeTool === "select";
  const page = document2.pages[appState.currentPageId];
  const pageState = document2.pageStates[page.id];
  const assets = document2.assets;
  const { selectedIds } = pageState;
  const isHideBoundsShape = selectedIds.length === 1 && page.shapes[selectedIds[0]] && TLDR.getShapeUtil(page.shapes[selectedIds[0]].type).hideBounds;
  const isHideResizeHandlesShape = selectedIds.length === 1 && page.shapes[selectedIds[0]] && TLDR.getShapeUtil(page.shapes[selectedIds[0]].type).hideResizeHandles;
  const meta = React77.useMemo(() => {
    return { isDarkMode: settings.isDarkMode };
  }, [settings.isDarkMode]);
  const showDashedBrush = settings.isCadSelectMode ? !appState.selectByContain : appState.selectByContain;
  const theme = React77.useMemo(() => {
    const { selectByContain } = appState;
    const { isDarkMode, isCadSelectMode } = settings;
    if (isDarkMode) {
      const brushBase2 = isCadSelectMode ? selectByContain ? "69, 155, 255" : "105, 209, 73" : "180, 180, 180";
      return {
        brushFill: `rgba(${brushBase2}, ${isCadSelectMode ? 0.08 : 0.05})`,
        brushStroke: `rgba(${brushBase2}, ${isCadSelectMode ? 0.5 : 0.25})`,
        brushDashStroke: `rgba(${brushBase2}, .6)`,
        selected: "rgba(38, 150, 255, 1.000)",
        selectFill: "rgba(38, 150, 255, 0.05)",
        background: "#212529",
        foreground: "#49555f"
      };
    }
    const brushBase = isCadSelectMode ? selectByContain ? "0, 89, 242" : "51, 163, 23" : "0,0,0";
    return {
      brushFill: `rgba(${brushBase}, ${isCadSelectMode ? 0.08 : 0.05})`,
      brushStroke: `rgba(${brushBase}, ${isCadSelectMode ? 0.4 : 0.25})`,
      brushDashStroke: `rgba(${brushBase}, .6)`
    };
  }, [settings.isDarkMode, settings.isCadSelectMode, appState.selectByContain]);
  const isInSession = app.session !== void 0;
  const hideBounds = isInSession && ((_a = app.session) == null ? void 0 : _a.constructor.name) !== "BrushSession" || !isSelecting || isHideBoundsShape || !!pageState.editingId;
  const hideHandles = isInSession || !isSelecting;
  const hideIndicators = isInSession && state.appState.status !== "brushing" /* Brushing */ || !isSelecting;
  const hideCloneHandles = isInSession || !isSelecting || !settings.showCloneHandles || pageState.camera.zoom < 0.2;
  return /* @__PURE__ */ React77.createElement(StyledLayout, {
    ref: rWrapper,
    tabIndex: -0,
    className: settings.isDarkMode ? dark : ""
  }, /* @__PURE__ */ React77.createElement(Loading, null), /* @__PURE__ */ React77.createElement(OneOff, {
    focusableRef: rWrapper,
    autofocus
  }), /* @__PURE__ */ React77.createElement(ContextMenu, null, /* @__PURE__ */ React77.createElement(import_core55.Renderer, {
    id,
    containerRef: rWrapper,
    shapeUtils,
    page,
    pageState,
    assets,
    snapLines: appState.snapLines,
    grid: GRID_SIZE,
    users: room == null ? void 0 : room.users,
    userId: room == null ? void 0 : room.userId,
    theme,
    meta,
    hideBounds,
    hideHandles,
    hideResizeHandles: isHideResizeHandlesShape,
    hideIndicators,
    hideBindingHandles: !settings.showBindingHandles,
    hideCloneHandles,
    hideRotateHandles: !settings.showRotateHandles,
    hideGrid: !settings.showGrid,
    showDashedBrush,
    performanceMode: (_b = app.session) == null ? void 0 : _b.performanceMode,
    onPinchStart: app.onPinchStart,
    onPinchEnd: app.onPinchEnd,
    onPinch: app.onPinch,
    onPan: app.onPan,
    onZoom: app.onZoom,
    onPointerDown: app.onPointerDown,
    onPointerMove: app.onPointerMove,
    onPointerUp: app.onPointerUp,
    onPointCanvas: app.onPointCanvas,
    onDoubleClickCanvas: app.onDoubleClickCanvas,
    onRightPointCanvas: app.onRightPointCanvas,
    onDragCanvas: app.onDragCanvas,
    onReleaseCanvas: app.onReleaseCanvas,
    onPointShape: app.onPointShape,
    onDoubleClickShape: app.onDoubleClickShape,
    onRightPointShape: app.onRightPointShape,
    onDragShape: app.onDragShape,
    onHoverShape: app.onHoverShape,
    onUnhoverShape: app.onUnhoverShape,
    onReleaseShape: app.onReleaseShape,
    onPointBounds: app.onPointBounds,
    onDoubleClickBounds: app.onDoubleClickBounds,
    onRightPointBounds: app.onRightPointBounds,
    onDragBounds: app.onDragBounds,
    onHoverBounds: app.onHoverBounds,
    onUnhoverBounds: app.onUnhoverBounds,
    onReleaseBounds: app.onReleaseBounds,
    onPointBoundsHandle: app.onPointBoundsHandle,
    onDoubleClickBoundsHandle: app.onDoubleClickBoundsHandle,
    onRightPointBoundsHandle: app.onRightPointBoundsHandle,
    onDragBoundsHandle: app.onDragBoundsHandle,
    onHoverBoundsHandle: app.onHoverBoundsHandle,
    onUnhoverBoundsHandle: app.onUnhoverBoundsHandle,
    onReleaseBoundsHandle: app.onReleaseBoundsHandle,
    onPointHandle: app.onPointHandle,
    onDoubleClickHandle: app.onDoubleClickHandle,
    onRightPointHandle: app.onRightPointHandle,
    onDragHandle: app.onDragHandle,
    onHoverHandle: app.onHoverHandle,
    onUnhoverHandle: app.onUnhoverHandle,
    onReleaseHandle: app.onReleaseHandle,
    onError: app.onError,
    onRenderCountChange: app.onRenderCountChange,
    onShapeChange: app.onShapeChange,
    onShapeBlur: app.onShapeBlur,
    onShapeClone: app.onShapeClone,
    onBoundsChange: app.updateBounds,
    onKeyDown: app.onKeyDown,
    onKeyUp: app.onKeyUp,
    onDragOver: app.onDragOver,
    onDrop: app.onDrop
  })), showUI && /* @__PURE__ */ React77.createElement(StyledUI, null, settings.isFocusMode ? /* @__PURE__ */ React77.createElement(FocusButton, {
    onSelect: app.toggleFocusMode
  }) : /* @__PURE__ */ React77.createElement(React77.Fragment, null, /* @__PURE__ */ React77.createElement(TopPanel, {
    readOnly,
    showPages,
    showMenu,
    showMultiplayerMenu,
    showStyles,
    showZoom,
    showSponsorLink
  }), /* @__PURE__ */ React77.createElement(StyledSpacer2, null), showTools && !readOnly && /* @__PURE__ */ React77.createElement(ToolsPanel, null))));
});
var OneOff = React77.memo(function OneOff2({
  focusableRef,
  autofocus
}) {
  useKeyboardShortcuts(focusableRef);
  useStylesheet();
  React77.useEffect(() => {
    var _a;
    if (autofocus) {
      (_a = focusableRef.current) == null ? void 0 : _a.focus();
    }
  }, [autofocus]);
  return null;
});
var StyledLayout = styled("div", {
  position: "absolute",
  height: "100%",
  width: "100%",
  minHeight: 0,
  minWidth: 0,
  maxHeight: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  outline: "none",
  "& .tl-container": {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 1
  },
  "& input, textarea, button, select, label, button": {
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    "-webkit-tap-highlight-color": "transparent",
    "tap-highlight-color": "transparent"
  }
});
var StyledUI = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  padding: "8px 8px 0 8px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  pointerEvents: "none",
  zIndex: 2,
  "& > *": {
    pointerEvents: "all"
  }
});
var StyledSpacer2 = styled("div", {
  flexGrow: 2
});
module.exports = __toCommonJS(src_exports);
// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
//# sourceMappingURL=index.js.map
