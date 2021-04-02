"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asana_1 = require("./asana");
var asana_users_utils_1 = require("./utils/asana_users_utils");
try {
    var username = "apgapg";
    var asanaToken = "---";
    var projectIds = ["1199123288499074"];
    var followersIds = [];
    var task = "[TODO] This is test task from TODO";
    var workspaceId = "34125054317482";
    var userId = asana_users_utils_1.getAsanaUserId(username);
    asana_1.createTask(userId, task, asanaToken, projectIds, followersIds, workspaceId).then(function (r) { return console.log(r); }).catch(function (e) { return console.error(e); });
}
catch (e) {
    console.error(e);
}
