import styled from "styled-components";

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? "#2684FF" : "#ccc")};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) =>
      props.checked ? "translateX(24px)" : "translateX(0)"};
  }
`;

interface SwitchProps {
  checked: boolean;
  onChange: (e: boolean) => void;
}

export const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <SwitchContainer>
      <SwitchInput
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Slider checked={checked} />
    </SwitchContainer>
  );
};
