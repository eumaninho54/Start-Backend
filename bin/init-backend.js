#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const ora_1 = __importDefault(require("ora"));
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const args = yield (0, utils_1.getArgs)();
        const pathName = (0, utils_1.getPathName)({ isDev: args.isDev });
        console.log('\n[1] - Initial project settings');
        const framework = yield (0, utils_1.choiceFramework)();
        const creatingFiles = (0, ora_1.default)({
            prefixText: '[2] - Creating base file structure 📂...'
        }).start();
        yield (0, utils_1.runWorkerCreateSourceFiles)({
            pathName: pathName,
            framework: framework
        });
        creatingFiles.succeed();
        const changingDynamicName = (0, ora_1.default)({
            prefixText: `[3] - Adjusting dynamic names in the files to ${args.projectName}.`
        }).start();
        yield (0, utils_1.changeDynamicName)({
            pathName: pathName,
            projectName: args.projectName
        });
        changingDynamicName.succeed();
        const resolvingPackages = (0, ora_1.default)({
            prefixText: '[4] - Resolving packages 📦...'
        }).start();
        yield (0, utils_1.resolvePackages)({
            pathName: pathName
        });
        resolvingPackages.succeed();
        process.exit(0);
    });
}
