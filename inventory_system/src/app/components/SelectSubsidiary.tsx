import React, { useState } from 'react';

interface SelectSubisidiaryProps {
  subisidiaries: string[];
  onSelectsubisidiary: (subisidiary: string) => void;
}

const SelectSubisidiary: React.FC<SelectSubisidiaryProps> = ({ subisidiaries, onSelectsubisidiary }) => {
  const [selectedsubisidiary, setSelectedsubisidiary] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const subisidiary = event.target.value;
    setSelectedsubisidiary(subisidiary);
    onSelectsubisidiary(subisidiary);
  };

  return (
    <div className="flex flex-row items-start">
      <label htmlFor="subisidiary-selector" className="mb-2 text-2xl text-white  w-52">Selecione a Filial</label>
      <select
        id="subisidiary-selector"
        value={selectedsubisidiary}
        onChange={handleChange}
        className="px-3 py-2 min-w-32 w-52 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        <option className='text-black' value="" disabled>Selecione...</option>
        {subisidiaries.map((subisidiary, index) => (
          <option className='text-black' key={index} value={subisidiary}>
            {subisidiary}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSubisidiary;