### naming framework

#### Variable Naming

- Use camelCase for variable and function names (e.g., `userAge`, `calculateTotal`)

#### File Naming

- Use kebab-case for file names (e.g., `user-service.ts`, `auth-middleware.ts`)

#### Class Naming

- Use PascalCase for class names (e.g., `UserService`, `AuthMiddleware`)

#### Constants

- Use UPPER_SNAKE_CASE for constants (e.g., `MAX_RETRY_ATTEMPTS`)
- Environment variables should be UPPER_SNAKE_CASE
- Keep enum members in UPPER_SNAKE_CASE

#### Function Naming

- Use verb + noun format (e.g., `getUserById`, `validateInput`)
- Async functions should indicate asynchronicity (e.g., `fetchUserData`, `loadConfig`)
- Event handlers should start with 'handle' or 'on' (e.g., `handleClick`, `onSubmit`)
- Boolean-returning functions should ask a question (e.g., `isValid`, `hasPermission`)

### Error handling

| Code | Meaning               | Use Case                    |
| ---- | --------------------- | --------------------------- |
| 400  | Bad Request           | Validation failed           |
| 401  | Unauthorized          | Not logged in               |
| 403  | Forbidden             | Authenticated but no access |
| 404  | Not Found             | Resource doesn't exist      |
| 409  | Conflict              | Duplicate entry, etc.       |
| 422  | Unprocessable Entity  | Semantically invalid input  |
| 500  | Internal Server Error | Uncaught server error       |

**Example**

```
if (!data) throw new AppError('Health data not available', 503);
```

### Environment

- node(v22.14.0)
- npm(v10.9.2)
