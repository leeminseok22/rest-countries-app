import styled from "styled-components";

const InputContainer = styled.div`
    background-color: white;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 0 20px;
    width: 100%;
    max-width: 480px;
    height: 50px;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    border: none;
    width: 100%;
    height: 100%;
    font-size: 0.9rem;
    outline: none;
    background: transparent;

    &::placeholder {
        color: #c4c4c4;
    }
`;

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <InputContainer>
            <span style={{ marginRight: "10px" }}>🔍</span>
            <Input
                type="text"
                placeholder="Search for a country..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </InputContainer>
    );
}
