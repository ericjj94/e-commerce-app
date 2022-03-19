import Header from "../Header";

interface AppLayoutInterface {
  children: React.ReactElement;
}

const AppLayout = ({ children }: AppLayoutInterface) => {
  return (
    <div>
      <Header />
      <div className="main-content-wrapper">{children}</div>
    </div>
  );
};
export default AppLayout;
