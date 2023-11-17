export default function Footer() {
  const footerDate = new Date().getFullYear();
  return (
    <footer>
      <nav>
        &copy; Jae Webb { footerDate }
      </nav>
    </footer>
  );
}
