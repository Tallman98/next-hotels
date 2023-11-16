interface labelProps {
  label: string;
}
const CheckboxComponent = ({ label }: labelProps) => {
  return (
    <div className="hover:bg-gray-100 hover:text-[#00aeff] my-3 py-2">
      <div className="px-3  text-sm flex gap-2 items-center">
        <input type="checkbox" />
        <label htmlFor="title">{label}</label>
      </div>
    </div>
  );
};

export default CheckboxComponent;
