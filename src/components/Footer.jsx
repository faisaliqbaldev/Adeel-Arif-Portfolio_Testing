export default function Footer() {
  const footerLinks = [
    { label: "Institutional Affiliation", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-surface-container w-full border-t rounded-t-3xl border-border-subtle">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-container-max mx-auto px-margin-phone md:px-margin-desktop pt-12 pb-20">
        <div className="space-y-4">
          <p className="text-card-heading font-display text-primary">
            Adeel Arif
          </p>
          <p className="text-body font-body text-on-surface-variant">
            Assistant Professor, UCP
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body font-body text-on-surface-variant hover:text-secondary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-4 md:items-end text-left md:text-right">
          <a
            href="mailto:adeel.arif@ucp.edu.pk"
            className="text-body font-body text-secondary hover:underline"
          > 
            adeel.arif@ucp.edu.pk
          </a>
          <p className="text-label font-ui text-on-surface-variant mt-auto pt-8">
            © 2026 Dr. Adeel Arif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
