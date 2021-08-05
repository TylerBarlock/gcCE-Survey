import { Fragment, useState } from "react";
import * as wijmo from "@grapecity/wijmo";
import * as wjChart from "@grapecity/wijmo.react.chart";
import "@grapecity/wijmo.styles/wijmo.css";
import "./PollResults.css";

const PollResults = (props) => {
  wijmo.setLicenseKey("set distribution key here later");

  const dummyData = [
    { id: 1, text: "This one?", numVotes: 5 },
    { id: 2, text: "Maybe this one.", numVotes: 7 },
    { id: 3, text: "Or... Maybe this one?", numVotes: 3 },
    { id: 4, text: "Hmmm... How about this?", numVotes: 2 },
  ];

  const [resultData, setResultData] = useState({
    data: dummyData,
    sum: dummyData.map((c) => c.numVotes).reduce((sum, cur) => sum + cur),
    palette: [],
  });

  const getLabelContent = (ht) => {
    return wijmo.format("{name} {val:p2}", {
      //name: ht.name,
      val: ht.value / resultData.sum,
    });
  };

  console.log(dummyData);

  return (
    <Fragment>
      <wjChart.FlexPie
        itemsSource={resultData.data}
        header="Poll Results"
        bindingName="text"
        binding="numVotes"
        palette={resultData.palette}
      >
        <wjChart.FlexPieDataLabel
          content={getLabelContent}
        ></wjChart.FlexPieDataLabel>
      </wjChart.FlexPie>
    </Fragment>
  );
};

export default PollResults;
