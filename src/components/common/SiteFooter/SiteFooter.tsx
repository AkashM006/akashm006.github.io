import "./SiteFooter.css";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Akash M.</p>
    </footer>
  );
}

export default SiteFooter;