# Constants — `const` Keyword

> **Source:** [MDN - Storing the information you need](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)

## `const` ဆိုတာဘာလဲ?

`const` ဖြင့် ကြေညာသော value သည် **Constant** ဖြစ်သည် — variable တစ်ခုနှင့် ဆင်တူသော်လည်း ကွာခြားချက် နှစ်ချက်ရှိသည်:

1. ကြေညာသောအခါ **တစ်ပြိုင်နက် initialize** လုပ်ရမည်
2. ကြေညာပြီးနောက် **တန်ဖိုး ပြောင်းလဲ၍ မရ**

## `let` vs `const` နှိုင်းယှဉ်ချက်

```javascript
// let — initialize မလုပ်ဘဲ ကြေညာနိုင်သည်
let count;        // ✅ အလုပ်လုပ်သည်
const count;      // ❌ SyntaxError!

// let — reassign လုပ်နိုင်သည်
let count = 1;
count = 2;        // ✅ အလုပ်လုပ်သည်

// const — reassign မလုပ်နိုင်
const count = 1;
count = 2;        // ❌ TypeError!
```

## Object ကို `const` ဖြင့် ကြေညာခြင်း

`const` ကို Object ဖြင့် သုံးသောအခါ **object ၏ properties** ကိုမူ ပြောင်းလဲနိုင်သည်:

```javascript
const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"

// Properties ပြောင်းလဲနိုင်သည် ✅
bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"

// Object ကိုယ်တိုင် reassign မလုပ်နိုင် ❌
bird = { species: "Eagle" }; // TypeError!
```

> 💡 `const` သည် **variable (reference) ကို သော့ခတ်ထားသည်** — object ၏ content ကို မဟုတ်ဘဲ။

## `const` vs `let` — ဘယ်အချိန်မှာ ဘာသုံးမလဲ?

**Golden Rule:**
> 🏆 **`const` when you can, `let` when you have to.**

| Situation | သုံးရမည့် Keyword |
|---|---|
| တန်ဖိုး ပြောင်းမည် မဟုတ် | `const` |
| Count, Loop, Update ပြုလုပ်မည် | `let` |
| API response, DOM element (ပြောင်းမည် မဟုတ်) | `const` |
| User input ကိုသိမ်းမည် | `let` |

### ဥပမာ

```javascript
// const သုံးသင့်သောနေရာ
const API_URL = "https://api.example.com";
const maxRetries = 3;
const userElement = document.querySelector("#user");

// let သုံးသင့်သောနေရာ
let currentPage = 1;
let isLoading = false;
let userInput = "";
```

## ဘာကြောင့် `const` ကို ပိုသုံးသင့်သလဲ?

Code ဖတ်သောအချိန်တွင် `const` တွေ့ရလျှင် **"ဒီ variable က ပြောင်းမည် မဟုတ်ဘူး"** ဟု ချက်ချင်း သိနိုင်သောကြောင့် code ကို ပိုနားလည်လွယ်စေသည်။

---

**ဆက်လက်လေ့လာရန်:**
- [[var-vs-let]] — `var` vs `let` ကွာခြားချက်
- [[declaring-and-initializing]] — Variable ကြေညာနည်း
- [[variable-types]] — Data types ၅ မျိုး
