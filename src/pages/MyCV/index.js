import './mycv.scss';
function MyCV() {
  return (
    <>
      <div className="flag">
        <h1 className="my-cv">MY CV</h1>
      </div>
      <svg className="svg">
        <filter id="wavy">
          <feTurbulence x="0" y="0" baseFrequency="0.01" numOctaves="5" seed="2">
            <animate attributeName="baseFrequency" dur="60s" value="0.02;0.05;0.02" repeatCount="indefinite"></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
        </filter>
      </svg>
    </>
  );
}

export default MyCV;
