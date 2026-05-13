import Container from "@/components/ui/Container";
import { FOOTER_LINKS, CONTACT_INFO } from "@/constants/navigation";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white mt-20">
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Mathias</h3>
            <p className="text-sm text-white/70">
              Premium rental homes and professional renovation services built
              around better living spaces.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:+15550123567`}>{CONTACT_INFO.phone}</a>
              </li>
              <li>{CONTACT_INFO.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2026 Mathias Rentals LLC. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
