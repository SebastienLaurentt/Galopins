interface TextareaProps {
    textareaName:string;
    value:string;
    onChange?: (newValue: string) => void;
    placeholder?:string;
}

const Textarea = ({ textareaName, value, onChange, placeholder }: TextareaProps) => {

  return (
    <div className="flex flex-col gap-y-1">
      <label>{textareaName}</label>
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        rows={10}
        className="text-black rounded-md p-1"
        required
      />
    </div>
  );
};

export default Textarea;