import { useNavigate } from "react-router-dom";
import Fabutton from "../../components/Fabutton";
import DoubleColumnContainer from "../../components/DoubleColumnContainer";
import RobiGif from "../../components/RobiGif";
import robiSprung from "../../assets/robi-gifs/Robi_sprung-min.gif";

const ANSWER_OPTIONS = [1, 2, 3, 4, 5];

function Screen() {
  const navigate = useNavigate();
  const nextRoute = "/losgehts/ort";
  return (
    <>
      <div>
        <p>Sweet. Du hast bereits die Hälfte meiner Fragen beantwortet. </p>
        <p>Wie viele Tage darfst du im Fabmobil verbringen?</p>
      </div>
      <div className="flex-vertical-center">
        <DoubleColumnContainer>
          {ANSWER_OPTIONS.map((option) => (
            <Fabutton key={option} onClick={() => navigate(nextRoute)}>
              {option}
            </Fabutton>
          ))}
        </DoubleColumnContainer>
      </div>
      <RobiGif src={robiSprung} style={{ left: -100, bottom: 0 }} />
    </>
  );
}

export default Screen;