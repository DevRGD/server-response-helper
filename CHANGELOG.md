# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - 2025-07-02

### Changed

- Migrated to ESLint v9 with flat config (`eslint.config.js`)
- Switched to Prettier for consistent formatting
- Added `vitest` testing setup with complete test coverage
- Integrated GitHub Actions for CI/CD, testing, and release
- Enabled provenance-based `npm publish` via GitHub Actions

### Fixed

- Addressed `no-console` and module syntax issues from ESLint
- Cleaned up `npm` dependency warnings and peer conflicts

---

## [1.0.0] - 2025-06-28

### Added

- Initial release of `server-response-helper`
- Express middleware to add `res.response()` method
- Standardized JSON response format with status, message, data, timestamp, and path
- Support for custom messages and data payloads
- TypeScript typings included
- Basic test suite and linting configuration
- Comprehensive README and documentation
