import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsDada = [
    { name: "all", label: "All employees" },
    { name: "rise", label: "Employees on the rise" },
    { name: "salary", label: "Salary over 1000$" },
  ];

  const buttons = buttonsDada.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
  // return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
