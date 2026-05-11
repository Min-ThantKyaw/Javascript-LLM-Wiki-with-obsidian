# Variable ကြေညာခြင်းနှင့် တန်ဖိုးထည့်ခြင်း

> **Source:** [MDN - Storing the information you need](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)

## Declaring (ကြေညာခြင်း)

Variable ကို အသုံးပြုနိုင်ရန် အရင်ဆုံး **ကြေညာ** ရမည် (declare လုပ်ရမည်)။ `let` keyword ကို သုံးပြီး ကြေညာသည်:

```javascript
let myName;
let myAge;
```

ဤ variable နှစ်ခုကို ကြေညာပြီးနောက် console မှာ စစ်ကြည့်လျှင် `undefined` ပြမည် — box ရှိသော်လည်း အတွင်းမှာ ဘာမှ မရှိသေးသောကြောင့်ဖြစ်သည်။

> ⚠️ **မှတ်ချက်:** Variable မရှိခြင်း (not declared) နှင့် Variable ရှိသော်လည်း တန်ဖိုးမရှိခြင်း (`undefined`) သည် မတူညီပါ။

## Initializing (တန်ဖိုးအစပြုထည့်ခြင်း)

ကြေညာပြီးသော variable ထဲ တန်ဖိုး ထည့်ရန် `=` operator ကိုသုံးသည်:

```javascript
myName = "Chris";
myAge = 37;
```

## ကြေညာခြင်းနှင့် တန်ဖိုးထည့်ခြင်း တစ်ပြိုင်နက် (Best Practice ✅)

လက်တွေ့မှာ အများဆုံး သုံးသည့်ပုံစံ — declare နှင့် initialize ကို **တစ်ကြောင်းတည်းဖြင့်** ပြုလုပ်ခြင်း:

```javascript
let myDog = "Rover";
```

ဤပုံစံသည် ပိုတိုတောင်းပြီး ရှင်းလင်းသည်။

## Updating (တန်ဖိုးပြောင်းလဲခြင်း)

Variable ကို initialize လုပ်ပြီးနောက် တန်ဖိုးကို ပြောင်းလဲနိုင်သည်:

```javascript
myName = "Bob";
myAge = 40;
```

> ⚠️ Reassign လုပ်သောအခါ `let` keyword ကို ထပ်မရေးရ — ထပ်ရေးလျှင် error ထွက်မည်။

## Code Semicolons (`;`) အကြောင်း

JavaScript မှာ code instruction တိုင်းကို semicolon (`;`) ဖြင့် အဆုံးသတ်ရသည်။ Single line မှာ အလုပ်လုပ်တတ်သော်လည်း multiple lines ရေးသောအခါ မပါလျှင် ပြဿနာဖြစ်နိုင်သည်။

---

**ဆက်လက်လေ့လာရန်:**
- [[var-vs-let]] — `var` နှင့် `let` ကွာခြားချက်၊ Hoisting
- [[variable-naming-rules]] — Variable နာမည်ပေးသည့် စည်းမျဉ်းများ
- [[what-is-a-variable]] — Variable ဆိုတာ ဘာလဲ?
