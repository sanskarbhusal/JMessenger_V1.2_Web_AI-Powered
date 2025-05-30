import React from "react";
import NavBar from "./NavBar";
import ContactList from "./ContactList";
import ChatBody from "./ChatBody";
import { RouteComponentProps, withRouter } from "react-router-dom";
type Props = RouteComponentProps;

class Chat extends React.Component<Props> {
  render() {
    return (
      <div className="h-full w-full flex flex-col sm:flex-row">
        <div className="h-full w-full flex flex-col sm:w-fit">
          <NavBar />
          <ContactList />
        </div>
        <ChatBody />
      </div>
    );
  }
}
export default withRouter(Chat);
