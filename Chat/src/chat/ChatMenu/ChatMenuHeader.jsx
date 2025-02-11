/* eslint-disable react/prop-types */
import { Header, Button } from "semantic-ui-react";

export default function ChatMenuHeader({
  handleShowContactsList,
  handleShowCreateChat,
  handleShowAddContact,
}) {
  return (
    <>
      <Header as="h5">Chats</Header>
      <Button
        circular
        size="tiny"
        color=""
        icon="users"
        onClick={handleShowContactsList}
      />{" "}
      <Button
        circular
        size="tiny"
        color=""
        icon="chat"
        onClick={handleShowCreateChat}
      />{" "}
      <Button
        circular
        size="tiny"
        color=""
        icon="user"
        onClick={handleShowAddContact}
      />
    </>
  );
}
