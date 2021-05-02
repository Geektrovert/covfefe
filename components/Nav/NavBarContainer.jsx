import Navbar from "./NavBar";

export default function NavBarContainer({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
