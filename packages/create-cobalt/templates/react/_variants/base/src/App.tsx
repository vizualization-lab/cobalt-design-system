import { CoBanner } from '@cobalt/react/banner';
import { CoButton } from '@cobalt/react/button';
import { CoCard } from '@cobalt/react/card';

export function App() {
  return (
    <main className="starter-page">
      <CoBanner label="Cobalt starter banner">
        <span slot="title">Cobalt starter</span>
      </CoBanner>
      <section className="starter-content">
        <CoCard label="Starter content">
          <div className="starter-card">
            <p className="starter-eyebrow">React</p>
            <h1 className="starter-title">Build with Cobalt components</h1>
            <p className="starter-copy">
              Tokens, base styles, theme styles, and React wrappers are ready to use.
            </p>
            <div>
              <CoButton variant="success" onCoFocus={() => console.log('Success')}>
                Success
              </CoButton>
            </div>
          </div>
        </CoCard>
      </section>
    </main>
  );
}
