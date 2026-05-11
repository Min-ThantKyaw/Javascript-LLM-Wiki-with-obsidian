# 📋 Cheat Sheet — JavaScript / TypeScript

> Reusable patterns, snippets, and quick references.
> ဤ file ကို `/cheat` command ဖြင့် update ပြုလုပ်သည်။

---

## Variables & Constants

### Declare + Initialize (တစ်ကြောင်းတည်း — Best Practice)
```javascript
let count = 0;          // ပြောင်းနိုင်သော တန်ဖိုး
const MAX_RETRIES = 3;  // မပြောင်းသော တန်ဖိုး
```
> `const` when you can, `let` when you have to.

---

### Variable Naming — lowerCamelCase
```javascript
// ✅ ကောင်းသောနာမည်
let firstName = "Kyaw";
let isUserLoggedIn = true;
let totalItemCount = 0;

// ❌ မကောင်းသောနာမည်
let a = "Kyaw";        // အဓိပ္ပာယ်မရှင်း
let myage = 25;        // camelCase မဟုတ်
let 1stName = "Kyaw";  // number ဖြင့် မစရ
```
> Rules: lowerCamelCase၊ number ဖြင့် မစရ၊ reserved keyword မသုံးရ။

---

### typeof — Data Type စစ်ဆေးခြင်း
```javascript
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof [1, 2, 3]   // "object"
typeof { a: 1 }    // "object"
typeof undefined   // "undefined"
```
> Variable ၏ data type ကို runtime တွင် စစ်ဆေးရန် သုံးသည်။

---

### String vs Number Gotcha ⚠️
```javascript
let a = "5";
let b = 3;
console.log(a + b);  // "53" ❌ — string concatenation!

let c = 5;
console.log(c + b);  // 8  ✅ — number addition
```
> Quotes ပါသော digits သည် number မဟုတ်ဘဲ string ဖြစ်သည်။ `typeof` ဖြင့် စစ်ပါ။

---

### const with Objects — Properties ပြောင်းနိုင်သည်
```javascript
const user = { name: "Kyaw", age: 25 };

user.name = "Aung";   // ✅ properties ပြောင်းနိုင်သည်
user.role = "admin";  // ✅ properties ထပ်ထည့်နိုင်သည်

user = { name: "Bo" }; // ❌ TypeError — object ကိုယ်တိုင် reassign မရ
```
> `const` သည် reference ကို lock လုပ်သည် — object content ကို မဟုတ်ဘဲ။

---

### var vs let — အမြန်နှိုင်းယှဉ်
```javascript
// var ❌ (ရှောင်ပါ)
var x = 1;
var x = 2;     // re-declare ပြုလုပ်နိုင် — bug-prone
console.log(y); // undefined (hoisted)
var y = 5;

// let ✅ (သုံးပါ)
let a = 1;
let a = 2;     // ❌ SyntaxError — re-declare မရ
console.log(b); // ❌ ReferenceError — hoisting မရှိ
let b = 5;
```
> Modern JS တွင် `var` ကို အသုံးမပြုတော့ဘဲ `let` / `const` သာ သုံးပါ။

---
