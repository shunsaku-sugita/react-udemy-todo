export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Complete TODOs</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickBack(index)}>Go Back</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
