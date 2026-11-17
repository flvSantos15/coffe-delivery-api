"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const strict_1 = __importDefault(require("node:assert/strict"));
const node_test_1 = require("node:test");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
(0, node_test_1.describe)('AppController', () => {
    let appController;
    (0, node_test_1.beforeEach)(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        }).compile();
        appController = module.get(app_controller_1.AppController);
    });
    (0, node_test_1.describe)('root', () => {
        (0, node_test_1.it)("should return 'Hello World!'", () => {
            strict_1.default.equal(appController.getHello(), 'Hello World!');
        });
    });
});
//# sourceMappingURL=app.controller.spec.js.map