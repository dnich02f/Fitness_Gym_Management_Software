function Input({ type, name, placeholder, value, onChange }) {
 return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border-2 border-gray-300 p-2 rounded-md w-full"
    />
 );
}

export default Input;
