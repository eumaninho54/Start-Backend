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
exports.changeDynamicName = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const changeDynamicName = (props) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectName, pathName } = props;
    //README.md
    yield changeFile(projectName, pathName, 'README.md');
    //package.json
    yield changeFile(projectName, pathName, 'package.json');
    //.env.example
    yield changeFile(projectName, pathName, '.env.example');
});
exports.changeDynamicName = changeDynamicName;
const changeFile = (projectName, pathName, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = path_1.default.join(pathName, fileName);
    let content = yield promises_1.default.readFile(filePath, 'utf-8');
    const modifiedContent = content.replace(/{-projectName-}/g, projectName);
    yield promises_1.default.writeFile(filePath, modifiedContent, 'utf-8');
});
