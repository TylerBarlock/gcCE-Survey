//This component is for testing the react-jsonschema-form library. It seems viable, and it solves the problems I was stuck on using base react but I don't think it's the best solution in the end.

import { Fragment } from "react";
import Form from "@rjsf/core";

const formTest =
{
    title: "Create a poll",
    type: "object",
    properties: {
        title: {
            type: "string",
            title: "Title"
        },
        description: {
            type: "string",
            title: "Description (optional)"
        },
        answerOptions: {
            type: "array",
            title: "Answer Options",
            minItems: 2,
            items: {
                type: "string"
            }
        },
        options: {
            title: "Options",
            type: "object",
            properties: {
                private: {
                    type: "boolean",
                    title: "Private (only via direct link)",
                },
                multiple: {
                    type: "boolean",
                    title: "Allow multiple choices",
                },
                mustLogin: {
                    type: "boolean",
                    title: "Must log in to vote",
                },
                ipCheck: {
                    type: "boolean",
                    title: "Check for duplicate IP",
                }
            }
        }
    }
}

const formUI = {
    title: {
        "ui:autofocus": true,
        classNames: "grid grid-cols-1 mb-4 formtext text-left",
    },
    description: {
        classNames: "grid grid-cols-1 mb-2 formtext text-left",
    },
    answerOptions: {
        classNames: "grid grid-cols-1 mb-2 formtext text-left",
        options: {
            classNames: "mb-2",
        }
    },
    options: {
        classNames: "grid grid-cols-1 mb-2 formtext text-left",
        private: {
            classNames: "mx-3",
            title: {
                classNames: "mx-3"
            },
        },
        multiple: {
            classNames: "mx-3"
        },
        mustLogin: {
            classNames: "mx-3"
        },
        ipCheck: {
            classNames: "mx-3"
        },
    }
}

const PollCreateAlt = () => {
    return(
        <Fragment>
            <Form schema={formTest} uiSchema={formUI} />
        </Fragment>
    )
};

export default PollCreateAlt;