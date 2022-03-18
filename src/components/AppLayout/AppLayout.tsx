import Header from "../Header";

interface AppLayoutInterface {
  children: React.ReactElement;
}

const AppLayout = ({ children }: AppLayoutInterface) => {
  return (
    <div>
      <Header />
      <div className="mt-4">{children}</div>
    </div>
  );
};
export default AppLayout;
