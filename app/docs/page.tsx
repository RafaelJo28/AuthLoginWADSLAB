"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function DocsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>API Documentation</h1>
      <SwaggerUI url="/api/docs" />
    </div>
  );
}