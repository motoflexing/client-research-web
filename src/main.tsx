import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

type Metric = {
  value: string;
  label: string;
  detail: string;
  icon: string;
};

type Datum = {
  label: string;
  value: number;
  color: string;
};

type CardItem = {
  title: string;
  detail?: string;
  icon: string;
};

const navLinks = [
  ['Home', '#home'],
  ['Overview', '#overview'],
  ['Insights', '#insights'],
  ['Impact', '#impact'],
  ['Challenges', '#challenges'],
  ['Recommendations', '#recommendations'],
  ['Conclusion', '#conclusion'],
];

const metrics: Metric[] = [
  { value: '68', label: 'Total Respondents', detail: 'Field sample', icon: '68' },
  { value: '100%', label: 'UPI Usage', detail: 'All respondents', icon: 'U' },
  { value: '100%', label: 'Merchants Accept UPI', detail: 'Universal acceptance', icon: 'M' },
  { value: '77.9%', label: 'Business Owners / Merchants', detail: 'Core segment', icon: 'B' },
  { value: '76.5%', label: 'Prefer Google Pay', detail: 'Top app preference', icon: 'G' },
  { value: '98.6%', label: 'UPI Share Above 50%', detail: 'Daily transactions', icon: 'D' },
];

const overviewCards = [
  ['Researcher', 'Vinayak Kumar'],
  ['University Guide', 'Dr. Sayanika Deka Sharma'],
  ['Program', 'BBA 6th Semester'],
  ['University', 'Assam down town University'],
  ['Sample Size', '68 respondents'],
  ['Study Area', 'Small village in Assam'],
];

const growthCards: CardItem[] = [
  { title: 'Instant bank-to-bank transfers', detail: 'Fast settlement for everyday village trade.', icon: '01' },
  { title: 'QR-code payments', detail: 'Simple scan-and-pay flows for merchants and customers.', icon: '02' },
  { title: 'Low or zero transaction cost', detail: 'A practical digital option for small businesses.', icon: '03' },
  { title: 'Smartphone accessibility', detail: 'Payment access moved closer to the customer.', icon: '04' },
  { title: 'Strong merchant adoption', detail: 'UPI became a visible part of local selling.', icon: '05' },
];

const behaviourCards: CardItem[] = [
  { title: 'Shift from cash to digital payments', icon: 'C' },
  { title: 'Small-value transactions increased', icon: 'S' },
  { title: 'More usage of Google Pay, PhonePe, Paytm', icon: 'A' },
  { title: 'Better spending records', icon: 'R' },
  { title: 'Increased digital trust', icon: 'T' },
];

const impactCards: CardItem[] = [
  { title: 'Faster payments', icon: 'F' },
  { title: 'Reduced cash handling', icon: 'C' },
  { title: 'Better record keeping', icon: 'R' },
  { title: 'Improved transparency', icon: 'T' },
  { title: 'Increased transaction volume', icon: 'V' },
  { title: 'Better customer convenience', icon: 'K' },
  { title: 'Lower transaction cost', icon: 'L' },
];

const challenges: CardItem[] = [
  { title: 'Internet connectivity issues', icon: '!' },
  { title: 'Transaction failures', icon: '!' },
  { title: 'Refund or reversal delays', icon: '!' },
  { title: 'Cyber fraud concerns', icon: '!' },
  { title: 'Digital literacy gaps among older users', icon: '!' },
];

const recommendations: CardItem[] = [
  { title: 'Improve village-level internet connectivity', icon: 'A' },
  { title: 'Strengthen payment security', icon: 'A' },
  { title: 'Reduce transaction failure rates', icon: 'A' },
  { title: 'Run UPI awareness programs', icon: 'A' },
  { title: 'Provide better customer support', icon: 'A' },
  { title: 'Train small merchants in digital finance safety', icon: 'A' },
];

const ageData: Datum[] = [
  { label: 'Below 20', value: 2.9, color: '#69dcff' },
  { label: '21-30', value: 25, color: '#2f7dff' },
  { label: '31-40', value: 57.4, color: '#d7b866' },
  { label: 'Above 40', value: 14.7, color: '#7ee8bd' },
];

const occupationData: Datum[] = [
  { label: 'Business Owner / Merchant', value: 77.9, color: '#d7b866' },
  { label: 'Working Professional', value: 19.1, color: '#69dcff' },
  { label: 'Student', value: 2.9, color: '#7ee8bd' },
];

