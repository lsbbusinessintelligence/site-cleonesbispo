const items = [
  { label: "Home", href: "#home" },
  { label: "Servicos", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliacoes", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

const TopSectionsNav = () => (
  <div
    className="fixed top-0 inset-x-0 z-40 backdrop-blur-md"
    style={{
      background: "hsl(210 40% 6% / 0.92)",
      borderBottom: "1px solid hsl(195 70% 40% / 0.25)",
    }}
  >
    <div className="container py-2.5">
      <div className="flex gap-2 overflow-x-auto no-scrollbar items-center">
        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 inline-flex items-center justify-center rounded-sm p-1"
          style={{ border: "1px solid hsl(210 15% 22%)" }}
          aria-label="Ir para o topo"
        >
          <img
            src="/images/cleonesbispo/CLEONESBISPO-LOGO01.jpeg"
            alt="CBS Encanamentos Hidraulicos"
            className="w-10 h-10 rounded-sm object-cover"
          />
        </a>

        {/* Nav items */}
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 inline-flex items-center justify-center text-center rounded-sm px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200"
            style={{
              border: "1px solid hsl(210 15% 20%)",
              background: "hsl(210 15% 10% / 0.6)",
              color: "hsl(195 30% 72%)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "hsl(195 70% 30%)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "hsl(195 70% 42% / 0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "hsl(210 15% 10% / 0.6)";
              (e.currentTarget as HTMLAnchorElement).style.color =
                "hsl(195 30% 72%)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "hsl(210 15% 20%)";
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopSectionsNav;
