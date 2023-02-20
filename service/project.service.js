import fetch from "node-fetch";

class ProjectService {
  async query(method, url, body = null) {
    return await fetch(`${process.env.baseUrl}${url}`, {
      method,
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.email}:${process.env.key}`
        ).toString("base64")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body,
    });
  }

  async getIssues(project) {
    const bodyData = JSON.stringify({
      expand: ["names", "schema", "operations"],
      fields: ["summary", "status", "assignee"],
      fieldsByKeys: true,
      jql: `project = ${project}`,
      maxResults: 15,
      startAt: 0,
    });
    const data = await this.query("POST", "/rest/api/3/search", bodyData);
    return await data.json();
  }

  async getProjects() {
    const data = await this.query("GET", "/rest/api/3/project/recent");
    return await data.json();
  }
}

export default new ProjectService();