const appData: Datum[] = [
  { label: 'Google Pay', value: 76.5, color: '#69dcff' },
  { label: 'PhonePe', value: 20.6, color: '#d7b866' },
  { label: 'Paytm', value: 2.9, color: '#7ee8bd' },
];

const transactionData: Datum[] = [
  { label: '25%-50%', value: 1.4, color: '#7ee8bd' },
  { label: '50%-75%', value: 61.8, color: '#69dcff' },
  { label: 'More than 75%', value: 36.8, color: '#d7b866' },
];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsPanel />
        <Overview />
        <FeatureSection id="growth" eyebrow="UPI Growth" title="A payment system built for small merchant velocity" items={growthCards} />
        <FeatureSection id="behaviour" eyebrow="Consumer Behaviour" title="Daily payment behaviour shifted toward traceable digital habits" items={behaviourCards} compact />
        <DataInsights />
        <MerchantImpact />
        <FeatureSection id="challenges" eyebrow="Challenges" title="Operational risks still need serious attention" items={challenges} tone="warning" compact />
        <FeatureSection id="recommendations" eyebrow="Recommendations" title="A practical action plan for stronger digital finance adoption" items={recommendations} tone="gold" compact />
        <Conclusion />
      </main>
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="UPI Impact Study home">
        <span>UPI</span>
        <strong>Impact Study</strong>
      </a>
      <nav aria-label="Primary navigation">
        {navLinks.map(([label, href]) => (
          <a href={href} key={label}>{label}</a>
        ))}
      </nav>
      <Button href="#download" label="Download Report" variant="ghost" />
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy-block reveal">
        <span className="pill">Fintech Research Case Study</span>
        <h1>
          Impact Assessment of <span>UPI Adoption</span> in a Small Village of Assam
        </h1>
        <p>
          A research-driven digital payment case study exploring how UPI transformed payment habits,
          reduced cash dependency, and improved business efficiency among local merchants.
        </p>
        <div className="button-row">
          <Button href="#insights" label="View Findings" variant="primary" />
          <Button href="#insights" label="Explore Data" variant="secondary" />
        </div>
      </div>
      <HeroVisual />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal delay-1" aria-label="Fintech payment network illustration">
      <svg className="assam-line" viewBox="0 0 180 150" role="img" aria-label="Assam map outline inspired visual">
        <path d="M20 85 C38 54 67 46 92 58 C111 67 123 42 149 48 C166 52 172 74 157 89 C139 108 120 93 101 110 C77 130 42 120 20 85Z" />
      </svg>
      <div className="network-lines">
        <i />
        <i />
        <i />
      </div>
      <div className="phone-card">
        <div className="phone-top" />
        <div className="phone-screen">
          <span>UPI Network</span>
          <strong>98.6%</strong>
          <small>Transactions via UPI above 50%</small>
        </div>
      </div>
      <div className="qr-tile">
        {Array.from({ length: 49 }).map((_, index) => <i key={index} />)}
      </div>
      <div className="float-chip chip-one">
        <strong>100%</strong>
        <span>Merchant Acceptance</span>
      </div>
      <div className="float-chip chip-two">
        <strong>68</strong>
        <span>Respondents</span>
      </div>
    </div>
  );
}

