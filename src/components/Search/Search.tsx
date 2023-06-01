import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';

type TSearch = {
  placeholder: string;
  setSearch?: any;
};

export const Search: FC<TSearch> = ({ placeholder, setSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("search") || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchValue = e.target.value;
    setSearchValue(newSearchValue);

    const search = searchParams.get("search");
    if (!newSearchValue && search) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("search");
      setSearchParams(newParams);
    } else if (newSearchValue !== search) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("search", newSearchValue);
      setSearchParams(newParams);
    }
  };

  useEffect(() => {
    setSearchValue(searchParams.get("search") || "");
  }, [searchParams, setSearchValue]);

  const handleReset = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("search");
    setSearchParams(newParams);
    setSearchValue("");
  };

  return (
    <div>
      <input placeholder={placeholder} onChange={handleChange} value={searchValue || ''} />
      {searchValue.length > 0 && <CloseButton color='#BCC5CD' onClick={handleReset}/>}
    </div>
  );
}