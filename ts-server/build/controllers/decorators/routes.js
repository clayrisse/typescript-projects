"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.put = exports.del = exports.post = exports.get = exports.routeBinder = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
var Methods_1 = require("./Methods");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.routeBinder = routeBinder;
exports.get = routeBinder(Methods_1.Methods.get);
exports.post = routeBinder(Methods_1.Methods.post);
exports.del = routeBinder(Methods_1.Methods.del);
exports.put = routeBinder(Methods_1.Methods.put);
exports.patch = routeBinder(Methods_1.Methods.patch);
