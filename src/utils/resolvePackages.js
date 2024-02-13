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
exports.resolvePackages = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const resolvePackages = (props) => __awaiter(void 0, void 0, void 0, function* () {
    const { pathName } = props;
    return yield new Promise((resolve) => {
        const rootPath = path_1.default.resolve('.');
        process.chdir(pathName);
        (0, child_process_1.exec)("npm install", (err, stdout, stderr) => {
            if (err) {
                console.error(`Error when resolve packages: ${err}`);
            }
            process.chdir(rootPath);
            resolve(1);
        });
    });
});
exports.resolvePackages = resolvePackages;
