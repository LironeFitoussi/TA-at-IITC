export interface SlideContent {
  title: string;
  description: string;
  codeExample?: string;
  challenge?: string;
  solution?: string;
}

export const slides: SlideContent[] = [
  {
    title: 'מבוא למתודות של מערכים ב-JavaScript',
    description: `
      <h2>מה נלמד היום?</h2>
      <ul>
        <li>היכרות עם מערכים ב-JavaScript וכיצד הם פועלים</li>
        <li>סקירה מעמיקה של מתודות מערכים נפוצות ושימושיהן</li>
        <li>הבנת ההבדלים בין המתודות ומתי להשתמש בכל אחת</li>
        <li>דוגמאות קוד מעשיות ויישומים בעולם האמיתי</li>
      </ul>
      <p>בסוף השיעור, תדעו כיצד להשתמש במתודות המערכים כדי לכתוב קוד יעיל, נקי ותחזוקתי יותר.</p>
    `,
  },
  {
    title: 'מתודה: forEach',
    description: `
      <h2>forEach</h2>
      <p>המתודה <code>forEach</code> מאפשרת לחזור על כל אלמנט במערך ולהפעיל פונקציה מסוימת על כל אחד מהם.</p>
      <p><strong>סינטקס:</strong></p>
      <pre><code>array.forEach(function(currentValue, index, array) {
  // קוד לביצוע
});</code></pre>
      <p>דוגמה:</p>
    `,
    codeExample: `
const numbers = [1, 2, 3];
numbers.forEach(function(number) {
  console.log(number);
});
// Output:
// 1
// 2
// 3
    `,
  },
  {
    title: 'תרגיל: forEach',
    description: `
      <h3>תרגיל לכיתה</h3>
      <p>נתון מערך של מספרים. השתמשו ב-<code>forEach</code> כדי לחשב את סכום הריבועים של כל המספרים במערך.</p>
      <p>לדוגמה, עבור המערך <code>[1, 2, 3]</code>, התוצאה צריכה להיות <code>14</code> (1² + 2² + 3²).</p>
    `,
    challenge: `
const numbers = [1, 2, 3];
// כתבו את הקוד כאן
    `,
    solution: `
const numbers = [1, 2, 3];
let sumOfSquares = 0;
numbers.forEach(function(number) {
  sumOfSquares += number * number;
});
console.log(sumOfSquares); // 14
    `,
  },
  {
    title: 'מתודה: map',
    description: `
      <h2>map</h2>
      <p>המתודה <code>map</code> יוצרת מערך חדש על ידי החלת פונקציה על כל אלמנט במערך המקורי.</p>
      <p><strong>סינטקס:</strong></p>
      <pre><code>const newArray = array.map(function(currentValue, index, array) {
  // החזרת ערך חדש
});</code></pre>
      <p>דוגמה:</p>
    `,
    codeExample: `
const numbers = [1, 2, 3];
const doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled); // [2, 4, 6]
    `,
  },
  {
    title: 'תרגיל: map',
    description: `
      <h3>תרגיל לכיתה</h3>
      <p>נתון מערך של מחרוזות המייצגות מספרים, כגון <code>['1', '2', '3']</code>. השתמשו ב-<code>map</code> כדי להמיר את המחרוזות למספרים ולהעלות אותם בחזקת 3.</p>
      <p>התוצאה עבור המערך הנתון צריכה להיות <code>[1, 8, 27]</code>.</p>
    `,
    challenge: `
const stringNumbers = ['1', '2', '3'];
// כתבו את הקוד כאן
    `,
    solution: `
const stringNumbers = ['1', '2', '3'];
const cubes = stringNumbers.map(function(str) {
  const num = Number(str);
  return Math.pow(num, 3);
});
console.log(cubes); // [1, 8, 27]
    `,
  },
  {
    title: 'מתודה: filter',
    description: `
      <h2>filter</h2>
      <p>המתודה <code>filter</code> יוצרת מערך חדש המכיל רק את האלמנטים שעוברים תנאי מסוים.</p>
      <p><strong>סינטקס:</strong></p>
      <pre><code>const newArray = array.filter(function(currentValue, index, array) {
  // החזרת true או false
});</code></pre>
      <p>דוגמה:</p>
    `,
    codeExample: `
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
    `,
  },
  {
    title: 'תרגיל: filter',
    description: `
      <h3>תרגיל לכיתה</h3>
      <p>נתון מערך של אובייקטים המייצגים אנשים, כל אחד עם שם וגיל. סננו את המערך כדי לקבל רק את האנשים שהם מעל גיל 18 ושהשם שלהם מתחיל באות 'A'.</p>
      <p>לדוגמה, עבור המערך:</p>
      <pre><code>
const people = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Anna', age: 19 },
  { name: 'Mike', age: 23 }
];
      </code></pre>
      <p>התוצאה צריכה להיות:</p>
      <pre><code>
[
  { name: 'Alice', age: 22 },
  { name: 'Anna', age: 19 }
]
      </code></pre>
    `,
    challenge: `
// נתון:
const people = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Anna', age: 19 },
  { name: 'Mike', age: 23 }
];
// כתבו את הקוד כאן
    `,
    solution: `
const adultsWithA = people.filter(function(person) {
  return person.age > 18 && person.name.startsWith('A');
});
console.log(adultsWithA);
// [
//   { name: 'Alice', age: 22 },
//   { name: 'Anna', age: 19 }
// ]
    `,
  },
  {
    title: 'מתודה: reduce',
    description: `
      <h2>reduce</h2>
      <p>המתודה <code>reduce</code> מצמצמת מערך לערך יחיד על ידי החלת פונקציה מצטברת על כל אלמנט.</p>
      <p><strong>סינטקס:</strong></p>
      <pre><code>const result = array.reduce(function(accumulator, currentValue, index, array) {
  // החזרת ערך מצטבר חדש
}, initialValue);</code></pre>
      <p>דוגמה:</p>
    `,
    codeExample: `
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(total, number) {
  return total + number;
}, 0);
console.log(sum); // 10
    `,
  },
  {
    title: 'תרגיל: reduce',
    description: `
      <h3>תרגיל לכיתה</h3>
      <p>נתון מערך של מילים. השתמשו ב-<code>reduce</code> כדי ליצור אובייקט שסופר כמה פעמים כל אות מופיעה בכל המילים יחד.</p>
      <p>לדוגמה, עבור המערך <code>['apple', 'banana']</code>, התוצאה צריכה להיות <code>{ a: 5, p: 2, l: 1, e: 1, b: 1, n: 2 }</code>.</p>
    `,
    challenge: `
const words = ['apple', 'banana'];
// כתבו את הקוד כאן
    `,
    solution: `
const letterCount = words.reduce(function(counts, word) {
  word.split('').forEach(function(letter) {
    counts[letter] = (counts[letter] || 0) + 1;
  });
  return counts;
}, {});
console.log(letterCount);
// { a: 5, p: 2, l: 1, e: 1, b: 1, n: 2 }
    `,
  },
  {
    title: 'מתודה: some & every',
    description: `
      <h2>some & every</h2>
      <p><code>some</code> בודקת אם לפחות אלמנט אחד במערך עובר תנאי מסוים ומחזירה <code>true</code> או <code>false</code>.</p>
      <p><code>every</code> בודקת אם כל האלמנטים במערך עוברים תנאי מסוים.</p>
      <p>דוגמה:</p>
    `,
    codeExample: `
const numbers = [2, 4, 6, 7];
const hasOdd = numbers.some(function(number) {
  return number % 2 !== 0;
});
console.log(hasOdd); // true

const allEven = numbers.every(function(number) {
  return number % 2 === 0;
});
console.log(allEven); // false
    `,
  },
  {
    title: 'תרגיל: some & every',
    description: `
      <h3>תרגיל לכיתה</h3>
      <p>נתון מערך של סיסמאות. בדקו אם לפחות סיסמה אחת עומדת בתנאי שהיא כוללת יותר מ-8 תווים ומכילה מספרים ואותיות.</p>
      <p>בנוסף, בדקו אם כל הסיסמאות במערך ייחודיות (אין סיסמאות כפולות).</p>
    `,
    challenge: `
const passwords = ['abc123', 'password1', 'admin', 'passw0rd'];
// כתבו את הקוד כאן
    `,
    solution: `
// בדיקה אם יש סיסמה חזקה אחת לפחות
const hasStrongPassword = passwords.some(function(password) {
  return password.length > 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
});
console.log(hasStrongPassword); // true

// בדיקה אם כל הסיסמאות ייחודיות
const allUnique = passwords.length === new Set(passwords).size;
console.log(allUnique); // true
    `,
  },
  {
    title: 'מתודה: find & findIndex',
    description: `
      <h2>find & findIndex</h2>
      <p><code>find</code> מחזירה את האלמנט הראשון שעובר תנאי מסוים.</p>
      <p><code>findIndex</code> מחזירה את האינדקס של האלמנט הראשון שעובר תנאי מסוים.</p>
      <p>דוגמה:</p>
    `,
    codeExample: `
const users = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 34 },
  { name: 'Charlie', age: 22 }
];

const userOver30 = users.find(function(user) {
  return user.age > 30;
});
console.log(userOver30); // { name: 'Bob', age: 34 }

const indexUnder25 = users.findIndex(function(user) {
  return user.age < 25;
});
console.log(indexUnder25); // 2
    `,
  },
  {
    title: 'תרגיל: find & findIndex',
    description: `
      <h3>תרגיל לכיתה</h3>
      <p>נתון מערך של מוצרים, כל אחד עם שם, מחיר וכמות במלאי. מצאו את המוצר הראשון שאזל מהמלאי (כמות שווה ל-0).</p>
      <p>בנוסף, מצאו את האינדקס של המוצר היקר ביותר במערך.</p>
    `,
    challenge: `
const products = [
  { name: 'Laptop', price: 1500, stock: 5 },
  { name: 'Phone', price: 800, stock: 0 },
  { name: 'Tablet', price: 600, stock: 2 },
  { name: 'Monitor', price: 300, stock: 0 }
];
// כתבו את הקוד כאן
    `,
    solution: `
// מציאת המוצר הראשון שאזל מהמלאי
const outOfStockProduct = products.find(function(product) {
  return product.stock === 0;
});
console.log(outOfStockProduct); // { name: 'Phone', price: 800, stock: 0 }

// מציאת האינדקס של המוצר היקר ביותר
const indexOfMostExpensive = products.findIndex(function(product) {
  return product.price === Math.max(...products.map(p => p.price));
});
console.log(indexOfMostExpensive); // 0
    `,
  },
  {
    title: 'מתודה: sort',
    description: `
      <h2>sort</h2>
      <p>המתודה <code>sort</code> ממיינת את המערך במקום. כברירת מחדל, המיון הוא לפי מחרוזות Unicode.</p>
      <p>כדי למיין מערך מספרים או אובייקטים, יש לספק פונקציית השוואה.</p>
      <p>דוגמה:</p>
    `,
    codeExample: `
const numbers = [10, 5, 8, 1];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 5, 8, 10]
    `,
  },
  {
    title: 'תרגיל: sort',
    description: `
      <h3>תרגיל לכיתה</h3>
      <p>נתון מערך של סטודנטים, כל אחד עם שם וממוצע ציונים. מיינו את המערך כך שהסטודנטים עם הממוצע הגבוה ביותר יהיו בתחילת המערך.</p>
      <p>בנוסף, אם לשני סטודנטים יש את אותו ממוצע, מיינו אותם לפי השם בסדר אלפביתי.</p>
    `,
    challenge: `
const students = [
  { name: 'Daniel', average: 85 },
  { name: 'Anna', average: 92 },
  { name: 'Ben', average: 85 },
  { name: 'Clara', average: 95 }
];
// כתבו את הקוד כאן
    `,
    solution: `
students.sort(function(a, b) {
  if (b.average !== a.average) {
    return b.average - a.average;
  } else {
    return a.name.localeCompare(b.name);
  }
});
console.log(students);
/*
[
  { name: 'Clara', average: 95 },
  { name: 'Anna', average: 92 },
  { name: 'Ben', average: 85 },
  { name: 'Daniel', average: 85 }
]
*/
    `,
  },
  {
    title: 'מתודה: flat',
    description: `
      <h2>flat</h2>
      <p>המתודה <code>flat</code> מיישרת מערכים מקוננים עד לעומק מסוים.</p>
      <p>דוגמה:</p>
    `,
    codeExample: `
const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, [4]]
    `,
  },
  {
    title: 'תרגיל: flat',
    description: `
      <h3>תרגיל לכיתה</h3>
      <p>נתון מערך של מערכים המכילים מספרים. יישרו את המערך לחלוטין (כל הרמות) וחישבו את הסכום של כל המספרים.</p>
      <p>לדוגמה, עבור המערך <code>[1, [2, [3, [4, [5]]]]]</code>, התוצאה צריכה להיות <code>15</code>.</p>
    `,
    challenge: `
const nestedNumbers = [1, [2, [3, [4, [5]]]]];
// כתבו את הקוד כאן
    `,
    solution: `
const flatNumbers = nestedNumbers.flat(Infinity);
const sum = flatNumbers.reduce(function(total, number) {
  return total + number;
}, 0);
console.log(sum); // 15
    `,
  },
  {
    title: 'סיכום ושאלות',
    description: `
      <h2>סיכום</h2>
      <p>היום למדנו על מגוון מתודות לעבודה עם מערכים ב-JavaScript:</p>
      <ul>
        <li><strong>forEach</strong> – לחזרה על אלמנטים וביצוע פעולה.</li>
        <li><strong>map</strong> – ליצירת מערך חדש עם ערכים מעובדים.</li>
        <li><strong>filter</strong> – לסינון מערכים לפי תנאים.</li>
        <li><strong>reduce</strong> – לצמצום מערך לערך יחיד.</li>
        <li><strong>some</strong> ו-<strong>every</strong> – לבדיקת תנאים על אלמנטים.</li>
        <li><strong>find</strong> ו-<strong>findIndex</strong> – למציאת אלמנטים לפי תנאים.</li>
        <li><strong>sort</strong> – למיון מערכים.</li>
        <li><strong>flat</strong> – ליישור מערכים מקוננים.</li>
      </ul>
      <p>מתודות אלו יעזרו לכם לכתוב קוד יעיל ונקי יותר בעת עבודה עם מערכים.</p>
      <h3>שאלות?</h3>
      <p>נשמח לענות על כל שאלה או לספק דוגמאות נוספות.</p>
    `,
  },
  {
    title: 'עוד משהו אחרון',
    description: `
      <ol dir="rtl" style="text-align: right;">
  <li>השתמשו ב-forEach כדי להדפיס כל איבר במערך [1, 2, 3, 4, 5] למסוף.</li>
  <li>השתמשו ב-forEach כדי להכפיל כל מספר במערך [1, 2, 3, 4, 5] ולהדפיס את התוצאות.</li>
  <li>השתמשו ב-forEach כדי ליצור מערך חדש עם הריבועים של המספרים ב-[1, 2, 3, 4, 5].</li>
  <li>השתמשו ב-forEach כדי לסכום את כל המספרים במערך [1, 2, 3, 4, 5].</li>
  <li>השתמשו ב-forEach כדי לחבר את כל המחרוזות במערך ['Hello', ' ', 'World', '!'].</li>
  <li>השתמשו ב-map כדי ליצור מערך חדש עם כל מספר ב-[1, 2, 3, 4, 5] מוכפל ב-2.</li>
  <li>השתמשו ב-map כדי ליצור מערך חדש עם אורך כל מילה ב-['תפוח', 'בננה', 'דובדבן'].</li>
  <li>השתמשו ב-map כדי ליצור מערך חדש עם השורש הריבועי של כל מספר ב-[1, 4, 9, 16, 25].</li>
  <li>השתמשו ב-map כדי ליצור מערך חדש עם כל מחרוזת ב-['שלום', 'עולם'] מועברת לאותיות גדולות.</li>
  <li>השתמשו ב-map כדי ליצור מערך חדש עם כל בוליאני ב-[true, false, true] הפוך.</li>
  <li>השתמשו ב-filter כדי ליצור מערך חדש רק עם המספרים הזוגיים מ-[1, 2, 3, 4, 5, 6].</li>
  <li>השתמשו ב-filter כדי ליצור מערך חדש רק עם המחרוזות הארוכות מ-5 תווים מ-['תפוח', 'בננה', 'דובדבן', 'תמר', 'אלדרברי'].</li>
  <li>השתמשו ב-filter כדי ליצור מערך חדש רק עם המספרים הגדולים מ-10 מ-[5, 10, 15, 20, 25].</li>
  <li>השתמשו ב-filter כדי ליצור מערך חדש רק עם המחרוזות שמתחילות ב-'ת' מ-['תפוח', 'בננה', 'תפוז', 'דובדבן'].</li>
  <li>השתמשו ב-filter כדי ליצור מערך חדש רק עם האיברים במיקום זוגי מ-[1, 2, 3, 4, 5, 6].</li>
  <li>השתמשו ב-reduce כדי לסכם את כל המספרים במערך [1, 2, 3, 4, 5].</li>
  <li>השתמשו ב-reduce כדי למצוא את המכפלה של כל המספרים במערך [1, 2, 3, 4, 5].</li>
  <li>השתמשו ב-reduce כדי למצוא את המספר הגדול ביותר במערך [10, 5, 15, 20, 25].</li>
  <li>השתמשו ב-reduce כדי לחבר את כל המחרוזות במערך ['שלום', ' ', 'עולם', '!'].</li>
  <li>השתמשו ב-reduce כדי לספור את מספר ההופעות של כל מספר ב-[1, 2, 2, 3, 3, 3, 4, 4, 4, 4].</li>
  <li>השתמשו ב-some כדי לבדוק אם יש מספר כלשהו ב-[1, 2, 3, 4, 5] שגדול מ-3.</li>
  <li>השתמשו ב-every כדי לבדוק אם כל המספרים ב-[2, 4, 6, 8, 10] זוגיים.</li>
  <li>השתמשו ב-some כדי לבדוק אם יש מחרוזת כלשהי ב-['תפוח', 'בננה', 'דובדבן'] שארוכה מ-6 תווים.</li>
  <li>השתמשו ב-every כדי לבדוק אם כל המחרוזות ב-['חתול', 'כלב', 'פיל'] מתחילות בעיצור.</li>
  <li>השתמשו ב-some כדי לבדוק אם יש ערך אמת כלשהו ב-[false, false, true, false].</li>
  <li>השתמשו ב-find כדי למצוא את המספר הראשון שגדול מ-3 ב-[1, 2, 3, 4, 5].</li>
  <li>השתמשו ב-findIndex כדי למצוא את האינדקס של המספר הזוגי הראשון ב-[1, 3, 5, 2, 4, 6].</li>
  <li>השתמשו ב-find כדי למצוא את המחרוזת הראשונה שארוכה מ-5 תווים ב-['תפוח', 'בננה', 'דובדבן'].</li>
  <li>השתמשו ב-findIndex כדי למצוא את האינדקס של 'דובדבן' ב-['תפוח', 'בננה', 'דובדבן', 'תמר'].</li>
  <li>השתמשו ב-find כדי למצוא את המספר השלילי הראשון ב-[1, 2, 3, -4, 5, -6].</li>
  <li>השתמשו ב-sort כדי למיין את המערך [3, 1, 4, 1, 5, 9, 2, 6, 5] בסדר עולה.</li>
  <li>השתמשו ב-sort כדי למיין את המערך ['בננה', 'דובדבן', 'תפוח', 'תמר'] בסדר אלפביתי.</li>
  <li>השתמשו ב-sort כדי למיין את המערך [3, 1, 4, 1, 5, 9, 2, 6, 5] בסדר יורד.</li>
  <li>השתמשו ב-sort כדי למיין את המערך ['בננה', 'דובדבן', 'תפוח', 'תמר'] לפי אורך (מהקצר לארוך).</li>
  <li>השתמשו ב-sort כדי למיין את המערך [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}] לפי גיל.</li>
  <li>השתמשו ב-flat כדי לשטח את המערך [1, [2, 3], [4, [5, 6]]].</li>
  <li>השתמשו ב-flat עם עומק של 2 על המערך [1, [2, [3, [4]]]].</li>
  <li>השתמשו ב-flat כדי להסיר חללים ריקים מהמערך [1, 2, , 4, 5].</li>
  <li>השתמשו ב-flat על המערך ['א', ['ב', 'ג'], 'ד'] והדפיסו את התוצאה.</li>
  <li>השתמשו ב-flat עם אינסוף כעומק על [1, [2, [3, [4, [5]]]]].</li>
  <li>השתמשו ב-forEach כדי להדפיס את האינדקס והערך של כל איבר ב-['א', 'ב', 'ג', 'ד'].</li>
  <li>השתמשו ב-map כדי ליצור מערך של אובייקטים עם מאפייני 'index' ו-'value' מ-[10, 20, 30, 40].</li>
  <li>השתמשו ב-filter כדי ליצור מערך של מחרוזות שמכילות את האות 'א' מ-['תפוח', 'בננה', 'אבטיח', 'תמר'].</li>
  <li>השתמשו ב-reduce כדי ליצור אובייקט שבו המפתחות הם איברי המערך והערכים הם מספר ההופעות שלהם ב-['א', 'ב', 'א', 'ג', 'ב', 'א'].</li>
  <li>השתמשו ב-some כדי לבדוק אם יש מחרוזת כלשהי ב-['שלום', 'עולם', 'ג'אווהסקריפט'] שמכילה את האות 'ז'.</li>
  <li>השתמשו ב-every כדי לבדוק אם כל המספרים ב-[2, 4, 6, 8] מתחלקים ב-2.</li>
  <li>השתמשו ב-find כדי למצוא את האובייקט הראשון עם סטטוס 'פעיל' ב-[{id: 1, status: 'לא פעיל'}, {id: 2, status: 'פעיל'}].</li>
  <li>השתמשו ב-findIndex כדי למצוא את האינדקס של המספר הראשון שקטן מאפס ב-[3, 7, -2, 9, -5].</li>
  <li>השתמשו ב-sort כדי למיין את המערך ['JavaScript', 'Python', 'Ruby', 'Java'] לפי אורך המחרוזות (מהארוך לקצר).</li>
  <li>השתמשו ב-flat על המערך [1, [2, [3]], [4, [5]]] עם עומק של 1.</li>
  <li>השתמשו ב-forEach כדי ליצור מחרוזת מהמערך ['ש', 'ל', 'ו', 'ם'].</li>
  <li>השתמשו ב-map כדי ליצור מערך שבו כל מספר ב-[1, 2, 3, 4, 5] מוגדל ב-10.</li>
  <li>השתמשו ב-filter כדי ליצור מערך של מספרים שמתחלקים ב-3 מ-[1, 2, 3, 4, 5, 6, 7, 8, 9].</li>
  <li>השתמשו ב-reduce כדי למצוא את המחרוזת הארוכה ביותר ב-['קצר', 'בינוני', 'הכי ארוך', 'ארוך יותר'].</li>
  <li>השתמשו ב-some כדי לבדוק אם יש מספר זוגי כלשהו ב-[1, 3, 5, 7, 9].</li>
  <li>השתמשו ב-every כדי לבדוק אם כל המחרוזות ב-['תפוח', 'תפ', 'תפוז'] מתחילות ב-'תפ'.</li>
  <li>השתמשו ב-find כדי למצוא את האובייקט הראשון עם מאפיין 'completed' שערכו true ב-[{id: 1, completed: false}, {id: 2, completed: true}].</li>
  <li>השתמשו ב-findIndex כדי למצוא את האינדקס של 'בננה' ב-['תפוח', 'בננה', 'דובדבן'].</li>
  <li>השתמשו ב-sort כדי למיין את המערך [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}] לפי שם בסדר אלפביתי.</li>
  <li>השתמשו ב-flat על המערך [1, [2, 3], [4, [5, 6]]] עם עומק של 2.</li>
  <li>השתמשו ב-forEach כדי להדפיס כל תו במחרוזת 'שלום' למסוף.</li>
  <li>השתמשו ב-map כדי ליצור מערך של האותיות הראשונות של כל מילה ב-['תפוח', 'בננה', 'דובדבן'].</li>
  <li>השתמשו ב-filter כדי ליצור מערך של מחרוזות עם יותר מ-3 תווים מ-['א', 'אב', 'אבג', 'אבגד'].</li>
  <li>השתמשו ב-reduce כדי לספור את סך כל התווים ב-['תפוח', 'בננה', 'דובדבן'].</li>
  <li>השתמשו ב-some כדי לבדוק אם יש מחרוזת כלשהי ב-['שלום', 'עולם', 'ג'אווהסקריפט'] שיש בה יותר מ-10 תווים.</li>
  <li>השתמשו ב-every כדי לבדוק אם כל המספרים ב-[10, 20, 30, 40, 50] גדולים מ-5.</li>
  <li>השתמשו ב-find כדי למצוא את המחרוזת הראשונה שמכילה 'וו' ב-['ספר', 'דלת', 'חלון'].</li>
  <li>השתמשו ב-findIndex כדי למצוא את האינדקס של המספר הראשון שגדול מ-10 ב-[5, 10, 15, 20].</li>
  <li>השתמשו ב-sort כדי למיין את המערך ['אאא', 'בב', 'ג'] לפי מספר התווים (בסדר עולה).</li>
  <li>השתמשו ב-flat על המערך [1, [2, [3, [4]]]] עם עומק של 3.</li>
  <li>השתמשו ב-forEach כדי ליצור מערך של שורשי הריבוע של המספרים ב-[1, 4, 9, 16].</li>
  <li>השתמשו ב-map כדי ליצור מערך שבו כל מחרוזת ב-['א', 'ב', 'ג'] מופיעה פעמיים.</li>
  <li>השתמשו ב-filter כדי ליצור מערך של מספרים בין 10 ל-20 מ-[5, 10, 15, 20, 25].</li>
  <li>השתמשו ב-reduce כדי ליצור אובייקט אחד מ-[{א: 1}, {ב: 2}, {ג: 3}].</li>
  <li>השתמשו ב-some כדי לבדוק אם יש אובייקט כלשהו ב-[{x: 1}, {y: 2}, {z: 3}] שיש לו מאפיין 'y'.</li>
  <li>השתמשו ב-every כדי לבדוק אם כל המחרוזות ב-['א1', 'ב2', 'ג3'] מכילות גם אות וגם מספר.</li>
  <li>השתמשו ב-find כדי למצוא את האובייקט הראשון עם 'מחיר' פחות מ-50 ב-[{מחיר: 60}, {מחיר: 40}, {מחיר: 70}].</li>
  <li>השתמשו ב-findIndex כדי למצוא את האינדקס של הערך הלא אמיתי הראשון ב-[1, '', true, 0, null, 'שלום'].</li>
  <li>השתמשו ב-sort כדי למיין את המערך [3.14, 2.71, 1.41, 1.73] בסדר עולה.</li>
  <li>השתמשו ב-flat על המערך ['א', ['ב', ['ג']]] עם אינסוף כעומק.</li>
  <li>השתמשו בשילוב של filter ו-map כדי ליצור מערך של הריבועים של המספרים הזוגיים מ-[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].</li>
  <li>השתמשו ב-reduce כדי לקבץ מערך של אובייקטים לפי מאפיין מסוים. לדוגמה: קבצו את [{שם: 'אליס', גיל: 25}, {שם: 'בוב', גיל: 30}, {שם: 'צ'רלי', גיל: 25}] לפי גיל.</li>
  <li>יישמו פונקציית דחיית ביצוע (debounce) פשוטה באמצעות setTimeout והשתמשו בה עם forEach על מערך של פונקציות.</li>
  <li>השתמשו ב-map ו-Promise.all כדי לאחזר נתונים ממספר כתובות URL (תוכלו להשתמש בכתובות דמה).</li>
  <li>יישמו פונקציית זכרון (memoization) פשוטה והשתמשו בה עם map על מערך של מספרים כדי לחשב מספרי פיבונאצ'י.</li>
  <li>השתמשו ב-reduce כדי ליישם גרסה פשוטה של Promise.all.</li>
  <li>יישמו פונקציה שמשתמשת ב-sort ו-reduce כדי למצוא את החציון של מערך מספרים.</li>
  <li>השתמשו בשילוב של map ו-reduce כדי לשטח מערך של מערכים תוך כדי החלת טרנספורמציה על כל איבר.</li>
  <li>יישמו פונקציה שמשתמשת ב-reduce כדי להרכיב פונקציות. לאחר מכן השתמשו בה עם map על מערך של מספרים.</li>
  <li>השתמשו ב-filter ו-reduce כדי ליישם גרסה פשוטה של Array.prototype.groupBy (זמין בחלק מהדפדפנים המודרניים).</li>
  <li>יישמו פונקציה שמשתמשת ב-sort ו-reduce כדי למצוא את השכיח (האיבר הנפוץ ביותר) במערך.</li>
  <li>השתמשו ב-reduce כדי ליישם גרסה פשוטה של flatMap.</li>
  <li>יישמו פונקציה שמשתמשת בשילוב של map, filter, ו-reduce כדי לבצע טרנספורמציה מורכבת על מערך של אובייקטים.</li>
  <li>השתמשו ב-reduce כדי ליישם גרסה פשוטה של Array.prototype.reduceRight.</li>
  <li>יישמו פונקציה שמשתמשת ב-sort עם פונקציית השוואה מותאמת אישית כדי למיין מערך של אובייקטים על פי מספר קריטריונים.</li>
  <li>השתמשו בשילוב של filter, map, ו-reduce כדי ליישם שפת שאילתות פשוטה עבור מערך של אובייקטים.</li>
  <li>יישמו פונקציה שמשתמשת ב-reduce כדי ליצור מבנה נתונים מסוג עץ תחיליות (trie) ממערך של מילים.</li>
  <li>השתמשו בשילוב של map ו-reduce כדי ליישם גרסה פשוטה של Array.prototype.flat עם עומק הניתן להתאמה.</li>
  <li>יישמו פונקציה שמשתמשת ב-reduce כדי ליצור עץ חיפוש בינארי מאוזן ממערך ממוין.</li>
  <li>השתמשו בשילוב של כל שיטות המערך שלמדתם כדי ליישם פונקציית sumif פשוטה דמוית גיליון אלקטרוני על מערך של אובייקטים.</li>
</ol>
    `,
    
  }
];
