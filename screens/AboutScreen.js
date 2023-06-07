import React from "react";
import { ScrollView } from "react-native";
import { Avatar, Card, ListItem, Text } from "react-native-elements";
import { PARTNERS } from "../shared/partners";
import { useState } from "react";
import Mission from "./Mission";

const AboutScreen = () => {
  const [partners, setPartners] = useState(PARTNERS);

  return (
    <ScrollView>
      
      <Mission />

      <Card>
        <Card.Title>Community Partners</Card.Title>
         <Card.Divider />
          <Text>
          {partners.map((partner) => {
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
          </Text>
      </Card>
    </ScrollView>
  )
};

export default AboutScreen;
