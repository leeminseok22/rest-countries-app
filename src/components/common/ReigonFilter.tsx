import styled from "styled-components";

const Select = styled.select`
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.05);
    padding: 0 20px;
    background-color: white;
    cursor: pointer;
    outline: none;
`;

interface RegionFilterProps {
    value: string;
    onChange: (value: string) => void;
}

export default function RegionFilter({ value, onChange }: RegionFilterProps) {
    return (
        <Select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </Select>
    );
}
