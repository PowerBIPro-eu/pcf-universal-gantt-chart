import * as React from "react";
import { Task } from "gantt-task-react";
import { Tag } from "@fluentui/react-tags";
import { WarningFilled } from "@fluentui/react-icons/lib/icons/chunk-4";
import { CheckmarkCircle20Filled, CircleHalfFill20Regular, Circle20Regular } from "@fluentui/react-icons";

export const createTaskListLocal = (
    includeTime: boolean,
    onClick: (task: Task) => void,
    formatDateShort: (value: Date, includeTime?: boolean) => string
): React.FunctionComponent<{
    rowHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: string;
    locale: string;
    tasks: Task[];
    selectedTaskId: string;
    setSelectedTask: (taskId: string) => void;
    onExpanderClick: (task: Task) => void;
}> => {
    return ({
        rowHeight,
        rowWidth,
        tasks,
        fontFamily,
        fontSize,
        locale,
        selectedTaskId,
        setSelectedTask,
        onExpanderClick,
    }) => {
        return (
            <div
                className="Gantt-Task-List_Wrapper"
                style={{
                    fontFamily: fontFamily,
                    fontSize: fontSize,
                }}
            >
                {tasks.map((t) => {
                    let expanderSymbol = "";
                    if (t.hideChildren === false) {
                        expanderSymbol = "▼";
                    } else if (t.hideChildren === true) {
                        expanderSymbol = "▶";
                    }
                    return (
                        <div
                            className="Gantt-Task-List_Row"
                            style={{ height: rowHeight }}
                            key={`${t.id}row`}
                            onClick={() => {
                                if (selectedTaskId === t.id) {
                                    setSelectedTask("");
                                } else {
                                    setSelectedTask(t.id);
                                }
                            }}
                        >
                            <div className="Gantt-Task-List_Cell">
                                <div
                                    className={
                                        selectedTaskId === t.id
                                            ? "Gantt-Task-List-Checkbox__Checked"
                                            : "Gantt-Task-List-Checkbox"
                                    }
                                ></div>
                            </div>
                            {/**
                             * Name
                             */}
                            <div
                                className="Gantt-Task-List_Cell"
                                style={{
                                    minWidth: rowWidth,
                                    maxWidth: rowWidth,
                                }}
                                title={t.name}
                            >
                                <div className="Gantt-Task-List_Name-Container">
                                    <div
                                        className={
                                            expanderSymbol
                                                ? "Gantt-Task-List_Cell__Expander"
                                                : "Gantt-Task-List_Cell__Empty-Expander"
                                        }
                                        onClick={(e) => {
                                            onExpanderClick(t);
                                            e.stopPropagation();
                                        }}
                                    >
                                        {expanderSymbol}
                                    </div>
                                    <div
                                        className="Gantt-Task-List_Cell__Link"
                                        onClick={() => onClick(t)}
                                    >
                                        {t.name}
                                    </div>
                                </div>
                            </div>
                            {/**
                             * Start Time
                             */}
                            <div
                                className="Gantt-Task-List_Cell"
                                style={{
                                    minWidth: rowWidth,
                                    maxWidth: rowWidth,
                                }}
                                title={formatDateShort(t.start, includeTime)}
                            >
                                {t.errorFlag &&
                                (t.errorFlag === 717170002 ||
                                    t.errorFlag === 717170003) ? (
                                    <Tag
                                        style={{
                                            backgroundColor: "#E81123",
                                            color: "white",
                                        }}
                                        icon={
                                            <WarningFilled
                                                style={{ color: "white" }}
                                            />
                                        }
                                    >
                                        {formatDateShort(t.end, includeTime)}
                                    </Tag>
                                ) : (
                                    <>
                                        &nbsp;
                                        {formatDateShort(t.end, includeTime)}
                                    </>
                                )}
                            </div>
                            {/**
                             * End Time
                             */}
                            <div
                                className="Gantt-Task-List_Cell"
                                style={{
                                    minWidth: rowWidth,
                                    maxWidth: rowWidth,
                                }}
                                title={formatDateShort(t.end, includeTime)}
                            >
                                {t.errorFlag &&
                                (t.errorFlag === 717170001 ||
                                    t.errorFlag === 717170003) ? (
                                    <Tag
                                        style={{
                                            backgroundColor: "#E81123",
                                            color: "white",
                                        }}
                                        icon={
                                            <WarningFilled
                                                style={{ color: "white" }}
                                            />
                                        }
                                    >
                                        {formatDateShort(t.end, includeTime)}
                                    </Tag>
                                ) : (
                                    <>
                                        &nbsp;
                                        {formatDateShort(t.end, includeTime)}
                                    </>
                                )}
                            </div>
                            {/* Progress Status */}
                            <div
                                className="Gantt-Task-List_Cell"
                                style={{
                                    minWidth: "125px",
                                    maxWidth: "125px",
                                }}
                                title={t.statusOption === 717170000
                                    ? "Not Started"
                                    : t.statusOption === 717170001
                                    ? "In Progress"
                                    : "Done"}
                            >
                                {t.statusOption === 717170000
                                    ? <><Circle20Regular color="#0f6cbd"/> <span>&nbsp;Not Started</span></>
                                    : t.statusOption === 717170001
                                    ? <><CircleHalfFill20Regular color="#0f6cbd" /> <span>&nbsp;In Progress</span></>
                                    : <><CheckmarkCircle20Filled color="#0f6cbd" /> <span>&nbsp;Done</span></>}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
};

// (
//     <Tag
//         style={{
//             backgroundColor: "#E81123",
//             color: "white",
//         }}
//         icon={
//             <WarningFilled
//                 style={{ color: "white" }}
//             />
//         }
//     >
//         &nbsp;
//         {formatDateShort(t.end, includeTime)}
//     </Tag>
// )
