
interface DateInputProps {
    date?:string;
    handleDateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput = ({ date, handleDateChange }: DateInputProps) => {

  return (
    <div className="flex flex-col gap-y-1">
      <label>Date</label>
      <input
        type="text"
        value={date}
        onChange={handleDateChange}
        placeholder="JJ/MM/AAAA"
        className="text-black rounded-md p-1"
      />
    </div>
  );
};

export default DateInput;
