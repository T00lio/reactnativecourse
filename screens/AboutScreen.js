import React from "react";
import { ScrollView } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import { PARTNERS } from "../shared/partners";
import { useState } from "react";
import Mission from "./Mission";

const AboutScreen = () => {
  const [partner, setPartner] = useState(PARTNERS);

  return (
    <ScrollView>
      
      <Mission />

      <Card>
        <Card.Title>Community Partners</Card.Title>
        <Card.Divider />
            {PARTNERS.map((partner) => {
                <ListItem key={partner.id}>
                    <Avatar rounded source={partner.image} />
                    <ListItem.Content>
                    <ListItem.Title>
                        {partner.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {partner.description}
                    </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>;
            })}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;
