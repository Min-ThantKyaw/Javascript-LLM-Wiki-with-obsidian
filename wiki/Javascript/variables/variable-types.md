# Variable Types (Data Types)

> **Source:** [MDN - Storing the information you need](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)

## JavaScript တွင် Data Types များ

Variable ထဲတွင် သိမ်းနိုင်သည့် data types အဓိကမှာ အောက်ပါ ၅ မျိုးဖြစ်သည်:

---

## 1. Numbers

Integer (ကိန်းဂဏန်း) သို့မဟုတ် Float (ဒသမကိန်း) ကိုသိမ်းနိုင်သည်။ Quotes မထည့်ဘဲ တန်ဖိုး ရိုက်ထည့်သည်:

```javascript
let myAge = 17;        // integer
let price = 9.99;      // float
```

---

## 2. Strings

Text data ကိုသိမ်းသည်။ တန်ဖိုးကို single quote (`'`) သို့မဟုတ် double quote (`"`) ဖြင့် ပတ်ရမည်:

```javascript
let dolphinGoodbye = "So long and thanks for all the fish";
let name = 'Kyaw';
```

> ⚠️ Quotes မသုံးလျှင် JS မှ variable name ဟု ထင်မှတ်ပြီး error ထွက်မည်။

---

## 3. Booleans

`true` သို့မဟုတ် `false` ဆိုသော တန်ဖိုး နှစ်ခုသာ ရှိသည်။ Condition စစ်ဆေးရာတွင် အသုံးများသည်:

```javascript
let iAmAlive = true;
let test = 6 < 3;   // false — 6 သည် 3 ထက် မငယ်သောကြောင့်
```

---

## 4. Arrays

Multiple values ကို **single variable** ထဲ သိမ်းနိုင်သည်။ Square brackets `[]` ဖြင့် ပတ်ပြီး comma ဖြင့် ခွဲသည်:

```javascript
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
```

Array ထဲမှ item တစ်ခုကို **index** (0 မှ စတင်) ဖြင့် ရယူသည်:

```javascript
myNameArray[0];   // "Chris"
myNameArray[2];   // "Jim"
myNumberArray[2]; // 40
```

> 💡 Arrays တွင် **zero-indexed** — ပထမဆုံး element သည် index `0` ဖြစ်သည်။

---

## 5. Objects

Real-world object တစ်ခုကို model ထုတ်ရန် သုံးသည်။ Curly braces `{}` ဖြင့် ပတ်ပြီး `key: value` pairs ဖြင့် ဖွဲ့စည်းသည်:

```javascript
let dog = { name: "Spot", breed: "Dalmatian" };
```

Object ထဲမှ တန်ဖိုးကို **dot notation** ဖြင့် ရယူသည်:

```javascript
dog.name;   // "Spot"
dog.breed;  // "Dalmatian"
```

---

## Data Types အနှစ်ချုပ်ဇယား

| Type | ဥပမာ | မှတ်ချက် |
|---|---|---|
| Number | `let x = 42;` | Integer သို့မဟုတ် Float |
| String | `let s = "hello";` | Quotes နှင့် ပတ်ရမည် |
| Boolean | `let b = true;` | `true` / `false` သာ |
| Array | `let a = [1, 2, 3];` | Zero-indexed |
| Object | `let o = { key: val };` | Key-value pairs |

---

**ဆက်လက်လေ့လာရန်:**
- [[dynamic-typing]] — JavaScript ၏ Dynamic Typing အကြောင်း
- [[declaring-and-initializing]] — Variable ကြေညာနည်း
