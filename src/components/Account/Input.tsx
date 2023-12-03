interface InputProps {
    inputName:string;
    value:string;
    onChange?: (newValue: string) => void;
    placeholder?:string;
}

const Input = ({ inputName, value, onChange, placeholder }: InputProps) => {

  return (
    <div className="flex flex-col gap-y-1">
      <label>{inputName}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="text-black rounded-md p-1"
        required
      />
    </div>
  );
};

export default Input;
