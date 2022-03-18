import Header from "../Header";

interface AppLayoutInterface {
  children: React.ReactElement;
}

const AppLayout = ({ children }: AppLayoutInterface) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default AppLayout;
