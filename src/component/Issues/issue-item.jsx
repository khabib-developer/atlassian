import React from "react";
import { Checkbox } from "@atlaskit/checkbox";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import { Cell, Row, Rows } from "@atlaskit/table-tree";
export const IssuesList = ({ issues, setIssues }) => {
  const handleChange = (issue, name) => {
    setIssues((prev) => [
      ...prev.filter((item) => issue.id !== item.id),
      {
        ...issue,
        fields: {
          ...issue.fields,
          status: {
            ...issue.fields.status,
            name,
          },
        },
      },
    ]);
  };
  const handleDelete = (id) => {
    setIssues((prev) => [...prev.filter((item) => id !== item.id)]);
  };
  return (
    <>
      <Rows
        items={issues.sort((a, b) => +a.id - +b.id)}
        render={(issue) => (
          <Row>
            <Cell singleLine>
              {
                <Checkbox
                  onChange={() =>
                    handleChange(
                      issue,
                      issue.fields.status.name === "Done" ? "To Do" : "Done"
                    )
                  }
                  isChecked={issue.fields.status.name === "Done"}
                />
              }
            </Cell>
            <Cell>
              <span
                style={{
                  textDecoration:
                    issue.fields.status.name === "Done" ? "line-through" : "",
                }}
              >
                {issue.fields.summary}
              </span>
            </Cell>
            <Cell>{issue.fields.description}</Cell>
            <Cell>{issue.fields.status.name}</Cell>
            <Cell onClick={() => handleDelete(issue.id)}>{<TrashIcon />}</Cell>
          </Row>
        )}
      />
    </>
  );
};
