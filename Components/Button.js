function Button({ title, _callback }) {
  return (
    <div>
      <button className="font-medium" onClick={_callback}>
        {title}
      </button>
    </div>
  );
}

export default Button;
