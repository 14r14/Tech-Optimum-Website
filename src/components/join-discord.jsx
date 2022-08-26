import { Flex, Text, Button, Heading, IconButton, Box } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

export default function JoinDiscord() {
  return (
    <>
      <Flex flexDir="column" width="100vw" padding="5vw">
        <Flex alignItems="center">
          <Heading display="flex">
            Join Our
            <Text mx="15px" color="#738BDA">
              Discord
            </Text>
            Server
          </Heading>
          <IconButton
            marginTop="7px"
            marginLeft="10px"
            icon={<BsArrowUpRight />}
            background="transparant"
            color="#1B76FF"
            fontSize="3xl"
          ></IconButton>
        </Flex>
        <Text marginY="40px" fontSize="xl">
          A public community. We value innovation, which is why we <br />{" "}
          created a platform for you to share your innovations
        </Text>
        <Heading marginTop="60px">Channels for your needs</Heading>
        <Flex
          marginTop="20px"
          width="70vw"
          height="167px"
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        >
          <Flex
            padding="40px"
            flexDir="column"
            justifyContent="center"
            bg="#4559E9"
            rounded="3xl"
            marginBottom="20px"
            marginRight="20px"
            borderWidth="5px"
            transition={"500ms"}
            borderColor="#4559E9"
            _hover={{
              borderColor: "#79BFF8",
            }}
          >
            <Heading
              fontSize="3xl"
              transition="500ms"
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              #General
            </Heading>
            <Text>Discuss with other enthusiasts</Text>
          </Flex>
          <Flex
            padding="40px"
            flexDir="column"
            justifyContent="center"
            bg="#56D16A"
            rounded="3xl"
            marginBottom="20px"
            marginLeft="20px"
            borderWidth="5px"
            transition={"500ms"}
            borderColor="#56D16A"
            _hover={{
              borderColor: "#CBEED0",
            }}
          >
            <Heading
              fontSize="3xl"
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              #Coding-memes
            </Heading>
            <Text>Get your daily dose of laughter</Text>
          </Flex>
        </Flex>
        <Flex width="70vw" height="400px">
          <Flex
            padding="40px"
            flexDir="column"
            justifyContent="center"
            rounded="3xl"
            marginTop="20px"
            marginRight="20px"
            width="80%"
            className="cs-help"
            borderWidth="5px"
            transition={"500ms"}
            borderColor="transparent"
            _hover={{
              borderColor: "#FBDEA0",
            }}
          >
            <Heading
              fontSize="5xl"
              _hover={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              #CS-help
            </Heading>
            <Text fontSize="2xl">Get help with your CS problems</Text>
          </Flex>
          <Flex
            flexDir="column"
            justifyContent="center"
            bg="#05445E"
            rounded="3xl"
            marginTop="20px"
            marginLeft="20px"
            width="25%"
            borderWidth="5px"
            transition={"500ms"}
            borderColor="transparent"
            _hover={{
              borderColor: "#94D3ED",
            }}
          >
            <Flex flexDir="column" transform="rotate(90deg)">
              <Heading
                fontSize="3xl"
                _hover={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                #Networking
              </Heading>
              
              <Text>Build your network</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
