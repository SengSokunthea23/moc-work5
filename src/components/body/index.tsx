import { NavBar } from "../navbar";

type LayoutProps = {
  children: React.ReactNode;
};
export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
