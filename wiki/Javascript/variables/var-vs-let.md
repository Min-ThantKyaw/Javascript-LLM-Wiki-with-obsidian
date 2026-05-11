# var vs let — ကွာခြားချက်နှင့် Hoisting

> **Source:** [MDN - Storing the information you need](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)

## `var` ဆိုတာဘာလဲ?

JavaScript ကို ပထမဆုံး ဖန်တီးသောအခါ variable ကြေညာရန် `var` တစ်ခုတည်းသာ ရှိသည်။ သို့သော် `var` ၏ design သည် confusing ဖြစ်ပြီး error-prone ဖြစ်သောကြောင့် modern JavaScript တွင် `let` ကို ဖန်တီးခဲ့သည်။

```javascript
var myName;
var myAge;
```

## ကွာခြားချက် #1 — Hoisting

`var` ကို သုံးလျှင် variable ကို initialize လုပ်ပြီးမှ declare လုပ်ပါလည်း အလုပ်လုပ်သည် (Hoisting ကြောင့်):

```javascript
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName; // declare ကို နောက်မှ ရေးသော်လည်း အလုပ်လုပ်သည်
```

**`let` မှာ Hoisting မလုပ်နိုင်:**

```javascript
myName = "Chris"; // ❌ Error!
let myName;
```

> 💡 Hoisting မလုပ်နိုင်ခြင်းသည် `let` ၏ **ကောင်းသောအချက်** ဖြစ်သည် — initialize မလုပ်ဘဲ use ခြင်းသည် confusing code ဖြစ်သောကြောင့်ဖြစ်သည်။

## ကွာခြားချက် #2 — Re-declaration

`var` ဖြင့် တူညီသော variable ကို ကြိမ်မည်မျှမဆို ထပ်ကြေညာနိုင်သည်:

```javascript
var myName = "Chris";
var myName = "Bob"; // ✅ var မှာ အလုပ်လုပ်သည်
```

**`let` မှာ re-declaration ပြုလုပ်၍ မရ:**

```javascript
let myName = "Chris";
let myName = "Bob"; // ❌ SyntaxError!

// မှန်ကန်သောနည်း:
let myName = "Chris";
myName = "Bob"; // ✅ re-declare မဟုတ်ဘဲ reassign သာ
```

## ဘာကြောင့် `let` ကိုသုံးသင့်သလဲ?

| ပိုင်ဆိုင်မှု | `var` | `let` |
|---|---|---|
| Hoisting | ✅ (အန္တရာယ်ရှိ) | ❌ (ကာကွယ်ပေး) |
| Re-declaration | ✅ (အန္တရာယ်ရှိ) | ❌ (ကာကွယ်ပေး) |
| Scope | Function scope | Block scope |
| Modern JS | ❌ | ✅ |

> ✅ **အကြံပြုချက်:** 2015 ခုနှစ်မှစ၍ modern browser အားလုံးတွင် `let` ကို support လုပ်သည်။ `var` ကိုသုံးရမည့် အကြောင်းရင်း မရှိသောကြောင့် **`let` ကိုသာ သုံးပါ**။

---

**ဆက်လက်လေ့လာရန်:**
- [[declaring-and-initializing]] — Variable ကြေညာခြင်းနှင့် တန်ဖိုးထည့်ခြင်း
- [[constants]] — `const` keyword အကြောင်း
