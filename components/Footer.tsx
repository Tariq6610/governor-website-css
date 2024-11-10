import Link from "next/link";
import "./footer.css"; 

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div>
          <h1 className="footer-heading">Core Courses</h1>
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link href="#">Programming Fundamentals</Link>
            </li>
            <li className="footer-list-item">
              <Link href="#">Web2 using NextJs</Link>
            </li>
            <li className="footer-list-item">
              <Link href="#">Earn as You Learn</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="footer-heading">Advanced Courses</h1>
          <ul>
            <li className="footer-list-item">
              <Link href="#">Web 3 and Metaverse</Link>
            </li>
            <li className="footer-list-item">
              <Link href="#">Cloud-Native Computing</Link>
            </li>
            <li className="footer-list-item">
              <Link href="#">
                Artificial Intelligence (AI) and Deep Learning
              </Link>
            </li>
            <li className="footer-list-item">
              <Link href="#">Ambient Computing and IoT</Link>
            </li>
            <li className="footer-list-item">
              <Link href="#">Genomics and Bioinformatics</Link>
            </li>
            <li className="footer-list-item">
              <Link href="#">Network Programmability and Automation</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="footer-heading">Social Links</h1>
          <h1>Facebook</h1>
          <h1>Youtube</h1>
          <h1>WhatsApp</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
