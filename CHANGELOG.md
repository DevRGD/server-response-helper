# Changelog

All notable changes to this project will be documented in this file.

## \[2.0.0] - 2025-07-09

### Changed

* **\[BREAKING]** Fixed incorrect `index` path configuration in the package entry point, which caused import failures in consuming projects.
* Updated the `exports` and/or `main/module` fields in `package.json` to properly resolve the middleware in both CommonJS and ESM environments.

### Notes

* This version resolves a critical import issue that made the package unusable after installation in other Node.js projects.
* There are **no API changes** to the middleware itself. However, consumers must update to this version to fix module resolution problems.

---

## \[1.0.0] - 2025-06-28

### Added

* Initial release of `server-response-helper`
* Express middleware to add `res.response()` method
* Standardized JSON response format with status, message, data, timestamp, and path
* Support for custom messages and data payloads
* TypeScript typings included
* Basic test suite and linting configuration
* Comprehensive README and documentation
