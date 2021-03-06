"use strict";
exports.DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost/storyline-viewer-api";
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL ||
  "mongodb://localhost/test-storyline-viewer-api";
exports.PORT = process.env.PORT || 8083;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || "7d";
