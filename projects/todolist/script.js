// ============================================================
// STATE
// ============================================================
let categories = JSON.parse(localStorage.getItem("categories")) || [];
let todos      = JSON.parse(localStorage.getItem("todos"))      || [];
let currentFilter = "all";

// ============================================================
// UTILS
// ============================================================
const generateId  = () => `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
const getTodayStr = () => new Date().toISOString().split("T")[0];
const save = () => {
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("todos",      JSON.stringify(todos));
};

// ============================================================
// CATEGORIES
// ============================================================
function createNewCategory() {
  const input = document.getElementById("newCategoryInput");
  const name  = input.value.trim();
  if (!name) return;

  categories.push({ id: generateId(), name });
  input.value = "";
  localStorage.setItem("categories", JSON.stringify(categories));

  renderCategoryList();
  renderCategoryDropdown();
}

function deleteCategory(id) {
  categories = categories.filter(c => c.id !== id);
  localStorage.setItem("categories", JSON.stringify(categories));

  renderCategoryList();
  renderCategoryDropdown();
}

function renderCategoryList() {
  const list = document.getElementById("categoryList");
  list.innerHTML = "";

  if (categories.length === 0) {
    list.innerHTML = `<p class="text-xs text-slate-400 px-2 py-2">No categories yet.</p>`;
    return;
  }

  const ul = document.createElement("ul");
  ul.className = "space-y-1";

  categories.forEach(({ id, name }) => {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2 hover:bg-slate-100 transition-all";
    li.innerHTML = `
      <span
        class="text-sm font-medium text-slate-700 truncate cursor-pointer"
        onclick="setFilter('${id}')"
      >${name}</span>
      <button
        onclick="deleteCategory('${id}')"
        class="text-slate-300 hover:text-red-400 transition ml-2 shrink-0"
      >
        <i class="fas fa-times text-xs"></i>
      </button>
    `;
    ul.appendChild(li);
  });

  list.appendChild(ul);
}

function renderCategoryDropdown() {
  const select = document.getElementById("todoCategory");
  select.innerHTML = `<option value="">No Category</option>`;

  categories.forEach(({ id, name }) => {
    const opt = document.createElement("option");
    opt.value       = id;
    opt.textContent = name;
    select.appendChild(opt);
  });
}

// ============================================================
// TODOS
// ============================================================
function addTodo() {
  const input          = document.getElementById("todoInput");
  const dateInput      = document.getElementById("todoDate");
  const categorySelect = document.getElementById("todoCategory");

  const text = input.value.trim();
  if (!text) return;

  todos.push({
    id:         generateId(),
    text,
    date:       dateInput.value       || "",
    categoryId: categorySelect.value  || "",
    completed:  false,
    createdAt:  new Date().toISOString(),
  });

  save();

  input.value          = "";
  dateInput.value      = "";
  categorySelect.value = "";

  renderTodos();
}

function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;

  todo.completed = !todo.completed;
  save();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  save();
  renderTodos();
}

// ============================================================
// FILTER + RENDER
// ============================================================
const FILTER_TITLES = {
  all:       "All Tasks",
  today:     "Today",
  future:    "Upcoming",
  completed: "Completed",
};

function setFilter(filter) {
  currentFilter = filter;

  const cat = categories.find(c => c.id === filter);
  document.getElementById("listTitle").textContent =
    cat ? cat.name : (FILTER_TITLES[filter] || "All Tasks");

  renderTodos();
}

function getFilteredTodos() {
  const today = getTodayStr();

  if (categories.find(c => c.id === currentFilter)) {
    return todos.filter(t => t.categoryId === currentFilter);
  }

  switch (currentFilter) {
    case "today":     return todos.filter(t => t.date === today);
    case "future":    return todos.filter(t => t.date > today);
    case "completed": return todos.filter(t => t.completed);
    default:          return todos;
  }
}

function getCategoryName(categoryId) {
  return categories.find(c => c.id === categoryId)?.name || "";
}

function renderTodos() {
  const list      = document.getElementById("todoList");
  const taskCount = document.getElementById("taskCount");
  const filtered  = getFilteredTodos();

  taskCount.textContent = filtered.length;
  list.innerHTML = "";

  if (filtered.length === 0) {
    list.innerHTML = `
      <li class="flex flex-col items-center justify-center py-16 text-slate-300">
        <i class="fas fa-clipboard-list text-5xl mb-4"></i>
        <p class="font-semibold text-lg">No tasks here!</p>
        <p class="text-sm">Add a new task above to get started.</p>
      </li>`;
    return;
  }

  filtered.forEach(todo => {
    const categoryName = getCategoryName(todo.categoryId);
    const li = document.createElement("li");
    li.className = `flex items-start gap-4 bg-white p-5 rounded-2xl border shadow-sm transition-all ${
      todo.completed ? "opacity-60 border-slate-100" : "border-slate-100"
    }`;
    li.innerHTML = `
      <button
        onclick="toggleTodo('${todo.id}')"
        class="mt-0.5 shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
          todo.completed
            ? "bg-indigo-500 border-indigo-500 text-white"
            : "border-slate-300 hover:border-indigo-400"
        }"
      >
        ${todo.completed ? '<i class="fas fa-check text-[10px]"></i>' : ""}
      </button>

      <div class="flex-1 min-w-0">
        <p class="font-semibold text-slate-700 ${todo.completed ? "line-through text-slate-400" : ""}">
          ${todo.text}
        </p>
        <div class="flex items-center gap-3 mt-1.5 flex-wrap">
          ${todo.date ? `
            <span class="text-xs text-slate-400 flex items-center gap-1">
              <i class="fas fa-calendar text-slate-300"></i>${todo.date}
            </span>` : ""}
          ${categoryName ? `
            <span class="text-xs bg-indigo-50 text-indigo-500 font-semibold px-2 py-0.5 rounded-full">
              ${categoryName}
            </span>` : ""}
        </div>
      </div>

      <button
        onclick="deleteTodo('${todo.id}')"
        class="text-slate-200 hover:text-red-400 transition shrink-0 mt-0.5"
      >
        <i class="fas fa-trash text-sm"></i>
      </button>
    `;
    list.appendChild(li);
  });
}

// ============================================================
// INIT
// ============================================================
function init() {
  document.getElementById("addButton").addEventListener("click", addTodo);
  document.getElementById("todoInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo();
  });

  renderCategoryList();
  renderCategoryDropdown();
  renderTodos();
}

document.addEventListener("DOMContentLoaded", init);
