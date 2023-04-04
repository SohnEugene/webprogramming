import TodoItem from "./item.js";
//자바스크립트는 클래스 없이 바로 객체를 만들 수 있음. 이 파일이 그런 예

const todoList = {
  items: [],

  add(title, dueDate) {
    const item = new TodoItem(title, dueDate);
    this.items.push(item);
    this.save();
    return item;
  },

  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.save();
    }
  },

  toggleComplete(item) {
    item.toggleComplete();
    this.save(); 
  },

  save() {
    console.log(this.items);
    console.log(JSON.stringify(this.items));
    localStorage.setItem("todoList", JSON.stringify(this.items));
  },

  load() {
    const items = localStorage.getItem("todoList");
    if (items) {
      this.items = JSON.parse(items);
    }
  },
};

export { todoList };
