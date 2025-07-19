export interface SlideContent {
  title: string;
  description: string;
  codeExample?: string;
  challenge?: string;
  solution?: string;
  otherCode?: {
    lang: string;
    code: string;
  };
}

export const slides: SlideContent[] = [
  {
    title: 'מבוא לפונקציות מסדר ראשון ופונקציות מסדר גבוה ב-JavaScript',
    description: `
      <h2>מה נלמד היום?</h2>
      <ul>
        <li>מהן פונקציות מסדר ראשון (First-Class Functions)?</li>
        <li>השוואה עם שפת C שבה פונקציות אינן ערכים מסדר ראשון</li>
        <li>מהן פונקציות מסדר גבוה (Higher-Order Functions)?</li>
        <li>דוגמאות ויישומים של פונקציות מסדר ראשון ומסדר גבוה</li>
        <li>מושגים קשורים: סגירות (Closures) וקרי פונקציות (Function Currying)</li>
      </ul>
      <p>בסוף השיעור, תבינו את החשיבות והיתרונות של פונקציות מסדר ראשון ומסדר גבוה ב-JavaScript.</p>
    `,
  },
  {
    title: 'פונקציות מסדר ראשון - הגדרה',
    description: `
      <h2>פונקציות מסדר ראשון (First-Class Functions)</h2>
      <p>ב-JavaScript, פונקציות הן "אזרחים מסדר ראשון". זה אומר שפונקציות הן ערכים שניתן:</p>
      <ul>
        <li>לשמור אותן במשתנים</li>
        <li>להעביר אותן כארגומנטים לפונקציות אחרות</li>
        <li>להחזיר אותן מפונקציות</li>
        <li>לאחסן אותן במבני נתונים כמו מערכים או אובייקטים</li>
      </ul>
      <p>בקיצור, כל מה שניתן לעשות עם ערכים "רגילים" כמו מספרים או מחרוזות, ניתן לעשות גם עם פונקציות!</p>
    `,
    codeExample: `
// שמירת פונקציה במשתנה
const greeting = function(name) {
  console.log("שלום, " + name + "!");
};

// שימוש בפונקציה
greeting("עולם"); // מדפיס: שלום, עולם!

// העברת פונקציה כארגומנט
function runTwice(func) {
  func();
  func();
}

runTwice(function() { console.log("פעולה!"); });
// מדפיס:
// פעולה!
// פעולה!
    `,
  },
  {
    title: 'השוואה עם שפת C',
    description: `
      <h2>פונקציות ב-C לעומת JavaScript</h2>
      <p>בשפת C, פונקציות אינן ערכים מסדר ראשון. הבדל זה משפיע משמעותית על הגמישות של הקוד.</p>
      <p>הסבר: ב-C, אנחנו מגדירים פונקציה <code>greet</code> ומשתמשים בה ישירות. אין אפשרות לשמור אותה במשתנה או להעביר אותה כארגומנט בקלות.</p>
      
      <h3>אותה דוגמה ב-JavaScript:</h3>
    `,
    otherCode: {
      lang: 'c',
      code: `
      #include <stdio.h>

          void greet(const char* name) {
              printf("שלום, %s!", name);
          }

          int main() {
              greet("עולם");
              return 0;
          }
      `,
    },

    codeExample: `
// הגדרת הפונקציה
function greet(name) {
  console.log("שלום, " + name + "!");
}

// שימוש ישיר בפונקציה
greet("עולם");

// שמירת הפונקציה במשתנה
const greetFunc = greet;
greetFunc("JavaScript");

// העברת הפונקציה כארגומנט
function runFunction(func, arg) {
  func(arg);
}
runFunction(greet, "פונקציות מסדר ראשון");
    `,
  },
  {
    title: 'יתרונות פונקציות מסדר ראשון',
    description: `
      <h2>למה פונקציות מסדר ראשון חשובות?</h2>
      <ul>
        <li><strong>גמישות:</strong> מאפשרות כתיבת קוד מודולרי ורב-שימושי יותר.</li>
        <li><strong>תכנות פונקציונלי:</strong> מאפשרות שימוש בטכניקות תכנות פונקציונלי.</li>
        <li><strong>קוד נקי יותר:</strong> מפחיתות כפילויות ומייעלות את הקוד.</li>
        <li><strong>מופשטות:</strong> מאפשרות הפשטה של פעולות ויצירת APIs גמישים יותר.</li>
      </ul>
      <p>דוגמה לגמישות:</p>
    `,
    codeExample: `
// פונקציה שמקבלת פונקציה אחרת כארגומנט
function operate(func, a, b) {
  return func(a, b);
}

// פונקציות פשוטות לחישובים
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(add, 5, 3));      // 8
console.log(operate(multiply, 5, 3)); // 15

// ניתן להשתמש גם בפונקציות אנונימיות
console.log(operate((x, y) => x - y, 5, 3)); // 2
    `,
  },
  {
    title: 'פונקציות מסדר גבוה - הגדרה',
    description: `
      <h2>פונקציות מסדר גבוה (Higher-Order Functions)</h2>
      <p>פונקציות מסדר גבוה הן פונקציות אשר מקיימות לפחות אחד מהתנאים הבאים:</p>
      <ul>
        <li>מקבלות פונקציה אחת או יותר כארגומנט</li>
        <li>מחזירות פונקציה כתוצאה</li>
      </ul>
      <p>פונקציות מסדר גבוה מאפשרות הפשטה של פעולות ויצירת קוד גנרי וגמיש יותר.</p>
    `,
    codeExample: `
// פונקציה מסדר גבוה שמקבלת פונקציה כארגומנט
function applyOperation(x, y, operation) {
  return operation(x, y);
}

// שימוש בפונקציה מסדר גבוה
const result1 = applyOperation(5, 3, (a, b) => a + b);
console.log(result1); // 8

const result2 = applyOperation(5, 3, (a, b) => a * b);
console.log(result2); // 15

// פונקציה מסדר גבוה שמחזירה פונקציה
function multiply(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
    `,
  },
  {
    title: 'דוגמאות לפונקציות מסדר גבוה ב-JavaScript',
    description: `
      <h2>פונקציות מסדר גבוה נפוצות ב-JavaScript</h2>
      <p>JavaScript מספקת מספר פונקציות מסדר גבוה מובנות לעבודה עם מערכים:</p>
      <ul>
        <li><code>map()</code>: מבצעת טרנספורמציה על כל איבר במערך</li>
        <li><code>filter()</code>: מסננת איברים במערך לפי תנאי</li>
        <li><code>reduce()</code>: מצמצמת מערך לערך יחיד</li>
        <li><code>forEach()</code>: מבצעת פעולה על כל איבר במערך</li>
      </ul>
      <p>דוגמאות לשימוש:</p>
    `,
    codeExample: `
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]

// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// forEach
numbers.forEach(x => console.log(x));
// מדפיס:
// 1
// 2
// 3
// 4
// 5
    `,
  },
  {
    title: 'סגירות (Closures)',
    description: `
      <h2>סגירות (Closures)</h2>
      <p>סגירה היא שילוב של פונקציה יחד עם הסביבה הלקסיקלית שלה. במילים אחרות, סגירה מאפשרת לפונקציה פנימית לגשת למשתנים של הפונקציה החיצונית שלה.</p>
      <p>סגירות הן תוצאה ישירה של פונקציות מסדר ראשון ומאפשרות יצירת פונקציות עם "זיכרון".</p>
    `,
    codeExample: `
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// הפונקציה הפנימית שומרת גישה למשתנה count
// גם אחרי שהפונקציה החיצונית סיימה את ריצתה
    `,
  },
  {
    title: 'קרי פונקציות (Function Currying)',
    description: `
      <h2>קרי פונקציות (Function Currying)</h2>
      <p>קרי הוא טכניקה של המרת פונקציה עם מספר ארגומנטים לסדרה של פונקציות, שכל אחת מקבלת ארגומנט יחיד.</p>
      <p>זוהי טכניקה מתקדמת שמנצלת את היכולת של JavaScript ליצור ולהחזיר פונקציות.</p>
    `,
    codeExample: `
// פונקציה רגילה
function add(x, y, z) {
  return x + y + z;
}

// גרסה מקוררית של הפונקציה
function curriedAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

console.log(add(1, 2, 3)); // 6
console.log(curriedAdd(1)(2)(3)); // 6

// שימוש חלקי בפונקציה מקוררית
const add1 = curriedAdd(1);
const add1and2 = add1(2);
console.log(add1and2(3)); // 6
    `,
  },
  {
    title: 'סיכום ויתרונות',
    description: `
      <h2>סיכום: למה פונקציות מסדר ראשון ומסדר גבוה חשובות?</h2>
      <ul>
        <li><strong>גמישות:</strong> מאפשרות כתיבת קוד מודולרי ורב-שימושי</li>
        <li><strong>הפשטה:</strong> מאפשרות הפרדה של לוגיקה ויצירת קוד נקי יותר</li>
        <li><strong>תכנות פונקציונלי:</strong> מאפשרות שימוש בטכניקות תכנות פונקציונלי מתקדמות</li>
        <li><strong>ביטוי עוצמתי:</strong> מאפשרות ביטוי של רעיונות מורכבים בצורה תמציתית</li>
        <li><strong>יצירת APIs:</strong> מאפשרות יצירת ממשקי תכנות גמישים ועוצמתיים</li>
      </ul>
      <p>הבנה של מושגים אלו היא קריטית לכתיבת קוד JavaScript מודרני ויעיל!</p>
    `,
  },
];
