"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldQueryParamSerialize = exports.valToString = exports.populateFromGlobals = exports.getResFieldDepth = exports.objectToClass = exports.isEmpty = exports.isBooleanRecord = exports.isNumberRecord = exports.isStringRecord = exports.parseParamDecorator = exports.generateURL = exports.templateUrl = exports.SpeakeasyMetadata = exports.ParamDecorator = exports.SpeakeasyBase = exports.SerializationMethodToContentType = void 0;
require("reflect-metadata");
var pathparams_1 = require("./pathparams");
var class_transformer_1 = require("class-transformer");
var types_1 = require("../../sdk/types");
var requestbody_1 = require("./requestbody");
exports.SerializationMethodToContentType = {
    json: "application/json",
    form: "application/x-www-form-urlencoded",
    multipart: "multipart/form-data",
    raw: "application/octet-stream",
    string: "text/plain",
};
function isSpeakeasyBase(type) {
    var _a;
    return type && ((_a = Object.getPrototypeOf(type)) === null || _a === void 0 ? void 0 : _a.name) == SpeakeasyBase.name;
}
function handleArray(value, elemType, elemDepth) {
    if (!Array.isArray(value)) {
        return value;
    }
    if (elemDepth == 1) {
        return value.map(function (v) { return new elemType(v); });
    }
    else {
        return value.map(function (v) {
            if (Array.isArray(v)) {
                return handleArray(v, elemType, elemDepth - 1);
            }
            else if (typeof v == "object") {
                return handleObject(v, elemType, elemDepth - 1);
            }
            else {
                return v;
            }
        });
    }
}
function handleObject(value, elemType, elemDepth) {
    if (typeof value != "object") {
        return value;
    }
    if (elemDepth == 1) {
        return Object.keys(value).reduce(function (acc, key) {
            acc[key] = new elemType(value[key]);
            return acc;
        }, {});
    }
    else {
        return Object.keys(value).reduce(function (acc, key) {
            var v = value[key];
            if (Array.isArray(v)) {
                acc[key] = handleArray(v, elemType, elemDepth - 1);
            }
            else if (typeof v == "object") {
                acc[key] = handleObject(v, elemType, elemDepth - 1);
            }
            else {
                acc[key] = v;
            }
            return acc;
        }, {});
    }
}
var SpeakeasyBase = /** @class */ (function () {
    function SpeakeasyBase(payload) {
        var e_1, _a;
        var props = this["__props__"];
        if (props) {
            try {
                for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                    var prop = props_1_1.value;
                    if (payload && payload.hasOwnProperty(prop.key)) {
                        var value = payload[prop.key];
                        if (isSpeakeasyBase(prop.type) && value != null) {
                            this[prop.key] = new prop.type(value);
                        }
                        else if (prop.type.name == "Array" && isSpeakeasyBase(prop.elemType)) {
                            this[prop.key] = handleArray(value, prop.elemType, prop.elemDepth);
                        }
                        else if (prop.type.name == "Object" && isSpeakeasyBase(prop.elemType)) {
                            this[prop.key] = handleObject(value, prop.elemType, prop.elemDepth);
                        }
                        else if (prop.type.name == "RFCDate") {
                            if (value instanceof Date) {
                                this[prop.key] = new types_1.RFCDate(value);
                            }
                            else {
                                this[prop.key] = value;
                            }
                        }
                        else {
                            this[prop.key] = value;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    return SpeakeasyBase;
}());
exports.SpeakeasyBase = SpeakeasyBase;
var ParamDecorator = /** @class */ (function () {
    function ParamDecorator(Style, Explode, ParamName, Serialization) {
        this.Style = Style;
        this.Explode = Explode;
        this.ParamName = ParamName;
        this.Serialization = Serialization;
    }
    return ParamDecorator;
}());
exports.ParamDecorator = ParamDecorator;
function SpeakeasyMetadata(params) {
    return function (target, propertyKey) {
        if (params === null || params === void 0 ? void 0 : params.data) {
            var annsArr = params.data.split(", ");
            for (var i = 0; i < annsArr.length; i += 2) {
                Reflect.defineMetadata(annsArr[i], annsArr[i + 1], target, propertyKey);
            }
        }
        var props;
        if (target.hasOwnProperty("__props__")) {
            props = target["__props__"];
        }
        else {
            props = target["__props__"] = [];
        }
        var prop = {
            key: propertyKey,
            type: Reflect.getMetadata("design:type", target, propertyKey),
        };
        if (params === null || params === void 0 ? void 0 : params.elemType) {
            prop.elemType = params.elemType;
            prop.elemDepth = params.elemDepth || 1;
        }
        props.push(prop);
    };
}
exports.SpeakeasyMetadata = SpeakeasyMetadata;
function templateUrl(stringWithParams, params) {
    var res = stringWithParams;
    if (params) {
        Object.entries(params).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var match = "{" + key + "}";
            res = res.replaceAll(match, value);
        });
    }
    return res;
}
exports.templateUrl = templateUrl;
function generateURL(serverURL, path, pathParams, globals) {
    var url = serverURL.replace(/\/$/, "") + path;
    var parsedParameters = {};
    var fieldNames = "__props__" in pathParams
        ? pathParams["__props__"].map(function (prop) { return prop.key; })
        : Object.getOwnPropertyNames(pathParams);
    fieldNames.forEach(function (fname) {
        var requestBodyAnn = Reflect.getMetadata(requestbody_1.requestMetadataKey, pathParams, fname);
        if (requestBodyAnn)
            return;
        var ppAnn = Reflect.getMetadata(pathparams_1.ppMetadataKey, pathParams, fname);
        if (ppAnn == null)
            return;
        var ppDecorator = parseParamDecorator(ppAnn, fname, "simple", false);
        if (ppDecorator == null)
            return;
        var value = pathParams[fname];
        value = populateFromGlobals(value, fname, "pathParam", globals);
        if (ppDecorator.Serialization) {
            switch (ppDecorator.Serialization) {
                case "json":
                    parsedParameters[ppDecorator.ParamName] = encodeURIComponent(JSON.stringify(value));
                    break;
            }
        }
        else {
            switch (ppDecorator.Style) {
                case "simple": {
                    var simpleParams = (0, pathparams_1.getSimplePathParams)(ppDecorator.ParamName, value, ppDecorator.Explode);
                    simpleParams.forEach(function (value, key) {
                        parsedParameters[key] = value;
                    });
                }
            }
        }
    });
    return templateUrl(url, parsedParameters);
}
exports.generateURL = generateURL;
function parseParamDecorator(ann, fName, defaultStyle, defaultExplode) {
    // style=simple;explode=false;name=apiID
    var decorator = new ParamDecorator(defaultStyle, defaultExplode, fName.toLowerCase());
    if (ann == null)
        return decorator;
    ann.split(";").forEach(function (annPart) {
        var _a = __read(annPart.split("="), 2), paramKey = _a[0], paramVal = _a[1];
        switch (paramKey) {
            case "style":
                decorator.Style = paramVal;
                break;
            case "explode":
                decorator.Explode = paramVal == "true";
                break;
            case "name":
                decorator.ParamName = paramVal;
                break;
            case "serialization":
                decorator.Serialization = paramVal;
                break;
        }
    });
    return decorator;
}
exports.parseParamDecorator = parseParamDecorator;
function isStringRecord(obj) {
    if (typeof obj !== "object")
        return false;
    if (Object.getOwnPropertySymbols(obj).length > 0)
        return false;
    return Object.getOwnPropertyNames(obj).every(function (prop) { return typeof obj[prop] === "string"; });
}
exports.isStringRecord = isStringRecord;
function isNumberRecord(obj) {
    if (typeof obj !== "object")
        return false;
    if (Object.getOwnPropertySymbols(obj).length > 0)
        return false;
    return Object.getOwnPropertyNames(obj).every(function (prop) { return typeof obj[prop] === "number"; });
}
exports.isNumberRecord = isNumberRecord;
function isBooleanRecord(obj) {
    if (typeof obj !== "object")
        return false;
    if (Object.getOwnPropertySymbols(obj).length > 0)
        return false;
    return Object.getOwnPropertyNames(obj).every(function (prop) { return typeof obj[prop] === "boolean"; });
}
exports.isBooleanRecord = isBooleanRecord;
function isEmpty(value) {
    // check for undefined, null, and NaN
    var res = false;
    if (typeof value === "number")
        res = Number.isNaN(value);
    else if (typeof value === "string")
        res = value === "";
    return res || value == null;
}
exports.isEmpty = isEmpty;
function objectToClass(value, klass, elemDepth) {
    if (elemDepth === void 0) { elemDepth = 0; }
    if (value !== Object(value)) {
        return value;
    }
    if (elemDepth === 0 && klass != null) {
        return (0, class_transformer_1.plainToInstance)(klass, value, {
            excludeExtraneousValues: true,
            exposeUnsetFields: false,
        });
    }
    if (Array.isArray(value)) {
        return value.map(function (v) { return objectToClass(v, klass, elemDepth - 1); });
    }
    if (typeof value === "object" && value != null) {
        var copiedRecord = {};
        for (var key in value) {
            copiedRecord[key] = objectToClass(value[key], klass, elemDepth - 1);
        }
        return copiedRecord;
    }
    return (0, class_transformer_1.plainToInstance)(klass, value, {
        excludeExtraneousValues: true,
        exposeUnsetFields: false,
    });
}
exports.objectToClass = objectToClass;
function getResFieldDepth(res) {
    var e_2, _a;
    var props = res["__props__"];
    var resFieldDepth = 1;
    if (props) {
        try {
            for (var props_2 = __values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
                var prop = props_2_1.value;
                if (res && res.hasOwnProperty(prop.key)) {
                    if ((prop.type.name == "Array" || prop.type.name == "Object") &&
                        isSpeakeasyBase(prop.elemType)) {
                        if (prop.elemDepth > resFieldDepth) {
                            resFieldDepth = prop.elemDepth;
                            break;
                        }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return resFieldDepth;
}
exports.getResFieldDepth = getResFieldDepth;
function populateFromGlobals(value, fieldName, paramType, globals) {
    if (globals && value === undefined) {
        if ("parameters" in globals && paramType in globals.parameters) {
            var globalValue = globals.parameters[paramType][fieldName];
            if (globalValue !== undefined) {
                value = globalValue;
            }
        }
    }
    return value;
}
exports.populateFromGlobals = populateFromGlobals;
function valToString(value) {
    if (value instanceof Date) {
        return value.toISOString();
    }
    return value.toString();
}
exports.valToString = valToString;
function shouldQueryParamSerialize(value) {
    return !(value === undefined || value === null || value === "");
}
exports.shouldQueryParamSerialize = shouldQueryParamSerialize;
