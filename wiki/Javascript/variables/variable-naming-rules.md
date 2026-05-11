# Variable Naming Rules (နာမည်ပေးသည့် စည်းမျဉ်းများ)

> **Source:** [MDN - Storing the information you need](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)

## မည်သည့် နာမည်မျိုး ပေးနိုင်သလဲ?

Variable ကို နာမည်ပေးရာတွင် **Latin characters (0-9, a-z, A-Z) နှင့် underscore (`_`)** တို့ကိုသာ သုံးသင့်သည်။

## ဘာတွေ ရှောင်ရမည်လဲ?

| စည်းမျဉ်း | မမှန်သောဥပမာ | မှတ်ချက် |
|---|---|---|
| Underscore ဖြင့် မစရ | `_myName` | JS internals တွင် သုံးသောနည်းဖြစ်သည် |
| Number ဖြင့် မစရ | `1myVar` | Syntax Error ဖြစ်မည် |
| Reserved keywords မသုံးရ | `var`, `let`, `function`, `for` | JS ကိုယ်တိုင် သုံးသောစကားလုံးများ |
| အရှည်ကြီးသောနာမည် မသုံးရ | `thisisareallylongvariablenameman` | ဖတ်ရ ခက်ခဲသည် |
| Single letter/number မသုံးရ | `a`, `1` | အဓိပ္ပာယ် မရှင်းလင်း |

## ✅ ကောင်းသောနာမည် ဥပမာများ

```text
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

## ❌ မကောင်းသောနာမည် ဥပမာများ

```text
1          // number ဖြင့် စသည်
a          // အဓိပ္ပာယ်မရှင်း
_12        // underscore ဖြင့် စသည်
myage      // camelCase မဟုတ်ဘဲ lowercase ချည်း
MYAGE      // ALL CAPS မသုံးရ (constants ဟု ထင်မှတ်တတ်သည်)
var        // reserved keyword
Document   // built-in object နှင့် ထပ်သည်
skjfndskjfnbdskjfb  // အဓိပ္ပာယ်မရှိ
```

## Best Practice — lowerCamelCase 🐪

JavaScript တွင် variable naming convention မှာ **lowerCamelCase** ဖြစ်သည်:

- ပထမစကားလုံး → lowercase ချည်း
- နောက်ထပ်စကားလုံး → ပထမဆုံး letter ကို capitalize

```javascript
// lowerCamelCase ✅
let firstName = "Kyaw";
let totalItemCount = 10;
let isUserLoggedIn = true;
let finalOutputValue = 99;
```

## Case Sensitivity (အသေးအကြီး ကွဲပြားမှု)

Variable names တွင် **case sensitive** ဖြစ်သည် — `myage` နှင့် `myAge` သည် **မတူညီသော** variable နှစ်ခုဖြစ်သည်!

```javascript
let myage = 25;
let myAge = 30;

console.log(myage); // 25
console.log(myAge); // 30 — မတူညီသော variable!
```

## Reserved Keywords

`var`, `function`, `let`, `const`, `for`, `if`, `else`, `return`, `class` စသည့် JS keyword များကို variable name အဖြစ် **မသုံးနိုင်**။

> 📖 Reserved keywords များ၏ full list ကို [MDN Lexical Grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) တွင် ကြည့်ပါ။

---

**ဆက်လက်လေ့လာရန်:**
- [[declaring-and-initializing]] — Variable ကြေညာနည်း
- [[variable-types]] — Variable types များ
