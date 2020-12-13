import Desktop from "./lib/Desktop.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

const style = {
  padding: "0 8px",
  display: "grid",
  gridAutoFlow: "column",
  gridGap: "16px",
  position: "fixed",
  overflow: "hidden",
  left: "0px",
  top: "0px",
  fontFamily: styles.fontFamily,
  lineHeight: styles.lineHeight,
  fontSize: styles.fontSize,
  color: styles.colors.dim,
  fontWeight: styles.fontWeight
};

export const refreshFrequency = false;
export const command = "./nibar/scripts/spaces.sh";

export const render = ({ output }, ...args) => {
  const data = parse(output);
  if (typeof data === "undefined") {
    return (
      <div style={style}>
        <Error msg="Error: unknown script output" side="left" />
      </div>
    );
  }
  if (typeof data.error !== "undefined") {
    return (
      <div style={style}>
        <Error msg={`Error: ${data.error}`} side="left" />
      </div>
    );
  }
  const displayId = Number(window.location.pathname.replace(/\//g, ''));
  if(data && data.spaces){
//  data.spaces[0].index='V²'
  data.spaces[0].index='􀌥'//office
  data.spaces[1].index='􀈖'
  data.spaces[3].index='􀙚'
  data.spaces[4].index='􀢾'
  data.spaces[5].index='􀖅'
  //data.spaces[2].index='℮⁴'
  data.spaces[2].index='􀎸'
  data.spaces[6].index='􀟱'
  data.spaces[7].index='􀗗'
  }
  //data.spaces[0].display='Terminal'
  //data.spaces[1].display='Browse'
 // data.spaces[3].display='Office'
  //data.spaces[6].display='Zoom'
  const display = data.displays.find(d => d.id === displayId);
  


  return (
    <div style={style}>
      <Desktop output={data.spaces.filter(s => s.display === display.index)} />
    </div>
  );
};

export default null;
