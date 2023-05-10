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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = require("../libs/multer");
const controllerHome = __importStar(require("../Controllers/controllerHome"));
const controllerGet = __importStar(require("../Controllers/controllerGetProduct"));
const controllerCreateProduct = __importStar(require("../Controllers/controllerCreateProducts"));
const router = (0, express_1.Router)();
router.post('/createproducts', multer_1.upload.fields([{ name: 'oldPrice' }, { name: 'category' }, { name: 'name' }, { name: 'price' }, { name: 'description' }, { name: 'inStock' }, { name: 'guarantee' }, { name: 'image' }]), controllerCreateProduct.createProducts);
router.get('/teste', controllerHome.teste);
router.get('/', controllerHome.home);
router.get('/getproductsingle/:id', controllerGet.getProductId);
exports.default = router;