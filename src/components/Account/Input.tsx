interface InputProps {
    inputName:string;
    value:string;
    setter: (newValue: string) => void;
    placeholder?:string;
    isDate?:boolean;
}

const Input = ({ inputName, value, setter, placeholder, isDate }: InputProps) => {

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (isDate) {
      // Supprime tout sauf les chiffres
      inputValue = inputValue.replace(/[^0-9]/g, '');

    // Ajoute le séparateur '/' après les deux premiers chiffres
    if (inputValue.length >= 2) {
      inputValue = inputValue.substring(0, 2) + '/' + inputValue.substring(2);
    }

    // Ajoute le deuxième séparateur '/' après les quatre premiers chiffres
    if (inputValue.length >= 5) {
      inputValue = inputValue.substring(0, 5) + '/' + inputValue.substring(5);
    }

    // Limite la longueur à 10 caractères pour la date complète (JJ/MM/AAAA)
    if (inputValue.length > 10) {
      inputValue = inputValue.substring(0, 10);
    }

  }

    setter(inputValue);
  };

  return (
    <div className="flex flex-col gap-y-1">
      <label>{inputName}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="text-black rounded-md p-1"
        required
      />
    </div>
  );
};

export default Input;
