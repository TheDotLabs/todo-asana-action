"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core = __importStar(require("@actions/core"));
var utils_1 = require("./utils/utils");
var asana_1 = require("./asana");
var nodegit_1 = require("nodegit");
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var asanaToken, rawProjectIds, workspaceId, rawFollowerIds, rawUserMapping, projectIds, followerIds, userMapping_1, repo, commit, diffs, todoList_1, _i, diffs_1, value, patches, _a, patches_1, patch, hunks, _b, hunks_1, hunk, lines, _c, lines_1, line, filterTodoList, _d, filterTodoList_1, todo, e_1;
        var _this = this;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 18, , 19]);
                    core.info("Init todo-asana-action...");
                    asanaToken = core.getInput("asana-token");
                    rawProjectIds = core.getInput("projects");
                    workspaceId = core.getInput("workspace");
                    rawFollowerIds = core.getInput("followers");
                    rawUserMapping = core.getInput("user-mapping");
                    projectIds = rawProjectIds ? JSON.parse(rawProjectIds) : [];
                    followerIds = rawFollowerIds ? JSON.parse(rawFollowerIds) : [];
                    userMapping_1 = rawUserMapping ? JSON.parse(rawUserMapping) : {};
                    return [4 /*yield*/, nodegit_1.Repository.open("./")];
                case 1:
                    repo = _e.sent();
                    return [4 /*yield*/, repo.getHeadCommit()];
                case 2:
                    commit = _e.sent();
                    return [4 /*yield*/, commit.getDiff()];
                case 3:
                    diffs = _e.sent();
                    todoList_1 = [];
                    _i = 0, diffs_1 = diffs;
                    _e.label = 4;
                case 4:
                    if (!(_i < diffs_1.length)) return [3 /*break*/, 17];
                    value = diffs_1[_i];
                    return [4 /*yield*/, value.patches()];
                case 5:
                    patches = _e.sent();
                    _a = 0, patches_1 = patches;
                    _e.label = 6;
                case 6:
                    if (!(_a < patches_1.length)) return [3 /*break*/, 12];
                    patch = patches_1[_a];
                    return [4 /*yield*/, patch.hunks()];
                case 7:
                    hunks = _e.sent();
                    _b = 0, hunks_1 = hunks;
                    _e.label = 8;
                case 8:
                    if (!(_b < hunks_1.length)) return [3 /*break*/, 11];
                    hunk = hunks_1[_b];
                    return [4 /*yield*/, hunk.lines()];
                case 9:
                    lines = _e.sent();
                    for (_c = 0, lines_1 = lines; _c < lines_1.length; _c++) {
                        line = lines_1[_c];
                        utils_1.parseContent(line.content(), function (username, task) { return __awaiter(_this, void 0, void 0, function () {
                            var userId;
                            return __generator(this, function (_a) {
                                userId = userMapping_1[username];
                                todoList_1.push({ userId: userId, task: task });
                                return [2 /*return*/];
                            });
                        }); });
                    }
                    _e.label = 10;
                case 10:
                    _b++;
                    return [3 /*break*/, 8];
                case 11:
                    _a++;
                    return [3 /*break*/, 6];
                case 12:
                    filterTodoList = todoList_1.filter(function (value, i, self) { return self.findIndex(function (t) { return (t.task === value.task); }) === i; });
                    console.log("Found " + filterTodoList.length + " TODOs...");
                    _d = 0, filterTodoList_1 = filterTodoList;
                    _e.label = 13;
                case 13:
                    if (!(_d < filterTodoList_1.length)) return [3 /*break*/, 16];
                    todo = filterTodoList_1[_d];
                    return [4 /*yield*/, asana_1.createTask(todo.userId, todo.task, asanaToken, projectIds, followerIds, workspaceId)];
                case 14:
                    _e.sent();
                    _e.label = 15;
                case 15:
                    _d++;
                    return [3 /*break*/, 13];
                case 16:
                    _i++;
                    return [3 /*break*/, 4];
                case 17: return [3 /*break*/, 19];
                case 18:
                    e_1 = _e.sent();
                    core.error(e_1);
                    return [3 /*break*/, 19];
                case 19: return [2 /*return*/];
            }
        });
    });
}
run().catch(function (error) { return core.setFailed("Workflow failed! " + error); });
