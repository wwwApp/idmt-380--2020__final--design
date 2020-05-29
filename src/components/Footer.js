import React, { Component } from "react";
import styled from "styled-components";
import { TextInput } from "./TextInput";
import { Button } from "./Button";

export const Footer = (props) => {
  const { btnText, title, description, noNewsletter } = props;

  return (
    <FooterWrapper className="footer">
      <div className="o-container footer__inner">
        <div className="footer__sub-wrapper">
          <h2>{title}</h2>
          <p>{description}</p>
          {!noNewsletter && (
            <form className="footer__sub-form">
              <label>
                <span className="u-sr-only">Newsletter subscription</span>
                <TextInput placeholder="enter your email"></TextInput>
              </label>
              <Button>{btnText ? btnText : "Submit"}</Button>
            </form>
          )}
        </div>
        <div className="footer__copyright">KK © 2020</div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  .footer__inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 4rem 1rem 3rem;
  }

  .footer__copyright {
    text-align: center;
  }

  .footer__sub-wrapper {
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 1rem;

      @media only screen and (min-width: 768px) {
        width: 40%;
      }
    }
  }

  .footer__sub-form {
    display: flex;
    flex-direction: row;

    label > * {
      padding: 0;
    }

    & > * {
      padding: 0;
    }

    input {
      min-width: 0;

      @media only screen and (min-width: 768px) {
        width: 20rem;
      }
    }

    button {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;
