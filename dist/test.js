"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var asana_1 = require("./asana");
try {
    var username = "apgapg";
    var asanaToken = "---";
    var projectIds = ["1199123288499074"];
    var followersIds = [];
    var task = "[TODO] This is test task from TODO";
    var workspaceId = "34125054317482";
    var userMapping = {
        "apgapg": "712057959076542",
        "someshubham": "1127520825602495",
        "samvitjain": "1190264423420113",
        "Aashishm178": "1200109906013623"
    };
    var userId = userMapping[username];
    asana_1.createTask(userId, task, asanaToken, projectIds, followersIds, workspaceId).then(function (r) { return console.log(r); }).catch(function (e) { return console.error(e); });
}
catch (e) {
    console.error(e);
}
