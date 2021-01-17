import React from "react";
import "./base.css";
import Container from "./container";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <h1 style={{ fontWeight: 800, fontSize: 54, marginBottom: 10 }}>
          KASA Blog
        </h1>
        <div style={{ marginBottom: 20, fontSize: 24 }}>
          <b style={{ color: "#1d6ff2" }}>카사 블로그</b> 데모
        </div>
        {children}
      </Container>
    );
  }
}

export default Template;
