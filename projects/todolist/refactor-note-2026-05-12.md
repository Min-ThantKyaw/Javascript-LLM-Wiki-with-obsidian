# Refactor Note — todolist / script.js
**Date:** 2026-05-12

---

## အနှစ်ချုပ်

`script.js` မှာ critical bug ၃ ခုနှင့် missing functionality ၄ ခု ရှိသောကြောင့် app သည် လုံးဝ အလုပ်မလုပ်နိုင်သောအခြေအနေ ရှိနေသည်။ Refactor ပြုလုပ်ပြီး bug fix နှင့် ပါဝင်ရမည့် feature အားလုံး ပြည့်စုံအောင် complete လုပ်ခဲ့သည်။

---

## 🐛 Bug Fixes

### Bug #1 — Broken DOM Structure (`renderCategoryList`)

**Before:**
```javascript
categoryList.appendChild(button); // button ကို list ထဲ တိုက်ရိုက် append
li.textContent = category.name;
categoryList.appendChild(li);     // li ကို သီးခြား append — button ထဲ မဝင်ဘဲ
```

**After:**
```javascript
li.innerHTML = `
  <span onclick="setFilter('${id}')">${name}</span>
  <button onclick="deleteCategory('${id}')">
    <i class="fas fa-times"></i>
  </button>
`;
ul.appendChild(li); // button သည် li ထဲမှာ မှန်ကန်စွာ ရှိသည်
```
> `<button>` ကို `<li>` ထဲ မထည့်ဘဲ ပြင်ပမှာ append လုပ်နေသောကြောင့် layout ပျက်ကွက်ပြီး delete button မလုပ်ဆောင်နိုင်ဘဲ ဖြစ်နေသည်။

---

### Bug #2 — Unreliable Category ID Generation

**Before:**
```javascript
const newCategory = {
  "id": categoryItems.length + 1, // ❌ delete ပြီးနောက် ID ထပ်နိုင်သည်
  "name": categoryName
}
```

**After:**
```javascript
const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

categories.push({ id: generateId(), name }); // ✅ always unique
```
> 3 categories ရှိပြီး middle တစ်ခု delete လုပ်မည်ဆိုလျှင် — ပြန်ထည့်သောအခါ `length + 1 = 3` ဖြစ်ပြီး ရှိပြီးသား ID နှင့် ထပ်မိမည်။ `Date.now()` + random string သည် collision-proof ဖြစ်သည်။

---

### Bug #3 — localStorage မှ Data Load မလုပ်ဘဲ

**Before:**
```javascript
let categoryItems = []; // page refresh လုပ်တိုင်း categories ပပျောက်သွားသည်
```

**After:**
```javascript
let categories = JSON.parse(localStorage.getItem("categories")) || [];
let todos      = JSON.parse(localStorage.getItem("todos"))      || [];
```
> Data ကို localStorage မှာ သိမ်းသော်လည်း page load တိုင်း မဖတ်သောကြောင့် refresh လုပ်တိုင်း data ပပျောက်နေသည်။

---

## ✨ New Features (Missing Functionality)

### 1. Todo CRUD — `addTodo`, `toggleTodo`, `deleteTodo`

HTML ၏ Add button, filter buttons တွေ call သော်လည်း function မရှိ — app ကို လုံးဝ မသုံးနိုင်သောအခြေအနေ ဖြစ်နေသည်။

```javascript
function addTodo() { ... }    // input → localStorage → render
function toggleTodo(id) { ... } // completed state toggle
function deleteTodo(id) { ... } // filter + save
```

### 2. Filter System — `setFilter`, `getFilteredTodos`

Sidebar ၏ filter buttons (All, Today, Upcoming, Completed) တို့သည် `setFilter()` ကို call သော်လည်း function မရှိ:

```javascript
const FILTER_TITLES = { all: "All Tasks", today: "Today", ... };

function setFilter(filter) {
  currentFilter = filter;
  document.getElementById("listTitle").textContent = ...;
  renderTodos();
}

function getFilteredTodos() {
  switch (currentFilter) {
    case "today":     return todos.filter(t => t.date === today);
    case "future":    return todos.filter(t => t.date > today);
    case "completed": return todos.filter(t => t.completed);
    default:          return todos;
  }
}
```

Categories ကို filter အဖြစ်လည်း သုံးနိုင်သည် (category ID ဖြင့် click လုပ်သောအခါ)။

### 3. Category Dropdown Population — `renderCategoryDropdown`

Todo input form ၏ `<select id="todoCategory">` သည် empty နေသောကြောင့် category assign မလုပ်နိုင်ဘဲ ဖြစ်နေသည်:

```javascript
function renderCategoryDropdown() {
  const select = document.getElementById("todoCategory");
  select.innerHTML = `<option value="">No Category</option>`;
  categories.forEach(({ id, name }) => {
    const opt = document.createElement("option");
    opt.value = id; opt.textContent = name;
    select.appendChild(opt);
  });
}
```

### 4. Proper Initialization — `init` + `DOMContentLoaded`

```javascript
function init() {
  document.getElementById("addButton").addEventListener("click", addTodo);
  document.getElementById("todoInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo(); // Enter key support
  });
  renderCategoryList();
  renderCategoryDropdown();
  renderTodos();
}

document.addEventListener("DOMContentLoaded", init);
```

---

## 🔧 Code Quality Improvements

| ပိုင်ဆိုင်မှု | Before | After |
|---|---|---|
| State management | Global `let` ကို top-level ကြေညာ မလုပ်ဘဲ | STATE section တွင် စုစည်းထားသည် |
| Save logic | `localStorage.setItem(...)` ကို repeat | `save()` helper function |
| DOM query | Top-level `getElementById` (risky) | Function ထဲ အတွင်းမှာ query |
| Empty state | မရှိ | "No tasks here!" UI ပြပေးသည် |
| Naming | `categoryItems` | `categories` (ပိုတိုတောင်း) |
| localStorage key | `"categoryItems"` | `"categories"` (consistent) |

---

## Techniques & Patterns Applied

- **`generateId()`** — `Date.now()` + `Math.random()` ဖြင့် collision-proof unique ID
- **Optional chaining (`?.`)** — `categories.find(...)?.name || ""`
- **`DOMContentLoaded`** — DOM ready ဖြစ်မှ init လုပ်ပြုပြင်ခြင်း
- **Single Responsibility** — Category logic / Todo logic / Filter logic ကို section ခွဲထားခြင်း
- **`const` when you can** — `generateId`, `getTodayStr`, `save`, `FILTER_TITLES`
- **Template literals** — DOM card HTML ကို ရှင်းလင်းစွာ ရေးနိုင်ခြင်း
