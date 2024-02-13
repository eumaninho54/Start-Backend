"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getArgs = void 0;
const readline_1 = __importDefault(require("readline"));
const minimist_1 = __importDefault(require("minimist"));
const path_1 = __importDefault(require("path"));
const getArgs = () => __awaiter(void 0, void 0, void 0, function* () {
    const args = (0, minimist_1.default)(process.argv.slice(2), {
        alias: {
            n: "name",
            v: "version",
            h: "help",
            D: "dev",
        },
        boolean: ["dev", "version", "help"],
    });
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    yield topLevelArgument(args);
    console.log("This script will create a pre-defined backend node project 🚀.");
    console.log("Support us - https://github.com/eumaninho54/Start-Backend. \n");
    if (!args.name) {
        args.name = yield new Promise((resolve) => {
            const defaultProjectName = path_1.default
                .basename(path_1.default.resolve("."))
                .replace(/[^A-Za-z0-9.-]+/g, "-")
                .replace(/^[-_.]+|-+$/g, "")
                .toLowerCase();
            rl.question(`Project name (${defaultProjectName}): `, (answer) => {
                if (answer === "") {
                    resolve(defaultProjectName);
                }
                else {
                    resolve(answer);
                }
                rl.close();
            });
        });
    }
    return {
        projectName: args.name,
        isDev: args.dev,
    };
});
exports.getArgs = getArgs;
const topLevelArgument = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const packageJson = yield Promise.resolve(`${path_1.default.join(__dirname, `../package.json`)}`).then(s => __importStar(require(s)));
    if (args.version) {
        console.log(`Your version: ${packageJson.version}`);
        process.exit(0);
    }
    if (args.help) {
        console.log("");
        console.log("  Usage: start-backend [options]");
        console.log("");
        console.log("  Options:");
        console.log("");
        console.log("    -n, --name <string>  Name of the project. If not specified, the current.");
        console.log("                         directory name is used.");
        console.log("    -v, --version        Output the version number of the start-backend tool.");
        console.log("    -D, --dev            Run in development mode. Generates in example folder.");
        console.log("    -h, --help           Output usage information. This help text shows you.");
        console.log("");
        process.exit(0);
    }
});
