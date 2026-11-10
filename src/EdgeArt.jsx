// Decorative circuit-style line drawings for the empty space on either side
// of the content column. Hidden on narrow screens and ignored by screen readers.
function Circuit() {
  return (
    <svg viewBox="0 0 240 900" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">
      <g className="edge-lines">
        {/* corner brackets */}
        <path d="M20 40 H64 M20 40 V84" />
        <path d="M20 860 H64 M20 860 V816" />

        {/* traces running in from the content edge */}
        <path d="M240 120 H172 L132 160 V418 L102 448 H44" />
        <path d="M240 300 H204 L184 320 V598 L154 628 V812" />
        <path d="M240 522 H124 L94 552 V704" />
        <path d="M62 112 V296 L32 326 V560" />
        <path d="M240 740 H196 L176 760 V852" />

        {/* end nodes */}
        <circle cx="44" cy="448" r="3.5" />
        <circle cx="154" cy="812" r="3.5" />
        <circle cx="94" cy="704" r="3.5" />
        <circle cx="32" cy="560" r="3.5" />
        <circle cx="62" cy="112" r="3.5" />
        <circle cx="176" cy="852" r="3.5" />

        {/* small chip outline */}
        <rect x="112" y="226" width="34" height="34" rx="3" />
        <path d="M118 226 V216 M129 226 V216 M140 226 V216 M118 260 V270 M129 260 V270 M140 260 V270" />

        {/* tick rail */}
        <path className="edge-ticks" d="M8 140 V780" />
      </g>

      {/* one slow pulse travelling along a trace */}
      <path className="edge-pulse" d="M240 120 H172 L132 160 V418 L102 448 H44" />
    </svg>
  );
}

function EdgeArt() {
  return (
    <div className="edge-art" aria-hidden="true">
      <div className="edge edge-left">
        <Circuit />
      </div>
      <div className="edge edge-right">
        <Circuit />
      </div>
    </div>
  );
}
export default EdgeArt;
