interface DefaultInputType {
  className: string;
  value: string;
  onChange: Function;
  placeholder: string;
}

const DefaultInput = ({ className, value, onChange, placeholder }: DefaultInputType) => {
  return (
    <input
      className={className}
      type="text"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
      }}
      placeholder={placeholder}
    />
  );
};
export default DefaultInput;
