# Variable ဆိုတာ ဘာလဲ?

> **Source:** [MDN - Storing the information you need](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)

## အဓိပ္ပာယ်

Variable ဆိုသည်မှာ **တန်ဖိုးတစ်ခုသိမ်းဆည်းရန် container တစ်ခု** ဖြစ်သည်။ ဥပမာ — ကြွေးတွက်ရာတွင် သုံးမည့် number တစ်ခု၊ သို့မဟုတ် sentence တစ်ခုတွင် ထည့်မည့် string တစ်ခု ဖြစ်နိုင်သည်။

Variable တွေကို cardboard box လေးတွေလိုမျိုး သဘောထားနိုင်သည် — box ထဲမှာ မည်သည့်တန်ဖိုးမဆို သိမ်းထားနိုင်သည်၊ box ကို ဖွင့်ပြီး အင်တိုးလည်းလုပ်နိုင်သည်။

> ⚠️ **မှတ်ချက်:** Variable တွေသည် တန်ဖိုး**ကိုယ်တိုင်** မဟုတ်ဘူး — တန်ဖိုးကို **သိမ်းသည့် container** သာဖြစ်သည်။

## Variable မပါဘဲ vs Variable ပါဘဲ နှိုင်းယှဉ်ကြည့်ခြင်း

**Variable မပါဘဲ** (ပြဿနာ):

```javascript
const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
  buttonB.textContent = "Try again!";
  headingB.textContent = "1 click so far";
};
```

ဒီ code မှာ click count ကို မမှတ်မိနိုင်ဘူး — ဘယ်နှစ်ကြိမ် နှိပ်နှိပ် `"1 click so far"` ဆိုတာ ပဲ ပြနေမည်။

**Variable ပါဘဲ** (ဖြေရှင်းချက်):

```javascript
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let count = 1;

buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};
```

`count` variable ကြောင့် click တစ်ချက်တိုင်း တန်ဖိုး update ဖြစ်သွားနိုင်သည်။

## Variable ထဲမှာ ဘာတွေ သိမ်းနိုင်သလဲ?

Variable တွေသည် ပြောင်းလွယ်ပြင်လွယ်ဆုံး feature တစ်ခုဖြစ်သည် — အောက်ပါတို့ကို သိမ်းနိုင်သည်:

- Numbers, Strings, Booleans
- Arrays, Objects
- Function တွေပင်မပါ!

---

**ဆက်လက်လေ့လာရန်:**
- [[declaring-and-initializing]] — Variable ကို ဘယ်လို ကြေညာပြီး တန်ဖိုး ထည့်မလဲ
- [[variable-types]] — Variable ထဲ သိမ်းနိုင်သည့် data types များ
