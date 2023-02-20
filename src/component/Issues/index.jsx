import React, { useState, useEffect } from "react";
import { issueApi } from "../../services/issueService";
import { LoaderIssue } from "../Skeleton/index.jsx";
import { ErrorMessage } from "../DefaultText/error.jsx";
import { EmptyMessage } from "../DefaultText/empty.jsx";
import { useSelector } from "react-redux";
import Button from "@atlaskit/button";
import TableTree, { Header, Headers } from "@atlaskit/table-tree";
import { IssuesList } from "./issue-item.jsx";

export const Issues = () => {
  const [issues, setIssues] = useState([]);

  const [filter, setFilter] = useState(true);

  const { project } = useSelector((state) => state.toDo);

  const { data, isLoading, error } = issueApi.useGetIssuesQuery(project);

  useEffect(() => {
    if (data) setIssues(data.issues);
  }, [data]);

  if (isLoading) return <LoaderIssue />;

  if (error) return <ErrorMessage />;

  if (data.length === 0) return <EmptyMessage />;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <h2>Todo List</h2>
        <Button onClick={() => setFilter((prev) => !prev)}>Filter</Button>
      </div>
      <div className="issues">
        <TableTree>
          <Headers>
            <Header width={100}>Status</Header>
            <Header width={200}>Title </Header>
            <Header width={200}>Description</Header>
            <Header width={200}>Status text</Header>
            <Header width={200}>Delete</Header>
          </Headers>
          <IssuesList
            setIssues={setIssues}
            issues={issues.filter(
              (issue) => issue.fields.status.name !== "Done"
            )}
          />
          {filter && (
            <div style={{ paddingTop: 16 }}>
              <Headers>
                <Header width={100}>Done</Header>
              </Headers>
              <IssuesList
                setIssues={setIssues}
                issues={issues.filter(
                  (issue) => issue.fields.status.name === "Done"
                )}
              />
            </div>
          )}
        </TableTree>
      </div>
    </>
  );
};