function StatsPanel() {
  return (
    <section className="stats section-shell" id="findings">
      <div className="panel stats-panel">
        {metrics.map((metric, index) => (
          <article className="stat-card" key={metric.label} style={{ animationDelay: `${index * 70}ms` }}>
            <span className="icon-bubble">{metric.icon}</span>
            <strong>{metric.value}</strong>
            <h3>{metric.label}</h3>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="section-shell two-column" id="overview">
      <div className="overview-text reveal">
        <SectionHeader eyebrow="About / Research Overview" title="Village-level UPI adoption, studied with business discipline" />
        <p>
          The study analyzes the role of UPI in digital payment growth, customer payment preferences,
          and the impact of UPI adoption on small businesses and local merchants in a small village of Assam.
        </p>
        <div className="objectives panel">
          <h3>Research Objectives</h3>
          <ul>
            <li>To analyze the role of UPI in digital payment growth</li>
            <li>To study customer payment preferences</li>
            <li>To evaluate the impact of UPI adoption on small businesses and local merchants</li>
          </ul>
        </div>
      </div>
      <div className="overview-card-grid reveal delay-1">
        {overviewCards.map(([label, value]) => (
          <GlassCard key={label} className="detail-card">
            <span>{label}</span>
            <strong>{value}</strong>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

function FeatureSection({ id, eyebrow, title, items, tone = 'blue', compact = false }: {
  id: string;
  eyebrow: string;
  title: string;
  items: CardItem[];
  tone?: 'blue' | 'gold' | 'warning';
  compact?: boolean;
}) {
  return (
    <section className={`section-shell feature-section ${tone}`} id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} />
      <div className={`feature-grid ${compact ? 'compact' : ''}`}>
        {items.map((item, index) => (
          <InsightCard item={item} index={index} key={item.title} />
        ))}
      </div>
    </section>
  );
}

function InsightCard({ item, index }: { item: CardItem; index: number }) {
  return (
    <GlassCard className="insight-card" style={{ animationDelay: `${index * 60}ms` }}>
      <span className="icon-bubble">{item.icon}</span>
      <h3>{item.title}</h3>
      {item.detail ? <p>{item.detail}</p> : null}
    </GlassCard>
  );
}

function DataInsights() {
  return (
    <section className="section-shell" id="insights">
      <SectionHeader eyebrow="Data Insights" title="Compact survey intelligence with premium chart treatment" />
      <div className="chart-grid">
        <ChartCard title="Age Group" data={ageData} />
        <ChartCard title="Occupation" data={occupationData} />
        <DonutChart title="UPI App Preference" data={appData} />
        <ChartCard title="Daily UPI Transactions" data={transactionData} />
      </div>
    </section>
  );
}

function MerchantImpact() {
  return (
    <section className="section-shell" id="impact">
      <SectionHeader eyebrow="Merchant Impact" title="UPI changed how local businesses collect, record, and serve" />
      <div className="impact-grid">
        {impactCards.map((item, index) => <InsightCard item={item} index={index} key={item.title} />)}
      </div>
      <div className="comparison panel">
        <div>
          <span>Before UPI</span>
          <p>Cash-heavy, manual records, slower transactions, higher handling risk.</p>
        </div>
        <div>
          <span>After UPI</span>
          <p>Instant payments, digital records, safer transactions, better business efficiency.</p>
        </div>
      </div>
    </section>
  );
}

function Conclusion() {
  return (
    <section className="section-shell conclusion" id="conclusion">
      <div className="panel conclusion-panel">
        <span className="pill">Conclusion</span>
        <h2>UPI adoption has significantly strengthened the selected village payment ecosystem.</h2>
        <p>
          UPI adoption has significantly contributed to digital payment growth in the selected village of Assam.
          It has reduced cash dependency, improved merchant efficiency, increased customer convenience, and
          created a more transparent local payment ecosystem.
        </p>
        <div className="button-row center" id="download">
          <Button href="#home" label="Download Report" variant="primary" />
          <Button href="mailto:vinayak@example.com" label="Contact Researcher" variant="secondary" />
        </div>
      </div>
    </section>
  );
}

function ChartCard({ title, data }: { title: string; data: Datum[] }) {
  return (
    <GlassCard className="chart-card">
      <h3>{title}</h3>
      <div className="bars">
        {data.map((item) => (
          <div className="bar-row" key={item.label}>
            <div className="bar-label">
              <span>{item.label}</span>
              <strong>{item.value.toFixed(1)}%</strong>
            </div>
            <div className="bar-track">
              <i style={{ width: `${item.value}%`, background: item.color }} />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function DonutChart({ title, data }: { title: string; data: Datum[] }) {
  let start = 0;
  const gradient = data.map((item) => {
    const end = start + item.value;
    const part = `${item.color} ${start}% ${end}%`;
    start = end;
    return part;
  }).join(', ');

  return (
    <GlassCard className="chart-card donut-card">
      <h3>{title}</h3>
      <div className="donut-area">
        <div className="donut" style={{ background: `conic-gradient(${gradient})` }}>
          <span>76.5%</span>
          <small>Google Pay</small>
        </div>
        <div className="legend">
          {data.map((item) => (
            <p key={item.label}>
              <i style={{ background: item.color }} />
              <span>{item.label}</span>
              <strong>{item.value.toFixed(1)}%</strong>
            </p>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-header reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function GlassCard({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <article className={`panel glass-card ${className}`} style={style}>
      {children}
    </article>
  );
}

function Button({ href, label, variant }: { href: string; label: string; variant: 'primary' | 'secondary' | 'ghost' }) {
  return (
    <a className={`lux-button ${variant}`} href={href}>
      <span>{label}</span>
      <i aria-hidden="true">-&gt;</i>
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <strong>UPI Impact Study</strong>
      <span>Research Case Study Website</span>
      <span>Designed for academic presentation and digital showcase</span>
      <span>Vinayak Kumar</span>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
