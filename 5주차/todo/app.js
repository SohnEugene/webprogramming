import { todoList } from "./todo.js";

// UI 모듈 정의하기
const app = {
  todoList: document.getElementById("todoList"),
  form: document.querySelector("form"),
  titleInput: document.getElementById("title"),
  dueDateInput: document.getElementById("dueDate"),


  renderItem(item) {
    const li = document.createElement("li"); 
    if (item.completed) {
      li.classList.add("completed");
    }

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const newColor = "#" + randomColor;
    li.style.backgroundColor = newColor;
    li.style.color = "white";

    const titleText = document.createElement("div");
    titleText.textContent = `${item.title} - ${item.dueDate}`;
    titleText.classList.add("title");

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "✔️";
    toggleBtn.addEventListener("click", () => {
      todoList.toggleComplete(item);
      this.renderList(); 
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "🗑️";
    removeBtn.addEventListener("click", () => {
      todoList.remove(item); 
      this.renderList();
    });

    li.appendChild(toggleBtn);
    li.appendChild(removeBtn);
    li.appendChild(titleText);
    this.todoList.appendChild(li);
  },

  renderList() {
    this.todoList.innerHTML = "";
    todoList.items.forEach((item) => {
      this.renderItem(item);
    });
  },

  init() {
    todoList.load();
    this.renderList();

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.titleInput.value;
      const dueDate = this.dueDateInput.value;

      if (title && dueDate) {
        const item = todoList.add(title, dueDate);
        this.renderItem(item);
        this.titleInput.value = "";
        this.dueDateInput.value = "";
      }
    });
  },
};

app.init();
