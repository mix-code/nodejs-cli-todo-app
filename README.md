# Todo App
CLI Todo App With Nodejs

---
## Command
- ### [Create](#create)
- ### [List](#list)
- ### [Show](#show)
- ### [Remove](#remove)
- ### [Toggle](#toggle)

### Create
Create New Todo

```sh
$ node app.js create --title "Todo Title" --body "Todo Body"

# For more information run
$ node app.js create --help
```

### List
List Todo

```sh
$ node app.js list

# For more information run
$ node app.js list --help
```

### Show
Show Todo

```sh
# Pro Tip Get "index" from "list" command
$ node app.js show --index 0

# For more information run
$ node app.js show --help
```

### Remove
Remove Todo

```sh
$ node app.js remove --index 0

# For more information run
$ node app.js remove --help
```

### Toggle
Toggle Todo Completed Status

```sh
$ node app.js Toggle --index 0

# For more information run
$ node app.js Toggle --help
```