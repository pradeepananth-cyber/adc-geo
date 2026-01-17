import React, { useState, useEffect, useRef } from 'react';
import { Shield, Globe, Brain, Activity, ChevronDown, ArrowRight, Lock, Eye, Sparkles } from 'lucide-react';

export default function GEOFramework() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(Math.min(scrollTop / docHeight, 1));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const summaryItems = [
    { icon: Lock, title: 'Trusted', items: 'HTTPS + Provenance Metadata', color: '#a855f7' },
    { icon: Eye, title: 'Visible', items: 'Robots.txt + Prerendering + Performance', color: '#0ea5e9' },
    { icon: Brain, title: 'Understood', items: 'Schema + Semantics + Structure', color: '#f43f5e' }
  ];

  return (
    <div ref={containerRef} style={styles.container}>
      {/* Progress indicator */}
      <div style={{ ...styles.progressBar, width: `${scrollProgress * 100}%` }} />

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroEyebrow}>
            <Sparkles size={14} />
            <span>The New Imperative</span>
          </div>
          <h1 style={styles.heroTitle}>
            Getting AI engines to
            <br />
            <em style={styles.emphasis}>discover</em>, <em style={styles.emphasis}>understand</em>,
            <br />
            and <em style={styles.emphasis}>trust</em> our content
          </h1>
          <div style={styles.heroLine} />
          <p style={styles.heroSubtitle}>
            AI is no longer a future consideration—it's the present interface between 
            your brand and your audience. This framework ensures we're visible where it matters.
          </p>

          {/* Summary Cards in Hero */}
          <div style={styles.heroSummaryGrid}>
            {summaryItems.map((item, idx) => (
              <div key={idx} style={styles.heroSummaryCard}>
                <div style={{ ...styles.heroSummaryIcon, color: item.color }}>
                  <item.icon size={20} />
                </div>
                <div style={styles.heroSummaryText}>
                  <h3 style={styles.heroSummaryTitle}>{item.title}</h3>
                  <p style={styles.heroSummaryItems}>{item.items}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.scrollHint}>
            <span>Explore the framework</span>
            <ChevronDown size={20} style={{ animation: 'bounce 2s infinite' }} />
          </div>
        </div>
        <div style={styles.heroGlow} />
      </section>

      {/* The Stakes Section */}
      <section style={styles.stakesSection}>
        <div style={styles.stakesInner}>
          <h2 style={styles.sectionLabel}>The Challenge</h2>
          <p style={styles.stakesText}>
            We need to control the data AI engines consume to predict how they represent our brand.
          </p>
        </div>
      </section>

      {/* Framework Overview */}
      <section style={styles.frameworkSection}>
        <div style={styles.frameworkHeader}>
          <h2 style={styles.sectionLabel}>GEO Maturity Framework</h2>
          <p style={styles.frameworkIntro}>
            Three interconnected pillars that build upon each other—from basic accessibility to full AI readiness.
          </p>
        </div>

        <div style={styles.pillarsGrid}>
          {[
            {
              id: 'enhance',
              icon: Globe,
              label: 'ENHANCE',
              title: 'Accessibility & Performance',
              question: 'Can an AI bot crawl the site quickly and comprehensively?',
              color: '#0ea5e9',
              actions: [
                'Update robots.txt to allow AI agents and pre-render all content.',
                'Maximize WCAG accessibility compliance and optimize Core Web Vitals for faster AI processing.'
              ]
            },
            {
              id: 'establish',
              icon: Shield,
              label: 'ESTABLISH',
              title: 'Authority & Trust',
              question: 'Does the AI bot trust your website to be an authentic source of data and content?',
              color: '#a855f7',
              actions: [
                'Enforce HTTPS connections and add provenance',
                'Metadata (C2PA watermarking) to signal authority to AI engines'
              ]
            },
            {
              id: 'provide',
              icon: Brain,
              label: 'PROVIDE',
              title: 'Semantic Clarity',
              question: 'Is your website speaking the language of AI Engines?',
              color: '#f43f5e',
              actions: [
                'Add Schema.org markup to provide an AI agent-view for each page',
                'Use automated entity tagging to identify key entities (products, locations, organizations)',
                'Add an llms.txt file as a content map for AIs.'
              ]
            }
          ].map((pillar, idx) => (
            <div
              key={pillar.id}
              style={{
                ...styles.pillarCard,
                animationDelay: `${idx * 0.1}s`
              }}
              onClick={() => setActiveSection(activeSection === pillar.id ? null : pillar.id)}
            >
              <div style={styles.pillarHeader}>
                <div style={{ ...styles.pillarIcon, background: `${pillar.color}15`, color: pillar.color }}>
                  <pillar.icon size={24} />
                </div>
                <div style={styles.pillarMeta}>
                  <span style={{ ...styles.pillarLabel, color: pillar.color }}>{pillar.label}</span>
                  <h3 style={styles.pillarTitle}>{pillar.title}</h3>
                </div>
              </div>
              
              <p style={styles.pillarQuestion}>{pillar.question}</p>
              
              <div style={{
                ...styles.pillarActions,
                maxHeight: activeSection === pillar.id ? '500px' : '0',
                opacity: activeSection === pillar.id ? 1 : 0,
                marginTop: activeSection === pillar.id ? '1.5rem' : '0'
              }}>
                <div style={{ ...styles.actionsDivider, background: pillar.color }} />
                <p style={styles.actionsLabel}>Recommended Actions</p>
                {pillar.actions.map((action, i) => (
                  <div key={i} style={styles.actionItem}>
                    <ArrowRight size={14} color={pillar.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
              
              <button style={{ ...styles.expandBtn, color: pillar.color }}>
                {activeSection === pillar.id ? 'Collapse' : 'View actions'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Monitoring Deep Dive */}
      <section style={styles.monitorSection}>
        <div style={styles.monitorContent}>
          <div style={styles.monitorText}>
            <h2 style={styles.sectionLabel}>Critical Insight</h2>
            <blockquote style={styles.monitorQuote}>
              You cannot optimize what you cannot measure.
            </blockquote>
            <p style={styles.monitorBody}>
              Listening to the digital footprints of AI agents is the first step. 
              Without visibility into how AI crawlers interact with our content, 
              we're operating blind in an increasingly AI-mediated landscape.
            </p>
          </div>
          <div style={styles.monitorCard}>
            <div style={styles.monitorItem}>
              <span style={styles.monitorLabel}>Goal</span>
              <p style={styles.monitorValue}>Report specifically on AI Crawler traffic.</p>
            </div>
            <div style={styles.monitorDivider} />
            <div style={styles.monitorItem}>
              <span style={styles.monitorLabel}>Action</span>
              <p style={styles.monitorValue}>Update Web Log Analytics tags.</p>
            </div>
            <div style={styles.monitorDivider} />
            <div style={styles.monitorItem}>
              <span style={styles.monitorLabel}>Rationale</span>
              <p style={styles.monitorValue}>Monitor AI-agent content consumption patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={styles.closingSection}>
        <h2 style={styles.closingTitle}>
          To succeed with GEO, think of it as having a polite conversation with a robot: you have to present your ID to prove you're authentic, unlock the door to ensure you're accessible, speak clearly using semantic HTML and Schema so you are understood, and finally, check your analytics to make sure they were actually listening.
        </h2>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>GEO Maturity Framework</p>
      </footer>

      <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#fafaf9',
    fontFamily: "'DM Sans', -apple-system, sans-serif",
    color: '#1c1917',
    lineHeight: 1.6
  },
  progressBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #0ea5e9, #a855f7, #f43f5e)',
    zIndex: 100,
    transition: 'width 0.1s ease-out'
  },

  // Hero
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '2rem',
    overflow: 'hidden'
  },
  heroContent: {
    maxWidth: '900px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1
  },
  heroEyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.8rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#a855f7',
    marginBottom: '2rem',
    padding: '0.5rem 1rem',
    background: 'rgba(168, 85, 247, 0.08)',
    borderRadius: '100px'
  },
  heroTitle: {
    fontFamily: "'Newsreader', Georgia, serif",
    fontSize: 'clamp(2.25rem, 6vw, 4rem)',
    fontWeight: 500,
    lineHeight: 1.15,
    color: '#0c0a09',
    margin: 0
  },
  emphasis: {
    fontStyle: 'italic',
    color: '#78716c'
  },
  heroLine: {
    width: '80px',
    height: '2px',
    background: 'linear-gradient(90deg, #0ea5e9, #a855f7)',
    margin: '2rem auto',
    borderRadius: '2px'
  },
  heroSubtitle: {
    fontSize: '1.15rem',
    color: '#57534e',
    maxWidth: '550px',
    margin: '0 auto 3rem'
  },
  heroSummaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginBottom: '3rem',
    maxWidth: '700px',
    margin: '0 auto 3rem'
  },
  heroSummaryCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1.25rem 0.75rem',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
    border: '1px solid #f5f5f4'
  },
  heroSummaryIcon: {
    marginBottom: '0.75rem'
  },
  heroSummaryText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  heroSummaryTitle: {
    fontFamily: "'Newsreader', Georgia, serif",
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#1c1917',
    margin: 0
  },
  heroSummaryItems: {
    fontSize: '0.75rem',
    color: '#78716c',
    margin: 0,
    lineHeight: 1.4
  },
  scrollHint: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    color: '#a8a29e',
    marginTop: '2rem'
  },
  heroGlow: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.06) 0%, transparent 60%)',
    pointerEvents: 'none'
  },

  // Stakes
  stakesSection: {
    padding: '6rem 2rem',
    background: '#0c0a09'
  },
  stakesInner: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center'
  },
  sectionLabel: {
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#a855f7',
    marginBottom: '1.5rem'
  },
  stakesText: {
    fontFamily: "'Newsreader', Georgia, serif",
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    fontWeight: 400,
    color: '#fafaf9',
    lineHeight: 1.4,
    margin: 0
  },

  // Framework
  frameworkSection: {
    padding: '6rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  frameworkHeader: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  frameworkIntro: {
    fontSize: '1.1rem',
    color: '#78716c',
    maxWidth: '600px',
    margin: '0 auto'
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  },
  pillarCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
    border: '1px solid #f5f5f4',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    animation: 'fadeIn 0.6s ease-out both'
  },
  pillarHeader: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem'
  },
  pillarIcon: {
    width: '52px',
    height: '52px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  pillarMeta: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pillarLabel: {
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    marginBottom: '0.25rem'
  },
  pillarTitle: {
    fontFamily: "'Newsreader', Georgia, serif",
    fontSize: '1.25rem',
    fontWeight: 500,
    margin: 0,
    color: '#1c1917'
  },
  pillarQuestion: {
    fontSize: '0.95rem',
    color: '#78716c',
    fontStyle: 'italic',
    margin: 0,
    lineHeight: 1.5
  },
  pillarActions: {
    overflow: 'hidden',
    transition: 'all 0.4s ease'
  },
  actionsDivider: {
    width: '40px',
    height: '2px',
    borderRadius: '1px',
    marginBottom: '1rem'
  },
  actionsLabel: {
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#a8a29e',
    marginBottom: '0.75rem'
  },
  actionItem: {
    display: 'flex',
    gap: '0.75rem',
    fontSize: '0.9rem',
    color: '#44403c',
    marginBottom: '0.75rem',
    lineHeight: 1.5
  },
  expandBtn: {
    background: 'none',
    border: 'none',
    fontSize: '0.8rem',
    fontWeight: 500,
    cursor: 'pointer',
    marginTop: '1rem',
    padding: 0
  },

  // Monitor
  monitorSection: {
    padding: '6rem 2rem',
    background: 'linear-gradient(180deg, #f5f5f4 0%, #fafaf9 100%)'
  },
  monitorContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center'
  },
  monitorText: {},
  monitorQuote: {
    fontFamily: "'Newsreader', Georgia, serif",
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 500,
    fontStyle: 'italic',
    color: '#0c0a09',
    margin: '0 0 1.5rem 0',
    paddingLeft: '1.5rem',
    borderLeft: '3px solid #22c55e'
  },
  monitorBody: {
    fontSize: '1rem',
    color: '#57534e',
    lineHeight: 1.7,
    margin: 0
  },
  monitorCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)',
    border: '1px solid #f5f5f4'
  },
  monitorItem: {
    padding: '0.5rem 0'
  },
  monitorLabel: {
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#22c55e'
  },
  monitorValue: {
    fontFamily: "'Newsreader', Georgia, serif",
    fontSize: '1.1rem',
    color: '#1c1917',
    margin: '0.5rem 0 0 0'
  },
  monitorDivider: {
    height: '1px',
    background: '#f5f5f4',
    margin: '1rem 0'
  },

  // Closing
  closingSection: {
    padding: '6rem 2rem',
    background: '#0c0a09',
    textAlign: 'center'
  },
  closingTitle: {
    fontFamily: "'Newsreader', Georgia, serif",
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    fontWeight: 400,
    color: '#fafaf9',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.4
  },

  // Footer
  footer: {
    padding: '2rem',
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    background: '#0c0a09'
  },
  footerText: {
    fontSize: '0.8rem',
    color: '#57534e',
    margin: 0
  }
};