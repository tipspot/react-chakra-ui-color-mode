import logo from "./logo.svg"
import { Button, Container, Heading, Image, useColorMode, VStack } from "@chakra-ui/react"

function App() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Container>
			<VStack>
				<Image src={logo} w={200} h={200} mb={6} />
				<Heading fontSize={"lg"} mb={6}>
					Now its in
				</Heading>
				<Heading textTransform={"uppercase"} pb={6}>
					{colorMode === "light" ? "Dark" : "Light"} mode
				</Heading>
				<Button colorScheme={"cyan"} onClick={toggleColorMode}>
					Toggle Color Mode
				</Button>
			</VStack>
		</Container>
	)
}

export default App
