import Fabutton from "../../components/Fabutton";
import WeiterButton from "../../components/WeiterButton";
import RobiGif from "../../components/RobiGif";
import robiTouch from "../../assets/robi-gifs/Robi_touch-min.gif";

function Screen() {
  return (
    <>
      <div>
        <p>So viele Fragen...Bald hast dus geschafft.</p>
        <p>Warum bist du heute hier? </p>
      </div>
      <div className="vertical-grid">
        <Fabutton>Interesse digitale Technik</Fabutton>
        <Fabutton>Hauptsache was los</Fabutton>
        <Fabutton>Schulische Verpflichtung</Fabutton>
        <Fabutton>Wurde mitgeschleppt</Fabutton>
        <Fabutton>Soziale Medien</Fabutton>
      </div>

      <WeiterButton text="fertig" navigateTo="/losgehts/nickname" />
      <RobiGif
        src={robiTouch}
        style={{
          width: 500,
          left: -140,
          bottom: -300,
        }}
      />
    </>
  );
}

export default Screen;
