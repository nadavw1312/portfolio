const GradientOutlineButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="p-2 rounded-md text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-50% to-emerald-500 to-80%">
      {children}
    </button>
  );
};
export default GradientOutlineButton;
