import { Box } from '@chakra-ui/react'

interface ContainerProps {
	children: JSX.Element | JSX.Element[];
}

export const Container = ({ children }: ContainerProps) => {
	return (
		<Box marginLeft='auto' marginRight='auto' maxWidth='1280px'>
			<>
				{children}
			</>
		</Box>
	)
}