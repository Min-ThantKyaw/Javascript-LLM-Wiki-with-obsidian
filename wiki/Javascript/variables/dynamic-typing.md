# Dynamic Typing

> **Source:** [MDN - Storing the information you need](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)

## Dynamic Typing ဆိုတာဘာလဲ?

JavaScript သည် **"dynamically typed language"** ဖြစ်သည်။ ဆိုလိုသည်မှာ — variable ကို declare လုပ်သောအခါ **data type ကို ကြိုတင်ဖော်ပြစရာ မလိုဘဲ** browser မှ အလိုအလျောက် ဆုံးဖြတ်ပေးသည်။

Java, C# ကဲ့သို့ **statically typed** language တွေနှင့် နှိုင်းယှဉ်ကြည့်ပါ:

```javascript
// Java (statically typed) — type ကို ကြိုတင်ပြောရသည်
// int myAge = 25;
// String name = "Kyaw";

// JavaScript (dynamically typed) — type ကို မပြောဘဲ ရသည်
let myAge = 25;
let name = "Kyaw";
```

## `typeof` Operator

Variable ၏ data type ကို စစ်ဆေးနိုင်သည်:

```javascript
let myNumber = "500"; // string အဖြစ် သတ်မှတ်ထားသည်
typeof myNumber;      // "string"

myNumber = 500;       // ယခု number ဖြစ်သွားသည်
typeof myNumber;      // "number"
```

## ဂရုစိုက်ရမည့် အချက်

Quotes ဖြင့် ပတ်ထားသော digits သည် **number မဟုတ်ဘဲ string** ဖြစ်သည်:

```javascript
let myNumber = "500"; // ⚠️ ဒါသည် string — number မဟုတ်ဘူး!
typeof myNumber;      // "string"

myNumber = 500;       // ✅ ဒါမှ number ဖြစ်မည်
typeof myNumber;      // "number"
```

ဤကဲ့သို့ mistake သည် calculation ပြုလုပ်ရာတွင် bug ဖြစ်စေနိုင်သည်:

```javascript
let a = "5";
let b = 3;
console.log(a + b); // "53" — number မဟုတ်ဘဲ string concatenation ဖြစ်သွားသည်!

let c = 5;
console.log(c + b); // 8  — မှန်ကန်သောနည်း ✅
```

## Dynamic Typing ၏ ကောင်းချက်နှင့် ဆိုးချက်

| ကောင်းချက် | ဆိုးချက် |
|---|---|
| ရေးရ လွယ်ကူပြေပျော့သည် | Type bug ဖြစ်တတ်သည် |
| Prototype အဆင့်တွင် ကောင်းသည် | Large project တွင် ထိန်းရ ခက်ချင်သည် |
| — | TypeScript ကိုသုံး ဖြေရှင်းနိုင်သည် |

> 💡 **Next Step:** TypeScript ကို ကျော်သွားမည်ဆိုလျှင် Type system ကို ကြိုတင်ကြေညာနိုင်ပြီး dynamic typing bug များကို ကာကွယ်နိုင်သည်။

---

**ဆက်လက်လေ့လာရန်:**
- [[variable-types]] — Data types ၅ မျိုး
- [[constants]] — `const` keyword
