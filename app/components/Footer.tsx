export default function Footer() {
  const footerDate = new Date().getFullYear();
  return (
    <footer>
      <nav className="text-center">
        &copy; Jae Webb { footerDate }
      </nav>
    </footer>
  );
}
