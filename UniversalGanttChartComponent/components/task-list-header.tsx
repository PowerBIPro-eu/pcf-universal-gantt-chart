import * as React from "react";

export const createHeaderLocal = (
  recordDisplayName: string,
  startDisplayName: string,
  endDisplayName: string
): React.FunctionComponent<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
}> => {
  return ({ headerHeight, fontFamily, fontSize, rowWidth }) => {
    const rowWidthNumber = Number(rowWidth.slice(0, -2));
    console.log(rowWidthNumber);
    const mainRowWidth = (rowWidthNumber * 1.5) + "px"
    return (
      <div
        className="Gantt-Table"
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize,
        }}
      >
        <div
          className="Gantt-Table_Header"
          style={{
            height: headerHeight - 2,
          }}
        >
          <div className="Gantt-Table_Header-Item Gantt-Header_Select__Icon" />
          <div
            className="Gantt-Table_Header-Separator"
            style={{
              height: headerHeight * 0.5,
              marginTop: headerHeight * 0.2,
            }}
          />
          <div
            className="Gantt-Table_Header-Item"
            style={{
              minWidth: mainRowWidth,
            }}
          >
            &nbsp;{recordDisplayName}
          </div>
          <div
            className="Gantt-Table_Header-Separator"
            style={{
              height: headerHeight * 0.5,
              marginTop: headerHeight * 0.2,
            }}
          />
          <div
            className="Gantt-Table_Header-Item"
            style={{
              minWidth: rowWidth,
            }}
          >
            &nbsp;{startDisplayName}
          </div>
          <div
            className="Gantt-Table_Header-Separator"
            style={{
              height: headerHeight * 0.5,
              marginTop: headerHeight * 0.25,
            }}
          />
          <div
            className="Gantt-Table_Header-Item"
            style={{
              minWidth: rowWidth,
            }}
          >
            &nbsp;{endDisplayName}
          </div>
          <div
            className="Gantt-Table_Header-Separator"
            style={{
              height: headerHeight * 0.5,
              marginTop: headerHeight * 0.25,
            }}
          />
          <div
            className="Gantt-Table_Header-Item"
            style={{
              minWidth: "125px",
            }}
          >
            &nbsp;Progress
          </div>
        </div>
      </div>
    );
  };
};
