const tests = [
    {
        question: "Вызов какого метода приводит к изменению состояния компонента ?",
        code: null,
        choiceSet: [
            "updateState()",
            "changeState",
            "setStateless()",
            "setState()",
            "putState()"
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "setState()"
    },
    {
        question: "Выберите правильный вариант определения inline-стилей в JSX.",
        code: null,
        choiceSet: [
            "<div propsStyle={{display: \"none\"}} />",
            "<div styleNames=\"display: none;\" />",
            "<div style={{display: \"none\"}} />",
            "<div style={display: \"none\"} />",
            "<div style={`display: none;`} />"
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "<div style={{display: \"none\"}} />"
    },
    {
        question: "Вызываются ли у Stateless Functional Components в React.js методы жизненного цикла ?",
        code: null,
        choiceSet: [
            "Да",
            "Нет"
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "Да"
    },
    {
        question: "Выберите правильный вариант задания класса в JSX.",
        code: null,
        choiceSet: [
            "<div propsClass=\"display-none\" />",
            "<div className=\"display-none\" />",
            "<div classes={['display-none']} />",
            "<div class={'display-none'} />",
            "<div classNames={`display-none`} />"
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "<div className=\"display-none\" />"
    },
    {
        question: "Возможно ли получить доступ к значению элемента дочернего компонента через ref этого элемента ?",
        code: null,
        choiceSet: [
            "Да, если передать в props значение ref для дочернего компонента и добраться до элемента путем цепочки ref-ов",
            "Нет, не возможно получить доступ к элементам дочернего компонента, так как это противоречит философии React.js",
            "Да, можно получить доступ с помощью ключевого слова this"
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "Да, если передать в props значение ref для дочернего компонента и добраться до элемента путем цепочки ref-ов"
    },
    {
        question: "Приемлемо ли использование setState() метода в componentDidMount() ?",
        code: null,
        choiceSet: [
            "Да",
            "Нет"
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "Нет"
    },
    {
        question: "В результате присвоения какого key элементу будет снижен performance ?",
        code: null,
        choiceSet: [
            "index в результате вызова метода map()",
            "Элемент не имеет key",
            "Math.random()",
            "Уникальный key, например, id записи из БД"
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "Math.random()"
    },
    {
        question: "С каким DOM взаимодействует React.js ?",
        code: null,
        choiceSet: [
            "Shadow DOM",
            "Native DOM",
            "Virtual DOM"
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "Virtual DOM"
    },
    {
        question: "Что будет отображено на странице в результате выполнения преобразования данного JSX ?",
        code: `<div>{true && "<span>foo</span>" || null}</div>`,
        choiceSet: [
            "undefined",
            "<span>foo</span>",
            "foo",
            "true",
            "null"
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "<span>foo</span>"
    },
    {
        question: "Что будет отображено на странице ?",
        code: `class Application extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

React.render(
  <Application><div>foo</div></Application>, 
  document.getElementById('app')
)`,
        choiceSet: [
            "undefined",
            "error",
            "foo",
            "null",
            "\"<div>foo</div>\""
        ],
        hint: "https://reactjs.org/docs/getting-started.html",
        correctAnswer: "foo"
    }
];

export default tests;