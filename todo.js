const fs = require('fs');

module.exports = {
    // Create Method
    create(title, body) {
        // Fetch Todos From DB File
        const db = this.list();

        // Create New Todo Object
        const newTodo = { title, body, completed: false };

        // Merge Old Data With new Todo
        db.push(newTodo);

        // Write Todos to DB File
        this.save(db);
    },

    // List Method
    list() {
        return JSON.parse(fs.readFileSync('./db.json'));
    },

    // Show Method
    show(index) {
        const db = this.list();

        return db[index];
    },

    // Remove Method
    remove(index) {
        // Fetch All Data
        const db = this.list();
        
        // Remove Todo By Index
        db.splice(index, 1);

        // Save Data
        this.save(db);
    },

    // Update Completed Status Method
    toggle(index) {
        // Fetch All Data
        const db = this.list();
        
        // Fetch Todo by Index
        const todo = db[index];
        
        // Reverse Todo Completed Status
        todo.completed = !todo.completed;

        // Save Data
        this.save(db);
    },

    // Save Method
    save(data) {
        fs.writeFileSync('./db.json', JSON.stringify(data))
    }
};